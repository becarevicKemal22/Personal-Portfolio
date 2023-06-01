<script setup>

const props = defineProps(['title', 'description', 'imageURL']);
console.log(props.imageName);
</script>

<template>
  <div class="group w-full m-10 rounded-2xl overflow-hidden bg-[url(https://i.ibb.co/k2F6jk8/Screenshot-1.png)] bg-cover bg-center bg-blend-darken cursor-pointer">
    <div class="w-full h-full p-10 flex flex-col items-start gap-2.5 scale-y-0 translate-y-full group-hover:scale-y-100 group-hover:translate-y-0 transition duration-300 bg-black/50">
      <h2 class="font-nato-sans text-3xl font-bold">{{ title }}</h2>
      <p class="font-open-sans text-md">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>