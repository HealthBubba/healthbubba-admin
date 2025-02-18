import SettingIcon from '@/Icons/SettingIcon';
import { CalendarDateRangeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import Disclose from '../Disclose';
import { format } from 'date-fns';

const defaultValue = { 
    startDate: null, 
    endDate: null 
}

export default ({val = { startDate: null, endDate: null }, onChange: isChanged = null, placeholder = 'Filter by Date', className = ''}) => {

    const [value, setValue] = useState(val)
    const onChange = (value) => {
        setValue(value)
        if(isChanged) isChanged({startDate: format(value.startDate, 'yyyy-MM-dd'), endDate: format(value.endDate, 'yyyy-MM-dd')})
        }
    
    const reset = () => {
        setValue(defaultValue)
        if(isChanged) isChanged({startDate: null, endDate: null})
    }

    return (
        <div className={`border-2 h-full font-medium items-center space-x-1 text-sm rounded-lg inline-flex ${className}`}>
            <label className="inline-flex px-3 p-1 cursor-pointer items-center space-x-1">
                <CalendarDateRangeIcon className='size-5' />         
                <Datepicker 
                    value={value}
                    primaryColor={"green"}
                    toggleClassName="hidden"
                    inputClassName="border-0 bg-transparent cursor-pointer focus:ring-0 focus:border-0 focus:outline-0 py-1 px-0 text-sm w-full"
                    containerClassName="relative max-w-xl"
                    readOnly
                    placeholder={placeholder}
                    onChange={onChange}
                    showShortcuts={true}
                />
            </label>
            <Disclose show={!!value.startDate && !!value.endDate} >
                <button  onClick={reset} className="p-0 px-2">
                    <XMarkIcon className='size-5' />
                </button>
            </Disclose>
        </div>

    )
}
