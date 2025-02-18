import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Modal from '@/Components/Modal'
import useModal from '@/Hooks/useModal'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function ({user}) {
    
    const modal = useModal()

    const form = useForm({
        licence: null
    })

    const upload = (e) => {
        e.preventDefault()

        form.post(route('practitioners.upload', {user: user.id}), {
            forceFormData: true,
        })
    }


    return (
        <>
            <button className='text-warning font-medium' onClick={modal.open} >Upload Licence</button>

            <Modal {...modal} >

                <form onSubmit={upload} className="space-y-4">
                    <div>
                        <h3>Upload Medical License</h3>
                        <p className='text-sm text-gray-500'>{user.full_name} - {user.email}</p>
                    </div>

                    <div>
                        <input type="file" className="input" onChange={e => form.setData('licence', e.currentTarget.files[0])} />
                        <InputError message={form.errors?.licence} />
                    </div>

                    <div>
                        <Button className='btn btn-sm btn-primary' >Upload Licence</Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
