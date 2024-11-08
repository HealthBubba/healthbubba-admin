import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon, EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid'
import Modal from '@/Components/Modal'
import useModal from '@/Hooks/useModal'
import Upload from '@/Components/Form/upload'
import Button from '@/Components/Button/Button'
import { router, useForm } from '@inertiajs/react'
import InputError from '@/Components/Form/InputError'
import Disclose from '@/Components/Disclose'
import { EmbedPDF } from '@simplepdf/react-embed-pdf'
import TrashIcon from '@/Icons/TrashIcon'
import Swal from '@/Components/Swal'

export const TestAction = ({order}) => {

    const modal = useModal()
    const form = useForm({
        files: []
    })

    function upload(){
        form.post(route('orders.tests.upload', {order: order.order_item_id}), {
            onSuccess(){
                modal.close()
                form.reset()
            }
        })
    }
    
    function deleteResult(){
        router.get(route('orders.tests.delete', {order: order.order_item_id, testResult: order.result?.id}))
    }

    return (
        <>
            <Disclose show={!order.result} >
                <button onClick={modal.open} className="inline-flex rounded-lg py-2 px-3 text-primary hover:bg-primary/20 bg-primary/10">Upload result</button>

                <Modal className='py-0 !max-w-2xl' {...modal}>
                    <div className="md:flex md:divide-x">
                        <div className="md:w-1/2 pt-5 md:pe-6">
                            <h4 className='font-semibold'>Complete Order</h4>
                            <p className='text-muted text-sm'>To complete this order upload the test result for patient use</p>
                        </div>
                        <div className="md:w-1/2 py-5 md:ps-6 space-y-3">
                            <h4 className="font-semibold">Upload Test Result</h4>

                            <div>
                                <Upload onChange={(files) => form.setData('files', files)} />
                                <InputError message={form.errors.files} />
                            </div>

                            <div className='flex justify-end space-x-3'>
                                <Button onClick={modal.close} className='btn-light' >Cancel</Button>
                                <Button className='btn-primary flex-1' loading={form.processing} onClick={upload} >Upload test result <PlusIcon className='size-4' /></Button>
                            </div>
                        </div>  
                    </div>
                </Modal>
            </Disclose>

            <Disclose show={!!order.result} >
                <div className="flex space-x-2">
                    <EmbedPDF>
                        <a href={order.result?.result} className='text-primary flex space-x-4 items-center'>View Test Result <ChevronRightIcon className='size-4' /></a>
                    </EmbedPDF>

                    <Swal onConfirm={deleteResult} type='warning' onClick={deleteResult} className=''>
                        <TrashIcon className='size-5 stroke-red-600' />
                    </Swal>
                </div>
            </Disclose>

        </>
    )
}