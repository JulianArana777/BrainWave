import ButtonGradient from "../assets/svg/ButtonGradient"
import Button from "../Components/Button"
const HomePage = () =>{



 return(
    <>
    <h1 className="text-3xl font-bold underline">
        Hello World
        <div className="pt-19 lg:pt-21 overflow-hidden" >
            
            <Button className="mt-10" href="#login">
                something
            </Button >
            </div>       
    </h1>
     <ButtonGradient></ButtonGradient>
  </>
 )
};

export default HomePage