import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MultiSelectDropdown from './MultiSelectDropdown';

const schema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1),
  languages: yup.array().min(1),
  location: yup.string().required(),
  feeRange: yup.string().required()
});

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { category: [], languages: [] },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Name" className="w-full p-2 border rounded" />
      {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

      <textarea {...register('bio')} placeholder="Bio" className="w-full p-2 border rounded" />
      {errors.bio && <p className="text-red-500 text-sm">Bio is required</p>}

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <MultiSelectDropdown
            options={['Singers', 'Dancers', 'DJs', 'Speakers']}
            selected={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.category && <p className="text-red-500 text-sm">Select at least one category</p>}

      <Controller
        name="languages"
        control={control}
        render={({ field }) => (
          <MultiSelectDropdown
            options={['Hindi', 'English', 'Punjabi']}
            selected={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.languages && <p className="text-red-500 text-sm">Select at least one language</p>}

      <select {...register('feeRange')} className="w-full p-2 border rounded">
        <option value="">Select Fee Range</option>
        <option value="₹10k-₹30k">₹10k-₹30k</option>
        <option value="₹30k-₹60k">₹30k-₹60k</option>
        <option value="₹60k+">₹60k+</option>
      </select>
      {errors.feeRange && <p className="text-red-500 text-sm">Fee range is required</p>}

      <input {...register('location')} placeholder="Location" className="w-full p-2 border rounded" />
      {errors.location && <p className="text-red-500 text-sm">Location is required</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
