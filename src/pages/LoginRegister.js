import { useForm } from 'react-hook-form';

export default function LoginRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: 'Email required' })} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input type="password" {...register('password', { required: 'Password required' })} placeholder="Password" />
      <p>{errors.password?.message}</p>

      <button type="submit">Login / Register</button>
    </form>


  );
}
