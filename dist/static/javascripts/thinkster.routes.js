!function(){"use strict";function t(t){t.when("/",{controller:"IndexController",controllerAs:"vm",templateUrl:"/templates/layout/index.html"}).when("/register",{controller:"RegisterController",controllerAs:"vm",templateUrl:"/templates/authentication/register.html"}).when("/login",{controller:"LoginController",controllerAs:"vm",templateUrl:"/templates/authentication/login.html"}).when("/+:username",{controller:"AccountController",controllerAs:"vm",templateUrl:"/templates/accounts/account.html"}).when("/+:username/settings",{controller:"AccountSettingsController",controllerAs:"vm",templateUrl:"/templates/accounts/settings.html"}).otherwise("/")}angular.module("thinkster.routes").config(t),t.$inject=["$routeProvider"]}();