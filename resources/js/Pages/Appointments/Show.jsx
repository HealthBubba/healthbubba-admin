import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function ({appointment}) {
    return (
        <AuthenticatedLayout title={`Appointment ${appointment.id}`}>
            <div className="card space-y-4" >
                <div className="grid md:grid-cols-2 md:divide-x gap-5">
                    <div className='space-y-5'>
                        <div className='gap-4 grid md:grid-cols-2'>
                            <div >
                                <h4 className='font-medium' >Doctor</h4>
                                <Link href={route('practitioners.show', {user: appointment.doctor.id})} className="link">
                                {appointment.doctor.full_name}
                                </Link>
                            </div>
                            <div >
                                <h4 className='font-medium' >Patient</h4>
                                <Link href={route('patients.show', {user: appointment.patient.id})} className="link">{appointment.patient.full_name}</Link>
                            </div>
                        </div>

                        <div className="gap-4 grid md:grid-cols-2">
                            <div >
                                <h4 className='font-medium' >Appointment Date</h4>
                                <p >{appointment.date}</p>
                            </div>
                            <div >
                                <h4 className='font-medium' >Appointment Time</h4>
                                <p >{appointment.time}</p>
                            </div>
                        </div>

                        <div className="gap-4 grid md:grid-cols-2">
                            <div >
                                <h4 className='font-medium' >Height</h4>
                                <p >{appointment.height ?? 'N/A'}</p>
                            </div>
                            <div >
                                <h4 className='font-medium' >Weight</h4>
                                <p >{appointment.weight ?? 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <div >
                        <div className="p-3 bg-gray-100 rounded-md border">
                        <h4 className='font-medium' >Complaint</h4>
                            <p >{appointment.complain}</p>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
