import { ButtonProps ,TitleVariants ,StyleVariants} from "@/interfaces";


const Title: Record<TitleVariants,string> = {
  first: "First Value",
  second: "Second Value", 
  last: "The Last Value"
};

const shapes: Record<StyleVariants,string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md', 
  'rounded-lg': 'rounded-lg'
};

const Button: React.FC<ButtonProps> = ({title = 'second',styles ='rounded-md'}) => {
  return (
    <div className="text-2xl p-10 text-black bg-yellow-100 pt-20">
      <button type="button" className={`${shapes[styles]}`}>
        {Title[title]}
      </button>
    </div>
  );
};

export default Button;