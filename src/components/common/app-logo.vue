<template>
  <div class="app-logo">
    <div class="logo-text">
      GiphyFinder
      <span class="dot">.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-logo {
  .logo-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.5px;

    .dot {
      color: #00ff99;
      font-size: 2rem;
      animation: pulse 2s infinite;
      text-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
