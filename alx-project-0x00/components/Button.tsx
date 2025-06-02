import { ButtonProps } from "@/interfaces";

const buttonTitle = {
  first: "First Value",
  second: "Second Value", 
  last: "The Last Value"
};

const Style = {
  small: "rounded-sm",
  mid: "rounded-md", 
  large: "rounded-lg"
};

const Button: React.FC<ButtonProps> = ({ TitleVariants, StyleVariants }) => {
  return (
    <div className="text-2xl p-10 text-black bg-yellow-100 pt-20">
      <button type="button" className={Style[StyleVariants]}>
        {buttonTitle[TitleVariants]}
      </button>
    </div>
  );
};

export default Button;