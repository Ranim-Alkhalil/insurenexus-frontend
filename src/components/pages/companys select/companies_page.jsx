import React, { useEffect, useState } from "react";
import axios from "axios";
import "./section1.css";
import pic1 from "./photo/pic1.jpg";

import { Box, Button, Rating, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { getSessionId } from "../../../api/SessionIdUtils";

export default function Header() {
  const [images, setImages] = useState(() => {
    const storedImages = localStorage.getItem("images");
    return storedImages ? JSON.parse(storedImages) : {};
  });
  const [options, setOptions] = useState([]);
  const [rating, setRating] = useState(() => {
    const storedRatings = localStorage.getItem("ratings");
    return storedRatings ? JSON.parse(storedRatings) : {};
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/compImg", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then((res) => {
        setImg(res.data.logoData);
      })
      .catch((err) => {
        console.error("Failed to fetch company info", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/insuranceCompanies", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then((res) => {
        console.log("get is success", res.data);
        setOptions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsData = {};
      for (const company of options) {
        try {
          const response = await axios.get(
            "http://localhost:3000/user/compRate",
            {
              headers: { SESSION_ID: getSessionId() },
              params: {
                param1: company,
              },
            }
          );
          ratingsData[company] = response.data.rating;
        } catch (error) {
          console.error(`Error fetching rating `, error);
          ratingsData[company] = null;
        }
      }
      setRating(ratingsData);

      localStorage.setItem("ratings", JSON.stringify(ratingsData));
    };

    if (options.length > 0) {
      fetchRatings();
    }
  }, [options]);
  useEffect(() => {
    const fetchImages = async () => {
      const imageData = {};
      for (const company of options) {
        try {
          const imageResponse = await axios.get(
            "http://localhost:3000/user/compImage",
            {
              headers: { SESSION_ID: getSessionId() },
              params: { param1: company },
            }
          );
          imageData[company] = imageResponse.data.image;
        } catch (error) {
          console.error(`Error fetching image for ${company}`, error);
          imageData[company] = null;
        }
      }
      setImages(imageData);
      localStorage.setItem("images", JSON.stringify(imageData));
    };

    if (options.length > 0) {
      fetchImages();
    }
  }, [options]);
  const sortedOptions = options.slice().sort((a, b) => {
    return rating[b] - rating[a];
  });
  return (
    <div className="container-xxl">
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
              {sortedOptions.map((company, index) => (
                <Button
                  key={index}
                  className="companies_info"
                  component={Link}
                  to={`/company/${encodeURIComponent(company)}`}
                >
                  <Stack flexDirection={"column"} alignItems={"center"}>
                    <Box>
                      {images[company] ? (
                        <img
                          src={images[company]}
                          alt="Company logo"
                          style={{ width: "80px", height: "80px" }}
                        />
                      ) : (
                        <p>No Logo</p>
                      )}
                    </Box>
                    <p className="companies_name">{company}</p>
                    <Rating
                      name={`${company}-rating`}
                      value={rating[company]}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
