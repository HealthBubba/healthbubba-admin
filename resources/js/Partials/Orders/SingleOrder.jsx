import Button from '@/Components/Button/Button'
import Disclose from '@/Components/Disclose'
import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import OrderItem from './OrderItem'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Currency from '@/Components/Currency'
import { router } from '@inertiajs/react'

export default function SingleOrder({order}) {

    const [show, setShow] = useState(false)

    function update(status){
        router.post(route('orders.tests.status', {order: order.id, status}))
    }


    return (
        <>
            <tr >
                <td>{order.no}</td>
                <td>{order.order_id}</td>
                <td>{order.user.full_name}</td>
                <td><Currency /> {order.order_value}</td>
                <td>{order.status}</td>
                <td>8898921</td>
                <td>{order.is_order_paid ? 'Paid' : 'Unpaid'}</td>
                <td className='text-left flex gap-2'>
                    <Menu>
                        <MenuButton className="border-2 max-w-32 p-1 bg-white flex items-center space-x-2 rounded-lg">
                            <div className="flex-1 overflow-hidden text-ellipsis">
                                <p className='w-full text-nowrap block'>Test Scheduled</p>
                            </div>
                            <div className='shrink-0'>
                                <ChevronDownIcon className='size-4' />                                        
                            </div>
                        </MenuButton>
                        <MenuItems transition anchor="bottom end" className="min-w-52 text-left origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                            <div className='p-1'>
                                <MenuItem >
                                    <button onClick={() => update('pe')} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Pending confirmation</button>
                                </MenuItem>
                            </div>

                            <div className="border-t-[1.5px]"></div>
                            
                            <div className='p-1'>
                                <MenuItem >
                                    <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Confirmed</button>
                                </MenuItem>
                            </div>

                            <div className="border-t-[1.5px]"></div>

                            <div className='p-1'>
                                <MenuItem >
                                    <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Test Scheduled</button>
                                </MenuItem>
                            </div>

                            <div className="border-t-[1.5px]"></div>

                            <div className='p-1'>
                                <MenuItem >
                                    <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">In Progress</button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                    <button className='border-2 p-1 bg-white rounded-lg' onClick={() => setShow(!show)} ><PlusIcon className='size-4' /></button>
                </td>
            </tr>

            <Disclose show={show && order.items.length > 0}>
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
