import React, { useState } from 'react'

export default function ({children, ...props}) {

    const [checked, setChecked] = useState(false)

    const toggle = () => {
        setChecked(prev => !prev)
    }

    // className={ 'justify-start border-gray-200': !modelValue, 'justify-end border-amber-600 bg-amber-600 border-0': modelValue } 

    // className="{ 'bg-white': modelValue, 'bg-gray-500': !modelValue }"


    return (
        <button onClick={toggle} type="button" role="checkbox" className="flex items-center focus:outline-none space-x-2 border-0 p-0 ">
            <span class={`inline-flex items-center px-[3px] py-[3px] w-12 rounded-full transition-all duration-500 focus:outline-none bg-[#E5E7EB] shadow-switch ${checked ? 'justify-end bg-[#3B82F6]' : 'justify-start'}`}>
                <span className={`block rounded-full duration-500 w-5 h-5 ${checked ? 'bg-white' : 'bg-white'}`} />
            </span>
            <span className="text-sm">
                {children}
            </span>
        </button>
    )
}
