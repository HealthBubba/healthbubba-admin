import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function AppointmentItem({appointment}) {
    return (
        <tr>
            <td>{appointment.no}</td>
            <td>{appointment.patient?.full_name}</td>
            <td>{appointment.doctor?.full_name}</td>
            <td>Payment</td>
            <td>{appointment.status ? 'Completed' : 'Pending'}</td>
            <td>{appointment.date}</td>
            <td>
                <Badge status={appointment.payment_status ? 'paid' : 'unpaid'} >{appointment.payment_status ? 'Paid' : 'Unpaid'}</Badge>
            </td>
            <td><Currency />{appointment.transaction?.amount}</td>
            <td>APPT56789</td>
        </tr>
    )
}
