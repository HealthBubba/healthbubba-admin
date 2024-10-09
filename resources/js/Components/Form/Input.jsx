import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function ({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) inputRef.current?.focus();
    }, [isFocused]);

    return <input {...props} type={type} ref={inputRef} className={`rounded-[8px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm ${className}`} />
});
