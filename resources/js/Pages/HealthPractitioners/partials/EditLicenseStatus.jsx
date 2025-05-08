import Button from '@/Components/Button/Button'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Select from '@/Components/Form/Select'
import TextArea from '@/Components/Form/TextArea'
import Modal from '@/Components/Modal'
import Status from '@/Enums/Status'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useForm, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

export default function ({license, ...modal}) {

    const form = useForm({
        newStatus: license.status,
        licenseId: license.id,
        reason: ''
    })

    const update = (e) => {
        e.preventDefault()  
        form.post(route('practitioners.licenses.create', {
            user: license.owner.id
        }), {
            onSuccess(){
                modal.close()
            }
        })
    }

    return (
        <Modal {...modal}  >
            <form onSubmit={update} className='space-y-5' >
                <div>
                    <h3>Update License Status</h3>
                </div>

                <div>
                    <Label>Select Status</Label>
                    <Select  defaultValue={form.status} onChange={(e) => form.setData('newStatus', e.currentTarget.value)} >
                        <option value={''}>Select Status</option>
                        <option selected={form.status == Status.UNDER_REVIEW} value={Status.UNDER_REVIEW}>{Status.UNDER_REVIEW}</option>
                        <option selected={form.status == Status.REJECTED} value={Status.REJECTED}>{Status.REJECTED}</option>
                        <option selected={form.status == Status.EXPIRED} value={Status.EXPIRED}>{Status.EXPIRED}</option>
                        <option selected={form.status == Status.VERIFIED} value={Status.VERIFIED}>{Status.VERIFIED}</option>
                    </Select>
                    <InputError message={form.errors?.status} />
                </div>

                {/* <div>
                    <Label>Select Reason</Label>
                    <Select defaultValue='' onChange={(e) => form.setData('reason', e.currentTarget.value)} >
                        <option value={''}>Select Reason</option>
                        <option value={'Unclear Image'}>Unclear Image</option>
                        <option value={'False Document'}>False Document</option>
                    </Select>
                    <InputError message={form.errors?.status} />
                </div> */}

                <div>
                    <Label>Reason</Label>
                    <TextArea
                        style={{
                            resize: 'none'
                        }}
                        defaultValue={form.reason} 
                        onChange={(e) => form.setData('reason', e.currentTarget.value)} 
                    />
                    <InputError message={form.errors?.reason} />
                </div>

                <div>
                    <Button className='btn-primary w-full' loading={form.processing}  >Update Status</Button>
                </div>
            </form>
        </Modal>
    )
}
