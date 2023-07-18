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
                ml-4
                mr-4
                mb-4
            "
            :class="{ 'bg-teal-dark': version === 3 }"
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
                ml-4
                mr-4
                mb-4
            "
            :class="{ 'bg-teal-dark': version === 4 }"
            type="button"
            @click="ramp4"
        >
            {{ $t('toggle.ramp.four') }}
        </button>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from 'vue-property-decorator';
@Component
export default class ToggleVersionV extends Vue {
    @Prop() version: number | undefined;

    ramp3() {
        this.$emit('ramp3');
    }

    ramp4() {
        this.$emit('ramp4');
    }
}
</script>
<style scoped></style>
