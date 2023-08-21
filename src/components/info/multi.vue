<template>
    <div class="section py-[125px]">
        <!-- py-[125px] -->
        <div class="container mx-auto flex items-center justify-center">
            <div class="text-center w-[80%] md:w-2/3">
                <!-- <div class="flex justify-end">
                    <nav class="font-bold h-6 mb-20" aria-label="Breadcrumb">
                        <ul class="breadcrumb-list inline-flex">
                            <li
                                v-if="selectedSubSection"
                                class="flex items-center"
                            >
                                <a
                                    href="#"
                                    @click="resetSelection"
                                    class="hover:text-blue-400"
                                    >{{ $t(`header.title`) + '4' }}</a
                                >
                                <span class="fill-current ml-4"> / </span>
                            </li>
                            <li
                                v-if="selectedSubSection"
                                class="flex items-center"
                            >
                                <span
                                    class="text-gray-500"
                                    aria-current="page"
                                    >{{
                                        $t(
                                            `multi.${section.key}.${selectedSubSection}.title`
                                        )
                                    }}</span
                                >
                            </li>
                        </ul>
                    </nav>
                </div> -->
                <h2 class="!mt-0">
                    <!-- {{
                        selectedSubSection
                            ? $t(
                                  `multi.${section.key}.${selectedSubSection}.title`
                              )
                            : $t(`multi.${section.key}.title`)
                    }} -->
                    {{ $t(`multi.${section.key}.title`) }}
                </h2>
                <!-- <p v-if="!selectedSubSection">
                    {{ $t(`multi.${section.key}.description`) }}
                </p>
                <p v-if="!selectedSubSection">
                    {{ $t(`multi.${section.key}.subDescription`) }}
                </p>
                <p v-else-if="selectedSubSection">
                    {{
                        $t(
                            `multi.${section.key}.${selectedSubSection}.subTitle`
                        )
                    }}
                </p> -->
                <p>{{ $t(`multi.${section.key}.description`) }}</p>
                <!-- <div v-if="!selectedSubSection" class="md:flex"> -->
                <div class="md:flex">
                    <div
                        v-for="(subSection, subIndex) in section.sections"
                        :key="subSection + subIndex"
                        class="flex-1 m-[20px] p-[20px]"
                        :class="
                            subIndex % 2 === 0
                                ? 'bg-green'
                                : index % 2 === 0
                                ? 'bg-teal'
                                : 'bg-white'
                        "
                    >
                        <!-- @click="selectSection(subSection)"  hover:bg-blue-200" -->
                        <h3>
                            {{ $t(`multi.${section.key}.${subSection}.title`) }}
                        </h3>
                        <img
                            :src="`./img/${subSection}.svg`"
                            alt=""
                            class="!mb-0 h-[200px] inline-flex py-[40px]"
                        />
                        <p class="!mb-[32px]">
                            {{
                                $t(
                                    `multi.${section.key}.${subSection}.description`
                                )
                            }}
                        </p>
                    </div>
                </div>
                <!-- <div v-if="selectedSubSection" class="md:flex">
                    <div class="flex flex-col">
                        <div class="md:flex">
                            <div
                                v-for="(subSection, subIndex) in section
                                    .subSections[selectedSubSection]"
                                :key="subSection + subIndex"
                                class="p-10"
                            >
                                <img
                                    :src="`./img/${subSection}.svg`"
                                    class="h-[120px] !mb-0 inline-flex"
                                    alt=""
                                />
                                <p>
                                    {{
                                        $t(
                                            `multi.${section.key}.${selectedSubSection}.${subSection}`
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InfoMultiV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;
    // selectedSubSection: any = null;

    // selectSection(subSection: any) {
    //     this.selectedSubSection = subSection;
    // }

    // resetSelection(event: Event) {
    //     event.preventDefault();
    //     this.selectedSubSection = null;
    // }
}
</script>

<style scoped>
/* .breadcrumb-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.breadcrumb-list li {
    margin-right: -20px;
}

.breadcrumb-list li::before {
    content: none;
}

.section {
    padding-top: 50px;
} */
</style>
