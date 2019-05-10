<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(s, index) of slides" :key="index">
        <img :src="s.img" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      slides: [
        {
          img: 'https://via.placeholder.com/1600x480',
          text: '1'
        }, {
          img: 'https://via.placeholder.com/1600x480',
          text: '2'
        }, {
          img: 'https://via.placeholder.com/1600x480',
          text: '3'
        }, {
          img: 'https://via.placeholder.com/1600x480',
          text: '4'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style>
  .swiper-slide img {
    object-fit: cover;
    width: 100%;
  }
</style>
