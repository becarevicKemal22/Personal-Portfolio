<template>
  <div class="px-6 lg:px-12 bg-background relative">
    <transition name="springup" appear>
      <div class="mt-20 lg:mt-52 pb-20 lg:pb-96">
        <h1 class="first font-inter text-3xl lg:text-8xl leading-snug lg:leading-snug">Hi 👋
        </h1>
        <h1 class="second font-inter text-3xl lg:text-8xl">I'm <span
            class="bg-gradient-to-r text-transparent bg-clip-text from-primary-light to-primary">Kemal Bećarević</span>,
        </h1>
        <h2 class="third font-inter text-xl lg:text-5xl text-gray-100 font-semibold">an aspiring Full-Stack
          developer</h2>
      </div>
    </transition>
  </div>
  <img src="../assets/transition-top.svg" class="w-full" alt="">
  <div class="bg-primary-dark pb-8 lg:pb-12 px-8 lg:px-24 pt-4 lg:pt-12 flex align-middle">
    <div>
      <h2 class="text-2xl lg:text-6xl font-noto-sans font-bold">About me</h2>
      <p class="ml-1 lg:ml-2 mt-3 lg:mt-6 font-open-sans text-sm lg:text-2xl text-white max-w-4xl leading-loose lg:leading-10">
        Hey, I'm Kemal. I'm a high school student who is absolutely in love with all things programming. I have found
        full-stack programming to be very enjoyable and I really enjoy learning new technologies and frameworks. I'm
        also obsessed with green squares on GitHub.</p>
    </div>
  </div>
  <img src="../assets/transition-bottom.svg" class="w-full" alt="">
  <div class="px-8 lg:px-24 pt-8 lg:pt-16">
    <h2 class="text-2xl lg:text-6xl font-bold font-noto-sans underline underline-offset-4 lg:underline-offset-8 decoration-primary decoration-4 lg:decoration-8">Skills</h2>
    <div class="px-4 lg:px-20 mt-6 lg:mt-20 flex gap-4 lg:gap-20 flex-col items-center">
      <div class="flex justify-around w-full px-8">
        <SkillIcon path="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" title="Vue.js" large/>
        <SkillIcon path="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" title="Laravel" large/>
      </div>
      <div class="grid grid-rows-3 grid-cols-3 w-full">
          <SkillIcon path="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" title="HTML"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" title="CSS"/>
          <SkillIcon path="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" title="Javascript"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" title="Tailwind"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/php/php-icon.svg" title="PHP"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" title="Firebase"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" title="Git"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" title="MySQL"/>
          <SkillIcon path="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" title="MongoDB"/>
      </div>
    </div>
  </div>
</template>

<script>

import SkillIcon from "@/components/UI/SkillIcon.vue";

export default {
  name: "HomePage",
  components: {SkillIcon},
}
</script>

<style scoped>
.springup-enter-active {
  transition: all 0.9s ease-out;
}

.springup-enter-active .second {
  transition: all 0.7s ease-out;
}

.springup-enter-active .third {
  transition: all 0.5s ease-out;
}

.springup-enter-active .second {
  transition-delay: 200ms;
}

.springup-enter-active .third {
  transition-delay: 400ms;
}

.springup-enter-from,
.springup-enter-from .second,
.springup-enter-from .third {
  transform: translateY(50%);
  opacity: 0;
}

.springup-enter-to,
.springup-enter-to .second,
.springup-enter-to .third {
  transform: translateY(0%);
  opacity: 1;
}

</style>