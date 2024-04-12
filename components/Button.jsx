const Button = ({
  icon: Icon,
  btnIconClass,
  href,
  btnTitle,
  onClick,
  className,
}) => {
  return (
    <button
      href={href}
      onClick={onClick}
      className={`text-md font-semibold flex flex-row justify-center items-center gap-2 ${className}`}
    >
      <span className={`${btnIconClass}`}>{Icon && <Icon />}</span>
      {btnTitle}
    </button>
  );
};

export default Button;
