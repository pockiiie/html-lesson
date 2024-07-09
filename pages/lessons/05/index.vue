<template>
    <div>
        <PageHeader title="Lesson 3 - HTML Links" />
        <p class="mb-8">
            Links are found in nearly all web pages. Links allow users to click their way from page to page.
        </p>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Hyperlinks
            </header>
            <article class="lesson-content">
                <p>
                    HTML links are hyperlinks.
                </p>
                <p>
                    You can click on a link and jump to another document.
                </p>
                <p>
                    When you move the mouse over a link, the mouse arrow will turn into a little hand.
                </p>
                <UAlert description="A link does not have to be text. A link can be an image or any other HTML element!"
                    icon="i-heroicons-light-bulb-solid" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Syntax
            </header>
            <article class="lesson-content">

                <p>
                    The HTML <code class="markup">a</code> tag defines a hyperlink. It has the following syntax:
                </p>

                <CodeBlock>
                    <Markup name="a" :attrs="[{ href: 'url' }]">
                        link text
                    </Markup>
                </CodeBlock>

                <p>
                    The most important attribute of the <code class="markup">a</code> element is the <code>href</code>
                    attribute, which indicates the link's destination.
                </p>
                <p>
                    The <em>link text</em> is the part that will be visible to the reader.
                    <br>
                    Clicking on the link text, will send the reader to the specified URL address.
                </p>
                <CodeBlock title="Example">
                    <p>
                        This example shows how to create a link to W3Schools.com
                    </p>
                    <Markup name="a" :attrs="[{ href: 'https://www.w3schools.com/' }]">
                        Visit W3Schools.com!
                    </Markup>

                </CodeBlock>

                <Example url="/examples/05/links-01.html" />
                
                <p class="mt-4">
                    By default, links will appear as follows in all browsers:
                </p>

                <ul class="list-disc pl-8 mb-4">
                    <li>
                        An unvisited link is underlined and blue
                    </li>
                    <li>
                        A visited link is underlined and purple
                    </li>
                    <li>
                        An active link is underlined and red
                    </li>
                </ul>
                <UAlert description="Links can of course be styled with CSS, to get another look!"
                    icon="i-heroicons-light-bulb-solid" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The target Attribute
            </header>
            <article class="lesson-content">
                <p>
                    By default, the linked page will be displayed in the current browser window. To change this, you
                    must
                    specify another target for the link.
                </p>
                <p>
                    The <code>target</code> attribute specifies where to open the linked document.
                </p>
                <p>
                    The <code>target</code> attribute can have one of the following values:
                </p>

                <ul class="list-disc pl-8 mb-4">
                    <li>
                        <code>_self</code> - Default. Opens the document in the same window/tab as it was clicked
                    </li>
                    <li>
                        <code>_blank</code> - Opens the document in a new window or tab
                    </li>
                    <li>
                        <code>_parent</code> - Opens the document in the parent frame
                    </li>
                    <li>
                        <code>_top</code> - Opens the document in the full body of the window
                    </li>
                </ul>
                <CodeBlock title="Example">
                    <p>
                        Use target="_blank" to open the linked document in a new browser window or tab:
                    </p>
                    <Markup name="a"
                        :attrs="[{ href: 'https://www.w3schools.com/', target: '_blank', title: `Visit W3School` }]">
                        W3School
                    </Markup>

                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Absolute URLs vs. Relative URLs
            </header>
            <article class="lesson-content">
                <p>
                    Both examples above are using an <strong>absolute URL</strong> (a full web address) in the
                    <code>href</code> attribute.
                </p>
                <p>
                    A local link (a link to a page within the same website) is specified with a <strong>relative
                        URL</strong> (without the "https://www" part):
                </p>
                <CodeBlock title="Example">
                    <div>
                        Absolute URLs
                        <Markup name="a" :attrs="[{ href: 'https://www.w3.org/' }]" text="W3c" />
                        <Markup name="a" :attrs="[{ href: 'https://www.google.com/' }]" text="Google" />
                    </div>
                    <br>
                    <div>
                        Relative URLs
                        <Markup name="a" :attrs="[{ href: 'html_images.asp' }]" text="HTML Images" />
                        <Markup name="a" :attrs="[{ href: '/css/default.asp' }]" text="CSS Tutorial" />
                    </div>
                </CodeBlock>

                <CodeBlock title="Example">
                    <p>Use a full URL to link to a web page: </p>
                    <Markup name="a" :attrs="[{ href: `https://www.w3schools.com/html/default.asp` }]">
                        HTML Tutorial
                    </Markup>
                </CodeBlock>

                <CodeBlock title="Example">
                    <p>Link to a page located in the html folder on the current web site: </p>
                    <Markup name="a" :attrs="[{ href: `/html/default.asp` }]">
                        HTML Tutorial
                    </Markup>
                </CodeBlock>

                <CodeBlock title="Example">
                    <p>Link to a page located in the same folder as the current page: </p>
                    <Markup name="a" :attrs="[{ href: `default.asp` }]">
                        HTML Tutorial
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Use and Image as a Link
            </header>
            <article class="lesson-content">
                <p>
                    To use an image as a link, just put the <code class="markup">img</code> tag inside the
                    <code class="markup">a</code> tag:
                </p>
                <CodeBlock title="Example">
                    <Markup name="a" :attrs="[{ href: 'https://www.w3schools.com' }]">
                        <template #indent>
                            <Markup name="img"
                                :attrs="[{ src: '/images/nyancat.gif', alt: 'HTML tutorial', style: 'width:100px; height:60px;' }]"
                                :close="true" />
                        </template>
                    </Markup>
                </CodeBlock>

                <Example url="/examples/05/links-02.html" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Linke to an Email Address
            </header>
            <article class="lesson-content">
                <CodeBlock title="Example">
                    <Markup name="a" :attrs="[{ href: 'mailto:pockiemail@gmail.com' }]">
                        Send Email
                    </Markup>
                </CodeBlock>
                <Example url="/examples/05/links-03.html" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Button as a Link
            </header>
            <article class="lesson-content">
                <p>
                    To use an HTML button as a link, you have to add some JavaScript code.
                </p>
                <p>
                    JavaScript allows you to specify what happens at certain events, such as a click of a button.
                </p>
                <CodeBlock title="Example">
                    <Markup name="button" :attrs="[{ onclick: `document.location='default.asp'` }]">
                        HTML Tutorial
                    </Markup>
                </CodeBlock>
                <Example url="/examples/05/links-04.html" />
            </article>
        </section>

        <section class="lesson-wrapper">
            <div class="lesson-header">
                Link Titles
            </div>
            <div class="lesson-content">
                <p>
                    The <code>title</code> attribute specifies extra information about an element. The information is
                    most often
                    shown as a tooltip text when the mouse moves over the element.
                </p>
                <CodeBlock title="Example">
                    <Markup name="a"
                        :attrs="[{ href: `https://www.w3schools.com/html/`, title: `Go to W3Schools HTML section` }]">
                        Visit our HTML Tutorial
                    </Markup>
                </CodeBlock>
                <Example url="/examples/05/links-05.html" />
            </div>
        </section>
    </div>
</template>