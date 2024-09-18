import Navbar from "@/components/navbar";
import Overview from "@/components/overview"
import Skill from "@/components/skill";
import Project from "@/components/project";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div  >
      <Overview />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}
