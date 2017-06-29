import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input,Radio, InputNumber,Modal,Row,Col,Cascader,DatePicker,Button,Icon,Affix } from 'antd'
import moment from 'moment';
import config from '../../utils/config'
import { FileUpload } from '../../components'
import uploadImageCallBack from '../../services/uploadImageCallBack'
import styles from './Modal.less'
import city from '../../utils/chinaCity'
import {changeMoneyToChinese} from '../../utils'

const confirm = Modal.confirm
const { RangePicker } = DatePicker
const RadioGroup = Radio.Group;
const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: {
    span: 12,
  },
}

const twoFormItemLayout = {
  labelCol: { 
    xs: { span: 12 },
    md: { span: 4 }, 
    xl: { span: 3},
  },
  
}
const textareaStyle = {
  minHeight: 496,
  width: '100%',
  background: '#f7f7f7',
  borderColor: '#F1F1F1',
  padding: '16px 8px',
}
const modal = ({
  item = {},
  onOk,
  title,
  onCancel,
  fileList,
  dicList,
  getFileList,
  confirmLoading,
  submitLoading,
  onSubmit,
  employeeList,
  defaultFileList=[{
      uid:'-1',
      status:'done',
      name:'安全窗大样图.jpg',
      url:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }],
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    setFieldsValue,
  },
  ...modalProps
}) => {
  const dateTimeFormat='YYYY-MM-DD HH:mm:ss'

  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {...getFieldsValue()}
      if(fileList && fileList.length>0){
        fileList.map((f,index)=>{
          if(f.id) data[`attachList[${index}].id`]=f.id;
          data[`attachList[${index}].attachUrl`]=f.url;
          data[`attachList[${index}].attachName`]=f.name;
        })
      }else if(defaultFileList[0]){
        defaultFileList.map((f,index)=>{
          if(f.id) data[`attachList[${index}].id`]=f.id;
          data[`attachList[${index}].attachUrl`]=f.url;
          data[`attachList[${index}].attachName`]=f.name;
        })
      }
      data.travelTimeStartStr=data.travelTime?data.travelTime[0].format(dateTimeFormat):null;
      data.travelTimeEndStr=data.travelTime?data.travelTime[1].format(dateTimeFormat):null;
      
      data.provinceId=data.destination?data.destination[0]:-1;
      data.cityId=data.destination?data.destination[1]:-1;
      data.areaId=data.destination?data.destination[2]:-1;
      data.province=item.province;
      data.city=item.city;
      data.area=item.area;
      //console.log('-----',data)
      if(item.id){
        data.id=item.id
      }
      onOk(data)
    })
  }
  if(item.attachList&& item.attachList[0]){
    defaultFileList=item.attachList.map((temp)=>{
      return {...temp,uid:temp.id,status:'done',url:temp.attachUrl,name:temp.attachName}
    })
  }else{
    defaultFileList=[];
  }

  const handleSubmit=()=>{
    confirm({
        title: `你确定提交申请么?`,
        onOk () {
          onSubmit(item.id,'')
        },
      })
  }
  let initialTravelTime = []
  if (item.travelTimeStartStr) {
    initialTravelTime[0] = moment(item.travelTimeStartStr)
  }else if(item.travelTimeStart){
    initialTravelTime[0] = moment(item.travelTimeStart)
  }
  if (item.travelTimeEndStr) {
    initialTravelTime[1] = moment(item.travelTimeEndStr)
  }else if(item.travelTimeEnd){
    initialTravelTime[1] = moment(item.travelTimeEnd)
  }
  let initialDestination=[]
  if(item.provinceId){
    initialDestination[0]=item.provinceId;
  }
  if(item.cityId){
    initialDestination[1]=item.cityId;
  }
  if(item.areaId){
    initialDestination[2]=item.areaId;
  }
  const dicRadio=dicList.map(dic=><Radio key={dic.id} value={dic.dicValue}>{dic.dicName}</Radio>)
  const handleRadioChange= (e) => {
    //console.log('radio checked', e.target.value,e.target);
    item.tripMode=e.target.value;
  }
  const handleExpenseChange= (value) => {
    //console.log('radio checked', e.target.value,e.target);
    
    item.expense=value;
  }
  const getHours=(t=null)=>{
    const data = {...getFieldsValue()}
    let a=data.travelTime?(data.travelTime[0]?data.travelTime[0].format(dateTimeFormat):null):null;
    let b=data.travelTime?(data.travelTime[1]?data.travelTime[1].format(dateTimeFormat):null):null;
    
    if(!a||!b){
      return 0;
    }
    let timeA=new Date(a);
    let timeB=new Date(b);
    return ((timeB-timeA)/(3600*1000)).toFixed(2)
  }
  const getExpense=()=>{

    return changeMoneyToChinese(item.expense);
  }
  const destinationChange=(value,selectedOptions)=>{
    //console.log('destinationChange:',value,selectedOptions)
    item.province=selectedOptions[0].label;
    item.city=selectedOptions[1].label;
    item.area=selectedOptions[2].label;
  }
  return (
      <Form layout='horizontal' onSubmit={handleOk}>
        <Row gutter={24} className={styles['q-detail']}>
          <Col span={24} style={{display:'flex',justifyContent:'space-between',marginBottom:'24px',paddingBottom:'12px',borderBottom:'1px solid #d9d9d9'}}>
            <div className='qite-title'>
            <Icon type={item.id?'edit':'plus'} />{title}</div>
           
            <Affix target={()=>document.getElementById('layout-main')}>
         
              <div style={{backgroundColor:'#fff'}}>
                {item.id?<Button  type="primary" onClick={handleSubmit} size="large" loading={submitLoading}>提交</Button>:null}
                <Button style={{ marginLeft: 12,marginRight: 12 }} type="primary" loading={confirmLoading} onClick={handleOk} size="large">确定</Button>
                <Button  type="ghost" onClick={onCancel} size="large">取消</Button>
              </div>
            </Affix>

          </Col>
          <Col span={24} className='qite-list-title'>
            <Icon type="credit-card" />加班申请信息
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            姓名：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {employeeList.realName || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            部门：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem>
              {employeeList.postList[0].orgName || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            岗位：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {employeeList.postList[0].postName || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            申请单号：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {item.code || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            申请时间：
          </Col>
          <Col xs={18} md={8} xl={14} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {item.createTime || item.createTimeStr || '无'}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            同行人：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('colleaguesNames', {
                initialValue:item.colleaguesNames,
                rules: [
                  {
                    required: true,
                   
                  },
                ],
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
            
          </Col>
         
        </Row>
        
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px',paddingLeft:'0px' }} className={styles['q-detail-label-require']}>
            预计出差时间：
          </Col>
          <Col xs={12} md={20} xl={14} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem >
              {getFieldDecorator('travelTime', {
                initialValue:initialTravelTime,
                rules: [
                  {
                    required: true,
                   
                  },
                ],
              })(<RangePicker showTime format={dateTimeFormat}  style={{width:'400px'}}/>)}
            </FormItem>
            <FormItem> 共 {getHours()} 小时</FormItem>

          </Col>
        </Row>
       
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' ,paddingLeft:'0px'}} className={styles['q-detail-label-require']}>
            出差地点：
          </Col>
          <Col xs={12} md={20} xl={14} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem >
              {getFieldDecorator('destination', {
                initialValue:initialDestination,
                rules: [{required: true,},],
                onChange:destinationChange,
              })(
                <Cascader
                  size="large"
                  style={{ width: '400px' }}
                  options={city}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('address', {
                initialValue:item.address,
                rules: [{required: true,},],
              })(<Input />)}
            </FormItem>

          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
            拜访客户：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('customers', {
                initialValue:item.customers,
                rules: [
                  {
                    required: true,
                   
                  },
                ],
              })(<Input />)}
              
            </FormItem>
            
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
            出差事由：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {getFieldDecorator('remark', {
                initialValue: item.remark,
                rules: [
                  {
                    required: true,
                   
                  },
                ],
              })(<Input type="textarea" autosize={{ minRows: 2, maxRows: 5 }} />)}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
            出行方式：
          </Col>
          <Col xs={18} md={20} xl={14} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem >
              {getFieldDecorator('tripMode', {
                initialValue:item.tripMode===undefined?'1':String(item.tripMode),
                rules: [
                  {
                    required: true,
                   
                  },
                ],
                onChange:handleRadioChange,
              })(<RadioGroup labelInValue>{dicRadio}</RadioGroup>)}
              
            </FormItem>
            {item.tripMode==='5'?
            <FormItem >
              {getFieldDecorator('tripModeRemark', {
                initialValue:item.tripModeRemark,
              })(<Input />)}
            </FormItem>
            :null}
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
            申请费用：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem  >
              {getFieldDecorator('expense', {
                initialValue:(item.expense===undefined||item.expense===null)?0:Number(item.expense),
                rules: [
                  {
                    required: true,
                   
                  },
                ],
                onChange:handleExpenseChange,
              })(
                <InputNumber
                  step={0.01} style={{width:'120px'}}
                  formatter={value => `¥ ${value?value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):0}`}
                  parser={value => value?value.toString().replace(/\¥\s?|(,*)/g, ''):0}
                  
                />
              )}
              
            </FormItem>
            {item.expense?
            <FormItem >
              大写：{getExpense()}
            </FormItem>
            :null}
         
          </Col>
        </Row>
        <Row gutter={12} className={styles['q-detail']} style={{marginLeft:'2px',marginRight:'2px'}}>
          <blockquote>
            <p>
              备注：<br/>
              1、此申请表作为借款、核销必备凭证。<br/>
              2、如出差途中变更行程计划需及时汇报。<br/>
              3、出差申请表须在接到申请后48小时内批复。
            </p>
          </blockquote>
        </Row> 
      <Row gutter={24} className={styles['q-detail']}>

          <Col span={24} className='qite-list-title'>
            <Icon type="paper-clip" />申请附件
          </Col>
          <Col span={24}>
            <FormItem >
              <FileUpload defaultFileList={defaultFileList} callbackParent={getFileList} />      
            </FormItem>    
          </Col>
          
        </Row>

      </Form>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
