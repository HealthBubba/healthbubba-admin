import React from 'react'
import PatientLayout from './Layouts/PatientLayout'
import AppointmentItem from '@/Partials/Appointments/AppointmentItem'
import Pagination from '@/Components/Pagination'
import SingleOrder from '@/Partials/Orders/SingleOrder'

export default function ({orders}) {
    return (
        <PatientLayout title="Orders" >
            <div className="overflow-x-auto">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Patient</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.data.map(order => <SingleOrder key={order.id} order={order} />)}
                    </tbody>
                </table>
            </div>

            {/* <Pagination items={orders} /> */}
        </PatientLayout>
    )
}
