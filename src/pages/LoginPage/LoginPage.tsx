import BlockPhone from "../../components/BlockPhone/BlockPhone";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";
const LoginPage: React.FC = () => {
  return (
    <div className={s.containerLogin}>
      <LoginForm />
      <BlockPhone />
    </div>
  );
};
export default LoginPage;
