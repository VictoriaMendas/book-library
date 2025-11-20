import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
}
const registrationSchema = yup.object<RegistrationFormData>().shape({
  email: yup
    .string()
    .email("Enter email")
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required("Email is required"),
  name: yup
    .string()
    .min(2, "Name too short")
    .max(40, "Name too long")
    .required("Name is required"),
  password: yup
    .string()
    .min(7, "Password too short")
    .matches(/[A-Z]/)
    .matches(/[0-9]/)
    .required("Password is required"),
});
const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    defaultValues: { email: "", name: "", password: "" },
  });
  const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input type="text" {...register("name")} />
        {errors.name && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.name.message}
          </p>
        )}
      </label>
      <label>
        <input type="email" {...register("email")} />
      </label>
      <label>
        <input type="password" {...register("password")} />
      </label>
      <button type="submit" disabled={isSubmitting}>
        Registration
      </button>
    </form>
  );
};
export default RegisterForm;
