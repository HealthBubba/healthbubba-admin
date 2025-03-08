import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Avatar } from '@/Components/Avatar';
import { Badge } from '@/Components/Badge';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import Swal from '@/Components/Swal';
import Disclose from '@/Components/Disclose';


export default function ({children, title}) {

    const suspend = () => {
        router.get(route('users.suspend', {user: patient.id}))
    }
    
    const destroy = () => {
        router.get(route('patients.destroy', {user: patient.id}))
    }
    
    const verifyEmail = () => {
        router.get(route('patients.verify-email', {user: patient.id}))
    }

    const {props: {patient}} = usePage()

    return (
        <AuthenticatedLayout title={`${patient.full_name} - ${title}`} >
            <Head title={`${title}- ${patient.full_name}`} />
            <div className="space-y-5 h-full flex flex-col">
                <div className="card space-y-4 pb-0">
                    <div className="grid md:grid-cols-12 gap-3 md:divide-x">
                        <div className="md:col-span-4 space-y-3 md:p-5">
                            <div className='space-y-2'>
                                <Avatar className='mx-auto' image={patient.picture}  />
                                <div className='text-center text-sm'>
                                    <p className='font-medium'>{patient.full_name}</p>
                                    <p>{patient.email}</p>
        
                                    <Badge className='text-xs p-1 px-4 mt-2' >Patient</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8 md:p-5 space-y-4">
                            <div className="grid md:grid-cols-3 gap-5">
                                <StatsItem title={'Transactions'} amount={patient.transactions_count} direction={Direction.up} percentage={36} />
                                <StatsItem title={'Amount Spent'} amount={patient.transactions_sum} direction={Direction.up} percentage={36} />
                            </div>

                            <div className='flex gap-2 flex-wrap ' >
                                <Disclose show={patient.email_verified} >
                                    <div>
                                        <Swal title="Verify this User's Email" type={'success'} onConfirm={verifyEmail} caption="Are you sure you want to verify this user's Email Address?" className="btn btn-primary btn-sm">Verify Email</Swal>
                                    </div>
                                </Disclose>
                                <div>
                                <Swal 
                                    title={patient.is_active ? 'Suspend User' : 'Restore User'} 
                                    type={patient.is_active ? 'warning' : 'success'} 
                                    confirmLabel={patient.is_active ? 'Suspend User' : 'Restore User'}
                                    onConfirm={suspend} 
                                    caption={`Are you sure you want to ${patient.is_active ? 'suspend' : 'restore'} this user's account?`} 
                                    className="btn btn-sm btn-warning">{patient.is_active ? 'Suspend' : 'Restore'} User</Swal>
                                </div>
                                <div>
                                    <Swal title="Delete User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="btn btn-danger btn-sm ">Delete User</Swal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-x-auto scrollbar-hidden' >
                    <ul className='flex space-x-3 text-sm'>
                        <li className={`p-2  ${route().current() == 'patients.show' ? 'border-primary border-b-4' : ''}`}>
                        <Link href={route('patients.show', {user: patient.id})} >Overview</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'patients.edit' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('patients.edit', {user: patient.id})} >Edit</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'patients.transactions' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('patients.transactions', {user: patient.id})} >Transactions</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'patients.appointments' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('patients.appointments', {user: patient.id})} >Appointments</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'patients.orders' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('patients.orders', {user: patient.id})} >Orders</Link>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="card flex-1">
                    {children}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
