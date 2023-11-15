function Skills() {
  // bg-indigo-950
  return (
    <>
      <div className="min-h-screen min-w-full ">
        <div className="capitalize text-center ">
          <span className="text-2xl md:text-3xl text-sky-600  ">Skills</span>
          <h3 className="text-xl md:text-4xl  text-slate-800 mx-auto w-3/6">
            I Work Hard to Improve My Skills Regularly
          </h3>
        </div>
        <div className="flex flex-wrap m-10 w-4/5 mx-auto">
          <div className=" mx-5 mb-5 w-10/12 md:w-5/12">
            <div className="flex ">
              <h3 className="mr-auto">HTML</h3>
              <span className="ml-auto">95%</span>
            </div>
            <progress
              className="progress bg-slate-300 progress-success w-12/12"
              value={95}
              max="100"
            ></progress>
          </div>
          <div className=" mx-5 mb-5 w-10/12  md:w-5/12">
            <div className="flex">
              <h3 className="mr-auto">CSS</h3>{" "}
              <span className="ml-auto">85%</span>
            </div>
            <progress
              className="progress bg-slate-300 progress-success w-12/12"
              value={85}
              max="100"
            ></progress>
          </div>
          <div className=" mx-5 mb-5 w-10/12  md:w-5/12">
            <div className="flex">
              <h3 className="mr-auto">Javascript</h3>
              <span className="ml-auto">90%</span>
            </div>
            <progress
              className="progress bg-slate-300 progress-success w-12/12"
              value={90}
              max="100"
            ></progress>
          </div>
          <div className=" mx-5 mb-5 w-10/12 md:w-5/12">
            <div className="flex">
              <h3 className="mr-auto">React</h3>{" "}
              <span className="ml-auto">85%</span>
            </div>
            <progress
              className="progress bg-slate-300 progress-success w-12/12"
              value={85}
              max="100"
            ></progress>
          </div>
          <div className=" mx-5 mb-5 w-10/12 md:w-5/12">
            <div className="flex">
              <h3 className="mr-auto">Python</h3>{" "}
              <span className="ml-auto">75%</span>
            </div>
            <progress
              className="progress bg-slate-300 progress-success w-12/12"
              value={75}
              max="100"
            ></progress>
          </div>
          <div className=" mx-5 mb-5 w-10/12 md:w-5/12">
            <div className="flex">
              <h3 className="mr-auto">Node</h3>{" "}
              <span className="ml-auto">75%</span>
            </div>
            <progress
              className="progress bg-slate-300 progress-success w-12/12"
              value={75}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
