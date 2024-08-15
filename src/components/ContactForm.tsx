import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "../style/style.css";

export const ContactForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  function onSubmit() {
    alert("Form has submitted successfully!");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 id="topic">Contact Form</h2>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is requared",
            },
          })}
        />
        <p className="errors"> {errors.name?.message} </p>

        <br />

        <input
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email", {
            required: {
              value: true,
              message: "Email is requared",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email",
            },
          })}
        />
        <p className="errors"> {errors.email?.message} </p>

        <br />

        <input
          type="text"
          id="message"
          placeholder="Message"
          {...register("message", {
            required: {
              value: true,
              message: "Message is requared",
            },
          })}
        />
        <p className="errors"> {errors.message?.message} </p>

        <br />

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
