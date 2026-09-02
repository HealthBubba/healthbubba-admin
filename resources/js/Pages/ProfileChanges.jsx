import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

const fullName = (f, l) => [f, l].filter(Boolean).join(' ') || '—';

const FIELD_LABELS = {
    first_name: 'First name',
    last_name: 'Last name',
    picture: 'Photo',
    credentials: 'Credentials',
    title: 'Title',
    is_board_certified: 'Board certified',
    provider_type: 'Provider type',
    years_of_experience: 'Years of experience',
    licence_number: 'Licence number',
    doctor_license: 'Licence document',
};

const isUrl = (v) => typeof v === 'string' && /^https?:\/\//.test(v);

const displayVal = (field, val) => {
    if (val === null || val === undefined || val === '') return '—';
    if (field === 'is_board_certified') {
        return val === true || val === 1 || val === '1' || val === 'true' ? 'Yes' : 'No';
    }
    return String(val);
};

const Avatar = ({ src }) =>
    src ? (
        <img
            src={src}
            alt=""
            className="size-12 rounded-full object-cover border"
            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
        />
    ) : (
        <div className="size-12 rounded-full bg-gray-100 border flex items-center justify-center text-xs text-gray-400">—</div>
    );

function ChangeRow({ field, oldVal, newVal }) {
    const label = FIELD_LABELS[field] || field;

    if (field === 'picture') {
        return (
            <div className="flex items-center gap-2">
                <span className="text-muted text-sm w-28">{label}:</span>
                <Avatar src={oldVal} />
                <span>→</span>
                <Avatar src={newVal} />
            </div>
        );
    }

    if (field === 'doctor_license') {
        return (
            <div className="text-sm flex items-center gap-2">
                <span className="text-muted w-28">{label}:</span>
                {isUrl(oldVal) ? (
                    <a className="underline" href={oldVal} target="_blank" rel="noreferrer">current</a>
                ) : (
                    <span className="text-muted">—</span>
                )}
                <span>→</span>
                {isUrl(newVal) ? (
                    <a className="underline text-green-700" href={newVal} target="_blank" rel="noreferrer">new document</a>
                ) : (
                    <span className="font-medium">{displayVal(field, newVal)}</span>
                )}
            </div>
        );
    }

    return (
        <div className="text-sm">
            <span className="text-muted">{label}: </span>
            <span className="line-through text-muted">{displayVal(field, oldVal)}</span>
            <span className="mx-1">→</span>
            <span className="font-medium">{displayVal(field, newVal)}</span>
        </div>
    );
}

export default function ({ items = [] }) {
    const [busy, setBusy] = useState(null);

    const approve = (item) => {
        if (!window.confirm(`Approve profile change for ${fullName(item.first_name, item.last_name)}?\nThe new details will go live for patients.`)) return;
        setBusy(`${item.id}:approve`);
        router.post(route('profile-changes.approve', item.id), {}, { preserveScroll: true, onFinish: () => setBusy(null) });
    };

    const reject = (item) => {
        const note = window.prompt('Reason for rejecting (optional):');
        if (note === null) return;
        setBusy(`${item.id}:reject`);
        router.post(route('profile-changes.reject', item.id), { note }, { preserveScroll: true, onFinish: () => setBusy(null) });
    };

    return (
        <AuthenticatedLayout title="Profile Change Requests">
            <Head title="Profile Change Requests" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl">
                    <h2 className="font-semibold">Verified-doctor identity changes</h2>
                    <p className="text-sm text-muted">
                        Name, photo and credential changes requested by verified doctors. They stay hidden from patients until you approve them, so what patients see always matches the verified credentials. {items.length} pending.
                    </p>
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="overflow-x-auto relative">
                        <table className="border-b w-full">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Requested changes</th>
                                    <th>Submitted</th>
                                    <th>Resolve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center py-8 text-muted">No pending changes 🎉</td>
                                    </tr>
                                )}
                                {items.map((item) => {
                                    const changes = item.changes || {};
                                    const previous = item.previous || {};
                                    const fields = Object.keys(changes);
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <Avatar src={item.picture} />
                                                    <div>
                                                        <div className="font-medium">{fullName(item.first_name, item.last_name)}</div>
                                                        <div className="text-xs text-muted">{item.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="space-y-1.5 py-1">
                                                    {fields.length === 0 && <span className="text-muted text-sm">—</span>}
                                                    {fields.map((f) => (
                                                        <ChangeRow key={f} field={f} oldVal={previous[f]} newVal={changes[f]} />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="text-sm text-muted whitespace-nowrap">
                                                {item.created_at ? new Date(item.created_at).toLocaleString() : '—'}
                                            </td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <button
                                                        disabled={!!busy}
                                                        onClick={() => approve(item)}
                                                        className="border-2 border-green-600 text-green-700 font-medium px-3 py-1.5 text-sm rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                                                    >
                                                        {busy === `${item.id}:approve` ? 'Working…' : 'Approve'}
                                                    </button>
                                                    <button
                                                        disabled={!!busy}
                                                        onClick={() => reject(item)}
                                                        className="border-2 border-red-600 text-red-700 font-medium px-3 py-1.5 text-sm rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                                                    >
                                                        {busy === `${item.id}:reject` ? 'Working…' : 'Reject'}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
