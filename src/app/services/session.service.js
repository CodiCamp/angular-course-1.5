export default SessionService;

SessionService.$inject = ['$timeout', 'ProfileService', 'SESSION_TIME', '$injector'];

/* @ngInject */
function SessionService($timeout, ProfileService, SESSION_TIME, $injector) {

    var sessionTimer = null,
        //TRUE - user is active
        //FALSE - user is inactive
        sessionFlag = false;
    
    this.setSession = setSession;
    this.startSessionCheck = startSessionCheck;

    ////////////////

    /***
     * Sets session activitry
     * @param {Boolean} isActive
     */
    function setSession(isActive) {
        sessionFlag = isActive;
        if(isActive) {
            $timeout.cancel(sessionTimer);
            startSessionCheck();
        }
    }

    function startSessionCheck () {

        sessionTimer = $timeout(function checkActivity (){

            if(sessionFlag && ProfileService.isLoggedIn()){
                setSession(false);
                startSessionCheck();
            }else {
                endSession();
            }

        }, SESSION_TIME);
    }

    function endSession () {
        var stateService = $injector.get('$state');
        ProfileService.unsetProfile();
        stateService.go('app.client.login');
    }
}

