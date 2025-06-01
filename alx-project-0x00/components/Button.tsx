import { ButtonProps } from "@/interfaces";

const Text = {
    first : "First Value",
    second : "Second Value",
    third : "The Last Value"
}
const Style = {
    small : "text-xl p-6 text-black rounded-sm bg-red-100",
    mid : "text-2xl p-10 text-black rounded-md bg-yellow-100",
    large : "text-5xl p-20 text-black rounded-full bg-blue-100"
}

const Button: React.FC<ButtonProps> = ({title, style}) => {
    return (
        <div className="pt-20">
            <button  type="button" className={`${Style[style]}`}>
               <a href="#"> {Text[title]}</a>
            </button>
        </div>
    )

}
export default Button;