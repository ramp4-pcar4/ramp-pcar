<template>
    <div class="section" :class="section.key === 'storyramp' ? 'py-[50px]' : 'py-[150px]'">
        <div class="container mx-auto">
            <div v-if="section.key === 'storyramp'">
                <storylines></storylines>
            </div>
            <div
                class="max-w-[80%] mx-auto flex items-center justify-center content-center flex-nowrap md:flex-row"
                :class="index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'"
                v-else
            >
                <div class="image-container md:mr-[40px]" v-if="index % 2 !== 0">
                    <img :src="`./img/${section.index}.png`" :alt="$t(`feature.${section.key}.imageDesc`)" />
                </div>
                <div class="flex-1" :class="{ 'text-right': index % 2 !== 0 }">
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
                <div class="image-container md:ml-[40px]" v-if="index % 2 === 0">
                    <img :src="`./img/${section.index}.png`" :alt="$t(`feature.${section.key}.imageDesc`)" />
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

@Component({
    components: {
        'description-block': DescriptionBlockV,
        storylines: StorylinesV
    }
})
export default class InfoFeatureV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;

    links = links;
}
</script>

<style scoped lang="scss">
.image-container {
    @apply flex justify-center items-center max-h-[460px] sm:max-h-[500px] lg:max-h-[420px] xl:max-h-[510px];
    flex: 2;
    img {
        @apply max-h-[460px] sm:max-h-[500px] lg:max-h-[420px] xl:max-h-[510px];
    }
}
.text-link {
    @apply underline #{!important};
}
</style>
