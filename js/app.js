function About(){
    var about = this;
    about.time = 5;
    about.test = function test() {
        alert('Work');
    };
    about.namePage = 'About';
    about.interval = setInterval(function () {
        about.time --;
        if(about.time == 0){
            //alert('Down');
            clearInterval(about.interval);
        }
    },1000)
}
About.annotations = [
    new angular.ComponentAnnotation({
        selector: "about"
    }),
    new angular.ViewAnnotation({
        templateUrl: 'views/form.html'
    })
];

function MainApp(){}
MainApp.annotations = [
    new angular.ComponentAnnotation({
        selector: "main-app"
    }),
    new angular.ViewAnnotation({
        directives: [About],
        template: "<div><h1>Hello everyone</h1><about></about></div>"
    })
];

document.addEventListener("DOMContentLoaded", function(){
    angular.bootstrap(MainApp);
});