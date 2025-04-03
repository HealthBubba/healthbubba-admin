import React from 'react'
import PatientLayout from './Layouts/PatientLayout'

export default function ({patient}) {

    return (
        <PatientLayout title="Medical Records" >
            <div className="overflow-x-auto relative">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>BMI</th>
                            <th >Birth Weight</th>
                            <th>Blood Group</th>
                            <th>Genotype</th>
                            <th>Blood Pressure</th>
                            <th>Pulse Rate</th>
                            <th>Respiratory Rate</th>
                            <th>Oxygen Saturation</th>
                            <th>Temperature</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {patient.medical_records.map(record => {
                            return (
                                <tr>
                                    <td>{record.bmi} {record.bmi_unit} </td>
                                    <td>{record.birth_weight} {record.birth_weight_unit} </td>
                                    <td>{record.blood_group}</td>
                                    <td>{record.genotype} </td>
                                    <td>{record.blood_pressure} {record.blood_pressure_unit} </td>
                                    <td>{record.pulse_rate} {record.pulse_rate_unit} </td>
                                    <td>{record.respiratory_rate} {record.respiratory_rate_unit} </td>
                                    <td>{record.oxygen_saturation} {record.oxygen_saturation_unit} </td>
                                    <td>{record.temperature} {record.temperature_unit} </td>
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
