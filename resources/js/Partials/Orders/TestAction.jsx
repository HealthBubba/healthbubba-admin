import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon, EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid'
import Modal from '@/Components/Modal'
import useModal from '@/Hooks/useModal'
import Upload from '@/Components/Form/upload'
import Button from '@/Components/Button/Button'
import { useForm } from '@inertiajs/react'
import InputError from '@/Components/Form/InputError'
import Disclose from '@/Components/Disclose'
import { EmbedPDF } from '@simplepdf/react-embed-pdf'

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
    
    return (
        <>
            <Disclose show={!order.source} >
                <button onClick={modal.open} className="inline-flex rounded-lg py-2 px-3 text-primary hover:bg-primary/20 bg-primary/10">Upload result</button>

                <Modal className='py-0 max-w-3xl' {...modal}>
                    <div className="flex divide-x">
                        <div className="w-1/2 py-5 pe-6">
                            <h4 className='font-semibold'>Complete Order</h4>
                            <p className='text-muted text-sm'>To complete this order upload the test result for patient use</p>
                        </div>
                        <div className="w-1/2 py-5 ps-6 space-y-3">
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

            <Disclose show={!!order.source} >
                <EmbedPDF>
                    <a href={order.source} className='text-primary flex space-x-4 items-center'>View Test Result <ChevronRightIcon className='size-4' /></a>
                </EmbedPDF>
            </Disclose>

        </>
    )
}