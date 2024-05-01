import React from 'react'
import './trackerStyle.css'
function Home() {
  return (
    <div className="vdb h-screen sm:px-8 flex items-center justify-center w-screen ">
      <div className="sm:w-[90%] w-full flex gap-8 h-[400px]   ">
        {/* First Panel */}
        <section className=" db rounded-xl h-full w-[30%]   ">
          <div className=" b rounded-xl h-[70%] w-full   "></div>
        </section>
        {/* Minor Panels */}
        <section className=" b rounded-xl h-full w-[60%]   ">
          
        </section>
      </div>
    </div>
  );
}

export default Home
