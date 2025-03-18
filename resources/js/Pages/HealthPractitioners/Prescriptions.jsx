import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import PrescriptionItem from './partials/PrescriptionItem'

export default function () {

    const {props: {user, prescriptions}} = usePage()

    return (
        <HealthPractitionersLayout title="Prescriptions">
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
        </HealthPractitionersLayout>
    )
}
