import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import n1 from "../../Assets/Images/news.png";
import "../../Assets/Styles/Checkout.scss";

const flex = {
  width: "440px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};
function News() {
  return (
    <Box id="NewsProduct">
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, mt: 20, mb: 10 }}
      >
        Latest News
      </Typography>
      <Box sx={{ width: "80%", margin: "auto" }}>
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
                ...flex,
              }}
            >
              <Box>
                <img src={n1} />
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
                ...flex,
              }}
            >
              <Box>
                <img src={n1} />
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
                ...flex,
              }}
            >
              <Box>
                <img src={n1} />
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
                ...flex,
              }}
            >
              <Box>
                <img src={n1} />
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
                ...flex,
              }}
            >
              <Box>
                <img src={n1} />
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
    </Box>
  );
}

export default News;
