import React, { useReducer, useState } from 'react'
import Input from './Input'
import Disclose from '../Disclose'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

export default function ({...props}) {
    
    const [type, action] = useReducer((state, action) => {
        if(state == 'password') return 'text';
        if(state == 'text') return 'password';
    }, 'password')


    return (
        <div className='relative flex '>
            <Input type={type} {...props} className="pe-10" />
            <div className='absolute right-0 top-0 bottom-0 flex items-center pe-3 '>
                <button role='button' onClick={action} className='text-gray-600'>
                    <Disclose show={type == 'password'} >
                        <EyeIcon className='size-5' />
                    </Disclose>
                    <Disclose show={type == 'text'} >
                        <EyeSlashIcon className='size-5' />
                    </Disclose>
                </button>
            </div>
        </div>
    )
}
