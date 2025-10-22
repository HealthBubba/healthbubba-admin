import { router } from '@inertiajs/react'
import React from 'react'

export default function TableLink({children, className = '', href = ''}) {
    return (
        <td className={className} onClick={() => router.visit(href)} >{children}</td>
    )
}
