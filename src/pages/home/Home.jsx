import HomePage from "./Home.styled";

const Home = () => {
  return (
    <HomePage>
      <header className="header">
        <h1>Unlock your potential with the best language tutors</h1>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button>Get started</button>
      </header>
      <section className="header-img">
        <img src="images/block.jpg" alt="main-image" />
      </section>
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
