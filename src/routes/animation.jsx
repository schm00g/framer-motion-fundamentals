import React from 'react';
import { motion } from "framer-motion"

export default function Animation(){
  return (
    <div className="example-container">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      />
    </div>
  )
}