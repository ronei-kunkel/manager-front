<script setup>
  const windowDimensionsStore = useWindowDimensionsStore();
  const windowElement = ref(null)

  const setDimensions = () => {
    const dimensions = windowElement.value.getBoundingClientRect();

    windowDimensionsStore.setWidth(parseInt(dimensions.width));
    windowDimensionsStore.setHeight(parseInt(dimensions.height));
  };

  onMounted(() => {
    windowElement.value = document.querySelector('.window');
    setDimensions();

    window.addEventListener('resize', setDimensions);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', setDimensions);
  });

</script>

<template>
  <div class="window" ref="window" @resize="setDimensions" @mounted="setDimensions">

    <WindowTopBar/>

    <WindowContentTerminal/>
  </div>
</template>

<style scoped>
.window {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 40vh;
  border-radius: 9px;
  box-shadow: 2px 6px 20px 3px rgba(0, 0, 0, 0.534);
  margin: 0 15px 0 15px;
  background-color: rgba(0, 0, 0, 0);
  border: 4px solid #fff;
}
</style>
