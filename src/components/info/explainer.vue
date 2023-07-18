<template>
    <div class="section flex items-center justify-center py-[150px]">
        <div
            class="
                text-center
                !max-w-none
                w-[80%]
                md:w-2/3
                prose prose-sm
                md:prose
                lg:prose-lg
            "
        >
            <h2 class="!mt-0">
                {{ $t(`explainer.${section.key}.title`) }}
            </h2>
            <p>{{ $t(`explainer.${section.key}.description`) }}</p>
            <div class="flex flex-col">
                <div
                    class="md:flex"
                    v-for="(row, index) in section.sections"
                    :key="index"
                >
                    <div
                        v-for="(subSection, index) in row"
                        :key="subSection + index"
                        class="flex-1 mx-[20px]"
                    >
                        <img
                            :src="`./img/${subSection}.svg`"
                            class="h-[120px] !mb-0 inline-flex"
                            alt=""
                        />
                        <h3>
                            {{
                                $t(
                                    `explainer.${section.key}.${subSection}.title`
                                )
                            }}
                        </h3>
                        <p>
                            {{
                                $t(
                                    `explainer.${section.key}.${subSection}.description`
                                )
                            }}
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
export default class InfoExplainerV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;
}
</script>

<style scoped lang="scss"></style>
