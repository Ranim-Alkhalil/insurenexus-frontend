import {
  Autocomplete,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSessionId } from "../../../../api/SessionIdUtils";
import { enqueueSnackbar } from "notistack";

export default function Rate(props) {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [value7, setValue7] = useState(null);
  const [comment, setComment] = useState(null);
  const [company_name, setcompany_name] = useState(null);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/insuranceComp", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setOptions(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, []);
  const handleAdd = () => {
    axios
      .post(
        "http://localhost:3000/user/rate",
        {
          company_name: company_name,
          q1: "1. How would you rate the clarity of the insurance policy terms and conditions?",
          a1: value1,
          q2: "2. How satisfied are you with the claims process of the insurance company?",
          a2: value2,
          q3: "3. How would you rate the overall value for money provided by this insurance company?",
          a3: value3,
          q4: "4. How satisfied are you with the coverage options offered by the insurance company?",
          a4: value4,
          q5: "5. How would you rate the ease of filing a claim with this insurance company?",
          a5: value5,
          q6: "6. How satisfied are you with the speed of claim processing by the insurance company?",
          a6: value6,
          q7: "7. How satisfied are you with the customer service provided by the insurance company?",
          a7: value7,
          comment: comment,
        },
        {
          headers: { SESSION_ID: getSessionId() },
        }
      )
      .then((response) => {
        console.log("Rating added successfully", response.data);
        setValue1(null);
        setValue2(null);
        setValue3(null);
        setValue4(null);
        setValue5(null);
        setValue6(null);
        setValue7(null);
        setComment(null);
        enqueueSnackbar("User Added to ", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error adding", error);
        enqueueSnackbar("Failed to Add ", {
          variant: "error",
        });
      });
  };
  return (
    <>
      <Stack
        flexDirection={"column"}
        height={"100%"}
        width="100%"
        gap={0}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        p={3}
      >
        <Typography variant="h4" color={"primary"} mb={3}>
          Choose company
        </Typography>
        <Autocomplete
          value={company_name}
          onChange={(event, newValue) => {
            setcompany_name(newValue);
          }}
          sx={{ width: 350 }}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Target Insurance Compay"
              variant="outlined"
              required
            />
          )}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        height={"100%"}
        width="100%"
        gap={0}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Stack
          flexDirection={"column"}
          height={"100%"}
          width="50%"
          gap={2}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          p={3}
        >
          <Typography variant="h6" color={"primary"}>
            Answer These Questions
          </Typography>
          <Typography>
            1. How would you rate the clarity of the insurance policy terms and
            conditions?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value1}
            onChange={(event, newValue) => {
              setValue1(newValue);
            }}
          />
          <Typography>
            2. How satisfied are you with the claims process of the insurance
            company?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
          />
          <Typography>
            3. How would you rate the overall value for money provided by this
            insurance company?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value3}
            onChange={(event, newValue) => {
              setValue3(newValue);
            }}
          />
          <Typography>
            4. How satisfied are you with the coverage options offered by the
            insurance company?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value4}
            onChange={(event, newValue) => {
              setValue4(newValue);
            }}
          />
          <Typography>
            5. How would you rate the ease of filing a claim with this insurance
            company?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value5}
            onChange={(event, newValue) => {
              setValue5(newValue);
            }}
          />
          <Typography>
            6. How satisfied are you with the speed of claim processing by the
            insurance company?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value6}
            onChange={(event, newValue) => {
              setValue6(newValue);
            }}
          />
          <Typography>
            7. How satisfied are you with the customer service provided by the
            insurance company?
          </Typography>
          <Rating
            disabled={company_name == null}
            name="simple-controlled"
            value={value7}
            onChange={(event, newValue) => {
              setValue7(newValue);
            }}
          />
        </Stack>
        <Stack
          flexDirection={"column"}
          height={"100%"}
          width="50%"
          gap={3}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          p={2}
        >
          <Typography variant="h6" color={"primary"}>
            Write your thoughts on the company
          </Typography>

          <TextField
            id="comment"
            label="comment"
            disabled={company_name == null}
            multiline
            rows={4}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            sx={{ width: "400px" }}
          />
          <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
