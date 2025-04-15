import Button from '@/Components/Button/Button'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Select from '@/Components/Form/Select'
import Modal from '@/Components/Modal'
import Status from '@/Enums/Status'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'

export default function ({license, ...modal}) {

    const {props: {user}} = usePage()

    const form = useForm({
        newStatus: license.status,
        licenseId: license.id
    })

    const update = (e) => {
        e.preventDefault()  
        form.post(route('practitioners.licenses.create', {
            user: user.id
        }))
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

                <div>
                    <Button className='btn-primary w-full' loading={form.processing}  >Update Status</Button>
                </div>
            </form>
        </Modal>
    )
}
