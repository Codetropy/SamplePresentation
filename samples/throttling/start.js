var ViewModel = function() {
    this.users = [
        { name: "Bob", selected: ko.observable(false) },
        { name: "Deanna", selected: ko.observable(false) },
        { name: "Kent", selected: ko.observable(false) }
    ];

    this.selectedUsers = ko.computed(function() {
        return ko.utils.arrayFilter(this.users, function(user) {
            return user.selected();
        });
    }, this);

    this.checkAll = function() {
        ko.utils.arrayForEach(this.users, function(user) {
            user.selected(true);
        });
    };
};

ko.applyBindings(new ViewModel());