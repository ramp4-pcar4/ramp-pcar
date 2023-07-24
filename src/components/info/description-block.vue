<template>
    <i18n :path="path" tag="p">
        <template #br><br /><br /></template>
        <template #cam
            ><a class="text-link" :href="links[$i18n.locale]['cam']" target="_blank">{{
                $t('links.label.cam')
            }}</a></template
        >
        <template #cesi
            ><a class="text-link" :href="links[$i18n.locale]['cesi']" target="_blank">{{
                $t('links.label.cesi')
            }}</a></template
        >
        <template #geomet
            ><a class="text-link" :href="links[$i18n.locale]['geomet']" target="_blank">{{
                $t('links.label.geomet')
            }}</a></template
        >
    </i18n>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { links } from '@/configs/links';

@Component
export default class DescriptionBlockV extends Vue {
    @Prop() path!: string;

    links = links;
}
</script>

<style lang="scss" scoped></style>
