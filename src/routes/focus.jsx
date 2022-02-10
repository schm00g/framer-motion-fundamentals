import { motion } from 'framer-motion';

export default function Focus() {
  return (
    <div>
      <div className="example-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          href="#"
        />
      </div>
      <div className="example-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          href="#"
        />
      </div>  
      <div className="example-container">
        <motion.div
          drag
          // dragConstraints={{ left: 0, right: 300 }}
          whileHover={{ scale: 1.1 }}
          href="#"
        />
      </div>  
      <div className="example-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          href="#"
        />
      </div>  
      <div className="example-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          href="#"
        />
      </div>
    </div>
  );
}