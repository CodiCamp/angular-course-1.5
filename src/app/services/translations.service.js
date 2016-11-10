import {commonTranslations, errorsTranslations} from '../app.translations';

export default Translations;

Translations.$inject = ['$translate', '$q'];

/* @ngInject */
function Translations($translate, $q) {

    return {

        //TO DO: add parameter for NAMESPACE
        /***
         * Add descriptions
         * @param keysArray
         * @returns {Deferred|*}
         */
        executeTranslations: function (keysArray) {

            return $q.all([
                $translate(commonTranslations),
                $translate(errorsTranslations),
                $translate(keysArray)
            ]).then(function combineTranslations(translations){

                /***
                 * LOSHO MI E
                 * Podai Aspirina
                 * @type {*}
                 */
                // translations[2].common = translations[0];
                // translations[2].errors = translations[1];

                //Tova ne e Aspirin
                // _.extend({},
                //     translations[2],
                //     {errors: translations[0]},
                //     {common: translations[1]}
                // );

                /***
                 * Aspirin
                 */
                var pageTranslations = translations[2];
                //Assign common and error translations
                pageTranslations.common = translations[0];
                pageTranslations.errors = translations[1];

                return pageTranslations;
            });

        }
    }
}


