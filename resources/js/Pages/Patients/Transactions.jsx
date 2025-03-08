import React from 'react'
import PatientLayout from './Layouts/PatientLayout'
import Pagination from '@/Components/Pagination'
import TransactionItem from '@/Partials/Transactions/TransactionItem'

export default function ({patient, transactions}) {
    return (
        <PatientLayout patient={patient} title="Transactions" >
            <div className="overflow-x-auto">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Date/Time</th>
                            <th>Patient name</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.data.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
                    </tbody>
                </table>

                {
                    transactions.data?.length < 1 

                    ?

                    <p className='text-center py-3' >No records found</p>

                    :

                    ''
                }
            </div>

            <Pagination items={transactions} />
        </PatientLayout>
    )
}
