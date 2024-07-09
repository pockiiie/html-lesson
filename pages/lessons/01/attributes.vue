<script setup>
const showExample = ref([false, false, false]);
</script>
<template>
    <div>
        <PageHeader title="HTML Attributes" />
        <p class="mb-8">
            HTML attributes provide additional information about HTML elements.
        </p>

        <section class="lesson-wrapper">
            <header class="lesson-header" id="attributes">
                Attributes
            </header>
            <article class="lesson-content">
                <ul>
                    <li>
                        All HTML elements can have attributes
                    </li>
                    <li>
                        Attributes provide additional information about elements
                    </li>
                    <li>
                        Attributes are always specified in the start tag
                    </li>
                    <li>
                        Attributes usually come in name/value pairs like: name="value"
                    </li>
                </ul>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The href Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The <code class="markup">a</code> tag defines a hyperlink. The <code class="markup">href</code>
                    attribute specifies the URL of the page the link goes to:
                </p>
                <CodeBlock title="Example">
                    <Markup name="a" :attrs="[{ href: `https://www.w3schools.com` }]">Visit W3Schools</Markup>
                </CodeBlock>

                <Example url="/examples/01/attributes-01.html" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The src Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The <code class="markup">img</code> tag is used to embed an image in an HTML page. The <code
                        class="markup">src</code> attribute specifies the path to the image to be displayed:
                </p>
                <CodeBlock title="Example">
                    <Markup name="img" :attrs="[{ src: `my_cat.jpg` }]" />
                </CodeBlock>

                <Example url="/examples/01/attributes-02.html"/>

                <p>
                    There are two ways to specify the URL in the <code class="markup">src</code> attribute:
                </p>
                <div>
                    <p>
                        1. Absolute URL - Links to an external image that is hosted on another website. Example:
                        src="https://www.w3schools.com/images/img_girl.jpg".
                    </p>

                    <UAlert icon="i-heroicons-information-circle" color="teal" class="my-4">
                        <template #description>
                            External images might be under copyright. If you do not get permission to use it, you may be
                            in violation of copyright laws. In addition, you cannot control external images; it can
                            suddenly be removed or changed.
                        </template>
                    </UAlert>

                    <p>
                        2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not
                        include the domain name. If the URL begins without a slash, it will be relative to the current
                        page.
                        Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain.
                        Example: src="/images/img_girl.jpg".
                    </p>

                    <UAlert icon="i-heroicons-light-bulb-solid" class="my-4">
                        <template #description>
                            It is almost always best to use relative URLs. They will not break if you change domain.
                        </template>
                    </UAlert>
                </div>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The width and height Attributes
            </header>
            <article class="lesson-content">
                <p>
                    The <code class="markup">img</code> tag should also contain the <code>width</code> and
                    <code>height</code>
                    attributes, which specify the width and height of the image (in pixels):
                </p>

                <CodeBlock title="Example">
                    <Markup name="img" :attrs="[{ src: 'my_cat.jpg' }, { width: '400' }, { height: '600' }]" />
                </CodeBlock>

                <Example url="/examples/01/attributes-03.html"/>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The alt Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The required <code>alt</code> attribute for the <code class="markup">img</code> tag specifies
                    an alternate text for an image, if the image for some
                    reason cannot be displayed. This can be due to a slow connection, or an error in the
                    <code>src</code>
                    attribute, or
                    if the user uses a screen reader.
                </p>
                <CodeBlock title="Example">
                    <Markup name="img" :attrs="[{ src: 'my_cat.jpg' }, { alt: 'Mia The Cat' }]" />
                </CodeBlock>
                <Example url="/examples/01/attributes-04.html"/>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The style Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and
                    more.
                </p>
                <CodeBlock title="Example">
                    <Markup name="p" :attrs="[{ style: 'color:red' }]">This is a red paragraph.</Markup>
                </CodeBlock>
                <Example url="/examples/01/attributes-05.html" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The title Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The <code>title</code> attribute defines some extra information about an element.
                    The value of the title attribute will be displayed as a tooltip when you mouse over the element:
                </p>
                <CodeBlock title="Example">
                    <Markup name="p" :attrs="[{ style: 'color:red' }, { title: `I'm a tooltip` }]">This is a paragraph.
                    </Markup>
                </CodeBlock>

                <Example url="/examples/01/attributes-06.html" />
            </article>
        </section>

        <UAlert color="rose" class="mb-8">
            <template #description>
                <span class="text-2xl">Always Use Lowercase Attributes</span>
            </template>
        </UAlert>
    </div>
</template>