import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import React from 'react'

export default function PrescriptionItem({prescription}) {
    return (
        <tr>
            <td>{prescription.patient?.full_name}</td>
            <td>{prescription.doctor?.full_name}</td>
            <td>Payment</td>
            <td>{prescription.status ? 'Completed' : 'Pending'}</td>
            <td>{prescription.date}</td>
            <td>
                <Badge status={prescription.payment_status ? 'paid' : 'unpaid'} >{prescription.payment_status ? 'Paid' : 'Unpaid'}</Badge>
            </td>
            <td><Currency />{prescription.transaction?.amount}</td>
        </tr>
    )
}
