<template>
    <div>
        <PageHeader title="Colors" />
        <p>
            HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.
        </p>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Color Names
            </header>
            <div class="lesson-content">
                <ul>
                    <li>
                        <p>
                            In HTML, a color can be specified by using a color name
                        </p>
                        <div class="grid grid-cols-2" style="margin:0 -16px;line-height:80px;color:white;">
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:tomato;">
                                    Tomato
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:orange;">
                                    Orange
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:dodgerblue;">
                                    DodgerBlue
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:mediumseagreen;">
                                    MediumSeaGreen
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:gray;">
                                    Gray
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:slateblue;">
                                    SlateBlue
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:violet;">
                                    Violet
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-full text-center" style="background-color:lightgray; color:#444444">
                                    LightGray
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Background Color
            </header>
            <article class="lesson-content">
                <div style="background-color:dodgerblue; text-align:center;color:white;font-size:24px;">
                    Hello World
                </div>
                <div class="text-wrap mb-4" style="background-color:tomato; color:white;">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
                <CodeBlock title="Example">
                    <Markup name="h1" :attrs="[{ style: 'background-color: dogerblue;' }]">
                        Hello World
                    </Markup>
                    <Markup name="p" :attrs="[{ style: 'background-color: tomato;' }]">
                        Lorem ipsum...
                    </Markup>
                </CodeBlock>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                Text Color
            </header>
            <article class="lesson-content">
                <div>
                    <div class="text-cyan-200">Hello Heaven</div>
                    <div class="text-amber-200">Hello World</div>
                    <div class="text-rose-700">Hello Hell</div>
                </div>
                <CodeBlock title="Example">
                    <Markup name="h1" :attrs="[{ style: 'color: tomato;' }]">
                        Hello World Again!
                    </Markup>
                    <Markup name="p" :attrs="[{ style: 'color: dodgerblue;' }]">
                        This must be DogerBlue
                    </Markup>
                    <Markup name="div" :attrs="[{ style: 'color: mediumseagreen;' }]">
                        Can you see the sea?
                    </Markup>
                </CodeBlock>
            </article>
        </section>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Border Color
            </header>
            <article class="lesson-content">
                <div>
                    <div class="border-2 mb-2 p-2 border-cyan-200 border-dotted">Hello Heaven</div>
                    <div class="border-2 mb-2 p-2 border-amber-200">Hello World</div>
                    <div class="border-2 mb-2 p-2 border-rose-700">Hello Hell</div>
                </div>
                <CodeBlock title="Example">
                    <Markup name="h1" :attrs="[{ style: 'border: 2px solid tomato;' }]">
                        Hello Heaven
                    </Markup>
                    <Markup name="div" :attrs="[{ style: 'border:2px solid dodgerblue;' }]">
                        Hello World
                    </Markup>
                    <Markup name="span" :attrs="[{ style: 'border:2px solid violet;' }]">
                        Hello Hell
                    </Markup>
                </CodeBlock>
            </article>
        </section>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Color Values
            </header>
            <article class="lesson-content">
                <p class="mb-4">
                    In HTML, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and
                    HSLA values.
                </p>
                <p>
                    The following three <code class="markup">div</code> elements have their background color set
                    with
                    RGB, HEX, and HSL values:
                </p>
                <div class="text-center"
                    style="line-height:60px;color:white;font-size:20px; font-weight:bold;font-family:Consolas, 'Courier New', Courier, monospace">
                    <div style="background-color:rgb(255, 99, 71); margin:10px 0;">
                        RGB - rgb(255, 99, 71)
                    </div>
                    <div style="background-color:#ff6347; margin:10px 0;">
                        HEX - #ff6347
                    </div>
                    <div style="background-color:hsl(9, 100%, 64%); margin:10px 0;">
                        Hue Saturation Lightness -
                        hsl(9, 100%, 64%)
                    </div>
                </div>
                <p>
                    The following two <code class="markup">div</code> elements have their background color set with
                    RGBA and HSLA values,
                </p>
                <p>
                    which add an Alpha channel to the color (here we have 50% transparency):
                </p>
                <div class="text-center bg-white p-4 rounded-2xl"
                    style="line-height:60px;color:white;font-size:20px;font-weight:bold;font-family:Consolas, 'Courier New', Courier, monospace">
                    <div style="background-color:rgba(255, 99, 71, 0.8);margin:10px 0;">rgba(255, 99, 71, 0.5)</div>
                    <div style="background-color:hsla(9, 100%, 64%, 0.5);margin:10px 0;">hsla(9, 100%, 64%, 0.5)
                    </div>
                </div>
            </article>
        </section>
        <section class="my-8">
            <NuxtLink to="/excercises/03" class="text-bold text-xl text-amber-400 hover:text-amber-200">
                <UIcon name="i-heroicons-beaker-solid" />
                Excercise
            </NuxtLink>
        </section>
    </div>
</template>