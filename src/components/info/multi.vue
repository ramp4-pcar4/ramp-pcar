<template>
    <div class="section py-[150px]">
        <div class="container mx-auto flex items-center justify-center">
            <div class="text-center w-[80%] md:w-2/3">
                <h2 class="!mt-0">
                    {{ $t(`multi.${section.key}.title`) }}
                </h2>
                <p>{{ $t(`multi.${section.key}.description`) }}</p>
                <div class="md:flex">
                    <div
                        v-for="(subSection, subIndex) in section.sections"
                        :key="subSection + subIndex"
                        class="flex-1 m-[20px] p-[20px]"
                        :class="subIndex % 2 === 0 ? 'bg-green' : index % 2 === 0 ? 'bg-teal' : 'bg-white'"
                    >
                        <h3>
                            {{ $t(`multi.${section.key}.${subSection}.title`) }}
                        </h3>
                        <img :src="`./img/${subSection}.svg`" alt="" class="!mb-0 h-[200px] inline-flex py-[40px]" />
                        <p class="!mb-[32px]">
                            {{ $t(`multi.${section.key}.${subSection}.description`) }}
                        </p>
                    </div>
                </div>
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
}
</script>

<style scoped lang="scss"></style>
