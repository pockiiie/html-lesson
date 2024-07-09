<script setup>
const imageTable = {
    columns: [
        {
            key: `abbr`,
            label: `Abbreviation`
        },
        {
            key: `ff`,
            label: `File Format`
        },
        {
            key: `fe`,
            label: `File Extension`
        }
    ],
    rows: [
        {
            abbr: `APNG`,
            ff: `Animated Portable Network Graphics`,
            fe: `.apng`
        },
        {
            abbr: `GIF`,
            ff: `Graphics Interchange Format`,
            fe: `.gif`
        },
        {
            abbr: `ICO`,
            ff: `Microsoft Icon`,
            fe: `.ico, .cur`
        },
        {
            abbr: `JPEG`,
            ff: `Joint Photographic Expert Group image`,
            fe: `.jpg, .jpeg, .jfif, .pjpeg, .pjp`
        },
        {
            abbr: `PNG`,
            ff: `Portable Network Graphics`,
            fe: `.png`
        },
        {
            abbr: `SVG`,
            ff: `Scalable Vector Graphics`,
            fe: `.svg`
        },

    ]
}
</script>
<template>
    <div>
        <PageHeader title="Images" />
        <p class="mb-4">
            Images can improve the design and the appearance of a web page.
        </p>

        <div class="flex border-2 border-white mb-4">
            <img src="/images/DSC_0028.jpg" class="w-1/3 border-2 border-white" />
            <img src="/images/DSC_0058.jpg" class="w-1/3 border-2 border-white" />
            <img src="/images/DSC_0176.jpg" class="w-1/3 border-2 border-white" />
        </div>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                HTML Images Syntax
            </header>
            <article class="lesson-content">
                <p>
                    The HTML <code class="markup">img</code> tag is used to embed an image in a web page.
                </p>
                <p>
                    Images are not technically inserted into a web page; images are linked to web pages. The <code
                        class="markup">img</code> tag creates a holding space for the referenced image.
                </p>
                <p>
                    The <code class="markup">img</code> tag is empty, it contains attributes only, and does not have a
                    closing tag.
                </p>
                <p>
                    The <code class="markup">img</code> tag has two required attributes:
                </p>
                <ul>
                    <li>
                        <code>src</code> - Specifies the path to the image
                    </li>
                    <li>
                        <code>alt</code> - Specifies an alternate text for the image
                    </li>
                </ul>

                <CodeBlock title="Syntax">
                    <Markup name="img" :attrs="[{ src: `url` }, { alt: `alternatetext` }]" />
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The src Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The required <code>src</code> attribute specifies the path (URL) to the image.
                </p>
                <p>
                    Note: When a web page loads, it is the browser, at that moment, that gets the image from a web
                    server and inserts it into the page. Therefore, make sure that the image actually stays in the same
                    spot in relation to the web page, otherwise your visitors will get a broken link icon. The broken
                    link icon and the <code>alt</code> text are shown if the browser cannot find the image.
                </p>
                <CodeBlock title="Example">
                    <Markup name="img" :attrs="[{ src: `mosque.jpg` }, { alt: `Mosque in Singapore` }]" />
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The alt Attribute
            </header>
            <article class="lesson-content">
                <p>
                    The required alt attribute provides an alternate text for an image, if the user for some reason
                    cannot view it (because of slow connection, an error in the src attribute, or if the user uses a
                    screen reader).
                </p>
                <p>
                    The value of the alt attribute should describe the image:
                </p>
                <CodeBlock title="Example">
                    <Markup name="img" :attrs="[{ src: `mosque.jpg` }, { alt: `Mosque in Singapore` }]" />
                </CodeBlock>
                <p>
                    If a browser cannot find an image, it will display the value of the alt attribute:
                </p>

                <UAlert icon="i-heroicons-light-bulb-solid">
                    <template #description>
                        A screen reader is a software program that reads the HTML code, and allows the user to "listen"
                        to the content. Screen readers are useful for people who are visually impaired or learning
                        disabled.
                    </template>
                </UAlert>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Image Size - Width and Height
            </header>
            <article class="lesson-content">
                <p>
                    You can use the <code>style</code> attribute to specify the width and height of an image.
                </p>
                <CodeBlock title="Example">
                    <Markup name="img"
                        :attrs="[{ src: `mosque.jpg` }, { alt: `Mosque in Singapore` }, { style: `width:500px;height:600px;` }]" />
                </CodeBlock>
                Alternatively, you can use the width and height attributes:
                <CodeBlock title="Example">
                    <Markup name="img"
                        :attrs="[{ src: `mosque.jpg` }, { alt: `Mosque in Singapore` }, { width: `500` }, { height: `600` }]" />
                </CodeBlock>
                <p>
                    The width and height attributes always define the width and height of the image in pixels.
                </p>
                <UAlert icon="i-heroicons-information-circle-solid">
                    <template #description>
                        Always specify the width and height of an image. If width and height are not specified, the web
                        page might flicker while the image loads.
                    </template>
                </UAlert>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Width and Height, or Style?
            </header>
            <article class="lesson-content">
                <p>
                    The <code>width</code>, <code>height</code>, and <code>style</code> attributes are all valid in
                    HTML.

                    However, we suggest using the <code>style</code> attribute. It prevents styles sheets from changing
                    the size of images:
                </p>
                <CodeBlock title="Example">
                    <Markup name="!DOCTYPE html" :only-start="true" />
                    <Markup name="head">
                        <Markup name="style">
                            <template #indent>
                                <Css name="img" :attrs="[{ width: `100%` }]" />
                            </template>
                        </Markup>
                    </Markup>
                    <Markup name="html">
                        <Markup name="body">
                            <template #indent>
                                <Markup name="img" :attrs="[
                                    { src: `html5.gif` },
                                    { alt: `HTML5 Icon` },
                                    { width: `128` },
                                    { height: `128` }
                                ]" />
                                <Markup name="img" :attrs="[
                                    { src: `html5.gif` },
                                    { alt: `HTML5 Icon` },
                                    { style: `width:128px; height:128px;` }
                                ]" />
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Images in Another Folder
            </header>
            <article class="lesson-content">
                <p>
                    If you have your images in a sub-folder, you must include the folder name in the <code>src</code>
                    attribute:
                </p>
                <CodeBlock title="Example">
                    <Markup name="img" :attrs="[
                        { src: `/images/html5.gif` },
                        { alt: `HTML5 Icon` },
                        { style: `width:128px; height:128px;` }
                    ]" />
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Image as a Link
            </header>
            <article class="lesson-content">
                <p>
                    To use an image as a link, put the <code class="markup">img</code> tag inside the <code
                        class="markup">a</code> tag:
                </p>
                <CodeBlock title="Example">
                    <Markup name="a" :attrs="[{ href: `default.asp` }]">
                        <template #indent>
                            <Markup name="img" :attrs="[
                                { src: `smiley.gif` },
                                { alt: `HTML tutorial` },
                                { style: `width:42px;height:42px;` }
                            ]" />
                        </template>
                    </Markup>

                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Image Floating
            </header>
            <article class="lesson-content">
                <p>
                    To use an image as a link, put the <code class="markup">img</code> tag inside the <code
                        class="markup">a</code> tag:
                </p>
                <CodeBlock title="Example">
                    <Markup name="p">
                        <template #indent>
                            <Markup name="img" :attrs="[
                                { src: `smiley.gif` },
                                { alt: `HTML tutorial` },
                                { style: `width:42px; height:42px; float:right;` }
                            ]" />
                            <Markup name="img" :attrs="[
                                { src: `smiley.gif` },
                                { alt: `HTML tutorial` },
                                { style: `width:42px; height:42px; float:left;` }
                            ]" />
                        </template>
                    </Markup>

                </CodeBlock>
            </article>
        </section>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Common Image Formats
            </header>
            <article class="lesson-content">
                <UTable :columns="imageTable.columns" :rows="imageTable.rows" />
            </article>
        </section>
    </div>
</template>