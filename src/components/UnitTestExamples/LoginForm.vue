<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="name-input" type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name });
    },
  },
});
</script>

<style scoped lang="ts"></style>
