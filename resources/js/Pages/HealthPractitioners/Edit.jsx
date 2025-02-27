import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage, useForm } from '@inertiajs/react'
import Label from '@/Components/Form/Label'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Button from '@/Components/Button/Button'
import Select from '@/Components/Form/Select'
import TextArea from '@/Components/Form/TextArea'
import FileInput from '@/Components/Form/FileInput'
import { toast } from 'react-toastify'

export default function () {

    const {props: {user: {data: user}}} = usePage()

    const form = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        dob: user.dob,
        sex: user.sex,
        address: user.address,
        picture: user.picture,
        bio: user.bio,
        title: user.title,
        years_of_experience: user.years_of_experience,
        clinic_affiliation: user.clinic_affiliation
    })

    function update(e){
        e.preventDefault()
        form.post(route('practitioners.update', {user: user.id}), {
            onSuccess(){
                toast.success('Health Practitioner Updated');
            }
        })

    }

    return (
        <HealthPractitionersLayout title="Edit">
            <form onSubmit={update} className="space-y-5">
                <div className='md:w-1/2 space-y-3'>
                    <div>
                        <h4 className='font-semibold'>Personal Information</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-span-full">
                            <Label>Profile Image</Label>
                            
                            <FileInput value={form.data.picture} onChange={files => form.setData('picture', files[0])} />

                        </div>
                        <div>
                            <Label>First Name</Label>
                            <Input value={form.data.first_name} placeholder="First Name" onChange={(e) => form.setData('first_name', e.currentTarget.value)}  />
                            <InputError message={form.errors?.first_name} />
                        </div>

                        <div>
                            <Label>Last Name</Label>
                            <Input value={form.data.last_name} placeholder="Last Name" onChange={(e) => form.setData('last_name', e.currentTarget.value)} />
                            <InputError message={form.errors?.last_name} />
                        </div>

                        <div>
                            <Label>Email Address</Label>
                            <Input value={form.data.email} placeholder="Email Address" onChange={(e) => form.setData('email', e.currentTarget.value)} />
                            <InputError message={form.errors?.email} />
                        </div>

                        <div>
                            <Label>Phone Number</Label>
                            <Input value={form.data.phone} type="tel" placeholder="Phone Number" onChange={(e) => form.setData('phone', e.currentTarget.value)} />
                            <InputError message={form.errors?.phone} />
                        </div>

                        <div>
                            <Label>Date of Birth</Label>
                            <Input type="date" value={form.data.dob} placeholder="Email Address" onChange={(e) => form.setData('dob', e.currentTarget.value)} />
                            <InputError message={form.errors?.dob} />
                        </div>

                        <div>
                            <Label>Gender</Label>
                            <Select value={form.data.sex} onChange={(e) => form.setData('sex', e.currentTarget.value)}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>                        
                            <InputError message={form.errors?.sex} />
                        </div>

                        <div className='col-span-full'>
                            <Label>Address</Label>
                            <Input value={form.data.address} placeholder="Address" onChange={(e) => form.setData('address', e.currentTarget.value)} />                    
                            <InputError message={form.errors?.address} />
                        </div>

                        <div className='col-span-full'>
                            <Label>Personal Bio</Label>
                            <TextArea value={form.data.bio} rows={4} placeholder="Bio" onChange={(e) => form.setData('bio', e.currentTarget.value)} className="resize-none" />                    
                            <InputError message={form.errors?.bio} />
                        </div>
                    </div>
                    <div>
                        <Button className='btn-primary' >Save Changes</Button>
                    </div>
                </div>

                <div className='md:w-1/2 space-y-3'>
                    <div>
                        <h4 className='font-semibold'>Work Information</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label>Title</Label>
                            <Input value={form.data.title} placeholder="Title" onChange={(e) => form.setData('title', e.currentTarget.value)}  />
                            <InputError message={form.errors?.title} />
                        </div>

                        <div>
                            <Label>Years of Experience</Label>
                            <Input value={form.data.years_of_experience} placeholder="Years of Experience" type="number" onChange={(e) => form.setData('years_of_experience', e.currentTarget.value)} />
                            <InputError message={form.errors?.last_name} />
                        </div>

                        <div className='col-span-full'>
                            <Label>Affiliated Clinic</Label>
                            <Input value={form.data.clinic_affiliation} placeholder="Clinic Affiliation" onChange={(e) => form.setData('clinic_affiliation', e.currentTarget.value)} />
                            <InputError message={form.errors?.clinic_affiliation} />
                        </div>
                    </div>
                    <div>
                        <Button className='btn-primary' >Save Changes</Button>
                    </div>
                </div>

            </form>
        </HealthPractitionersLayout>
    )
}
