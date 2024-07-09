<template>
    <div>
        <PageHeader title="HTML Links - Different Colors" />
        <p class="mb-8">
            An HTML link is displayed in a different color depending on whether it has been visited, is unvisited, or is
            active.
        </p>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                HTML Link Colors
            </header>
            <article class="lesson-content">
                <p>
                    By default, a link will appear like this (in all browsers):

                </p>
                <ul>
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
                <p>
                    You can change the link state colors, by using CSS:
                </p>

                <CodeBlock title="Example">
                    <p>
                        Here, an unvisited link will be green with no underline. A visited link will be pink with no
                        underline. An active link will be yellow and underlined. In addition, when mousing over a link
                        (a:hover) it will become red and underlined:
                    </p>

                    <Markup name="style">
                        <Css name="a:link" :attrs="[
                            { color: `green` },
                            { backgroundColor: `transparent` },
                            { textDecoration: `none` }
                        ]" />
                        <Css name="a:visited" :attrs="[
                            { color: `pink` },
                            { backgroundColor: `transparent` },
                            { textDecoration: `none` },
                        ]" />
                        <Css name="a:hover" :attrs="[
                            { color: `red` },
                            { backgroundColor: `transparent` },
                            { textDecoration: `underline` },
                        ]" />

                        <Css name="a:active" :attrs="[
                            { color: `yellow` },
                            { backgroundColor: `transparent` },
                            { textDecoration: `underline` },
                        ]" />
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Link Buttons
            </header>
            <article class="lesson-content">
                <p>
                    A link can also be styled as a button, by using CSS:
                </p>
                <p class="p-8">
                    <a href="#" class="inline py-4 px-8 bg-red-400 hover:bg-red-800">
                        Example Button Link
                    </a>
                </p>
                <CodeBlock title="Example">
                    <Markup name="style">
                        <Css name="a:link, a:visited" :attrs="[
                            { backgroundColor: `#f44336` },
                            { color: `white` },
                            { padding: `15px 25px` },
                            { textAlign: `center` },
                            { textDecoration: `none` },
                            { display: `inline-block` },
                        ]" />
                        <Css name="a:hover, a:active" :attrs="[
                            { backgroudmColor: `red` }
                        ]" />
                    </Markup>

                </CodeBlock>
            </article>
        </section>
    </div>
</template>