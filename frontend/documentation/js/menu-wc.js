'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' : 'data-target="#xs-components-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' :
                                            'id="xs-components-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditConfigurationModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditConfigurationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' : 'data-target="#xs-injectables-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' :
                                        'id="xs-injectables-links-module-AppModule-520fcc731f06160852a17e3eeef50fa0eda8c9591bba9604cd4f43b28e79b380f6333741eabc8e4fbccb2a8370e21bf82315adc21107d6ffe51ef7e0f0028dd4"' }>
                                        <li class="link">
                                            <a href="injectables/AdditionalConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdditionalConfigurationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ColorConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorConfigurationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigurationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PerformanceConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerformanceConfigurationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdditionalConfigurationService.html" data-type="entity-link" >AdditionalConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarService.html" data-type="entity-link" >CarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ColorConfigurationService.html" data-type="entity-link" >ColorConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigurationService.html" data-type="entity-link" >ConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomHttpService.html" data-type="entity-link" >CustomHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerformanceConfigurationService.html" data-type="entity-link" >PerformanceConfigurationService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});