import { useForm } from "react-hook-form";

function UseFormDemo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // e.preventDefault();
    console.log("Form Data : ", data.username);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        {errors.username && (
          <p className="alert alert-danger">Username is mandatory field</p>
        )}
        <input
          type="text"
          {...register("username", { required: true, minLength: 6 })}
        />

        {/* <input type="text" name="username" minLength="6" required={true} /> */}
        <button type="sumbit">Submit</button>
      </form>
    </>
  );
}

export default UseFormDemo;
