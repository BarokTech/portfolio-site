function Hero() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="  ">
            <img
              className=" md:ml-10 w-72 md:w-auto rounded-full shadow-2xl"
              src="perPic.jpg"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Abdennasir Ahmed
            </h1>
            <p className="py-3 text-xl">Frontend Engineer Based in Addis</p>
            <a href="#contact" className="btn btn-success">
              Get Connected
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
