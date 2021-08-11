import { motion } from "framer-motion";
import React from "react";
import { IconButtonProps } from "./props";
import Image from "next/image";
import Flex from "../../composers/flex";

const IconButton = ({
  icon = "add",
  iconSize = "medium",
  shape = "square",
  height = "48px",
  width = "48px",
  onClick,
  className,
  ...rest
}: IconButtonProps) => {
  //Functions
  function getIconBgColor() {
    switch (icon) {
      case "filter":
        return "#9A895C";
      case "empty_heart":
      case "full_heart":
      case "cross":
      case "options":
      case "earth":
      case "list":
      case "black_heart":
        return "#FFFFFF";
      case "trashcan":
      case "folder":
      case "download":
      case "add":
        return "#F46363";
      case "edit":
      case "save":
      case "upload":
        return "#3F8CFF";
      default:
        break;
    }
  }

  function getIconDimensions() {
    if (icon === "options") return { height: "4px", width: "16px" };

    switch (iconSize) {
      case "small":
        return { height: "12px", width: "13px" };
      case "medium":
        return { height: "28px", width: "28px" };
      case "large":
        return { height: "32px", width: "32px" };
      default:
        break;
    }
  }

  //Render
  return (
    <motion.button
      style={{
        width: width,
        height: height,
        backgroundColor: getIconBgColor(),
      }}
      whileHover={{ scale: 0.9875 }}
      whileTap={{ scale: 1.0125 }}
      className={`${shape === "square" ? "rounded-lg" : "rounded-full"
        } ${className}`}
      onClick={onClick}
    >
      <Flex justify='center' align='center'>
        <Image
          src={`/assets/icons/${icon}.svg`}
          height={getIconDimensions()?.height ?? "28px"}
          width={getIconDimensions()?.width ?? "28px"}
        />
      </Flex>
    </motion.button>
  );
};

export default IconButton;
