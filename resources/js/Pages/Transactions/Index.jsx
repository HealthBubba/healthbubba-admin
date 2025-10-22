import DatePicker from '@/Components/Form/DatePicker';
import Dropdown from '@/Components/Form/Dropdown';
import Pagination from '@/Components/Pagination';
import useSearchParams from '@/Hooks/useSearchParams';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Head, router } from '@inertiajs/react';

export default function ({transactions, stats, status}) {

    const params = useSearchParams()

    return (
        <AuthenticatedLayout title="Transactions">
            <Head title='Transactions' />

            <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mb-5">
                <StatsItem title={'Total Transactions'} amount={stats.total} direction={Direction.up} percentage={36} />
            </div>

            <div className="card p-0 rounded-xl">
                <div className="justify-between items-center md:flex p-4">
                    <div>
                        <h4 className='font-semibold'>Transactions</h4>
                    </div>
                    <div className="md:flex space-y-2 md:space-y-0 md:space-x-2">
                        <div>
                            <DatePicker val={{endDate: params.endDate, startDate: params.startDate}} onChange={(value) => router.reload({data: value})} />
                        </div>
                        <div>
                            <Dropdown
                                placeholder={'All Status'}
                                options={[
                                    {label: 'All', value: ''},
                                    {label: 'Pending', value: 'pending'},
                                    {label: 'Confirmed', value: 'confirmed'},
                                    {label: 'Successful', value: 'success'},
                                    {label: 'Refund', value: 'refund'},
                                    {label: 'Failed', value: 'failed'},
                                ]}
                                value={status}
                                action={value => router.reload({data: {status: value}})}
                            />
                        </div>
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
                                <th>Type</th>
                                <th>Type ID</th>
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
            </div>
        </AuthenticatedLayout>
    )
}
