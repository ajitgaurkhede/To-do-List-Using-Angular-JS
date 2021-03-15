
var app = angular.module('myToDoList', []);

app.component('mainComp', {
    bindings: {

        message: '@'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.itemsList = [
            'Milk',
            'Bread',
            'Eggs'
        ];
        $ctrl.$onInit = function () {
            $ctrl.usermsg = $ctrl.message || 'NA';
        };
        $ctrl.addItem = function (item) {
            $ctrl.errortext = "";
            if (!item) {
                return;
            }
            if ($ctrl.itemsList.indexOf(item) == -1) {
                // alert($ctrl.products.indexOf(item));
                $ctrl.itemsList.push(item);
                //alert($ctrl.products.indexOf(item));
            }
            else {
                $ctrl.errortext = "this item is already in your Todo List.";
            }

            $ctrl.removeItem = function (x) {
                $ctrl.itemsList.splice(x, 1);
            }

        };
    }],
    template:
        `<p>{{$ctrl.usermsg}}</p>
            <input-comp inner-item ="$ctrl.addItem(item)"></input-comp>
            <ul>
                 <li ng-repeat ="p in $ctrl.itemsList">{{p}}<i ng-click = "$ctrl.removeItem($index)" class="fas fa-trash-alt"> 
                 </i></li>
             </ul>
        <p>{{$ctrl.errortext}}</p>
            `
});


