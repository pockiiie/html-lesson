<script setup>
const props = defineProps({
    name: [Boolean, String],
    attrs: Array,
    onlyStart: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <div class="markup">
        <span>&lt;</span>
        <span class="text-rose-500">{{ name }}</span>
        <span v-for="attr in attrs" v-if="attrs">
            <span v-for="(value, key) in attr">
                <span class="text-lime-500">&nbsp;{{ key }}</span>
                <span>=</span>
                <span class="text-yellow-200">"{{ value }}"</span>
            </span>
        </span>
        <span v-if="!$slots.default && !$slots.indent">
            <span v-if="!onlyStart">&sol;</span>
            <span>&gt;</span>
        </span>
        <span v-else>&gt;</span>

        <slot />

        <div v-if="$slots.indent" class="pl-8">
            <slot name="indent" />
        </div>

        <span v-if="$slots.indent || $slots.default && !onlyStart">
            <span>&lt;</span>
            <span>&#47;</span>
            <span class="text-rose-500">{{ name }}</span>
            <span>&gt;</span>
        </span>
    </div>
</template>