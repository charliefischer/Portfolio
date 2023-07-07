import Link from "next/link";
import { getHomePageContent } from "../lib/api";

export default function JobsBoard({ preview, cmsContent }) {
  const previousJobs = {
    Illustrator: true,
    Labourer: true,
    Barman: true,
    "Bicycle Courier": true,
    "Web Developer": true,
    Barista: true,
    Designer: true,
    Removals: true,
    "Cable Installer": true,
  };

  const name = "Charlie Fischer";
  const currentJobs = { Illustrator: true, "Web Developer": true };
  const jobList = [
    "Lift Engineer",
    "Labourer",
    "Private Investigator",
    "Barman",
    "Electrician",
    "Charlie Fischer",
    "Landlord",
    "Illustrator",
    "Bicycle Courier",
    "Driving Instructor",
    "Stuntman",
    "Web Developer",
    "Animal Breeder",
    "Barista",
    "Tarot Reader",
    "Careers Advisor",
    "Body Guard",
    "Chimney Sweep",
    "Designer",
    "Butler",
    "Bus Driver",
    "Grave Digger",
    "Removals",
    "Funeral Director",
    "Baker",
    "Cage Fighter",
    "Cable Installer",
    "Optician",
  ];
  return (
    <>
        <div className="jobs-titles-grid flex flex-wrap justify-between max-h-[100vh] overflow-hidden">
          {jobList.map((job) => {
            if(job === "Web Developer"){
              return (
                <Link href="/creative-coding" key={job}
                className="text-[#F17B0D]">
                  {job}
                </Link>
              )
            } else return(
            <span
              key={job}
              className={`${previousJobs[job] ? "text-[#F17B0D]" : ""} ${
                job === name
                  ? "text-[white] bg-[#F17B0D] rounded-[16px] px-[4px]"
                  : ""
              } ${currentJobs[job] ? "text-[#F17B0D]" : ""} ${!currentJobs[job] && name !== job ? "opacity-[0.25]" : ""}`}
            >
              {job}
            </span>
          )})}
        </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const cmsContent = await getHomePageContent(preview);
  return {
    props: { preview, cmsContent: cmsContent?.content?.[0] ?? null },
  };
}
