import DashboardLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <DashboardLayout title={'Health Practitioners'}>
            <Head title="Welcome" />
            

        </DashboardLayout>
    );
}
