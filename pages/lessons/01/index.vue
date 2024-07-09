<template>
    <div>
        <PageHeader title="HTML Elements" />

        <section class="lesson-wrapper">
            <header class="lesson-header" id="elements">
                Elements
            </header>
            <article class="lesson-content">
                <p>
                    The HTML element is everything from the start tag to the end tag:
                </p>
                <Markup name="tagname" class="mb-4">Content goes here...</Markup>
                <UAlert icon="i-heroicons-information-circle" color="teal">
                    <template #description>
                        Some HTML elements have no content (like the <code class="markup">br</code> element). These
                        elements are called empty elements. Empty elements do not have an end tag!
                    </template>
                </UAlert>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Nested HTML Elements
            </header>
            <article class="lesson-content">
                <p>
                    HTML elements can be nested (this means that elements can contain other elements).
                </p>
                <p>
                    All HTML documents consist of nested HTML elements.
                </p>
                <p>
                    The following example contains four HTML elements
                    <code class="markup">html</code>,
                    <code class="markup">body</code>,
                    <code class="markup">h1</code> and
                    <code class="markup">p</code>
                </p>

                <CodeBlock title="Example">
                    <Markup name="!DOCTYPE html" :only-start="true" />
                    <Markup name="html">
                        <Markup name="body">
                            <template #indent>
                                <Markup name="h1">
                                    My First Heading
                                </Markup>
                                <Markup name="p">
                                    My First Paragraph
                                </Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Never Skip the End Tag
            </header>
            <article class="lesson-content">
                <p>
                    Some HTML elements will display correctly, even if you forget the end tag:
                </p>
                <CodeBlock title="Example">
                    <Markup name="html">
                        <Markup name="body">
                            <template #indent>
                                <Markup name="h1" :only-start="true">
                                    My First Heading
                                </Markup>
                                <Markup name="p" :only-start="true">
                                    My First Paragraph
                                </Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
            </article>

            <UAlert icon="i-heroicons-exclamation-triangle" color="amber"
                description="However, never rely on this! Unexpected results and errors may occur if you forget the end tag!" />
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Empty HTML Elements
            </header>
            <article class="lesson-content">
                <p>
                    HTML elements with no content are called empty elements.
                </p>
                <p>
                    The <code class="markup">br</code> tag defines a line break, and is an empty element without a
                    closing tag:
                </p>
                <CodeBlock title="Example">
                    <Markup name="p">
                        <template #indent>
                            This is a
                            <Markup name="br" :only-start="true" />
                            paragraph with a line break.
                        </template>
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                HTML is Not Case Sensitive
            </header>
            <article class="lesson-content">
                <p>
                    HTML tags are not case sensitive: <code class="markup">P</code> means the same as <code
                        class="markup">p</code>.
                </p>
                <p>
                    The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands
                    lowercase for stricter document types like XHTML.
                </p>
            </article>
        </section>

    </div>
</template>