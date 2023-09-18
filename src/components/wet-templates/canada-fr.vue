<template>
    <div>
        <div id="def-top">
            <ul id="wb-tphp">
                <li class="wb-slc">
                    <a
                        class="wb-sl cursor-pointer !text-white"
                        tabindex="0"
                        @click="scrollTo('wb-cont')"
                        @keypress.enter="scrollTo('wb-cont')"
                        >Passer au contenu principal</a
                    >
                </li>
                <li class="wb-slc visible-sm visible-md visible-lg">
                    <a
                        class="wb-sl cursor-pointer !text-white"
                        tabindex="0"
                        @click="scrollTo('wb-info')"
                        @keypress.enter="scrollTo('wb-info')"
                        >Passer à «&#160;À propos de ce site&#160;»</a
                    >
                </li>
            </ul>
            <header>
                <div id="wb-bnr" class="container mx-auto">
                    <div class="row">
                        <div class="brand col-xs-5 col-md-4">
                            <a href="https://www.canada.ca/fr.html"
                                ><img
                                    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/assets/sig-blk-fr.svg"
                                    alt=""
                                /><span class="wb-inv">
                                    Gouvernement du Canada /
                                    <span lang="en">Government of Canada</span></span
                                ></a
                            >
                        </div>
                        <section id="wb-srch" class="col-lg-8 text-right">
                            <h2>Recherche</h2>
                            <form
                                action="https://www.canada.ca/fr/sr.html"
                                method="get"
                                name="cse-search-box"
                                role="search"
                                class="form-inline"
                            >
                                <div class="form-group">
                                    <label for="wb-srch-q" class="wb-inv">Rechercher dans Canada.ca</label>
                                    <input name="cdn" value="canada" type="hidden" />
                                    <input name="st" value="s" type="hidden" />
                                    <input name="num" value="10" type="hidden" />
                                    <input name="langs" value="fr" type="hidden" />
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
                                        placeholder="Rechercher dans Canada.ca"
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
                                        ><span class="wb-inv">Recherche</span>
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
                <nav class="gcweb-menu" typeof="SiteNavigationElement">
                    <div class="container mx-auto">
                        <h2 class="wb-inv">Menu</h2>
                        <button type="button" aria-haspopup="true" aria-expanded="false">
                            Menu<span class="wb-inv"> principal</span>
                            <span class="expicon glyphicon glyphicon-chevron-down"></span>
                        </button>
                        <ul role="menu" aria-orientation="vertical">
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/emplois.html"
                                    >Emplois et milieu de travail</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/immigration-citoyennete.html"
                                    >Immigration et citoyenneté</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://voyage.gc.ca/">Voyage et tourisme</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/entreprises.html"
                                    >Entreprises et industrie</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/prestations.html"
                                    >Prestations</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/sante.html">Santé</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/impots.html">Impôts</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/environnement.html"
                                    >Environnement et ressources naturelles</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/defense.html"
                                    >Sécurité nationale et défense</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/culture.html"
                                    >Culture, histoire et sport</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/police.html"
                                    >Services de police, justice et urgences</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/transport.html"
                                    >Transport et infrastructure</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=fra"
                                    >Canada et le monde</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/finance.html"
                                    >Argent et finances</a
                                >
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="https://www.canada.ca/fr/services/science.html"
                                    >Science et innovation</a
                                >
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav id="wb-bc" property="breadcrumb">
                    <h2>Vous êtes ici :</h2>
                    <div class="container mx-auto">
                        <div class="row">
                            <ol class="breadcrumb">
                                <li>
                                    <a href="https://www.canada.ca/fr.html">Canada.ca</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

        <slot></slot>

        <div id="def-preFooter">
            <!-- Write closure fall-back static file -->
            <div class="pagedetails">
                <dl id="wb-dtmd">
                    <dt>Date de modification&nbsp;:</dt>
                    <dd><time property="dateModified">2021-11-22</time></dd>
                </dl>
            </div>
        </div>
        <div id="def-footer">
            <footer id="wb-info">
                <div class="landscape">
                    <nav class="container mx-auto wb-navcurr">
                        <h2 class="wb-inv">Au sujet du gouvernement</h2>
                        <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                            <li>
                                <a
                                    href="https://www.canada.ca/fr/environnement-changement-climatique/organisation/coordonnees.html"
                                    >Contactez-nous</a
                                >
                            </li>
                            <li>
                                <a href="https://www.canada.ca/fr/gouvernement/min.html">Ministères et organismes</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/fr/gouvernement/fonctionpublique.html"
                                    >Fonction publique et force militaire</a
                                >
                            </li>
                            <li>
                                <a href="https://www.canada.ca/fr/nouvelles.html">Nouvelles</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/fr/gouvernement/systeme/lois.html"
                                    >Traités, lois et règlements</a
                                >
                            </li>
                            <li>
                                <a href="https://www.canada.ca/fr/transparence/rapports.html"
                                    >Rapports à l'échelle du gouvernement</a
                                >
                            </li>
                            <li>
                                <a href="http://pm.gc.ca/fra">Premier ministre</a>
                            </li>
                            <li>
                                <a href="https://www.canada.ca/fr/gouvernement/systeme.html"
                                    >Comment le gouvernement fonctionne</a
                                >
                            </li>
                            <li>
                                <a href="http://ouvert.canada.ca/">Gouvernement ouvert</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="brand">
                    <div class="container mx-auto">
                        <div class="row">
                            <nav class="col-md-10 ftr-urlt-lnk">
                                <h2 class="wb-inv">À propos du site</h2>
                                <ul>
                                    <li>
                                        <a href="https://www.canada.ca/fr/sociaux.html">Médias sociaux</a>
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/fr/mobile.html">Applications mobiles</a>
                                    </li>
                                    <li>
                                        <a href="https://www1.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a>
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a>
                                    </li>
                                    <li>
                                        <a href="https://www.canada.ca/fr/transparence/confidentialite.html"
                                            >Confidentialité</a
                                        >
                                    </li>
                                </ul>
                            </nav>
                            <div class="col-xs-6 visible-sm visible-xs tofpg">
                                <a
                                    class="cursor-pointer"
                                    tabindex="0"
                                    @click="scrollTo('wb-cont')"
                                    @keypress.enter="scrollTo('wb-cont')"
                                    >Haut de la page <span class="glyphicon glyphicon-chevron-up"></span
                                ></a>
                            </div>
                            <div class="col-xs-6 col-md-2 text-right">
                                <img
                                    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/assets/wmms-blk.svg"
                                    alt="Symbole du gouvernement du Canada"
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
export default class CanadaFrV extends Vue {}
</script>

<style lang="scss" scoped>
.wb-slc {
    top: initial !important;
}
</style>
