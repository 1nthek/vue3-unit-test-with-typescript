<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  data() {
    return {
      loggedIn: false,
    };
  },
});
</script>

<style scoped lang="scss"></style>
