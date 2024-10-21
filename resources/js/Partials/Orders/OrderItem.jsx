import { Badge } from '@/Components/Badge'
import Disclose from '@/Components/Disclose'
import OrderTypes from '@/Constants/OrderTypes'
import React from 'react'
import { TestAction } from './TestAction'
import { MedicationAction } from './MedicationAction'

export default function ({order}) {
    return (
        <tr>
            <td>{order.no}</td>
            <td>{order.patient?.full_name}</td>
            <td>{order.doctor?.full_name}</td>
            <td>{order.type}</td>
            <td>{order.status}</td>
            <td>{order.date}</td>
            <td>
                <Badge status={order.status}>{order.status}</Badge>
            </td>
            <td>Bank Transfer</td>
            <td className='text-left'>
                <Disclose show={order.transaction_type == OrderTypes.medication} >
                    <MedicationAction />
                </Disclose>

                <Disclose show={order.transaction_type == OrderTypes.test} >
                    <TestAction order={order} />
                </Disclose>
            </td>
        </tr>
    )
}




