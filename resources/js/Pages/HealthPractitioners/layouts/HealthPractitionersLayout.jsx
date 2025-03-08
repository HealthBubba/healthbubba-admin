import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Avatar } from '@/Components/Avatar';
import { Badge } from '@/Components/Badge';
import Button from '@/Components/Button/Button';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import Swal from '@/Components/Swal';
import Disclose from '@/Components/Disclose';


export default function ({children, title}) {

    const suspend = (close) => {
        router.get(route('users.suspend', {user: user.id}))
    }

    const approve = () => {
        router.get(route('practitioners.approve', {user: user.id}))
    }
    
    const disapprove = () => {
        router.get(route('practitioners.disapprove', {user: user.id}))

    }
    
    const destroy = (close) => {
        router.get(route('practitioners.destroy', {user: user.id}))
    }

    const verifyEmail = () => {
        router.get(route('patients.verify-email', {user: user.id}))
    }

    const {props: {user}} = usePage()

    return (
        <AuthenticatedLayout title={`${user.full_name} - ${title}`} >
            <Head title={`${title}- ${user.full_name}`} />
            <div className="space-y-5 h-full flex flex-col">
                <div className="card space-y-4 pb-0">
                    <div className="grid md:grid-cols-12 gap-3 md:divide-x">
                        <div className="md:col-span-4 space-y-3 md:p-5">
                            <div className='space-y-2'>
                                <Avatar className='mx-auto' image={user.picture}  />
                                <div className='text-center text-sm'>
                                    <p className='font-medium'>{user.full_name}</p>
                                    <p>{user.email}</p>
        
                                    <Badge className='text-xs p-1 px-4 mt-2 capitalize' >{user.type}</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8 md:p-5 space-y-4">
                            <div className="grid md:grid-cols-3 gap-5">
                                <StatsItem title={'Earnings'} amount={user.earnings} isPrice direction={Direction.up} percentage={36} />
                                <StatsItem title={'Consultations'} amount={user.consultations} direction={Direction.up} percentage={36} />
                            </div>

                            <div className='flex gap-2 flex-wrap ' >
                                <Disclose show={!user.email_verified} >
                                    <div>
                                        <Swal title="Verify this User's Email" type={'success'} onConfirm={verifyEmail} caption="Are you sure you want to verify this user's Email Address?" className="btn btn-primary btn-sm">Verify Email</Swal>
                                    </div>
                                </Disclose>
                                <Disclose show={!user.is_doctor_verified} >
                                    <div>
                                        <Swal title="Appprove this doctor's request" type={'success'} onConfirm={approve} caption="Are you sure you want to appprove this doctor's request?" className="btn btn-primary btn-sm">Approve</Swal>
                                    </div>
                                </Disclose>
                                <Disclose show={user.is_doctor_verified} >
                                    <div>
                                        <Swal title="Disappprove this doctor's request" type={'warning'} onConfirm={disapprove} caption="Are you sure you want to disappprove this doctor's request?" className="btn btn-warning btn-sm">Unapprove</Swal>
                                    </div>
                                </Disclose>
                                <div>
                                <Swal 
                                    title={user.is_active ? 'Suspend User' : 'Restore User'} 
                                    type={user.is_active ? 'warning' : 'success'} 
                                    confirmLabel={user.is_active ? 'Suspend User' : 'Restore User'}
                                    onConfirm={suspend} 
                                    caption={`Are you sure you want to ${user.is_active ? 'suspend' : 'restore'} this user's account?`} 
                                    className="btn btn-sm btn-warning">{user.is_active ? 'Suspend' : 'Restore'} User</Swal>
                                </div>
                                <div>
                                    <Swal title="Delete User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="btn btn-danger btn-sm ">Delete User</Swal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-x-auto scrollbar-hidden' >
                    <ul className='flex space-x-3 text-sm'>
                        <li className={`p-2  ${route().current() == 'practitioners.show' ? 'border-primary border-b-4' : ''}`}>
                        <Link href={route('practitioners.show', {user: user.id})} >Overview</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'practitioners.edit' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('practitioners.edit', {user: user.id})} >Edit</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'practitioners.transactions' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('practitioners.transactions', {user: user.id})} >Transactions</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'practitioners.consultations' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('practitioners.consultations', {user: user.id})} >Consultations</Link>
                        </li>
                        <li className={`p-2  ${route().current() == 'practitioners.prescriptions' ? 'border-primary border-b-4' : ''}`}>
                            <Link href={route('practitioners.prescriptions', {user: user.id})} >Prescriptions</Link>
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
