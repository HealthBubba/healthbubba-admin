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
                        <SidebarItem name={'Dashboard'} url={route('dashboard')} icon={AppIcon} isActive={true} />
                    </li>

                    <li>
                        <SidebarItem name={'Health Practitioners'} url={route('practitioners')} icon={SethoscopeIcon} />
                    </li>
                    
                    <li>
                        <SidebarItem name={'Patient'} url={route('patients')} icon={HospitalBedIcon} />
                    </li>
                </ul>
                
                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Manage Appointment Orders'} url={route('appointments')} icon={CubeIcon} />
                    </li>

                    <li>
                        <SidebarItem name={'Tests & Medication Orders '} url={route('orders')} icon={SethoscopeIcon} />
                    </li>
                </ul>

                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Transactions'} url={route('transactions')} icon={CubeIcon} />
                    </li>

                    <li>
                        <SidebarItem name={'Admins'} url={route('admins')} is_current={route().current('admins.*') || route().current('admins')} icon={SethoscopeIcon} />
                    </li>
                </ul>

                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem url={route('logout')} name={'Logout'} icon={CubeIcon} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
