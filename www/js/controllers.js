angular.module('parkey.controllers', [])

.controller('LoginCtrl', function ($scope) {})

.controller('SearchCtrl', function ($scope, $ionicModal) {
    $scope.form = {};
    $ionicModal.fromTemplateUrl('tab-search-modal-result.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
        console.log('SearchCtrl-> searchInput:' + $scope.form.searchInput);
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });
});
