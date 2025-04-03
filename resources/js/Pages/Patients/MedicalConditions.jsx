import React from 'react'
import PatientLayout from './Layouts/PatientLayout'

export default function ({patient}) {

    return (
        <PatientLayout title="Medical Conditions" >
            <div className="overflow-x-auto relative">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='w-94' >Description</th>
                            <th>Diagnosed At</th>
                            <th>Recovered At</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {patient.medical_conditions.map(record => {
                            return (
                                <tr>
                                    <td>{record.user_condition_name}</td>
                                    <td>
                                    {record.user_description}
                                    </td>
                                    <td>{record.user_diagnosed_at} </td>
                                    <td>{record.user_recovered_at}</td>
                                    <td>{record.created_at} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </PatientLayout>
    )
}
