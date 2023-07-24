<template>
    <div class="storylines bg-white" v-if="loaded && config !== undefined">
        <header
            class="
                gray-200
                sticky
                top-0
                z-50
                border-b border-gray-500
                bg-gray-200
                justify-between
            "
        >
            <div class="flex w-full p-3 mx-auto">
                <!-- <MobileMenuV
                class="mobile-menu"
                :active-chapter-index="activeChapterIndex"
                :slides="config.slides"
                :lang="lang"
            /> -->
                <div class="w-mobile-full truncate">
                    <span class="font-semibold text-lg m-1">{{
                        config.title
                    }}</span>
                </div>
            </div>
        </header>

        <!-- <storylines-intro :config="config.introSlide"></storylines-intro> -->

        <div class="w-full mx-auto" id="story">
            <storylines-content
                :config="config"
                @step="updateActiveIndex"
                :lang="lang"
                :plugin="true"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component({})
export default class StorylinesV extends Vue {
    config: any = undefined;
    loaded = false;

    activeChapterIndex = -1;
    lang = 'en';

    @Watch('$i18n.locale')
    onLangChange(newLang: string, oldLang: string) {
        this.fetchConfig(`storylines/storylines_${newLang}.json`);
    }

    created(): void {
        this.lang = this.$router.currentRoute.query['lang']
            ? (this.$router.currentRoute.query['lang'] as string)
            : this.lang;
        this.fetchConfig(`storylines/storylines_${this.lang}.json`);
    }

    fetchConfig(fileName: string) {
        // fetch demo storylines config file contents
        this.loaded = false;
        fetch(fileName)
            .then((res) => {
                res.json().then((config) => {
                    this.config = config;
                    this.loaded = true;
                });
            })
            .catch((err) => {
                console.error(
                    `There was an error fetching the Storylines config: ${err}`
                );
            });
    }

    updateActiveIndex(idx: number): void {
        this.activeChapterIndex = idx;
    }
}
</script>

<style scoped lang="scss">
// reapply rv-styles
::v-deep .flex {
    flex: 1 !important;
}

::v-deep .flex .flex-grow {
    box-sizing: border-box;
}

#intro {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.storylines {
    ::v-deep .story-scrollama {
        border-color: #e5e7eb;
    }

    ::v-deep .side-menu li.is-active {
        fill: #00d2d3;
        stroke: #00d2d3;
    }

    ::v-deep .hooper-indicator.is-active {
        background-color: #00d2d3 !important;
    }

    ::v-deep .hooper-pagination {
        transform: none !important;
    }

    ::v-deep li {
        position: static;
        padding: 0;
        margin: 0;
    }

    ::v-deep li::before {
        content: none;
    }

    .w-mobile-full {
        width: 80%;
    }
}

@media screen and (max-width: 640px) {
    .w-mobile-full {
        width: 100% !important;
    }
}
</style>
