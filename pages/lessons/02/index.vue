<template>
    <div>
        <PageHeader title="Lesson 2" />
        <div class="lesson-wrapper">
            <div class="lesson-header">
                Style
            </div>
            <div class="lesson-content">
                <ul>
                    <li>Style attribute</li>
                    <li>Background Color
                        <code>background-color: red;</code>
                    </li>
                    <li>
                        Text color
                        <code>color: blue;</code>
                        <code>color: #0000ff;</code>

                    </li>
                    <li>
                        Text size
                        <code>size: 120%;</code>
                        <code>size: 2em;</code>

                    </li>
                    <li>
                        Font face
                        <code>font-family: vedana;</code>
                        <code>font-family: "Comic Sans MS";</code>

                    </li>
                </ul>
            </div>
        </div>
        <div class="lesson-wrapper">
            <div class="lesson-header">
                Text Formatting

            </div>
            <div class="lesson-content">
                <ul>
                    <li><code class="markup">b</code> - <b>Bold text</b></li>
                    <li><code class="markup">strong</code> - <strong>Important text</strong></li>
                    <li><code class="markup">i</code> - <i>Italic text</i></li>
                    <li><code class="markup">em</code> - <em>Emphasized text</em></li>
                    <li><code class="markup">mark</code> - <mark>Marked text</mark></li>
                    <li><code class="markup">small</code> - <small>Smaller text</small></li>
                    <li><code class="markup">del</code> - <del>Deleted text</del></li>
                    <li><code class="markup">ins</code> - <ins>Inserted text</ins></li>
                    <li><code class="markup">sub</code> - <sub>Subscript text</sub></li>
                    <li><code class="markup">sup</code> - <sup>Superscript text</sup></li>
                </ul>
            </div>
        </div>
        <div class="lesson-wrapper">
            <div class="lesson-header">
                Quatation and Citation

            </div>

            <div class="lesson-content">
                <ul class="list-disc">
                    <li>
                        Quation : <code class="markup">blockquote</code>
                        <div class="example">
                            <blockquote>
                                The Quick Fox Jump Over The Lazy Dog
                            </blockquote>
                        </div>
                    </li>
                    <li>
                        Short Quation : <code class="markup">q</code>
                        <div class="example">
                            <q>
                                The Quick Fox Jump Over The Lazy Dog
                            </q>
                        </div>
                    </li>
                    <li>
                        Abbreviations : <code class="markup">abbr</code>
                        <div class="example">
                            <abbr title="The Quick Fox Jump Over The Lazy Dog">
                                The Quick Fox Jump Over The Lazy Dog
                            </abbr>
                        </div>
                    </li>
                    <li>
                        Contact Information : <code class="markup">address</code>
                        <div class="example">
                            <address>
                                The Quick Fox Jump Over The Lazy Dog

                            </address>
                        </div>
                    </li>
                    <li>
                        Word Title : <code class="markup">cite</code>
                        <div class="example">
                            <cite>
                                The Quick Fox Jump Over The Lazy Dog
                            </cite>
                        </div>
                    </li>
                    <li>
                        Bi-Directional Override : <code>bdo</code>
                        <div class="example">
                            <bdo dir="example">
                                The Quick Fox Jump Over The Lazy Dog
                            </bdo>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="lesson-wrapper">
            <div class="lesson-header">
                Comments

            </div>
            <div class="lesson-content">
                HTML comments are not displayed in the browser, but they can help document your
                HTML source code.
                <div class="code">
                    &lt;!-- This is comment --&gt;<!-- This is comment that show only in code -->

                    <Markup name="a" :attrs="[{ href: 'default.asp' }]" :indent="true">
                        <template #indent>
                            <Markup name="img" :attrs="[{ src: 'images/sample.jpg' }]" :close="true" />
                        </template>
                    </Markup>

                    <Markup name="a" :attrs="[{ href: 'default.asp' }]">
                        test
                    </Markup>
                </div>
            </div>
        </div>
        <div class="my-8">
            <NuxtLink to="/excercises/02" class="text-bold text-xl text-amber-400 hover:text-amber-200">
                <UIcon name="i-heroicons-beaker-solid" />
                Excercise
            </NuxtLink>
        </div>
    </div>
</template>
