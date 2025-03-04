import React from "react";

export const Project = () => {
  return (
    <div className="container projectSec">
      <h3> Projects</h3>
      <h2>My works that I did for practise</h2>

      <div className="">
      <div className="container mt-4">
  {/* Tabs Navigation */}
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
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
        className="nav-link"
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
        className="nav-link"
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

  {/* Tab Content */}
  <div className="tab-content" id="pills-tabContent">
    {/* Parking Management Tab */}
    <div
      className="tab-pane fade show active"
      id="pills-parking"
      role="tabpanel"
      aria-labelledby="pills-parking-tab"
    >
      <div className="card-group">
        <div className="card">
          {/* Carousel inside Card (No text or card body) */}
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://via.placeholder.com/150"
                  className="d-block w-100"
                  alt="Parking Carousel 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/150"
                  className="d-block w-100"
                  alt="Parking Carousel 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/150"
                  className="d-block w-100"
                  alt="Parking Carousel 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Parking Card 2 with text */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Parking Card 2"
          />
          <div className="card-body">
            <h5 className="card-title">Parking Card 2</h5>
            <p className="card-text">Details of vehicle parking, pricing, and ticket generation.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Mango Selling Tab */}
    <div
      className="tab-pane fade"
      id="pills-mango"
      role="tabpanel"
      aria-labelledby="pills-mango-tab"
    >
      <div className="card-group">
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Mango Card 1"
          />
          <div className="card-body">
            <h5 className="card-title">Mango Card 1</h5>
            <p className="card-text">Details about Mango Selling including varieties and pricing.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Mango Card 2"
          />
          <div className="card-body">
            <h5 className="card-title">Mango Card 2</h5>
            <p className="card-text">Information on mango selling strategies and benefits for sellers.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Banking Management Tab */}
    <div
      className="tab-pane fade"
      id="pills-banking"
      role="tabpanel"
      aria-labelledby="pills-banking-tab"
    >
      <div className="card-group">
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Banking Card 1"
          />
          <div className="card-body">
            <h5 className="card-title">Banking Card 1</h5>
            <p className="card-text">Description of banking management features like account management.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Banking Card 2"
          />
          <div className="card-body">
            <h5 className="card-title">Banking Card 2</h5>
            <p className="card-text">Details about transactions, balance check, and security features.</p>
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
