import Input from '@/Components/Form/Input';
import Label from '@/Components/Form/Label';
import InputError from '@/Components/Form/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@/Components/Button/Button';
import { PlayIcon } from '@heroicons/react/24/solid';
import Password from '@/Components/Form/Password';
import Checkbox from '@/Components/Form/Checkbox';


export default function Login({ status, canResetPassword }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="space-y-5 w-full ">
                <div className="mx-auto flex justify-center">
                    <img src="/assets/imgs/logo.svg" alt="" />
                </div>

                <div className="card border-gray-100 shadow-sm max-w-md px-5 min-h-[50vh] flex items-center py-5 mx-auto">
                    <div className="space-y-3 w-full" >
                        <div className="">
                            <h3 className="text-lg font-medium">Login to your Account</h3>
                        </div>

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label htmlFor="email" >Email Address</Label>
                                <Input 
                                    type="email"
                                    placeholder="Email Address" 
                                    value={data.email} 
                                    onChange={e => setData('email', e.target.value)} 
                                    autoComplete='email-address'
                                    className="w-full" 
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <Label htmlFor="email" >Password</Label>
                                <Password 
                                    placeholder="Password" 
                                    value={data.password} 
                                    onChange={e => setData('password', e.target.value)} 
                                    autoComplete='password' 
                                    className="w-full"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* <div className="mt-4">
                                <Checkbox checked={data.remember} onChange={e => setData('remember', e.target.checked)}  >Remember Me</Checkbox>
                            </div> */}

                            <div className="mt-4" >
                                <Button className="btn-primary w-full" disabled={processing} >Login <PlayIcon className={'text-white text-opacity-80 size-4'} /></Button>
                            </div>

                            <div className='text-center'>
                                <Link className='text-primary text-sm font-medium' href={route('password.request')} >Forgot Password</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
