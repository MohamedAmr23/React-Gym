import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
const ExerciseVideos = ({exerciseVideos,name}) => {
  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" textAlign="center">
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "20px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        marginBottom="80px"
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}{" "}
                {item.video.channelName.length < 30 ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "red",
                      opacity: "0.3",
                    }}
                  >
                    (channel)
                  </span>
                ) : (
                  ""
                )}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos


