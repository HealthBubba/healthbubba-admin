import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { ArrowLongRightIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({patients, practitioners, appointments, pending, transactions, completed}) {
    return (
        <AuthenticatedLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-5">
                <div className='mb-4'>
                    <h3 className='font-semibold'>Hey Admin,</h3>
                    <p className='text-muted'>Here’s all your activities for today</p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <StatsItem title={'Total Active Patients'} amount={patients} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Active Practitioners'} amount={practitioners}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Consultation Revenue'} isPrice amount={2000} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Orders'} amount={2000}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Appointments'} amount={appointments} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Appointments'} amount={completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled  Appointments'} amount={pending} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Ongoing Orders'} amount={2000} direction={Direction.up} percentage={36} />
                </div>


                <div className="card p-0 rounded-xl">
                    <div className="p-4 flex justify-between">
                        <div>
                        <p className='font-semibold'>Transactions</p>
                        </div>
                        <div>
                            <Link className='text-sm inline-flex items-center' href={route('transactions')}>See All Transactions <ChevronRightIcon className='size-3 ms-1' /></Link>
                        </div>
                    </div>

                    <div className="border-t ml-4"></div>

                    <div className="p-4 overflow-x-auto">
                        <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Transaction ID</th>
                                    <th>Date/Time</th>
                                    <th >Patient Name</th>
                                    <th >Practitioner Name</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Payment Method</th>
                                    <th>Appointment ID</th>
                                </tr>
                            </thead>

                            <tbody>
                                {transactions.data.map(transaction => <TransactionItem transaction={transaction} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
