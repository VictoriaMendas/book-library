import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";

interface LoginFormData {
  email: string;
  password: string;
}
const loginSchema = yup.object<LoginFormData>().shape({
  email: yup
    .string()
    .email("Enter email")
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required("Email is required"),

  password: yup
    .string()
    .min(7, "Password too short")
    .required("Password is required"),
});
const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input type="email" {...register("email")} />
      </label>
      <label>
        <input type="password" {...register("password")} />
      </label>
      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
    </form>
  );
};
export default LoginForm;
