import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Modal,Row,Col,DatePicker,Button,Icon,Affix } from 'antd'
import moment from 'moment';
import config from '../../utils/config'
import { FileUpload } from '../../components'
import uploadImageCallBack from '../../services/uploadImageCallBack'

const confirm = Modal.confirm

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
      data.missTimeStr=data.missTimeStr?data.missTimeStr.format(dateTimeFormat):null;
      
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

  return (
      <Form layout='horizontal' onSubmit={handleOk}>
        <Row gutter={24}>
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
            <Icon type="credit-card" />漏打卡信息
          </Col>
          <Col xs={24} md={12} xl={8}>
            <FormItem label="姓名"  {...formItemLayout}>
              {employeeList.realName}
            </FormItem>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <FormItem label="部门"  {...formItemLayout}>
              {employeeList.postList[0].orgName}
            </FormItem>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <FormItem label="岗位"  {...formItemLayout}>
              {employeeList.postList[0].postName}
            </FormItem>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <FormItem label="申请单号"  {...formItemLayout}>
              {item.code}
            </FormItem>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <FormItem label="申请时间"  {...formItemLayout}>
              {item.createTime || item.createTimeStr}
            </FormItem>
          </Col>
          <Col xs={24} md={12} xl={8}>  
            <FormItem label="未打卡时间" hasFeedback {...formItemLayout}>
              {getFieldDecorator('missTimeStr', {
                initialValue:(item.missTimeStr || item.missTime)? moment(item.missTimeStr || item.missTime,dateTimeFormat):null,
                rules: [
                  {
                    required: true,
                   
                  },
                ],
              })(<DatePicker showTime format={dateTimeFormat}  style={{width:'100%'}}/>)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="未打卡原因" className='qite-inline' {...twoFormItemLayout}>
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
