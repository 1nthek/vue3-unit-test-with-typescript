<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageDisplay',
  data() {
    return {
      message: {},
      error: null,
    };
  },
  async created() {
    try {
      this.message = await getMessage();
    } catch (error) {
      this.error = 'Oops! Something went wrong.';
    }
  },
});
</script>

<style scoped lang="ts"></style>
