import { Dialog, DialogPanel, Transition, TransitionChild, } from '@headlessui/react';

export default function Modal({children, className, ...props }) {

    const close = () => {
        if (props.closeable) props.close();
    };

    return (
        <Transition show={props.show} leave="duration-200">
            <Dialog as="div" id="modal" className="fixed min-h-screen inset-0 z-50 flex transform items-center overflow-y-auto transition-all sm:px-0" onClose={close} >
                <TransitionChild enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                    <div className="absolute inset-0 min-h-screen bg-black/50" />
                </TransitionChild>

                <TransitionChild enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 px-2 sm:translate-y-0 sm:scale-95" >
                    <DialogPanel className={`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all mx-auto w-full max-w-md p-6 ${className}`} >
                        {children}
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
