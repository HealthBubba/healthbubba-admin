import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-white pt-6 justify-center px-2 sm:pt-0">
            {children}
        </div>
    );
}
