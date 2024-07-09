<script setup>
defineProps(["title", "icon"]);
const defaultIcon = "i-heroicons-academic-cap";
</script>

<template>
    <div class="pb-8 w-full">
        <h1 class="text-4xl font-bold">
            <UIcon :name="icon ? icon : defaultIcon" />
            {{ title }}
        </h1>
        <hr>
    </div>
</template>