import React from 'react'
import { Menu,Icon } from 'antd';
import { connect } from 'react-redux'
import { withRouter, Route,Link } from 'react-router-dom'
import { menulist } from '../../content/content';
import {store} from '../../App.js'
import './Menulist.css';
const SubMenu = Menu.SubMenu;
let fun;
class Menulist extends React.Component{

 	constructor(props){
 		super(props)
 		this.state = {
			openKeys: '',  //默认Menu打开项
			selectedKeys:'',
			MenuShow:false,
 		}
     }

		 componentDidMount() {
			this.setMenuOpen(this.props);
						fun = store.subscribe(()=>{          //监听slidershow收缩
							console.log(store.getState().SLIDER_SHOW);
              if(store.getState().SLIDER_SHOW){
               this.setState({
								openKeys: '', 
								MenuShow: true, 
               });
              }else{
								this.setState({
								 MenuShow: false, 
								});
			//	this.setMenuOpen(this.props);
              };
           })
	    }
         componentWillUnmount() {
         fun();
        }
		componentWillReceiveProps(nextProps) {   
			setTimeout(() => {
				if(!this.state.MenuShow){        //componentDidMount内的监听和componentWillReceiveProps同步，当MenuShow被赋新值，这边获取的还是赋值前的值，所以还是false,给了延迟消除
					this.setMenuOpen(nextProps)
				};
			}, 100);
		}
		 onOpenChange = (data) => {
			this.setState({
				openKeys: data[data.length - 1],
			})
		 }
		 onChildChanged = (e) => {
			this.setState({
				selectedKeys: e.key
			});
		 }
		 setMenuOpen = props => {
			 const { pathname } = props.location;
			 this.setState({
				openKeys: pathname.substr(0, pathname.lastIndexOf('/')),
				selectedKeys: pathname
			 });
		 };
     
	render(){
		return(
			<Menu 
			theme="dark" 
			mode='inline'
			onClick = {this.onChildChanged}
			onOpenChange = {this.onOpenChange}
			openKeys={[this.state.openKeys]}
			selectedKeys={[this.state.selectedKeys]}>
			{
				menulist.data.map((item,index) => (
					!item.menuitem ? <Menu.Item style={{borderTop:'solid 3px #000C17'}} key={item.key}><Link to={item.link}><Icon type={item.type} /><span>{item.title}</span></Link></Menu.Item> :
				<SubMenu
				  key={item.key}
					title={<span><Icon type={item.type} /><span>{item.title}</span></span>}
					style={{borderTop:'solid 3px #000C17'}}
				>
            { 
						item.menuitem.map((item2,i) => (
					<Menu.Item key={item2.key}><Link to={item2.link}><Icon type={item2.type} />{item2.title}</Link></Menu.Item>
						))
					}				
				</SubMenu>
						))
					}			
			</Menu>
		)
	}
}
function mapStateToProps(state) {
  return {
	  
  }
}


function mapDispatchToProps(dispatch) {
  return {
    
  }
}
export default withRouter(Menulist);