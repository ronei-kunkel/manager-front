<script setup>
import {storeToRefs} from "pinia";

const windowDimensionsStore = useWindowDimensionsStore();
const dimensions = storeToRefs(windowDimensionsStore);
</script>

<template>
  <div class="title">
    <p>Terminal — status — {{ dimensions.width }}x{{ dimensions.height }}</p>
  </div>
</template>

<style scoped>

.title {
  cursor:default;
  text-align: center;
  margin-right: 80px;
  width: 100%;
  text-align: center;
  overflow-x: hidden;
}

.title p {
  max-height: 40px;
  margin: 0;
  white-space: nowrap;
}
</style>