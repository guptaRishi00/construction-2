import React from "react";
import { Link } from "react-router-dom";
import bannerBg from "../../../assets/img/shape/banner-shape.png";
import heroBanner from "../../../assets/img/heroBanner.jpg";
import award from "../../../assets/img/shape/award.png";

const BannerOne = () => {
  return (
    <div className="banner__one">
      {/* Background Shape/Texture */}
      <div
        className="banner__one-bg"
        style={{ backgroundImage: `url(${bannerBg})` }}
      ></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-xl-7 col-lg-7">
            <div className="banner__one-content">
              <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                <i className="fas fa-helmet-safety"></i> Premium Constructions
                Services
              </span>

              <h1 className="wow fadeInUp" data-wow-delay=".4s">
                We Build The <span className="highlight">Future</span> With
                Precision
              </h1>

              <p className="wow fadeInUp" data-wow-delay=".6s">
                Experience world-class engineering and sustainable construction
                solutions. We turn complex blueprints into concrete reality with
                safety and integrity.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-xl-5 col-lg-5">
            <div
              className="banner__one-image wow fadeInRight"
              data-wow-delay=".5s"
            >
              <div className="image-wrapper">
                <img
                  className="main-img"
                  src={heroBanner}
                  alt="Construction Site"
                />

                {/* Decorative Badge */}
                <div className="award-badge bounce_y">
                  <img src={award} alt="Award" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Info Bar */}
      <div className="banner__one-info wow fadeInUp" data-wow-delay="1s">
        <div className="container">
          <div className="info-wrapper">
            <div className="row g-0">
              <div className="col-lg-4 col-md-6">
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-layer-group"></i>
                  </div>
                  <div className="text">
                    <h3>2,500+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-item border-x">
                  <div className="icon">
                    <i className="fas fa-user-hard-hat"></i>
                  </div>
                  <div className="text">
                    <h3>350+</h3>
                    <p>Expert Engineers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="text">
                    <h3>100%</h3>
                    <p>Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
