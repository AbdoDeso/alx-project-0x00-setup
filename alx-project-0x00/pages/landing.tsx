import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div className="flex flex-col  justify-center items-center text-4xl font-semibold">
      <h1 className=" text-xl  font-extralight">Landing Page</h1>
        <Card />
        <Button title='first' styles='rounded-sm'/>
        <Button title="second" styles='rounded-md'/>
        <Button title="last" styles='rounded-full' />
    </div>
    
  )
}
export default Landing