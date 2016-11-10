/**
 * Application common and common error translations
 * Use of translation keys files - separate keys declarations from functional implementation,
 * improve translations managing
 * @type {string[]} commonTranslations
 * @type {string[]} errorsTranslations
 */
export const commonTranslations  = ['login', 'legalNotice', 'username', 'password',
    'save', 'cancel', 'ok', 'close', 'email', 'firstName', 'disable', 'change', 'deleted'];

export const errorsTranslations = ['invalidUsername', 'provideAPassword', 'invalidEmail', 'fieldRequired',
    'serverError', 'pleaseTryAgain', 'fillRequiredFields', 'confirmPassword'];