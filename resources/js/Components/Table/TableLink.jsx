import { router } from '@inertiajs/react'
import React from 'react'

export default function TableLink({children, href = ''}) {
    return (
        <td onClick={() => router.visit(href)} >{children}</td>
    )
}
