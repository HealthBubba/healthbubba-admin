import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const naira = (n) => (n == null ? '—' : '₦' + Number(n).toLocaleString());

const tones = {
    gray: 'bg-gray-100 text-gray-600',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
    blue: 'bg-blue-100 text-blue-700',
};

const Badge = ({ children, tone = 'gray' }) => (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>
);

const ACTIONS = [
    { key: 'complete', label: 'Complete + credit doctor (pending)' },
    { key: 'settle_doctor', label: 'Settle doctor now (→ cleared)' },
    { key: 'release_refund', label: 'Release patient refund' },
    { key: 'cancel_no_refund', label: 'Close as cancelled (no refund)' },
    { key: 'mark_reviewed', label: 'Mark reviewed (no money)' },
];

export default function ({ items = [], count = 0 }) {
    const [busy, setBusy] = useState(null);

    const disabledFor = (item, action) => {
        if (action === 'settle_doctor') return item.doctor_cleared || !(item.doctor_share > 0);
        if (action === 'release_refund') return item.patient_refunded;
        return false;
    };

    const run = (item, action) => {
        const found = ACTIONS.find((a) => a.key === action);
        const who = `${item.patient?.name ?? 'patient'} / ${item.doctor?.name ?? 'doctor'}`;
        if (!window.confirm(`${found.label}\n\nAppointment #${item.appointment_id} — ${who}\n\nProceed?`)) return;
        setBusy(`${item.appointment_id}:${action}`);
        router.post(
            route('reconciliation.action', item.appointment_id),
            { action },
            { preserveScroll: true, onFinish: () => setBusy(null) },
        );
    };

    const doctorBadge = (item) =>
        item.doctor_cleared ? <Badge tone="green">Cleared</Badge>
            : item.doctor_credited_pending ? <Badge tone="amber">Pending</Badge>
                : <Badge tone="red">Unpaid</Badge>;

    return (
        <AuthenticatedLayout title="Appointment Reconciliation">
            <Head title="Appointment Reconciliation" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl">
                    <h2 className="font-semibold">Needs reconciliation</h2>
                    <p className="text-sm text-muted">
                        Paid consultations cancelled on a join dispute where the refund was held and/or the doctor was
                        left unpaid. {count} item{count === 1 ? '' : 's'}.
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
                                    <th>Paid</th>
                                    <th>Doctor share</th>
                                    <th>Channel</th>
                                    <th>Doctor</th>
                                    <th>Refund</th>
                                    <th>Case note</th>
                                    <th>Resolve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 && (
                                    <tr>
                                        <td colSpan={10} className="text-center py-8 text-muted">
                                            Nothing to reconcile 🎉
                                        </td>
                                    </tr>
                                )}
                                {items.map((item) => (
                                    <tr key={item.appointment_id}>
                                        <td>
                                            #{item.appointment_id}
                                            <div className="text-xs text-muted">{item.attendance_scenario}</div>
                                        </td>
                                        <td>
                                            {item.patient?.name ?? '—'}
                                            <div className="text-xs text-muted">
                                                {item.patient?.phone ?? item.patient?.email ?? ''}
                                            </div>
                                        </td>
                                        <td>{item.doctor?.name ?? '—'}</td>
                                        <td>{naira(item.transaction?.amount)}</td>
                                        <td>{naira(item.doctor_share)}</td>
                                        <td>
                                            <Badge tone={item.channel === 'whatsapp' ? 'green' : 'gray'}>
                                                {item.channel ?? 'app'}
                                            </Badge>
                                        </td>
                                        <td>{doctorBadge(item)}</td>
                                        <td>
                                            {item.patient_refunded ? (
                                                <Badge tone="blue">Refunded</Badge>
                                            ) : (
                                                <Badge tone="gray">Held</Badge>
                                            )}
                                        </td>
                                        <td>
                                            {item.has_case_note ? <Badge tone="green">Yes</Badge> : <Badge tone="gray">No</Badge>}
                                        </td>
                                        <td>
                                            <Menu>
                                                <MenuButton className="border-2 font-medium px-3 py-1.5 items-center space-x-1 text-sm rounded-lg inline-flex">
                                                    <span>Resolve</span>
                                                    <ChevronDownIcon className="size-3" />
                                                </MenuButton>
                                                <MenuItems
                                                    transition
                                                    anchor="bottom end"
                                                    className="min-w-64 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm z-50"
                                                >
                                                    <div className="p-1">
                                                        {ACTIONS.map((a) => (
                                                            <MenuItem key={a.key} disabled={disabledFor(item, a.key)}>
                                                                <button
                                                                    disabled={disabledFor(item, a.key) || !!busy}
                                                                    onClick={() => run(item, a.key)}
                                                                    className="inline-flex w-full rounded-lg py-2 px-3 text-left text-muted hover:bg-muted/10 disabled:opacity-40 disabled:cursor-not-allowed"
                                                                >
                                                                    {busy === `${item.appointment_id}:${a.key}`
                                                                        ? 'Working…'
                                                                        : a.label}
                                                                </button>
                                                            </MenuItem>
                                                        ))}
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        </td>
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
