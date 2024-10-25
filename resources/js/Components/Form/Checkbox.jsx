export default function Checkbox({ className = '', children, ...props }) {
    return (
        <label className="space-x-1 text-sm inline-flex items-center">
            <input
                {...props}
                type="checkbox"
                className={
                    'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                    className
                }
            />

            <span>{children}</span>
        </label>
    );
}
