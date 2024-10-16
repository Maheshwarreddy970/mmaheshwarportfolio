import About from "@/components/About";
import Connect from "@/components/Connect";
import Exprience from "@/components/Exprience";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" flex flex-wrap   mx-auto mt-10 px-3 max-w-7xl gap-5 ">
      <div className="  flex flex-col gap-5 w-full md:w-[48%] lg:w-[32%]">
        <About></About>
        <Exprience></Exprience>
        <Skills></Skills>
      </div>
      <div className="  flex flex-col gap-5 w-full md:w-[48%] lg:w-[32%]">
        <Profile></Profile>
        <Connect></Connect>
      </div>
      <div className="  flex flex-col gap-5 w-full md:w-[48%] lg:w-[32%]">
      <div className=" w-full h-screen bg-black">

      </div>
      </div>
    </main>
  );
}
