<template>
    <div class="section" :class="section.key === 'storyramp' ? 'py-[50px]' : 'pb-[150px] pt-[125px]'">
        <div class="container mx-auto">
            <div v-if="section.key === 'storyramp'">
                <storylines></storylines>
            </div>
            <div
                class="max-w-[100%] mx-auto flex items-center justify-center content-center flex-nowrap md:flex-row"
                :class="index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'"
                :id="`ramp-maps-${index}`"
                v-else
            >
                <div
                    :class="{
                        'map-mobile-container md:mr-[20px]': index === 5,
                        'map-container md:mr-[20px]': index !== 5
                    }"
                    v-if="index % 2 !== 0"
                >
                    <toggle-version @ramp3="openRAMP3" @ramp4="openRAMP4" :version="version" :key="version" />
                    <div class="rv-loading-screen" :class="{ 'rv-loaded': isVisible, '!min-w-[340px]': index === 5 }">
                        <div class="rv-loading-section rv-left"></div>
                        <div class="rv-loading-section rv-right"></div>
                    </div>
                    <keep-alive>
                        <ramp-map
                            v-if="version === 4 && isVisible"
                            :config="section.key"
                            height="h-[600px]"
                            :id="`ramp-map4-${index}`"
                            :version="4"
                            :key="`ramp-map4-${index}`"
                        />
                    </keep-alive>
                    <div v-if="isVisible">
                        <keep-alive>
                            <ramp-map
                                v-if="version === 3"
                                height="h-[600px]"
                                :config="section.key"
                                :id="`ramp-map3-${index}`"
                                :version="3"
                                :key="`ramp-map3-${index}`"
                            />
                        </keep-alive>
                    </div>
                </div>
                <div
                    class="flex-1 px-[20px] prose prose-sm md:prose lg:prose-lg"
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
                        class="bg-teal py-[12px] px-[30px] rounded-lg border-gray-500 border focus:bg-teal-dark hover:bg-teal-dark !no-underline whitespace-nowrap"
                        :href="links[$i18n.locale].demo[section.key]"
                        target="_blank"
                    >
                        {{ $t('button.viewDemo') }}
                    </a>
                </div>
                <div class="map-container md:ml-[20px]" v-if="index % 2 === 0">
                    <toggle-version @ramp3="openRAMP3" @ramp4="openRAMP4" :version="version" :key="version" />
                    <div class="rv-loading-screen" :class="{ 'rv-loaded': isVisible }">
                        <div class="rv-loading-section rv-left"></div>
                        <div class="rv-loading-section rv-right"></div>
                    </div>
                    <keep-alive>
                        <ramp-map
                            v-if="version === 4 && isVisible"
                            :config="section.key"
                            height="h-[600px]"
                            :id="`ramp-map4-${index}`"
                            :version="4"
                            :key="`ramp-map4-${index}`"
                        />
                    </keep-alive>
                    <div v-if="isVisible">
                        <keep-alive>
                            <ramp-map
                                v-if="version === 3"
                                :config="section.key"
                                height="h-[600px]"
                                :id="`ramp-map3-${index}`"
                                :version="3"
                                :key="`ramp-map3-${index}`"
                            />
                        </keep-alive>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { links } from '@/configs/links';
import DescriptionBlockV from './description-block.vue';
import StorylinesV from './storylines.vue';
import RampMapV from '@/components/map.vue';
import ToggleVersionV from './toggle-version.vue';

@Component({
    components: {
        'description-block': DescriptionBlockV,
        storylines: StorylinesV,
        'ramp-map': RampMapV,
        'toggle-version': ToggleVersionV
    }
})
export default class InfoFeatureV extends Vue {
    @Prop() index!: number;
    @Prop() section!: any;

    isVisible = false;
    links = links;
    previousScrollPosition = 0;
    version = 4;
    show = false;

    openRAMP3() {
        this.version = 3;
    }

    openRAMP4() {
        this.version = 4;
    }

    beforeUpdate() {
        if (this.isVisible) {
            this.previousScrollPosition = window.scrollY;
        }
    }

    updated() {
        if (this.isVisible) {
            window.scrollTo(0, this.previousScrollPosition);
        }
    }

    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 1500);

        let timeoutID = 0;
        const callback = (entries: any) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                timeoutID = setTimeout(() => {
                    this.isVisible = true;
                }, 500);
            } else {
                clearTimeout(timeoutID);
                this.isVisible = false;
                this.version = 4;
            }
        };

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };

        let observer = new IntersectionObserver(callback, options);
        let target = this.$el.querySelector(`[id="ramp-maps-${this.index}"]`);
        if (target) {
            observer.observe(target);
        }
    }
}
</script>

<style scoped lang="scss">
.map-container {
    @apply flex-1 overflow-hidden justify-center items-center min-h-[682px] w-[340px] sm:min-w-[485px] md:min-w-[485px] lg:min-w-[656px] xl:min-w-[827px] 2xl:min-w-[997px];
    flex: 2;
}
.map-mobile-container {
    @apply flex-1 overflow-hidden justify-center items-center min-h-[682px] max-w-[340px];
    flex: 2;
}
.text-link {
    @apply underline #{!important};
}
.rv-loading-screen {
    @apply w-[340px] sm:min-w-[485px] md:min-w-[485px] lg:min-w-[656px] xl:min-w-[827px] 2xl:min-w-[997px];
    position: absolute;
    min-height: 600px;
    overflow: hidden;
    z-index: 10000;
    $reveal-duration: 0.7s;
    $swift-ease-in-out-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    $swift-ease-in-duration: 0.3s;

    .rv-loading-section {
        position: absolute;
        top: 0;
        width: 51%;
        height: 100%;
        background: #222222;

        transition: transform $reveal-duration $swift-ease-in-out-timing-function;

        &.rv-left {
            left: 0;
        }

        &.rv-right {
            right: 0;
        }
    }

    &.rv-loaded {
        visibility: hidden;
        opacity: 0;
        transition: visibility, opacity;
        transition-delay: $reveal-duration + $swift-ease-in-duration;
        transition-duration: 0.1s;

        .rv-left {
            transition-delay: $swift-ease-in-duration;
            transform: translate3d(-100%, 0%, 0);
        }

        .rv-right {
            transition-delay: $swift-ease-in-duration;
            transform: translate3d(100%, 0%, 0);
        }
    }
}
</style>
