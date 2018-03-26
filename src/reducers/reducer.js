export default (state = {ifLoading:false}, action={}) => {
    switch (action.type) {
      case 'LOGIN_CLICK':
      let thelogin={ifthrow : false};
      if(action.data.name ==='admin'&&action.data.pass ==='admin'&&action.data.identifyingcode ==='666666'){
        thelogin={ifthrow : true};
            }else{
        thelogin={ifthrow : false};
            };
         sessionStorage.setItem('ifthrow', JSON.stringify(thelogin));
        return {...state,ifLoading:JSON.parse(sessionStorage.getItem('ifthrow')).ifthrow};
      case 'ifloading_show':
        return {...state};
      default:
        return state;
    }
  }