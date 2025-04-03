import React from 'react'
import PatientLayout from './Layouts/PatientLayout'

export default function ({patient}) {

    return (
        <PatientLayout title="Medical Conditions" >
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
                                    <td>{records.bmi} {records.bmi_unit} </td>
                                    <td>{records.birth_weight} {records.birth_weight_unit} </td>
                                    <td>{records.blood_group}</td>
                                    <td>{records.genotype} </td>
                                    <td>{records.blood_pressure} {records.blood_pressure_unit} </td>
                                    <td>{records.pulse_rate} {records.pulse_rate_unit} </td>
                                    <td>{records.respiratory_rate} {records.respiratory_rate_unit} </td>
                                    <td>{records.oxygen_saturation} {records.oxygen_saturation_unit} </td>
                                    <td>{records.temperature} {records.temperature_unit} </td>
                                    <td>{records.created_at} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </PatientLayout>
    )
}
