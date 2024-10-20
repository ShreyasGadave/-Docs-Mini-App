import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0  ">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex py-3 items-center justify-center  ">
            {data.close ? (
              <IoCloseOutline size="0.9em" color="#fff" />
            ) : (
              <IoIosDownload size="0.9em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-400"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
