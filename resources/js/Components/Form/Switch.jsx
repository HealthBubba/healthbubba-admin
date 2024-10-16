import React, { useState } from 'react'

export default function ({children, ...props}) {

    const [checked, setChecked] = useState(false)

    return (
        <label className="flex items-center cursor-pointer focus:outline-none space-x-2 border-0 p-0 ">
            <span class={`inline-flex items-center px-[2px] py-[3px] w-12 rounded-full transition-all duration-300 focus:outline-none shadow-switch ${checked ? ' bg-[#3B82F6]' : 'bg-[#E5E7EB]'}`}>
                <span className={`block rounded-full duration-500 w-5 h-5 bg-white ${checked ? 'translate-x-[1.4rem]' : 'translate-x-[0.15rem]'}`} />
                <input type="checkbox" onChange={e => setChecked(e.currentTarget.checked)} {...props} className='hidden' hidden />
            </span>
            <span className="text-sm">
                {children}
            </span>
        </label>
    )
}
