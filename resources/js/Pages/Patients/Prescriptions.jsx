import React from 'react'
import PatientLayout from './Layouts/PatientLayout'
import { Head, usePage } from '@inertiajs/react'
import PrescriptionItem from '@/Partials/Prescriptions/PrescriptionItem'
import Pagination from '@/Components/Pagination'

export default function Medications() {

    const {patient, prescriptions} = usePage().props

    return (
        <PatientLayout title="Prescriptions">
            <Head title="Prescriptions" />
            
            <div className="overflow-x-auto relative">
                <table className='border-b'>
                    <thead>
                        <tr>
                            <th>Patient name</th>
                            <th>Medication Name</th>
                            <th>Category</th>
                            <th>Dosage</th>
                            <th>Notes</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Frequency</th>
                            <th>Created At</th>
                        </tr>
                    </thead>

                    <tbody>
                        {prescriptions.data.map(prescription => <PrescriptionItem key={prescription.id} prescription={prescription} />)}
                    </tbody>
                </table>
            </div>

            <Pagination items={prescriptions} />
        </PatientLayout>
    )
}
