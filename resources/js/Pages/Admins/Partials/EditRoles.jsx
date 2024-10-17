import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Select from '@/Components/Form/Select'
import Switch from '@/Components/Form/Switch'
import { permissions } from '@/Constants/Roles'
import { router, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useMemo } from 'react'

export const EditRoles = ({admin}) => {

    const {props} = usePage()
    
    const form = useForm({
        'role': admin.access_level,
        'permissions': admin.permissions
    })

    const update = () => {
        form.post(route('admins.roles', {admin: admin.id}))
    }

    const onChange = (e, value) => {
        if(e.currentTarget.checked) {
            form.setData('permissions', [...form.data.permissions, value])
        }else{
            form.setData('permissions', form.data.permissions.filter((val, index) => val != value))
        }
    }

    return (
        <div className='space-y-5'>
            <div>
                <p className='font-medium mb-1'>Role</p>
                <Select onChange={e => form.setData('role', e.currentTarget.value)} defaultValue={admin.access_level} >
                    <option value="" disabled>Select Role</option>
                    {Object.keys(props.roles).map((role) => <option key={role}  value={role} >{props.roles[role]}</option>)}
                </Select>
                <InputError message={form.errors?.role} />
            </div>

            <div className='border-t'></div>

            <div>
                <p className='font-medium text-base mb-5'>Permission</p>

                <div className='space-y-3 text-[#525254]'>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Create</p>
                        </div>
                        <div>
                            <Switch onChange={e => onChange(e, permissions.create)} checked={form.data.permissions.includes(permissions.create)} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Read</p>
                        </div>
                        <div>
                            <Switch onChange={e => onChange(e, permissions.read)} checked={form.data.permissions.includes(permissions.read)} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Update</p>
                        </div>
                        <div>
                            <Switch onChange={e => onChange(e, permissions.update)} checked={form.data.permissions.includes(permissions.update)} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Delete</p>
                        </div>
                        <div>
                            <Switch onChange={e => onChange(e, permissions.delete)} checked={form.data.permissions.includes(permissions.delete)} />
                        </div>
                    </div>

                    <InputError message={form.errors?.permissions} />

                    <div className='pt-3'>
                        <Button onClick={update} className='btn-primary w-full'>Update Changes</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
