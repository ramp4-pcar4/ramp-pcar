<template>
    <div id="footer" class="text-white">
        <div class="map-banner">
            <div class="flex w-full h-full py-[25px] justify-center text-center bg-light-blue-transparent">
                <div class="flex justify-center w-full md:w-2/3">
                    <div
                        class="backdrop-blur bg-black-transparent h-[500px] w-full md:w-[800px] p-[30px] !text-white text-right flex-col flex items-end justify-center pointer-events-auto prose !prose-white prose-sm md:prose lg:prose-lg !max-w-none"
                    >
                        <h2>{{ $t('contact.getInTouch') }}</h2>

                        <input
                            type="text"
                            :placeholder="$t('contact.name')"
                            v-model="name"
                            :class="{
                                'bg-transparent w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400': true,
                                'border-red-500': formError.name,
                                'mb-8': !formError.name || name
                            }"
                            @input="formError.name = false"
                            required
                        />
                        <div v-if="formError.name" class="text-red-500 my-0">
                            {{ $t('contact.nameRequired') }}
                        </div>

                        <input
                            type="email"
                            :placeholder="$t('contact.email')"
                            v-model="email"
                            :class="{
                                'bg-transparent w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400': true,
                                'border-red-500': formError.email || (invalidEmail && validated),
                                'mb-8': !validated || (!formError.email && !invalidEmail)
                            }"
                            @input="formError.email = false"
                            required
                        />
                        <div v-if="formError.email" class="text-red-500 my-0">
                            {{ $t('contact.emailRequired') }}
                        </div>
                        <div v-else-if="invalidEmail && validated" class="text-red-500 my-0">
                            {{ $t('contact.emailInvalid') }}
                        </div>

                        <textarea
                            :placeholder="$t('contact.details')"
                            v-model="details"
                            :class="{
                                'bg-transparent w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none h-36': true,
                                'border-red-500': formError.details
                            }"
                            @input="formError.details = false"
                            required
                        ></textarea>
                        <div v-if="formError.details" class="text-red-500 my-0">
                            {{ $t('contact.detailsRequired') }}
                        </div>
                        <button
                            :class="[
                                'border-white rounded-lg p-[12px] border-2 font-bold focus:bg-gray-600 !no-underline text-xl mt-4 relative',
                                { 'hover:bg-gray-600': !sent }
                            ]"
                            :disabled="sent || sending"
                            @click="sendEmail"
                        >
                            <span v-if="sending">
                                <span class="flex items-center">
                                    <svg
                                        class="animate-spin h-5 w-5 text-gray-600 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            class="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            stroke-width="4"
                                        ></circle>
                                        <path
                                            class="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6H6c0 3.309-2.691 6-6 6z"
                                        ></path>
                                    </svg>
                                    <span>{{ $t('button.sending') }}</span>
                                </span>
                            </span>
                            <span v-else>
                                {{ sent ? $t('button.sent') : $t('button.send') }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex text-xl py-[20px] bg-gray-600 justify-center">
            <div class="!flex flex-wrap sm:flex-nowrap justify-center items-center w-[80%] md:w-2/3">
                <a href="" class="flex w-max">
                    <img src="../assets/logo-no-text.svg" class="w-[100px] h-[100px] !m-0" alt="" />
                    <div class="!flex flex-col justify-center text-white">
                        <h1 class="!my-0 !font-semibold ml-[-3px] !text-[36px] !leading-[40px] border-0 pb-0">
                            {{ $t('header.title') }}
                        </h1>
                        <p class="text-[20px] !my-0">
                            {{ $t('header.subtitle') }}
                        </p>
                    </div>
                </a>
                <a
                    href="https://github.com/ramp4-pcar4"
                    class="!text-white sm:ml-auto self-center !text-[24px] !leading=[32px]"
                    title="GitHub"
                    aria-label="GitHub"
                    role="button"
                >
                    <font-awesome-icon icon="fa-brands fa-github" style="color: #ffffff" class="w-12 h-12" />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { links } from '@/configs/links';
import { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

@Component
export default class RampFooterV extends Vue {
    links = links;
    name = '';
    email = '';
    details = '';

    formError: Record<string, boolean> = {
        details: false,
        email: false,
        name: false
    };

    validated = false;
    sending = false;
    sent = false;

    get invalidEmail() {
        return this.email && !this.isEmailValid(this.email);
    }

    async sendEmail() {
        var error = false;
        this.validated = true;

        const data: Record<string, string> = {
            name: this.name,
            email: this.email,
            details: this.details
        };

        const fields: string[] = ['name', 'email', 'details'];

        fields.forEach((field: string) => {
            if (!data[field]) {
                error = true;
                this.formError[field] = true;
            }
        });

        if (!error && !this.invalidEmail) {
            try {
                this.sending = true;
                await axios
                    .post(
                        'https://rampmarketingapp.azurewebsites.net/api/SendEmail?code=GtVWNX3MATbZy54Ie-8Wlb5aCELpDn0TuzxQM5JZRWbjAzFuY9sM9w==',
                        data
                    )
                    .then((result) => {
                        if (result.status === 200) {
                            this.$toast.success(this.$t('contact.success'), {
                                position: POSITION.BOTTOM_CENTER,
                                timeout: 3000,
                                closeOnClick: true
                            });
                            this.sent = true;
                            this.sending = false;
                        }
                    });
            } catch (error) {
                this.sending = false;
                this.$toast.error(this.$t('contact.error'), {
                    position: POSITION.BOTTOM_CENTER,
                    timeout: 3000,
                    closeOnClick: true
                });
            }
        }
    }

    isEmailValid(email: string): boolean {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
</script>

<style scoped lang="scss">
.map-banner {
    background-image: url('../assets/banner.png');
}
a,
p,
h1 {
    font-family: inherit !important;
}
</style>
