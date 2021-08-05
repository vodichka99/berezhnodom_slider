<template>
  <div class="logo">
    <img class="logo-pc" src="@/assets/logo.svg" alt="BEREZHNODOM" />
    <img class="logo-mobile" src="@/assets/logo-mobile.svg" alt="berezhnodom" />
  </div>
</template>
<style lang="scss">
.logo-pc{
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}
.logo-mobile{
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
}
</style>