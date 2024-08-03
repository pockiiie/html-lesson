<script setup>
</script>
<template>
    <div>
        <PageHeader title="HTML Favicon" />
        <p class="mb-4">
            A favicon is a small image displayed next to the page title in the browser tab.
        </p>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                How To Add a Favicon in HTML
            </header>
            <article class="lesson-content">
                <p>
                    You can use any image you like as your favicon. You can also create your own favicon on sites like
                    <a href="https://www.favicon.cc" target="_blank" class="text-pink-500">https://www.favicon.cc</a>.
                </p>
                <p>
                    A favicon image is displayed to the left of the page title in the browser tab, like this:
                </p>
                <UAlert icon="i-heroicons-information-circle" color="teal" class="my-4">
                    <template #description>
                        A favicon is a small image, so it should be a simple image with high contrast.
                    </template>
                </UAlert>
                <img src="/images/img_favicon.png" alt="favicon example" class="mb-4">
                <p>
                    To add a favicon to your website, either save your favicon image to the root directory of your
                    webserver, or create a
                    folder in the root directory called images, and save your favicon image in this folder. A common
                    name for a favicon
                    image is "favicon.ico".
                </p>
                <p>
                    Next, add a <code class="markup">link</code> element to your "index.html" file, after the <code
                        class="markup">title</code> element, like this:
                </p>
                <CodeBlock title="Example">
                    <Markup name="!DOCTYPE html" :only-start="true" />
                    <Markup name="html">
                        <Markup name="title">My Page Title</Markup>
                        <Markup name="link" :attrs="[
                            { rel: `icon` },
                            { type: `image/x-icon` },
                            { href: `/favicon.ico` }
                        ]" />
                        <Markup name="body">
                            <template #indent>
                                <Markup name="h1">My First Heading</Markup>
                                <Markup name="p">My First Paragraph</Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
                <p>
                    Now, save the "index.html" file and reload it in your browser. Your browser tab should now display
                    your favicon
                    image to the left of the page title.
                </p>
            </article>
        </section>
        <section class="lesson-wrapper">
            <header class="lesson-header">Excercise</header>
            <article class="lesson-content">
                Create a HTML file with favicon from <a href="https://www.favicon.cc" target="_blank"
                    class="text-pink-500">https://www.favicon.cc</a>
            </article>
        </section>
    </div>
</template>