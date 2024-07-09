<script setup>
</script>
<template>
  <div class="flex justify-center">
    <div class="
    w-full xl:w-1/2
    ">
      <AppHeader />
      <div class="flex">
        <div class="hidden md:block md:w-1/5">
          <Menu />
        </div>
        <div class="w-full md:w-4/5 h-screen overflow-y-scroll mx-4 px-2">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>