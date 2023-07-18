<template>
    <div class="section pt-[100px] pb-[300px]">
        <div class="container mx-auto">
            <div
                class="
                    max-w-[110%]
                    mx-auto
                    flex
                    items-center
                    justify-center
                    content-center
                    flex-nowrap
                    md:flex-row
                "
                :class="index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'"
            >
                <div
                    class="image-container md:mr-[40px]"
                    v-if="index % 2 !== 0 && show"
                >
                    <div v-if="index != 5 && show">
                        <toggle-version
                            @ramp3="openRAMP3"
                            @ramp4="openRAMP4"
                        ></toggle-version>
                        <ramp-map
                            v-show="version === 3"
                            height="h-[600px]"
                            :config="section.key"
                            :id="`ramp-map3-${index}`"
                            :version="3"
                        ></ramp-map>

                        <ramp-map
                            v-show="version === 4"
                            :config="section.key"
                            height="h-[600px]"
                            :id="`ramp-map4-${index}`"
                            :version="4"
                        ></ramp-map>
                    </div>
                    <img
                        v-else
                        :src="`./img/${section.index}.png`"
                        :alt="$t(`feature.${section.key}.imageDesc`)"
                    />
                </div>
                <div
                    class="flex-1 prose prose-sm md:prose lg:prose-lg"
                    :class="{ 'text-right': index % 2 !== 0 }"
                >
                    <h2>
                        {{ $t(`feature.${section.key}.title`) }}
                    </h2>
                    <description-block
                        :path="`feature.${section.key}.description`"
                        class="!mb-[36px]"
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
                        :href="links[$i18n.locale].demo[section.key]"
                        target="_blank"
                    >
                        {{ $t('button.viewDemo') }}
                    </a>
                </div>
                <div
                    class="image-container md:ml-[40px]"
                    v-if="index % 2 === 0 && show"
                >
                    <toggle-version
                        @ramp3="openRAMP3"
                        @ramp4="openRAMP4"
                    ></toggle-version>
                    <ramp-map
                        v-show="version === 3"
                        :config="section.key"
                        height="h-[600px]"
                        :id="`ramp-map3-${index}`"
                        :version="3"
                    ></ramp-map>
                    <ramp-map
                        v-show="version === 4"
                        :config="section.key"
                        height="h-[600px]"
                        :id="`ramp-map4-${index}`"
                        :version="4"
                    ></ramp-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import DescriptionBlockV from './description-block.vue';
import RampMapV from '@/components/map.vue';
import ToggleVersionV from './toggle-version.vue';
import { links } from '@/configs/links';
import { layout } from '@/configs/layout';

@Component({
    components: {
        'description-block': DescriptionBlockV,
        'ramp-map': RampMapV,
        'toggle-version': ToggleVersionV
    }
})
export default class InfoFeatureV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;
    @Prop() version: number = 3;
    @Prop() show: boolean = false;

    links = links;
    layout = layout;

    openRAMP3 = () => {
        this.version = 3;
    };

    openRAMP4 = () => {
        this.version = 4;
    };

    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 1500);
    }
}
</script>

<style scoped lang="scss">
.image-container {
    @apply flex-1 justify-center items-center max-h-[460px] sm:max-h-[500px] lg:max-h-[420px] xl:max-h-[510px];
    flex: 2;
    img {
        @apply max-h-[460px] sm:max-h-[500px] lg:max-h-[420px] xl:max-h-[510px];
    }
}
.text-link {
    @apply underline #{!important};
}
</style>
