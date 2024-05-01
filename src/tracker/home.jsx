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
  const [time,setTime] = useState('weekly')
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
    <div className="vdb  sm:h-auto h-auto  py-10 sm:py-20  sm:px-8 px-4 flex items-center justify-center w-screen ">
      <div className="sm:w-[90%] w-full flex sm:flex-row flex-col gap-2 h-full sm:h-[500px]   ">
        {/* First Panel */}

        <section className=" db rounded-xl sm:h-[500px] h-[200px] sm:w-[20%] w-full   ">
          <div className=" b rounded-xl h-[65%] w-full   ">
            {/* Text details */}
            <div className="text-white  sm:block flex items-center justify-center gap-4 py-8 px-4 ">
              <img
                className="h-[70px] border-[2px] border-white rounded-[50%] "
                src={jeremy}
                alt=""
              />
              <div className="sm:block flex items-start justify-center flex-col">
                <h4 className="text-[13px] sm:mt-6 opacity-[0.6] font-[400] ">
                  Report for
                </h4>
                <section className="flex sm:flex-col sm:gap-0 gap-1 font-[300] leading-tight text-[30px] sm:text-[40px] ">
                  <h3>Jeremy </h3>
                  <h3>Robson</h3>
                </section>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col w-full items-start py-4 justify-center gap-6 font-[500 text-[18px] px-8 text-white">
            {["daily", "weekly", "monthly"].map((d, id) => {
              return (
                <button
                  key={id}
                  onClick={() => {
                    setTime(d);
                  }}
                  className={` ${
                    d === time ? "opacity-[1]" : "opacity-60"
                  } capitalize hover:opacity-[1] transition-all `}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </section>
        {/* Minor Panels */}
        <section className="  flex flex-wrap my-8 sm:my-0 justify-center sm:justify-evenly items-center sm:gap-0 gap-4  rounded-xl h-full w-full sm:w-[80%]   ">
          {/* Single elements */}
          {lists.map((list, id) => {
            const { title, timeframes } = list;
            const { color, image } = getColorAndImage(title);
            return (
              <div
                key={id}
                className={`sm:h-[220px] h-[180px] z-20 cursor-pointer relative ${color} w-[95%] sm:w-[220px] rounded-xl `}
              >
                <img
                  src={image} // Use the dynamic image source
                  className="absolute h-[60px] right-2 top-[1px]"
                  alt=""
                />
                <div className="sm:h-[160px] h-[120px] z-40 px-6 py-3 text-white absolute bottom-0 sm:hover:-bottom-4 hover:bg-[#6f76c8] transition-all db w-full left-0 mt-10 rounded-t-[20px] rounded-b-[10px] ">
                  <section className="flex items-center font-[600] w-full justify-between ">
                    <p>{title}</p>
                    <img src={ellipsis} className="" alt="" />
                  </section>
                  <section className="sm:block flex w-full justify-between items-end  " >
                    <p className="text-[35px] font-[300] sm:my-2 ">
                      {timeframes[time].current}hrs
                    </p>
                    <p className="font-[400] text-[16px] opacity-[0.6] ">
                      Last Week - {timeframes[time].previous}hrs
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
