<template>
    <div class="relative z-10 shadow-lg">
        <span class="flex"
            ><button class="ml-auto mr-[20px] underline" @click="changeLang()">
                {{ $t('header.changeLang') }}
            </button></span
        >
        <div
            class="
                !container
                mx-auto
                flex
                justify-center
                items-center
                flex-wrap
                gap-y-[8px]
            "
        >
            <a href="" class="flex">
                <img
                    src="../assets/logo-no-text.svg"
                    class="w-[100px] h-[100px] !m-0"
                    alt="Logo for RAMP"
                />
                <div class="flex flex-col justify-center text-black">
                    <h1
                        class="
                            !my-0
                            !font-semibold
                            ml-[-3px]
                            !text-[36px]
                            !leading-[40px]
                            border-0
                            pb-0
                        "
                    >
                        {{ $t('header.title') }}
                    </h1>
                    <p class="text-[20px] !my-0">
                        {{ $t('header.subtitle') }}
                    </p>
                </div>
            </a>
            <div class="lg:ml-auto flex mb-[8px] !text-[16px]">
                <a
                    class="button cursor-pointer"
                    @click="scrollToFeatures()"
                    @keypress.enter="scrollToFeatures()"
                    tabindex="0"
                    v-if="$router.currentRoute.name === 'Home'"
                >
                    {{ $t('header.features') }}
                </a>
                <a class="button" href="https://github.com/fgpv-vpgf">
                    {{ $t('header.github') }}
                </a>
                <a class="button font-bold border-4 border-black">
                    <router-link to="/#footer">
                        {{ $t('header.getInTouch') }}</router-link
                    >
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { links } from '@/configs/links';

@Component
export default class RampHeaderV extends Vue {
    links = links;

    changeLang() {
        this.$i18n.locale = this.$i18n.locale === 'en' ? 'fr' : 'en';

        this.$router.replace({ query: { lang: this.$i18n.locale } });
        document.title = this.$i18n.t('page.title') as string;
        document.documentElement.lang = this.$i18n.locale;
    }

    scrollToFeatures() {
        const el = document.querySelector('div#features') as HTMLElement;

        window.scrollTo(0, el.offsetTop);
    }
}
</script>

<style scoped lang="scss">
a.button {
    @apply flex text-black items-center px-[8px] sm:px-[16px] mx-[4px] h-[48px] sm:h-[64px] rounded-[6px] text-[18px] leading-[28px]
                sm:text-[24px] sm:leading-[32px] focus:bg-gray-100 hover:bg-gray-100;
}
.logo {
    background-image: url('../assets/logo.svg');
}
a,
p,
h1 {
    font-family: inherit !important;
}
</style>
