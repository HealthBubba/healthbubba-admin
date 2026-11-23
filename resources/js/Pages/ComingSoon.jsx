import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ({ title = 'Coming soon' }) {
    return (
        <AuthenticatedLayout title={title}>
            <Head title={title} />
            <div className="card p-10 rounded-xl text-center space-y-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-muted max-w-md mx-auto">
                    This page is built and ready — it's waiting on the matching backend release to reach
                    production. Check back soon.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
