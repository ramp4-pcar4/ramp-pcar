<template>
    <div class="external_sample">
        <div class="!container mx-auto prose my-[40px]">
            <h2 class="!text-[24px] !leading-[32px]">
                {{ $t(`feature.${config}.title`) }}
            </h2>
            <description-block
                class="!max-w-full text-[20px]"
                :path="`feature.${config}.description`"
            ></description-block>
            <description-block
                class="!max-w-full text-[20px]"
                :path="`sample.${config}.description`"
            ></description-block>
        </div>

        <component :is="`canada-${$i18n.locale}`">
            <toggle-version
                @ramp3="openRAMP3"
                @ramp4="openRAMP4"
                :version="version"
            />
            <keep-alive>
                <ramp-map
                    v-if="version === 3"
                    :config="config"
                    :version="3"
                    :id="`ramp-map3-${config}`"
                    :key="`ramp-map3-${config}`"
                />
                <ramp-map
                    v-if="version === 4"
                    :config="config"
                    :version="4"
                    :id="`ramp-map4-${config}`"
                    :key="`ramp-map4-${config}`"
                />
            </keep-alive>
        </component>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';
import DescriptionBlockV from '@/components/info/description-block.vue';
import CanadaEnV from '@/components/wet-templates/canada-en.vue';
import CanadaFrV from '@/components/wet-templates/canada-fr.vue';
import ToggleVersionV from '@/components/info/toggle-version.vue';

export default {
    name: 'ExternalSamples',
    components: {
        'ramp-map': RampMapV,
        'description-block': DescriptionBlockV,
        'canada-en': CanadaEnV,
        'canada-fr': CanadaFrV,
        'toggle-version': ToggleVersionV
    },
    props: ['config'],
    data() {
        return {
            previousScrollPosition: 0,
            version: 4
        };
    },
    methods: {
        openRAMP3() {
            this.version = 3;
        },
        openRAMP4() {
            this.version = 4;
        }
    },
    beforeUpdate() {
        this.previousScrollPosition = window.scrollY;
    },
    updated() {
        window.scrollTo(0, this.previousScrollPosition);
    }
};
</script>
