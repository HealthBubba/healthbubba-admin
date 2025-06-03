import React from 'react'

export default function ({condition}) {

    return (
        <div className='p-4 rounded-xl space-y-5 bg-gray-100 border'>
            <div className="space-y-2" >
                <div className='p-2 rounded-lg bg-gray-200'>
                    <p className='font-semibold' >Treatment Status</p>
                </div>

                <div className='grid md:grid-cols-4 gap-2'>
                    <div className=''>
                        <p className="font-medium">Under Treatment</p>
                        <p>{condition?.is_under_treatment ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Last Checkup Date</p>
                        <p className='text-gray-500'>{condition?.last_medical_checkup_date ? new Date(condition?.last_medical_checkup_date).toDateString() : 'Not Available'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Has Children</p>
                        <p className='text-gray-500'>{condition?.has_children ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Is Taking Medication</p>
                        <p className='text-gray-500'>{condition?.is_taking_medications ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Had General Health Change</p>
                        <p className='text-gray-500'>{condition?.had_general_health_change ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Has Family Medical History</p>
                        <p className='text-gray-500'>{condition?.has_family_medical_history ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Has Seizure History</p>
                        <p className='text-gray-500'>{condition?.has_seizure_history ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Has Heart or BP issues</p>
                        <p className='text-gray-500'>{condition?.has_heart_or_bp_issues ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Had Surgeries</p>
                        <p className='text-gray-500'>{condition?.had_surgeries ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Has Allergies</p>
                        <p className='text-gray-500'>{condition?.has_allergies ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Has Asthma</p>
                        <p className='text-gray-500'>{condition?.has_asthma ? 'Yes' : 'No'}</p>
                    </div>
                    <div className=''>
                        <p className="font-medium">Menstrual History</p>
                        <p className='text-gray-500'>{condition?.menstrual_history || 'Not Available'}</p>
                    </div>
                    <div className="col-span-full">
                        <p className="font-medium">Treatment Conditions</p>
                        <p className='text-gray-500'>{condition?.treatment_conditions.join(', ') || 'None'}</p>
                    </div>
                    <div className="col-span-full">
                        <p className="font-medium">Allergies</p>
                        <p className='text-gray-500'>{condition?.allergies.join(', ') || 'None'}</p>
                    </div>
                    <div className="col-span-full">
                        <p className="font-medium">Medications</p>
                        <p className='text-gray-500'>{condition?.medications.join(', ') || 'None'}</p>
                    </div>
                    <div className="col-span-full">
                        <p className="font-medium">Immunization History</p>
                        <p className='text-gray-500'>{condition?.immunization_history.join(', ') || 'None'}</p>
                    </div>
                    <div className="col-span-full">
                        <p className="font-medium">Family Medical Conditions</p>
                        <p className='text-gray-500'>{condition?.family_medical_conditions.join(', ') || 'None'}</p>
                    </div>
                    <div className="col-span-full">
                        <p className="font-medium">General Health Change Explanation</p>
                        <p className='text-gray-500'>{condition?.general_health_change_explanation || 'Not Available'}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-2" >
                <div className='p-2 rounded-lg bg-gray-200'>
                    <p className='font-semibold' >Surgeries</p>
                </div>

                <div>
                    <table className='border-b'>
                        <thead>
                            <tr  className='text-black'>
                                <th>Name</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                condition.surgeries?.map((surgery) => (
                                    <tr>
                                        <td>{surgery.name}</td>
                                        <td>{surgery.date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
