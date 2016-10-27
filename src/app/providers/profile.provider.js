ProfileService.$inject = ['$localStorageProvider'];

/* @ngInject */
export default ProfileService;

function ProfileService ($localStorage) {

    var userProfileData = {};

    /***
     * Methods availableonly in the config
     */
    this.loadProfile = function () {

        userProfileData.loggedIn = $localStorage.get('loggedIn') || false;
        userProfileData.id = $localStorage.get('userId');
    };

    /***
     * Methods available in RUN
     * @type {{isLoggedIn: isLoggedIn}}
     */
    this.$get = function () {

        return {
            isLoggedIn: isLoggedIn,
            setProfile: setProfile,
            getProfile: getProfile
        };
    };

    function isLoggedIn () {
        return userProfileData.loggedIn;
    }

    /***
     *
     * @param {Object} userdata
     */
    function setProfile (userData) {

        userProfileData = userData;
        userProfileData.loggedIn = true;

        $localStorage.set('loggedIn', userProfileData.loggedIn);
        $localStorage.set('userId', userProfileData.id);
    }
    
    function getProfile() {
        return userProfileData;
    }
}