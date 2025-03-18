import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Modal from '@/Components/Modal'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function EditQualificationModal({modal, qualification = null}) {
    const form = useForm({
        qualification_name: qualification?.qualification_name
    })

    const updateForm = () => {
        form.post(route('qualifications.update', {
            qualification: qualification?.qualification_name
        }))
    }

    return (
        <Modal {...modal} >
            <div className="space-y-4">
                <div>
                    <Label>Qualification Name</Label>
                    <Input name="qualification_name" placeholder="Qualification Name" value={form.data.qualification_name} onChange={(e) => form.setData('qualification_name', e.currentTarget.value)} />
                    <InputError message={form.errors?.qualification_name} />
                </div>

                <div>
                    <Button className={'btn-primary'} onClick={updateForm} >Save Changes</Button>
                </div>
            </div>
        </Modal>
    )
}
