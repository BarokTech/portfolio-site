function Services() {
  return (
    <>
      <div id="service" className="menu min-h-screen min-w-full">
        <div className="menu-title  capitalize text-center mt-24">
          <span className="text-2xl md:text-3xl text-sky-600  ">Services</span>
          <h3 className="text-xl md:text-4xl text-slate-800 mx-auto w-3/6">
            What I do for My clients
          </h3>
        </div>
        <div className="flex flex-wrap mx-auto w-10/12 ">
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img
              className="w-14 h-14 my-4 mx-auto"
              src="frontend.7df866bc.svg"
            />
            <div className="card-body">
              <h2 className="card-title">Front-End Development</h2>
              <p>
                I bring your vision to life by crafting beautiful and
                user-friendly interfaces. Using modern technologies and best
                practices, I create engaging web experiences that captivate your
                audience and leave a lasting impression.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img className="w-14 h-14 my-4 mx-auto" src="api.69be2e6c.svg" />
            <div className="card-body">
              <h2 className="card-title">API Integration</h2>
              <p>
                I have experience integrating third-party APIs seamlessly into
                websites and web applications. Whether it's integrating payment
                gateways, social media platforms, or other services, I ensure
                smooth communication between different systems to enhance
                functionality and deliver a seamless user experience.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img
              className="w-14 h-14 my-4 mx-auto"
              src="hosting.f6a1d366.svg"
            />
            <div className="card-body">
              <h2 className="card-title">Hosting & Deployment</h2>
              <p>
                I can help you with the entire process of hosting and deploying
                your website or application. From configuring servers and
                managing domains to ensuring optimal performance and security, I
                take care of all the technical aspects so you can focus on your
                business.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img
              className="w-14 h-14 my-4 mx-auto"
              src="maintainance.06572001.svg"
            />
            <div className="card-body">
              <h2 className="card-title">Web Maintenance</h2>
              <p>
                As a full-stack developer, I understand the importance of
                keeping your website up to date and running smoothly. I offer
                ongoing maintenance services to ensure your website stays
                secure, performs well, and remains compatible with the latest
                technologies and browser updates.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img
              className="w-14 h-14 my-4 mx-auto"
              src="consultancy.09ed5aca.svg"
            />
            <div className="card-body">
              <h2 className="card-title">Consultancy</h2>
              <p>
                Alongside development services, I also provide consultancy to
                help you make informed decisions about your web projects.
                Whether you need guidance on technology choices, project
                planning, or technical strategies, I offer personalized advice
                tailored to your specific needs.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
