<template>
    <div class="sample">
        <div class="!container mx-auto prose my-[40px]">
            <h2>{{ $t(`feature.${config}.title`) }}</h2>
            <description-block
                class="!max-w-full text-[20px]"
                :path="`feature.${config}.description`"
            ></description-block>
            <description-block
                class="!max-w-full text-[20px]"
                :path="`sample.${config}.description`"
            ></description-block>
        </div>
        <ramp-map class="!container mx-auto mb-[60px]" :config="config" :key="$i18n.locale"></ramp-map>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';
import DescriptionBlockV from '@/components/info/description-block.vue';

export default {
    name: 'Samples',
    components: {
        'ramp-map': RampMapV,
        'description-block': DescriptionBlockV
    },
    props: ['config']
};
</script>
