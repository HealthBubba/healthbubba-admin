import { Badge } from '@/Components/Badge'
import Button from '@/Components/Button/Button'
import Disclose from '@/Components/Disclose'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import TextArea from '@/Components/Form/TextArea'
import Modal from '@/Components/Modal'
import Swal from '@/Components/Swal'
import useModal from '@/Hooks/useModal'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { router, useForm, usePage } from '@inertiajs/react'
import axios from 'axios'
import FsLightbox from 'fslightbox-react'
import React from 'react'
import {useState} from 'react'
import { toast } from 'react-toastify'

export default function ({user}) {

    const [show, setShow] = useState(false)
    const {api} = usePage().props
    const [loading, setLoading] = useState(false)
    const [loadingDisapproved, setLoadingDisapproved] = useState(false)

    const [reason, setReason] = useState('')

    const updateStatus = (status, close) => {
        status ? setLoading(true) : setLoadingDisapproved(true)
        router.post(route('signature.status', {user: user.id}), {status: !!status, reason: reason}, {
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

    return (
        <>
            <div className="">
                { 
                    user.doctor_signature

                    ?

                    <>
                        <div className="space-y-3">
                            <img onClick={() => setShow(!show)} className='cursor-pointer max-w-[30%]'  src={user.doctor_signature} />

                            <ul>
                                <li><strong>Uploaded At:</strong> {user.doctor_signature_date}</li>
                                <li><strong>Status:</strong> <Badge status={user.signature_verified ? 'verified' : 'unverified'} >{user.signature_verified ? 'Verified' : 'Unverified'}</Badge></li>
                            </ul>

                            <div className="space-x-4">
                                <Swal loading={loading} title='Are you sure you wish to approve this signature?' onConfirm={(close) => updateStatus(true, close)} className='btn btn-primary'>Approve</Swal>
                                <Button className='btn btn-danger' onClick={modal.open} >Disapprove</Button>
                            </div>
                        </div>

                        <FsLightbox
                            toggler={show} 
                            sources={[
                                user.doctor_signature
                            ]}
                        />
                    </>

                    :

                    <p className="text-gray-500">No Signature Uploaded</p>
                    
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
        </>
    )
}
