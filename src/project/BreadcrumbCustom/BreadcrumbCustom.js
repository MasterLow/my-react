import React, { Component } from 'react';
import { Breadcrumb } from 'antd';  
import { Link,withRouter } from 'react-router-dom';  
import { menulist } from '../../content/content';
import './BreadcrumbCustom.css';
class BreadcrumbCustom extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            extraBreadcrumbItems: null  
        }  
    }  
    getPath() {  
         var routeDate = this.props.history.location.pathname.split('/').filter(i => i)
        this.setState({
            extraBreadcrumbItems: routeDate.map((_, index) => {  
                const url = `/${routeDate.slice(0, index + 1).join('/')}`;
            if(index === 1){                   //注意点：由于第二级为展示用，不用于跳转；所以有以下空导航;
                return (  
                    <Breadcrumb.Item key={url} />   //空导航
                ); 
            }else{
                return (  
                    <Breadcrumb.Item key={url}>  
                        <Link to={url}>  
                            {menulist.breadcrumbNameMap[url]}  
                        </Link>  
                    </Breadcrumb.Item>  
                );  
            };                         
            })
        });
    }  
  
    componentWillMount() {  

    }  
    componentWillReceiveProps(){  
    //任何子页面发生改变，均可调用，完成路径切分以及形成面包屑,由于mwnulist中触发了有路由变化；所以不用componentWillMount再次加载默认触发
        this.getPath();  
    }  
    render() {  
        return (  
  
            <span>  
                <Breadcrumb>  
                    {this.state.extraBreadcrumbItems}  
                </Breadcrumb>   
            </span>  
        )  
    }  
}  
export default withRouter(BreadcrumbCustom);  