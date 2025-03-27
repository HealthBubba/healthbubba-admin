import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react'
import Currency from '@/Components/Currency';
import { Badge } from '@/Components/Badge';

export default function ({transaction}) {

    // const copy = useCopy()

    return (
        <AuthenticatedLayout title={"Transaction - " + transaction.reference}>
            <Head title={"Transaction - " + transaction.reference} />

            <div className='card'>
                <div className="card-body grid md:grid-cols-3 gap-5">

                    <div>
                        <p className="font-medium">User</p>
                        <Link href={route('patients.show', {user: transaction.user.id})} className='link' >{ transaction.user.full_name }</Link>
                    </div>

                    <div>
                        <p className="font-medium">Reference</p>
                        <div className='text-gray-600'>{ transaction.reference }</div>
                    </div>

                    <div>
                        <p className="font-medium">Transaction Type</p>
                        <div className='text-gray-600'>{ transaction.type }</div>
                    </div>

                    <div>
                        <p className="font-medium">Amount</p>
                        <div className='text-gray-600'><Currency />{ transaction.amount }</div>
                    </div>

                    <div>
                        <p className="font-medium">Status</p>
                        <div className='text-gray-600'>
                            <Badge status={transaction.status} >{transaction.status}</Badge>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <p className="font-medium">Transaction Date</p>
                        <div className='text-gray-600'>{transaction.date}</div>
                    </div>

                    <div className="col-span-full">
                        <p className="font-medium">Reason</p>
                        <div className='text-gray-600'>{transaction.reason}</div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
