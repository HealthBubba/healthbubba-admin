import Button from '@/Components/Button/Button'
import Disclose from '@/Components/Disclose'
import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import OrderItem from './OrderItem'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Currency from '@/Components/Currency'
import { Link, router } from '@inertiajs/react'
import { MinusIcon } from '@heroicons/react/24/outline'

export default function SingleOrder({order}) {

    const [show, setShow] = useState(false)

    function update(status){
        router.post(route('orders.tests.status', {order: order.id, status}))
    }

    return (
        <>
            <tr className={show ? 'bg-gray-50' : ''} >
                <td>
                    <p className='link' >{order.id}</p>
                </td>
                <td>
                    <Link href={route('patients.show', {id: order.user.id})} className='link' >{order.user.full_name}</Link>
                </td>
                <td>
                    {order.user.email}
                </td>
                <td>
                    {order.user.phone}
                </td>
                <td>
                    {order.user.delivery_address}
                </td>
                <td><Currency /> {order.amount}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td>{order.is_order_paid ? 'Paid' : 'Unpaid'}</td>
                <td className='text-left flex gap-2'>

                    <button className='border-2 p-1 bg-white rounded-lg' onClick={() => setShow(!show)} >
                        {
                            show

                            ?

                            <MinusIcon className='size-4' />

                            :

                            <PlusIcon className='size-4' />
                        }
                    </button>
                </td>
            </tr>

            <Disclose show={show}>
                <tr>
                    <td colSpan={9} className='bg-gray-50'>
                        <div className="mb-2">
                            <h4 className='font-medium'>Order Items</h4>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Type</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                 {
                                    order.items.map((item) => (
                                        <OrderItem key={item.order_item_id} order={item} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </td>
                </tr>
            </Disclose>
        </>
    )
}
