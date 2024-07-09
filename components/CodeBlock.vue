<script setup>
defineProps(['icon', 'title'])
</script>
<template>
    <div class="code">
        <span v-if="title" class="title">{{ title }}</span>
        <slot />
    </div>
</template>