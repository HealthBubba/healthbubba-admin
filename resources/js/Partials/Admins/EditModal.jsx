import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Modal from '@/Components/Modal'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useForm } from '@inertiajs/react'
import React from 'react'

export const EditModal = ({admin = null, ...props}) => {

	const form = useForm({
		firstname: admin?.firstname,
		lastname: admin?.lastname,
		email: admin?.email,
		phone: admin?.phone,
		password: ''
	})

	const submit = (e) => {
		e.preventDefault()
		form.post(route('admins.store'))
	}

    return (
		<Modal {...props}  >
			<div className="space-y-5">
				<div>
					<h4 class='font-semibold' >Create New User</h4>
				</div>

				<form onSubmit={submit} className="space-y-3">
					<div>
						<Label>First name</Label>
						<Input onChange={e => form.setData('firstname', e.currentTarget.value)} value={form.firstname} placeholder="First Name" class={'w-full'} />
						<InputError message={form.errors.firstname} />
					</div>
					
					<div>
						<Label>Last name</Label>
						<Input onChange={e => form.setData('lastname', e.currentTarget.value)} value={form.lastname} placeholder="Last Name" class={'w-full'} />
						<InputError message={form.errors.lastname} />
					</div>

					<div>
						<Label>Email Address</Label>
						<Input onChange={e => form.setData('email', e.currentTarget.value)} value={form.email} placeholder="Email Address" class={'w-full'} />
						<InputError message={form.errors.email} />
					</div>

					<div>
						<Label>Phone Number</Label>
						<Input onChange={e => form.setData('phone', e.currentTarget.value)} value={form.phone} placeholder="Phone Number" class={'w-full'} />
						<InputError message={form.errors.phone} />
					</div>

					<div className='pt-3'>
						<Button className='btn-primary w-full'>Create User <PlayIcon className='size-4 text-white/50' /> </Button>
					</div>
				</form>

			</div>
		</Modal>
    )
}
