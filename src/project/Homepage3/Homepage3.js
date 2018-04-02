import React from 'react';
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';
import './Homepage3.css'
class Homepage3 extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '姓名',
            dataIndex: 'name',
            width: '30%'
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '地址',
            dataIndex: 'address',
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record, index)}>
                                <a style={{color:'#0f8cf0',fontSize:'16px'}}>删除</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];
        this.state = {
            dataSource: [{
                key: '0',
                name: 'XX 0',
                age: '32',
                address: '不详 0',
            }, {
                key: '1',
                name: 'XX 1',
                age: '32',
                address: '不详 1',
            }],
            count: 2,
            deleteIndex: -1
        };
    }
    onDelete = (record, index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ deleteIndex: record.key});
        setTimeout(() => {
            this.setState({ dataSource })
        }, 500);
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `XX ${count}`,
            age: 32,
            address: `不详 ${count}`,
        };
        this.setState({
            dataSource: [ ...dataSource,newData],
            count: count + 1,
        });
    };
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Row gutter={16}>
                    <Col md={24}>
                        <div>
                            <Card bordered={false}>
                                <Button onClick={this.handleAdd}>添加 +</Button>
                                <Table
                                    bordered
                                    dataSource={dataSource}
                                    columns={columns}
                                    rowClassName={(record, index) => {
                                        if (this.state.deleteIndex === record.key) return 'animated zoomOutLeft min-black';
                                        return 'animated fadeInRight';
                                    }}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Homepage3);