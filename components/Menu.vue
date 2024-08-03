<script setup>
const lessons = [
    {
        label: "Lesson 1",
        links: [
            {
                label: "Elements",
                to: "/lessons/01"
            },
            {
                label: "Attributes",
                to: "/lessons/01/attributes"
            },
            {
                label: "Headings",
                to: "/lessons/01/headings"
            },
            {
                label: "Paragraphs",
                to: "/lessons/01/paragraphs"
            },
            {
                label: "Excercise",
                to: "/excercises/01"
            },
        ],
    },
    {
        label: "Lesson 2",
        links: [
            {
                label: "Style",
                to: "/lessons/02"
            },
            {
                label: "Excercise",
                to: "/excercises/02"
            }
        ],
        content: [
            "Style", "Text Formatting", "Quatation", "Citation", "Comment"
        ]
    },
    {
        label: "Lesson 3",
        links: [
            {
                label: "Colors",
                to: "/lessons/03"
            },
            {
                label: "Excercise",
                to: "/excercises/03"
            }
        ],
    },
    {
        label: "Lesson 4",
        links: [
            {
                label: "CSS",
                to: "/lessons/04"
            },
            {
                label: "Excercise",
                to: "/excercises/04"
            }
        ],
        content: ["CSS"]
    },
    {
        label: "Lesson 5",
        links: [
            {
                label: "Links",
                to: "/lessons/05"
            },
            {
                label: "Link Colors",
                to: "/lessons/05/link-colors"
            },
            {
                label: "Bookmarks",
                to: "/lessons/05/bookmarks"
            },
            {
                label: "Excercise",
                to: "/excercises/05"
            }
        ],
    },
    {
        label: "Lesson 6",
        links: [
            {
                label: "Images",
                to: "/lessons/06"
            },
            {
                label: "Background Images",
                to: "/lessons/06/backgrounds"
            },
            {
                label: "Picture Elements",
                to: "/lessons/06/elements"
            },
            {
                label: "Image Map",
                to: "/lessons/06/map"
            },
            {
                label: "Excercise",
                to: "/excercises/06"
            }
        ],
    },
    {
        label: "Lesson 7",
        links: [
            {
                label: "Favicon",
                to: "/lessons/07"
            }
        ]
    },
    {
        label: "Lesson 8",
        links: [
            {
                label: "Page Title",
                to: "/lessons/08"
            }
        ]
    }
]

</script>

<template>
    <div>
        <UAccordion :items="lessons" color="teal" variant="subtle">
            <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost" class="h-6"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                    <span class="truncate">Lesson {{ index + 1 }}</span>

                    <template #trailing>
                        <UIcon name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']" />
                    </template>
                </UButton>
            </template>
            <template #item="{ item }">
                <UVerticalNavigation :links="item.links" :ui="{
                    wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2 ml-4',
                    base: 'group block border-s -ms-px leading-6 before:hidden',
                    padding: 'p-0 ps-4',
                    rounded: '',
                    font: '',
                    ring: '',
                    active: 'text-teal-500 dark:text-teal-400 border-current font-semibold',
                    inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                }" />
            </template>
        </UAccordion>
    </div>
</template>