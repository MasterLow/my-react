import React from 'react';
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';
import './Homepage3.css'
class Homepage3 extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '序号',
            dataIndex: 'key',
            width:'10%'
        }, {
            title: '姓名',
            dataIndex: 'name',
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
                            <Popconfirm title="确定删除?" onConfirm={() => this.onDelete(record, index)}>
                                <a style={{color:'#0f8cf0',fontSize:'16px'}}>删除</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];
        this.state = {
            dataSource: [{
                key: 0,
                name: 'XX 0',
                age: '32',
                address: '不详 0',
            }, {
                key: 1,
                name: 'XX 1',
                age: '32',
                address: '不详 1',
            }],
            count: 2,
            deleteIndex: -1,
            selectedRowKeys: [],  // Check here to configure the default column
        };
    }
    onSelectChange = (selectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
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
        const { dataSource,selectedRowKeys  } = this.state;
        const columns = this.columns;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
        };
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
                                    rowSelection={rowSelection}
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