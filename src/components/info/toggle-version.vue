<template>
    <div class="flex flex-wrap">
        <button
            class="
                bg-teal
                py-[12px]
                px-[20px]
                rounded-lg
                border-gray-500 border
                focus:bg-teal-dark
                hover:bg-teal-dark
                !no-underline
                whitespace-nowrap
                font-bold
                m-4
            "
            type="button"
            @click="ramp3"
        >
            {{ $t('toggle.ramp.three') }}
        </button>

        <button
            class="
                bg-teal
                py-[12px]
                px-[20px]
                rounded-lg
                border-gray-500 border
                focus:bg-teal-dark
                hover:bg-teal-dark
                !no-underline
                whitespace-nowrap
                font-bold
                m-4
            "
            type="button"
            @click="ramp4"
        >
            {{ $t('toggle.ramp.four') }}
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ToggleVersionV extends Vue {
    ramp3() {
        this.$emit('ramp3');
    }

    ramp4() {
        this.$emit('ramp4');
    }
}
</script>

<style scoped></style>
