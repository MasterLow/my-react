// export const menulist = {data:[{
//     key:'1',type:'user',link:'/',title:'首页'
//                         },
//                         {
//     key:'sub1',type:'user',link:'',title:'结算管理',
//     menuitem : [{
//         key:'2',type:'user',link:'/apps/1',title:'违约金'
//                             },{
//         key:'3',type:'user',link:'/apps/2',title:'代理商分润'
//                             },{
//         key:'4',type:'user',link:'/apps/3',title:'体现审核'
//                             },{
//         key:'5',type:'user',link:'/apps/4',title:'公司收益'
//                             },{
//         key:'6',type:'user',link:'/apps/5',title:'推广结算'
//                             },{
//         key:'7',type:'user',link:'/apps/6',title:'发起人分润'
//                             },{
//         key:'8',type:'user',link:'/apps/7',title:'放款记录'
//                             },{
//         key:'9',type:'user',link:'/apps/8',title:'保证金管理'
//                             },{
//         key:'10',type:'user',link:'/apps/9',title:'手动转账'
//                             },{
//         key:'11',type:'user',link:'/apps/10',title:'公司转账收回'
//                             },{
//         key:'12',type:'user',link:'/apps/11',title:'理财收益'
//                             },]
//                         },
//                         {
//     key:'sub2',type:'user',link:'',title:'代理商平台',
//     menuitem : [{
//         key:'13',type:'user',link:'/apps/13',title:'个人中心'
//                             },{
//         key:'14',type:'user',link:'/apps/14',title:'推广用户'
//                             },{
//         key:'15',type:'user',link:'/apps/15',title:'代理商列表'
//                             },{
//         key:'16',type:'user',link:'/apps/16',title:'交易记录'
//                             }]
//                         },
//                         {
//     key:'sub3',type:'user',link:'',title:'经营统计',
//     menuitem : [{
//         key:'17',type:'user',link:'/apps/17',title:'用户增长'
//                             },{
//         key:'18',type:'user',link:'/apps/18',title:'交易分析p2p'
//                             },{
//         key:'19',type:'user',link:'/apps/19',title:'交易分析圈子'
//                             },{
//         key:'20',type:'user',link:'/apps/20',title:'交易分析总'
//                             },{
//         key:'21',type:'user',link:'/apps/21',title:'加会分析'
//                             },{
//         key:'22',type:'user',link:'/apps/22',title:'终端在线统计'
//                             },{
//         key:'23',type:'user',link:'/apps/23',title:'借款统计'
//                             }]
//                         },
//                         {
//     key:'sub4',type:'user',link:'',title:'生活缴费',
//     menuitem : [{
//         key:'24',type:'user',link:'/apps/24',title:'缴费记录'
//                             },{
//         key:'25',type:'user',link:'/apps/25',title:'生活缴费配置'
//                             }]
//                         },
//                         {
//     key:'sub5',type:'code-o',link:'',title:'LOW',
//                         },],
//                         rootSubmenuKeys : ['sub1', 'sub2', 'sub3','sub4', 'sub5', 'sub6','sub7', 'sub8', 'sub9','sub10', 'sub11', 'sub12','sub13', 'sub14',]};
export const menulist = {data:[{
    key:'/Homepage',type:'user',link:'/Homepage',title:'首页'
                        },
                        {
    key:'/Homepage/page2',type:'user',link:'',title:'第一',
    menuitem : [{
        key:'/Homepage/page2/1',type:'user',link:'/Homepage/page2/1',title:'一'
                            },{
        key:'/Homepage/page2/2',type:'user',link:'/Homepage/page2/2',title:'二'
                            }]
                        },
                        {
    key:'/Homepage/page3',type:'user',link:'',title:'第二',
    menuitem : [{
        key:'/Homepage/page3/1',type:'user',link:'/Homepage/page3/1',title:'一'
                            },]
                        },
                        {
    key:'/Homepage/page4',type:'user',link:'',title:'第三',
    menuitem : [{
        key:'/Homepage/page4/1',type:'user',link:'/Homepage/page4/1',title:'一'
                            },]
                        },
                        {
    key:'/Homepage/page5',type:'user',link:'',title:'第四',
    menuitem : [{
        key:'/Homepage/page5/1',type:'user',link:'/Homepage/page5/1',title:'一'
                            },]
                        },
                        {
    key:'/Homepage/page6',type:'user',link:'',title:'第五',
    menuitem : [{
        key:'/Homepage/page6/1',type:'user',link:'/Homepage/page6/1',title:'一'
                            },]
                        },
                        {
    key:'/Homepage/page7/1',type:'code-o',link:'/Homepage/page7/1',title:'error',
                        },
                        {
    key:'/Homepage/page8/1',type:'code-o',link:'/Homepage/page8/1',title:'登入',
                        },],
                        Width: document.body.clientWidth,  
                        Height: document.body.clientHeight, 

                        //具体导航的名称  
                        breadcrumbNameMap : {  
                            '/Homepage': '首页',  
                            '/Homepage/page2/1': '第一 > 一',  
                            '/Homepage/page2/2': '第一 > 二',  
                            '/Homepage/page3/1': '第二 > 一', 
                            '/Homepage/page4/1': '第三 > 一',  
                            '/Homepage/page5/1': '第四 > 一',  
                            '/Homepage/page6/1': '第五 > 一',  
                            '/Homepage/page7/1': 'error',  
                            '/Homepage/page8/1': '登入',  
                        },  
                        topmenu : {data:[
                            {
        key:'/A/B',type:'user',link:'/Homepage',title:'111111'
                            },
                            {
        key:'/A/C',type:'user',link:'/Homepage',title:'222222'
                            },
                            {
        key:'/A/D',type:'user',link:'/Homepage',title:'333333'
                            },
                        ]
                        },
                    };
