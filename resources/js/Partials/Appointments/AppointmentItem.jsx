import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import TableLink from '@/Components/Table/TableLink'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function AppointmentItem({appointment}) {
    return (
        <tr>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.patient?.full_name}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.doctor?.full_name}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>Payment</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.status ? 'Completed' : 'Pending'}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>{appointment.date}</TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}>
                <Badge status={appointment.payment_status ? 'paid' : 'unpaid'} >{appointment.payment_status ? 'Paid' : 'Unpaid'}</Badge>
            </TableLink>
            <TableLink href={route('appointments.show', {appointment: appointment.id})}><Currency />{appointment.transaction?.amount}</TableLink>
        </tr>
    )
}
