import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import React from 'react'

export default function TransactionItem({transaction}) {
    return (
        <tr>
            <td>{transaction.no}</td>
            <td>{transaction.reference}</td>
            <td>{transaction.date}</td>
            <td>{transaction.user?.full_name}</td>
            <td>Payment</td>
            <td>{transaction.type}</td>
            <td><Currency /> {transaction.amount.toLocaleString()}</td>
            <td>
                <Badge status={transaction.status}>{transaction.status}</Badge>
            </td>
            <td>Bank Transfer</td>
            <td>APPT56789</td>
        </tr>
    )
}
