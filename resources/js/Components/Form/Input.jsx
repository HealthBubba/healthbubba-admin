import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function ({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) inputRef.current?.focus();
    }, [isFocused]);

    return <input type={type} ref={inputRef} className={`w-full rounded-lg focus:border-0 border-gray-200 focus:ring-1 focus:ring-primary shadow-sm shadow-black/5 text-sm ${className}`} {...props} />
});
