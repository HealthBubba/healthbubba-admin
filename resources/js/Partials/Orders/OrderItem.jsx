import { Badge } from '@/Components/Badge'
import Disclose from '@/Components/Disclose'
import OrderTypes from '@/Constants/OrderTypes'
import React from 'react'
import { TestAction } from './TestAction'
import { MedicationAction } from './MedicationAction'
import Currency from '@/Components/Currency'

export default function ({order}) {
    return (
        <tr>
            <td>{order.product_name}</td>
            <td>{order.product_type}</td>
            <td>{order.quantity}</td>
            <td><Currency /> {order.price.toLocaleString()}</td>
            <td><Currency /> {(order.price * order.quantity).toLocaleString()}</td>
            <td className='text-left'>
                <Disclose show={order.product_type == OrderTypes.medication} >
                    {/* <MedicationAction /> */}
                </Disclose>

                <Disclose show={order.product_type == OrderTypes.test} >
                    <TestAction order={order} />
                </Disclose>
            </td>
        </tr>
    )
}




