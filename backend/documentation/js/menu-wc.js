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
                    <a href="index.html" data-type="index-link">backend documentation</a>
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
                                            'data-target="#controllers-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' : 'data-target="#xs-controllers-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' :
                                            'id="xs-controllers-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' }>
                                            <li class="link">
                                                <a href="controllers/AdditionalConfigurationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdditionalConfigurationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CarController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ColorConfigurationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorConfigurationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ConfigurationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigurationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PerformanceConfigurationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerformanceConfigurationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' : 'data-target="#xs-injectables-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' :
                                        'id="xs-injectables-links-module-AppModule-ee2d1bd3c6278a3ba0905d93f018e13be2ca7e089332d942375fe034c65e4dbdda791724ec5a068fe6e2fbd846a606b1b181e9f9e22d1884f5dbdcd0be0cc156"' }>
                                        <li class="link">
                                            <a href="injectables/AdditionalConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdditionalConfigurationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
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
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AdditionalConfigurationController.html" data-type="entity-link" >AdditionalConfigurationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CarController.html" data-type="entity-link" >CarController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ColorConfigurationController.html" data-type="entity-link" >ColorConfigurationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ConfigurationController.html" data-type="entity-link" >ConfigurationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PerformanceConfigurationController.html" data-type="entity-link" >PerformanceConfigurationController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/AdditionalConfiguration.html" data-type="entity-link" >AdditionalConfiguration</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Car.html" data-type="entity-link" >Car</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ColorConfiguration.html" data-type="entity-link" >ColorConfiguration</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Configuration.html" data-type="entity-link" >Configuration</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PerformanceConfiguration.html" data-type="entity-link" >PerformanceConfiguration</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateAdditionalConfigurationDto.html" data-type="entity-link" >CreateAdditionalConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCarDto.html" data-type="entity-link" >CreateCarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateColorConfigurationDto.html" data-type="entity-link" >CreateColorConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateConfigurationDto.html" data-type="entity-link" >CreateConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePerformanceConfigurationDto.html" data-type="entity-link" >CreatePerformanceConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAdditionalConfigurationDto.html" data-type="entity-link" >UpdateAdditionalConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCarDto.html" data-type="entity-link" >UpdateCarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateColorConfigurationDto.html" data-type="entity-link" >UpdateColorConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateConfigurationDto.html" data-type="entity-link" >UpdateConfigurationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePerformanceConfigurationDto.html" data-type="entity-link" >UpdatePerformanceConfigurationDto</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
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
                                    <a href="injectables/PerformanceConfigurationService.html" data-type="entity-link" >PerformanceConfigurationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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