import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/api/auth';

export type SignInFormValues = {
  username: string;
  password: string;
};

export const useSignIn = () => {
  const defaultValues: SignInFormValues = {
    username: '',
    password: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SignInFormValues>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const signInMutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: async ({ username, password }: SignInFormValues) => {
      console.log('username', username);
      console.log('password', password);
      return await signIn(username, password);
    },
    onSuccess: () => {},
    onError: () => {},
  });

  return {
    control,
    handleSubmit,
    signInMutation,
    errors,
    isDirty,
    isValid,
  };
};

const schema = object().shape({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
});
