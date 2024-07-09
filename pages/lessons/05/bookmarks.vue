<template>
    <div>
        <PageHeader title="HTML Bookmarks" />
        <p>
            HTML links can be used to create bookmarks, so that readers can jump to specific parts of a web page.
        </p>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Create a Bookmark in HTML
            </header>
            <article class="lesson-content">
                <p>
                    Bookmarks can be useful if a web page is very long.
                </p>
                <p>
                    To create a bookmark - first create the bookmark, then add a link to it.
                </p>
                <p>
                    When the link is clicked, the page will scroll down or up to the location with the bookmark.
                </p>
                <CodeBlock title="Example">
                    <p>
                        First, use the <code>id</code> attribute to create a bookmark:
                    </p>
                    <Markup name="h2" :attrs="[{id: 'C4'}]">Chapter 4</Markup>
                    <p class="mt-4">
                        Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:
                    </p>
                    <Markup name="a" :attrs="[{href: '#C4'}]">Jump to Chapter 4</Markup>
                    <p class="mt-4">
                        You can also add a link to a bookmark on another page:
                    </p>
                    <Markup name="a" :attrs="[{href: 'html_demo.html#C4'}]">Jump to Chapter 4</Markup>
                    <Markup name="div">
                        TEST
                        </Markup>

                </CodeBlock>
                <UButton to="/examples/05/bookmarks-01.html" target="_blank">View Example</UButton>

            </article>
        </section>
    </div>
    </template>