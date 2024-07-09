<template>
    <div>
        <PageHeader title="Headings" />
        <p class="mb-8">
            HTML headings are titles or subtitles that you want to display on a webpage.
        </p>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Headings
            </header>
            <article class="lesson-content">
                <p>
                    HTML headings are defined with the <code class="markup">h1</code> to <code class="markup">h6</code>
                    tags.
                </p>
                <p>
                    <code class="markup">h1</code> defines the most important heading. <code class="markup">h6</code>
                    defines the least important heading.
                </p>

                <CodeBlock title="Example">
                    <h1 class="text-6xl">Heading 1</h1>
                    <h2 class="text-5xl">Heading 2</h2>
                    <h3 class="text-4xl">Heading 3</h3>
                    <h4 class="text-3xl">Heading 4</h4>
                    <h5 class="text-2xl">Heading 5</h5>
                    <h6 class="text-1xl">Heading 6</h6>
                </CodeBlock>

                <UAlert icon="i-heroicons-light-bulb-solid"
                    description="Browsers automatically add some white space (a margin) before and after a heading." />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Headings Are Important
            </header>
            <article class="lesson-content">
                <p>
                    Search engines use the headings to index the structure and content of your web pages.
                </p>
                <p>
                    Users often skim a page by its headings. It is important to use headings to show the document
                    structure.
                </p>
                <p>
                    <code class="markuph1"></code> headings should be used for main headings, followed by <code
                        class="markup">h2</code> headings, then the less important <code class="markup">h3</code>, and
                    so
                    on.
                </p>

                <UAlert icon="i-heroicons-light-bulb-solid">
                    <template #description>
                        Use HTML headings for headings only. Don't use headings to make text <b>BIG</b> or <b>bold</b>.
                    </template>
                </UAlert>
            </article>
        </section>
        
    </div>
</template>