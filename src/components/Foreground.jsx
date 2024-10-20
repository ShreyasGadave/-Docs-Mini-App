import React,{ useRef,useState } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "This is the Background colo will be displayed",
      fileSize: ".29mbv",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the Background colo will be displayed",
      fileSize: ".9mbv",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the Background colo will be displayed",
      fileSize: ".29mbv",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is the Background colo will be displayed",
      fileSize: ".92mbv",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
