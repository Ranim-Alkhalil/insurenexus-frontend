import React, { useEffect, useState } from "react";
import axios from "axios";
import "./section1.css";
import pic1 from "./photo/pic1.jpg";

export default function Header() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/companies/insuranceCompanies")
      .then((res) => {
        console.log("get is success", res.data);
        setOptions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <section className="shadow-section">
        <div className=" center_div">
          <h3 className="h3style pt-5 pb-5">
            Discover trusted <br></br>insurance company!
          </h3>
        </div>
      </section>

      <section className="section2">
        <p className="p2style mt-5">
          Explore top-rated insurance providers<br></br> and find the perfect
          match for your needs{" "}
        </p>

        <div className="companies_section">
          {options.length === 0 ? (
            <p className="companies_name">Loading...</p>
          ) : (
            <div className="grid-container">
              {options.map((company, index) => (
                <div key={index} className="companies_info">
                  <p className="companies_name">{company}</p>
                  <button type="button" className="btn customButtonColor">
                    go to company
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
