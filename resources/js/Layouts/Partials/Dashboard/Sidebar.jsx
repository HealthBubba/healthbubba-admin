import { SidebarItem } from '@/Partials/Sidebar/SidebarItem'
import AppIcon from '@/Icons/AppIcon';
import { CubeIcon } from '@/Icons/CubeIcon';
import HospitalBedIcon from '@/Icons/HospitalBedIcon';
import SethoscopeIcon from '@/Icons/SethoscopeIcon';
import React from 'react'
import { BriefcaseIcon, CheckBadgeIcon, EyeDropperIcon, ListBulletIcon, UserCircleIcon } from '@heroicons/react/24/outline';

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
                        <SidebarItem name={'Dashboard'} url={route('dashboard')} icon={AppIcon}  isActive={true} />
                    </li>

                    <li>
                        <SidebarItem name={'Health Practitioners'} url={route('practitioners')} is_current={route().current('practitioners.*')} icon={SethoscopeIcon} />
                    </li>
                    
                    <li>
                        <SidebarItem name={'Patients'} url={route('patients')} is_current={route().current('patients.*')} icon={HospitalBedIcon} />
                    </li>
                </ul>
                
                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Appointments'} url={route('appointments')} is_current={route().current('appointments.*')} icon={CubeIcon} />
                    </li>

                    <li>
                        <SidebarItem name={'Tests & Medication Orders'} url={route('orders')} is_current={route().current('orders.*')} icon={SethoscopeIcon} />
                    </li>
                    <li>
                        <SidebarItem name={'Transactions'} url={route('transactions')} is_current={route().current('transactions.*')} icon={ListBulletIcon} />
                    </li>
                </ul>

                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Medications'} url={route('medications')} is_current={route().current('medications.*')} icon={EyeDropperIcon} />
                    </li>
                    <li>
                        <SidebarItem name={'Qualifications'} url={route('qualifications')} is_current={route().current('qualifications.*')} icon={CheckBadgeIcon} />
                    </li>
                    <li>
                        <SidebarItem name={'Specialties'} url={route('specialties')} is_current={route().current('specialties.*')} icon={BriefcaseIcon} />
                    </li>
                </ul>

                <div className="border-y mx-2 border-dashed border-[#3B3B3D]"></div>

                <ul className="space-y-1">
                    <li>
                        <SidebarItem name={'Admins'} url={route('admins')} is_current={route().current('admins.*')} icon={UserCircleIcon} />
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
