import _ from 'underscore';
import {commonTranslations, errorsTranslations} from '../app.translations';

export default Translations;

Translations.$inject = ['$translate', '$q'];

/* @ngInject */
function Translations($translate, $q) {

    return {

        /***
         * Add descriptions
         * @param namespace
         * @param keysArray
         * @returns {Deferred|*}
         */
        executeTranslations: function (namespace,keysArray) {

            namespace = namespace + ".";

            /**
             * Adds namespace to the array of keys,to retrieve the translations
             */
            keysArray = _.map(keysArray,function(key) {
                return namespace + key;
            });

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

                /**
                 * Iterates throw the returned translations and removes the namespace string
                 */
                var pageTranslations = _.reduce(translations[2], function(obj, val, key) {

                    key = key.replace(namespace, "");
                    obj[key] = val;
                    return obj;
                }, {});

                //Assign common and error translations
                pageTranslations.common = translations[0];
                pageTranslations.errors = translations[1];

                return pageTranslations;
            });

        }
    }
}


