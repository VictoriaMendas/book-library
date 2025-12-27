import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import s from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
export interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
}
const registrationSchema = yup.object<RegistrationFormData>().shape({
  email: yup
    .string()
    .email("Enter a valid email")
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
    .min(7, "Enter a valid password")
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
  // Чи треба використати хукАйді для генерування унікального айді на інпути?
  return (
    <div className={s.formContainer}>
      <h1 className={s.mainTitle}>
        Expend your mind, reading <span className={s.greyTitle}>a book</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.formRegister}>
        <label>
          <input
            type="text"
            {...register("name")}
            className={s.input}
            placeholder="Name:"
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.name.message}
            </p>
          )}
        </label>
        <label>
          <input
            type="email"
            {...register("email")}
            className={s.input}
            placeholder="Email:"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email.message}
            </p>
          )}
        </label>
        <label>
          <input
            type="password"
            {...register("password")}
            className={s.input}
            placeholder="Password:"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </p>
          )}
        </label>
        <div className={s.buttonLink}>
          <button type="submit" disabled={isSubmitting} className={s.button}>
            Registration
          </button>
          <Link to={"/login"} className={s.link}>
            <p className={s.description}> Already have an account?&nbsp;</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
