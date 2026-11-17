<template>
    <div>
        <div
            class="shadow-inset-bottom min-h-[20px] absolute mt-[705px] w-full z-10 pointer-events-none"
            v-if="shadowValue"
        ></div>
        <div id="ramp-map" is="rv-map" class="h-[725px]" v-pre></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MapScrollguard from './map-scrollguard.vue';

@Component
export default class RampMapV extends Vue {
    @Prop() shadow: boolean | undefined;
    @Prop() id: string | undefined;

    shadowValue = false;

    mounted() {
        this.shadowValue = this.shadow ?? false;

        this.$el.querySelector('#ramp-map')?.setAttribute('id', this.id ?? 'ramp-map');

        const updatedID = this.id === undefined ? '#ramp-map' : '#' + this.id;

        const RAMP = (window as any).RAMP;

        // if RAMP API is not ready yet, wait and try again
        if (!RAMP) {
            window.setTimeout(() => this.mounted(), 500);
            return;
        }

        new RAMP.Map(this.$el.querySelector(updatedID), './config/ramp3/0.json');

        window.scrollTo(0, 0);

        RAMP.mapAdded.subscribe(async (mapi: any) => {
            const scrollguardComponent = new Vue({
                render: (h) =>
                    h('map-scrollguard', {
                        props: { _mapi: mapi }
                    }),
                components: {
                    //eslint-disable-next-line
                    'map-scrollguard': MapScrollguard
                },
                i18n: this.$i18n
            }).$mount();

            const innerShell = this.$el.querySelector('.rv-inner-shell')!;

            // insert the scrollguard as the first child of the inner shell
            // this will place the guard above the map, but below all other RAMP controls
            // when the guard is active, it grays out the map, but not the controls
            innerShell.insertBefore(scrollguardComponent.$el, innerShell.firstChild);
        });
    }
}
</script>

<style lang="scss">
#ramp-map {
    .flex {
        flex: 1;
    }
    .flex-grow {
        flex: 1 1 100%;
    }
}
</style>
