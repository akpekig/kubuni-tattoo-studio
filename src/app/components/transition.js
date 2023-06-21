"use client";
import { motion, AnimatePresence } from "framer-motion";
export default function Transition({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: [0, 0.71, 0.37, 1], duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
