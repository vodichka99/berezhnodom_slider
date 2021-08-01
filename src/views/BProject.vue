<template>
  <div class="project-page">
    <div class="info-block">
      <div class="main-info">
        <button type="button" class="button-back">
          <img src="@/assets/icons/arrow-left.svg" alt="" />вернуться назад
        </button>
        <h3 class="main-info-title">{{ content.name }}</h3>
        <p class="main-info-descr">{{ content.descr }}</p>
        <span class="main-info-price">{{ content.fullPrice }} ₽</span>
      </div>
      <div class="parameters">
        <span class="parameters-title"></span>
        <div class="parameters-block">
          <div class="parameters-block-item">
            <img src="@/assets/icons/total-area-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.totalArea }} м2
              </span>
              <span class="parameters-block-parameter">Общая площадь</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/living-area-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.livingArea }} м2
              </span>
              <span class="parameters-block-parameter">Жилая площадь</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/floors-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value"> {{ content.floors }} </span>
              <span class="parameters-block-parameter">Этажи</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/bathroom-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.bathrooms }}
              </span>
              <span class="parameters-block-parameter">Ванные комнаты</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/terrace-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.terraces }}
              </span>
              <span class="parameters-block-parameter">Террасы</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/water-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value"> {{ content.pools }} </span>
              <span class="parameters-block-parameter">Бассейны</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery-block"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: this.getContent(),
    };
  },
  methods: {
    getContent() {
      return JSON.parse(localStorage.getItem("content"));
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.project-page {
  width: 100%;
  height: 100%;
  display: flex;
  .info-block {
    width: 40%;
    height: 100%;
    background: white;
  }
  .parameters {
    height: 55%;
    &-block {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: repeat(3, 1fr);
    }
  }
  .main-info{
    height: 45%;
  }
}
.gallery-block {
  width: 60%;
  height: 100%;
  background: grey;
}
</style>
