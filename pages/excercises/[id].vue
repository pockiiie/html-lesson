<script setup>
const route = useRoute();
const url = `/excercises/${route.params.id}.html`;
const title = `Excercise ` + route.params.id;

onMounted(() => {
    const frame = document.getElementById('frame');
    frame.contentWindow.onload = () => {
        const rootDiv = frame.contentDocument.querySelector('div#root');
        frame.setAttribute("height", rootDiv.clientHeight + 100)
    }
})

</script>

<template>
    <div>
        <PageHeader :title="title" icon="i-heroicons-beaker-solid" />
        <div class="bg-white rounded-lg p-8 text-black">
            <iframe id="frame" class="min-w-full" :src="url"></iframe>
        </div>
    </div>
</template>