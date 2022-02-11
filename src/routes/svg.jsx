import { motion } from 'framer-motion'; 

export default function SVG() {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="100"
      height="100"
    >
      <motion.path 
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          // animation start state
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0, 
        }}
        // animation end state
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1, 
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
      />
    </motion.svg> 
  );
}
