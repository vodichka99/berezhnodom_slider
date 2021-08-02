<template>
  <BHeader />
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
    <div class="swiper-pagination" ref='pagination'></div>
    <div class="swiper-scrollbar"></div>
    <swiper-slide
      v-for="(content, index) in slidesContent"
      :data-title="content.name"
      :key="index"
    >
      <div class="darknes">
        <div
          class="background"
          :style="`background-image: url(${content.background});`"
        ></div>
      </div>
      <div class="slider-content">
        <div class="slider-content__wrapper">
          <h2>{{ content.name }}</h2>
          <p>
            {{ content.descr }}
          </p>
          <div class="other-info">
            <span class="price">от {{ content.price }} </span>
            <div class="square">S {{ content.square }} м2</div>
          </div>
          <router-link :to="{ name: 'project', params: { id: content.id } }">
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

import BHeader from "@/components/BHeader";
import BFooter from "@/components/BFooter";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";


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
  },
  data() {
    return {
      slidesContent: this.$store.state.projectsContent,
      hovered: false,
    };
  },
  methods: {
    saveContent(content) {
      localStorage.setItem("content", JSON.stringify(content));
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
$themeColor: #007aff !default;
$colors: (
  'white': #ffffff,
  'black': #000000,
) !default;


:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
  &.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  &:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  &:after {
    content: 'prev';
  }
  left: 10px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  &:after {
    content: 'next';
  }
  right: 10px;
  left: auto;
}

@each $navColorName, $navColorValue in $colors {
  .swiper-button-prev,
  .swiper-button-next {
    &.swiper-button-#{'' + $navColorName} {
      --swiper-navigation-color: #{'' + $navColorValue};
    }
  }
}
.swiper-button-lock {
  display: none;
}

:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  &.swiper-pagination-hidden {
    opacity: 0;
  }
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
  .swiper-pagination-bullet {
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullet-active {
    transform: scale(1);
  }
  .swiper-pagination-bullet-active-main {
    transform: scale(1);
  }
  .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
  }
  .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
  }
  .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
  }
  .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
  }
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 50%;
  background: #000;
  opacity: 0.2;
  @at-root button#{&} {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    appearance: none;
  }
  .swiper-pagination-clickable & {
    cursor: pointer;
  }
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-container-vertical {
  > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
    .swiper-pagination-bullet {
      margin: 6px 0;
      display: block;
    }
    &.swiper-pagination-bullets-dynamic {
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      .swiper-pagination-bullet {
        display: inline-block;
        transition: 200ms transform, 200ms top;
      }
    }
  }
}
.swiper-container-horizontal {
  > .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      margin: 0 4px;
    }
    &.swiper-pagination-bullets-dynamic {
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      .swiper-pagination-bullet {
        transition: 200ms transform, 200ms left;
      }
    }
  }
  &.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
  }
}
/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
  }
  .swiper-container-rtl & .swiper-pagination-progressbar-fill {
    transform-origin: right top;
  }
  .swiper-container-horizontal > &,
  .swiper-container-vertical > &.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }
  .swiper-container-vertical > &,
  .swiper-container-horizontal > &.swiper-pagination-progressbar-opposite {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }
}
@each $paginationColorName, $paginationColorValue in $colors {
  .swiper-pagination-#{'' + $paginationColorName} {
    --swiper-pagination-color: #{'' + $paginationColorValue};
  }
}
.swiper-pagination-lock {
  display: none;
}

/* Scrollbar */
.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, 0.1);
  .swiper-container-horizontal > & {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%;
  }
  .swiper-container-vertical > & {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%;
  }
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}


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
  height: 38px;
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

.darknes {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
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
}

.swiper-container-vertical > .swiper-pagination-bullets {
  top: 50%  !important;
  right: auto  !important;
}
.swiper-pagination {
  height: 60% !important;
  right: 0 !important;
  left: 100px !important;
  z-index: 9999 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-around !important;
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
}

.swiper-scrollbar-drag {
  background-color: white !important;
}

.slider-content__wrapper {
  width: 50%;
  margin: auto;
  position: relative;
  top: 37%;
  transform: translateY(-30%);
  z-index: 101;
  text-align: center;
}

.slider-content__wrapper > h2 {
  color: white;
  padding: 0;
  margin: 10px 0;
  font-size: 64px;
  font-weight: 700;
  font-family: "geometria";
  // text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
}
.slider-content__wrapper > p {
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
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: none !important;
}
</style>
