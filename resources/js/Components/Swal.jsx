import React, { useMemo } from 'react'
import Modal from './Modal'
import useModal from '@/Hooks/useModal'
import Button from './Button/Button'

export default function ({
    children, 
    className, 
    title,  
    caption,
    type,
    onConfirm = (close) => {},
    cancelLabel = 'Cancel',
    confirmLabel = 'Proceed',
    loading = false,
    onCancel = (close) => { close() }
}) {

    const modal = useModal()

    const cancel = () => onCancel(modal.close)
    const confirm = () => onConfirm(modal.close)

    return (
        <>
            <span role='button' onClick={modal.open} className={className} >{children}</span>

            <Modal {...modal} >
                <div className="space-y-5">
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>{title}</p>
                        <p className='text-sm text-[#4B5563] md:text-base'>{caption}</p>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <div>
                            <Button onClick={cancel} className='btn-light'>{cancelLabel}</Button>
                        </div>
                        <div>
                            <Button 
                                onClick={confirm} 
                                loading={loading} 
                                className={`
                                    ${type == 'success' && 'btn-success'}
                                    ${type == 'warning' && 'btn-warning'}
                                    ${type == 'light' && 'btn-light'}
                                    ${type == 'danger' && 'btn-danger'}
                                `}
                            >{confirmLabel}</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
