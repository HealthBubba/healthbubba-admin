import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ({appointment}) {
    return (
        <AuthenticatedLayout title={`Appointment ${appointment.id}`}>
            <Head title={`Appointment ${appointment.id}`} />
            <div className="card space-y-6" >
                <div className='p-5 bg-gray-50 rounded-lg border space-y-5'  >
                    <div>
                        <h3 className='font-semibold text-lg'>Appointment Information</h3>
                    </div>

                    <div className='gap-4 grid md:grid-cols-4'>
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
                        <div >
                            <h4 className='font-medium' >Appointment Date</h4>
                            <p >{appointment.date ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Appointment Time</h4>
                            <p >{appointment.time ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Appointment Fee</h4>
                            <p >{appointment.appointment_fee ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Weight</h4>
                            <p >{appointment.weight ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Is Physical</h4>
                            <p >{appointment.is_physical ? 'Yes' : 'No'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Patient Joined</h4>
                            <p >{appointment.is_patient_joined ? 'Yes' : 'No'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Doctor Joined</h4>
                            <p >{appointment.is_doctor_joined ? 'Yes' : 'No'}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <h3 className='font-semibold text-lg'>Follow Up Status</h3>
                        </div>

                        <div className='gap-4 grid md:grid-cols-4'>
                            <div >
                                <h4 className='font-medium' >Is Follow up appointment</h4>
                                <p>{ appointment.is_follow_up ? 'Yes' : 'No'}</p>
                            </div>
                            <div >
                                <h4 className='font-medium' >Follow up appointment</h4>
                                {
                                    appointment.follow_up_parent_id

                                    ?

                                    <Link href={route('appointments.show', {appointment: appointment.id})} >{ appointment.follow_up_parent_id}</Link>

                                    :

                                    'N/A'
                                }
                            </div>
                            <div >
                                <h4 className='font-medium' >Follow up Status</h4>
                                { appointment.follow_up_status ?? 'N/A' }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-5 bg-gray-50 rounded-lg border space-y-5'>
                    <div>
                        <h3 className='font-semibold text-lg'>Urgency Information</h3>
                    </div>

                    <div className='gap-4 grid md:grid-cols-4'>
                        <div >
                            <h4 className='font-medium' >Is Urgent</h4>
                            <p >{appointment.is_urgent_consultation ? 'Yes' : 'No'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Urgent Request Status</h4>
                            <p >{appointment.urgent_request_status ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Urgent Request Expiry</h4>
                            <p >{appointment.urgent_request_expiry ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Urgent Consultation Fee</h4>
                            <p >{appointment.urgent_consultation_fee ?? 'N/A'}</p>
                        </div>
                    </div>
                </div>
                
                <div >
                    <div className="p-5 bg-gray-50 rounded-lg border">
                    <h4 className='font-medium' >Complaint</h4>
                        <p >{appointment.complain}</p>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
