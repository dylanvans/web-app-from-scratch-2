(function() {
    "use strict";

    var app = {
        init: function() {
            routes.init();
        }
    };

    var routes = {
        init: function() {
            // var oldLocation = location.hash;
            window.addEventListener('hashchange', function(){
                sections.toggle(location.hash);
            })
        }
    };

    var sections = {
        toggle: function(route) {
            var mySection = document.querySelectorAll('section');
            mySection.forEach( function(el) {
                if('#' + el.id === route) {
                    el.classList.remove('section__hide');
                } else {
                    el.classList.add('section__hide');
                }
            });
        }
    };

    app.init();

    }()
);
