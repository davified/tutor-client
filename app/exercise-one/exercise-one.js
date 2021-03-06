/* global angular */

angular.module('myApp.exerciseOne', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize', 'material.svgAssetsCache'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/exercise-one', {
      templateUrl: 'exercise-one/exercise-one.html',
      controller: 'ExerciseOneCtrl'
    })
  }])
  .config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet('./svg/avatars.svg', 128)
    $mdIconProvider.icon('share', './svg/share.svg', 24)
    $mdIconProvider.icon('menu', './svg/menu.svg', 24)
  }])
  .controller('ExerciseOneCtrl', ['$rootScope', '$scope', '$http', 'httpFactory', '$routeParams', '$mdDialog', '$mdToast', '$mdSidenav', '$window', function ($rootScope, $scope, $http, httpFactory, $routeParams, $mdDialog, $mdToast, $mdSidenav, $window) {
    $scope.isLoading = true
    $scope.toggleList = function () {
      $mdSidenav('left').toggle()
    }

    $scope.correctMessageTitles = [
      'ace', 'amazing', 'astonishing', 'astounding', 'awe-inspiring', 'awesome', 'badass', 'beautiful', 'bedazzling', "bee's knees", 'best', 'breathtaking', 'brilliant', 'oh dang', "cat's pajamas", 'classy', 'cool', 'dandy', 'dazzling', 'delightful', 'divine', 'doozie', 'epic', 'excellent', 'exceptional', 'exquisite', 'extraordinary', 'fabulous', 'fantastic', 'fantabulous', 'fine', 'finest', 'first-class', 'first-rate', 'flawless', 'funkadelic', 'geometric', 'glorious', 'gnarly', 'good', 'grand', 'great', 'groovy', 'groundbreaking', 'hunky-dory', 'impeccable', 'impressive', 'incredible', 'kickass', 'kryptonian', 'laudable', 'legendary', 'lovely', 'luminous', 'magnificent', 'majestic', 'marvelous', 'mathematical', 'mind-blowing', 'neat', 'outstanding', 'peachy', 'perfect', 'phenomenal', 'pioneering', 'polished', 'posh', 'praiseworthy', 'premium', 'priceless', 'prime', 'primo', 'rad', 'remarkable', 'riveting', 'scrumtrulescent', 'sensational', 'shining', 'slick', 'smashing', 'solid', 'spectacular', 'splendid', 'stellar', 'striking', 'stunning', 'stupendous', 'stylish', 'sublime', 'super', 'super-duper', 'super-excellent', 'superb', 'superior', 'supreme', 'sweet', 'swell', 'terrific', 'tiptop', 'top-notch', 'transcendent', 'tremendous', 'ultimate', 'unreal', 'well-made', 'wicked', 'wonderful', 'wondrous', 'world-class'
    ]
    $scope.correctMessageBody = ["You're on a roll!", 'Good job ninja. Keep going.', 'Well done mate.', 'Are you for real?', 'Keep it up Shinobi.', "You're on your way to Samurai-hood.", 'Master of invisibility, you shall be.']

    if ($window.localStorage.completedTopicsIndex) {
      $rootScope.currentTopicIndex = $window.localStorage.completedTopicsIndex
      $rootScope.completedTopicsIndex = $window.localStorage.completedTopicsIndex
    } else {
      $rootScope.completedTopicsIndex = 0
      $rootScope.currentTopicIndex = 0
    }

    var url = 'https://learning-ninja-api.herokuapp.com/levels/' + $window.localStorage.level
    $scope.loadExercise = function () {
      console.log('new exercise loaded')
      httpFactory.httpGet(url).then(function (response) {
        $scope.questions = []
        $scope.currentQuestionIndex = 0
        $scope.numberOfWrongAttempts = 0
        $scope.completedQuestionsSubmission = []
        $scope.topics = response.data
        $rootScope.topicsLength = response.data.length
        $scope.currentTopic = $scope.topics[$rootScope.currentTopicIndex]

        $http.get('https://learning-ninja-api.herokuapp.com/levels/' + $window.localStorage.level + '/exercises/' + $scope.currentTopic).then(function (response) {
          $scope.questions = response.data.questions
          $scope.showCurrentQuestion()
          $scope.isLoading = false
          console.log($scope.questions)
        })
      })
    }

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    $scope.showCurrentQuestion = function () {
      $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex]
    }

    $scope.submitAnswer = function () {
      if ($scope.currentQuestionIndex === $scope.questions.length - 1) {
        $scope.submitExercise()
      }
      if ($scope.userAnswer == $scope.currentQuestion.answer) {
        $scope.completedQuestionsSubmission.push({
          questionId: $scope.currentQuestion._id,
          userId: $window.localStorage.user_id,
          isCorrect: true,
          numberOfWrongAttempts: $scope.numberOfWrongAttempts,
          userAnswerImage: '#'
        })
        $scope.showNextQuestion()
        $scope.correctAnswerPopup()
      } else {
        $scope.showSimpleToast()
        $scope.numberOfWrongAttempts++
      }
    }

    $scope.submitExercise = function () {
      $http.post('https://learning-ninja-api.herokuapp.com/submit', $scope.completedQuestionsSubmission)
      console.log($scope.completedQuestionsSubmission)
      $rootScope.currentTopicIndex++
      $window.localStorage.completedTopicsIndex = $rootScope.currentTopicIndex
      $rootScope.completedTopicsIndex = $window.localStorage.completedTopicsIndex
    }

    $scope.showNextQuestion = function () {
      $scope.currentQuestionIndex++
      $scope.numberOfWrongAttempts = 0
      $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex]
      $scope.userAnswer = null
    }

    $scope.correctAnswerPopup = function correctAnswerPopup () {
      if ($scope.currentQuestionIndex === $scope.questions.length) {
        $mdDialog.show(
          $mdDialog.confirm()
            .clickOutsideToClose(true)
            .title("Well done, ninja! You've obtained 10 Shurikens")
            .htmlContent('<div><img src="http://www.sushininja.de/assets/img/ninja-logo.png" height="100px" width="100px" class="badgeIcon"></div><br>' + '<p class="badgeIcon">Do you want to continue to your next Mission?</p>')
            // .textContent('Do you want to continue to your next Mission?')
            .ariaLabel('Completed exercise!')
            .ok('Bring it on!')
            .cancel('Nope. Bring me back to the roadmap')
            // You can specify either sting with query selector
            .openFrom('#left')
            // or an element
            .closeTo(angular.element(document.querySelector('#right')))).then(function () {
          $scope.loadExercise()
        }, function () {
          $window.location.href = '/#!/roadmap'
        })
      } else {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title($scope.correctMessageTitles[getRandomInt(0, 99)].toUpperCase() + '!')
            .htmlContent('<p>' + $scope.correctMessageBody[getRandomInt(0, 6)] + '</p> ')
            // .textContent($scope.correctMessageBody[getRandomInt(0, 6)])
            .ariaLabel('correct answer!')
            .ok('Next question!')
            // You can specify either sting with query selector
            .openFrom('#left')
            // or an element
            .closeTo(angular.element(document.querySelector('#right')))
        )}
    }

    var last = {
      bottom: true,
      right: true
    }

    $scope.toastPosition = angular.extend({}, last)
    $scope.getToastPosition = function () {
      sanitizePosition()
      return Object.keys($scope.toastPosition)
        .filter(function (pos) { return $scope.toastPosition[pos]})
        .join(' ')
    }
    function sanitizePosition () {
      var current = $scope.toastPosition
      last = angular.extend({}, current)
    }
    $scope.showSimpleToast = function () {
      var pinTo = $scope.getToastPosition()
      $mdToast.show(
        $mdToast.simple()
          .textContent("That's not quite right. I'll give you a hint: " + $scope.currentQuestion.hints)
          .position(pinTo)
      )
    }

    $scope.chooseTopic = function (index) {
      $window.location.href = '/#!/exercise-one'
      $scope.loadExercise()
      $rootScope.currentTopicIndex = index
    }

    $scope.loadExercise()
  }])

  .directive('drawing', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var ctx = element[0].getContext('2d')

        // variable that decides if something should be drawn on mousemove
        var drawing = false

        // the last coordinates before the current move
        var lastX
        var lastY

        element.bind('mousedown', function (event) {
          if (event.offsetX !== undefined) {
            lastX = event.offsetX
            lastY = event.offsetY
          } else {
            lastX = event.layerX - event.currentTarget.offsetLeft
            lastY = event.layerY - event.currentTarget.offsetTop
          }

          // begins new line
          ctx.beginPath()

          drawing = true
        })
        element.bind('mousemove', function (event) {
          if (drawing) {
            // get current mouse position
            if (event.offsetX !== undefined) {
              currentX = event.offsetX
              currentY = event.offsetY
            } else {
              currentX = event.layerX - event.currentTarget.offsetLeft
              currentY = event.layerY - event.currentTarget.offsetTop
            }

            draw(lastX, lastY, currentX, currentY)

            // set current coordinates to last one
            lastX = currentX
            lastY = currentY
          }
        })
        element.bind('mouseup', function (event) {
          // stop drawing
          drawing = false
        })

        // canvas reset
        function reset (scope, element, attrs) {
          element[0].width = element[0].width
        }

        function draw (lX, lY, cX, cY) {
          // line from
          ctx.moveTo(lX, lY)
          // to
          ctx.lineTo(cX, cY)
          // color
          ctx.strokeStyle = '#006400'
          // draw it
          ctx.stroke()
        }
      }
    }
  })
