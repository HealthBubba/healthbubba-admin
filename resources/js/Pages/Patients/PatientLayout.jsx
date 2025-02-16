import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Avatar } from '@/Components/Avatar';
import { Badge } from '@/Components/Badge';
import Button from '@/Components/Button/Button';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';


export default function ({children, patient, title}) {

    const {props: {transactions, amount_spent}} = usePage()
    return (
        <AuthenticatedLayout title={`${title}- ${patient.full_name}`} >
            <Head title={`${title}- ${patient.full_name}`} />
            <div className="space-y-5">
                <div className="card space-y-4 pb-0">
                    <div className="grid grid-cols-12 divide-x">
                        <div className="col-span-4 space-y-3 p-5">
                            <div className='space-y-2'>
                                <Avatar className='mx-auto' image={patient.picture}  />
                                <div className='text-center text-sm'>
                                    <p className='font-medium'>{patient.full_name}</p>
                                    <p>{patient.email}</p>
        
                                    <Badge className='text-xs p-1 px-4 mt-2' >Patient</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 p-5 space-y-4">
                            <div className="grid grid-cols-3 gap-5">
                                <StatsItem title={'Transactions'} amount={transactions} direction={Direction.up} percentage={36} />
                                <StatsItem title={'Amount Spent'} amount={amount_spent} direction={Direction.up} percentage={36} />
                            </div>

                            <div className='flex space-x-3' >
                                <div>
                                    <Button className='btn-sm btn-primary'>Verify Email</Button>
                                </div>
                                <div>
                                    <Button className='btn-sm btn-warning'>Suspend User</Button>
                                </div>
                                <div>
                                    <Button className='btn-sm btn-danger'>Delete User</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className='flex space-x-3 text-sm'>
                        <li className="p-2 border-primary border-b-4">
                            <Link>Overview</Link>
                        </li>
                        <li className="p-2">
                            <Link>Edit</Link>
                        </li>
                        <li className="p-2">
                            <Link>Transactions</Link>
                        </li>
                        <li className="p-2 ">
                            <Link>Appointments</Link>
                        </li>
                        <li className="p-2 ">
                            <Link>Orders</Link>
                        </li>
                        <li className="p-2 ">
                            <Link>Tests</Link>
                        </li>
                    </ul>
                </div>

                <div className="card">
                    {children}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
