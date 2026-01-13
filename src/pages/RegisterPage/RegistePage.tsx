import BlockPhone from "../../components/BlockPhone/BlockPhone";

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import s from "./RegisterPage.module.css";
const RegisterPage: React.FC = () => {
  return (
    <div className={s.containerRegister}>
      <RegisterForm />
      <BlockPhone />
    </div>
  );
};
export default RegisterPage;
