<template>
  <router-view :mobile="mobile"></router-view>
</template>
<script>
export default {
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    const adaptive = () => {
      if (window.innerWidth <= 768) {
        this.mobile = true;
      } else {
        this.mobile = false
      }
    }
    adaptive()
    window.addEventListener("resize", () => {
      adaptive()
    });
  },
};
</script>
