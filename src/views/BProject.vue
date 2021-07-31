<template>
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
    <div class="swiper-pagination"></div>
    <div class="swiper-scrollbar"></div>
    <swiper-slide
      v-for="(content, index) in slidesContent"
      :data-title="content.name"
      :key="index"
    >
      <div class="darknes">
        <div
          class="background"
          :style="`background-image: url(${query.content.background});`"
        ></div>
      </div>
      <div class="slider-content">
        <div class="slider-content__wrapper">
          <h2>{{ query.content.name }}</h2>
          <p>
            {{ query.content.descr }}
          </p>
          <div class="other-info">
            <span class="price">от {{ query.content.price }} </span>
            <div class="square">S {{ query.content.square }} м2</div>
          </div>
          <router-link :to="{ name: 'project', params: { id: query.content.id }}">
            <button class="other-button">
              <span> подробнее о проекте </span>
              <img
                class="arrow-right"
                src="@/assets/icons/arrow-right.svg"
                alt=">"
              />
            </button>
          </router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>