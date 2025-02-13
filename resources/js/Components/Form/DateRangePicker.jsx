import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { addDays, format } from 'date-fns';
import { DateRangePicker } from 'react-date-range'
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline';

const defaultState = {
    startDate: null,
    endDate: null,
    key: 'selection'
}

export default function ({onChange = null}) {

    const [state, setState] = useState(defaultState)

    const handleChange = (selection) => {
        setState(selection)
        if(onChange) onChange(format(selection.startDate, 'yyyy-MM-dd'), format(selection.endDate, 'yyyy-MM-dd'))
    }

    const startDate = useMemo(() => format(state.startDate, 'yyyy-MM-dd'), [state])
    const endDate = useMemo(() => format(state.endDate, 'yyyy-MM-dd'), [state])

    const reset = () => {
        setState(defaultState)
        if(onChange) onChange(null, null)
    }

    return (
        <>
            <Menu>
                <div className='border-2 h-full rounded-lg inline-flex items-center'>
                    <MenuButton className="space-x-2 px-2 p-1 items-center text-sm inline-flex">  
                        <CalendarDaysIcon className='size-5' />  
                        {
                            state.startDate || state.endDate
                            
                            ?
                            <span>{startDate} - {endDate}</span>
                            :

                            <span>Filter by Date</span>
                        }      

                    </MenuButton>

                    {
                        state.startDate || state.endDate

                        ?

                        <span role='button' className='p-2' onClick={reset} >
                            <XMarkIcon className='size-5' />
                        </span>

                        :

                        ''
                    }
                </div>
                <MenuItems transition anchor="bottom start" className="w-auto origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                    <DateRangePicker 
                        onChange={item => handleChange(item.selection)}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={[state]}
                        rangeColors={['#19C77F']}
                        direction="horizontal"
                    />
                </MenuItems>
            </Menu>
        </>
    )
}
