import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

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
  animate(chroma, [0.1, 0.2], {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 2,
  });
  animate(gradRotation, [10, 180], {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 4,
    type: "tween",
  });
  animate(color, [120, 245], {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
  });
  const btnClassName =
    "flex items-center rounded-full px-4 py-2 text-xs leading-4 sm:text-sm sm:leading-5 hover:scale-110 ";
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <motion.h1
        style={{
          backgroundImage: background,
        }}
        className="bg-clip-text w-min bg-blend-soft-light bg-neutral-900 text-transparent text-4xl leading-[44px]  sm:text-[57px] sm:leading-[64px] font-heading capitalize text-center pb-4"
      >
        Abhishek Saxena
      </motion.h1>
      <p className="text-lg sm:text-xl sm:leading-7 leading-7 font-body pb-4">
        Hi, I'm a Software Engineer
      </p>
      <div className="flex items-center justify-around space-x-5">
        <a
          href="mailto:abhishekkumar.saxena@gwu.edu"
          target="_blank"
          rel="noopener noreferrer"
          className={"bg-teal-400 text-black " + btnClassName}
        >
          <FiMail className="mr-2" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/saxenabhishek"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "border dark:border-white/50 border-black/50 " + btnClassName
          }
        >
          <FiLinkedin className="mr-2 text-xs" />
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
};

export default About;
