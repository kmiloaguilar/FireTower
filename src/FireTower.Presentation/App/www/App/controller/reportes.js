angular.module('firetower')
    .controller('ReportesController', ['$scope', 'data', function($scope, data) {

        $scope.reportes = [];
        data.getAllReports()
            .success(function (data) {
                $scope.reportes = data;
                for (var i = 0; i < $scope.reportes.length; i++) {
                    var formattedDate = $scope.reportes[i].CreatedDate.$date;
                    formattedDate = moment((new Date()).toLocaleDateString()).fromNow();
                    $scope.reportes[i].CreatedDate.$date = formattedDate;
                }
            })
            .error(function(error) {
                
            });
    }]);