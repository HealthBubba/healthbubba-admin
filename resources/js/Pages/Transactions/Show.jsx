import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ({transaction}) {
    return (
        <AuthenticatedLayout title={"Transaction - " + transaction.reference}>

        </AuthenticatedLayout>
    )
}
