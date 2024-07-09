<script setup>
defineProps(['name', 'attrs']);
</script>
<template>
    <div class="font-mono mb-2">
        <span class="text-rose-500">{{ name }}</span>
        <span class="text-yellow-500"> {</span>
            <div v-for="attr in attrs">
                <span v-for="(value, key) in attr" class="pl-8">
                    <span class="text-cyan-400 italic">{{ useKebabCase(key.toString()) }}</span>
                    <span>: </span>
                    <span class="text-cyan-400">{{  value }}</span>
                    <span>;</span>
                    <br>
                </span>
            </div>
        <span class="text-yellow-500">}</span>
    </div>
</template>