import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import TextArea from '@/Components/Form/TextArea'
import Modal from '@/Components/Modal'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function EditSpecialtyModal({modal, specialty = null}) {
    const form = useForm({
        specialty_name: specialty?.specialty_name,
        short_preview: specialty?.short_preview,
        full_description: specialty?.full_description,
        image: null
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
            <div className="space-y-2">
                <div className='space-y-0.5'>
                    <Label>Specialty</Label>
                    <Input name="specialty_name" placeholder="Specialty Name" value={form.data.specialty_name} onChange={(e) => form.setData('specialty_name', e.currentTarget.value)} />
                    <InputError message={form.errors?.specialty_name} />
                </div>
                
                <div className='space-y-0.5'>
                    <Label>Short Preview</Label>
                    <TextArea name="short_preview" className="resize-none" placeholder="Short Preview" value={form.data.short_preview} onChange={(e) => form.setData('short_preview', e.currentTarget.value)} />
                    <InputError message={form.errors?.short_preview} />
                </div>
                
                <div className='space-y-0.5'>
                    <Label>Full Description</Label>
                    <TextArea name="full_description" className="resize-none" placeholder="Full Description" value={form.data.full_description} rows='5' onChange={(e) => form.setData('full_description', e.currentTarget.value)} />
                    <InputError message={form.errors?.full_description} />
                </div>
                
                <div className='space-y-0.5'>
                    <Label>File</Label>
                    <Input type="file" name="image" onChange={e => form.setData('image', e.currentTarget.files[0] ?? null)} className="rounded-none shadow-none border-none" />
                    <InputError message={form.errors?.image} />
                </div>

                <div className='pt-5'>
                    <Button className={'btn-primary'} onClick={updateForm} >Save Changes</Button>
                </div>
            </div>
        </Modal>
    )
}
