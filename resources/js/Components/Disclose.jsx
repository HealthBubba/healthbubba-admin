import React from "react"

export default ({show, children}) => {
    return (show ? children : <></>)
}