import {commonTranslations} from '../app.translations';
import {errorsTranslations} from '../app.translations';

export default Translations;

Translations.$inject = ['$translate'];

/* @ngInject */
function Translations($translate) {

    return {

        executeTranslations: function (keysArray) { // namespace ,

            $translate(keysArray).then(function (pageTranslations) {

                var translations = {

                    pageTranslations: pageTranslations,
                    errorsTranslations: this.executeErrorTranslations(),
                    commonTranslations: this.executeCommonTranslations()
                };

                return translations;

            });

        },

        executeErrorTranslations : function (errorsTranslations) { // errorKeysArray

            $translate(errorsTranslations).then(function (translations) {

                return translations;

            });
        },

        executeCommonTranslations : function (commonTranslations) { // commonKeysArray

            $translate(commonTranslations).then(function (translations) {

                return translations;

            });
        }
    }
}


