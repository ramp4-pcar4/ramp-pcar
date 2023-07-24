<template>
    <div id="app" class="bg-white">
        <ramp-header></ramp-header>
        <router-view></router-view>
        <ramp-footer></ramp-footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import RampHeaderV from '@/components/header.vue';
import RampMapV from '@/components/map.vue';
import InfoShellV from '@/components/info/shell.vue';
import RampFooterV from '@/components/footer.vue';

@Component({
    components: {
        'ramp-header': RampHeaderV,
        'ramp-map': RampMapV,
        'info-shell': InfoShellV,
        'ramp-footer': RampFooterV
    }
})
export default class App extends Vue {
    beforeMount() {
        console.log(this.$router.currentRoute.query);
        if (this.$router.currentRoute.query['lang']) {
            this.$i18n.locale = this.$router.currentRoute.query['lang'] as string;
        }
        this.$router.replace({ query: { lang: this.$i18n.locale } });
        document.title = this.$i18n.t('page.title') as string;
        document.documentElement.lang = this.$i18n.locale;
    }
}
</script>

<style lang="scss">
// overriding rv-styles
.flex,
.flex-grow {
    flex: unset;
}

.container {
    @apply mx-[10%];
}

a {
    @apply no-underline #{!important};
}
</style>
