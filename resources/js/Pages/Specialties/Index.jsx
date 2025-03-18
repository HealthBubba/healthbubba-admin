import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import useModal from '@/Hooks/useModal';
import SpecialtyItem from './Partials/SpecialtyItem';
import Pagination from '@/Components/Pagination';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Search from '@/Components/Search';
import Button from '@/Components/Button/Button';
import EditSpecialtyModal from './Partials/EditSpecialtyModal';

export default function () {

    const {specialties} = usePage().props

    const modal = useModal()

    return (
        <AuthenticatedLayout title="Manage Specialties">
            <Head title="Manage Specialties" />

            <div className="card p-0 rounded-xl">
                <div className="p-4 md:flex md:justify-between space-y-2 md:space-x-2">
                    <div>
                        <Search placeholder="Search Specialties" />
                    </div>

                    <div>
                        <Button className='btn-primary' onClick={modal.open} >Create Specialty</Button>
                    </div>
                </div>

                <div className="overflow-x-auto relative">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>Specialty</th>
                                <th>Practitioners</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {specialties.data.map(specialty => <SpecialtyItem key={specialty.specialty_id} specialty={specialty} />)}
                        </tbody>
                    </table>
                </div>

                <Pagination items={specialties} />

                <EditSpecialtyModal modal={modal} />
            </div>
        </AuthenticatedLayout>
    )
}
