// import React from 'react'
import React, { useState, useEffect } from "react";
import "./landing-page.scss";

const LandingPage = () => {
  const token = localStorage.getItem("token");
  console.log("landing page token", token);
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
            });
            priceMonthlyList.map(function (monthEl) {
              monthEl.classList.add("d-none");
            });
          } else {
            // If not checked
            priceYearlyList.map(function (yearEl) {
              yearEl.classList.add("d-none");
            });
            priceMonthlyList.map(function (monthEl) {
              monthEl.classList.remove("d-none");
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
      <div class="">
        <div class="row">
          <div class="col-12">
            <nav class="layout-navbar shadow-none py-0">
              <div class="container">
                <div class="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
                  <div class="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
                    <button
                      class="navbar-toggler border-0 px-0 me-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i class="ti ti-menu-2 ti-sm align-middle"></i>
                    </button>
                    <a href="landing-page.html" class="app-brand-link">
                      <span class="app-brand-logo demo">
                        <svg
                          width="32"
                          height="22"
                          viewBox="0 0 32 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                            fill="#7367F0"
                          />
                          <path
                            opacity="0.06"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                            fill="#161616"
                          />
                          <path
                            opacity="0.06"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                            fill="#161616"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                            fill="#7367F0"
                          />
                        </svg>
                      </span>
                      <span class="app-brand-text demo menu-text fw-bold ms-2 ps-1">
                        ContactSwing
                      </span>
                    </a>
                  </div>

                  <div
                    class="collapse navbar-collapse landing-nav-menu"
                    id="navbarSupportedContent"
                  >
                    <button
                      class="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i class="ti ti-x ti-sm"></i>
                    </button>
                    <ul class="navbar-nav me-auto">
                      <li class="nav-item">
                        <a
                          class="nav-link fw-medium"
                          aria-current="page"
                          href="#landingHero"
                        >
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link fw-medium" href="#landingFeatures">
                          Features
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link fw-medium" href="#landingContact">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="landing-menu-overlay d-lg-none"></div>

                  <ul class="navbar-nav flex-row align-items-center ms-auto">
                    <li class="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                      <a
                        class="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                      >
                        <i class="ti ti-sm"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
                        <li>
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="light"
                          >
                            <span class="align-middle">
                              <i class="ti ti-sun me-2"></i>Light
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="dark"
                          >
                            <span class="align-middle">
                              <i class="ti ti-moon me-2"></i>Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="system"
                          >
                            <span class="align-middle">
                              <i class="ti ti-device-desktop me-2"></i>System
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="/login"
                        class="btn btn-primary mx-1"
                        target="_blank"
                      >
                        <span class="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                        <span class="d-none d-md-block">Login</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/register"
                        class="btn btn-primary mx-1"
                        target="_blank"
                      >
                        <span class="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                        <span class="d-none d-md-block">Register</span>
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
            <div data-bs-spy="scroll" class="scrollspy-example">
              <section id="hero-animation">
                <div
                  id="landingHero"
                  class="section-py landing-hero position-relative"
                >
                  <img
                    src="../../assets/img/front-pages/backgrounds/hero-bg.png"
                    alt="hero background"
                    class="position-absolute top-0 start-50 translate-middle-x object-fit-contain w-100 h-100"
                    data-speed="1"
                  />
                  <div class="col-12">
                    <div class="hero-text-box text-center">
                      <h1 class="text-primary hero-title display-6 fw-bold">
                        Transform Your Customer Interactions with Contact
                        Swing's Advanced Communication Solutions!
                      </h1>
                      <h2 class="hero-sub-title h6 mb-4 pb-1">
                        Unleash the power of integrated voice, chat, SMS, and
                        email bots designed to elevate
                        <br class="d-none d-lg-block" />
                        your business communication, improve response times, and
                        boost customer satisfaction.
                      </h2>
                      <div class="landing-hero-btn d-inline-block position-relative">
                        {/* <span class="hero-btn-item position-absolute d-none d-md-flex text-heading">
                          Join community
                          <img
                            src="../../assets/img/front-pages/icons/Join-community-arrow.png"
                            alt="Join community arrow"
                            class="scaleX-n1-rtl"
                          />
                        </span> */}
                        <a
                          href="#landingPricing"
                          class="btn btn-primary btn-lg"
                        >
                          Get early access
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div
                          id="heroDashboardAnimation"
                          class="hero-animation-img"
                        >
                          <a
                            href="../vertical-menu-template/app-ecommerce-dashboard.html"
                            target="_blank"
                          >
                            <div
                              id="heroAnimationImg"
                              class="position-relative hero-dashboard-img"
                            >
                              <img
                                src="../../assets/img/front-pages/landing-page/hero-dashboard-light.png"
                                alt="hero dashboard"
                                class="animation-img"
                                data-app-light-img="front-pages/landing-page/hero-dashboard-light.png"
                                data-app-dark-img="front-pages/landing-page/hero-dashboard-dark.png"
                              />
                              <img
                                src="../../assets/img/front-pages/landing-page/hero-elements-light.png"
                                alt="hero elements"
                                class="position-absolute hero-elements-img animation-img top-0 start-0"
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
                <div class="landing-hero-blank"></div>
              </section>

              <section id="landingFeatures" class="section-py landing-features">
                <div class="container">
                  <div class="text-center mb-3 pb-1">
                    <span class="badge bg-label-primary">Features</span>
                  </div>
                  <h3 class="text-center mb-1">
                    <span class="position-relative fw-bold z-1">
                      Everything you need
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        class="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>
                    to start your next project
                  </h3>
                  <p class="text-center mb-3 mb-md-5 pb-3">
                    Not just a set of tools, the package includes
                    ready-to-deploy conceptual application.
                  </p>
                  <div class="features-icon-wrapper row gx-0 gy-4 g-sm-5">
                    <div class="col-lg-4 col-sm-6 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/laptop.png"
                          alt="laptop charging"
                        />
                      </div>
                      <h5 class="mb-3">Customizable AI Bots</h5>
                      <p class="features-icon-description">
                        Create bots that reflect your brand's unique voice and
                        tone with our extensive customization options. Adjust
                        scripts, set operational hours, and tailor interactions
                        to fit the specific needs of your audience.
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/rocket.png"
                          alt="transition up"
                        />
                      </div>
                      <h5 class="mb-3">Advanced AI Models</h5>
                      <p class="features-icon-description">
                        Our platform uses the latest in artificial intelligence
                        to provide responses that are not only accurate but also
                        contextually appropriate. Continuous learning algorithms
                        ensure that the performance of your bots improves with
                        every interaction.
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/paper.png"
                          alt="edit"
                        />
                      </div>
                      <h5 class="mb-3">Integration Capabilities</h5>
                      <p class="features-icon-description">
                        Our bots seamlessly integrate with popular CRM and ERP
                        software, ensuring that customer data flows smoothly
                        between systems. This integration allows for a more
                        comprehensive view of customer interactions and enhances
                        personalized communication.
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/check.png"
                          alt="3d select solid"
                        />
                      </div>
                      <h5 class="mb-3">Real time Analytics Dashboard</h5>
                      <p class="features-icon-description">
                        Gain valuable insights into your communication efforts
                        with our detailed analytics dashboard. Track metrics
                        such as engagement rates, customer satisfaction scores,
                        and bot efficiency to continuously refine your
                        strategies.
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/user.png"
                          alt="lifebelt"
                        />
                      </div>
                      <h5 class="mb-3">24/7 Availability</h5>
                      <p class="features-icon-description">
                        Our bots are designed to provide round-the-clock
                        service, ensuring that customers receive immediate
                        assistance at any time of the day. This continuous
                        availability helps in reducing wait times, improving
                        customer satisfaction, and capturing leads outside of
                        regular business hours.
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/keyboard.png"
                          alt="google docs"
                        />
                      </div>
                      <h5 class="mb-3">Advanced Security Protocols</h5>
                      <p class="features-icon-description">
                        Security is paramount at Contact Swing. Our solutions
                        are built with robust security measures to protect
                        sensitive customer data and ensure compliance with
                        international data protection regulations. Features
                        include end-to-end encryption, regular security audits,
                        and compliance with standards such as GDPR and HIPAA.
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6 offset-4 text-center features-icon-box">
                      <div class="text-center mb-3">
                        <img
                          src="../../assets/img/front-pages/icons/keyboard.png"
                          alt="google docs"
                        />
                      </div>
                      <h5 class="mb-3">Natural Language Processing (NLP)</h5>
                      <p class="features-icon-description">
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
                class="section-py bg-body landing-reviews pb-0"
              >
                <div class="container">
                  <div class="row align-items-center gx-0 gy-4 g-lg-5">
                    <div class="col-md-6 col-lg-5 col-xl-3">
                      <div class="mb-3 pb-1">
                        <span class="badge bg-label-primary">
                          Real Customers Reviews
                        </span>
                      </div>
                      <h3 class="mb-1">
                        <span class="position-relative fw-bold z-1">
                          What people say
                          <img
                            src="../../assets/img/front-pages/icons/section-title-icon.png"
                            alt="laptop charging"
                            class="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                          />
                        </span>
                      </h3>
                      <p class="mb-3 mb-md-5">
                        See what our customers have to
                        <br class="d-none d-xl-block" />
                        say about their experience.
                      </p>
                      <div class="landing-reviews-btns">
                        <button
                          id="reviews-previous-btn"
                          class="btn btn-label-primary reviews-btn me-3 scaleX-n1-rtl"
                          type="button"
                        >
                          <i class="ti ti-chevron-left ti-sm"></i>
                        </button>
                        <button
                          id="reviews-next-btn"
                          class="btn btn-label-primary reviews-btn scaleX-n1-rtl"
                          type="button"
                        >
                          <i class="ti ti-chevron-right ti-sm"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-7 col-xl-9">
                      <div class="swiper-reviews-carousel overflow-hidden mb-5 pb-md-2 pb-md-3">
                        <div class="swiper" id="swiper-reviews">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-1.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
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
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Jessica M.</h6>
                                      <p class="small text-muted mb-0">
                                        Retail Operations Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-2.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
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
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">David T.</h6>
                                      <p class="small text-muted mb-0">
                                        Customer Support Director
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-3.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Contact Swing's SMS solutions have enabled
                                    us to reach our customers with timely and
                                    relevant messages like never before. The
                                    segmentation tools are incredibly precise,
                                    making our campaigns much more effective.
                                  </p>
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/3.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Sarah K.</h6>
                                      <p class="small text-muted mb-0">
                                        Marketing Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-4.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
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
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/4.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Ethan G.</h6>
                                      <p class="small text-muted mb-0">
                                        Digital Marketing Specialist
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-5.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
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
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/5.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Anita R.</h6>
                                      <p class="small text-muted mb-0">
                                        IT Director
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Customer support has never been this
                                    responsive. With Contact Swing's 24/7 bots,
                                    we're able to provide constant assistance,
                                    which has been critical in improving
                                    customer satisfaction and loyalty.
                                  </p>
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Mike L.</h6>
                                      <p class="small text-muted mb-0">
                                        Customer Experience Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
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
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Olivia H.</h6>
                                      <p class="small text-muted mb-0">
                                        Business Analyst
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Contact Swing’s commitment to security and
                                    compliance gave us the confidence to
                                    implement their solutions across our health
                                    services, knowing our patient data is secure
                                    and handled with the utmost care.
                                  </p>
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Dr. Susan Y.</h6>
                                      <p class="small text-muted mb-0">
                                        Healthcare Administrator
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    As a startup, we needed a cost-effective yet
                                    scalable communication solution. Contact
                                    Swing not only fit our budget but also grew
                                    with us, accommodating our expanding needs
                                    without skipping a beat.
                                  </p>
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Tom N.</h6>
                                      <p class="small text-muted mb-0">
                                        Founder & CEO
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card h-100">
                                <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                                  {/* <div class="mb-3">
                                    <img
                                      src="../../assets/img/front-pages/branding/logo-6.png"
                                      alt="client logo"
                                      class="client-logo img-fluid"
                                    />
                                  </div> */}
                                  <p>
                                    Implementing Contact Swing’s bots was a
                                    smooth and straightforward process. Their
                                    support team was with us every step of the
                                    way, ensuring a successful deployment. We
                                    couldn't be happier with the partnership.
                                  </p>
                                  <div class="text-warning mb-3">
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                    <i class="ti ti-star-filled ti-sm"></i>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    {/* <div class="avatar me-2 avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div> */}
                                    <div>
                                      <h6 class="mb-0">Linda Q.</h6>
                                      <p class="small text-muted mb-0">
                                        Operations Manager
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="m-0" />
                {/* <div class="container">
                  <div class="swiper-logo-carousel py-4 my-lg-2">
                    <div class="swiper" id="swiper-clients-logos">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_1-light.png"
                            alt="client logo"
                            class="client-logo"
                            data-app-light-img="front-pages/branding/logo_1-light.png"
                            data-app-dark-img="front-pages/branding/logo_1-dark.png"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_2-light.png"
                            alt="client logo"
                            class="client-logo"
                            data-app-light-img="front-pages/branding/logo_2-light.png"
                            data-app-dark-img="front-pages/branding/logo_2-dark.png"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_3-light.png"
                            alt="client logo"
                            class="client-logo"
                            data-app-light-img="front-pages/branding/logo_3-light.png"
                            data-app-dark-img="front-pages/branding/logo_3-dark.png"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_4-light.png"
                            alt="client logo"
                            class="client-logo"
                            data-app-light-img="front-pages/branding/logo_4-light.png"
                            data-app-dark-img="front-pages/branding/logo_4-dark.png"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="../../assets/img/front-pages/branding/logo_5-light.png"
                            alt="client logo"
                            class="client-logo"
                            data-app-light-img="front-pages/branding/logo_5-light.png"
                            data-app-dark-img="front-pages/branding/logo_5-dark.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>

              <section id="landingTeam" class="section-py landing-team">
                {/* <div class="container">
                  <div class="text-center mb-3 pb-1">
                    <span class="badge bg-label-primary">Our Great Team</span>
                  </div>
                  <h3 class="text-center mb-1">
                    <span class="position-relative fw-bold z-1">
                      Supported
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        class="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>
                    by Real People
                  </h3>
                  <p class="text-center mb-md-5 pb-3">
                    Who is behind these great-looking interfaces?
                  </p>
                  <div class="row gy-5 mt-2">
                    <div class="col-lg-3 col-sm-6">
                      <div class="card mt-3 mt-lg-0 shadow-none">
                        <div class="bg-label-primary position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-1.png"
                            class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div class="card-body border border-top-0 border-label-primary text-center">
                          <h5 class="card-title mb-0">Sophie Gilbert</h5>
                          <p class="text-muted mb-0">Project Manager</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="card mt-3 mt-lg-0 shadow-none">
                        <div class="bg-label-info position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-2.png"
                            class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div class="card-body border border-top-0 border-label-info text-center">
                          <h5 class="card-title mb-0">Paul Miles</h5>
                          <p class="text-muted mb-0">UI Designer</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="card mt-3 mt-lg-0 shadow-none">
                        <div class="bg-label-danger position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-3.png"
                            class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div class="card-body border border-top-0 border-label-danger text-center">
                          <h5 class="card-title mb-0">Nannie Ford</h5>
                          <p class="text-muted mb-0">Development Lead</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="card mt-3 mt-lg-0 shadow-none">
                        <div class="bg-label-success position-relative team-image-box">
                          <img
                            src="../../assets/img/front-pages/landing-page/team-member-4.png"
                            class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                            alt="human image"
                          />
                        </div>
                        <div class="card-body border border-top-0 border-label-success text-center">
                          <h5 class="card-title mb-0">Chris Watkins</h5>
                          <p class="text-muted mb-0">Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>

              <section
                id="landingPricing"
                class="section-py bg-body landing-pricing"
              >
                <div class="container">
                  <div class="text-center mb-3 pb-1">
                    <span class="badge bg-label-primary">Pricing Plans</span>
                  </div>
                  <h3 class="text-center mb-1">
                    <span class="position-relative fw-bold z-1">
                      Tailored pricing plans
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        class="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>
                    designed for you
                  </h3>
                  <p class="text-center mb-4 pb-3">
                    All plans include 40+ advanced tools and features to boost
                    your product.
                    <br />
                    Choose the best plan to fit your needs.
                  </p>
                  <div class="text-center mb-5">
                    <div class="position-relative d-inline-block pt-3 pt-md-0">
                      <label class="switch switch-primary me-0">
                        <span class="switch-label">Pay Monthly</span>
                        <input
                          type="checkbox"
                          class="switch-input price-duration-toggler"
                          checked
                        />
                        <span class="switch-toggle-slider">
                          <span class="switch-on"></span>
                          <span class="switch-off"></span>
                        </span>
                        <span class="switch-label">Pay Annual</span>
                      </label>
                      <div class="pricing-plans-item position-absolute d-flex">
                        <img
                          src="../../assets/img/front-pages/icons/pricing-plans-arrow.png"
                          alt="pricing plans arrow"
                          class="scaleX-n1-rtl"
                        />
                        <span class="fw-medium mt-2 ms-1"> Save 25%</span>
                      </div>
                    </div>
                  </div>
                  <div class="row gy-4 pt-lg-3">
                    <div class="col-xl-3 col-lg-6">
                      <div class="card">
                        <div class="card-header">
                          <div class="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/paper-airplane.png"
                              alt="paper airplane icon"
                              class="mb-4 pb-2"
                            />
                            <h4 class="mb-1">Starter</h4>
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="price-monthly h1 text-primary fw-bold mb-0">
                                $29
                              </span>
                              <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $35
                              </span>
                              <sub class="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div class="position-relative pt-2">
                              <div class="price-yearly text-muted price-yearly-toggle d-none">
                                $ 25 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled">
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 50
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div class="d-grid mt-4 pt-3">
                            <a
                              href="payment-page.html"
                              class="btn btn-label-primary"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-6">
                      <div class="card border border-primary shadow-lg">
                        <div class="card-header">
                          <div class="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/plane.png"
                              alt="plane icon"
                              class="mb-4 pb-2"
                            />
                            <h4 class="mb-1">Pro</h4>
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="price-monthly h1 text-primary fw-bold mb-0">
                                $450
                              </span>
                              <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $500
                              </span>
                              <sub class="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div class="position-relative pt-2">
                              <div class="price-yearly text-muted price-yearly-toggle d-none">
                                $ 375 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled">
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 2500
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - 5
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div class="d-grid mt-4 pt-3">
                            <a href="payment-page.html" class="btn btn-primary">
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-6">
                      <div class="card">
                        <div class="card-header">
                          <div class="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/shuttle-rocket.png"
                              alt="shuttle rocket icon"
                              class="mb-4 pb-2"
                            />
                            <h4 class="mb-1">Growth</h4>
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="price-monthly h1 text-primary fw-bold mb-0">
                                $900
                              </span>
                              <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $1000
                              </span>
                              <sub class="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div class="position-relative pt-2">
                              <div class="price-yearly text-muted price-yearly-toggle d-none">
                                $ 750 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled">
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 6000
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - Unlimited
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div class="d-grid mt-4 pt-3">
                            <a
                              href="payment-page.html"
                              class="btn btn-label-primary"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-6">
                      <div class="card">
                        <div class="card-header">
                          <div class="text-center">
                            <img
                              src="../../assets/img/front-pages/icons/shuttle-rocket.png"
                              alt="shuttle rocket icon"
                              class="mb-4 pb-2"
                            />
                            <h4 class="mb-1">Agency</h4>
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="price-monthly h1 text-primary fw-bold mb-0">
                                $1400
                              </span>
                              <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                                $1000
                              </span>
                              <sub class="h6 text-muted mb-0 ms-1">/mo</sub>
                            </div>
                            <div class="position-relative pt-2">
                              <div class="price-yearly text-muted price-yearly-toggle d-none">
                                $ 1200 * 12 / year
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled">
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Minutes Included - 6000
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Additional costs/min.* - $0.08
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Costs per voicemail - $0.04
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Whitelabel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-x ti-xs"></i>
                                </span>
                                Rebilling
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Workspaces - 1
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Assistants - Unlimited
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Batch campaigns
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom Twilio
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Turbo Synthesizer
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                ElevenLabs*
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                PlayHT
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Real-Time Booking
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                SMS
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Voicemail detection drop
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Custom voicemail
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Multilanguage
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Invite Team members
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Rest API
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                GoHighLevel
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Zapier
                              </h5>
                            </li>
                            <li>
                              <h5>
                                <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                                  <i class="ti ti-check ti-xs"></i>
                                </span>
                                Make
                              </h5>
                            </li>
                          </ul>
                          <div class="d-grid mt-4 pt-3">
                            <a
                              href="payment-page.html"
                              class="btn btn-label-primary"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="landingContact"
                class="section-py bg-body landing-contact"
              >
                <div class="container">
                  <div class="text-center mb-3 pb-1">
                    <span class="badge bg-label-primary">Contact US</span>
                  </div>
                  <h3 class="text-center mb-1">
                    <span class="position-relative fw-bold z-1">
                      Let's work
                      <img
                        src="../../assets/img/front-pages/icons/section-title-icon.png"
                        alt="laptop charging"
                        class="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                      />
                    </span>
                    together
                  </h3>
                  <p class="text-center mb-4 mb-lg-5 pb-md-3">
                    Any question or remark? just write us a message
                  </p>
                  <div class="row gy-4">
                    <div class="col-lg-5">
                      <div class="contact-img-box position-relative border p-2 h-100">
                        <img
                          src="../../assets/img/front-pages/icons/contact-border.png"
                          alt="contact border"
                          class="contact-border-img position-absolute d-none d-md-block scaleX-n1-rtl"
                        />
                        <img
                          src="../../assets/img/front-pages/landing-page/contact-customer-service.png"
                          alt="contact customer service"
                          class="contact-img w-100 scaleX-n1-rtl"
                        />
                        <div class="pt-3 px-4 pb-1">
                          <div class="row gy-3 gx-md-4">
                            <div class="col-md-6 col-lg-12 col-xl-6">
                              <div class="d-flex align-items-center">
                                <div class="badge bg-label-primary rounded p-2 me-2">
                                  <i class="ti ti-mail ti-sm"></i>
                                </div>
                                <div>
                                  <p class="mb-0">Email</p>
                                  <h5 class="mb-0">
                                    <a
                                      href="mailto:example@gmail.com"
                                      class="text-heading"
                                    >
                                      example@gmail.com
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-12 col-xl-6">
                              <div class="d-flex align-items-center">
                                <div class="badge bg-label-success rounded p-2 me-2">
                                  <i class="ti ti-phone-call ti-sm"></i>
                                </div>
                                <div>
                                  <p class="mb-0">Phone</p>
                                  <h5 class="mb-0">
                                    <a
                                      href="tel:+1234-568-963"
                                      class="text-heading"
                                    >
                                      +1234 568 963
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="mb-1">Send a message</h4>
                          <p class="mb-4">
                            If you would like to discuss anything related to
                            payment, account, licensing,
                            <br class="d-none d-lg-block" />
                            partnerships, or have pre-sales questions, you’re at
                            the right place.
                          </p>
                          <form>
                            <div class="row g-3">
                              <div class="col-md-6">
                                <label
                                  class="form-label"
                                  for="contact-form-fullname"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="contact-form-fullname"
                                  placeholder="john"
                                />
                              </div>
                              <div class="col-md-6">
                                <label
                                  class="form-label"
                                  for="contact-form-email"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  id="contact-form-email"
                                  class="form-control"
                                  placeholder="johndoe@gmail.com"
                                />
                              </div>
                              <div class="col-12">
                                <label
                                  class="form-label"
                                  for="contact-form-message"
                                >
                                  Message
                                </label>
                                <textarea
                                  id="contact-form-message"
                                  class="form-control"
                                  rows="8"
                                  placeholder="Write a message"
                                ></textarea>
                              </div>
                              <div class="col-12">
                                <button type="submit" class="btn btn-primary">
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

        <div className="row">
          <div className="col-12">
            <footer class="landing-footer bg-body footer-text">
              <div class="footer-top position-relative overflow-hidden z-1">
                <img
                  src="../../assets/img/front-pages/backgrounds/footer-bg-light.png"
                  alt="footer bg"
                  class="footer-bg banner-bg-img z-n1"
                  data-app-light-img="front-pages/backgrounds/footer-bg-light.png"
                  data-app-dark-img="front-pages/backgrounds/footer-bg-dark.png"
                />
                <div class="container">
                  <div class="row gx-0 gy-4 g-md-5">
                    <div class="col-lg-5">
                      <a href="landing-page.html" class="app-brand-link mb-4">
                        <span class="app-brand-logo demo">
                          <svg
                            width="32"
                            height="22"
                            viewBox="0 0 32 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                              fill="#7367F0"
                            />
                            <path
                              opacity="0.06"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                              fill="#161616"
                            />
                            <path
                              opacity="0.06"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                              fill="#161616"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                              fill="#7367F0"
                            />
                          </svg>
                        </span>
                        <span class="app-brand-text demo footer-link fw-bold ms-2 ps-1">
                          ContactSwing
                        </span>
                      </a>
                      <p class="footer-text footer-logo-description mb-4">
                        Transform Your Customer Interactions with Contact
                        Swing's Advanced Communication Solutions!
                      </p>
                      <form class="footer-form">
                        <label for="footer-email" class="small">
                          Subscribe to newsletter
                        </label>
                        <div class="d-flex mt-1">
                          <input
                            type="email"
                            class="form-control rounded-0 rounded-start-bottom rounded-start-top"
                            id="footer-email"
                            placeholder="Your email"
                          />
                          <button
                            type="submit"
                            class="btn btn-primary shadow-none rounded-0 rounded-end-bottom rounded-end-top"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                      <ul class="list-unstyled">
                        <li class="mb-3">
                          <a href="/terms" class="footer-link">
                            Terms & Conditions
                          </a>
                        </li>
                        <li class="mb-3">
                          <a href="/privacy" class="footer-link">
                            Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-bottom py-3">
                <div class="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
                  <div class="mb-2 mb-md-0">
                    <span class="footer-text">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                    </span>
                    <a
                      href="https://pixinvent.com"
                      target="_blank"
                      class="fw-medium text-white footer-link"
                    >
                      ContactSwing,
                    </a>
                    <span class="footer-text"> </span>
                  </div>
                  <div>
                    <a
                      href="https://github.com/pixinvent"
                      class="footer-link me-3"
                      target="_blank"
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
                      class="footer-link me-3"
                      target="_blank"
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
                      class="footer-link me-3"
                      target="_blank"
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
                      class="footer-link"
                      target="_blank"
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
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;