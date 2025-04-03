import React from 'react'
import PatientLayout from './Layouts/PatientLayout'

export default function ({patient}) {

    return (
        <PatientLayout patient={patient} title="Overview" >
            <div className='space-y-10'>
                <div className='space-y-3' >
                    <div>
                        <h4 className='font-semibold'>Personal Information</h4>
                    </div>

                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4 text-sm' >
                        <div>
                            <h4 className='font-medium'>First Name</h4>
                            <p>{patient.first_name}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Last Name</h4>
                            <p>{patient.last_name}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Email Address</h4>
                            <p>{patient.email}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Phone Number</h4>
                            <p>{patient.phone}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Date of Birth</h4>
                            <p>{patient.dob}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Gender</h4>
                            <p>{patient.sex}</p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Weight</h4>
                            <p>{patient.weight} {patient.weight_unit} </p>
                        </div>
                        <div>
                            <h4 className='font-medium'>Height</h4>
                            <p>{patient.height} {patient.height_unit} </p>
                        </div>
                        <div className='col-span-2' >
                            <h4 className='font-medium'>Address</h4>
                            <p>{patient.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </PatientLayout>
    )
}
