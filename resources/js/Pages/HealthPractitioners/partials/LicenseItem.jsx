import { Badge } from '@/Components/Badge'
import Button from '@/Components/Button/Button'
import InputError from '@/Components/Form/InputError'
import Modal from '@/Components/Modal'
import Status from '@/Enums/Status'
import useModal from '@/Hooks/useModal'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'
import EditLicenseStatus from './EditLicenseStatus'

export default function ({ license, showOwner }) {

    const statusModal = useModal()
    const uploadModal = useModal()

    const isVerified = license.status === Status.VERIFIED

    const uploadForm = useForm({ license: null })

    const submitUpload = (e) => {
        e.preventDefault()
        uploadForm.post(route('licenses.upload', { license: license.id }), {
            forceFormData: true,
            onSuccess: () => uploadModal.close(),
        })
    }

    return (
        <tr>
            {
                showOwner &&
                <td>
                    {
                        !!license.owner &&
                        <Link href={route('practitioners.show', { user: license.owner.id })} className='link'>{license.owner.full_name}</Link>
                    }
                </td>
            }
            <td>
                <a href={license.license_image} target='_blank' className='text-primary flex space-x-4 items-center'>View License</a>
            </td>
            <td>{license.expiration_date}</td>
            <td>{license.qualification?.qualification_name}</td>
            <td>
                {
                    isVerified
                    ? <Badge status='verified'>Verified</Badge>
                    : <span className='capitalize'>{license.status}</span>
                }
            </td>
            <td>
                <div className="flex flex-wrap items-center gap-2">
                    {
                        isVerified

                        ?

                        <Button className='btn btn-success btn-sm' disabled>Approved</Button>

                        :

                        <Button className='btn btn-warning btn-sm' onClick={uploadModal.open} >Update License</Button>
                    }
                    <Button className='btn-sm' onClick={statusModal.open} >Status</Button>
                </div>

                <EditLicenseStatus {...statusModal} license={license} />

                <Modal {...uploadModal}>
                    <form onSubmit={submitUpload} className="space-y-4">
                        <div className='flex justify-between font-semibold'>
                            <h3>Update License</h3>
                            <button type='button' onClick={uploadModal.close} >
                                <XMarkIcon className='size-5' />
                            </button>
                        </div>

                        <p className='text-xs text-gray-400'>Uploading a new license will automatically approve it.</p>

                        <div>
                            <input type="file" className="input" onChange={e => uploadForm.setData('license', e.currentTarget.files[0])} />
                            <InputError message={uploadForm.errors?.license} />
                        </div>

                        <div>
                            <Button className='btn-primary w-full' loading={uploadForm.processing} >Update &amp; Approve</Button>
                        </div>
                    </form>
                </Modal>
            </td>
        </tr>
    )
}
