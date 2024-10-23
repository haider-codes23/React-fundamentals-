import {FieldValues, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { categories } from '../App';

const schema = z.object({
  description: z.string().min(5).max(20),
  amount: z.number().min(1),
  category: z.string().min(5).max(15)
});

type FormData = z.infer<typeof schema>

interface Props {
  addExpense: (expense: FormData) => void;
}

function ExpenseForm({addExpense}: Props) {
  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});
  

  return (
    <form onSubmit={handleSubmit(data => {
      addExpense(data);
      reset();
    })}>
      <div className="mb-3">
        <label htmlFor="decsription" className="label-form">Description</label>
        <input {...register('description')} id="description" type="text" className="form-control" />
        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="label-form">Amount</label>
        <input {...register("amount",{valueAsNumber: true})} id="amount" type="number" className="form-control" />
        {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="label-form">Category</label>
        <input {...register('category')} id="category" type="text" className="form-control" />
        {errors.category && <p className='text-danger'>{errors.category.message}</p>}
      </div>
      
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;