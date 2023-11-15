function About() {
  const handleClick = async () => {
    try {
      const response = await fetch("resume.pdf");
      const data = await response.blob();

      // Create a Blob URL
      const url = window.URL.createObjectURL(data);

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";

      // Trigger a click on the link to start the download
      link.click();

      // Clean up the URL object
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };
  return (
    <>
      <div id="about" className="menu min-h-screen min-w-full ">
        <div className="menu-title  capitalize text-center mt-24">
          <span className="text-xl md:text-3xl text-sky-600 ">About Me</span>
          <h3 className="text-md md:text-4xl text-slate-800  mx-auto w-3/6">
            A Passionate Developer Who Loves to Code
          </h3>
        </div>
        <div className="menu-vertical">
          <p className="mx-auto text-align w-3/5">
            I'm Abdennasir Ahmed, a React.js enthusiast dedicated to crafting
            seamless and engaging web experiences. Proficient in JavaScript, I
            specialize in creating responsive and visually appealing interfaces.
            As a perpetual learner and collaborative developer, I'm passionate
            about contributing to impactful projects. Let's bring ideas to life
            through elegant code and innovative design.
          </p>
          <table className="table border mt-20 mx-auto border-collapse  w-3/5">
            <tbody>
              <tr className="flex-reverse-row">
                <td>
                  <div className="md:text-2xl">Name</div>
                  <span className="badge badge-ghost badge-sm">
                    Abdennasir Ahmed
                  </span>
                </td>
                <td>
                  <div className="md:text-2xl">Address</div>
                  <span className="badge badge-ghost badge-sm">
                    Addis Ababa, Ethiopa
                  </span>
                </td>
              </tr>
              <tr className="flex-reverse-row">
                <td>
                  <div className="md:text-2xl">Email</div>
                  <span className="badge badge-ghost badge-sm">
                    abdennasirt.ahmed@gmail.com
                  </span>
                </td>
                <td>
                  <div className="md:text-2xl">Degree</div>
                  <span className="badge badge-ghost badge-sm">
                    Electrical and Computer Engineering
                  </span>
                </td>
              </tr>
              <tr className="flex-reverse-row">
                <td>
                  <div className="md:text-2xl">Phone</div>
                  <span className="badge badge-ghost badge-sm">
                    +251929461299
                  </span>
                </td>
                <td>
                  <div className="md:text-2xl">Freelance</div>
                  <span className="badge badge-ghost badge-sm">
                    Available on Upwork
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={handleClick}
            className="btn mx-auto mt-10 w-36 btn-success"
          >
            Downlaod CV
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
