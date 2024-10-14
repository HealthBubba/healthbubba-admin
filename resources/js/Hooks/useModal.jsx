import { useState } from "react"

export default (props = {isCloseable: true, defaultValue: false}) => {
    const [show, setShow] = useState(props.defaultValue)
    const [closeable, setCloseable] = useState(props.isCloseable)

    const open = () => setShow(true)
    const close = () => closeable ? setShow(false) : null

    return {show, open, close, closeable}
}