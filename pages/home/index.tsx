import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="fs-header">
        I MANIFESTED $10K FROM USING THIS MANTRA {"->"} WATCH NOW!
      </div>
      <img className="top-img" src="/images/headerimg.jpg" />
      <div className="headers">
        <a className="header" href="members">
          MEMBERS
        </a>
        <a className="header" href="programs">
          PROGRAMS
        </a>
        <a className="header" href="training">
          FREE TRAINING
        </a>
        <a className="header" href="favorite">
          MY FAVORITE THINGS
        </a>
        <a className="header" href="shop">
          SHOP
        </a>
        <a className="header" href="about">
          ABOUT
        </a>
      </div>
      <div className="home-page-grid">
        <div className="grid">
          <h2>{"I'm"} Mary Kate.</h2>
          <div>
            I take the confusion out of manifesting,
            <br />
            giving you the tools you need to get the
            <br />
            results you want.
            <br /> Ready to get started?
          </div>
          <button className="grid-button">JOIN MY VIP EMAIL LIST</button>
        </div>
        <img className="grid-image" src="/images/grid.jpg" />
      </div>

      <div className="content-first-grid">
        <div className="content-first-text">
          <h1>As Seen on YouTube</h1>
          <div>
            FREE trainings every single week! Learn Mary {"Kate's"} best
            <br />
            practices on mindset training, meditation, Law of <br />
            Attraction, and more!
            <br />
            <button className="content-first-button">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.youtube.com/marykate88"
              >
                SUBSCROBE FOR FREE WEEKLY TRANINGS
              </a>
            </button>
          </div>
        </div>
        <img className="content-first-img" src="images/seenonyoutyube.png" />
      </div>
      <hr color="#e0a4a6" />
      <div className="content-first-grid">
        <img className="sec-content-img" src="images/secondgrid.jpg" />
        <div className="content-first-text">
          <h1>As Seen on YouTube</h1>
          <div>
            FREE trainings every single week! Learn Mary {"Kate's"} best
            <br />
            practices on mindset training, meditation, Law of <br />
            Attraction, and more!
            <br />
            <button className="content-first-button">
              SUBSCROBE FOR FREE WEEKLY TRANINGS
            </button>
          </div>
        </div>
      </div>
      <hr color="#e0a4a6" />
      <div className="card-container">
        <div className="card">
          <img src="/images/card1.png" />
          <h2>Digital Courses</h2>
          <p>
            Want a program you can follow at your own
            <br /> pace, that {"you'll"} have access to for life? Get <br />
            ready to manifest abundance and learn step by step <br />
            methods to master your
            <br /> life and your mindset.
          </p>
          <button className="image-button">JOIN NOW</button>
        </div>
        <div className="card">
          <img src="/images/card2.png" />
          <h2>Private Coaching</h2>
          <p>
            Work with me one on one with my private coaching. When you’re ready
            to really take charge of your life, and get real about your
            manifesting goals! (Mary {"Kate's"} coaching is currently booked
            through the end of 2021, check back later)
          </p>
          <button className="image-button">WORK WITH ME</button>
        </div>
        <div className="card">
          <img src="/images/card3.png" />
          <h2>Free Training</h2>
          <p>
            Access all of Mary Kate’s free Law of Attraction videos, mindset
            training, meditations, and more! Be sure to sign up for the VIP
            email list to get first access.
          </p>
          <button className="image-button">ACCESS HERE</button>
        </div>
      </div>
      <div className="meet-mary-kate">
        <img className="meet-class" src="/images/meetmary.png" />
        <div className="meet-mary-text">
          <h1>
            {"I'm"} Mary Kate, founder of <br />
            MK Magic Mindset.
          </h1>
          <div>
            {"I'm"} a mindset coach and manifesting expert helping you
            <br />
            live the life of your dreams on YOUR terms using mindset <br />
            work, subconscious programming, and the Law of
            <br /> Attraction. Click to learn more!
          </div>
          <button className="image-button">MEET MARY KATE</button>
        </div>
      </div>
      <div className="mındset-container">
        <img className="mındset-img" src="/images/mındset.png" alt="...." />
        <div>
          <h1 className="mındset-input-header">
            Ready to Start Manifesting Money?
          </h1>
          <div className="mındset-input-container">
            Download my FREE Money Mindset Workbook and uplevel your money
            mindset!
          </div>
          <input className="input" placeholder="Name"></input>
          <input className="input" placeholder="Email"></input>
          <button className="mındset-button">DOWNLOAD NOW</button>
        </div>
      </div>
      <div className="lastest-on-container">
        <h2 className="lastest-header">Lastest on Instagram</h2>
        <h1 className="lastest-header">@MKMagicMindset</h1>
        <div className="lastest-images">
          <img className="mındset-img" src="/images/bottom.jpg" alt="...." />
          <img className="mındset-img" src="/images/bottom1.jpg" alt="...." />
          <img className="mındset-img" src="/images/bottom2.jpg" alt="...." />
          <img className="mındset-img" src="/images/bottom3.jpg" alt="...." />
          <img className="mındset-img" src="/images/bottom4.jpg" alt="...." />
          <img className="mındset-img" src="/images/bottom5.jpg" alt="...." />
        </div>
      </div>
      <hr color="#e0a4a6" />
      <div className="bottom-feet">
        <div className="bottom-left">© 2023 MK Magic Mindset</div>
        <div className="bottom-feet-grid">
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
