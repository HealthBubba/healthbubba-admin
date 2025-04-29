import React, { useMemo } from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage } from '@inertiajs/react'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function () {

    const {props: {user}} = usePage()

    console.log(user.availabilities)

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
                            <p className="text-gray-600">{user.first_name}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Last Name</h4>
                            <p className="text-gray-600">{user.last_name}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Email Address</h4>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Phone Number</h4>
                            <p className="text-gray-600">{user.phone}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Date of Birth</h4>
                            <p className="text-gray-600">{user.dob ?? 'N/A'}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Gender</h4>
                            <p className="text-gray-600">{user.sex ?? 'N/A'}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Weight</h4>
                            <p className="text-gray-600">{user.weight ?? 'N/A'} {user.weight_unit} </p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Height</h4>
                            <p className="text-gray-600">{user.height ?? 'N/A'} {user.height_unit} </p>
                        </div>
                        <div className='col-span-2' >
                            <h4 className='font-medium'>Address</h4>
                            <p className="text-gray-600">{user.address ?? 'N/A'}</p>
                        </div>
                    </div>
                </div>

                <div className="border"></div>

                <div className='space-y-3'>
                    <div>
                        <h4 className='font-semibold'>Signature</h4>
                    </div>

                    <div className="">
                        { 
                            user.doctor_signature

                            ?

                            <>
                                <div className="space-y-3">
                                    <a href={user.doctor_signature} target='_blank'>
                                        <img className='max-w-[30%]'  src={user.doctor_signature} />
                                    </a>
                                    <p><strong>Uploaded At:</strong> {user.doctor_signature_date}</p>
                                </div>
                            </>

                            :

                            <p className="text-gray-500">No Signature Uploaded</p>
                            
                        }
                    </div>
                </div
                >
                <div className="border"></div>

                <div className='space-y-3'>
                    <div>
                        <h4 className='font-semibold'>Specialties</h4>
                    </div>

                    <div className="gap-3 grid md:grid-cols-3 md:divide-x">
                        { 
                            user.specialties.length

                            ?

                            <ol className='list-inside list-decimal'>
                                {user.specialties.map(specialty => {
                                    return (
                                        <li className=''>{specialty.specialty_name}</li>
                                    )
                                }) }
                            </ol>

                            :

                            <p className="text-gray-500">No Specialty</p>
                            
                        }
                    </div>
                </div>

                <div className="border"></div>

                <div className='space-y-3'>
                    <div>
                        <h4 className='font-semibold'>Available Days</h4>
                    </div>

                    <div className="gap-3 grid md:grid-cols-7">
                        { days.map(day => <AvailableDay user={user} day={day} key={day} />) }
                    </div>
                </div>
            </div>
        </HealthPractitionersLayout>
    )
}

const AvailableDay = ({day, user}) => {
    const existingDay = useMemo(() => {
        return user.availabilities.find(weekday => day.includes(weekday.day_of_week))
    }, [])

    const isAvailable = useMemo(() => {
        if(!existingDay) return false;
        return existingDay.is_available;
    }, [])
    
    return (
        <div className={`border-2 px-3 py-2 rounded ${isAvailable ? 'border-primary bg-primary-50' : 'bg-gray-50'}`} >
            <p className='font-medium' >{day}</p>
            <div className='text-[13px]' >
                {
                    isAvailable

                    ?

                    <p>{existingDay.start_time} - {existingDay.end_time}</p>
                    
                    :
                    
                    <p>Not Available</p>
                }
            </div>
        </div>
    )
}