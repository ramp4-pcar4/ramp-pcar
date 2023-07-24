<template>
    <div class="home">
        <ramp-map :shadow="true" :key="$i18n.locale"
            ><div class="flex justify-center w-full container mx-auto absolute top-[214px] pointer-events-none">
                <div class="flex justify-end w-full md:w-2/3">
                    <div
                        class="backdrop-blur bg-black-transparent h-[450px] w-full md:w-[700px] p-[40px] !text-white text-right flex-col flex items-end justify-center pointer-events-auto prose !prose-white prose-sm md:prose lg:prose-lg !max-w-none"
                    >
                        <h2>{{ $t('map.title') }}</h2>

                        <p class="!mt-[0px] max-w-[470px]">
                            {{ $t('map.description') }}
                        </p>
                        <a
                            class="border-white rounded-lg p-[12px] border-2 font-bold focus:bg-gray-600 hover:bg-gray-600 !no-underline text-xl"
                        >
                            <router-link :to="{ hash: '#footer' }"> {{ $t('button.requestDemo') }}</router-link>
                        </a>
                    </div>
                </div>
            </div></ramp-map
        >
        <info-shell></info-shell>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';
import InfoShellV from '@/components/info/shell.vue';
import { links } from '@/configs/links';

export default {
    name: 'Home',
    components: {
        'ramp-map': RampMapV,
        'info-shell': InfoShellV
    },
    data: function () {
        return {
            links: links
        };
    }
};
</script>

<style lang="scss">
.home {
    rv-appbar {
        @apply hidden #{!important};
    }
    .rv-content-pane {
        @apply hidden #{!important};
    }
}
</style>
