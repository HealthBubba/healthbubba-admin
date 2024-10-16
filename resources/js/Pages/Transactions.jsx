import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Head } from '@inertiajs/react';

export default function ({transactions}) {

    return (
        <AuthenticatedLayout title="Transactions">
            <Head title='Transactions' />
            <div className="card p-0 rounded-xl">
                <div className="justify-between items-center flex p-4">
                    <div>
                        <h4 className='font-semibold'>Transactions</h4>
                    </div>
                    <div className="flex space-x-2">
                        <div>
                            <button className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                <AdjustmentsHorizontalIcon className='size-5' />         
                                <span>Date</span>
                            </button>
                        </div>
                        <div>
                            <Menu>
                                <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                    <AdjustmentsHorizontalIcon className='size-5' />         
                                    <span>All Status</span>
                                    <ChevronDownIcon className='size-3' />         
                                </MenuButton>
                                <MenuItems transition anchor="bottom start" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                    <div className='p-1'>
                                        <MenuItem >
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">All</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Successful</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Failed</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full text-sm rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Processing</button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Transaction ID</th>
                                <th >Date/Time</th>
                                <th>Patient name</th>
                                <th>Practitioner Name</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Payment Method</th>
                                <th>Appointment ID</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.data.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
                        </tbody>
                    </table>
                </div>

                <Pagination items={transactions} />
            </div>
        </AuthenticatedLayout>
    )
}
