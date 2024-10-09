export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-red-600 text-sm leading-[0.6rem] ' + className} >{message}</p>
    ) : null;
}
