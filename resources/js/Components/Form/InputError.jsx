export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-red-500 text-sm mt-2 leading-[0.6rem] ' + className} >{message}</p>
    ) : null;
}
