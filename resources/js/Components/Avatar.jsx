import React, { useMemo } from 'react'

const defaultImage = "/assets/imgs/avatars/avatar.svg";
export const Avatar = ({image = defaultImage, className, ...props}) => {
    const src = useMemo(() => {
        if(!image) return defaultImage;
        return image
    }, [image])
    return (
        <img src={src} onError={(e) => e.currentTarget.src = defaultImage} className={`size-14 rounded ${className}`} {...props} />
    )
}
