import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
function Resume() {
  //bg-indigo-950
  return (
    <div className="min-h-screen min-w-full  pt-20">
      <div className="capitalize text-center">
        <span className="text-2xl md:text-3xl text-sky-600  ">Resume</span>
        <h3 className="text-xl md:text-4xl text-slate-800  mx-auto w-3/6">
          I have the qualification
        </h3>
      </div>
      <div className="w-4/5 my-16 mx-auto">
        <div className="flex flex-row w-3/5 mx-auto">
          <div>
            <FontAwesomeIcon
              className="w-12 h-12 mx-5"
              icon={faGraduationCap}
            />
          </div>
          <div>
            <div className="text-bold text-3xl  ">Education</div>
            <div>Bsc. in Electrical and Computer Engineering</div>
            <h4>Addis Ababa University</h4>
          </div>
        </div>
        <div className="mt-10 flex flex-row w-3/5 mx-auto">
          <div>
            <FontAwesomeIcon className="w-10 h-10 mx-5" icon={faBriefcase} />
          </div>
          <div>
            <div className="text-bold text-3xl">Experience</div>
            <ul>
              <li className=" mx-5 my-3">
                <div className="text-xl text-slate-900">Software Engineer</div>
                <h4>Addis Media Network</h4>
              </li>
              <li className=" mx-5 mb-3">
                <div className="text-xl text-slate-900">Test Manager</div>
                <h4>Mekdem School</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
