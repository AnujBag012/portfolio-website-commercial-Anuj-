import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [
  { id: 0, label: "Home", link: "#" },
  { id: 1, label: "About", link: "#about" },
  { id: 2, label: "Media", link: "#media" },
  { id: 3, label: "Consultancy", link: "#services" },
  { id: 4, label: "Contact", link: "#form" }
];

export const Navigation: React.FC = () => (
  <motion.ul variants={variants}>
    {itemIds.map(item => (
      <MenuItem i={item.id} key={item.id} label={item.label} link={item.link} />
    ))}
  </motion.ul>
);
