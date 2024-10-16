import Button from '@/Components/Button/Button'
import Label from '@/Components/Form/Label'
import Select from '@/Components/Form/Select'
import Switch from '@/Components/Form/Switch'
import React from 'react'

export const EditRoles = ({admin}) => {
    return (
        <div className='space-y-5'>
            <div>
                <p className='font-medium mb-1'>Role</p>
                <Select  >
                    <option value="">Select Role</option>
                </Select>
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
                            <Switch />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Read</p>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Update</p>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='text-base' >Delete</p>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>

                    <div className='pt-3'>
                        <Button className='btn-primary w-full'>Update Changes</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
