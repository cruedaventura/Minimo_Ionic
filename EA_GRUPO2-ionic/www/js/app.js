// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngRoute'])

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
  $scope.newPersona = {};
  $scope.personas   = {};

  $scope.newRuta = {};
  $scope.rutas   = {};

  $scope.newTypeRuta = {};
  $scope.typerutas   = {};
  $scope.testy       = 5;

  $scope.passerror = "";
  $scope.selected  = false;

  dir = "localhost";
//--------------------------------------MInIMO_IONIC-----------------------------------

  $scope.newSubject = {};
  $scope.newStudent = {};
  $scope.subjects = {};
  $scope.students = {};
  $scope.selected = false;

  // Obtenemos todos los datos de la base de datos
  $scope.mostrarSubjects = function() {
  $http.get('http://' + dir + ':3000/subjects').success(function(data) {
      console.log('SUBJECT', data);
      $scope.subjects = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });}

  // Obtenemos todos los datos de la base de datos
  $scope.mostrarStudent = function() {

    $http.get('http://' + dir + ':3000/students').success(function(data) {
        console.log(data);
        $scope.students = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });}

  // Obtenemos todos los datos de la base de datos
  $scope.mostrarSuject = function() {

    $http.get('http://' + dir + ':3000/subjects').success(function(data) {
        console.log(data);
        $scope.students = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });}

  // Función para registrar a una persona
  $scope.registrarStudent = function() {

    $http.post('http://' + dir + ':3000/student', $scope.newStudent)
      .success(function(data) {
        $scope.newStudent = {}; // Borramos los datos del formulario
        $scope.students = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // Función para registrar a una persona
  $scope.registrarSubject = function() {

    $http.post('http://' + dir + ':3000/subject', $scope.newSubject)
      .success(function(data) {
        $scope.newSubject = {}; // Borramos los datos del formulario
        $scope.subjects = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


  // Función para editar los datos de una persona
  $scope.modificarSubject = function(newSubject) {
    $http.put('http://' + dir + ':3000/subject/update', $scope.newSubject)

      .success(function(data) {
        $scope.newSubject = {}; // Borramos los datos del formulario
        $scope.subjects = data;
        $scope.selected = false;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // Función para editar los datos de una persona
  $scope.modificarStudent = function(newStudent) {
    $http.put('http://' + dir + ':3000/student/update', $scope.newStudent)

      .success(function(data) {
        $scope.newStudent = {}; // Borramos los datos del formulario
        $scope.student = data;
        $scope.selected = false;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // Función que borra un objeto persona conocido su id
  $scope.borrarPersona = function(name) {
    console.log("borrar persona " + name);
    $http.delete('http://' + dir + ':3000/user/delete/' + name)
      .success(function(data) {
        $scope.newPersona = {};
        $scope.personas = data;
        $scope.selected = false;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // Función para coger el objeto seleccionado en la tabla
  $scope.selectStudent = function(student) {
    $scope.newStudent = student;
    $scope.selected = true;
    console.log($scope.newStudent, $scope.selected);
  };

  // Función para coger el objeto seleccionado en la tabla
  $scope.selectSubject = function(subject) {
    $scope.newSubject = subject;
    $scope.selected = true;
    console.log($scope.newSubject, $scope.selected);
  };

  $scope.verificar = function verificar(v){
    var p1 = document.getElementById('pass1');
    if( p1.value != v){
      document.getElementById('mensaje').innerHTML = "no coincide";

    }else{
      document.getElementById('mensaje').innerHTML = "ok";
      return true;
    }
  }
  $scope.toggleCategory = function(subjects) {
    subjects.expanded = !subjects.expanded;
  };

  $scope.Mostrarpornombre = function (name) {
    $http.get('http://' + dir + ':3000/assignaturabyname/' + name).success(function (data) {
        $scope.subjects = data;
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });

  };

//-----------------------------------------Usuarios-----------------------------------------
  // Obtenemos todos los datos de la base de datos
  $http.get('http://' + dir + ':3000/users').success(function (data) {
      console.log(data);
      $scope.personas = data;
    })
    .error(function (data) {
      console.log('Error: ' + data);
    });

  // Función para registrar a una persona
  $scope.registrarPersona = function () {
    if ($scope.passerror == "La contraseña y la comprobación coinciden") {
      $http.post('http://' + dir + ':3000/user', $scope.newPersona)
        .success(function (data) {
          if (data != false) {
            $scope.newPersona = {}; // Borramos los datos del formulario
            $scope.personas   = data;
            $scope.passerror  = ""
          }
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
    }
    else
      alert("Cuidado! Contraseña y comprobación no coinciden!")
  };


  // Función para editar los datos de una persona
  $scope.modificarPersona = function (newPersona) {
    $http.put('http://' + dir + ':3000/user/update', $scope.newPersona)
      .success(function (data) {
        $scope.newPersona = {}; // Borramos los datos del formulario
        $scope.personas   = data;
        $scope.selected   = false;
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  // Función que borra un objeto persona conocido su id
  $scope.borrarPersona = function (name) {
    if (confirm("Do you want to delete the user? ")) {
      console.log("borrar persona " + name);
      $http.delete('http://' + dir + ':3000/user/delete/' + name)
        .success(function (data) {
          $scope.newPersona = {};
          $scope.personas   = data;
          $scope.selected   = false;
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
    }
  };

  $scope.verificar = function (pass, pass2) {
    if (pass != pass2)
      $scope.passerror = "La contraseña y la comprobación no coinciden"

    else {
      if ((pass == false) && (pass2 == false)) {
        $scope.passerror = ""
      }
      else
        $scope.passerror = "La contraseña y la comprobación coinciden"
    }
  };

  // Función para coger el objeto seleccionado en la tabla
  $scope.selectPerson = function (persona) {
    $scope.newPersona = persona;
    $scope.selected   = true;
    console.log($scope.newPersona, $scope.selected);
  };

//-----------------------------Rutas-----------------------------------------
  /*
   // Obtenemos todos los datos de la base de datos de todas las rutas
   $http.get('http://localhost:3000/routes').success(function (data) {
   $scope.rutas = data;
   })
   .error(function (data) {
   console.log('Error: ' + data);
   });

   */

  $scope.Mostrarportipo = function (tipo) {
    $http.get('http://' + dir + ':3000/routesbytype/' + tipo).success(function (data) {
        $scope.rutas = data;
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });

  };

  $scope.Mostrarporciudad = function (ciudad) {
    $http.get('http://' + dir + ':3000/routesbycity/' + ciudad).success(function (data) {
        $scope.rutas = data;
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });

  };

  // Obtenemos todos los datos de la base de datos de todos los tipos de rutas
  $http.get('http://' + dir + ':3000/typeroutes').success(function (data) {
      $scope.typerutas = data;
      console.log(data);
    })
    .error(function (data) {
      console.log('Error: ' + data);
    });


  // Función para registrar una Ruta
  $scope.registrarRuta = function () {
    $http.post('http://' + dir + ':3000/route', $scope.newRuta)
      .success(function (data) {
        $scope.rutas = data;
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
    $http.post('http://' + dir + ':3000/typeroute', $scope.newRuta)
      .success(function (data) {
        $scope.newRuta   = {}; // Borramos los datos del formulario
        $scope.typerutas = data;
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };


  // Función para editar los datos de una Ruta
  $scope.modificarRuta = function (newRuta) {
    $http.put('http://' + dir + ':3000/route/update', $scope.newRuta)
      .success(function (data) {
        $scope.newRuta  = {}; // Borramos los datos del formulario
        $scope.rutas    = data;
        $scope.selected = false;
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

// Función para inserta rutas en typos

  // Función que borra una Ruta conocido su el ID
  $scope.borrarRuta     = function (name, res) {
    if (confirm("¿Seguro que quieres eliminar? ")) {
      $http.delete('http://' + dir + ':3000/route/delete/' + name)
        .success(function (data) {
          $scope.newRuta  = {};
          $scope.rutas    = data;
          $scope.selected = false;
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
    }
  };
  $scope.toggleCategory = function (subjects) {
    subjects.expanded = !subjects.expanded;
  };

}]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url        : '/home',
      templateUrl: 'views/home.html',
      controller : 'MainController'
    })
    .state('about', {
      url        : '/about',
      templateUrl: 'views/about.html',
      controller : 'MainController'
    })
    .state('login', {
      url        : '/login',
      templateUrl: 'views/login.html',
      controller : 'MainController'
    })
    .state('mapa', {
      url        : '/mapa',
      templateUrl: 'views/mapa.html',
      controller : 'MainController'
    })
    .state('register', {
      url        : '/register',
      templateUrl: 'index.html',
      controller : 'MainController'
    })
    .state('rutas', {
      url        : '/rutas',
      templateUrl: 'views/rutas.html',
      controller : 'MainController'
    })
    .state('nuevaruta', {
      url        : '/nuevaruta',
      templateUrl: 'views/nuevaruta.html',
      controller : 'MainController'
    })
    .state('contact', {
      url        : '/contact',
      templateUrl: 'views/contact.html',
      controller : 'MainController'
    })
    .state('ciudad', {
      url        : '/ciudad',
      templateUrl: 'views/ciuadad.html',
      controller : 'MainController'
    })

  //$urlRouterProvider.otherwise("register");
});


app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

