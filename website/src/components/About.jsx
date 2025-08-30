import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import AbstractBlob from "./leafComponents/abstractBlob";

const About = () => {
  const links = [
    { name: "Email", url: "mailto:abhishekkumar.saxena@gwu.edu", icon: FiMail },
    { name: "GitHub", url: "https://github.com/saxenabhishek", icon: FiGithub },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saxenabhishek",
      icon: FiLinkedin,
    },
  ];

  const color = useMotionValue(143);
  const chroma = useMotionValue(0.11);
  const diColor = useTransform(() => (color.get() - 60) % 360);
  const gradRotation = useMotionValue(35);
  const background = useMotionTemplate`
  radial-gradient(circle at 50% 100%, oklch(80.5% 0.12 ${diColor}/80%) 10%, transparent 60%),
  linear-gradient(${gradRotation}deg, oklch(92% 0.065 ${color}/80%), oklch(75% ${chroma} ${color}/80%), oklch(100.0% 0 0/70%))
  `;
  const floatingOrbColor = useMotionTemplate`oklch(75% ${chroma} ${color}/20%)`;
  animate(chroma, [0.1, 0.2], {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 1,
  });
  animate(gradRotation, [10, 180], {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 2,
    type: "tween",
  });
  animate(color, [120, 245], {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
  });
  const btnClassName =
    "flex items-center rounded-full px-4 py-2 text-xs leading-4 sm:text-sm sm:leading-5";

  const emailBtn = {
    hidden: { scale: 0.95, y: 20 },
    visible: { scale: 1, y: 0 },
    hover: { scale: 1.2 },
  };
  const emailBtnIcon = {
    hidden: {},
    visible: {},
    hover: { y: -5, x: -4, rotate: -20 },
  };
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="h-full flex flex-col justify-center items-center relative bg-blend-soft-light"
    >
      <motion.div
        style={{ fill: floatingOrbColor }}
        className="absolute h-2/4 w-3/4 -z-10 rotate-30 top-5 blur-2xl"
      >
        <AbstractBlob />
      </motion.div>
      <motion.h1
        style={{
          backgroundImage: background,
        }}
        className="bg-clip-text w-min bg-blend-hard-light bg-neutral-900 text-transparent text-4xl leading-[44px]  sm:text-[57px] sm:leading-[64px] font-heading capitalize text-center pb-4"
      >
        Abhishek Saxena
      </motion.h1>
      <p className="text-lg sm:text-xl sm:leading-7 leading-6 pb-4 tracking-[0.1px] sm:tracking-normal text-center">
        👋 Hi, I'm a Software Engineer
      </p>
      <div className="flex items-center justify-around space-x-5">
        <motion.a
          layout
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={emailBtn}
          href="mailto:abhishekkumar.saxena@gwu.edu"
          target="_blank"
          rel="noopener noreferrer"
          className={"bg-teal-400 text-black " + btnClassName}
        >
          <motion.span variants={emailBtnIcon}>
            <FiMail className="mr-2" />
          </motion.span>
          Email Me
        </motion.a>
        <a
          href="https://linkedin.com/in/saxenabhishek"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "ring dark:ring-white/50 ring-black/50  hover:ring-2 " +
            btnClassName
          }
        >
          <FiLinkedin className="mr-2 sm:text-sm text-xs" />
          Let's Connect
        </a>
      </div>
    </motion.section>
  );
};

export default About;
