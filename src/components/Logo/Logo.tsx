import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a className={s.logoContainer}>
      <svg width="42" height="17" className={s.logoIcon}>
        <use href="/img/sprite.svg#icon-Logo-2"></use>
      </svg>
      <span className={s.logoText}>Read Journey</span>
    </a>
  );
};
export default Logo;
