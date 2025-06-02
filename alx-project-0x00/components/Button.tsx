import { ButtonProps } from "@/interfaces";
import { title } from "process";
 
const buttonTitle = {
    first: "First Value" ,
    seconed: "Second Value",
    last: "The Last Value"

}
const Style = {
  small:  "rounded-sm",
  mid:  "rounded-mid",
  large:  "rounded-lg",
}

const Button: React.FC<ButtonProps> = ({TitleVariants ,StyleVariants}) => {

    return (
        <div className="text-2xl p-10 text-black  bg-yellow-100 pt-20">
       
            <button  type="button" className={`${Style[StyleVariants]}`}>
               <a href="#"> {buttonTitle[TitleVariants]}</a>
            </button>
            
        </div>
    )

}
export default Button;