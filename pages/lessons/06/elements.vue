<script setup>

</script>
<template>
    <div>
        <PageHeader title="Picture Elements" />
        <p class="mb-8">
            The HTML <code class="markup">picture</code> element allows you to display different pictures for different
            devices or screen sizes.
        </p>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The HTML <code class="markup">picture</code> Element
            </header>
            <article class="lesson-content">
                <p>
                    The HTML <code class="markup">picture</code> element gives web developers more flexibility in
                    specifying
                    image resources.
                </p>
                <p>
                    The <code class="markup">picture</code> element contains one or more <code
                        class="markup">source</code>
                    elements, each referring to different images through the <code>srcset</code> attribute. This way the
                    browser can choose
                    the image that best fits the current view and/or device.
                </p>
                <p>
                    Each <code class="markup">source</code> element has a <code>media</code> attribute that defines when
                    the image is the most suitable.
                </p>

                <CodeBlock title="Example">
                    <p>
                        Show different images for different screen sizes:
                    </p>
                    <Markup name="picture">
                        <template #indent>
                            <Markup name="source"
                                :attrs="[{ media: `(min-widht: 650px)` }, { srcset: `/images/my_cat.jpg` }]" />
                            <Markup name="source"
                                :attrs="[{ media: `(min-widht: 465px)` }, { srcset: `/images/my_cat2.jpg` }]" />
                            <Markup name="img" :attrs="[{ src: `/images/_mycat3.jpg` }]" />
                        </template>
                    </Markup>

                </CodeBlock>

                <UButton label="View Example" to="/examples/06/elements-01.html" target="_blank" />

                <UAlert icon="i-heroicons-information-circle" color="teal" class="my-4">
                    <template #description>
                        Always specify an <code class="markup">img</code> element as the last child element of the <code
                            class="markup">picture</code> element.
                        The <code class="markup">img</code> element is used by browsers that do not support the <code
                            class="markup">picture</code> element, or if none of the
                        <code class="markup">source</code> tags match.
                    </template>
                </UAlert>
            </article>


        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                When to use the Picture Element
            </header>
            <article class="lesson-content">
                <p>
                    There are two main purposes for the <code class="markup">picture</code> element:
                </p>
                <div class="my-4">
                    <div class="text-2xl">
                        Bandwidth
                    </div>
                    <p>
                        If you have a small screen or device, it is not necessary to load a large image file. The
                        browser
                        will use
                        the first
                        <code class="markup">source</code> element with matching attribute values, and ignore any of the
                        following elements.
                    </p>
                </div>
                <div class="my-4">
                    <div class="text-2xl">
                        Format Support
                    </div>
                    <p>
                        Some browsers or devices may not support all image formats. By using the <code
                            class="markup">picture</code> element, you can add images of all formats, and the browser
                        will use
                        the first format it recognizes, and ignore any of the following elements.
                    </p>
                </div>

                <CodeBlock title="Example">
                    <p>
                        The browser will use the first image format it recognizes:
                    </p>

                    <Markup name="picture">
                        <template #indent>
                            <Markup name="source" :attrs="[{ srcset: `/images/my_cat.jpg` }]" />
                            <Markup name="source" :attrs="[{ srcset: `/images/my_cat.png` }]" />
                            <Markup name="img" :attrs="[{ src: `/images/_mycat.gif` }, { alt: `my cat` }]" />
                        </template>
                    </Markup>
                </CodeBlock>

                <UAlert icon="i-heroicons-information-circle" color="teal" class="my-4">
                    <template #description>
                        The browser will use the first <code class="markup">source</code> element with matching
                        attribute values, and ignore any following <code class="markup">source</code> elements.
                    </template>
                </UAlert>
            </article>
        </section>

    </div>
</template>