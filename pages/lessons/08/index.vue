<template>
    <div>
        <PageHeader title="HTML Page Title"/>
        <p class="mb-4">
            Every web page should have a page title to describe the meaning of the page.
        </p>
        <section class="lesson-wrapper">
            <heaer class="lesson-header">
                Page Title
            </heaer>
            <article class="lesson-content">
                <p>
                    The <code class="markup">title</code> element adds a title to your page:
                </p>
                <CodeBlock title="Example">
                    <Markup name="!DOCTYPE html" :only-start="true" />
                    <Markup name="html">
                        <Markup name="title">HTML Tutorial</Markup>
                        <Markup name="body">
                            <template #indent>
                                <Markup name="h1">Document Heading</Markup>
                                <Markup name="p">The content of the document ...</Markup>
                            </template>
                        </Markup>
                    </Markup>
                </CodeBlock>
            </article>
        </section>
    </div>
</template>