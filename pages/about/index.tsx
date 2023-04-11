import React from "react";

const About = () => {
  return (
    <div className="about-container ">
      <div className="about-header-grid">
        <a href="home">
          <img className="about-ico" src="/images/aboutico.png" />
        </a>

        <div className="about-headers">
          <a className="about-header" href="members">
            MEMBERS
          </a>
          <a className="about-header" href="programs">
            PROGRAMS
          </a>
          <a className="about-header" href="training">
            FREE TRAINING
          </a>
          <a className="about-header" href="favorite">
            MY FAVORITE THINGS
          </a>
          <a className="about-header" href="shop">
            SHOP
          </a>
          <a className="about-header" href="about">
            ABOUT
          </a>
        </div>
      </div>
      <div className="about-content-grid">
        <img className="about-content-img" src="/images/about.png" />
        <div className="about-meet-mary-kate">
          <h1>Meet Mary Kate</h1>
          <div className="about-content-text">
            {" I'm"} Mary Kate and{" I'm"} a mindset coach, manifesting expert,
            <br />
            and founder of MKmagicmindset.
          </div>
          <div className="about-content-text">
            <br /> I approach the manifesting and the Law of Attraction
            <br />
            differently. I{"don't "} believe that the Law of Attraction is a one
            <br />
            size fits all approach, and I share tools that are customized <br />
            to you as an individual. I specialize in the fundamental tools
            <br /> and principles that truly get streamlined results.
          </div>
          <div className="about-content-text">
            <br /> You might know me from Youtube (click HERE), but however
            <br /> you found me, I am so happy you are here!
          </div>
          <div className="about-content-text">
            <br /> I pride myself in taking the confusion out of manifesting
            <br />
            focusing on subconscious programming, energy work,
            <br /> quantum physics, and mindset work <br />
            principles that shift
            <br /> you into attracting from a place of ease.
          </div>
          <br /> Because manifesting is not meant to be difficult!
        </div>
      </div>

      <div className="about-content-grid">
        <div className="about-meet-mary-kate">
          <div className="about-content-text">
            From a very young age, I had this DEEP DOWN feeling that if <br />I
            wanted something strongly enough, that I would find a way <br />
            to get it.
          </div>
          <div className="about-content-text">
            My stubborn nature and creative imagination led me to <br />
            accomplish and receive anything and everything I set my
            <br /> mind to. If I wanted something I put my energy into it, and
            <br />
            it happened simple as that.
          </div>
          <div className="about-content-text">
            It was like I had a magic power, but I {"didn't"} know what it was
            <br />
            called or how it worked.
          </div>
          <div className="about-content-text">
            Fast forward to when someone introduced me to the Law of
            <br /> Attraction with the book{"'The Secret'"}, and it all clicked!
          </div>
          <div className="about-content-text">
            I learned that EVERYONE has these abilities and{"it's"} a skill
            <br /> that requires constant attention and awareness.
          </div>
          <div className="about-content-text">
            In my decade of studying and practicing the Law of
            <br /> Attraction,
            {"I've"}
            uncovered proven techniques, formulas,
            <br /> manifesting methods, and mindset work that delivers
            <br /> powerful results.{"It's"} not luck,
            {"it's"}
            physics.
          </div>
          <div className="about-content-text">
            I have used the Law of Attraction to consciously create and
            <br /> decide the life I want t live, and I am here to help you do
            the
            <br /> same.
          </div>
          <div className="about-content-text">
            {"It's"} available to everyone, you just need to learn to tap into
            <br />
            it.
          </div>
          <div className="about-content-text">
            My mission is to help and empower as many people as <br />
            possible with my decade of research, practice,
            <br /> and coaching.
          </div>
        </div>
        <img className="grid-sec-img" src="/images/about2.png" />
      </div>
      <div className="about-footer-grid">
        <div>© 2023 Mk Magic Mindset</div>
        <div className="about-footer">
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>
      </div>
    </div>
  );
};

export default About;
