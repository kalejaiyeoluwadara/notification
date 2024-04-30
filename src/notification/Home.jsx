import React,{useState} from 'react'
import Test from './Test'
import mark from '../assets/images/mark.webp'
import chess from "../assets/images/chess.webp";
import angela from "../assets/images/angela.webp";
import nathan from '../assets/images/nathan.webp'
import anna from "../assets/images/anna.webp";
import jacob from "../assets/images/jacob.webp";
import rizky from "../assets/images/rizky.webp";
import smith from "../assets/images/smith.webp";


function Home() {
    const [state1,setState1]=useState(true)
    const [state2,setState2]=useState(true) 
    const [state3, setState3] = useState(true);
    const [count,setCount] = useState(3)
    const MarkAll = () =>{
        setState1(false)
        setState2(false)
        setState3(false);
        setCount(0)
    }
  return (
    <main className="vlgb flex items-center sm:py-20 justify-center min-h-screen w-screen">
      {/* <Test/> */}
      {/* Main Box */}
      <div className="white px-4 py-3 h-auto w-[650px] rounded-[20px] shadow-sm ">
        {/* Title box */}
        <section className="flex mt-2 w-full justify-between">
          <div className="flex gap-2 justify-center items-center ">
            <h3 className=" font-extrabold vdbc text-[18px]  ">
              Notifications
            </h3>
            <button className="blue text-white font-[500] rounded-[6px] px-2 py-[1px] border-none ">
              {count}
            </button>
          </div>
          <div>
            <button
              onClick={MarkAll}
              className=" vdbc cursor-pointer hover:text-[#0a317b] transition-all opacity-[0.8] "
            >
              Mark all as read
            </button>
          </div>
        </section>

        {/* Content Section */}
        <section className="mt-6 flex flex-col gap-3 ">
          {/* Single content */}
          <div
            onClick={() => {
              setState1(false);
              setCount(count - 1);
            }}
            className={`flex ${
              state1 && "vlgb"
            } relative cursor-pointer px-3 py-4 rounded-[8px] items-center justify-start `}
          >
            {/* Img */}
            <div className="mr-3 w-[60px] ">
              <img src={mark} className="h-[40px] w-[40px] " alt="" />
            </div>
            {/* Msg */}
            <div>
              <p className="text-[15px] relative">
                <span className="font-[800] hover:text-[#0a317b]">
                  Mark Webber
                </span>{" "}
                reacted to your recent post{" "}
                <span className="font-[800] hover:text-[#0a317b] opacity-[0.7] ">
                  My first tournament today!
                </span>
                {state1 && (
                  <span className="h-[6px] sm:-right-4 right-2 top-4 w-[6px] rounded-[50%] red absolute  "></span>
                )}
              </p>
              <p className="text-[13px] opacity-[0.7] ">1m ago</p>
            </div>
            {/* Status */}
          </div>

          {/* Single content */}
          <div
            onClick={() => {
              setState2(false);
              setCount(count - 1);
            }}
            className={`flex ${
              state2 && "vlgb"
            } relative cursor-pointer px-3 py-4 rounded-[8px] items-center justify-start `}
          >
            {/* Img */}
            <div className="mr-3">
              <img src={angela} className="h-[40px] w-[40px] " alt="" />
            </div>
            {/* Msg */}
            <div>
              <p className="text-[15px] relative ">
                <span className="font-[800] hover:text-[#0a317b] transition-all  ">
                  Angela Gray{" "}
                </span>
                followed you{" "}
                {state2 && (
                  <span className="h-[6px] -right-4 top-4 w-[6px] rounded-[50%] red absolute  "></span>
                )}
              </p>
              <p className="text-[13px] opacity-[0.7] ">5m ago</p>
            </div>
            {/* Status */}
          </div>

          {/* Single content */}
          <div
            onClick={() => {
              setState3(false);
              setCount(count - 1);
            }}
            className={`flex ${
              state3 && "vlgb"
            } relative cursor-pointer px-3 py-4 rounded-[8px] items-center justify-start `}
          >
            {/* Img */}
            <div className="mr-3 w-[60px] ">
              <img src={jacob} className="h-[40px] w-[40px] " alt="" />
            </div>
            {/* Msg */}
            <div>
              <p className="text-[15px] relative ">
                <span className="font-[800] hover:text-[#0a317b]">
                  Jacob Thompson{" "}
                </span>
                has joined your group{" "}
                <span className="font-[800] hover:text-[#0a317b] bc ">
                  Chess Club
                </span>
                {state3 && (
                  <span className="h-[6px] sm:-right-4 right-2 top-4 w-[6px] rounded-[50%] red absolute  "></span>
                )}
              </p>
              <p className="text-[13px] opacity-[0.7] ">1 day ago</p>
            </div>
            {/* Status */}
          </div>

          {/* Single content */}
          <div className="flex flex-col relative h-[220px] sm:h-[180px] ">
            <div className="flex white relative px-3 py-4 rounded-[8px] items-center justify-start ">
              {/* Img */}
              <div className="mr-3">
                <img src={rizky} className="h-[40px] w-[40px] " alt="" />
              </div>
              {/* Msg */}
              <div>
                <p className="text-[15px] relative ">
                  <span className="font-[800] cursor-pointer hover:text-[#0a317b]">
                    Rizky Hasanuddin{" "}
                  </span>
                  sent you a private message
                </p>
                <p className="text-[13px] opacity-[0.7] ">5m ago</p>
              </div>
            </div>
            {/* content */}
            <article className="border-[1px] cursor-pointer transition-all hover:border-none hover:bg-[#e5effa] w-[85%] opacity-[0.8] font-[500] px-4 py-3 absolute bottom-0 right-0 rounded-[8px] my-3 border-gray-200 ">
              <p>
                {" "}
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </article>
          </div>

          {/* Single content */}
          <div className="flex  relative px-3 py-4 cursor-pointer rounded-[8px] items-center justify-start ">
            {/* Img */}
            <div className="mr-3">
              <img src={smith} className="h-[40px] w-[40px] " alt="" />
            </div>
            {/* Msg */}
            <div>
              <p className="text-[15px] relative ">
                <span className="font-[800] sm:w-full  hover:text-[#0a317b]">
                  Kimberly Smith{" "}
                </span>
                commented on your picture
              </p>
              <p className="text-[13px] opacity-[0.7] ">1 week ago</p>
            </div>

            <img
              src={chess}
              className="absolute h-[40px] object-cover w-[40px] right-0 sm:top-4 top-12 "
              alt=""
            />
            {/* Status */}
          </div>

          {/* Single content */}
          <div className="flex relative px-3 py-4 cursor-pointer rounded-[8px] items-center justify-start ">
            {/* Img */}
            <div className="mr-3 w-[40px] rounded-[50%] h-[40px]">
              <img src={nathan} className="h-full w-full object-cover" alt="" />
            </div>
            {/* Msg */}
            <div>
              <p className="text-[15px] relative ">
                <span className="font-[800] hover:text-[#0a317b]">
                  Nathan Peterson{" "}
                </span>
                reacted to your recent post{" "}
                <span className="font-[800] hover:text-[#0a317b] opacity-[0.7] ">
                  {" "}
                  5 end-game strategies to increase your win rate
                </span>
              </p>
              <p className="text-[13px] opacity-[0.7] ">2 weeks ago</p>
            </div>
          </div>

          {/* Single content */}
          <div className="flex  relative px-3 py-4 cursor-pointer rounded-[8px] items-center justify-start ">
            {/* Img */}
            <div className="mr-3">
              <img src={anna} className="h-[40px] w-[40px] " alt="" />
            </div>
            {/* Msg */}
            <div>
              <p className="text-[15px] relative ">
                <span className="font-[800] hover:text-[#0a317b]">
                  Anna Kim{" "}
                </span>
                left the group Chess Club
              </p>
              <p className="text-[13px] opacity-[0.7] ">2 weeks ago</p>
            </div>

            {/* Status */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home
