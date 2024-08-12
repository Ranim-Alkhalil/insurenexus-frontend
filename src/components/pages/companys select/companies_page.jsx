import React, { useEffect, useState } from "react";
import axios from "axios";
import "./section1.css";

import { Box, Button, Rating, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { getSessionId } from "../../../api/SessionIdUtils";
import Footer from "../footer_section/Footer_pages";

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
      .get("http://localhost:3000/user/compImage", {})
      .then((res) => {
        setImg(res.data.logoData);
      })
      .catch((err) => {
        console.error("Failed to fetch company info", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/insuranceCompanies")
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
    <Stack sx={{ overflowX: "hidden" }}>
      <section className="shadow-section">
        <div className=" center_div">
          <h3 className="h3style pt-5 pb-5">
            Discover trusted <br></br>insurance companies!
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
              {sortedOptions.map((company, index) => (
                <Button
                  key={index}
                  className="companies_info"
                  component={Link}
                  to={`/company/${encodeURIComponent(company)}`}
                >
                  <Stack flexDirection={"column"} alignItems={"center"}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      height="130px"
                    >
                      {images[company] ? (
                        <img
                          src={images[company]}
                          alt="Company logo"
                          s
                          style={{
                            maxWidth: "150px",
                            maxHeight: "90px",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                          }}
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
      <Footer></Footer>
    </Stack>
  );
}
