import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { achivements, experiences } from "../constants";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";

const AchivementsCard = ({ logo, name, description, profile, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="xs:w-[45%] green-pink-gradient p-[2px] rounded-2xl h-auto md:h-[13rem]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 flex flex-col md:flex-row rounded-2xl h-full items-center "
      >
        <div
          className="w-[5rem] md:w-[15rem] "
          onClick={() => window.open(profile, "_blank")}
        >
          <img src={logo} alt={name} className="rounded-full cursor-pointer" />{" "}
          <a></a>
        </div>

        <div className="flex flex-col items-center md:items-start md:ml-[2rem]">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]  text-center md:text-left">
            {description}
          </p>
          <p className="mt-3 text-[#a2a7e9] hover:text-white cursor-pointer border-b-[1px] border-b-[#a2a7e9] hover:border-white  text-[12px] ">
            <a href={profile} target="_blank">
              {profile}
            </a>
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achivements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My profiles & technical knowledge{" "}
        </p>
        <h2 className={styles.sectionHeadText}>Profiles and Skills </h2>
      </motion.div>
      <div className="mt-24 flex flex-wrap gap-10 justify-center">
        {achivements.map((achivement, index) => (
          <AchivementsCard
            key={`experience-${index}`}
            index={index}
            {...achivement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achivements, "profiles");
