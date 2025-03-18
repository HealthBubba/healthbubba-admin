import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Modal from '@/Components/Modal'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function EditSpecialtyModal({modal, specialty = null}) {
    const form = useForm({
        specialty_name: specialty?.specialty_name
    })

    const updateForm = () => {
        form.post(route('specialties.update', {
            specialty: specialty?.specialty_id
        }), {
            onSuccess(){
                !specialty ? form.reset() : null
            }
        })
    }

    return (
        <Modal {...modal} >
            <div className="space-y-4">
                <div>
                    <Label>Specialty</Label>
                    <Input name="specialty_name" placeholder="Specialty Name" value={form.data.specialty_name} onChange={(e) => form.setData('specialty_name', e.currentTarget.value)} />
                    <InputError message={form.errors?.specialty_name} />
                </div>

                <div>
                    <Button className={'btn-primary'} onClick={updateForm} >Save Changes</Button>
                </div>
            </div>
        </Modal>
    )
}
