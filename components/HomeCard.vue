<template>
  <div class="home">
    <img :src="home.images[0]" alt="">
    <div>{{ home.title }}</div>
    <div>{{ home.location.address }} {{ home.location.city }} {{ home.location.state }}</div>
    <div>{{ home.guests }} guests</div>
    <div>{{ home.pricePerNight }} / night</div>
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.home {
  float: left;
  margin: 10px;
}

.home img {
  width: 200px;
  display: block;
}
</style>
