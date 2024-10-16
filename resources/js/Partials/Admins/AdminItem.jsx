import React from 'react'

export default function ({admin, setSelected}) {
    return (
        <tr>
            <td>
                <Checkbox />
            </td>
            <td>1</td>
            <td>Alexander Ogunyemi</td>
            <td>TRX12345</td>
            <td>APPT56789</td>
            <td>APPT56789</td>
            <td>
                <div className="flex space-x-4">
                    <button className="border-2 p-1 bg-white rounded-lg">
                        <PencilSquareIcon className='size-5' />                                        
                    </button>
                    <button className="border-2 p-1 bg-white rounded-lg">
                        <TrashIcon className='size-5' />                                        
                    </button>
                </div>
            </td>
        </tr>
    )
}
