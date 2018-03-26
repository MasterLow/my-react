export default (state = {ifLoading:false,SLIDER_SHOW:false}, action={}) => {
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
      case 'SLIDER_SHOW':
        return {...state,SLIDER_SHOW:action.data.SLIDER_SHOW}; //左侧菜单收缩
      default:
        return state;
    }
  }