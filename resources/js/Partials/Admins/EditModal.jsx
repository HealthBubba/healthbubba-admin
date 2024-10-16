import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Password from '@/Components/Form/Password'
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
					<h4 className='font-semibold' >Create New User</h4>
				</div>

				<form onSubmit={submit} className="space-y-3">
					<div>
						<Label>First name</Label>
						<Input onChange={e => form.setData('firstname', e.currentTarget.value)} value={form.firstname} placeholder="First Name" className={'w-full'} />
						<InputError message={form.errors.firstname} />
					</div>
					
					<div>
						<Label>Last name</Label>
						<Input onChange={e => form.setData('lastname', e.currentTarget.value)} value={form.lastname} placeholder="Last Name" className={'w-full'} />
						<InputError message={form.errors.lastname} />
					</div>

					<div>
						<Label>Email Address</Label>
						<Input onChange={e => form.setData('email', e.currentTarget.value)} value={form.email} placeholder="Email Address" className={'w-full'} />
						<InputError message={form.errors.email} />
					</div>

					<div>
						<Label>Phone Number</Label>
						<Input onChange={e => form.setData('phone', e.currentTarget.value)} value={form.phone} placeholder="Phone Number" className={'w-full'} />
						<InputError message={form.errors.phone} />
					</div>

					<div>
						<Label>Default Password</Label>
						<Password onChange={e => form.setData('password', e.currentTarget.value)} value={form.password} placeholder="Password" className={'w-full'} />
						<InputError message={form.errors.password} />
					</div>

					<div className='pt-3'>
						<Button className='btn-primary w-full'>Create User <PlayIcon className='size-4 text-white/50' /> </Button>
					</div>
				</form>

			</div>
		</Modal>
    )
}
