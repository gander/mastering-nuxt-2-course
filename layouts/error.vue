<template>
  <div class="main">
    <img src="https://media.tenor.com/652b4Q5e-BMAAAAd/pat-mat-pat-a-mat.gif" alt="">
    <div>Error!</div>
    <div class="message">{{ error.message }} {{ error.statusCode }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font: 40px sans-serif;
}
.message {
  font-weight: 700;
}
</style>