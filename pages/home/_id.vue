<template>
  <div class="home">
    <div class="images">
      <img v-for="image in home.images" :key="image" :src="image" alt="">
    </div>
    <div>{{ home.title }}</div>
    <div><img src="/images/marker.svg" width="20" height="20" alt=""/> {{ home.location.address }}, {{ home.location.city }}, {{ home.location.state }}, {{ home.location.country }}</div>
    <div><img src="/images/star.svg" width="20" height="20" alt=""/> {{ home.reviewValue }}</div>
    <div>{{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath</div>
    <div class="map" ref="map"></div>
  </div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  head() {
    return {
      title: this.home.title,
    };
  },
  date() {
    return {
      home: {},
    };
  },
  created() {
    this.home = homes.find(home => home.objectID === this.$route.params.id);
  },
  mounted() {
    this.$maps.showMap(
        this.$refs.map,
        this.home._geoloc.lat,
        this.home._geoloc.lng,
    );
  },
};
</script>

<style scoped>
.images {
  display: flex;
}

.images img {
  width: 200px;
  height: 150px;
}

.map {
  width: 800px;
  height: 800px;
}
</style>