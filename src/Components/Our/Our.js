import { Typography, Box } from "@mui/material";
import m from "../../Assets/Images/,.png";
import React from "react";
import "../../Assets/Styles/Checkout.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const flexx = {
  width: "440px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

function Our() {
  return (
    <Box id="O" sx={{ width: "80%", margin: "auto" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, mt: 20, mb: 10 }}
      >
        What Our Clients Say
      </Typography>
      <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><img class="pagination-bullet"/></span>'
            );
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="border">
          <Box
            sx={{
              ...flexx,
            }}
          >
            <Box>
              <img src={m} />
            </Box>
            <Typography variant="p" color={"secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
              nisl volutpat at laoreet.
            </Typography>
            <Box>
              <Typography variant="h6">Guy Hawkins</Typography>
              <Typography variant="subtitle1" color={"secondary"}>
                CEO, Founder
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              ...flexx,
            }}
          >
            <Box>
              <img src={m} />
            </Box>
            <Typography variant="p" color={"secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
              nisl volutpat at laoreet.
            </Typography>
            <Box>
              <Typography variant="h6">Guy Hawkins</Typography>
              <Typography variant="subtitle1" color={"secondary"}>
                CEO, Founder
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              ...flexx,
            }}
          >
            <Box>
              <img src={m} />
            </Box>
            <Typography variant="p" color={"secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
              nisl volutpat at laoreet.
            </Typography>
            <Box>
              <Typography variant="h6">Guy Hawkins</Typography>
              <Typography variant="subtitle1" color={"secondary"}>
                CEO, Founder
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              ...flexx,
            }}
          >
            <Box>
              <img src={m} />
            </Box>
            <Typography variant="p" color={"secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
              nisl volutpat at laoreet.
            </Typography>
            <Box>
              <Typography variant="h6">Guy Hawkins</Typography>
              <Typography variant="subtitle1" color={"secondary"}>
                CEO, Founder
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              ...flexx,
            }}
          >
            <Box>
              <img src={m} />
            </Box>
            <Typography variant="p" color={"secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
              nisl volutpat at laoreet.
            </Typography>
            <Box>
              <Typography variant="h6">Guy Hawkins</Typography>
              <Typography variant="subtitle1" color={"secondary"}>
                CEO, Founder
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Our;
