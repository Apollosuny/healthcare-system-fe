'use client';

import { Loading } from '@/components/common/loading';
import { SignInFormValues, useSignIn } from '@/utils/hooks/useSignIn';
import { Controller } from 'react-hook-form';

const SignIn: React.FC = () => {
  const { control, handleSubmit, signInMutation, isDirty, isValid } =
    useSignIn();

  const handleSignIn = (data: SignInFormValues) => {
    signInMutation.mutate(data);
  };

  return (
    <div className='w-full h-screen overflow-hidden bg-slate-400 relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px]'>
        <div className='bg-white rounded-xl p-4 flex items-center gap-5'>
          <div className=''>
            <div className='w-64 h-64 rounded-xl bg-red-200' />
          </div>
          <div className='w-full'>
            <h3 className='text-center text-xl font-bold'>Welcome back</h3>
            <p className='text-sm font-normal text-center'>
              Please enter your details
            </p>
            <div className='mt-3'>
              <form>
                <Controller
                  name='username'
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div>
                      <label
                        htmlFor='username'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Username
                      </label>
                      <input
                        type='text'
                        id='username'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='John'
                        required
                        value={value}
                        onChange={onChange}
                      />
                    </div>
                  )}
                />
                <Controller
                  name='password'
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className='mt-3'>
                      <label
                        htmlFor='password'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        id='password'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='•••••••••'
                        required
                        value={value}
                        onChange={onChange}
                      />
                    </div>
                  )}
                />
              </form>
              <button
                type='button'
                className='text-white bg-[#8970e6] px-4 py-2 rounded-xl mt-5 w-full hover:opacity-90 flex items-center justify-center'
                disabled={!isValid || !isDirty || signInMutation.isPending}
                onClick={handleSubmit(handleSignIn)}
              >
                {signInMutation.isPending ? (
                  <Loading width='24px' height='24px' />
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
