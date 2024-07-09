<script setup>
defineProps(['url']);
const isOpen = ref(false);
</script>
<template>
    <UButton label="View Example" @click="isOpen = true" />
    <UModal v-model="isOpen" fullscreen :ui="{
        fullscreen: `w-3/5 h-lvh`
    }">
        <UCard :ui="{
            base: 'h-full flex flex-col',
            rounded: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            body: {
                base: 'grow'
            }
        }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Example
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isOpen = false" />
                </div>
            </template>
            <iframe :src="url" class="w-full h-full" />
        </UCard>
    </UModal>
</template>