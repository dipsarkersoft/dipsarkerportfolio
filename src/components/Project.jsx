import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import bn1 from "../assets/bank/bn1.png";
import bn2 from "../assets/bank/bn2.png";
import bn3 from "../assets/bank/bn3.png";
import bn4 from "../assets/bank/bn4.png";
import bn5 from "../assets/bank/bn5.png";

import mang1 from "../assets/mango/mang1.png";
import mang2 from "../assets/mango/mang2.png";

import par1 from "../assets/parking/par1.png";
import par2 from "../assets/parking/par2.png";
import par3 from "../assets/parking/par3.png";
import par4 from "../assets/parking/par4.png";
import par5 from "../assets/parking/par5.png";

export const Project = () => {
  return (
    <div className="container projectSec">
      <h3>Projects</h3>
      <h2>My works that I did for practice</h2>

      <div className="container mt-4">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nv nav-link active"
              id="pills-parking-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-parking"
              type="button"
              role="tab"
              aria-controls="pills-parking"
              aria-selected="true"
            >
              Parking Management
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nv nav-link"
              id="pills-mango-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mango"
              type="button"
              role="tab"
              aria-controls="pills-mango"
              aria-selected="false"
            >
              Mango Selling
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nv nav-link"
              id="pills-banking-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-banking"
              type="button"
              role="tab"
              aria-controls="pills-banking"
              aria-selected="false"
            >
              Banking Management
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active "
            id="pills-parking"
            role="tabpanel"
            aria-labelledby="pills-parking-tab"
          >
            <div className="d-flex">
              <div
                id="parkingCarousel"
                className="carousel slide col-md-5"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={par3}
                      className="d-block w-100"
                      alt="Parking Carousel 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={par2}
                      className="d-block w-100"
                      alt="Parking Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={par1}
                      className="d-block w-100"
                      alt="Parking Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={par4}
                      className="d-block w-100"
                      alt="Parking Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={par5}
                      className="d-block w-100"
                      alt="Parking Carousel 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#parkingCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#parkingCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card  prcrd col-md-7">
                <div className="card-body">
                  <h5 className="card-title ">Parking Management System</h5>

                  <p className="features"> Features </p>

                  <p className="descproject">
                    The Vehicle Parking Management System allows users to
                    register, select parking slots from category-wise options
                    (e.g., Premium , Gold , Platinum , VIP), and enjoy dynamic pricing based on
                    time and category. Upon parking, a digital ticket is
                    generated, which is used for payment upon return via
                    SSLCommerz. Users can view parking history and payment
                    details through a dashboard, while admins can manage
                    categories, monitor system activities, and track revenue.
                    The system ensures secure and efficient parking management.
                  </p>
                  <div className="row Linkall text-center">
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Live Link</button>
                    </div>
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Front Code</button>
                    </div>
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Back Code</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-mango"
            role="tabpanel"
            aria-labelledby="pills-mango-tab"
          >
            <div className="d-flex">
              <div
                id="mangoCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000"
                style={{ flex: 1 }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={mang2}
                      className="d-block w-100"
                      alt="Mango Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={mang1}
                      className="d-block w-100"
                      alt="Mango Carousel 3"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#mangoCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#mangoCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card  prcrd col-md-7">
                <div className="card-body">
                  <h5 className="card-title ">
                    Mango Selling E-Commerce Platform
                  </h5>

                  <p className="features"> Features </p>

                  <p className="descproject">
                    The Mango E-Commerce platform allows users to register,
                    browse mango products, add items to their shopping cart, and
                    securely purchase them via SSL Commerz. Admins can manage
                    products, orders, and users through a centralized dashboard,
                    and update order statuses. Both buyers and admins receive
                    email notifications for order updates and user
                    registrations. The platform uses role-based authentication
                    to secure admin functionalities, with secure payment
                    processing and order tracking available for users.
                  </p>

                  <div className="row Linkall text-center">
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Live Link</button>
                    </div>
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Front Code</button>
                    </div>
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Back Code</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-banking"
            role="tabpanel"
            aria-labelledby="pills-banking-tab"
          >
            <div className="d-flex">
              <div
                id="bankingCarousel"
                className="carousel slide col-md-5"
                data-bs-ride="carousel"
                data-bs-interval="2000" // Auto-play every 3 seconds
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={bn3}
                      className="d-block w-100"
                      alt="Banking Carousel 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bn1}
                      className="d-block w-100"
                      alt="Banking Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bn2}
                      className="d-block w-100"
                      alt="Banking Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bn4}
                      className="d-block w-100"
                      alt="Banking Carousel 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bn5}
                      className="d-block w-100"
                      alt="Banking Carousel 3"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#bankingCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#bankingCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card  prcrd col-md-7">
                <div className="card-body">
                  <h5 className="card-title ">Bank Management System</h5>

                  <p className="features"> Features </p>

                  <p className="descproject">
                    The Bank Management System allows users to register with
                    email verification, deposit/withdraw money with
                    notifications, transfer funds, apply for up to two loans,
                    and declare bankruptcy. Users can track their transaction
                    history, loan status, and account balance through a user
                    dashboard. Admins can manage accounts, approve loans,
                    monitor transactions, and handle bankruptcy cases.
                  </p>

                  <div className="row Linkall text-center">
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Live Link</button>
                    </div>
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Front Code</button>
                    </div>
                    <div className="col-12 col-md-4 mt-3 btndv">
                      <button className="butn">Back Code</button>
                    </div>
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
