"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import USPCard from "./USPCard";
import { Theme } from "@/lib/theme";
import { uspItems } from "@/data/uspItems";

export default function USPSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    // <div style={{ backgroundColor: Theme.colors.gray300 }}>
      <div className={`w-full ${Theme.backgroundColors.gradientGray} ${Theme.animations.gradient} py-1 px-1 relative overflow-hidden`}>
      <section className="max-w-8xl mx-auto px-3 py-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${Theme.typography.fontSize["5xl"]} ${Theme.typography.fontWeight.bold} ${Theme.textColors.black} mb-10 text-center`}
        >
          Rabta – Your Silent IT Backbone
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-20 pb-4"
          style={{ overflow: 'visible' }}
        >
          <div className="overflow-x-hidden" style={{ overflowY: 'visible', paddingTop: '20px' }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".usp-pagination",
              }}
              onSwiper={setSwiperInstance}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10"
              style={{ overflow: 'visible' }}
            >
              {uspItems.map((item, index) => (
                <SwiperSlide key={index} style={{ overflow: 'visible' }}>
                  <motion.div
                    whileHover={{ 
                      y: -15,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ willChange: 'transform' }}
                  >
                    <USPCard title={item.title} description={item.description} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        <div className="usp-pagination flex justify-center mt-6"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperInstance?.slidePrev()}
            className={`w-12 h-12 border border-black/30 ${Theme.borderRadius.full} flex items-center justify-center ${Theme.textColors.black} hover:bg-black/10 transition`}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperInstance?.slideNext()}
            className={`w-12 h-12 border border-black/30 ${Theme.borderRadius.full} flex items-center justify-center ${Theme.textColors.black} hover:bg-black/10 transition`}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}