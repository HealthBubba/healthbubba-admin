import { Badge } from '@/Components/Badge'
import Button from '@/Components/Button/Button'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import TextArea from '@/Components/Form/TextArea'
import Modal from '@/Components/Modal'
import Swal from '@/Components/Swal'
import useModal from '@/Hooks/useModal'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { router, useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'

export default function ({ user }) {

    const [loading, setLoading] = useState(false)
    const [loadingDisapproved, setLoadingDisapproved] = useState(false)
    const [reason, setReason] = useState('')

    // isSignature_verified: 1 = verified/approved, 2 = rejected, else pending.
    const isApproved = Number(user.signature_verified) === 1

    const updateStatus = (status, close) => {
        status ? setLoading(true) : setLoadingDisapproved(true)
        router.post(route('signature.status', { user: user.id }), { status: !!status, reason: reason }, {
            onSuccess: () => {
                close()
            },
            onFinish: () => {
                setLoading(false)
                setLoadingDisapproved(false)
            }
        })
    }

    const modal = useModal()
    const uploadModal = useModal()

    const uploadForm = useForm({ signature: null })

    const submitUpload = (e) => {
        e.preventDefault()
        uploadForm.post(route('practitioners.signatures.upload', { user: user.id }), {
            forceFormData: true,
            onSuccess: () => uploadModal.close(),
        })
    }

    return (
        <>
            <div className="">
                {
                    user.doctor_signature

                    ?

                    <div className="space-y-3">
                        <a href={user.doctor_signature} target='_blank' className='text-primary flex space-x-4 items-center'>View Signature</a>

                        <ul>
                            <li><strong>Uploaded At:</strong> {user.doctor_signature_date}</li>
                            <li><strong>Status:</strong> <Badge status={isApproved ? 'verified' : 'unverified'} >{isApproved ? 'Verified' : 'Unverified'}</Badge></li>
                        </ul>

                        <div className="flex flex-wrap items-center gap-3">
                            {
                                isApproved

                                ?

                                <Button className='btn btn-success' disabled>Approved</Button>

                                :

                                <Swal loading={loading} title='Are you sure you wish to approve this signature?' onConfirm={(close) => updateStatus(true, close)} className='btn btn-primary'>Approve</Swal>
                            }
                            <Button className='btn btn-danger' onClick={modal.open} >Disapprove</Button>
                            {
                                !isApproved &&
                                <Button className='btn btn-warning' onClick={uploadModal.open} >Update Signature</Button>
                            }
                        </div>
                    </div>

                    :

                    <div className="space-y-3">
                        <p className="text-gray-500">No Signature Uploaded</p>
                        <Button className='btn btn-warning' onClick={uploadModal.open} >Upload Signature</Button>
                    </div>

                }
            </div>

            <Modal {...modal}>
                <div className="space-y-3">
                    <div className='flex justify-between font-semibold' >
                        <h3>Provide a reason for disapproving</h3>
                        <button className='' onClick={modal.close} >
                            <XMarkIcon className='size-5' />
                        </button>
                    </div>

                    <div>
                        <Label>Reason</Label>
                        <TextArea
                            style={{
                                resize: 'none'
                            }}
                            defaultValue={reason}
                            onChange={(e) => setReason(e.currentTarget.value)}
                        />
                    </div>

                    <div>
                        <Button onClick={() => updateStatus(false, modal.close)} className='btn-primary w-full' loading={loadingDisapproved} >Update Status</Button>
                    </div>
                </div>
            </Modal>

            <Modal {...uploadModal}>
                <form onSubmit={submitUpload} className="space-y-4">
                    <div className='flex justify-between font-semibold'>
                        <h3>Update Signature</h3>
                        <button type='button' onClick={uploadModal.close} >
                            <XMarkIcon className='size-5' />
                        </button>
                    </div>

                    <p className='text-sm text-gray-500'>{user.full_name} - {user.email}</p>
                    <p className='text-xs text-gray-400'>Uploading a new signature will automatically approve it.</p>

                    <div>
                        <input type="file" className="input" onChange={e => uploadForm.setData('signature', e.currentTarget.files[0])} />
                        <InputError message={uploadForm.errors?.signature} />
                    </div>

                    <div>
                        <Button className='btn-primary w-full' loading={uploadForm.processing} >Update &amp; Approve</Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
