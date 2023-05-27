<script setup>
import {computed} from "vue";

const props = defineProps({
  path: String,
  title: String,
  large: Boolean,
});

const sizeClass = computed(() => {
  if(props.large){
    return "w-14 h-14 lg:w-32 lg:h-32";
  }
  else{
    return "w-8 h-8 lg:w-20 lg:h-20"
  }
})
</script>

<template>
<div class="flex flex-col items-center m-4 group">
  <img :src="path" :alt="title + ' icon'" class="lg:grayscale lg:hover:filter-none lg:transition lg:duration-200 lg:hover:scale-105" :class="sizeClass">
  <h3 class="pt-2 lg:opacity-0 lg:group-hover:opacity-100 font-open-sans lg:text-2xl lg:transition lg:duration-200">{{ title }}</h3>
</div>
</template>

<style scoped>

</style>