import React, { useState } from "react";
import logoHabot from "./assets/logoHabot.png";
import firstHabot from "./assets/firstHabot.png";
import secHabot from "./assets/secHabot.png";
import thirdHabot from "./assets/thirdHabot.png";
import fourthHabot from "./assets/fourthHabot.png";
import fifthHabot from "./assets/fifthHabot.png";
import sixthHabot from "./assets/sixthHabot.png";
import youtubeLogo from "./assets/youtubeLogo.png";
import youtubeVdo from "./assets/youtubeVdo.png";
import habotInsta from "./assets/habotInstagram.png";
import habotLinkedin from "./assets/habot-linkedin.png";
import habotFb from "./assets/habot-fb.png";
import habotTwitter from "./assets/habot-twitter.png";
import footerLogo from "./assets/footer-logo-habot.png";
import heroBack from './assets/heroBack.png';

import "./HabotLanding.css";

const HabotLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="habot-landing">
      <nav className="habot-nav">
        <div className="habot-logo">
          <img src={logoHabot} alt="logo" />
        </div>
        <div className={`habot-nav-items ${menuOpen ? "open" : ""}`}>
          <h2>Find Suppliers</h2>
          <h2>Find Service Tags</h2>
          <button className="habot-nav-btn">Login/Sign Up</button>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="habit-hero-container" style={{
    backgroundImage: `url(${heroBack})`}}>
        <div className="habit-hero-background-overlay">
          <div className="habit-hero-content">
            <h1>Are You a Supplier?</h1>
            <h2>Explore Matching Opportunities.</h2>
            <div className="habit-hero-search-bar">
              <input
                type="text"
                className="habit-hero-input-box"
                placeholder="Search your required service here"
              />
              <input
                type="text"
                className="habit-hero-input-box"
                placeholder="Search your desired location here"
              />
              <button className="habit-hero-search-button">Search</button>
            </div>
            <p className="habit-hero-buyer-text">
              Are you a buyer?{"  "}
              <a href="#post-requirement">
                Click here if you are looking to post a requirement
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="habot-container">
        <div className="habot-left-section">
          <h1>
            Ready to dive into <span className="habot-highlight">HABOT?</span>
          </h1>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="habot-signup-button">Sign up Today!</button>
        </div>

        <div className="habot-right-section">
          <div className="habot-locations">
            <div className="habot-location">Abu Dhabi</div>
            <div className="habot-location">Dubai</div>
            <div className="habot-location">Sharjah & Ajman</div>
            <div className="habot-location">Fujairah</div>
            <div className="habot-location">Ras Al Khaimah</div>
            <div className="habot-location">Umm Al Quwain</div>
          </div>
        </div>
      </div>

      <div className="buyer-supplier-section">
        <div className="video-container">
          <div className="video-wrapper">
            <img src={youtubeVdo} alt="Main Video" className="main-video" />
            <img
              src={youtubeLogo}
              alt="YouTube Logo"
              className="youtube-logo"
            />
          </div>
        </div>

        <div className="text-container">
          <div className="tabs">
            <span className="tab buyer">Buyer</span>
            <span className="tab supplier">Supplier</span>
          </div>
          <ul className="features-list">
            <li>✅ Post your requirements.</li>
            <li>✅ Sit back for multiple suppliers to contact you.</li>
            <li>
              ✅ Choose among the suppliers based on the ratings and reviews.
            </li>
          </ul>
        </div>
      </div>

      <div className="habot-suppliers">
        <div className="habot-suppliers-text">
          Let Suppliers{" "}
          <span className="habot-suppliers-styled-text">Find You</span>
        </div>

        <button className="habot-suppliers-btn">Get Verified</button>
      </div>

      <div className="how-it-works">
        <h2>How it works?</h2>
        <div className="description-container">
          <p className="description">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>

        <div className="grid-container">
          <div className="card">
            <img src={firstHabot} alt="Select Your Role" />
            <h3>Select Your Role and Sign Up</h3>
          </div>
          <div className="card">
            <img src={secHabot} alt="Post Requirements" />
            <h3>Buyers Post Your Requirements</h3>
          </div>
          <div className="card">
            <img src={thirdHabot} alt="Review Suppliers" />
            <h3>Review, Select, and Contact the Best Suppliers</h3>
          </div>
          <div className="card">
            <img src={fourthHabot} alt="Complete Profile" />
            <h3>Suppliers Complete Your Profile and Get Notified</h3>
          </div>
          <div className="card">
            <img src={fifthHabot} alt="Contact Buyers" />
            <h3>Contact Buyers and Share Your Quote</h3>
          </div>
          <div className="card">
            <img src={sixthHabot} alt="Feedback" />
            <h3>Both Parties Can Connect and Leave Feedback</h3>
          </div>
        </div>
      </div>

      <footer className="habot-footer">
        <div className="habot-footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="logo" />
              <div className="footer-text">&copy; R Singhania</div>
            </div>

            <div className="footer-content-container">
              {" "}
              <div className="footer-content">
                <p className="active">Company</p>
                <p>About</p>
                <p>FAQ</p>
              </div>
              <div className="footer-content">
                <p className="active">Terms</p>
                <p>Data privacy</p>
                <p>Terms</p>
                <p>Accessibility</p>
              </div>
              <div className="footer-content">
                <p className="active">Related</p>
                <p>Find Buyer</p>
                <p>Feedback</p>
              </div>
            </div>
          </div>

          <div className="habot-right">
            <img src={habotLinkedin} alt="logo" />
            <img src={habotTwitter} alt="logo" />
            <img src={habotFb} alt="logo" />
            <img src={habotInsta} alt="logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HabotLanding;
