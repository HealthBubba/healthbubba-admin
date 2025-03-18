import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import QualificationItem from './Partials/QualificationItem';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Pagination from '@/Components/Pagination';
import Button from '@/Components/Button/Button';
import useModal from '@/Hooks/useModal';
import EditQualificationModal from './Partials/EditQualificationModal';

export default function () {

    const {qualifications} = usePage().props

    const modal = useModal()

    return (
        <AuthenticatedLayout title="Manage Qualifications">
            <Head title="Manage Qualifications" />

            <div className="card p-0 rounded-xl">
                <div className="p-4 md:flex md:justify-between space-y-2 md:space-x-2">
                    <div>
                        <div className="relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2">
                            <div className='px-2'>
                                <MagnifyingGlassIcon className='size-4 text-muted' />
                            </div>
                            <input type="text" onChange={e => router.reload({data: {keyword: e.currentTarget.value}})} placeholder='Search Qualifications' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                        </div>
                    </div>

                    <div>
                        <Button className='btn-primary' onClick={modal.open} >Create Qualification</Button>
                    </div>
                </div>

                <div className="overflow-x-auto relative">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>Qualification</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {qualifications.data.map(qualification => <QualificationItem key={qualification.qualification_id} qualification={qualification} />)}
                        </tbody>
                    </table>
                </div>

                <Pagination items={qualifications} />
            </div>

            <EditQualificationModal modal={modal} />
        
        </AuthenticatedLayout>
    )
}
