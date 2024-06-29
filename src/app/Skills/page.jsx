import SkillPic from "@/components/Skill-First";
import Footer from "@/components/Footer";

function Skill(params) {
  return (
    <>
    <div className=" grid grid-rows content-center gap-y-16">

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl p-2 m-2 mt-4 shadow-md font-semibold">MY SKILLS</h2>
        <p className="text-gray-600 m-4 w-2/4">
          I have learned and used these languages to make my projects&rsquo; I love some of the languages but some I find hard&rsquo; Right now I&apos;m very interested in learning <b>React with Next&rsquo;JS</b>&rsquo;
        </p>
      </div>

      <SkillPic />
      
      <Footer  />
      
      </div>
    </>
  );
}

export default Skill;
