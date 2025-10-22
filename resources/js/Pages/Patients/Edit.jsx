import React from 'react'
import PatientLayout from './Layouts/PatientLayout'
import Label from '@/Components/Form/Label'
import Input from '@/Components/Form/Input'
import { useForm } from '@inertiajs/react'
import InputError from '@/Components/Form/InputError'
import Select from '@/Components/Form/Select'
import TextArea from '@/Components/Form/TextArea'
import Button from '@/Components/Button/Button'

export default function ({patient}) {

    const form = useForm(patient)

    const submit = (e) => {
        e.preventDefault()
        form.post(route('patients.update', {user: patient.id}))
    }

    return (
        <PatientLayout title="Edit Patient" >
            <form onSubmit={submit} className="grid md:grid-cols-4 gap-5">
                <div className='space-y-1'>
                    <Label>First Name</Label>
                    <Input value={form.data.first_name} onChange={e => form.setData('first_name',e.currentTarget.value)} />
                    <InputError message={form.errors.first_name} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Last Name</Label>
                    <Input value={form.data.last_name} onChange={e => form.setData('last_name',e.currentTarget.value)} />
                    <InputError message={form.errors.last_name} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Email Address</Label>
                    <Input value={form.data.email} type="email" onChange={e => form.setData('email',e.currentTarget.value)} />
                    <InputError message={form.errors.email} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Phone Number</Label>
                    <Input value={form.data.phone} type="tel" onChange={e => form.setData('phone',e.currentTarget.value)} />
                    <InputError message={form.errors.phone} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Date of Birth</Label>
                    <Input value={form.data.dob} type="date" onChange={e => form.setData('dob',e.currentTarget.value)} />
                    <InputError message={form.errors.dob} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Gender</Label>
                    <Select value={form.data.sex} onChange={e => form.setData('sex', e.currentTarget.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                    <InputError message={form.errors.sex} />
                </div>
                
                <div className='space-y-1 col-span-full'>
                    <Label>Address</Label>
                    <Input value={form.data.address} onChange={e => form.setData('address',e.currentTarget.value)} />
                    <InputError message={form.errors.address} />
                </div>
                
                <div className='space-y-1 col-span-full'>
                    <Label>Bio</Label>
                    <TextArea value={form.data.bio} onChange={e => form.setData('bio',e.currentTarget.value)} />
                    <InputError message={form.errors.bio} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Weight</Label>
                    <Input value={form.data.weight} onChange={e => form.setData('weight',e.currentTarget.value)} />
                    <InputError message={form.errors.weight} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Weight Unit</Label>
                    <Input value={form.data.weight_unit} onChange={e => form.setData('weight_unit', e.currentTarget.value)} />
                    <InputError message={form.errors.weight_unit} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Height</Label>
                    <Input value={form.data.height} onChange={e => form.setData('height', e.currentTarget.value)} />
                    <InputError message={form.errors.height} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Height Unit</Label>
                    <Input value={form.data.height_unit} onChange={e => form.setData('height_unit', e.currentTarget.value)} />
                    <InputError message={form.errors.height_unit} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Height In Inches</Label>
                    <Input value={form.data.height_in_inches} onChange={e => form.setData('height_in_inches', e.currentTarget.value)} />
                    <InputError message={form.errors.height_in_inches} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Blood Type</Label>
                    <Input value={form.data.blood_type} onChange={e => form.setData('blood_type', e.currentTarget.value)} />
                    <InputError message={form.errors.blood_type} />
                </div>
                
                <div className='space-y-1'>
                    <Label>Genotype</Label>
                    <Input value={form.data.genotype} onChange={e => form.setData('genotype', e.currentTarget.value)} />
                    <InputError message={form.errors.genotype} />
                </div>
                
                <div className="col-span-full">
                    <Button loading={form.processing} className={'btn-primary'} type="submit">Save Changes</Button>
                </div>
            </form>
        </PatientLayout>
    )
}
