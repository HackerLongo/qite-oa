import React from 'react'
import PropTypes from 'prop-types'
//import ReactDOM from 'react-dom'
//import styles from './EditCellTable.less'
import { Table, Popconfirm,Col,Icon,Row } from 'antd'
//import moment from 'moment';
import InputCell from '../../../components/InputCell'
import InputCurrencyCell from '../../../components/InputCurrencyCell'
import DateTimeCell from '../../../components/DateTimeCell'
import SelectCell from '../../../components/SelectCell'
import {changeMoneyToChinese,findIsEditable} from '../../../utils'

class EditCellTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title:'序号',
      dataIndex:'index',width:60,
      render:(text,record,index)=>index+1,
    
    },{
      title: '出发时间',
      dataIndex: 'departureTimeStr',
      width: 180,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'departureTimeStr', text,'datetime'),
    
    }, {
      title: '出发地点',
      dataIndex: 'departurePlace',
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'departurePlace', text,'input'),
    }, {
      title: '到达时间',
      dataIndex: 'arrivalTimeStr',
      width: 180,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'arrivalTimeStr', text,'datetime'),
    }, {
      title: '到达地点',
      dataIndex: 'arrivalPlace',
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'arrivalPlace', text,'input'),
    }, {
      title: '交通工具',
      dataIndex: 'vehicle',
      width: 120,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'vehicle', text,'select'),
    }, {
      title: '交通费用',
      dataIndex: 'vehicleCost',
      width: 120,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'vehicleCost', text,'currency'),
    }, {
      title: '住宿费',
      dataIndex: 'livingCost',
      width: 120,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'livingCost', text,'currency'),
    }, {
      title: '补助费用',
      dataIndex: 'subsidyAmount',
      width: 120,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'subsidyAmount', text,'currency'),
    }, {
      title: '其他费用',
      dataIndex: 'otherCost',
      width: 120,
      render: (text, record, index) => this.renderColumns(this.props.dataSource, index, 'otherCost', text,'currency'),
    }, {
      title: '合计金额',
      dataIndex: 'total',
      width:120,
      render: (text, record, index) =>{
        let t=parseFloat(record.vehicleCost)+parseFloat(record.livingCost)+parseFloat(record.otherCost)+parseFloat(record.subsidyAmount);
        return `¥ ${t?t.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):'0.00'}` || '¥ 0.00'
      },
    
    }, {
      title: '操作',
      dataIndex: 'operation',
      fixed:'right',width:120,
      render: (text, record, index) => {
        const { editable } = this.props.dataSource[index].departureTimeStr;
        return (
          <div className="editable-row-operations">
            {
              editable ?
                <span>
                  <a onClick={() => this.editDone(index, 'save')}>保存</a>
                  <Popconfirm title="确定取消么?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(index)}>编辑</a>
                  <Popconfirm title="确定删除么?" onConfirm={() => this.del(index)}>
                    <a>删除</a>
                  </Popconfirm>
                 
                </span>
            }
          </div>
        );
      },
    }];
    this.state = {
    };
  }
  
  renderColumns(data, index, key, text,colType) {
    const { editable, status } = data[index][key];
    const { dicList } =this.props;
    if (typeof editable === 'undefined') {
      return text;
    }
    switch(colType){
      case 'input':
        return (<InputCell
          editable={editable}
          value={text}
          length={15}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
        />);
      case 'currency':
        return (<InputCurrencyCell
          editable={editable}
          value={text}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
        />);
      case 'datetime':
        return (<DateTimeCell
          editable={editable}
          value={text}
          showFormat="5,5"
          onChange={value => this.handleChange(key, index, value)}
          status={status}
        />);
      case 'select':
        return (<SelectCell
          editable={editable}
          value={text}
          selectOptions={dicList}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
        />);
    }
  }
  add=()=>{
    let data = this.props.dataSource;
    let count = data.length;
    const newRow={
        key: count+Math.random(),
        departureTimeStr: {
          editable: true,
          value: '',
        },
        departurePlace: {
          editable: true,
          value: '',
        },
        arrivalTimeStr: {
          editable:true,
          value: '',
        },
        arrivalPlace: {
          editable:true,
          value: '',
        },
        vehicle: {
          editable:true,
          value: '1',
        },
        vehicleCost: {
          editable:true,
          value: 0,
        },
        subsidyAmount: {
          editable:true,
          value: 0,
        },
        livingCost: {
          editable:true,
          value: 0,
        },
        otherCost: {
          editable:true,
          value: 0,
        },
      }
    this.props.callbackParent&&this.props.callbackParent([...data,newRow]);
    this.props.setIsEditable && this.props.setIsEditable(true);
  }
  handleChange(key, index, value) {
    let data = this.props.dataSource;
    data[index][key].value = value;
    delete data[index][key].status;
    this.props.callbackParent&&this.props.callbackParent(data);
    this.props.setIsEditable && this.props.setIsEditable(findIsEditable(data))
  }
  edit(index) {
    let data = this.props.dataSource;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.props.callbackParent&&this.props.callbackParent(data);
    this.props.setIsEditable && this.props.setIsEditable(true);
  }
  getActualExpense(){
   let data = this.props.dataSource;
    let c=0;
    if(data && data[0]){
      data.map(t=>{
        c+=parseFloat(t.vehicleCost.value)
          +parseFloat(t.livingCost.value)
          +parseFloat(t.otherCost.value)
          +parseFloat(t.subsidyAmount.value)
      })
    }
    return c.toFixed(2);
  }
  del(_index){
    const data =this.props.dataSource[0]?this.props.dataSource.filter((item,index)=>index!==_index):[];
    if(this.props.callbackParent)this.props.callbackParent(data);
  }
  editDone(index, type) {
    let data = this.props.dataSource;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.props.callbackParent&&this.props.callbackParent(data);
    this.props.setIsEditable && this.props.setIsEditable(findIsEditable(data))
  }
  
  render() {
    const data = this.props.dataSource;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;
    return  (
      <Row gutter={24} className={this.props.className}>

        <Col span={24} className='qite-list-title' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div><Icon type="credit-card" />差旅费明细</div>
            <a onClick={e=>this.add(e)}>添加差旅明细</a>
        </Col>
        <Col span={24}>
            <Table bordered 
              dataSource={dataSource} 
              columns={columns} 
              pagination={false}
              scroll={{ x: 1520 }} 
              rowKey={record=>record.key}
              footer={()=>(
                <div>
                报销总额：{`¥ ${this.getActualExpense().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                &nbsp;&nbsp;&nbsp;&nbsp;大写：{changeMoneyToChinese(this.getActualExpense())}
                </div>
                )}
              />
        </Col>
        
      </Row>
      )

      
  }
}


EditCellTable.propTypes = {
  dataSource: PropTypes.array,
  dicList:PropTypes.array,
}

export default EditCellTable
