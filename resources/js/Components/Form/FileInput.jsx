import { UserIcon } from '@heroicons/react/24/solid'
import React, { useMemo, useState } from 'react'

export default function ({value = null, onChange = null}) {

    const [state, setState] = useState(null)

    const update = (e) => {
        e.preventDefault()
        if(onChange) onChange(e.currentTarget.files)
        setState(e.currentTarget.files[0])
    }

    const src = useMemo(() => {
        if(!state) return value;
        return URL.createObjectURL(state)
    }, [state])

    return (
        <div className='flex items-center space-x-3'>
            <div>
                <div className="size-14 overflow-hidden rounded-md bg-gray-100 flex justify-center items-center">
                    {
                        src

                        ?
                            <img src={src} className='size-full object-cover' alt="" />
                        :

                        <UserIcon className='size-8 text-gray-400' />
                    }
                </div>
            </div>
            <input type="file" onChange={update}  />
        </div>
    )
}
