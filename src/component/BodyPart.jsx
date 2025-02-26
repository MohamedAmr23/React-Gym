import React, { Fragment } from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Fragment>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "4px solid #FF2625" : "",
          background: "#fff",
          borderBottomLeftRadius: "20px",
          width: "270px",
          height: "282px",
          cursor: "pointer",
          gap: "47px",
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({top:1800,left:1000,behavior:'smooth'})
        }}

      >
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: "40px", height: "40px" }}
        />
        <Typography
          fontSize="24px"
          fontWeight="bold"
          fontFamily="Alegreya"
          color="#3A1212"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Stack>
    </Fragment>
  );
}

export default BodyPart
