import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import Swal from '@/Components/Swal'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { Link, router } from '@inertiajs/react'
import React from 'react'

export default function TransactionItem({transaction}) {

    const destroy = () => {
        router.get(route('transactions.destroy', {transaction: transaction.reference}))
    }

    return (
        <tr>
            <td>{transaction.reference}</td>
            <td>{transaction.date}</td>
            <td>
                <Link className='link' href={transaction.user.role == 'patient' ? route('patients.show', {user: transaction.user?.id}) : route('practitioners.show', {user: transaction.user?.id})}>{transaction.user?.full_name}</Link>
            </td>
            <td>{transaction.user.email}</td>
            <td>{transaction.type}</td>
            {/* <td>{transaction.owner_id}</td> */}
            <td><Currency /> {transaction.amount.toLocaleString()}</td>
            <td>
                <Badge status={transaction.status}>{transaction.status}</Badge>
            </td>
            <td>
                <Menu>
                    <MenuButton className="btn border-2 p-1 bg-white rounded-lg">
                        <EllipsisHorizontalIcon className='size-5' />                                        
                    </MenuButton>
                    <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm p-1" >
                        {/* <MenuItem>
                            <Link className='inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10' href={route('transactions.show', {transaction: transaction.reference})} >View</Link>
                        </MenuItem> */}

                        <MenuItem>
                            <Swal title="Delete Transaction" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this transaction? This action cannot be undone." className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</Swal>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </td>
        </tr>
    )
}
