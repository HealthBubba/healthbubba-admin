import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import Pagination from '@/Components/Pagination'
import LicenseItem from './partials/LicenseItem'
import { usePage } from '@inertiajs/react'
import Signature from './partials/Signature'

export default function () {

    const {props: {user, licenses}} = usePage()

    return (
        <HealthPractitionersLayout title="Licenses">
            <div className="space-y-5">
                <div className='space-y-3 bg-gray-50 p-4 rounded-md border'>
                    <div>
                        <h4 className='font-semibold '>Signature</h4>
                    </div>

                    <Signature user={user} />
                </div>

                <div className='space-y-3'>
                    <div>
                        <h4 className='font-semibold '>Licenses</h4>
                    </div>

                    <div className="overflow-x-auto">
                        <table className='border-b'>
                            <thead>
                                <tr>
                                    <th>File</th>
                                    <th>Expires At</th>
                                    <th>Qualification</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {licenses.data.map(license => <LicenseItem key={license.id} license={license} />)}
                            </tbody>
                        </table>

                        {
                            licenses.length < 1 

                            ?

                            <p className='text-center py-3' >No records found</p>

                            :

                            ''
                        }
                    </div>
                </div>
            </div>

            <Pagination items={licenses} />
        </HealthPractitionersLayout>
    )
}
