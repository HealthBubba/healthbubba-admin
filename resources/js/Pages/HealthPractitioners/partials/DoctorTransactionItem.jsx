import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import React from 'react'

export default function ({transaction}) {
    return (
        <tr>
            <td>{transaction.reference}</td>
            <td>{transaction.date}</td>
            {/* <td>Payment</td> */}
            <td>{transaction.type}</td>
            <td><Currency /> {transaction.amount.toLocaleString()}</td>
            <td>
                <Badge status={transaction.status}>{transaction.status}</Badge>
            </td>
            {/* <td>Bank Transfer</td> */}
            {/* <td>{transaction.model_id}</td> */}
        </tr>
    )
}
