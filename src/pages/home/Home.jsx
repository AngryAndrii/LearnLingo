import HomePage from "./Home.styled";

const Home = () => {
  return (
    <HomePage>
      <div className="hero-wrapper">
        <section className="header">
          <h1>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className="start-button" type="button">
            Get started
          </button>
        </section>
        <section className="header-img">
          <img src="images/block.jpg" alt="main-image" />
        </section>
      </div>

      <section className="advantages">
        <section className="adv-content">
          <div className="adv-elem">
            <p>
              <span className="num">32,000 +</span>{" "}
              <span className="adv-descr">Experienced tutors</span>
            </p>
          </div>
          <div className="adv-elem">
            <p>
              <span className="num">300,000 +</span>
              <span className="adv-descr">5-star tutor reviews</span>
            </p>
          </div>
          <div className="adv-elem">
            <p>
              <span className="num">120 +</span>
              <span className="adv-descr">Subjects taught</span>
            </p>
          </div>
          <div className="adv-elem">
            <p>
              <span className="num">200 +</span>
              <span className="adv-descr">Tutor nationalities</span>
            </p>
          </div>
        </section>
      </section>
    </HomePage>
  );
};

export default Home;
