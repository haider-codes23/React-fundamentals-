import {useRef, ChangeEvent ,useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {isValid, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3, {message: "Name must be atleast 3 characters long"}),
  age: z.number({invalid_type_error: "Age field is required"}).min(18, {message: "Age must be a minimum of 18"})
})

type FormData = z.infer<typeof schema>

// interface formData {
//   name: string;
//   age: number;
// }

function Form() {
  const {register, handleSubmit, formState} = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);

 
  // Managing form using react-hook-form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register('name')} id="name" type="text" className="form-control" />
        {formState.errors.name && <p className='text-danger'>{formState.errors.name.message}</p>}
        
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input {...register('age', {valueAsNumber: true})} id="age" type="number" className="form-control" />
        {formState.errors.age && <p className='text-danger'>{formState.errors.age.message}</p>}
        
      </div>
      <button disabled={!formState.isValid} className="btn btn-primary" type="submit">Submit</button>
    </form>
  );




  

































  // Managing Forms using State Hook
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handleNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPerson({...person, name: event.target.value});
  // };

  // const handleAgeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPerson({...person, age: event.target.value});
  // }

  // return (
  //   <form onSubmit={(event) => {
  //     event.preventDefault();
  //     console.log(person);
      
  //   }}>
  //     <div className="mb-3">
  //       <label htmlFor="name" className="form-label">Name</label>
  //       <input value={person.name} onChange={handleNameOnChange} id="name" type="text" className="form-control" />
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="age" className="form-label">Age</label>
  //       <input value={person.age} onChange={handleAgeOnChange} id="age" type="number" className="form-control" />
  //     </div>
  //     <button className="btn btn-primary" type="submit">Submit</button>
  //   </form>
  // );



























  // Managing Forms using Ref Hook
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  // const person = {name: "", age: 0};


  // return (
  //   <form onSubmit={(event) => {
  //     event.preventDefault();
  //     console.log("Submitted");
  //     if (nameRef.current !== null)
  //       person.name = nameRef.current.value;
  //     if (ageRef.current !== null)
  //       person.age = parseInt(ageRef.current.value);
  //     console.log(person);
      
  //   }}>
  //     <div className="mb-3">
  //       <label htmlFor="name" className="form-label">Name</label>
  //       <input id="name" ref={nameRef} type="text" className="form-control" />
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="age" className="form-label">Age</label>
  //       <input id="age" ref={ageRef} type="number" className="form-control" />
  //     </div>
  //     <button className="btn btn-primary" type="submit">Submit</button>
  //   </form>
  // );

}

export default Form;