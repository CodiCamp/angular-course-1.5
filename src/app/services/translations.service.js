export default Translations;

Translations.$inject = ['$translate'];

/* @ngInject */
function Translations($translate) {

    return {

        executeTranslations: function (keysArray) { // namespace ,

            $translate(keysArray).then(function (translations) {

                //vm.translations = _.extend({}, translations, commonTranslations);
                return translations;
                // vm.translations.common = commonTranslations;

            }, function (error) {

                // TODO : handle translations error
                console.log(error);
            });
        }
    }
}


