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
                            <p >{appointment.is_physical_appointment ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>

                <div className='p-5 bg-gray-50 rounded-lg border space-y-5'>
                    <div>
                        <h3 className='font-semibold text-lg'>Meeting Info</h3>
                    </div>

                    <div className='gap-4 grid md:grid-cols-4'>
                        <div >
                            <h4 className='font-medium' >Meeting Id</h4>
                            <p >{appointment.meeting_id ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >External Meeting Id</h4>
                            <p >{appointment.external_meeting_id ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Doctor Attendee Id</h4>
                            <p >{appointment.doctor_attendee_id ?? 'N/A'}</p>
                        </div>
                        <div >
                            <h4 className='font-medium' >Patient Attendee Id</h4>
                            <p >{appointment.patient_attendee_id ?? 'N/A'}</p>
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
