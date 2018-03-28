1.npm add antd

2.引入样式：
import 'antd/dist/antd.css';

3.添加Icon方法

4.npm install --save-dev react-router

npm install --save-dev react-router-dom
//react-router 4.0
//react-router 4.0

5.npm install --save react-redux

6.问题： <Menu/>中点击有子项后，再点击无子项；前一项没有收起

7.HomePage内 <Route /> 没用 exact 会找不到路径,使用{this.props.match.path} 获取父级路由路径

8.react-router 提供了一个withRouter组件 
withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。