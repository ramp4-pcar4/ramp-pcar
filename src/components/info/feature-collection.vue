<template>
    <div class="section py-[150px]">
        <div class="container mx-auto">
            <div
                class="
                    text-center
                    md:flex
                    mx-auto
                    gap-[80px]
                    w-[80%]
                    flex-wrap
                    justify-center
                "
            >
                <div
                    class="
                        flex flex-col
                        items-center
                        mx-4
                        mb-[60px]
                        mw-[325px]
                        md:w-auto
                        prose prose-sm
                        md:prose
                        lg:prose-lg
                        !max-w-none
                        flex-1 flex-basis-0
                    "
                    v-for="(key, index) in section.keys"
                    :key="key + index"
                >
                    <h2 class="!mt-0 min-h-[100px]">
                        {{ $t(`feature.${key}.title`) }}
                    </h2>
                    <description-block
                        class="!mb-[36px] flex-1"
                        :path="`feature.${key}.description`"
                    ></description-block>
                    <a
                        class="
                            bg-teal
                            py-[12px]
                            px-[30px]
                            rounded-lg
                            border-gray-500 border
                            focus:bg-teal-dark
                            hover:bg-teal-dark
                            !no-underline
                            whitespace-nowrap
                        "
                        :href="links[$i18n.locale].demo[key]"
                        target="_blank"
                    >
                        {{ $t('button.viewDemo') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import DescriptionBlockV from './description-block.vue';
import { links } from '@/configs/links';

@Component({
    components: {
        'description-block': DescriptionBlockV
    }
})
export default class InfoFeatureCollectionV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;

    links = links;
}
</script>

<style scoped lang="scss">
.text-link {
    @apply underline #{!important};
}
</style>
