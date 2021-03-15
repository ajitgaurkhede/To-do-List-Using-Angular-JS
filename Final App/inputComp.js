app.component('inputComp', {
    bindings: {
        innerItem: '&'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.innerAddItem = function () {
            $ctrl.innerItem({
                item: $ctrl.newItem
            });

        };

    }],
    template:
        `<div class="search">
                 <input type="text" placeholder="Add Todo" ng-model = "$ctrl.newItem">
                 <span ng-click = "$ctrl.innerAddItem()"><i class="fas fa-plus"></i></span>
         </div>
            `
});

