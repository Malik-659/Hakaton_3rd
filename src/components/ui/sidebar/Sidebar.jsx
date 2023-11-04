import { motion } from "framer-motion";
import { useState } from "react";
import { MenuToggle } from "./Menu.Toggle";
import { MenuItem } from "./MenuItem";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      <MenuToggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <MenuItem />
    </motion.nav>
  );
};
