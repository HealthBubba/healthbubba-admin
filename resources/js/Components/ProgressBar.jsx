import React from 'react'

export default function ProgressBar({title, value, percent}) {
    return (
        <div className=''>
            <div className="flex text-sm font-medium -mb-2 justify-between">
                <p className=''>{title}</p>
                <p>{value}</p>
            </div>
            <progress className='w-full h-[6px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-[#F4F4F5] [&::-webkit-progress-value]:bg-[#6667FA] [&::-moz-progress-bar]:bg-[#6667FA]' value={percent} max="100" ></progress>
        </div>
    )
}
