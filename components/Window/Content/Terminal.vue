<template>
  <div class="prompt">
    <p class="prompt-text">
      <span class="user">guest</span>@<span class="user">manager</span>:<span class="path">~</span>$ <span>system --status</span><br>
      <span class="return">Great things are being done on the back-end . . .</span>
    </p>
  </div>
</template>

<style scoped>

.prompt {
  max-width: 100%;
  height: 100%;
  padding: 5px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  cursor: text;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.412);
  backdrop-filter: blur(500px);
}

.prompt-text {
  color: #fff;
  margin: 0;
}

.user {
  color: aquamarine;
}

.path {
  color: violet;
}
</style>