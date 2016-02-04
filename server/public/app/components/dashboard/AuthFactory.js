let AuthFactory = ($window, $state, $http) => {

    let hasToken = () => {
     return !!$window.localStorage.getItem('com.medUp');
    };

    let isAuth = false;

    let signin = (user) => {
      return $http({
          method: 'POST',
          url: 'http://localhost:3000/user/signin',
          data: user
      })
      .then(response =>  {
        $window.localStorage.setItem('com.medUp', response.data.token)
          isAuth = true;
          console.log(isAuth);
        });

    };

    let signup = (user) => {
      console.log("printing from the AuthFactory");
      return $http({
          method: 'POST',
          url: 'http://localhost:3000/user/signup',
          data: user
      })
      .then(response => {
        $window.localStorage.setItem('com.medUp', response.data.token)
          isAuth = true;
          console.log(isAuth);
        });
      };

    let signout = () => {
      $window.localStorage.removeItem('com.medUp');
      $state.go('dashboard.signin');

    };

    return {
      hasToken,
      signin,
      signup,
      signout,
      isAuth
    }

}

export default AuthFactory;