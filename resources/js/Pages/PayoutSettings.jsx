import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button/Button';
import Input from '@/Components/Form/Input';
import Label from '@/Components/Form/Label';
import InputError from '@/Components/Form/InputError';

const naira = (n) => (n == null ? '—' : '₦' + Number(n).toLocaleString());

const tones = {
    gray: 'bg-gray-100 text-gray-600',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
};

const Badge = ({ children, tone = 'gray' }) => (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>
);

const statusBadge = (status) =>
    status === 'current' ? <Badge tone="green">Current</Badge>
        : status === 'draft' ? <Badge tone="amber">Scheduled</Badge>
            : <Badge tone="gray">Superseded</Badge>;

export default function ({ current = null, history = [] }) {
    const form = useForm({
        amount: '',
        effective_from: '',
        reason: '',
    });

    const save = (e) => {
        e.preventDefault();
        form.post(route('payout-settings.update'), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    };

    return (
        <AuthenticatedLayout title="Sponsor Scheduled Consultation Payout">
            <Head title="Sponsor Scheduled Consultation Payout" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl flex items-center justify-between gap-3 flex-wrap">
                    <div>
                        <h2 className="font-semibold">Standard payout — Sponsor Account scheduled consultations</h2>
                        <p className="text-sm text-muted">
                            Changes apply only to new requests; consultations already offered to a doctor keep their
                            original payout.
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted">Current</p>
                        <p className="text-2xl font-semibold">{naira(current?.amount)}</p>
                    </div>
                </div>

                <div className="card p-4 rounded-xl">
                    <h3 className="font-medium mb-3">Set a new payout</h3>
                    <form onSubmit={save} className="grid gap-4 md:grid-cols-3">
                        <div>
                            <Label>Amount (₦)</Label>
                            <Input
                                type="number"
                                min="1"
                                step="1"
                                value={form.data.amount}
                                onChange={(e) => form.setData('amount', e.currentTarget.value)}
                                placeholder="e.g. 5000"
                            />
                            <InputError message={form.errors.amount} />
                        </div>
                        <div>
                            <Label>Effective from (optional)</Label>
                            <Input
                                type="datetime-local"
                                value={form.data.effective_from}
                                onChange={(e) => form.setData('effective_from', e.currentTarget.value)}
                            />
                            <p className="text-xs text-muted mt-1">Leave blank to apply immediately.</p>
                            <InputError message={form.errors.effective_from} />
                        </div>
                        <div>
                            <Label>Reason (internal note, optional)</Label>
                            <Input
                                value={form.data.reason}
                                onChange={(e) => form.setData('reason', e.currentTarget.value)}
                                placeholder="e.g. Cost review Q1"
                            />
                            <InputError message={form.errors.reason} />
                        </div>
                        <div className="md:col-span-3">
                            <Button className="btn-primary" loading={form.processing} disabled={form.processing}>
                                Save payout setting
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="p-4">
                        <h3 className="font-medium">History</h3>
                    </div>
                    <div className="overflow-x-auto relative">
                        <table className="border-b w-full">
                            <thead>
                                <tr>
                                    <th>Effective from</th>
                                    <th>Previous</th>
                                    <th>New</th>
                                    <th>Status</th>
                                    <th>Changed by</th>
                                    <th>Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center py-8 text-muted">
                                            No changes recorded yet.
                                        </td>
                                    </tr>
                                )}
                                {history.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.effective_from}</td>
                                        <td>{naira(row.previous_amount)}</td>
                                        <td className="font-medium">{naira(row.amount)}</td>
                                        <td>{statusBadge(row.status)}</td>
                                        <td>{row.changed_by_name ?? '—'}</td>
                                        <td className="text-sm text-muted">{row.reason ?? '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
