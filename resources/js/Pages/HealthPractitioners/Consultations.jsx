import React from 'react'
import HealthPractitionersLayout from './layouts/HealthPractitionersLayout'
import { usePage } from '@inertiajs/react'

export default function () {

    const {props: {user: {data: user}}} = usePage()


    return (
        <HealthPractitionersLayout title="Consultations">
            
        </HealthPractitionersLayout>
    )
}
