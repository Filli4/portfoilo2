import SkillPic from "@/components/Skill-First"; 
import Footer from "@/components/Footer"; 

function Skill(params) {
    return(
        <div className="flex flex-col">
            <div className="mb-96">
            <SkillPic/>
            </div>
            <div className="mt-44">
            <Footer />
           </div>

        </div>
        

    )
}
export default Skill;