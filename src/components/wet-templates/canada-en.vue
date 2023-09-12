<template>
    <div>
        <div id="def-top">
            <!-- Write closure fall-back static file -->
            <ul id="wb-tphp">
                <li class="wb-slc">
                    <a
                        class="wb-sl cursor-pointer !text-white"
                        tabindex="0"
                        @click="scrollTo('wb-cont')"
                        @keypress.enter="scrollTo('wb-cont')"
                        >Skip to main content</a
                    >
                </li>
                <li class="wb-slc visible-sm visible-md visible-lg">
                    <a
                        class="wb-sl cursor-pointer !text-white"
                        tabindex="0"
                        @click="scrollTo('wb-info')"
                        @keypress.enter="scrollTo('wb-info')"
                        >Skip to "About this site"</a
                    >
                </li>
            </ul>
            <header>
                <div id="wb-bnr" class="container">
                    <div class="row">
                        <div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
                            <a href="https://www.canada.ca/en.html" property="url"
                                ><img
                                    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/assets/sig-blk-en.svg"
                                    alt=""
                                    property="logo"
                                />
                                <span class="wb-inv" property="name">
                                    Government of Canada /
                                    <span lang="fr">Gouvernement du Canada</span></span
                                ></a
                            >
                            <meta property="areaServed" typeOf="Country" content="Canada" />
                            <link
                                property="logo"
                                href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/assets/wmms-blk.svg"
                            />
                        </div>
                        <section id="wb-srch" class="col-lg-8 text-right">
                            <h2>Search</h2>
                            <form
                                action="https://www.canada.ca/en/sr.html"
                                method="get"
                                name="cse-search-box"
                                role="search"
                                class="form-inline"
                            >
                                <div class="form-group">
                                    <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
                                    <input name="cdn" value="canada" type="hidden" />
                                    <input name="st" value="s" type="hidden" />
                                    <input name="num" value="10" type="hidden" />
                                    <input name="langs" value="en" type="hidden" />
                                    <input name="st1rt" value="1" type="hidden" />
                                    <input name="s5bm3ts21rch" value="x" type="hidden" />
                                    <input
                                        id="wb-srch-q"
                                        list="wb-srch-q-ac"
                                        class="wb-srch-q form-control"
                                        name="q"
                                        type="search"
                                        value=""
                                        size="34"
                                        maxlength="170"
                                        placeholder="Search Canada.ca"
                                    />
                                    <input type="hidden" name="_charset_" value="UTF-8" />
                                    <datalist id="wb-srch-q-ac">
                                        <!--[if lte IE 9]><select><![endif]-->
                                        <!--[if lte IE 9]></select><![endif]-->
                                    </datalist>
                                </div>
                                <div class="form-group submit">
                                    <button
                                        type="submit"
                                        id="wb-srch-sub"
                                        class="btn btn-primary btn-small"
                                        name="wb-srch-sub"
                                    >
                                        <span class="glyphicon-search glyphicon"></span
                                        ><span class="wb-inv">Search</span>
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
                <nav class="gcweb-menu" typeof="SiteNavigationElement">
                    <div class="container">
                        <h2 class="wb-inv">Menu</h2>
                        <button type="button" aria-haspopup="true" aria-expanded="false">
                            <span class="wb-inv">Main </span>Menu
                            <span class="expicon glyphicon glyphicon-chevron-down"></span>
                        </button>
                        <ul role="menu" aria-orientation="vertical">
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/jobs.html"
                                    >Jobs and the workplace</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html"
                                    >Immigration and citizenship</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/business.html"
                                    >Business and industry</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/environment.html"
                                    >Environment and natural resources</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/defence.html"
                                    >National security and defence</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/culture.html"
                                    >Culture, history and sport</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/policing.html"
                                    >Policing, justice and emergencies</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/transport.html"
                                    >Transport and infrastructure</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=eng"
                                    >Canada and the world</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/finance.html"
                                    >Money and finances</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/en/services/science.html"
                                    >Science and innovation</a
                                >
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav id="wb-bc" property="breadcrumb">
                    <h2>You are here:</h2>
                    <div class="container">
                        <div class="row">
                            <ol class="breadcrumb">
                                <li>
                                    <a href="https://www.canada.ca/en.html">Canada.ca</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
        <main role="main" property="mainContentOfPage" id="wb-cont">
            <slot></slot>
        </main>
        <div id="def-preFooter">
            <!-- Write closure fall-back static file -->
            <div class="pagedetails">
                <dl id="wb-dtmd">
                    <dt>Date modified:</dt>
                    <dd><time property="dateModified">2021-11-22</time></dd>
                </dl>
            </div>
        </div>
        <div id="def-footer">
            <!-- Write closure fall-back static file -->
            <footer id="wb-info">
                <div class="landscape">
                    <nav class="container wb-navcurr">
                        <h2 class="wb-inv">About government</h2>
                        <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                            <li>
                                <a href="https://www.canada.ca/en/contact.html">Contact us</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/en/government/publicservice.html"
                                    >Public service and military</a
                                >
                            </li>
                            <li>
                                <a href="https://www.canada.ca/en/news.html">News</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/en/government/system/laws.html"
                                    >Treaties, laws and regulations</a
                                >
                            </li>
                            <li>
                                <a href="https://www.canada.ca/en/transparency/reporting.html"
                                    >Government-wide reporting</a
                                >
                            </li>
                            <li>
                                <a href="http://pm.gc.ca/eng">Prime Minister</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/en/government/system.html">How government works</a>
                            </li>
                            <li>
                                <a href="http://open.canada.ca/en/">Open government</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="brand">
                    <div class="container">
                        <div class="row">
                            <nav class="col-md-10 ftr-urlt-lnk">
                                <h2 class="wb-inv">About this site</h2>
                                <ul>
                                    <li>
                                        <a href="https://www.canada.ca/en/social.html">Social media</a>
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/en/mobile.html">Mobile applications</a>
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/en/newsite.html">About Canada.ca</a>
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/en/transparency/terms.html"
                                            >Terms and conditions</a
                                        >
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="col-xs-6 visible-sm visible-xs tofpg">
                                <a
                                    class="cursor-pointer"
                                    tabindex="0"
                                    @click="scrollTo('wb-cont')"
                                    @keypress.enter="scrollTo('wb-cont')"
                                    >Top of Page <span class="glyphicon glyphicon-chevron-up"></span
                                ></a>
                            </div>
                            <div class="col-xs-6 col-md-2 text-right">
                                <img
                                    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/assets/wmms-blk.svg"
                                    alt="Symbol of the Government of Canada"
                                />
                                <meta property="areaServed" typeOf="Country" content="Canada" />
                                <link
                                    property="logo"
                                    href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/assets/wmms-blk.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CanadaEnV extends Vue {
    scrollTo(id: string) {
        const el = document.querySelector(`#${id}`) as HTMLElement;

        window.scrollTo(0, el.offsetTop);
    }
}
</script>

<style lang="scss" scoped>
.wb-slc {
    top: initial !important;
}
</style>
