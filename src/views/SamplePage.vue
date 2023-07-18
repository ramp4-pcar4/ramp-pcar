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
        <div class="!container mx-auto mb-[60px]">
            <div v-if="config === 'clipnship' || config === 'plugins'">
                <ramp-map :id="`ramp-demo3-${config}`" :config="config" :version="3" :key="$i18n.locale" />
            </div>
            <div v-else>
                <toggle-version @ramp3="openRAMP3" @ramp4="openRAMP4" :version="version" />
                <keep-alive>
                    <ramp-map
                        v-if="version === 4"
                        :id="`ramp-demo4-${config}`"
                        :config="config"
                        :version="4"
                        :key="`ramp-demo4-${config}`"
                    />
                    <ramp-map
                        v-if="version === 3"
                        :id="`ramp-demo3-${config}`"
                        :config="config"
                        :version="3"
                        :key="`ramp-demo3-${config}`"
                    />
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';
import DescriptionBlockV from '@/components/info/description-block.vue';
import ToggleVersionV from '@/components/info/toggle-version.vue';

export default {
    name: 'Samples',
    components: {
        'ramp-map': RampMapV,
        'description-block': DescriptionBlockV,
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
