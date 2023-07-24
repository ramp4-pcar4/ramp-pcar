<template>
    <div class="storylines bg-white" v-if="loaded && config !== undefined">
        <header class="gray-200 sticky top-0 h-16 leading-9 w-full z-50 border-b border-gray-500 bg-gray-200">
            <div class="flex w-full sm:px-6 py-3 mx-auto">
                <storylines-mobile-toc
                    class="mobile-menu"
                    :active-chapter-index="activeChapterIndex"
                    :slides="config.slides"
                    :lang="lang"
                    :plugin="true"
                />
                <div class="w-mobile-full truncate">
                    <span class="font-semibold text-lg m-1">{{ config.title }}</span>
                </div>
            </div>
        </header>

        <!-- <storylines-intro :config="config.introSlide"></storylines-intro> -->

        <div class="w-full mx-auto" id="story">
            <storylines-content :config="config" @step="updateActiveIndex" :lang="lang" :plugin="true" />
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
        this.lang = newLang;
        this.fetchConfig(`storylines/storylines_${newLang}.json`);
    }

    created(): void {
        console.log(this);
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
                console.error(`There was an error fetching the Storylines config: ${err}`);
            });
    }

    updateActiveIndex(idx: number): void {
        this.activeChapterIndex = idx;
    }
}
</script>

<style scoped lang="scss">
// re-apply rv-styles
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
    ::v-deep .prose a:not([target='_blank']) {
        font-weight: 500;
        text-decoration: underline !important;
        text-decoration-style: dotted !important;
        text-underline-offset: 3px;
    }
    ::v-deep .md-content li {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    ::v-deep .prose a:link {
        color: #00f;
    }
    ::v-deep .prose a:hover {
        color: purple;
    }
    ::v-deep .mobile-menu ul {
        margin: 0;
    }
    ::v-deep .side-menu li.is-active,
    ::v-deep .mobile-menu li.is-active {
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

@media screen and (min-width: 640px) {
    .mobile-menu {
        display: none !important;
    }
    .w-mobile-full {
        width: 100% !important;
    }
    ::v-deep .story-slide {
        min-height: 500px;
    }
}
</style>
