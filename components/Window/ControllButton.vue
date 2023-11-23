<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#ddd',
    },
  }
};
</script>

<template>
  <span :style="{ backgroundColor: color }"  class="bg-btn">
    <i class="material-icons">{{ icon }}</i>
  </span>
</template>

<style scoped>
.bg-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
}

i {
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-weight: bold;
}
</style>