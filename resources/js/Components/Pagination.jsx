import { Link } from '@inertiajs/react'
import React from 'react'

export default function Pagination({items}) {
    return (
        <div className="p-5 flex text-muted justify-between text-sm">
            <div>
                <p className=''>{items.from} - {items.to} of {items.total} results</p>
            </div>
            <div className='flex space-x-5 '>
                <div>
                    <p>{items.current_page} of {items.last_page} pages</p>
                </div>
                <div className='flex space-x-3'>
                    <Link href={items.prev_page_url} disabled={!!items.prev_page_url} className='disabled:text-muted/75 '>Prev</Link>
                    <Link href={items.next_page_url} disabled={!!items.next_page_url} className='disabled:text-muted/75 ' >Next</Link>
                </div>
            </div>
        </div>
    )
}
