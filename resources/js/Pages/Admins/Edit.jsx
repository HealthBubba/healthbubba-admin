import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import UserIcon from "@/Icons/UserIcon";
import EditIcon from "@/Icons/EditIcon";
import TrashIcon from "@/Icons/TrashIcon";
import { Avatar } from "@/Components/Avatar";
import { useState } from "react";
import Disclose from "@/Components/Disclose";
import EditForm from "./Partials/EditForm";
import { EditRoles } from "./Partials/EditRoles";
import Swal from "@/Components/Swal";

const BreadCrumbs = ({name}) => {
    return (
        <div className="flex items-center space-x-1">
            <p className="mb-0">Admins</p>
            <span><ChevronRightIcon className="size-4 text-[#6B7280]" /></span>
            <p className="mb-0 text-[#6B7280] font-normal">{name}</p>
        </div>
    )
}

export default function Edit({admin}) {

    const [tab, setTab] = useState('')

    const deactivateUser = () => {
        
    }

    return (
        <AuthenticatedLayout title={<BreadCrumbs name={admin.full_name} />} >
            <Head title={admin.full_name} />
            <div className="md:py-10 py-5">
                <div className="md:w-2/3 mx-auto md:flex space-y-5 md:space-x-5">
                    <div className="md:w-1/3 space-y-6">
                        <div className="space-y-3">
                            <div>
                                <Avatar />
                            </div>

                            <div>
                                <p className="font-medium">{admin.full_name}</p>
                                <p className="text-sm text-gray-500">Last signed in 3h ago</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <button onClick={() => setTab('edit')} className={`flex w-full text-[#6B7280] space-x-2 p-1 text-sm ${tab == 'edit' ? 'border bg-white shadow-sm shadow-gray-100 rounded-md' : ''}`}>
                                <UserIcon />
                                <p>Change Personal Information</p>
                            </button>

                            <button onClick={() => setTab('roles')} className={`flex w-full text-[#6B7280] space-x-2 p-1 text-sm ${tab == 'roles' ? 'border bg-white shadow-sm shadow-gray-100 rounded-md' : ''}`}>
                                <EditIcon />
                                <p>Update Roles and Permission</p>
                            </button>

                            <div className="border-t"></div>

                            <Swal onConfirm={deactivateUser} className={`flex w-full text-red-600 space-x-2 p-1 text-sm `}>
                                <TrashIcon className="stroke-red-600" />
                                <p>Deactivate User</p>
                            </Swal>

                            <div>
                                <p className="text-gray-400 text-sm">Added on <span className="text-black">{admin.created_at}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <div className="p-1 bg-gray-100 rounded-xl border space-y-2">
                            <div className="pt-3">
                                <Disclose show={tab == ''}>
                                    <div className="px-3 text-sm">
                                        <p className="text-[#6B7280B7]">Basic Information</p>
                                        <p>Manage user profile</p>
                                    </div>
                                </Disclose>
                                <Disclose show={tab == 'edit'}>
                                    <div className="flex space-x-2 px-2">
                                        <button onClick={() => setTab('')} >
                                            <ChevronLeftIcon className="size-4" />
                                        </button>
                                        <p className="font-medium">Basic Information</p>
                                    </div>
                                </Disclose>
                                <Disclose show={tab == 'roles'}>
                                    <div className="flex space-x-2 px-2">
                                        <button onClick={() => setTab('')} >
                                            <ChevronLeftIcon className="size-4" />
                                        </button>
                                        <p className="font-medium">Update Roles and Permission</p>
                                    </div>
                                </Disclose>
                            </div>
                            <div className="border-t"></div>
                            <div className="p-3 rounded-xl text-sm shadow-sm space-y-3 bg-white">
                                <Disclose show={tab == ''} >
                                    <div>
                                        <p className="text-[#6B7280B7]">Full Name</p>
                                        <p>{admin.full_name}</p>
                                    </div>
                                    <div className="border-t"></div>
                                    <div>
                                        <p className="text-[#6B7280B7]">Email Address</p>
                                        <p>{admin.email}</p>
                                    </div>
                                    <div className="border-t"></div>
                                    <div>
                                        <p className="text-[#6B7280B7]">Phone Number</p>
                                        <p>{admin.phone}</p>
                                    </div>
                                </Disclose>

                                <Disclose show={tab == 'roles'} >
                                    <EditRoles admin={admin} />
                                </Disclose>

                                <Disclose show={tab == 'edit'} >
                                    <EditForm admin={admin} />
                                </Disclose>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
