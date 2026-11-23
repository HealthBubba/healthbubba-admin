import { Head, router, useForm } from '@inertiajs/react';
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
    blue: 'bg-blue-100 text-blue-700',
};

const Badge = ({ children, tone = 'gray' }) => (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>
);

function SuspendModal({ modal, item }) {
    const form = useForm({
        days: 7,
        reason: 'Missed a scheduled consultation without an agreed reschedule.',
        message_to_doctor: '',
        notify: true,
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(route('no-show-flags.suspend', item.appointment_id), {
            preserveScroll: true,
            onSuccess: () => modal.close(),
        });
    };

    return (
        <Modal {...modal}>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <p className="text-lg font-medium">Suspend doctor</p>
                    <p className="text-sm text-muted">
                        {item.doctor?.full_name ?? 'Doctor'} — appointment #{item.appointment_id}
                    </p>
                </div>

                <div>
                    <Label>Suspension length (days)</Label>
                    <Input
                        type="number"
                        min="1"
                        max="365"
                        value={form.data.days}
                        onChange={(e) => form.setData('days', e.currentTarget.value)}
                    />
                    <InputError message={form.errors.days} />
                </div>

                <div>
                    <Label>Internal reason</Label>
                    <Input value={form.data.reason} onChange={(e) => form.setData('reason', e.currentTarget.value)} />
                    <InputError message={form.errors.reason} />
                </div>

                <div>
                    <Label>Message to doctor (optional — a default message is used if left blank)</Label>
                    <Input
                        value={form.data.message_to_doctor}
                        onChange={(e) => form.setData('message_to_doctor', e.currentTarget.value)}
                        placeholder="Shown to the doctor in-app and by email"
                    />
                    <InputError message={form.errors.message_to_doctor} />
                </div>

                <label className="flex items-center gap-1.5 text-sm">
                    <input
                        type="checkbox"
                        checked={form.data.notify}
                        onChange={(e) => form.setData('notify', e.currentTarget.checked)}
                    />
                    Notify the doctor (push + email)
                </label>

                <div className="flex justify-end gap-2">
                    <Button type="button" onClick={modal.close} className="btn-light">Cancel</Button>
                    <Button type="submit" loading={form.processing} disabled={form.processing} className="btn-danger">
                        Suspend doctor
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

function NoShowFlagRow({ item }) {
    const modal = useModal();
    const [busy, setBusy] = useState(false);

    const dismiss = () => {
        if (!window.confirm(`Dismiss the no-show flag for appointment #${item.appointment_id}? No further action will be taken.`)) return;
        setBusy(true);
        router.post(route('no-show-flags.dismiss', item.appointment_id), {}, { preserveScroll: true, onFinish: () => setBusy(false) });
    };

    return (
        <tr>
            <td>
                #{item.appointment_id}
                <div className="text-xs text-muted">{item.date}</div>
            </td>
            <td>
                {item.patient?.full_name ?? '—'}
                <div className="text-xs text-muted">{item.patient?.phone ?? item.patient?.email ?? ''}</div>
            </td>
            <td>{item.doctor?.full_name ?? '—'}</td>
            <td>{naira(item.scheduled_payout_amount)}</td>
            <td>
                {item.is_sponsored_consultation ? <Badge tone="blue">Sponsor-funded</Badge> : <Badge tone="gray">Out-of-pocket</Badge>}
            </td>
            <td className="space-x-2">
                <Button onClick={dismiss} disabled={busy} className="btn-light text-sm py-1.5 px-3">Dismiss</Button>
                <Button onClick={modal.open} className="btn-danger text-sm py-1.5 px-3">Suspend doctor</Button>
                <SuspendModal modal={modal} item={item} />
            </td>
        </tr>
    );
}

export default function ({ items = [] }) {
    return (
        <AuthenticatedLayout title="Flagged No-Shows">
            <Head title="Flagged No-Shows" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl">
                    <h2 className="font-semibold">Doctor no-shows</h2>
                    <p className="text-sm text-muted">
                        The doctor's payout was forfeited and the patient made whole automatically. Review each case
                        and either dismiss it (one-off/technical issue) or suspend the doctor. {items.length} flagged
                        case{items.length === 1 ? '' : 's'}.
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
                                    <th>Payout forfeited</th>
                                    <th>Funding</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center py-8 text-muted">
                                            No flagged no-shows 🎉
                                        </td>
                                    </tr>
                                )}
                                {items.map((item) => (
                                    <NoShowFlagRow key={item.appointment_id} item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
