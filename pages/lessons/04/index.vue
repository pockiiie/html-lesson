<template>
    <div>
        <PageHeader title="CSS - Cascading Style Sheets" />
        <p>
            CSS stands for Cascading Style Sheets
        </p>
        <p>
            CSS saves a lot of work. It can control the layout of multiple web pages all at once.
        </p>
        <div style="position:relative;height:220px;margin-top:50px;">
            <div
                style="margin-top:30px;width:360px;height:130px;padding:20px;border-radius:10px;border:10px solid #EE872A;font-size:120%;">
                <h1 class="text-xl">CSS = Styles and Colors</h1>
                <div style="letter-spacing:12px;font-size:15px;position:relative;left:25px;top:10px;">
                    Manipulate Text
                </div>
                <div style="color:#40B3DF;letter-spacing:12px;font-size:16px;position:relative;left:25px;top:20px;">
                    Colors,
                    <span style="background-color:#B4009E;color:#ffffff;">&nbsp;Boxes</span>
                </div>
            </div>
        </div>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                What is CSS?
            </header>
            <article class="lesson-content">
                <p>
                    Cascading Style Sheets (CSS) is used to format the layout of a webpage.
                </p>
                <p>
                    With CSS, you can control the color, font, the size of text, the spacing between elements, how
                    elements are positioned and laid out, what background images or background colors are to be used,
                    different displays for different devices and screen sizes, and much more!
                </p>
                <UAlert icon="i-heroicons-light-bulb-solid">
                    <template #description>
                        With CSS, you can control the color, font, the size of text, the spacing between elements, how
                        elements
                        are positioned and laid out, what background images or background colors are to be used,
                        different
                        displays for different devices and screen sizes, and much more!
                    </template>
                </UAlert>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Using CSS
            </header>
            <article class="lesson-content">
                <p>
                    CSS can be added to HTML documents in 3 ways:
                </p>
                <ul class="list-disc pl-8 mb-4">
                    <li>
                        <b>Inline</b> - by using the style attribute inside HTML elements
                    </li>
                    <li>
                        <b>Internal</b> - by using a <code class="markup">style</code> element in the <code
                            class="markup">head</code>
                        section
                    </li>
                    <li>
                        <b>External</b> - by using a <code class="markup">link</code> element to link to an external CSS
                        file
                    </li>
                </ul>
                <p>
                    The most common way to add CSS, is to keep the styles in external CSS files. However, in this
                    tutorial
                    we will use inline and internal styles, because this is easier to demonstrate, and easier for you to
                    try it
                    yourself.
                </p>

            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Inline CSS
            </header>
            <article class="lesson-content">
                <p>
                    An inline CSS is used to apply a unique style to a single HTML element.

                </p>
                <p>

                    An inline CSS uses the style attribute of an HTML element.
                </p>
                <p>
                    The following example sets the text color of the
                    <code class="markup">h1</code> element to blue, and the text color of the <code
                        class="markup">p</code>
                    element to red:
                </p>

                <CodeBlock title="Example">
                    <Markup name="h1" :attrs="[{ style: `color:blue;` }]">
                        A Blue Heading
                    </Markup>
                    <Markup name="p" :attrs="[{ style: `color:red;` }]">
                        A red paragraph.
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Internal CSS
            </header>
            <article class="lesson-content">
                <p>
                    An internal CSS is used to define a style for a single HTML page.
                </p>
                <p>
                    An internal CSS is defined in the <code class="markup">head</code> section of an HTML page, within a
                    <code class="markup">style</code> element.
                </p>
                <p>
                    The following example sets the text color of ALL the <code class="markup">h1</code> elements (on
                    that page)
                    to blue, and the text color of ALL the <code class="markup">p</code> elements to red. In addition,
                    the page
                    will be displayed with a "powderblue" background color:
                </p>
                <CodeBlock title="Example">
                    <Markup name="!Doctype html" :close="true" :onlyStart="true" />
                    <Markup name="html">
                        <Markup name="head">
                            <Markup name="style">
                                <template #indent>
                                    <Css name="body" :attrs="[{ backgroundColor: `powderblue` }]" />
                                    <Css name="h1" :attrs="[{ color: `blue` }]" />
                                    <Css name="p" :attrs="[{ color: `red` }]" />
                                </template>
                            </Markup>
                        </Markup>
                        <Markup name="body">
                            <template #indent>
                                <Markup name="h1">
                                    This is a heading
                                </Markup>
                                <Markup name="p">
                                    This is a paragraph.
                                </Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                External CSS
            </header>
            <article class="lesson-content">
                <p>
                    An external style sheet is used to define the style for many HTML pages.
                </p>
                <p>
                    To use an external style sheet, add a link to it in the <code class="markup">head</code> section of
                    each
                    HTML page:
                </p>
                <CodeBlock title="Example">
                    <Markup name="!Doctype html" :close="true" :onlyStart="true" />
                    <Markup name="html">
                        <Markup name="head">
                            <Markup name="link" :attrs="[{ rel: `stylesheet`, href: `styles.css` }]" :onlyStart="true"
                                :close="true" class="pl-8" />
                        </Markup>
                        <Markup name="body">
                            <template #indent>
                                <Markup name="h1">
                                    This is a heading
                                </Markup>
                                <Markup name="p">
                                    This is a paragraph.
                                </Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>

                <p>
                    The external style sheet can be written in any text editor. The file must not contain any HTML code,
                    and
                    must be saved with a .css extension.
                </p>
                <p>
                    Here is what the "styles.css" file looks like:
                </p>

                <CodeBlock title="styles.css">
                    <Css name="body" :attrs="[{ backgroundColor: `powderblue` }]" />
                    <Css name="h1" :attrs="[{ color: `blue` }]" />
                    <Css name="p" :attrs="[{ color: `red` }]" />
                </CodeBlock>

                <UAlert title="Tip" icon="i-heroicons-light-bulb-solid">
                    <template #description>
                        With an external style sheet, you can change the look of an entire web site, by changing one
                        file!
                    </template>
                </UAlert>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                CSS Border
            </header>
            <div class="lesson-content">
                <p>
                    The CSS <code class="markup">border</code> property defines a border around an HTML element.

                </p>
                <CodeBlock title="Example">
                    <Css name="p" :attrs="[{ border: `2px solid powderblue` }]" />
                </CodeBlock>
            </div>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                CSS Padding
            </header>
            <div class="lesson-content">
                The CSS padding property defines a padding (space) between the text and the border.
                <CodeBlock title="Example">
                    <Css name="p" :attrs="[{
                        border: `2px solid powderblue`,
                        padding: `30px`
                    }]" />
                </CodeBlock>
            </div>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                CSS Margin
            </header>
            <div class="lesson-content">
                <p>
                    The CSS margin property defines a margin (space) outside the border.
                </p>
                <CodeBlock title="Example">
                    <Css name="p" :attrs="[{
                        border: `2px solid powderblue`,
                        margin: `30px`
                    }]" />
                </CodeBlock>
            </div>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Link to External CSS
            </header>
            <article class="lesson-content">
                <p>
                    External style sheets can be referenced with a full URL or with a path relative to the current web
                    page.
                </p>
                <CodeBlock title="Example">
                    <p>
                        This example uses a full URL to link to a style sheet:
                    </p>
                    <Markup name="link" :attrs="[{
                        rel: `stylesheet`,
                        href: `https://www.w3schools.com/html/styles.css`
                    }]" :onlyStart="true" />
                </CodeBlock>

                <CodeBlock title="Example">
                    <p>
                        This example links to a style sheet located in the html folder on the current web site:
                    </p>
                    <Markup name="link" :attrs="[{
                        rel: `stylesheet`,
                        href: `/html/styles.css`
                    }]" :onlyStart="true" />
                </CodeBlock>

                <CodeBlock title="Example">
                    <p>
                        This example links to a style sheet located in the same folder as the current page:
                    </p>
                    <Markup name="link" :attrs="[{
                        rel: `stylesheet`,
                        href: `styles.css`
                    }]" :onlyStart="true" />
                </CodeBlock>
            </article>
        </section>
    </div>
</template>