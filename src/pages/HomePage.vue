<template>
  <transition name="springup" appear>
    <div class="mt-28">
      <h1 class="font-noto-sans text-8xl leading-snug">Hi👋 <br>I'm <span class="bg-gradient-to-r text-transparent bg-clip-text from-primary-light to-primary-dark">Kemal Bećarević</span>,</h1>
      <h2 class="font-noto-sans text-5xl text-gray-200">an aspiring Full-Stack developer</h2>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HomePage",
}
</script>

<style scoped>
.springup-enter-active,
.springup-leave-active {
  transition: all 0.5s ease-out;
}

.springup-enter-from ,
.springup-leave-to{
  transform: translateY(50%);
  opacity: 0;
}

.springup-enter-to,
.springup-leave-from{
  transform: translateY(0%);
  opacity: 1;
}

</style>