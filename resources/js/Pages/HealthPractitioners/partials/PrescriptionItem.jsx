import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import React from 'react'

export default function PrescriptionItem({prescription}) {
    return (
        <tr>
            <td>{prescription.patient?.full_name}</td>
            <td>{prescription.medication_name}</td>
            <td>{prescription.medication_category}</td>
            <td>{prescription.dosage}</td>
            <td className='max-w-60'>{prescription.notes}</td>
            <td>{prescription.start_date}</td>
            <td>{prescription.end_date}</td>
            <td>{prescription.frequency}</td>
            <td>{prescription.date}</td>
        </tr>
    )
}
