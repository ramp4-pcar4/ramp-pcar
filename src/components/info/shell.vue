<template>
    <div id="features" class="!max-w-none">
        <component
            :is="mapping[section.type]"
            v-for="(section, index) in features"
            :key="section.type + index"
            :section="section"
            :index="index"
            :class="{ 'bg-teal': index % 2 !== 0 }"
        ></component>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { layout } from '@/configs/layout';
import InfoFeatureV from './feature.vue';
import InfoFeatureCollectionV from './feature-collection.vue';
import InfoExplainerV from './explainer.vue';
import InfoMultiV from './multi.vue';
import CarouselV from './carousel.vue';

@Component({
    components: {
        'info-feature': InfoFeatureV,
        'info-feature-collection': InfoFeatureCollectionV,
        'info-explainer': InfoExplainerV,
        'info-multi': InfoMultiV,
        carousel: CarouselV
    }
})
export default class InfoShellV extends Vue {
    features = layout;

    mapping = {
        feature: 'info-feature',
        'feature-collection': 'info-feature-collection',
        explainer: 'info-explainer',
        multi: 'info-multi',
        carousel: 'carousel'
    };
}
</script>

<style scoped lang="scss"></style>
