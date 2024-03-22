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
              <span>32,000 +</span>Experienced tutors
            </p>
          </div>
          <div className="adv-elem">
            <p>
              <span>300,000 +</span>5-star tutor reviews
            </p>
          </div>
          <div className="adv-elem">
            <p>
              <span>120 +</span>Subjects taught
            </p>
          </div>
          <div className="adv-elem">
            <p>
              <span>200 +</span>Tutor nationalities
            </p>
          </div>
        </section>
      </section>
    </HomePage>
  );
};

export default Home;
