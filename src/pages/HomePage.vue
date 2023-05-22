<template>
  <div class="px-6 lg:px-12 bg-background relative">
    <transition name="springup" appear>
      <div class="mt-20 lg:mt-52 pb-20 lg:pb-96">
        <h1 class="font-inter text-3xl lg:text-8xl leading-snug lg:leading-snug">Hi 👋 <br>I'm <span
            class="bg-gradient-to-r text-transparent bg-clip-text from-primary-light to-primary">Kemal Bećarević</span>,
        </h1>
        <h2 class="font-inter text-xl lg:text-5xl text-gray-100 font-semibold">an aspiring Full-Stack developer</h2>
      </div>
    </transition>
  </div>
  <img src="../assets/transition-top.svg" class="w-full" alt="">
  <div class="bg-primary-dark pb-12 px-8 lg:px-24 pt-4 lg:pt-12 flex align-middle">
    <div class="">
      <h2 class="text-2xl lg:text-6xl font-noto-sans font-bold">About me</h2>
      <p class="ml-1 lg:ml-2 mt-3 lg:mt-6 font-open-sans text-sm lg:text-2xl text-white max-w-4xl leading-loose lg:leading-10">Hey, I'm Kemal. I'm a high school student who is absolutely in love with all things programming. I have found full-stack programming to be very enjoyable and I really enjoy learning new technologies and frameworks. I'm also obsessed with green squares on GitHub.</p>
    </div>
  </div>
  <img src="../assets/topWaves.svg" class="w-full" alt="">

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

.springup-enter-from,
.springup-leave-to {
  transform: translateY(50%);
  opacity: 0;
}

.springup-enter-to,
.springup-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

</style>