import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useMemo, useState } from 'react';

const naira = (n) => '₦' + Number(n || 0).toLocaleString();

export default function ({ catalog = {} }) {
    const practitionerTypes = catalog.practitioner_types || [];
    const timePeriods = catalog.time_periods || [];
    const pricing = catalog.pricing || [];

    const initial = useMemo(() => {
        const map = {};
        practitionerTypes.forEach((pt) => {
            timePeriods.forEach((tp) => {
                const found = pricing.find(
                    (p) => p.practitioner_type === pt && p.time_period === tp
                );
                map[`${pt}||${tp}`] = {
                    patient_fee: found ? String(found.patient_fee) : '',
                    doctor_payout: found ? String(found.doctor_payout) : '',
                    is_active: found ? !!found.is_active : true,
                };
            });
        });
        return map;
    }, []);

    const [rows, setRows] = useState(initial);
    const [saving, setSaving] = useState(false);

    const set = (key, field, value) =>
        setRows((r) => ({ ...r, [key]: { ...r[key], [field]: value } }));

    const commissionOf = (key) => {
        const fee = Number(rows[key]?.patient_fee) || 0;
        const payout = Number(rows[key]?.doctor_payout) || 0;
        return Math.max(0, fee - payout);
    };

    const save = () => {
        const payload = [];
        for (const pt of practitionerTypes) {
            for (const tp of timePeriods) {
                const key = `${pt}||${tp}`;
                const fee = Number(rows[key]?.patient_fee);
                const payout = Number(rows[key]?.doctor_payout) || 0;
                if (!fee || fee <= 0) continue; // blank fee = skip this slot
                if (payout >= fee) {
                    window.alert(`Doctor payout must be less than the patient fee — ${pt} · ${tp}`);
                    return;
                }
                payload.push({
                    practitioner_type: pt,
                    time_period: tp,
                    patient_fee_in_naira: fee,
                    doctor_payout_in_naira: payout,
                    is_active: rows[key]?.is_active ?? true,
                });
            }
        }
        if (!payload.length) {
            window.alert('Set at least one patient fee before saving.');
            return;
        }
        setSaving(true);
        router.post(
            route('urgent-pricing.update'),
            { pricing: payload },
            { preserveScroll: true, onFinish: () => setSaving(false) }
        );
    };

    return (
        <AuthenticatedLayout title="Urgent Consultation Pricing">
            <Head title="Urgent Consultation Pricing" />
            <div className="space-y-3">
                <div className="card p-4 rounded-xl flex items-center justify-between gap-3 flex-wrap">
                    <div>
                        <h2 className="font-semibold">Instant / urgent consultation pricing</h2>
                        <p className="text-sm text-muted">
                            Patient fee and doctor payout per practitioner type and time window — HealthBubba's commission is the difference. Leave a fee blank to skip that slot.
                        </p>
                    </div>
                    <button
                        onClick={save}
                        disabled={saving}
                        className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        {saving ? 'Saving…' : 'Save pricing'}
                    </button>
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="border-b w-full">
                            <thead>
                                <tr>
                                    <th>Practitioner type</th>
                                    <th>Time window</th>
                                    <th>Patient fee (₦)</th>
                                    <th>Doctor payout (₦)</th>
                                    <th>Commission</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {practitionerTypes.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center py-8 text-muted">
                                            No practitioner types configured on the backend.
                                        </td>
                                    </tr>
                                )}
                                {practitionerTypes.map((pt) =>
                                    timePeriods.map((tp, i) => {
                                        const key = `${pt}||${tp}`;
                                        return (
                                            <tr key={key}>
                                                <td className="font-medium">{i === 0 ? pt : ''}</td>
                                                <td className="text-sm text-muted">{tp}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="1"
                                                        value={rows[key]?.patient_fee ?? ''}
                                                        onChange={(e) => set(key, 'patient_fee', e.target.value)}
                                                        placeholder="0"
                                                        className="border rounded-lg px-2 py-1 w-28"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="1"
                                                        value={rows[key]?.doctor_payout ?? ''}
                                                        onChange={(e) => set(key, 'doctor_payout', e.target.value)}
                                                        placeholder="0"
                                                        className="border rounded-lg px-2 py-1 w-28"
                                                    />
                                                </td>
                                                <td className="text-sm font-medium">{naira(commissionOf(key))}</td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={rows[key]?.is_active ?? true}
                                                        onChange={(e) => set(key, 'is_active', e.target.checked)}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
