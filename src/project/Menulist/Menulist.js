import React from 'react'
import { Menu,Icon, Button } from 'antd';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
import { menulist } from '../../content/content';
import {store} from '../../App.js'
import './Menulist.css';
const SubMenu = Menu.SubMenu;
let rootSubmenuKeys = menulist.rootSubmenuKeys;
let fun;
class Menulist extends React.Component{


 	constructor(props){
 		super(props)
 		this.state = {
			collapsed: false,
			openKeys: [],  //默认Menu打开项
			openKeys2: [],  //保存Menu打开项，用于slidershow再次展开显示
			selectedKeys:['1'],
            current: '1',  //默认选中1
            // list_i:0, //被选中的menulist的index,默认0
 		}
     }

		 componentDidMount() {
            fun = store.subscribe(()=>{          //监听slidershow收缩
              if(!store.getState().SLIDER_SHOW){
               this.setState({
                   openKeys: [], 
               });
              }else{
                this.setState({
                    openKeys: this.state.openKeys2, 
                });
              };
           })
		let data = JSON.parse(sessionStorage.getItem('selectedKeys'));
		if(data){
			this.setState({ 
						 current: data.selectedKeys, 
						 selectedKeys: data.selectedKeys,
						 openKeys: data.openKeys,
			});
		};
	    }
         componentWillUnmount() {
         fun();
        }
		 onOpenChange = (openKeys) => {
             const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
            //  for(var i=0;i<menulist.data.length;i++){
            //      if( latestOpenKey === menulist.data[i].key ){
            //         this.setState({
            //             list_i: i, 
            //         });
            //         break;
            //      };
            //  };
			 if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
				 this.setState({ openKeys });
			 } else {
				 this.setState({
                     openKeys: latestOpenKey ? [latestOpenKey] : [],
				 });
			 }
		 }
		 backclick = (e) => {
			 
		 }
		 onChildChanged = (e) => {
			let data={openKeys:this.state.openKeys,selectedKeys:[e.key]};
			sessionStorage.setItem('selectedKeys', JSON.stringify(data)); //保存展开项，用于刷新
			 if(this.state.current === e.key)return; 
			    this.setState({ 
                             current: e.key, 
                             selectedKeys: [e.key],
                             openKeys2: this.state.openKeys,
                });
                

		 }
     
	render(){
		return(
			<Menu 
			theme="dark" 
			mode="inline"
			selectedKeys={this.state.selectedKeys}
			onClick = {this.onChildChanged}
			openKeys = {this.state.openKeys}
			onOpenChange = {this.onOpenChange}>
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


export default Menulist