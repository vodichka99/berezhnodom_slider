<template>
  <header class="header">
    <div class="container">
      <BLogo />
      <div class="address">
        <img src="@/assets/icons/address-icon.svg" alt="" />
        <div class="address-info white">
          <span>МО, Новая Рига</span>
          <span class="half-opacity">Поселки Villagio Estate</span>
        </div>
      </div>
      <div class="contacts">
        <img src="@/assets/icons/phone-icon.svg" alt="" />
        <div class="contacts-info white">
          <span>8 (916) 800-40-40</span>
          <span class="half-opacity">c 8-00 до 21-00</span>
        </div>
      </div>
      <button class="request-button" type="button">Оставить заявку</button>
    </div>
  </header>
</template>
<script>
import BLogo from "@/components/BLogo";
export default {
  components: { BLogo },
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
  z-index: 10;
  .container {
    margin: 0 40px;
    display: flex;
    justify-content: space-between;
  }
  .request-button {
    padding: 11px 20px;
    cursor: pointer;
    border: 1px solid white;
    background: none;
    color: white;
    font-size: 11px;
    font-family: 'geometria';
    transition: 0.3s;
    border-radius: none;
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
    img {
      margin-right: 8px;
    }
  }
  .address-info,
  .contacts-info {
    font-family: 'geometria';
    font-size: 14px;
    font-weight: 500;
    width: max-content;
    display: flex;
    flex-direction: column;
  }
}
.white {
  color: white;
}
.half-opacity {
  opacity: 0.5;
  font-weight: 300;
}
</style>
