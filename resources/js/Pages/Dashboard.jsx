import ProgressBar from '@/Components/ProgressBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ConsultantsChart from '@/Partials/Charts/ConsultantsChart';
import RevenueChart from '@/Partials/Charts/RevenueChart';
import SignupChart from '@/Partials/Charts/SignupChart';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import { useMemo } from 'react';

export default function Dashboard({patients, practitioners, revenue, appointments, pending, transactions, orders, sources, completed, pending_orders, medications}) {

    const {props} = usePage()

    const percentages = useMemo(() => {
        const total = sources.web + sources.android + sources.ios

        return {
            web: total ? (sources.web / total) * 100 : 0,
            android: total ? (sources.android / total) * 100 : 0,
            ios: total ? (sources.ios / total) * 100 : 0,
        }
    }, [sources])

    return (
        <AuthenticatedLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-5">
                <div className='mb-4'>
                    <h3 className='font-semibold'>Hey {props.auth.user.firstname},</h3>
                    <p className='text-muted'>Here’s all your activities for today</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <StatsItem title={'Total Active Patients'} amount={patients} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Active Practitioners'} amount={practitioners}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Revenue'} isPrice amount={revenue} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Orders'} amount={orders}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Appointments'} amount={appointments} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Appointments'} amount={completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled  Appointments'} amount={pending} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Medications'} amount={medications} direction={Direction.up} percentage={36} />
                </div>

                <div className="md:grid gap-4 grid-cols-2">
                    <div className="card">
                        <SignupChart />
                    </div>

                    <div className="card">
                        <RevenueChart />
                    </div>

                    <div className="card">
                        <ConsultantsChart />
                    </div>

                    <div className="">
                        <div className="card h-full space-y-10">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className='font-semibold'>Traffic Sources</h4>
                                </div>

                                <div>
                                    <select className='appearance-none py-0 px-0 bg-none active:outline-none active:ring-0 focus:outline-0 focus:ring-0 focus:border-0 text-sm border-0 w-auto' >
                                        <option value="">Last 7 Days</option>
                                    </select>
                                </div>
                            </div>

                            <div className='space-y-7'>
                                <ProgressBar title='Total Order from iOS' value={sources.ios} percent={percentages.ios} />
                                <ProgressBar title='Total Order from Android' value={sources.android} percent={percentages.android} />
                                <ProgressBar title='Total Order from Web' value={sources.web} percent={percentages.web} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card p-0 w-full max-w-full rounded-xl">
                    <div className="p-4 flex justify-between">
                        <div>
                            <p className='font-semibold'>Transactions</p>
                        </div>
                        <div>
                            <Link className='text-sm inline-flex items-center text-[#4F46E5] font-medium' href={route('transactions')}>See All Transactions <ChevronRightIcon className='size-3 ms-1' /></Link>
                        </div>
                    </div>

                    <div className="border-t ml-4"></div>

                    <div className="overflow-x-auto">
                        <table className='border-b'>
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Date/Time</th>
                                    <th>Patient name</th>
                                    <th>Email Address</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
    
                            <tbody>
                                {transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
