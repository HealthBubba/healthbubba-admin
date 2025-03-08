import { Link } from '@inertiajs/react'
import React from 'react'

export default function Pagination({items}) {
    const {links, meta} = items

    return (
        <div className="p-5 flex text-muted justify-between text-sm">
            <div>
                <p className=''>{meta.from} - {meta.to} of {meta.total} results</p>
            </div>
            <div className='flex space-x-5 '>
                <div>
                    <p>{meta.current_page} of {meta.last_page} pages</p>
                </div>
                <div className='flex space-x-3'>
                    <Link href={links.prev} disabled={!!links.prev} className='disabled:text-muted/75 '>Prev</Link>
                    <Link href={links.next} disabled={!!links.next} className='disabled:text-muted/75 ' >Next</Link>
                </div>
            </div>
        </div>
    )
}
