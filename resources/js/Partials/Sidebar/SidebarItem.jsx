import { Link, usePage } from '@inertiajs/react'
import React, { useMemo } from 'react'

export const SidebarItem = ({icon: Icon, name, url}) => {

    const {props} = usePage()

    const isActive = useMemo(() => props.ziggy.location == url, [url, props])

    return (
        <Link href={url} className={`flex group justify-between space-x-3 p-2 px-3 hover:shadow-inner hover:shadow-white/10  items-center hover:bg-[#272729] duration-500 rounded-[10px] ${isActive ? 'shadow-white/10 bg-[#272729] shadow-inner' : ''}`}>
            <div className="flex space-x-3 items-center">
                <Icon className="size-5" />
                <p className="text-white text-[13px]">{name}</p>
            </div>

            {
                isActive

                &&

                <div className="flex">
                    <div className="size-4 bg-[#1B1B1F] p-1 border-2 rounded-full flex items-center justify-center border-gray-600/70">
                        <div className="p-[2px] w-full h-full bg-[#635BD5] rounded-full"></div>
                    </div>
                </div>
            }
        </Link>
    )
}
