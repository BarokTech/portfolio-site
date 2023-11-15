function Portfolio() {
  //bg-indigo-950
  return (
    <>
      <div id="portfolio" className="menu min-h-screen min-w-full ">
        <div className="menu-title  capitalize text-center mt-24">
          <span className="text-2xl md:text-3xl text-sky-600  ">Portfolio</span>
          <h3 className="text-xl md:text-4xl text-slate-800  mx-auto w-3/6">
            Work Samples
          </h3>
        </div>
        <div className="flex flex-wrap mx-auto w-10/12 ">
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img className="h-60 my-4 mx-auto" src="Omnifood.png" />
            <div className="card-body">
              <h2 className="card-title">OmniFood</h2>
              <p>
                Omnifood is a cutting-edge restaurant app born from an immersive
                HTML and CSS bootcamp. With a responsive design that seamlessly
                adapts to various devices, Omnifood offers an intuitive and
                visually stunning interface for exploring a diverse culinary
                menu. Immerse yourself in a visual feast, optimized for
                performance and developed with expertise gained from the
                bootcamp. Omnifood is more than an app; it's a culmination of
                skills, dedication, and a commitment to delivering a delightful
                digital dining experience.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img className="h-60 my-4 mx-auto" src="Appie.png" />
            <div className="card-body">
              <h2 className="card-title">Appie</h2>
              <p>
                Appie an innovative and responsive website developed during an
                intensive bootcamp using the latest web technologies. Crafted
                with precision using HTML and CSS, Appie showcases a seamless
                and user-friendly experience across various devices, ensuring
                accessibility and engagement for all users.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img className="h-60 my-4 mx-auto" src="MyTube.png" />
            <div className="card-body">
              <h2 className="card-title">MyTube</h2>
              <p>
                MyTube is a dynamic YouTube clone developed with React JS,
                YouTube v2 API, and Material UI. Users can search, explore
                categories, and view detailed channel information. Seamlessly
                combines intuitive design with powerful features for an
                immersive video-sharing experience.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img className="wh-60 my-4 mx-auto" src="HulluStore.png" />
            <div className="card-body">
              <h2 className="card-title">HulluStore</h2>
              <p>
                HulluStore is a stylish fashion online store developed using
                React JS, featuring seamless navigation with side categories,
                user-friendly cart functionality, and secure checkout.
                Implemented user registration and authorization for personalized
                experiences, showcasing detailed product and user information to
                enhance the shopping journey.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-72  m-5  bg-slate-700 text-primary-content">
            <img className=" h-60 my-4 mx-auto" src="CryptoAPI.png" />
            <div className="card-body">
              <h2 className="card-title">Crypto Price Tracker</h2>
              <p>
                It's a dynamic Crypto Coins Price Tracker developed using React
                JS, providing real-time data for various cryptocurrencies. The
                user-friendly interface includes a dynamic table, allowing
                seamless data exploration. The incorporated search input
                facilitates easy coin discovery, enabling users to filter and
                track crypto prices with precision.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
