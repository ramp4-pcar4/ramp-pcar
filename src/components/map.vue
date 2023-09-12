<template>
    <div>
        <div
            class="shadow-inset-bottom min-h-[20px] absolute mt-[705px] w-full z-10 pointer-events-none"
            v-if="shadowValue"
        ></div>
        <div id="ramp-map" is="rv-map" class="h-[725px]" v-pre></div>
        <div id="medium-text">
            <div id="text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae tortor at mi vestibulum tincidunt
                gravida eget nisi. Ut id finibus diam. Nullam vel leo sit amet neque fermentum venenatis. Morbi volutpat
                elit eget turpis suscipit ornare. Vivamus ultrices porta molestie. Donec eu lorem eleifend, laoreet
                augue id, lacinia orci. Ut vitae iaculis massa. Fusce vitae turpis diam. Suspendisse tempus suscipit
                sagittis. Aenean iaculis maximus nulla, eget luctus mauris tincidunt sit amet. In feugiat ex est, ac
                ultrices arcu pharetra at. Sed justo lacus, lacinia nec ex eget, semper ultrices enim. Nullam blandit
                convallis lectus, quis dictum lectus maximus eget. Maecenas ex dolor, dictum a faucibus vitae,
                sollicitudin sit amet augue.
            </div>
            <div id="text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus imperdiet urna, sit amet iaculis
                lorem tristique ut. Donec semper tortor est, id facilisis enim aliquam in. Sed id risus sit amet neque
                vehicula maximus. Cras et rhoncus nulla, et finibus mi. Donec sit amet luctus sapien, vitae ullamcorper
                purus. Proin eleifend facilisis aliquet. Maecenas lectus nulla, varius quis nibh ac, fringilla tempor
                elit. Duis fringilla varius est a malesuada. Sed aliquet cursus nibh, sed lacinia risus varius ac. Fusce
                ut lectus eget odio volutpat imperdiet et ut mauris. Suspendisse sit amet consectetur neque. Donec
                blandit molestie gravida. Praesent semper velit id lobortis tincidunt. Mauris tempus ipsum sit amet ex
                semper, posuere porta tellus aliquam.
            </div>
            <div id="ramp-map2" is="rv-map" class="h-[725px]" v-pre></div>
        </div>
        <div id="ramp-map3" is="rv-map" class="h-[725px]" v-pre></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MapScrollguard from './map-scrollguard.vue';

@Component
export default class RampMapV extends Vue {
    @Prop() config: string | undefined;
    @Prop() shadow: boolean | undefined;
    @Prop() height: string | undefined;
    @Prop() id: string | undefined;
    @Prop() version: number | undefined;

    shadowValue = false;

    mounted() {
        this.shadowValue = this.shadow ?? false;

        this.$el.querySelector('#ramp-map')?.setAttribute('id', this.id ?? 'ramp-map');

        const updatedID = this.id === undefined ? '#ramp-map' : '#' + this.id;

        if (this.height) {
            this.$el.querySelector(updatedID)?.classList.add(this.height);
            this.$el.querySelector(updatedID)?.classList.remove('h-[725px]');
        }

        const RAMP = this.version === 4 ? (window as any).RAMP4 : (window as any).RAMP;

        const _window = window as any;

        // if RAMP API is not ready yet, loop-wait until it's loaded
        if (!RAMP) {
            window.setInterval(() => this.mounted(), 500);
            return;
        }

        if (this.version === 4) {
            RAMP.createInstance(this.$el.querySelector(updatedID), require(`/public/config/ramp4/${this.config}.json`));
        } else if (this.version === 3) {
            new RAMP.Map(this.$el.querySelector(updatedID), `./config/ramp3/${this.config ? this.config : '0'}.json`);
        }

        _window.$('.flex.relative.z-10.shadow-lg.justify-center').css({
            display: 'flex'
        });
        _window.$('.text-white').css({
            display: 'block'
        });

        if (this.config === 'plugins') {
            this.$el.querySelector(updatedID)?.setAttribute('rv-plugins', 'swiper, draw');
        }

        if (this.id === `ramp-map${this.version}-5`) {
            this.$el.querySelector(updatedID)?.classList.add('w-[340px]');
        }

        if (this.id === `ramp-demo${this.version}-mobile`) {
            if (this.version === 3) {
                new RAMP.Map(this.$el.querySelector('#ramp-map2'), `./config/ramp3/mobile.json`);
                new RAMP.Map(this.$el.querySelector('#ramp-map3'), `./config/ramp3/mobile.json`);
            } else if (this.version === 4) {
                RAMP.createInstance(this.$el.querySelector('#ramp-map2'), require(`/public/config/ramp4/mobile.json`));
                RAMP.createInstance(this.$el.querySelector('#ramp-map3'), require(`/public/config/ramp4/mobile.json`));
            }

            _window.$('#medium-text').css({
                display: 'block',
                'margin-top': '2%'
            });
            _window.$('#text1').css({
                float: 'left',
                width: '15%',
                'margin-right': '2%',
                'margin-left': '2%'
            });
            _window.$('#text2').css({
                float: 'right',
                width: '15%',
                'margin-left': '2%',
                'margin-right': '2%'
            });
            _window.$('#ramp-map2').css({
                display: 'block',
                height: '625px',
                width: '50%',
                'margin-top': '2%',
                'margin-bottom': '2%',
                'margin-left': '25%'
            });
            _window.$('#ramp-map3').css({
                display: 'block',
                height: '725px',
                width: '20%',
                'margin-top': '2%',
                'margin-bottom': '2%',
                'margin-left': '40%'
            });
        } else if (this.config === 'sample_implement') {
            _window.$('.flex.relative.z-10.shadow-lg.justify-center').css({
                display: 'none'
            });
            _window.$('.text-white').css({
                display: 'none'
            });
            _window.$(updatedID).css({
                width: '50%',
                'margin-left': '25%'
            });
        }

        window.scrollTo(0, 0);
        if (this.version === 3 && this.$route.name === 'Home') {
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

#ramp-map2 {
    .flex {
        flex: 1;
    }
    .flex-grow {
        flex: 1 1 100%;
    }

    display: none;
}

#ramp-map3 {
    .flex {
        flex: 1;
    }
    .flex-grow {
        flex: 1 1 100%;
    }

    display: none;
}

#medium-text {
    display: none;
}
</style>
