import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { router } from '@inertiajs/react'
import React from 'react'

export default function Search({placeholder}) {
    return (
        <div className="relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2">
            <div className='px-2'>
                <MagnifyingGlassIcon className='size-4 text-muted' />
            </div>
            <input type="text" onChange={e => router.reload({data: {keyword: e.currentTarget.value}})} placeholder={placeholder} className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
        </div>
    )
}
