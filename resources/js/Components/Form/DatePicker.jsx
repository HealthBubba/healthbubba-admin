import SettingIcon from '@/Icons/SettingIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import Disclose from '../Disclose';

const defaultValue = { 
    startDate: null, 
    endDate: null 
}

export default ({val = { startDate: null, endDate: null }, onChange: isChanged = null}) => {

    const [value, setValue] = useState(val)
    const onChange = (value) => {
        setValue(value)
        if(isChanged) isChanged(value)
    }

    return (
        <div className='border-2 h-full font-medium items-center space-x-1 text-sm rounded-lg inline-flex'>
            <label className="inline-flex px-3 p-1 cursor-pointer items-center space-x-1">
                <SettingIcon className='size-5' />         
                <Datepicker 
                    value={value}
                    primaryColor={"green"}
                    toggleClassName="hidden"
                    inputClassName="border-0 bg-transparent cursor-pointer focus:ring-0 focus:border-0 focus:outline-0 py-1 px-0 text-sm"
                    containerClassName="relative"
                    readOnly
                    placeholder='Date'
                    onChange={onChange}
                    showShortcuts={true}
                />
            </label>
            <Disclose show={!!value.startDate && !!value.endDate} >
                <button  onClick={() => setValue(defaultValue)} className="p-0 px-2">
                    <XMarkIcon className='size-5' />
                </button>
            </Disclose>
        </div>

    )
}
