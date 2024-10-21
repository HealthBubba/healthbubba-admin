import UploadIcon from '@/Icons/UploadIcon'
import React, { useEffect, useState } from 'react'
import Disclose from '../Disclose'
import { DocumentIcon } from '@heroicons/react/24/outline'
import Button from '../Button/Button'
import TrashIcon from '@/Icons/TrashIcon'
import { EmbedPDF } from '@simplepdf/react-embed-pdf'

export default function ({onChange = null}) {

    const [files, setFiles] = useState([])

    const handleChange = (e) => {
        const fileList = e.currentTarget.files
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i]
            file.preview = URL.createObjectURL(file)
            setFiles([...files, file])            
        }
    }

    const removeFile = (e) => {
        e.preventDefault()
        setFiles([])
    }



    useEffect(() => {
        if(onChange) onChange(files)
    }, [files])

    return (
        <label className='p-5 min-h-40 flex items-center justify-center border border-dashed border-[#0000001A] rounded-xl'>
            <Disclose show={files.length < 1} >
                <div className="flex justify-center space-x-2">
                    <div>
                        <div className="p-2 bg-[#6768FB0D] rounded-full">
                            <UploadIcon className="size-5" />
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-sm">Click to Upload</p>
                        <p className="text-muted text-xs">PDF - 10MB max.</p>
                        <input type="file" hidden accept='.pdf' onChange={handleChange} />
                    </div>
                </div>
            </Disclose>

            <Disclose show={files.length > 0}>
                {
                    files.map((file, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex justify-center space-x-2">
                                <div>
                                    <div className="p-2 bg-[#6768FB0D] rounded-full">
                                        <DocumentIcon className="size-6 text-primary" />
                                    </div>
                                </div>

                                <div>
                                    <p className="font-medium text-sm">{file.name}</p>
                                    <p className="text-muted text-xs">Last Modified: {file.lastModifiedDate.toDateString()}</p>
                                </div>
                            </div>
                            <div className='flex  space-x-3 justify-center'>
                                <EmbedPDF>
                                    <a href={file.preview} className='btn btn-light p-1 px-2' >Preview</a>
                                </EmbedPDF>
                                <Button onClick={removeFile} className='btn-light p-1 px-2 text-red-600' ><TrashIcon className="stroke-red-600"  /> Remove</Button>
                            </div>
                        </div>
                    ))
                }
            </Disclose>
        </label>
    )
}


