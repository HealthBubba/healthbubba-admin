import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import DoctorTransactionItem from './partials/DoctorTransactionItem'

export default function () {

    const {props: {user, transactions}} = usePage()


    return (
        <HealthPractitionersLayout title="Transactions">
            <div className="overflow-x-auto">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Date/Time</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.data.map(transaction => <DoctorTransactionItem key={transaction.id} transaction={transaction} />)}
                    </tbody>
                </table>

                {
                    transactions.length < 1 

                    ?

                    <p className='text-center py-3' >No records found</p>

                    :

                    ''
                }
            </div>

            <Pagination items={transactions} />
        </HealthPractitionersLayout>
    )
}
