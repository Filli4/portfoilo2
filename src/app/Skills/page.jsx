/* import SkillPic from "@/components/Skill-First";
import Footer from "@/components/Footer";

function Skill(params) {
  return (
    <>
    <div className=" ">

      <div className="flex flex-col justify-center items-center sm:flex">
        <h2 className="text-3xl p-2 m-2 mt-4 shadow-md font-semibold">MY SKILLS</h2>
        <p className="my-3 mx-1 border-x-2 rounded-3xl border-x-blue-100 sm:w-2/4   p-2  ">
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
 */
import SkillPic from "@/components/Skill-First";
import Footer from "@/components/Footer";

function Skill() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center sm:flex">
        <h2 className="text-3xl p-2 m-2 mt-4 shadow-md font-semibold">MY SKILLS</h2>
        <p className="my-3 mx-1 border-x-2 rounded-3xl border-x-blue-100 sm:w-2/4 p-2">
          I have learned and used these languages to make my projects&rsquo; I love some of the languages but some I find hard&rsquo; Right now I&apos;m very interested in learning <b>React with Next&rsquo;JS</b>&rsquo;
        </p>
      </div>
      <SkillPic />
      <Footer home="home m-3 lg:mt-8" />
    </div>
  );
}

export default Skill;
