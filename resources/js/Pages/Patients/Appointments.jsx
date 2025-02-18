import React from 'react'
import PatientLayout from './Layouts/PatientLayout'
import AppointmentItem from '@/Partials/Appointments/AppointmentItem'
import Pagination from '@/Components/Pagination'

export default function ({appointments}) {
    return (
        <PatientLayout title="Appointments" >
            <div className="overflow-x-auto relative">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>Patient name</th>
                            <th >Practitioner Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Order Date</th>
                            <th>Payment Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.data.map(appointment => <AppointmentItem key={appointment.no} appointment={appointment} />)}
                    </tbody>
                </table>
            </div>

            <Pagination items={appointments} />
        </PatientLayout>
    )
}
