import React from 'react'
import PropTypes from 'prop-types'
//import ReactDOM from 'react-dom'
import styles from './SelectUser.less'
import { Row,Col,Tree,Table,Modal,Button } from 'antd'
import {getOrg,queryList} from '../../services/employee'

const TreeNode = Tree.TreeNode;


class SelectUser extends React.Component {
  state = {
    employeeList:[],
    orgTree:[],
    modalVisible:false,
    selectedRow:{},
  }
  showModal = () => {
    getOrg().then(res=>{
      //console.log('onSelect:',res.data)
      this.setState({orgTree:res.data,modalVisible: true});
    });
  }
  handleOk = (e) => {
    //console.log(e);
    const { selectedRow} =this.state;
    this.setState({
      modalVisible: false,
    });
    if(this.props.callBack)this.props.callBack(selectedRow);
  }
  handleCancel = (e) => {
    //console.log(e);
    this.setState({
      modalVisible: false,
    });
  }
  render() {
    const { employeeList,orgTree } = this.state;
    const {type} = this.props;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'realName',
        key: 'realName',
      }, {
        title: '账号',
        dataIndex: 'mobilePhone',
        key: 'mobilePhone',
      },
    ]
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        //console.log('selectedRows:',selectedRows[0]);
        
        let { selectedRow} =this.state;
        selectedRow.userId=selectedRows[0].userId;
        selectedRow.userName=selectedRows[0].userName;
        this.setState({selectedRow})
      },
      
      type:'radio',
    };
    const tableProps = {
      dataSource: employeeList,
      pagination:false,
      rowSelection,
    }
    const loop = data => data.map((item) => {
      if (item.children && item.children[0]) {
        return <TreeNode title={item.orgName} key={item.id}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.orgName} key={item.id} />;
    });
    //console.log(orgTree);
    const treeNodes = loop(orgTree);
    const onSelect = (selectedKeys, info) => {
      let { selectedRow} =this.state;
      selectedRow.orgId=selectedKeys[0];
      selectedRow.orgName=info.selectedNodes[0].props.title;
      //console.log('onSelect:',selectedKeys[0],info.selectedNodes[0].props.title);
      queryList({orgId:selectedKeys[0]}).then(res=>{
        this.setState({employeeList:res.data,selectedRow})
      })
    }

    
    const content=(
      <Row gutter={24} style={{width:'580px'}}>
        <Col className={styles.tree} span={12}>
           <h3>组织机构</h3>
          <Tree onSelect={onSelect} showLine>
            {treeNodes}
          </Tree>
        </Col>
        <Col span={12}>
          <Table
            {...tableProps}
            bordered
            columns={columns}
            simple
            rowKey={record => record.id}
          />
        </Col>
      </Row>
    )
    return (
      <span style={{marginLeft:'8px'}}>
      { type && type==='button'?
      <Button size="large" type="primary" onClick={e=>this.showModal()}>提交</Button>
      :
      <a onClick={e=>this.showModal()}>提交</a>
      }
      <Modal
        width={600}
        title="选择人员"
        visible={this.state.modalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        {content}
      </Modal>
      </span>
    );
  }
}


SelectUser.propTypes = {
  type:PropTypes.string,
}

export default SelectUser