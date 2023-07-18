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
                <ramp-map
                    v-show="version === 3"
                    :id="`ramp-demo3-${config}`"
                    :config="config"
                    :version="3"
                    :key="$i18n.locale"
                ></ramp-map>
            </div>
            <div v-else>
                <toggle-version
                    @ramp3="openRAMP3"
                    @ramp4="openRAMP4"
                ></toggle-version>
                <ramp-map
                    v-show="version === 4"
                    :id="`ramp-demo4-${config}`"
                    :config="config"
                    :version="4"
                    :key="$i18n.locale"
                ></ramp-map>
                <ramp-map
                    v-show="version === 3"
                    :id="`ramp-demo3-${config}`"
                    :config="config"
                    :version="3"
                    :key="$i18n.locale"
                ></ramp-map>
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
    props: ['config', 'version'],
    data() {
        return {
            defaultVersion: 3
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
    created() {
        if (!this.version) {
            this.version = this.defaultVersion;
        }
    }
};
</script>
