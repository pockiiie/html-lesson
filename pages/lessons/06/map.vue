<script setup>
</script>
<template>
    <div>
        <PageHeader title="Image Map" />
        <p class="mb-4">
            With HTML image maps, you can create clickable areas on an image.
        </p>
        <section class="lesson-wrapper">
            <header class="lesson-header">
                Image Map
            </header>
            <article class="lesson-content">
                <p>
                    The HTML <code class="markup">map</code> tag defines an image map. An image map is an image with
                    clickable areas. The areas are defined with one or more <code class="markup">area</code> tags.
                    Try to click on the computer, phone, or the cup of coffee in the image below:
                </p>
                <CodeBlock title="Example">
                    <p>
                        Here is the HTML source code for the image map above:
                    </p>
                    <Markup name="img" :attrs="[
                        { src: `/images/workspace.jpg` },
                        { alt: `Workplace` },
                        { usemap: `#workmap` }
                    ]" />
                    <Markup name="map" :attrs="[{ name: `workmap` }]">
                        <template #indent>
                            <Markup name="area" :attrs="[
                                { shape: `rect` }, { coords: `34,44,270,350` }, { alt: `Computer` }, { href: `computer.html` }
                            ]" />
                            <Markup name="area" :attrs="[
                                { shape: `rect` }, { coords: `290,172,333,250` }, { alt: `Phone` }, { href: `phone.htm` }
                            ]" />
                            <Markup name="area" :attrs="[
                                { shape: `circle` }, { coords: `337,300,44` }, { alt: `Coffee` }, { href: `coffee.html` }
                            ]" />
                        </template>
                    </Markup>
                </CodeBlock>

                <img src="/images/workplace.jpg" alt="Workplace" usemap="#workmap" class="rounded-md m-auto">
                <map name="workmap">
                    <area shape="rect" coords="34,44,270,350" alt="Computer" href="/examples/06/map-computer.html"
                        target="_blank">
                    <area shape="rect" coords="290,172,333,250" alt="Phone" href="/examples/06/map-phone.html"
                        target="_blank">
                    <area shape="circle" coords="337,300,44" alt="Coffee" href="/examples/06/map-coffee.html"
                        target="_blank">
                </map>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                How Does it Work?
            </header>
            <article class="lesson-content">
                <p>
                    The idea behind an image map is that you should be able to perform different actions depending on
                    where
                    in the image you click.
                </p>
                <p>
                    To create an image map you need an image, and some HTML code that describes the clickable areas.
                </p>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The Image
            </header>
            <article class="lesson-content">
                <p>
                    The image is inserted using the <code class="markup">img</code> tag. The only difference from other
                    images
                    is that you must add a <code>usemap</code> attribute:
                </p>
                <CodeBlock>
                    <Markup name="img"
                        :attrs="[{ src: `workplace.jpg` }, { alt: `Workplace` }, { usemap: `#workmap` }]" />
                </CodeBlock>
                <p>
                    The <code>usemap</code> value starts with a hash tag <code>#</code> followed by the name of the
                    image map,
                    and is used to create a relationship between the image and the image map.
                </p>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">Create Image Map</header>
            <article class="lesson-content">
                <p>
                    Then, add a <code class="markup">map</code> element.
                </p>
                <p>
                    The <code class="markup">map</code> element is used to create an image map, and is linked to the
                    image by
                    using the required <code>name</code> attribute:
                </p>
                <CodeBlock>
                    <Markup name="map" :attrs="[{ name: `workmap` }]" />
                </CodeBlock>
                <p>
                    The <code>name</code> attribute must have the same value as the <code class="markup">img</code>'s
                    usemap
                    attribute .
                </p>
            </article>
        </section>

        <section class="lesson-wrapper">
            <header class="lesson-header">
                The Areas
            </header>
            <article class="lesson-content">
                <p>
                    Then, add the clickable areas.
                </p>
                <p>
                    A clickable area is defined using an <code class="markup">area</code> element.
                </p>

                <div>
                    <span class="text-xl block">Shape</span>
                    <p>
                        You must define the shape of the clickable area, and you can choose one of these values:
                    </p>
                    <ul>
                        <li>
                            <code>rect</code> - defines a rectangular region
                        </li>
                        <li>
                            <code>circle</code> - defines a circular region
                        </li>
                        <li>
                            <code>poly</code> - defines a polygonal region
                        </li>
                        <li>
                            <code>default</code> - defines the entire region
                        </li>
                    </ul>
                    <p>
                        You must also define some coordinates to be able to place the clickable area onto the image.
                    </p>
                </div>

                <div>
                    <span class="text-xl block">shape="rect"</span>
                    <p>
                        The coordinates for <code>shape="rect"</code> come in pairs, one for the x-axis and one for the
                        y-axis.
                    </p>
                    <p>
                        So, the coordinates <code>34,44</code> is located 34 pixels from the left margin and 44 pixels
                        from the
                        top:
                    </p>
                    <svg width="400" height="379" class="m-auto rounded-md">
                        <image href="/images/workplace.jpg" />
                        <line x1="0" y1="44" x2="400" y2="44" stroke="greenyellow" stroke-width="2"
                            stroke-dasharray="1%" />
                        <line x1="34" y1="0" x2="34" y2="379" stroke="greenyellow" stroke-width="2"
                            stroke-dasharray="1%" />
                        <circle r="10" cx="34" cy="44" stroke="red" stroke-width="2" fill="none" />
                    </svg>
                    <p>
                        The coordinates <code>270,350</code> is located 270 pixels from the left margin and 350 pixels
                        from the
                        top:
                    </p>
                    <svg width="400" height="379" class="m-auto rounded-md">
                        <image href="/images/workplace.jpg" />
                        <line x1="0" y1="350" x2="400" y2="350" stroke="greenyellow" stroke-width="2"
                            stroke-dasharray="1%" />
                        <line x1="270" y1="0" x2="270" y2="379" stroke="greenyellow" stroke-width="2"
                            stroke-dasharray="1%" />
                        <circle r="10" cx="270" cy="350" stroke="red" stroke-width="2" fill="none" />
                    </svg>
                    <p>Now we have enough data to create a clickable rectangular area:</p>
                    <CodeBlock title="Example">
                        <Markup name="area" :attrs="[
                            { shape: `rect` }, { coords: `34, 44, 270, 350` }, { href: `computer.html` }
                        ]" />
                    </CodeBlock>
                    <svg width="400" height="379" class="m-auto rounded-md">
                        <image href="/images/workplace.jpg" />
                        <rect width="236" height="306" x="34" y="44" fill="red" opacity="0.5" />
                    </svg>
                </div>

                <div>
                    <span class="text-xl block">shape="circle"</span>
                    <p>
                        To add a circle area, first locate the coordinates of the center of the circle:
                        <code>337,300</code>
                    </p>
                    <svg width="400" height="379" class="m-auto rounded-md">
                        <image href="/images/workplace.jpg" />
                        <line x1="0" y1="300" x2="400" y2="300" stroke="greenyellow" stroke-width="2"
                            stroke-dasharray="1%" />
                        <line x1="337" y1="0" x2="337" y2="379" stroke="greenyellow" stroke-width="2"
                            stroke-dasharray="1%" />
                        <circle r="10" cx="337" cy="300" stroke="red" stroke-width="2" fill="none" />
                    </svg>
                    <p>
                        Then specify the radius of the circle: <code>44</code> pixels
                    </p>
                    <svg width="400" height="379" class="m-auto rounded-md">
                        <image href="/images/workplace.jpg" />
                        <line x1="337" y1="300" x2="381" y2="300" stroke="greenyellow" stroke-width="2" />
                        <circle r="44" cx="337" cy="300" stroke="red" stroke-width="2" fill="none" />
                    </svg>
                    <CodeBlock title="Example">
                        <Markup name="area" :attrs="[
                            { shape: `circle` }, { coords: `337,300,44` }, { href: `coffee.html` }
                        ]" />
                    </CodeBlock>
                    <p>
                        This is the area that becomes clickable and will send the user to the page "coffee.htm":
                    </p>
                    <svg width="400" height="379" class="m-auto rounded-md">
                        <image href="/images/workplace.jpg" />
                        <circle r="44" cx="337" cy="300" stroke="red" stroke-width="2" fill="red" opacity="0.5"
                            href="map-coffee.html" />
                    </svg>
                </div>

                <div>
                    <span class="text-xl block">shape="poly"</span>
                    <p>
                        The <code>shape="poly"</code> contains several coordinate points, which creates a shape formed
                        with
                        straight lines (a polygon).
                    </p>
                    <p>
                        This can be used to create any shape.
                    </p>
                    <p>
                        Like maybe a croissant shape!
                    </p>
                    <p>
                        How can we make the croissant in the image below become a clickable link?
                    </p>
                    <img src="/images/frenchfood.jpg" alt="croissant" class="m-auto mb-4 rounded-md" />
                    <p>
                        We have to find the x and y coordinates for all edges of the croissant:
                    </p>
                    <img src="/images/frenchfood_shape.jpg" alt="croissant" class="m-auto mb-4 rounded-md" />
                    <p>
                        The coordinates come in pairs, one for the x-axis and one for the y-axis:
                    </p>
                    <CodeBlock title="Example">
                        <Markup name="area" :attrs="[
                            { shape: `poly` },
                            { coords: `140,121,181,116,204,160,204,222,191, <br>270,140,329,85,355,58,352,37, <br>322,40,259,103,161,128,147` },
                            { href: `croissant.htm` }
                        ]" />
                    </CodeBlock>
                    <p>
                        This is the area that becomes clickable and will send the user to the page "croissant.html":
                    </p>
                    <svg width="450" height="675" class="m-auto rounded-md">
                        <image href="/images/frenchfood.jpg" />
                        <polygon
                            points="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147"
                            stroke="greenyellow" stroke-width="2" fill="blue" opacity="0.3" />
                    </svg>
                </div>
            </article>
        </section>
    </div>
</template>