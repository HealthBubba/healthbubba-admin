import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Input from '@/Components/Form/Input';
import InputError from '@/Components/Form/InputError';
import Button from '@/Components/Button/Button';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div className="mx-auto mb-6 flex justify-center">
                <img src="/assets/imgs/logo.svg" alt="" />
            </div>
            <div className="card max-w-md mx-auto space-y-5">
                <div className="space-y-1">
                    <h4 className='font-medium'>Forgot Your Password?</h4>
                    <p className="mb-4 text-sm text-gray-600"> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
                </div>


                <form onSubmit={submit}>
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="mt-4">
                        <Button className="btn-primary w-full" disabled={processing}>Email Password Reset Link</Button>
                    </div>

                    <div className='text-center text-sm font-medium flex space-x-1 mt-4'>
                        <p>Already know your password? </p>
                        <Link className='text-primary ' href={route('login')} >Login</Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
