import useSearchParams from '@/Hooks/useSearchParams'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { router } from '@inertiajs/react'
import React, { useEffect, useMemo, useState } from 'react'

export default function Filters() {

    const urlParams = useSearchParams()

    const keys = useMemo(() => Object.keys(urlParams), [urlParams])

    const removeParam = (key) => {
        const params = Object.fromEntries(Object.entries(urlParams).filter(([item]) => item != key))
        router.reload({
            data: params,
        })
    }

    return (
        <div class="flex space-x-2">
            {
                keys.map(function(key) {
                    return (
                        <>
                            {
                                urlParams[key]

                                ?
                                <div className='inline-flex px-1 items-center space-x-2 py-1 text-[10px] bg-primary-50 border rounded border-primary-200'>
                                    <span className="font-medium capitalize">{key}:</span>
                                    <span className="">{urlParams[key]}</span>
                                    <span onClick={() => removeParam(key)} role="button">
                                        <XMarkIcon className='size-3' />
                                    </span>
                                </div>

                                :

                                ''
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
