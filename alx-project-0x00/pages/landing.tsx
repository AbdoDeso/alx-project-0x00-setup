import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div className="flex flex-col  justify-center items-center text-4xl font-semibold">
      <h1 className=" text-xl  font-extralight">Landing Page</h1>
        <Card />
        <Button title="first" style="small"/>
        <Button title="second" style="mid"/>
        <Button title="third" style="large" />
    </div>
    
  )
}
export default Landing