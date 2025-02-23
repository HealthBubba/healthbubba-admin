import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage } from '@inertiajs/react'

export default function () {

    const {props: {user: {data: user}}} = usePage()


    return (
        <HealthPractitionersLayout title="Overview">
            <div className='space-y-5'>
                <div className='space-y-3' >
                    <div>
                        <h4 className='font-semibold'>Personal Information</h4>
                    </div>

                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4 text-sm' >
                        <div>
                            <h4 className='font-medium'>First Name</h4>
                            <p>{user.first_name}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Last Name</h4>
                            <p>{user.last_name}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Email Address</h4>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Phone Number</h4>
                            <p>{user.phone}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Date of Birth</h4>
                            <p>{user.dob}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Gender</h4>
                            <p>{user.sex}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Weight</h4>
                            <p>{user.weight} {user.weight_unit} </p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Height</h4>
                            <p>{user.height} {user.height_unit} </p>
                        </div>
                        <div className='col-span-2' >
                            <h4 className='font-medium'>Address</h4>
                            <p>{user.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </HealthPractitionersLayout>
    )
}
