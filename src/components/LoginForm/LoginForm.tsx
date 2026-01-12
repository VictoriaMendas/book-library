import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import s from "./LoginForm.module.css";
import Logo from "../Logo/Logo";
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
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className={s.formContainer}>
      <Logo />
      <h1 className={s.mainTitle}>
        Expend your mind, reading <span className={s.greyTitle}>a book</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.formLogin}>
        <label className={s.labelInputForm}>
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
        <label className={s.labelInputLast}>
          <input
            type="password"
            {...register("password")}
            className={s.input}
            placeholder="Password:"
          />
          <svg width="20" height="20" className={s.iconInput}>
            <use href="/public/img/sprite.svg#icon-eye"></use>
          </svg>
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </p>
          )}
        </label>
        <div className={s.buttonLink}>
          <button type="submit" disabled={isSubmitting} className={s.button}>
            Log In
          </button>
          <Link to={"/register"} className={s.link}>
            <p className={s.description}> Dont have an account?&nbsp;</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
