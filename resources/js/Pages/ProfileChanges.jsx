import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

const fullName = (f, l) => [f, l].filter(Boolean).join(' ') || '—';

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

export default function ({ items = [] }) {
    const [busy, setBusy] = useState(null);

    const approve = (item) => {
        if (!window.confirm(`Approve profile change for ${fullName(item.first_name, item.last_name)}?\nThe new name/photo will go live for patients.`)) return;
        setBusy(`${item.id}:approve`);
        router.post(route('profile-changes.approve', item.id), {}, { preserveScroll: true, onFinish: () => setBusy(null) });
    };

    const reject = (item) => {
        const note = window.prompt('Reason for rejecting (optional):');
        if (note === null) return;
        setBusy(`${item.id}:reject`);
        router.post(route('profile-changes.reject', item.id), { note }, { preserveScroll: true, onFinish: () => setBusy(null) });
    };

    const nameChange = (item) => {
        const c = item.changes || {};
        if (c.first_name == null && c.last_name == null) return null;
        return {
            old: fullName(item.first_name, item.last_name),
            next: fullName(c.first_name ?? item.first_name, c.last_name ?? item.last_name),
        };
    };

    return (
        <AuthenticatedLayout title="Profile Change Requests">
            <Head title="Profile Change Requests" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl">
                    <h2 className="font-semibold">Verified-doctor identity changes</h2>
                    <p className="text-sm text-muted">
                        Name and photo changes requested by verified doctors. They stay hidden from patients until you approve them, so what patients see always matches the verified credentials. {items.length} pending.
                    </p>
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="overflow-x-auto relative">
                        <table className="border-b w-full">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Requested change</th>
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
                                    const nc = nameChange(item);
                                    const newPic = item.changes?.picture;
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
                                                {nc && (
                                                    <div className="text-sm">
                                                        <span className="text-muted">Name: </span>
                                                        <span className="line-through text-muted">{nc.old}</span>
                                                        <span className="mx-1">→</span>
                                                        <span className="font-medium">{nc.next}</span>
                                                    </div>
                                                )}
                                                {newPic && (
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-muted text-sm">Photo:</span>
                                                        <Avatar src={item.picture} />
                                                        <span>→</span>
                                                        <Avatar src={newPic} />
                                                    </div>
                                                )}
                                                {!nc && !newPic && <span className="text-muted text-sm">—</span>}
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
