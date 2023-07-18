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
            <ramp-map
                :config="config"
                :version="3"
                :id="`ramp-map-${config}`"
            ></ramp-map>
        </component>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';
import DescriptionBlockV from '@/components/info/description-block.vue';
import CanadaEnV from '@/components/wet-templates/canada-en.vue';
import CanadaFrV from '@/components/wet-templates/canada-fr.vue';

export default {
    name: 'ExternalSamples',
    components: {
        'ramp-map': RampMapV,
        'description-block': DescriptionBlockV,
        'canada-en': CanadaEnV,
        'canada-fr': CanadaFrV
    },
    props: ['config']
};
</script>
