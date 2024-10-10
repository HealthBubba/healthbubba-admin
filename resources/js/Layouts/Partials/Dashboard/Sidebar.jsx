import { SidebarItem } from '@/Partials/Sidebar/SidebarItem'
import AppIcon from '@/Icons/AppIcon';
import { CubeIcon } from '@/Icons/CubeIcon';
import HospitalBedIcon from '@/Icons/HospitalBedIcon';
import SethoscopeIcon from '@/Icons/SethoscopeIcon';
import React from 'react'

export default function () {
    return (
        <div className="h-full bg-[#161618] p-4 space-y-3 ">
            <div>
                <img src="/assets/imgs/logo-icon.svg" alt="" />
            </div>

            <div className="space-y-3">
                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>
                
                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Dashboard'} icon={AppIcon} isActive={true} />
                    </li>

                    <li>
                        <SidebarItem name={'Health Practitioners'} icon={SethoscopeIcon} />
                    </li>
                    
                    <li>
                        <SidebarItem name={'Patient'} icon={HospitalBedIcon} />
                    </li>
                </ul>
                
                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Manage Appointment Orders'} icon={CubeIcon} />
                    </li>

                    <li>
                        <SidebarItem name={'Manage Tests & Medication Orders '} icon={SethoscopeIcon} />
                    </li>
                </ul>

                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Transactions'} icon={CubeIcon} />
                    </li>

                    <li>
                        <SidebarItem name={'Admins'} icon={SethoscopeIcon} />
                    </li>
                </ul>

                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Logout'} icon={CubeIcon} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
