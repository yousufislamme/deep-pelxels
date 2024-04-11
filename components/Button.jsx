const Button = ({ icon: Icon, btnIconClass, btnTitle, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-md font-semibold flex flex-row justify-center items-center gap-2 ${className}`}
    >
      <span className={`${btnIconClass}`}>{Icon && <Icon />}</span>
      {btnTitle}
    </button>
  );
};

export default Button;
