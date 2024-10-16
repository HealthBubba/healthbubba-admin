import React from 'react'

export const Avatar = ({image, className, ...props}) => {
    return (
        <img src="/assets/imgs/avatars/avatar.svg" className={`size-14 ${className}`} {...props} />
    )
}
