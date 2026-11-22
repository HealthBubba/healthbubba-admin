import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';
import useModal from '@/Hooks/useModal';
import Button from '@/Components/Button/Button';
import Input from '@/Components/Form/Input';
import Label from '@/Components/Form/Label';
import InputError from '@/Components/Form/InputError';
import { useState } from 'react';

const naira = (n) => (n == null ? '—' : '₦' + Number(n).toLocaleString());

const tones = {
    gray: 'bg-gray-100 text-gray-600',
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
};

const Badge = ({ children, tone = 'gray' }) => (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>
);

const CHANNELS = [
    { key: 'push', label: 'Push' },
    { key: 'email', label: 'Email' },
    { key: 'sms', label: 'SMS' },
];

function ResolveModal({ modal, item }) {
    const [action, setAction] = useState('release');
    const [channels, setChannels] = useState(['push']);

    const form = useForm({
        action: 'release',
        new_payout_amount: '',
        reason: '',
        notify_channels: ['push'],
    });

    const setAndSubmit = (e) => {
        e.preventDefault();
        form.setData('action', action);
        form.setData('notify_channels', action === 'release' ? channels : undefined);
        form.post(route('scheduled-review.resolve', item.appointment_id), {
            preserveScroll: true,
            onSuccess: () => modal.close(),
        });
    };

    const toggleChannel = (key) => {
        setChannels((prev) => (prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]));
    };

    return (
        <Modal {...modal}>
            <div className="space-y-4">
                <div>
                    <p className="text-lg font-medium">Resolve case #{item.appointment_id}</p>
                    <p className="text-sm text-muted">
                        {item.patient?.full_name ?? 'Patient'} / {item.doctor?.full_name ?? 'Doctor'} — current offer {naira(item.scheduled_payout_amount)}
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => setAction('negotiate')}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium border-2 ${action === 'negotiate' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
                    >
                        Negotiate (resend)
                    </button>
                    <button
                        type="button"
                        onClick={() => setAction('release')}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium border-2 ${action === 'release' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
                    >
                        Release booking
                    </button>
                </div>

                <form onSubmit={setAndSubmit} className="space-y-4">
                    {action === 'negotiate' && (
                        <div>
                            <Label>Revised payout (₦)</Label>
                            <Input
                                type="number"
                                min="1"
                                value={form.data.new_payout_amount}
                                onChange={(e) => form.setData('new_payout_amount', e.currentTarget.value)}
                            />
                            <InputError message={form.errors.new_payout_amount} />
                        </div>
                    )}

                    <div>
                        <Label>{action === 'negotiate' ? 'Note to doctor (optional)' : "Reason — shown to the patient"}</Label>
                        <Input
                            value={form.data.reason}
                            onChange={(e) => form.setData('reason', e.currentTarget.value)}
                            placeholder={action === 'negotiate' ? 'e.g. Best we can offer right now' : "e.g. We couldn't confirm this consultation"}
                        />
                        <InputError message={form.errors.reason} />
                    </div>

                    {action === 'release' && (
                        <div>
                            <Label>Notify the patient via</Label>
                            <div className="flex gap-3 mt-1">
                                {CHANNELS.map((c) => (
                                    <label key={c.key} className="flex items-center gap-1.5 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={channels.includes(c.key)}
                                            onChange={() => toggleChannel(c.key)}
                                        />
                                        {c.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-end gap-2">
                        <Button type="button" onClick={modal.close} className="btn-light">Cancel</Button>
                        <Button type="submit" loading={form.processing} disabled={form.processing} className="btn-primary">
                            {action === 'negotiate' ? 'Resend offer' : 'Release booking'}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

function ScheduledReviewRow({ item }) {
    const modal = useModal();

    return (
        <tr>
            <td>#{item.appointment_id}</td>
            <td>
                {item.patient?.full_name ?? '—'}
                <div className="text-xs text-muted">{item.patient?.phone ?? item.patient?.email ?? ''}</div>
            </td>
            <td>{item.doctor?.full_name ?? '—'}</td>
            <td>{naira(item.scheduled_payout_amount)}</td>
            <td>
                {item.is_sponsored_consultation ? <Badge tone="blue">Sponsor-funded</Badge> : <Badge tone="gray">Out-of-pocket</Badge>}
            </td>
            <td className="text-sm text-muted">{item.doctor_response_deadline ?? '—'}</td>
            <td>
                <Button onClick={modal.open} className="btn-primary text-sm py-1.5 px-3">Resolve</Button>
                <ResolveModal modal={modal} item={item} />
            </td>
        </tr>
    );
}

export default function ({ items = [] }) {
    return (
        <AuthenticatedLayout title="Scheduled Consultation Review">
            <Head title="Scheduled Consultation Review" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl">
                    <h2 className="font-semibold">Admin review</h2>
                    <p className="text-sm text-muted">
                        Sponsored scheduled consultations where the doctor declined the offered payout. Negotiate a
                        revised offer or release the booking so the patient can book elsewhere. {items.length} case
                        {items.length === 1 ? '' : 's'} awaiting action.
                    </p>
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="overflow-x-auto relative">
                        <table className="border-b w-full">
                            <thead>
                                <tr>
                                    <th>Appointment</th>
                                    <th>Patient</th>
                                    <th>Doctor</th>
                                    <th>Offer</th>
                                    <th>Funding</th>
                                    <th>Deadline</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="text-center py-8 text-muted">
                                            Nothing awaiting review 🎉
                                        </td>
                                    </tr>
                                )}
                                {items.map((item) => (
                                    <ScheduledReviewRow key={item.appointment_id} item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
