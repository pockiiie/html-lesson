<script setup>

</script>
<template>
    <div>
        <PageHeader title="Background Images" />
        <p class="mb-4">
            A background image can be specified for almost any HTML element.
        </p>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Background Image on a HTML element
            </header>
            <article class="lesson-content">
                <p>
                    To add a background image on an HTML element, use the HTML style attribute and the CSS
                    background-image property:
                </p>
                <CodeBlock title="Example">
                    <p>Add a background image on a HTML element:</p>
                    <Markup name="p" :attrs="[{ backgroundImage: `url('my_cat.jpg')` }]" />
                </CodeBlock>
                <Example url="/examples/06/backgrounds-01.html" />

                <p>
                    You can also specify the background image in the <code class="markup">style</code> element, in the
                    <code class="markup">head</code> section:
                </p>
                <CodeBlock title="Example">
                    <p>Specify the background image in the <code class="markup">style</code> element:</p>
                    <Markup name="html">
                        <Markup name="head">
                            <Markup name="style">
                                <Css name="p" :attrs="[{ backgroundImage: `url('my_cat.jpg')` }]" />
                            </Markup>
                        </Markup>
                        <Markup name="body">
                            <template #indent>
                                <Markup name="p">
                                    This should have background image in it
                                </Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
            </article>
        </section>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Background Image on a Page
            </header>
            <article class="lesson-content">
                If you want the entire page to have a background image, you must specify the background image on the
                <code class="markup">body</code> element:
                <CodeBlock title="Example">
                    <p>Add a background image for the entire page:
                    </p>
                    <Markup name="style">
                        <template #indent>
                            <Css name="body" :attrs="[{ backgroundImage: `url('my_cat.jpg')` }]" />
                        </template>
                    </Markup>
                </CodeBlock>
                <Example url="/examples/06/backgrounds-02.html" />
            </article>
        </section>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Background Repeat
            </header>
            <article class="lesson-content">
                <p>
                    If the background image is smaller than the element, the image will repeat itself, horizontally and
                    vertically, until it reaches the end of the element:
                </p>
                <CodeBlock title="Example">
                    <Markup name="style">
                        <Css name="body" :attrs="[{ backgroundImage: `url('my_cat2.jpg')` }]" />
                    </Markup>
                </CodeBlock>
                <Example url="/examples/06/backgrounds-03.html" />

                <p class="mt-4">
                    To avoid the background image from repeating itself, set the <code>background-repeat</code> property
                    to
                    <code>no-repeat</code>.
                </p>
                <CodeBlock title="Example">
                    <Markup name="style">
                        <Css name="body"
                            :attrs="[{ backgroundImage: `url('my_cat2.jpg')`, backgroundRepeat: `no-repeat` }]" />
                    </Markup>
                </CodeBlock>
                <Example url="/examples/06/backgrounds-04.html" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Background Cover
            </header>
            <article class="lesson-content">
                <p>
                    If you want the background image to cover the entire element, you can set the
                    <code>background-size</code> property to <code>cover</code>.
                </p>
                <p>
                    Also, to make sure the entire element is always covered, set the <code>background-attachment</code>
                    property to <code>fixed</code>:
                </p>
                <p>
                    This way, the background image will cover the entire element, with no stretching (the image will
                    keep its original proportions):
                </p>

                <CodeBlock title="Example">
                    <Markup name="style">
                        <Css name="body"
                            :attrs="[{ 
                                backgroundImage: `url('my_cat2.jpg')`, 
                                backgroundRepeat: `no-repeat`,
                                backgroundAttachment: `fixed`,
                                bacgroundSize: `cover`
                                }]" />
                    </Markup>
                </CodeBlock>

                <Example url="/examples/06/backgrounds-05.html" />
            </article>
        </section>
    </div>
</template>