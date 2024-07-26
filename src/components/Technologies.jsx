import React from "react";
import {
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiReactjsLine,
} from "react-icons/ri";
import { SiFigma, SiFramer, SiMongodb, SiMongoose } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconv = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-7xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconv(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-4xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconv(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Line className="text-4xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconv(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-4xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconv(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconv(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsLine className="text-4xl text-white" />
        </motion.div>
        <motion.div
          variants={iconv(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-4xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconv(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongoose className="text-4xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconv(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFigma className="text-4xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconv(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFramer className="text-4xl text-purple-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
