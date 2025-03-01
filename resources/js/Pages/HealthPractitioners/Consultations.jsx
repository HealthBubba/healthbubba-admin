import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage } from '@inertiajs/react'
import AppointmentItem from '@/Partials/Appointments/AppointmentItem'
import Pagination from '@/Components/Pagination'

export default function () {

    const {props: {user: {data: user}, consultations: appointments}} = usePage()

    return (
        <HealthPractitionersLayout title="Consultations">
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
        </HealthPractitionersLayout>
    )
}
