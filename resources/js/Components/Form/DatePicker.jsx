import SettingIcon from '@/Icons/SettingIcon';
import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

export default ({value = { startDate: null, endDate: null }, onChange}) => {

    return (
        <label className="border-2 p-1 h-full px-3 font-medium items-center space-x-1 text-sm rounded-lg inline-flex">
            <SettingIcon className='size-5' />         
            <Datepicker 
                value={value}
                primaryColor={"green"}
                toggleClassName="hidden"
                inputClassName="border-0 bg-transparent focus:ring-0 focus:border-0 focus:outline-0 py-1 px-0 text-sm"
                containerClassName="relative"
                placeholder='Date'
                onChange={onChange}
                showShortcuts={true}
            />
        </label>

    )
}
