angular.module('parkey.services', [])

.factory('login', function () {
    Parse.initialize("il1qy2ZyYoYtI7oXckZXVaELaeLsaxlVjHnRSy6Q", "ShLwaR6OOE2qy8M0nnMXdxNt4i75Qk9A5e6hD9Mc");

    return function (info) {
        var TestObject = Parse.Object.extend("TestObject");
        var testObject = new TestObject();
        testObject.save({
            foo: "salary give me more"
        }).then(function (object) {
            console.log("yay! it worked");
        });
    };
});
