import React, { useState } from "react";
import "./trackerStyle.css";
import data from "../../time-tracking-dashboard-main/data.json";
import ellipsis from "../../time-tracking-dashboard-main/images/icon-ellipsis.svg";
import work from "../../time-tracking-dashboard-main/images/icon-work.svg";
import exercise from "../../time-tracking-dashboard-main/images/icon-exercise.svg";
import social from "../../time-tracking-dashboard-main/images/icon-social.svg";
import play from "../../time-tracking-dashboard-main/images/icon-play.svg";
import self from "../../time-tracking-dashboard-main/images/icon-self-care.svg";
import study from "../../time-tracking-dashboard-main/images/icon-study.svg";
import jeremy from "../../time-tracking-dashboard-main/images/image-jeremy.png";

function Home() {
  const [lists, setLists] = useState(data);
  const [color, setColor] = useState("lrw");
  const [im, setIm] = useState(work); // Default image

const getColorAndImage = (title) => {
  switch (title) {
    case "Work":
      return { color: "lrw", image: work };
    case "Exercise":
      return { color: "lg", image: exercise };
    case "Social":
      return { color: "v", image: social };
    case "Play":
      return { color: "sb", image: play };
    case "Self Care":
      return { color: "so", image: self };
    case "Study":
      return { color: "lrs", image: study };
    default:
      return { color: "lrw", image: work };
  }
};

  return (
    <div className="vdb sm:min-h-screen h-auto sm:py-0 py-12 sm:px-8  flex items-center justify-center w-screen ">
      <div className="sm:w-[90%] w-full flex gap-8 h-[400px]   ">
        {/* First Panel */}
        <div></div>
        <section className=" db rounded-xl h-full w-[20%]   ">
          <div className=" b rounded-xl h-[70%] w-full   "></div>
        </section>
        {/* Minor Panels */}
        <section className="  flex flex-wrap gap-12 items-start rounded-xl h-full w-[80%]   ">
          {/* Single elements */}
          {lists.map((list, id) => {
            const { title, timeframes } = list;
            const { color, image } = getColorAndImage(title);
            return (
              <div
                key={id}
                className={`h-[200px] z-20 cursor-pointer relative ${color} w-[220px] rounded-xl `}
              >
                <img
                  src={image} // Use the dynamic image source
                  className="absolute h-[60px] right-2 top-[1px]"
                  alt=""
                />
                <div className="h-[160px] z-40 px-6 py-3 text-white absolute bottom-0 hover:-bottom-4 transition-all db w-full mt-10 rounded-t-[20px] rounded-b-[10px] ">
                  <section className="flex items-center font-[600] w-full justify-between ">
                    <p>{title}</p>
                    <img src={ellipsis} className="" alt="" />
                  </section>
                  <section>
                    <p className="text-[35px] font-[300] my-2 ">
                      {timeframes.weekly.current}hrs
                    </p>
                    <p className="font-[400] text-[16px] opacity-[0.6] ">
                      Last Week - {timeframes.weekly.previous}hrs
                    </p>
                  </section>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Home;
