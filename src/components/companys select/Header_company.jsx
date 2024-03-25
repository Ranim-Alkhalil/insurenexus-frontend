import React from "react";
import "./section1.css";
import pic1 from "./photo/pic1.jpg";

export default function Header() {
  return (
    <>
      <section className="container">
        <div className="center_div">
          <h3 className="h3style">Experience the thrill of choice!</h3>
          <p className="p1style">
            Explore our website, where the best insurance companies unite under
            one roof for you to select from.
          </p>
          <div className="buttons">
            <button type="button" className="btn customButtonColor">
              Read more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CBB26B"
                className="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="pic-container">
          <img src={pic1} className="pic" alt="Insurance" />
        </div>
      </section>

      <section className="section2">
        <hr className="hr_style" />

        <h4 className="h4_style"> Best Health Insurance Companies</h4>
        <p className="p2style">
          see which insurance companies ranked the highest on Insure
        </p>
        <div>
          <nav className="navbar navbar-light d-flex bg-light justify-content-center align-items-center custom-navbar">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button
              className="btn btn-outline-success my-2 my-sm-0 custom-button"
              type="submit"
            >
              Search{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CBB26B"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </nav>
        </div>
        <div className="companies_section">
          <div className="companies_info"></div>
          <div className="companies_info"></div>
          <div className="companies_info"></div>
        </div>
        <div className="companies_section">
          <div className="companies_info"></div>
          <div className="companies_info"></div>
          <div className="companies_info"></div>
        </div>
        <div className="companies_section">
          <div className="companies_info"></div>
          <div className="companies_info"></div>
          <div className="companies_info"></div>
        </div>
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
