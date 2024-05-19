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
      <section className="container">
        <div className="center_div">
          <h3 className="h3style">Experience the thrill of choice!</h3>
          <p className="p1style">
            Explore our website, where the best insurance companies unite under
            one roof for you to select from.
          </p>
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
