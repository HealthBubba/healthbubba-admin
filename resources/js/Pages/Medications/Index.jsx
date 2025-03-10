import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import MedicationItem from './Partials/MedicationItem';
import Pagination from '@/Components/Pagination';

export default function ({medications}) {
    return (
        <AuthenticatedLayout title='Medications'>
            <Head title='Medications' />
            <div className="card p-0 rounded-xl">
                <div className="justify-between items-center md:flex p-4">
                    <div>
                        <h4 className='font-semibold'>Medications</h4>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th className='w-1/3'>Name</th>
                                <th >Category</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {medications.data.map(medication => <MedicationItem key={medication.id} medication={medication} />)}
                        </tbody>
                    </table>

                    {
                            medications.data?.length < 1 

                            ?

                            <p className='text-center py-3' >No records found</p>

                            :

                            ''
                        }
                </div>

                <Pagination items={medications} />
            </div>
        </AuthenticatedLayout>
    )
}
