import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import TableLink from '@/Components/Table/TableLink'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function AppointmentItem({appointment}) {
    return (
        <tr>
            <td>
                <Link href={route('patients.show', {user: appointment.patient?.id})} className='link'>{appointment.patient?.full_name}</Link>
            </td>
            <td>
                <Link href={route('practitioners.show', {user: appointment.doctor?.id})} className='link' >{appointment.doctor?.full_name}</Link>
            </td>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.complain}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.status ? 'Completed' : 'Pending'}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.date}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>
                <Badge status={appointment.payment_status ? 'paid' : 'unpaid'} >{appointment.payment_status ? 'Paid' : 'Unpaid'}</Badge>
            </TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}><Currency />{appointment.transaction?.amount}</TableLink>
        </tr>
    )
}
