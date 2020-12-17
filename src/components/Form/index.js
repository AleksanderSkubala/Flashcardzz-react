import React from "react";
import { useForm } from "react-hook-form";
import { db } from '../../firebaseInit';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    db.collection('flashcardSet').add(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="flashcardsName" ref={register({ required: true })} />
      {errors.flashcardsName && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}