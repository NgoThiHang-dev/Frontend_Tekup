import React, { useEffect, useState } from "react";
import "./Home.scss";
import Project from "./component/Project/Project";
import { AiOutlineUp } from "react-icons/ai";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
  const [isShowScollToTop, setIsShowScollToTop] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 50) {
      setIsShowScollToTop(true);
    }
    if (position < 50) {
      setIsShowScollToTop(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper-home">
      <div className="container">
        <section className="project-list">
          <ul
            className="nav nav-pills mb-3 project-list_tab wow fadeInDown" data-wow-duration="1s"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item project-list_tab-item" role="presentation">
              <button
                className="nav-link active btn-project-tab"
                id="all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all-tab"
                type="button"
                role="tab"
                aria-controls="all-tab"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item project-list_tab-item" role="presentation">
              <button
                className="nav-link btn-project-tab"
                id="manbower-supply-tab"
                data-bs-toggle="pill"
                data-bs-target="#manbower-supply"
                type="button"
                role="tab"
                aria-controls="manbower-supply"
                aria-selected="false"
              >
                Manbower Supply
              </button>
            </li>
            <li className="nav-item project-list_tab-item" role="presentation">
              <button
                className="nav-link btn-project-tab"
                id="mobile-app-Website-tab"
                data-bs-toggle="pill"
                data-bs-target="#mobile-app-website"
                type="button"
                role="tab"
                aria-controls="mobile-app-website"
                aria-selected="false"
              >
                Mobile App / Website
              </button>
            </li>
            <li className="nav-item project-list_tab-item" role="presentation">
              <button
                className="nav-link btn-project-tab"
                id="ui-ux-design-tab"
                data-bs-toggle="pill"
                data-bs-target="#ui-ux-design"
                type="button"
                role="tab"
                aria-controls="ui-ux-design"
                aria-selected="false"
              >
                UI/UX Design
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all-tab"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <Project />
            </div>
            <div
              className="tab-pane fade"
              id="manbower-supply"
              role="tabpanel"
              aria-labelledby="manbower-supply"
            >
              <p className="mb-3">Manbower Supply</p>
              <Project />
            </div>
            <div
              className="tab-pane fade"
              id="mobile-app-website"
              role="tabpanel"
              aria-labelledby="mobile-app-website"
            >
              <p className="mb-3">Mobile App / Website</p>
              <Project />
            </div>
            <div
              className="tab-pane fade"
              id="ui-ux-design"
              role="tabpanel"
              aria-labelledby="ui-ux-design"
            >
              <p className="mb-3">UI/UX Design</p>
              <Project />
            </div>
          </div>
        </section>
        <div>
          <button className="btn rounded-circle back-to-top"
            onClick={handleBackToTop}
            style={isShowScollToTop ? { display: "block" } : { display: "none" }}>
            <AiOutlineUp className="icons-btn-top" />
          </button>
        </div>
        <div>
          {/* <MessengerCustomerChat
            pageId="106438885770017"
            appId="248357387639174"
          // htmlRef="<REF_STRING>"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
