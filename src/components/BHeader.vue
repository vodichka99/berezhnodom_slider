<template>
  <header class="header" :class="{ 'h-100': activeInfo }">
    <div class="container" :class="{ 'h-100': activeInfo }">
      <BLogo />
      <div class="header-adaptiv-wrapper" :class="{ 'd-flex': activeInfo }">
        <div class="address">
          <img
            class="address-icon"
            src="@/assets/icons/address-icon.svg"
            alt=""
            v-if="!activeInfo"
          />
          <img
            class="address-icon"
            src="@/assets/icons/address-mobile-icon.svg"
            alt=""
            v-else
          />
          <div class="address-info white">
            <span class="contacts-info-main">МО, Новая Рига</span>
            <span class="half-opacity contacts-info-additional"
              >Поселки Villagio Estate</span
            >
          </div>
        </div>
        <div class="contacts">
          <img
            class="contact-icon"
            src="@/assets/icons/phone-icon.svg"
            alt=""
            v-if="!activeInfo"
          />
          <img
            class="contact-icon"
            src="@/assets/icons/phone-mobile-icon.svg"
            alt=""
            v-else
          />
          <div class="contacts-info white">
            <span class="contacts-info-main">8 (916) 800-40-40</span>
            <span class="half-opacity contacts-info-additional"
              >c 8-00 до 21-00</span
            >
          </div>
        </div>
        <button class="request-button" type="button" @click="$emit('openModal')" >Оставить заявку</button>
      </div>
      <div class="header-burger" :class="{'close-icon': activeInfo}" @click="activeInfo = !activeInfo">
        <template v-if="!activeInfo">
          <span></span>
          <span></span>
          <span></span>
        </template>
        <template v-else>
          <img src="@/assets/icons/close-icon.svg" alt="" />
        </template>
      </div>
    </div>
  </header>
</template>
<script>
import BLogo from "@/components/BLogo";
export default {
  components: { BLogo },
  data() {
    return {
      activeInfo: false,
    };
  },
};
</script>
<style lang="scss">
button.request-button {
  text-transform: uppercase;
}
.header {
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 15;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    background: white;
    top: 0;
    height: 72px;
  }
  &-burger {
    display: none;
    @media (max-width: 768px) {
      width: 24px;
      height: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      z-index: 20;
      &.close-icon{
        position: absolute;
        right: 25px;
        top: 25px;
        cursor: pointer;
      }
      span {
        width: 24px;
        height: 2px;
        background: black;
        display: block;
      }
    }
  }
  &-adaptiv-wrapper {
    display: flex;
    justify-content: space-between;
    width: 70%;
    @media (max-width: 768px) {
      display: none;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      z-index: 15;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .address {
        margin-top: 90px;
      }
      .contacts,
      .address {
        img {
          margin-bottom: 15px;
        }
        &-info-main {
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
          margin-bottom: 5px;
        }
        &-info-additional {
          font-weight: 300;
          font-size: 18px;
          line-height: 36px;
        }
      }
      .request-button {
        margin-bottom: 90px;
        width: 280px;
        height: 54px;
      }
    }
  }
  .container {
    margin: 0 60px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    @media (max-width: 768px) {
      margin: 0 25px;
    }
  }
  .request-button {
    padding: 11px 20px;
    cursor: pointer;
    border: 1px solid white;
    background: none;
    color: white;
    font-size: 11px;
    font-family: "geometria";
    transition: 0.3s;
    border-radius: none;
    @media (max-width: 768px) {
      color: black;
      border: 1px solid black;
    }
    &:hover {
      color: black;
      background: white;
    }
  }
  .address,
  .contacts {
    width: 20%;
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      width: 35%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    img {
      margin-right: 8px;
    }
  }
  .address-info,
  .contacts-info {
    font-family: "geometria";
    font-size: 14px;
    font-weight: 500;
    width: max-content;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      color: black;
    }
  }
}
.white {
  color: white;
}
.half-opacity {
  opacity: 0.5;
  font-weight: 300;
}
.d-block {
  display: block;
}
.d-flex {
  display: flex;
}
.h-100 {
  height: 100%;
}
</style>
