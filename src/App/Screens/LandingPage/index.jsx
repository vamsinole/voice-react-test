/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import React, { useEffect } from "react";
import "./landing-page.scss";
import Logo from "./../../../assets/logo.png";

const LandingPage = () => {
  useEffect(() => {
    (function () {
      const nav = document.querySelector(".layout-navbar"),
        heroAnimation = document.getElementById("hero-animation"),
        animationImg = document.querySelectorAll(".hero-dashboard-img"),
        animationElements = document.querySelectorAll(".hero-elements-img"),
        swiperLogos = document.getElementById("swiper-clients-logos"),
        swiperReviews = document.getElementById("swiper-reviews"),
        ReviewsPreviousBtn = document.getElementById("reviews-previous-btn"),
        ReviewsNextBtn = document.getElementById("reviews-next-btn"),
        ReviewsSliderPrev = document.querySelector(".swiper-button-prev"),
        ReviewsSliderNext = document.querySelector(".swiper-button-next"),
        priceDurationToggler = document.querySelector(
          ".price-duration-toggler"
        ),
        priceMonthlyList = [].slice.call(
          document.querySelectorAll(".price-monthly")
        ),
        priceYearlyList = [].slice.call(
          document.querySelectorAll(".price-yearly")
        );

      // Hero
      const mediaQueryXL = "1200";
      const width = window.clientWidth;
      if (width >= mediaQueryXL && heroAnimation) {
        heroAnimation.addEventListener("mousemove", function parallax(e) {
          animationElements.forEach((layer) => {
            layer.style.transform = "translateZ(1rem)";
          });
          animationImg.forEach((layer) => {
            let x = (window.innerWidth - e.pageX * 2) / 100;
            let y = (window.innerHeight - e.pageY * 2) / 100;
            layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
          });
        });
        nav.addEventListener("mousemove", function parallax(e) {
          animationElements.forEach((layer) => {
            layer.style.transform = "translateZ(1rem)";
          });
          animationImg.forEach((layer) => {
            let x = (window.innerWidth - e.pageX * 2) / 100;
            let y = (window.innerHeight - e.pageY * 2) / 100;
            layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
          });
        });

        heroAnimation.addEventListener("mouseout", function () {
          animationElements.forEach((layer) => {
            layer.style.transform = "translateZ(0)";
          });
          animationImg.forEach((layer) => {
            layer.style.transform =
              "perspective(1200px) scale(1) rotateX(0) rotateY(0)";
          });
        });
      }

      let Swiper = window.Swiper;

      // swiper carousel
      // Customers reviews
      // -----------------------------------
      if (swiperReviews) {
        new Swiper(swiperReviews, {
          slidesPerView: 1,
          spaceBetween: 5,
          grabCursor: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
          loopAdditionalSlides: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 26,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
      }

      // Reviews slider next and previous
      // -----------------------------------
      // Add click event listener to next button
      ReviewsNextBtn.addEventListener("click", function () {
        ReviewsSliderNext.click();
      });
      ReviewsPreviousBtn.addEventListener("click", function () {
        ReviewsSliderPrev.click();
      });

      // Review client logo
      // -----------------------------------
      if (swiperLogos) {
        new Swiper(swiperLogos, {
          slidesPerView: 2,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            992: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          },
        });
      }

      // Pricing Plans
      // -----------------------------------
      document.addEventListener("DOMContentLoaded", function (event) {
        function togglePrice() {
          if (priceDurationToggler.checked) {
            // If checked
            priceYearlyList.map(function (yearEl) {
              yearEl.classList.remove("d-none");
              return yearEl;
            });
            priceMonthlyList.map(function (monthEl) {
              monthEl.classList.add("d-none");
              return monthEl;
            });
          } else {
            // If not checked
            priceYearlyList.map(function (yearEl) {
              yearEl.classList.add("d-none");
              return yearEl;
            });
            priceMonthlyList.map(function (monthEl) {
              monthEl.classList.remove("d-none");
              return monthEl;
            });
          }
        }
        // togglePrice Event Listener
        togglePrice();

        priceDurationToggler.onchange = function () {
          togglePrice();
        };
      });

      const menu = document.getElementById("navbarSupportedContent");
      let navItemLink = document.querySelectorAll(".navbar-nav .nav-link");

      let Waves = window.Waves,
        bootstrap = window.bootstrap;

      if (typeof Waves !== "undefined") {
        Waves.init();
        Waves.attach(
          ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
          ["waves-light"]
        );
        Waves.attach("[class*='btn-outline-']");
        Waves.attach("[class*='btn-label-']");
        Waves.attach(".pagination .page-item .page-link");
      }

      // Init BS Tooltip
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });

      // Navbar
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 10) {
          nav.classList.add("navbar-active");
        } else {
          nav.classList.remove("navbar-active");
        }
      });
      window.addEventListener("load", (e) => {
        if (window.scrollY > 10) {
          nav.classList.add("navbar-active");
        } else {
          nav.classList.remove("navbar-active");
        }
      });

      // Function to close the mobile menu
      function closeMenu() {
        menu.classList.remove("show");
      }

      document.addEventListener("click", function (event) {
        // Check if the clicked element is inside mobile menu
        if (!menu.contains(event.target)) {
          closeMenu();
        }
      });
      navItemLink.forEach((link) => {
        link.addEventListener("click", (event) => {
          if (!link.classList.contains("dropdown-toggle")) {
            closeMenu();
          } else {
            event.preventDefault();
          }
        });
      });

      // Run switchImage function based on the stored style
      // switchImage(storedStyle);

      // // Update light/dark image based on current style
      // function switchImage(style) {
      //   if (style === "system") {
      //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //       style = "dark";
      //     } else {
      //       style = "light";
      //     }
      //   }
      //   const switchImagesList = [].slice.call(
      //     document.querySelectorAll("[data-app-" + style + "-img]")
      //   );
      //   switchImagesList.map(function (imageEl) {
      //     const setImage = imageEl.getAttribute("data-app-" + style + "-img");
      //     imageEl.src = assetsPath + "img/" + setImage; // Using window.assetsPath to get the exact relative path
      //   });
      // }
    })();
  }, []);

  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12">
            <nav className="layout-navbar shadow-none py-0">
              <div className="container">
                <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
                  <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
                    <button
                      className="navbar-toggler border-0 px-0 me-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="ti ti-menu-2 ti-sm align-middle"></i>
                    </button>
                    <a href="/landing" className="app-brand-link">
                      <span className="app-brand-logo demo">
                        <img src={Logo} height={32} width={32} alt="" />
                      </span>
                      <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">
                        ContactSwing
                      </span>
                    </a>
                  </div>

                  <div
                    className="collapse navbar-collapse landing-nav-menu"
                    id="navbarSupportedContent"
                  >
                    <button
                      className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="ti ti-x ti-sm"></i>
                    </button>
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          aria-current="page"
                          href="#landingHero"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          href="#landingFeatures"
                        >
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          href="#landingContact"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="landing-menu-overlay d-lg-none"></div>

                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        // dangerouslySetInnerHTML="javascript:void(0);"
                      >
                        <i className="ti ti-sm"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="light"
                          >
                            <span className="align-middle">
                              <i className="ti ti-sun me-2"></i>Light
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="dark"
                          >
                            <span className="align-middle">
                              <i className="ti ti-moon me-2"></i>Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="system"
                          >
                            <span className="align-middle">
                              <i className="ti ti-device-desktop me-2"></i>
                              System
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="/login"
                        className="btn btn-primary mx-1"
                        target="_blank"
                      >
                        <span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                        <span className="d-none d-md-block">Login</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/register"
                        className="btn btn-primary mx-1"
                        target="_blank"
                      >
                        <span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                        <span className="d-none d-md-block">Register</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div data-bs-spy="scroll" className="scrollspy-example">
              <section id="hero-animation">
                <div
                  id="landingHero"
                  className="section-py landing-hero position-relative"
                >
                  <img
                    src="../../assets/img/front-pages/backgrounds/hero-bg.png"
                    alt="hero background"
                    className="position-absolute top-0 start-50 translate-middle-x object-fit-contain w-100 h-100"
                    data-speed="1"
                  />
                  <div className="col-12">
                    <div className="hero-text-box text-center">
                      <h1 className="text-primary hero-title display-6 fw-bold">
                        Transform Your Customer Interactions with Contact
                        Swing's Advanced Communication Solutions!
                      </h1>
                      <h2 className="hero-sub-title h6 mb-4 pb-1">
                        Unleash the power of integrated Voice, Email, SMS, and
                        Chat bots designed to elevate
                        <br className="d-none d-lg-block" />
                        your business communication, improve response times, and
                        boost customer satisfaction.
                      </h2>
                      <div className="landing-hero-btn d-inline-block position-relative">
                        {/* <span className="hero-btn-item position-absolute d-none d-md-flex text-heading">
                          Join community
                          <img
                            src="../../assets/img/front-pages/icons/Join-community-arrow.png"
                            alt="Join community arrow"
                            className="scaleX-n1-rtl"
                          />
                        </span> */}
                        <a
                          href="#landingPricing"
                          className="btn btn-primary btn-lg"
                        >
                          Get early access
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div
                          id="heroDashboardAnimation"
                          className="hero-animation-img"
                        >
                          <a href="#" target="_blank">
                            <div
                              id="heroAnimationImg"
                              className="position-relative hero-dashboard-img"
                            >
                              <img
                                src="../../assets/img/front-pages/landing-page/hero-dashboard-light.png"
                                alt="hero dashboard"
                                className="animation-img"
                                data-app-light-img="front-pages/landing-page/hero-dashboard-light.png"
                                data-app-dark-img="front-pages/landing-page/hero-dashboard-dark.png"
                              />
                              <img
                                src="../../assets/img/front-pages/landing-page/hero-elements-light.png"
                                alt="hero elements"
                                className="position-absolute hero-elements-img animation-img top-0 start-0"
                                data-app-light-img="front-pages/landing-page/hero-elements-light.png"
                                data-app-dark-img="front-pages/landing-page/hero-elements-dark.png"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-hero-blank"></div>
              </section>

              <section
                id="landingFeatures"
                className="section-py landing-features"
              >
                <div className="container">
                  <div className="text-center mb-3 pb-1">
                    <span className="badge bg-label-primary">Features</span>
                  </div>
                  <h3 className="text-center mb-1">
                    <span className="position-relative fw-bold z-1">
                      Everything you need
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>{" "}
                    to start your next project
                  </h3>
                  <p className="text-center mb-3 mb-md-5 pb-3 ">
                    Not just a set of tools, the package includes
                    ready-to-deploy conceptual application.
                  </p>
                  <div className="features-icon-wrapper row gx-0 gy-4 g-sm-5">
                    <div className="col-lg-3 col-sm-6 text-center features-icon-box bg-white rounded-2 ">
                      <div className="text-center mb-3 ">
                        <img
                          src="../../assets/img/front-pages/icons/laptop.png"
                          alt="laptop charging"
                        />
                      </div>
                      <h5 className="mb-3">Customizable AI Bots</h5>
                      <p className="features-icon-description">
                        Create bots that reflect your brand's unique voice and
                        tone with our extensive customization options. Adjust
                        scripts, set operational hours, and tailor interactions
                        to fit the specific needs of your audience.
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center features-icon-box  bg-white rounded-2">
                      <div className="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/rocket.png"
                          alt="transition up"
                        />
                      </div>
                      <h5 className="mb-3">Advanced AI Models</h5>
                      <p className="features-icon-description">
                        Our platform uses the latest in artificial intelligence
                        to provide responses that are not only accurate but also
                        contextually appropriate. Continuous learning algorithms
                        ensure that the performance of your bots improves with
                        every interaction.
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center features-icon-box  bg-white rounded-2">
                      <div className="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/paper.png"
                          alt="edit"
                        />
                      </div>
                      <h5 className="mb-3">Integration Capabilities</h5>
                      <p className="features-icon-description">
                        Our bots seamlessly integrate with popular CRM and ERP
                        software, ensuring that customer data flows smoothly
                        between systems. This integration allows for a more
                        comprehensive view of customer interactions and enhances
                        personalized communication.
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center features-icon-box  bg-white rounded-2">
                      <div className="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/check.png"
                          alt="3d select solid"
                        />
                      </div>
                      <h5 className="mb-3">Real time Analytics Dashboard</h5>
                      <p className="features-icon-description">
                        Gain valuable insights into your communication efforts
                        with our detailed analytics dashboard. Track metrics
                        such as engagement rates, customer satisfaction scores,
                        and bot efficiency to continuously refine your
                        strategies.
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center features-icon-box  bg-white rounded-2">
                      <div className="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/user.png"
                          alt="lifebelt"
                        />
                      </div>
                      <h5 className="mb-3">24/7 Availability</h5>
                      <p className="features-icon-description">
                        Our bots are designed to provide round-the-clock
                        service, ensuring that customers receive immediate
                        assistance at any time of the day. This continuous
                        availability helps in reducing wait times, improving
                        customer satisfaction, and capturing leads outside of
                        regular business hours.
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center features-icon-box  bg-white rounded-2">
                      <div className="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/keyboard.png"
                          alt="google docs"
                        />
                      </div>
                      <h5 className="mb-3">Advanced Security Protocols</h5>
                      <p className="features-icon-description">
                        Security is paramount at Contact Swing. Our solutions
                        are built with robust security measures to protect
                        sensitive customer data and ensure compliance with
                        international data protection regulations. Features
                        include end-to-end encryption, regular security audits,
                        and compliance with standards such as GDPR and HIPAA.
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-6  text-center features-icon-box  bg-white rounded-2">
                      <div className="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/keyboard.png"
                          alt="google docs"
                        />
                      </div>
                      <h5 className="mb-3">
                        Natural Language Processing (NLP)
                      </h5>
                      <p className="features-icon-description">
                        Our bots are equipped with state-of-the-art NLP
                        capabilities, allowing them to understand and process
                        human language more effectively. This technology enables
                        the bots to interpret various user intents, manage
                        complex queries, and provide more accurate and
                        contextually relevant responses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="landingReviews"
                className="section-py bg-body landing-reviews pb-0"
              >
                <div className="container">
                  <div className="row align-items-center gx-0 gy-4 g-lg-5">
                    <div className="col-md-6 col-lg-5 col-xl-3">
                      <div className="mb-3 pb-1">
                        <span className="badge bg-label-primary">
                          Real Customers Reviews
                        </span>
                      </div>
                      <h3 className="mb-1">
                        <span className="position-relative fw-bold z-1">
                          What people say
                          <img
                            src="../../assets/img/front-pages/icons/section-title-icon.png"
                            alt="laptop charging"
                            className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                          />
                        </span>
                      </h3>
                      <p className="mb-3 mb-md-5">
                        See what our customers have to
                        <br className="d-none d-xl-block" />
                        say about their experience.
                      </p>
                      <div className="landing-reviews-btns">
                        <button
                          id="reviews-previous-btn"
                          className="btn btn-label-primary reviews-btn me-3 scaleX-n1-rtl"
                          type="button"
                        >
                          <i className="ti ti-chevron-left ti-sm"></i>
                        </button>
                        <button
                          id="reviews-next-btn"
                          className="btn btn-label-primary reviews-btn scaleX-n1-rtl"
                          type="button"
                        >
                          <i className="ti ti-chevron-right ti-sm"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-7 col-xl-9">
                      <div className="swiper-reviews-carousel overflow-hidden mb-5 pb-md-2 pb-md-3">
                        <div className="swiper" id="swiper-reviews">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-1.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    “Since implementing Contact Swing's chat
                                    bots, our customer service efficiency has
                                    skyrocketed. The seamless integration and
                                    easy customization have truly transformed
                                    how we interact with our customers. It's a
                                    game-changer!”
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Jessica M.</h6>
                                      <p className="small text-muted mb-0">
                                        Retail Operations Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-2.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    “The natural language processing
                                    capabilities of Contact Swing's voice bots
                                    have greatly improved our inbound call
                                    handling. Our customers often comment on how
                                    natural and intuitive their interactions
                                    feel. Highly recommend!”
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">David T.</h6>
                                      <p className="small text-muted mb-0">
                                        Customer Support Director
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-3.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Contact Swing's SMS solutions have enabled
                                    us to reach our customers with timely and
                                    relevant messages like never before. The
                                    segmentation tools are incredibly precise,
                                    making our campaigns much more effective.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/3.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Sarah K.</h6>
                                      <p className="small text-muted mb-0">
                                        Marketing Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-4.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Email automation was always a challenge for
                                    us until we started using Contact Swing. The
                                    advanced segmentation and A/B testing
                                    features have helped us refine our
                                    strategies and improve our open and
                                    conversion rates significantly.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/4.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Ethan G.</h6>
                                      <p className="small text-muted mb-0">
                                        Digital Marketing Specialist
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-5.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    “We were looking for a comprehensive
                                    solution that could handle all our
                                    communication needs, and Contact Swing
                                    delivered. Their multi-platform integration
                                    is flawless, making management across
                                    channels extremely easy.”
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/5.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Anita R.</h6>
                                      <p className="small text-muted mb-0">
                                        IT Director
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Customer support has never been this
                                    responsive. With Contact Swing's 24/7 bots,
                                    we're able to provide constant assistance,
                                    which has been critical in improving
                                    customer satisfaction and loyalty.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Mike L.</h6>
                                      <p className="small text-muted mb-0">
                                        Customer Experience Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    The real-time analytics dashboard from
                                    Contact Swing is a powerful tool for any
                                    business looking to gain deeper insights
                                    into customer interactions. The data it
                                    provides helps us make informed decisions
                                    daily.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Olivia H.</h6>
                                      <p className="small text-muted mb-0">
                                        Business Analyst
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Contact Swing’s commitment to security and
                                    compliance gave us the confidence to
                                    implement their solutions across our health
                                    services, knowing our patient data is secure
                                    and handled with the utmost care.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Dr. Susan Y.</h6>
                                      <p className="small text-muted mb-0">
                                        Healthcare Administrator
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    As a startup, we needed a cost-effective yet
                                    scalable communication solution. Contact
                                    Swing not only fit our budget but also grew
                                    with us, accommodating our expanding needs
                                    without skipping a beat.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Tom N.</h6>
                                      <p className="small text-muted mb-0">
                                        Founder & CEO
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="card h-100">
                                <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div className="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      className="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Implementing Contact Swing’s bots was a
                                    smooth and straightforward process. Their
                                    support team was with us every step of the
                                    way, ensuring a successful deployment. We
                                    couldn't be happier with the partnership.
                                  </p>
                                  <div className="text-warning mb-3">
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                    <i className="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 className="mb-0">Linda Q.</h6>
                                      <p className="small text-muted mb-0">
                                        Operations Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-button-next"></div>
                          <div className="swiper-button-prev"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                {/* <div className="container">
                  <div className="swiper-logo-carousel py-4 my-lg-2">
                    <div className="swiper" id="swiper-clients-logos">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_1-light.png"
                            alt="client logo"
                            className="client-logo"
                            data-app-light-img="front-pages/branding/logo_1-light.png"
                            data-app-dark-img="front-pages/branding/logo_1-dark.png"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_2-light.png"
                            alt="client logo"
                            className="client-logo"
                            data-app-light-img="front-pages/branding/logo_2-light.png"
                            data-app-dark-img="front-pages/branding/logo_2-dark.png"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_3-light.png"
                            alt="client logo"
                            className="client-logo"
                            data-app-light-img="front-pages/branding/logo_3-light.png"
                            data-app-dark-img="front-pages/branding/logo_3-dark.png"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_4-light.png"
                            alt="client logo"
                            className="client-logo"
                            data-app-light-img="front-pages/branding/logo_4-light.png"
                            data-app-dark-img="front-pages/branding/logo_4-dark.png"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_5-light.png"
                            alt="client logo"
                            className="client-logo"
                            data-app-light-img="front-pages/branding/logo_5-light.png"
                            data-app-dark-img="front-pages/branding/logo_5-dark.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>

              <section id="landingTeam" className="section-py landing-team">
                {/* <div className="container">
                  <div className="text-center mb-3 pb-1">
                    <span className="badge bg-label-primary">Our Great Team</span>
                  </div>
                  <h3 className="text-center mb-1">
                    <span className="position-relative fw-bold z-1">
                      Supported
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>
                    by Real People
                  </h3>
                  <p className="text-center mb-md-5 pb-3">
                    Who is behind these great-looking interfaces?
                  </p>
                  <div className="row gy-5 mt-2">
                    <div className="col-lg-3 col-sm-6">
                      <div className="card mt-3 mt-lg-0 shadow-none">
                        <div className="bg-label-primary position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-1.png"
                            className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div className="card-body border border-top-0 border-label-primary text-center">
                          <h5 className="card-title mb-0">Sophie Gilbert</h5>
                          <p className="text-muted mb-0">Project Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="card mt-3 mt-lg-0 shadow-none">
                        <div className="bg-label-info position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-2.png"
                            className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div className="card-body border border-top-0 border-label-info text-center">
                          <h5 className="card-title mb-0">Paul Miles</h5>
                          <p className="text-muted mb-0">UI Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="card mt-3 mt-lg-0 shadow-none">
                        <div className="bg-label-danger position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-3.png"
                            className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div className="card-body border border-top-0 border-label-danger text-center">
                          <h5 className="card-title mb-0">Nannie Ford</h5>
                          <p className="text-muted mb-0">Development Lead</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="card mt-3 mt-lg-0 shadow-none">
                        <div className="bg-label-success position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-4.png"
                            className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div className="card-body border border-top-0 border-label-success text-center">
                          <h5 className="card-title mb-0">Chris Watkins</h5>
                          <p className="text-muted mb-0">Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>

              <section
                id="landingPricing"
                className="section-py bg-body landing-pricing"
              >
                <div className="container">
                  <div className="text-center mb-3 pb-1">
                    <span className="badge bg-label-primary">
                      Pricing Plans
                    </span>
                  </div>
                  <h3 className="text-center mb-1">
                    <span className="position-relative fw-bold z-1">
                      Tailored pricing plans
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>{" "}
                    designed for you
                  </h3>
                  <p className="text-center mb-4 pb-3">
                    All plans include 40+ advanced tools and features to boost
                    your product.
                    <br />
                    Choose the best plan to fit your needs.
                  </p>
                  <div className="text-center mb-5">
                    <div className="position-relative d-inline-block pt-3 pt-md-0">
                      <label className="switch switch-primary me-0">
                        <span className="switch-label">Pay Monthly</span>
                        <input
                          type="checkbox"
                          className="switch-input price-duration-toggler"
                          checked
                          readOnly
                        />
                        <span className="switch-toggle-slider">
                          <span className="switch-on"></span>
                          <span className="switch-off"></span>
                        </span>
                        <span className="switch-label">Pay Annual</span>
                      </label>
                      <div className="pricing-plans-item position-absolute d-flex">
                        <img
                          src="../../assets/img/front-pages/icons/pricing-plans-arrow.png"
                          alt="pricing plans arrow"
                          className="scaleX-n1-rtl"
                        />
                        <span className="fw-medium mt-2 ms-1"> Save 25%</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="d-flex justify-content-center"> */}
                  <div className="row gy-4 pt-lg-3 d-flex justify-content-center">
                    <div className="col-xl-4 col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/paper-airplane.png"
                              alt="paper airplane icon"
                              className="mb-4 pb-2"
                            />
                            <h4 className="mb-1">Starter</h4>
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="price-monthly h1 text-primary fw-bold mb-0">
                                $29
                              </span>
                              <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $35
                              </span>
                              <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div className="position-relative pt-2">
                              <div className="price-yearly text-muted price-yearly-toggle d-none">
                                $ 25 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled">
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 50
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div className="d-grid mt-4 pt-3">
                            <a
                              href="payment-page.html"
                              className="btn btn-label-primary"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card border border-primary shadow-lg">
                        <div className="card-header">
                          <div className="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/plane.png"
                              alt="plane icon"
                              className="mb-4 pb-2"
                            />
                            <h4 className="mb-1">Pro</h4>
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="price-monthly h1 text-primary fw-bold mb-0">
                                $450
                              </span>
                              <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $500
                              </span>
                              <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div className="position-relative pt-2">
                              <div className="price-yearly text-muted price-yearly-toggle d-none">
                                $ 375 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled">
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 2500
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - 5
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div className="d-grid mt-4 pt-3">
                            <a
                              href="payment-page.html"
                              className="btn btn-primary"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/shuttle-rocket.png"
                              alt="shuttle rocket icon"
                              className="mb-4 pb-2"
                            />
                            <h4 className="mb-1">Growth</h4>
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="price-monthly h1 text-primary fw-bold mb-0">
                                $900
                              </span>
                              <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $1000
                              </span>
                              <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div className="position-relative pt-2">
                              <div className="price-yearly text-muted price-yearly-toggle d-none">
                                $ 750 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled">
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 6000
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - Unlimited
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i className="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div className="d-grid mt-4 pt-3">
                            <a
                              href="payment-page.html"
                              className="btn btn-label-primary"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <div className="text-center">
                              <img
                                src="../../assets/img/front-pages/icons/shuttle-rocket.png"
                                alt="shuttle rocket icon"
                                className="mb-4 pb-2"
                              />
                              <h4 className="mb-1">Agency</h4>
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="price-monthly h1 text-primary fw-bold mb-0">
                                  $1400
                                </span>
                                <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                  $1000
                                </span>
                                <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                              </div>
                              <div className="position-relative pt-2">
                                <div className="price-yearly text-muted price-yearly-toggle d-none">
                                  $ 1200 * 12 / year
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <ul className="list-unstyled">
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Minutes Included - 6000
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Additional costs/min.* - $0.08
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Costs per voicemail - $0.04
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Whitelabel
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-x ti-xs"></i>
                                  </span>
                                  Rebilling
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Workspaces - 1
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Assistants - Unlimited
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Batch campaigns
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Custom Twilio
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Turbo Synthesizer
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  ElevenLabs*
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  PlayHT
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  SMS
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Real-Time Booking
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  SMS
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Voicemail detection drop
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Custom voicemail
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Multilanguage
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Invite Team members
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Rest API
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  GoHighLevel
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Zapier
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                    <i className="ti ti-check ti-xs"></i>
                                  </span>
                                  Make
                                </h5>
                              </li>
                            </ul>
                            <div className="d-grid mt-4 pt-3">
                              <a
                                href="payment-page.html"
                                className="btn btn-label-primary"
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                  </div>
                  {/* </div> */}
                </div>
              </section>

              <section
                id="landingContact"
                className="section-py bg-body landing-contact"
              >
                <div className="container">
                  <div className="text-center mb-3 pb-1">
                    <span className="badge bg-label-primary">Contact US</span>
                  </div>
                  <h3 className="text-center mb-1">
                    <span className="position-relative fw-bold z-1">
                      Let's work
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>{" "}
                    together
                  </h3>
                  <p className="text-center mb-4 mb-lg-5 pb-md-3">
                    Any question or remark? just write us a message
                  </p>
                  <div className="row gy-4">
                    <div className="col-lg-5">
                      <div className="contact-img-box position-relative border p-2 h-100">
                        <img
                          src="../../assets/img/front-pages/icons/contact-border.png"
                          alt="contact border"
                          className="contact-border-img position-absolute d-none d-md-block scaleX-n1-rtl"
                        />
                        <img
                          src="../../assets/img/front-pages/landing-page/contact-customer-service.png"
                          alt="contact customer service"
                          className="contact-img w-100 scaleX-n1-rtl"
                        />
                        <div className="pt-3 px-3 pb-1">
                          <div className="row gy-3 gx-md-4">
                            <div className="col-md-6 col-lg-12 col-xl-6">
                              <div className="d-flex align-items-center">
                                <div className="badge bg-label-primary rounded p-2 me-2">
                                  <i className="ti ti-mail ti-sm"></i>
                                </div>
                                <div>
                                  <p className="mb-0">Email</p>
                                  <h5 className="mb-0">
                                    <a
                                      href="mailto:info@contactswing.com"
                                      className="text-heading"
                                    >
                                      info@contactswing.com
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xl-6">
                              <div className="d-flex align-items-center">
                                <div className="badge bg-label-success rounded p-2 me-2">
                                  <i className="ti ti-phone-call ti-sm"></i>
                                </div>
                                <div>
                                  <p className="mb-0">Phone</p>
                                  <h5 className="mb-0">
                                    <a
                                      href="tel:+1234-568-963"
                                      className="text-heading"
                                    >
                                      2817096004
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="mb-1">Send a message</h4>
                          <p className="mb-4">
                            If you would like to discuss anything related to
                            payment, account, licensing,
                            <br className="d-none d-lg-block" />
                            partnerships, or have pre-sales questions, you’re at
                            the right place.
                          </p>
                          <form>
                            <div className="row g-3">
                              <div className="col-md-6">
                                <label
                                  className="form-label"
                                  htmlFor="contact-form-fullname"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="contact-form-fullname"
                                  placeholder="john"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  className="form-label"
                                  htmlFor="contact-form-email"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  id="contact-form-email"
                                  className="form-control"
                                  placeholder="johndoe@gmail.com"
                                />
                              </div>
                              <div className="col-12">
                                <label
                                  className="form-label"
                                  htmlFor="contact-form-message"
                                >
                                  Message
                                </label>
                                <textarea
                                  id="contact-form-message"
                                  className="form-control"
                                  rows="8"
                                  placeholder="Write a message"
                                ></textarea>
                              </div>
                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Send inquiry
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* --footer-- */}
        <div className="row mt-4">
          <div className="col-12 mt-4">
            <footer className="landing-footer bg-body footer-text">
              <div className="footer-top position-relative overflow-hidden z-1">
                <img
                  src="../../assets/img/front-pages/backgrounds/footer-bg-light.png"
                  alt="footer bg"
                  className="footer-bg banner-bg-img z-n1"
                  data-app-light-img="front-pages/backgrounds/footer-bg-light.png"
                  data-app-dark-img="front-pages/backgrounds/footer-bg-dark.png"
                />
                <div className="container">
                  <div className="row gx-0 gy-4 g-md-5">
                    <div className="col-lg-5">
                      <a href="/landing" className="app-brand-link mb-4">
                        <span className="app-brand-logo demo">
                          <img src={Logo} height={32} width={32} alt="" />
                        </span>
                        <span className="app-brand-text demo footer-link fw-bold ms-2 ps-1">
                          ContactSwing
                        </span>
                      </a>
                      <p className="footer-text footer-logo-description mb-4">
                        Transform Your Customer Interactions with Contact
                        Swing's Advanced Communication Solutions!
                      </p>
                      <form className="footer-form">
                        <label htmlFor="footer-email" className="small">
                          Subscribe to newsletter
                        </label>
                        <div className="d-flex mt-1">
                          <input
                            type="email"
                            className="form-control rounded-0 rounded-start-bottom rounded-start-top"
                            id="footer-email"
                            placeholder="Your email"
                          />
                          <button
                            type="submit"
                            className="btn btn-primary shadow-none rounded-0 rounded-end-bottom rounded-end-top"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <a href="/terms" className="footer-link">
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="mb-3">
                          <a href="/privacy" className="footer-link">
                            Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-around align-items-center">
                  {/* <div className="text-center"></div> */}
                  <div className="text-center" style={{ marginLeft: "30%" }}>
                    <span className="footer-text">
                      Copyright
                      <script>document.write(new Date().getFullYear());</script>
                    </span>{" "}
                    <a href="/landing" target="_blank">
                      Contact Swing 2024
                    </a>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-1">
                      <a
                        href="https://www.linkedin.com/company/contactswing"
                        className="footer-link "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="../../assets/img/front-pages/icons/github-light.png"
                          alt="linkedin icon"
                        />
                      </a>
                    </div>
                    <div className="col-1">
                      <a
                        href="https://www.facebook.com/ContactSwinginc"
                        className="footer-link "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="../../assets/img/front-pages/icons/facebook-light.png"
                          alt="facebook icon"
                        />
                      </a>
                    </div>
                    {/* <div className="col-1">
                      <a
                        href="https://twitter.com/pixinvents"
                        className="footer-link me-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="../../assets/img/front-pages/icons/twitter-light.png"
                          alt="twitter icon"
                        />
                      </a>
                    </div> */}
                    <div className="col-1">
                      <a
                        href="https://www.instagram.com/ContactSwing/"
                        className="footer-link "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="../../assets/img/front-pages/icons/instagram-light.png"
                          alt="instagram icon"
                        />
                      </a>
                    </div>
                    <div className="col-1">
                      <a
                        href="https://www.youtube.com/@ContactSwing"
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="../../assets/img/front-pages/icons/instagram-light.png"
                          alt="youtube icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="footer-bottom py-3">
                <div className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
                  <div className="mb-2 mb-md-0">
                    <span className="footer-text">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                    </span>
                    <a
                      href="/landing"
                      target="_blank"
                      className="fw-medium footer-link"
                    >
                      ContactSwing
                    </a>
                    <span className="footer-text"> </span>
                  </div>
                  <div>
                    <a
                      href="https://github.com/pixinvent"
                      className="footer-link me-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/github-light.png"
                        alt="github icon"
                        data-app-light-img="front-pages/icons/github-light.png"
                        data-app-dark-img="front-pages/icons/github-dark.png"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/pixinvents/"
                      className="footer-link me-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/facebook-light.png"
                        alt="facebook icon"
                        data-app-light-img="front-pages/icons/facebook-light.png"
                        data-app-dark-img="front-pages/icons/facebook-dark.png"
                      />
                    </a>
                    <a
                      href="https://twitter.com/pixinvents"
                      className="footer-link me-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/twitter-light.png"
                        alt="twitter icon"
                        data-app-light-img="front-pages/icons/twitter-light.png"
                        data-app-dark-img="front-pages/icons/twitter-dark.png"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/pixinvents/"
                      className="footer-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/instagram-light.png"
                        alt="google icon"
                        data-app-light-img="front-pages/icons/instagram-light.png"
                        data-app-dark-img="front-pages/icons/instagram-dark.png"
                      />
                    </a>
                  </div>
                </div>
              </div> */}
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
