<template>
  <div>
    <home-card v-for="home in homes" :key="home.objectID" :home="home"></home-card>
  </div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'This is homepage!',
        hid: 'description',
      }],
    };
  },
  data() {
    return {
      homes: homes.slice(0, 3),
    };
  },
};
</script>
