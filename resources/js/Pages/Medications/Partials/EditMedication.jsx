import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Select from '@/Components/Form/Select'
import TextArea from '@/Components/Form/TextArea'
import Modal from '@/Components/Modal'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'

export default function ({medication = null, ...modal}) {

    const form = useForm({
        medication_name: medication?.name,
        medication_desc: medication?.description,
        medication_category: medication?.category?.id,
        medication_pic: null,
        medication_price: medication?.price
    })

    const update = () => {
        form.post(medication ? route('medications.update', {
            medication: medication.id
        }) : route('medications.store'), {
            onSuccess(){
                if(medication) {
                    modal.close()
                } 
            }
        })
    }

    const {categories} = usePage().props

    return (
        <Modal {...modal} >
            <div className='space-y-4' >
                <div>
                    <Label>Medication Name</Label>
                    <Input value={form.data.medication_name} onChange={e => form.setData('medication_name', e.currentTarget.value)} />
                    <InputError message={form.errors?.medication_name} />
                </div>
                
                <div>
                    <Label>Medication Description</Label>
                    <TextArea value={form.data.medication_desc} onChange={e => form.setData('medication_desc', e.currentTarget.value)} />
                    <InputError message={form.errors?.medication_desc} />
                </div>
                
                <div>
                    <Label>Medication Category</Label>
                    <Select value={form.data.medication_category} onChange={e => form.setData('medication_category', e.currentTarget.value)} >
                        {categories.map(category => <option value={category.id}>{category.name}</option>)}
                    </Select>
                    <InputError message={form.errors?.medication_desc} />
                </div>
                
                <div>
                    <Label>Medication Price</Label>
                    <Input value={form.data.medication_price} onChange={e => form.setData('medication_price', e.currentTarget.value)} />
                    <InputError message={form.errors?.medication_price} />
                </div>

                <div className='flex justify-end space-x-3'>
                    <Button role="button" onClick={modal.close} className=''>Cancel</Button>
                    <Button onClick={update} loading={form.processing} className='btn-primary'>Save</Button>
                </div>
            </div>
        </Modal>
    )
}
