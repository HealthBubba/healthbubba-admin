import Input from '@/Components/Form/Input';
import InputError from '@/Components/Form/InputError';
import Label from '@/Components/Form/Label';
import Password from '@/Components/Form/Password';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <div className="mx-auto mb-6 flex justify-center">
                <img src="/assets/imgs/logo.svg" alt="" />
            </div>

            <div className="card max-w-md mx-auto">
                <form onSubmit={submit}>
                    <div>
                        <Label htmlFor="email" value="Email" />

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Email Address"
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password" value="Password" />

                        <Password
                            id="password"
                            name="password"
                            placeholder="New Password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <Password
                            placeholder="New Password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <Button className="ms-4 btn-primary w-full" disabled={processing}>
                            Reset Password
                        </Button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
