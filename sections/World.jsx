"use client";

import {motion} from "framer-motion";

import styles from "../styles";
import {TitleText, TypingText} from "../components";
import {staggerContainer, fadeIn} from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-20 w-[200px] h-[150px] rounded-xl p-2 bg-[#5d6680]">
          <img
            src="/world1.png"
            alt="planet02"
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-start top-[70px] text-white pl-5">
            <div className="flex relative items-center">
              <img
                src="/people-01.png"
                alt="people"
                className="h-[25px] w-[25px] z-20"
              />
              <img
                src="/people-02.png"
                alt="people"
                className="absolute h-[25px] w-[25px] left-3 z-10"
              />
              <img
                src="/people-03.png"
                alt="people"
                className="h-[25px] w-[25px]"
              />
              <p className="text-[10px] ml-2">+264 has joined</p>
            </div>
            <h2 className="font-bold mt-2">The Upside Down</h2>
          </div>
        </div>
        <div className="absolute top-10 left-[55%] w-[200px] h-[150px] rounded-xl p-2 bg-[#5d6680]">
          <img
            src="/world2.png"
            alt="planet02"
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-start top-[70px] text-white pl-5">
            <div className="flex relative items-center">
              <img
                src="/people-01.png"
                alt="people"
                className="h-[25px] w-[25px] z-20"
              />
              <img
                src="/people-02.png"
                alt="people"
                className="absolute h-[25px] w-[25px] left-3 z-10"
              />
              <img
                src="/people-03.png"
                alt="people"
                className="h-[25px] w-[25px]"
              />
              <p className="text-[10px] ml-2">+264 has joined</p>
            </div>
            <h2 className="font-bold mt-2">Hawkins Labs</h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
