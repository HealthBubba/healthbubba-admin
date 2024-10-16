import Modal from '@/Components/Modal'
import EditForm from '@/Pages/Admins/Partials/EditForm'
import React from 'react'

export const EditModal = ({admin = null, ...props}) => {

	
    return (
		<Modal {...props}  >
			<div className="space-y-5">
				<div>
					<h4 className='font-semibold' >Create New User</h4>
				</div>

				<EditForm />
			</div>
		</Modal>
    )
}
