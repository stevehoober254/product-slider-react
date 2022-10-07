import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Product from "./Product";
import Product2 from '../assets/2.png';
import Product3 from '../assets/3.png';


export default function ProductSlider() {
  const products = [
    {
        id:0,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product3
    },
    {
        id:1,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product2
    },
    {
        id:2,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product3
    },
    {
        id:3,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product2
    },
    {
        id:4,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product3
    },
    {
        id:5,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product2
    },
    {
        id:6,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product2
    },
    {
        id:7,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product3
    },
    {
        id:8,
        title:"C72 ARX ty12",
        price: 'Ksh 12000',
        imgSrc: Product2
    }
  ];
  return (
    <div className="container py-4 p-5 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        className={"mySwiper"}
        slidesPerView={5}
        pagination={{ clickable: true }}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:10
          },
          480:{
            slidesPerView:2,
            spaceBetween:10
          },
          768:{
            slidesPerView:3,
            spaceBetween:15
          },
          1024:{
            slidesPerView:4,
            spaceBetween:15
          },
          1280:{
            slidesPerView:5,
            spaceBetween:30
          },
        }}
      >
        {products.map(prod => (
            <SwiperSlide key={prod.id} className="py-5">
            <Product data={prod}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
