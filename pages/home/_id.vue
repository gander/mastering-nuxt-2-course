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
    <div v-for="review in reviews" :key="review.objectId">
      <img :src="review.reviewer.image" alt=""/>
      <div>{{ review.reviewer.name }}</div>
      <div>{{ review.date }}</div>
      <div>{{ review.comment }}</div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title,
    };
  },
  async asyncData({params, $dataApi, error}) {
    const homeResponse = await $dataApi.getHome(params.id);

    if (!homeResponse.ok) {
      return error({statusCode: homeResponse.status, message: homeResponse.statusText});
    }

    const reviewsResponse = await $dataApi.getReviewsByHomeId(params.id);

    if (!reviewsResponse.ok) {
      return error({statusCode: reviewsResponse.status, message: reviewsResponse.statusText});
    }

    return {
      home: homeResponse.json,
      reviews: reviewsResponse.json.hits,
    };
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