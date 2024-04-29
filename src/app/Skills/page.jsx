import SkillPic from "@/components/Skill-First"; 
import Footer from "@/components/Footer"; 

function Skill(params) {
    return(
        <div className="grid gap-96">
          
           <div className="mb-11"> 
           <SkillPic/>
           </div>

           
         
            <div className="items-end grid ">
            <Footer />
           </div>

        </div>
        

    )
}
export default Skill;