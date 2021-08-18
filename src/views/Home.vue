<template>
  <BHeader @openModal="openModal" />
  <div class="request-modal-background" v-show="modalActive"></div>
  <div class="request-modal" v-show="modalActive">
    <div class="request-modal-close" @click="modalActive = false">
      <img src="@/assets/icons/close-icon.svg" alt="" />
    </div>
    <span class="request-modal-title">Заказать звонок</span>
    <input class="request-modal-phone request-modal-input" placeholder="НОМЕР ТЕЛЕФОНА" />
    <input type="email" class="request-modal-email request-modal-input" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" />
    <textarea class="request-modal-text request-modal-input" placeholder="СООБЩЕНИЕ"></textarea>
    <button class="request-modal-button">Заказать звонок</button>
  </div>
  <swiper
    effect="fade"
    :grabCursor="false"
    :centeredSlides="false"
    :slidesPerView="1"
    direction="vertical"
    :loop="false"
    :speed="800"
    :clickable="true"
    mousewheel
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ clickable: true, el: '.swiper-pagination' }"
    :scrollbar="{ hide: false, el: '.swiper-scrollbar' }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <div class="swiper-button-prev">
      <span class="arrow-up"
        ><img src="@/assets/icons/arrow-up.svg" alt="<"
      /></span>
    </div>
    <div class="swiper-button-next">
      <span class="arrow-down"
        ><img src="@/assets/icons/arrow-down.svg" alt=">"
      /></span>
    </div>
    <div class="swiper-pagination" ref="pagination"></div>
    <div class="swiper-scrollbar"></div>
    <swiper-slide
      v-for="(content, index) in slidesContent"
      :data-title="content.name"
      :key="index"
    >
      <div class="darkness">
        <div
          class="background"
          :style="`background-image: url(${content.background});`"
        ></div>
      </div>
      <div class="slider-content">
        <div class="slider-content-wrapper">
          <h2>{{ content.name }}</h2>
          <p>
            {{ content.descr }}
          </p>
          <div class="other-info">
            <span class="price">от {{ content.price }} </span>
            <div class="square">S {{ content.square }} м2</div>
          </div>
          <router-link
            class="about-link"
            :to="{ name: 'project', params: { id: content.id } }"
          >
            <button
              class="other-button"
              @click="saveContent(content)"
              @mouseover="hovered = true"
              @mouseout="hovered = false"
            >
              <span> подробнее о проекте </span>
              <img
                v-if="!hovered"
                class="arrow-right"
                src="@/assets/icons/arrow-right.svg"
                alt=">"
              />
              <img
                v-else
                class="arrow-right"
                src="@/assets/icons/arrow-right-dark.svg"
                alt=">"
              />
            </button>
          </router-link>
          <router-link
            class="about-link-mobile"
            :to="{ name: 'project', params: { id: content.id } }"
          >
            <button class="other-button" @click="saveContent(content)">
              <span> подробнее </span>
              <img
                v-if="!hovered"
                class="arrow-right"
                src="@/assets/icons/arrow-right.svg"
                alt=">"
              />
              <img
                v-else
                class="arrow-right"
                src="@/assets/icons/arrow-right-dark.svg"
                alt=">"
              />
            </button>
          </router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <BFooter />
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
} from "swiper";

// import BModal from "@/components/BModal";
import BHeader from "@/components/BHeader";
import BFooter from "@/components/BFooter";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    BHeader,
    BFooter,
    // BModal
  },
  data() {
    return {
      slidesContent: this.$store.state.projectsContent,
      hovered: false,
      mobileScreen: false,
      modalActive: false
    };
  },
  methods: {
    closeModal() {
      this.modalActive = false
      console.log(this.modalActive);
    },
    openModal() {
      this.modalActive = true
      console.log(this.modalActive);
    },
    saveContent(content) {
      localStorage.setItem("content", JSON.stringify(content));
    },
    onSwiper(swiper) {
      const bullets = swiper.pagination.bullets;
      bullets.forEach((item, index) => {
        const prevBulletIndex = index > 0 ? index - 1 : bullets.length - 1;
        const nextBulletIndex = index < bullets.length - 1 ? index + 1 : 0;
        const afterNextBulletIndex =
          nextBulletIndex < bullets.length - 1 ? nextBulletIndex + 1 : 0;
        if (item.classList.contains("swiper-pagination-bullet-active")) {
          bullets[prevBulletIndex].classList.add(
            "swiper-pagination-bullet-prev"
          );
          bullets[nextBulletIndex].classList.add(
            "swiper-pagination-bullet-next"
          );
          bullets[afterNextBulletIndex].classList.add(
            "swiper-pagination-bullet-afternext"
          );
        }
      });
    },
    onSlideChange(swiper) {
      const bullets = swiper.pagination.bullets;
      bullets.forEach((item, index) => {
        const prevBulletIndex = index > 0 ? index - 1 : bullets.length - 1;
        const nextBulletIndex = index < bullets.length - 1 ? index + 1 : 0;
        const afterNextBulletIndex =
          nextBulletIndex < bullets.length - 1 ? nextBulletIndex + 1 : 0;
        if(index != prevBulletIndex){
          item.classList.remove('swiper-pagination-bullet-prev')
        }
        if(index != nextBulletIndex){
          item.classList.remove('swiper-pagination-bullet-next')
        }
        if(index != afterNextBulletIndex){
          item.classList.remove('swiper-pagination-bullet-afternext')
        }
      })
      bullets.forEach((item, index) => {
        const prevBulletIndex = index > 0 ? index - 1 : bullets.length - 1;
        const nextBulletIndex = index < bullets.length - 1 ? index + 1 : 0;
        const afterNextBulletIndex =
          nextBulletIndex < bullets.length - 1 ? nextBulletIndex + 1 : 0;
        if (item.classList.contains("swiper-pagination-bullet-active")) {
          bullets[prevBulletIndex].classList.add(
            "swiper-pagination-bullet-prev"
          );
          bullets[nextBulletIndex].classList.add(
            "swiper-pagination-bullet-next"
          );
          bullets[afterNextBulletIndex].classList.add(
            "swiper-pagination-bullet-afternext"
          );
        }
      });
    },
  },
  mounted() {
    this.$refs.pagination.childNodes.forEach((item, index) => {
      item.innerHTML = this.slidesContent[index].name;
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/style/swiper.scss";

@font-face {
  font-family: "geometria";
  font-weight: 300;
  src: url("../assets/fonts/geometria/Geometria-Light.ttf") format("truetype");
}
@font-face {
  font-family: "geometria";
  font-weight: 400;
  src: url("../assets/fonts/geometria/Geometria.ttf") format("truetype");
}
@font-face {
  font-family: "geometria";
  font-weight: 500;
  src: url("../assets/fonts/geometria/Geometria-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "geometria";
  font-weight: 700;
  src: url("../assets/fonts/geometria/Geometria-Bold.ttf") format("truetype");
}
.request-modal {
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  z-index: 30;
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  &-background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 29;
    top: 0;
    background-color: black;
    opacity: 0.4;
  }
  &-button{
    width: 100%;
    height: 60px;
    background-color: #222222;
    border: none;
    color: white;
    text-transform: uppercase;
    font-family: 'geometria';
    cursor: pointer;
  }
  &-input{
    box-sizing: border-box;
    padding-left: 25px;
    font-size: 11px;
    margin-top: 20px;
    border: 1px solid #222;
    box-shadow: none;
  }
  &-phone,
  &-email{
    height: 60px;
    font-family: 'geometria';
  }
  &-text{
    padding-top: 25px;
    height: 150px;
    margin-bottom: 20px;
    font-family: 'geometria';
  }
  &-title{
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
  }
  &-close{
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }
}
#app {
  width: 100%;
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "geometria";
  color: white;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

body {
  background: #eee;
  font-family: "geometria";
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.other-info {
  color: white;
  margin: auto;
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
  font-family: "geometria";
  .price {
    display: inline;
    margin-right: 40px;
  }
  .square {
    display: inline;
  }
}
.header {
  width: 100%;
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition-duration: 1000ms;
  transition-property: opacity;
  &-prev {
    opacity: 0 !important;
  }
  &-active {
    z-index: 1;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

.darkness {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.background {
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

.slider-content {
  position: absolute;
  z-index: 101;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    p {
      text-align: start;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      width: 100%;
      margin: 0 !important;
    }
    h2 {
      font-weight: 700;
      font-size: 40px !important;
      text-align: start;
      width: 70%;
    }
    &-wrapper {
      width: 100% !important;
      margin: 0 50px !important;
    }
    .other-info {
      display: none;
    }
    .other-button {
      margin: 25px 0;
      padding: 0;
    }
  }
}

.swiper-container-vertical > .swiper-pagination-bullets {
  top: 50% !important;
  right: auto !important;
}
.swiper-pagination {
  height: 60% !important;
  right: 0 !important;
  left: 100px !important;
  z-index: 9999 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-around !important;
  @media (max-width: 768px) {
    left: 50px !important;
  }
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  cursor: pointer !important;
  color: white !important;
  width: 150px !important;
  background: none !important;
  text-align: left !important;
  margin: 0 !important;
  line-height: 10px !important;
  @media (max-width: 768px) {
    display: none !important;
    &-prev{
      display: block !important;
      position: absolute;
      top: 5%;
    }
    &-next{
      display: block !important;
      position: absolute;
      bottom: 20%;
    }
    &-afternext{
      display: block !important;
      position: absolute;
      bottom: 0;
    }
  }
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  opacity: 0.5 !important;
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet-active {
  opacity: 1 !important;
}

.swiper-container-vertical > .swiper-scrollbar {
  right: auto !important;
  left: 60px !important;
  height: 60% !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: 2px !important;
  @media (max-width: 768px) {
    left: 25px !important;
    height: 63% !important;
    // top: 30% !important;
  }
}

.swiper-scrollbar-drag {
  background-color: white !important;
}

.slider-content-wrapper {
  width: 50%;
  margin: auto;
  position: relative;
  top: 37%;
  transform: translateY(-30%);
  z-index: 101;
  text-align: center;
}

.slider-content-wrapper > h2 {
  color: white;
  padding: 0;
  margin: 10px 0;
  font-size: 64px;
  font-weight: 700;
  font-family: "geometria";
  // text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
}
.slider-content-wrapper > p {
  color: white;
  font-size: 18px;
  line-height: 30px;
  font-family: "geometria";
  width: 80%;
  margin: auto;
}

.other-button {
  .arrow-right {
    width: 20px;
    height: 11px;
    margin-left: 7px;
  }
  font-family: "geometria";
  font-weight: 500;
  border: 1px solid white;
  padding: 18px 20px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-size: 11px;
  display: flex;
  align-items: center;
  margin: 7% auto 0;
  text-transform: uppercase;
  background: none;
}

.other-button:hover {
  background: white;
  color: black;
}
.swiper-button-next {
  left: auto !important;
  right: 60px !important;
  background: #000000 !important;
  top: 53% !important;
}

.swiper-button-prev {
  top: 44% !important;
  left: auto !important;
  right: 60px !important;
}

.swiper-button-next,
.swiper-button-prev {
  width: 54px !important;
  height: 54px !important;
  background: #ffffff;
  // transform: rotate(-90deg);
  transition: all 0.3s ease !important;
  @media (max-width: 768px) {
    display: none !important;
  }
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: none !important;
}
.about-link {
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}
.about-link-mobile {
  display: none;
  @media (max-width: 768px) {
    display: block;
    .other-button {
      border: none;
      img {
        margin-left: 15px;
      }
    }
  }
}
</style>
