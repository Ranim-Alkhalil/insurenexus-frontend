import React, { useState } from "react";

import p10 from "./photo/p10.jpg";
import p8 from "./photo/p8.jpg";
import p11 from "./photo/p11.jpg";
import p12 from "./photo/p12.jpg";

import "./home_page.css";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

export default function Home_page() {
  const navigate = useNavigate();
  return (
    <Stack sx={{ overflowX: "hidden" }}>
      <div className=" home-container ">
        <div className=" p-md-5 section1 mb-4   Home_page d-flex  justify-content-center ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h3 className="display-4 h1style_home fst-italic">
                Explore Leading Insurance Companies{" "}
              </h3>
              <p className="p1style_home my-3">
                Explore Leading Insurance Companies: No matter your interests,
                our collective expertise has you covered
              </p>
              <button
                type="button"
                className="btn customButtonColor"
                onClick={() => navigate("/companiesPage")}
              >
                Insurance Companies{" "}
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
            <div className="col-4 align-items-center  ps-5">
              <img src={p10} className=" img-fluid" />
            </div>
          </div>
        </div>

        <div className="section2">
          <h4 className="h4_style_home">
            {" "}
            No matter your interests <br></br>our collective expertise has you
            covered
          </h4>
        </div>

        <div className="health_section   d-flex mt-5">
          <div>
            <p className="p_style_home">Taking care</p>
            <h5 className="h5style_home">OF YOUR FAMILY</h5>
            <div className="hr_style"></div>
            <p className="p_style_health">
              Recognizing the importance of every detail in shaping family
              well-being, InsureNexus prioritizes crafting insurance plans with
              unparalleled flexibility. Our commitment is to guide you in
              finding the ideal health coverage for your loved ones, ensuring
              affordability without sacrificing quality. We are dedicated to
              providing exceptional service, solidifying our pledge to offer
              comprehensive support throughout your healthcare journey.
            </p>
          </div>
          <div className="col-4 family-img">
            <img src={p8} className="img-fluid " />
          </div>
        </div>

        <div className="car_section d-flex justify-content-center  align-items-center">
          <div className="col-4 car_pic">
            <img src={p11} className=" img-fluid" />
          </div>

          <div>
            <p className="p_style_home">Taking care</p>
            <h5 className="h5style_home">OF YOUR CAR</h5>
            <div className="hr_style"></div>
            <p className="p_style_car">
              InsureNexus, the leading insurance website, offers an invaluable
              opportunity to protect your vehicle. Whether your car is
              luxurious, a powerful SUV, or a reliable family car, InsureNexus
              provides comprehensive car insurance coverage that surpasses any
              other. We offer a comprehensive range of premium services and
              coverage for your utmost convenience.
            </p>
          </div>
        </div>

        <div className="about_us_in_home">
          <div className=" px-4 py-5">
            <h2 className="pb-2 border-bottom text-navy">About us</h2>
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-navy ">
                  Putting your needs first is our priority
                </h2>
                <p className="text-body-secondary">
                  InsureNexus revolutionizes insurance with its comprehensive
                  platform for comparing top providers and accessing expert
                  advice. Our cutting-edge technology seamlessly integrates with
                  leading carriers, offering a digital journey for both
                  consumers and insurers. Committed to fostering positive
                  change, we empower individuals to make informed coverage
                  decisions, shaping a future of insurance that's accessible and
                  transparent.
                </p>
                <button
                  type="button"
                  className="btn about_button  customButtonColor"
                  onClick={() => navigate("/aboutUs")}
                >
                  About us
                </button>
              </div>

              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                      <svg className="bi" width="1px" height="30px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#fff"
                          class="bi bi-alarm-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
                        </svg>
                      </svg>
                    </div>
                    <h4 className="fw-semibold text-body-emphasis mb-0">
                      Time Saving
                    </h4>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                      <svg className="bi" width="1px" height="30px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-emoji-smile"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">
                      Effort Saving{" "}
                    </h4>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="currentColor"
                        class="bi bi-transparency"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269q.546.226 1.144.33l-1.474-1.474q.104.597.33 1.144m2.614.386a5.5 5.5 0 0 0 1.173-.242L4.374 7.91a6 6 0 0 0-.296 1.118zm2.157-.672q.446-.25.838-.576L5.418 6.126a6 6 0 0 0-.587.826zm1.545-1.284q.325-.39.576-.837L6.953 4.83a6 6 0 0 0-.827.587l4.6 4.602Zm1.006-1.822q.183-.562.242-1.172L9.028 4.078q-.58.096-1.118.296l3.823 3.824Zm.186-2.642a5.5 5.5 0 0 0-.33-1.144 5.5 5.5 0 0 0-1.144-.33z" />
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">
                      Transparency
                    </h4>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        class="bi bi-shield-lock"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">
                      Security and Trust{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>{" "}
            <h2 className="pb-2 border-bottom text-navy"></h2>
          </div>
        </div>

        <div className="rating d-flex justify-content-center">
          {" "}
          <div className="rating_section_p">
            <h4 className="rating_title">
              A Transparent Measure of Insurance <br></br>Companies Performance{" "}
            </h4>
            <p className=" p1style_home " style={{ fontFamily: "Yeseva One" }}>
              User ratings offer transparent feedback, empowering informed
              decisions based on collective experiences. They foster trust,
              driving companies to improve and meet customer needs.
            </p>
          </div>
          <div className="rating_img col-4 ">
            <img src={p12} className="p12 " />
          </div>
        </div>
      </div>
    </Stack>
  );
}
