import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  meno: string;
  priezvisko: string;
  email: string;
  sprava: string;
}

const MyForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Sorry Fery za čakanie</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
          Meno:
          <input {...register('meno', { required: 'Meno je povinné' })} />
          {errors.meno && <span>{errors.meno.message}</span>}
        </label>

        <label>
          Priezvisko:
          <input {...register('priezvisko', { required: 'Priezvisko je povinné' })} />
          {errors.priezvisko && <span>{errors.priezvisko.message}</span>}
        </label>

        <label>
          Email:
          <input
            {...register('email', {
              required: 'Email je povinný',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Neplatný email',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label>
          Správa:
          <textarea {...register('sprava')} />
        </label>

        <button type="submit">Odoslať</button>
      </form>
    </div>
  );
};

export default MyForm;
