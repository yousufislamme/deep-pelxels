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
      className={`text-md flex flex-row items-center justify-center gap-2 font-semibold ${className}`}
    >
      <span className={`${btnIconClass}`}>{Icon && <Icon />}</span>
      {btnTitle}
    </button>
  );
};

export default Button;
