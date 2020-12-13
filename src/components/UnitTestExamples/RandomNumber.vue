<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RandomNumber',
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      randomNumber: 0,
    };
  },
  methods: {
    getRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
  },
});
</script>

<style scoped lang="scss"></style>
