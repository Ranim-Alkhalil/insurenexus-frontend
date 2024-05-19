import React, { useState, useEffect } from "react";
import logo from "./image/logo.jpeg";
import cover from "./image/cover.jpg";
import company from "./image/company.jpg";
import "./design/_company.css";

export default function Companies(props) {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    fetchCompanyInfo("Total Insurance"); //  company name
  }, []);

  const fetchCompanyInfo = async (companyName) => {
    try {
      const response = await fetch(
        `http://localhost:3004/company-info/${companyName}`
      );
      if (response.ok) {
        const data = await response.json();
        setCompanyInfo(data);
      } else {
        console.error(
          "Failed to fetch company information:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching company information:", error);
    }
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>company_page</title>

          {/* for icons*/}
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
            rel="stylesheet"
          />
          {/* FOR BOOTSTRAP*/}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
          />
        </head>

        <body>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  alt="Logo"
                  width="50"
                  height="50"
                  className="image-logo"
                />
                <span style={{ color: "white" }}>InsureNexus</span>
              </a>
            </div>
          </nav>

          <div className="page">
            <div className="cover">
              <img src={cover} alt="" />
            </div>
            <div className="hoeizntal"></div>
            <div className="compay_image">
              {companyInfo ? (
                <img src={companyInfo.logo} alt="Company Logo" />
              ) : (
                <p>Loading logo...</p>
              )}

              <caption>
                <div className="c_name">
                  <span>{companyInfo ? companyInfo.name : "Company Name"}</span>

                  <div className="box_info">
                    {companyInfo ? (
                      <>
                        <ul>
                          <li>
                            <strong>Description:</strong>{" "}
                            {companyInfo.description}
                          </li>
                          <li>
                            <strong>Phone Number:</strong>{" "}
                            {companyInfo.phone_number}
                          </li>
                          <li>
                            <strong>Email:</strong> {companyInfo.email}
                          </li>
                          <li>
                            <strong>Address:</strong> {companyInfo.address}
                          </li>
                          <li>
                            <strong>Fax:</strong> {companyInfo.fax}
                          </li>
                          <li>
                            <strong>Mail:</strong> {companyInfo.mail}
                          </li>
                        </ul>
                      </>
                    ) : (
                      "Loading..."
                    )}
                  </div>
                </div>
              </caption>
            </div>
            <div className="cards">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <i className="ri-hospital-line"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Health</h5>
                      {/*  service name */}
                      {companyInfo ? (
                        <p>{companyInfo.service_name}</p>
                      ) : (
                        <p>Loading service name...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <i className="ri-car-line"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Cars</h5>
                      {/* code for my content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
}
