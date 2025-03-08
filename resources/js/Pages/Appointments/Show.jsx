import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function ({appointment}) {
    return (
        <AuthenticatedLayout title={`Appointment ${appointment.id}`}>
            <div className="card space-y-4">
                <div >
                    <h4 className='font-medium' >Doctor</h4>
                    <Link href={route('practitioners.show', {user: appointment.doctor.id})} className="text-gray-600">
                    {appointment.doctor.full_name}
                    </Link>
                </div>
                <div >
                    <h4 className='font-medium' >Patient</h4>
                    <Link href={route('patients.show', {user: appointment.patient.id})} className="text-gray-600">{appointment.patient.full_name}</Link>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
