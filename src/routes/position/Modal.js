import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input,InputNumber, Modal,Select,Switch } from 'antd'

const FormItem = Form.Item
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  orgList=[],
  dicList=[],
  item = {},
  orgKey=null,
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    setFieldsValue,
  },
  ...modalProps
}) => {
  if(orgKey!==undefined && orgKey!==null){
    item.orgId=orgKey;
  }
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {...getFieldsValue()}
      let _ls=orgList.filter(item=>String(item.id)===data.orgId);
      //console.log('orgParentId:',_ls[0].parentId)
      if(_ls && _ls[0]){
        data.orgParentId=_ls[0].parentId;
      }
      if(item.parentId!==undefined){
        data.parentId=item.parentId
      } 
      if(item.id){
        data.id=item.id
      }
      onOk(data)
    })
  }
 

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }
  const orgOptions = orgList.map(org => <Option key={org.id}>{org.orgName}</Option>);
  const handleSelectChange = (value,name) => {
    
    setFieldsValue({
      name: value
    });
  }
  const dicOptions=dicList.map(dic=><Option key={dic.dicName}>{dic.dicName}</Option>);

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="序号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('seq', {
            initialValue: item.seq,
           
          })(<InputNumber step={1} />)}
        </FormItem>
        <FormItem label="职位名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('postName', {
            initialValue: item.postName,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
       
        <FormItem label="职位编码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('postCode', {
            initialValue: item.postCode,
            
          })(<Input />)}
        </FormItem>
        <FormItem label="职位类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('postTypeName', {
            initialValue: item.postTypeName,
            
          })(<Select onChange={e=>handleSelectChange(e.value,'postTypeName')}>{dicOptions}</Select>)}
        </FormItem>
        
        <FormItem label="所属机构" hasFeedback {...formItemLayout}>
          {getFieldDecorator('orgId', {
            initialValue:String(item.orgId===undefined?'':item.orgId),
            rules: [
              {
                required: true,
                
              },
            ],
          })(<Select onChange={e=>handleSelectChange(e.value,'orgId')}>{orgOptions}</Select>)}
        </FormItem>
        <FormItem label="是否主管" hasFeedback {...formItemLayout}>
          {getFieldDecorator('isManager', {
            initialValue: Boolean(item.isManager),
            
          })(<Switch defaultChecked={item.isManager} checkedChildren={'是'} unCheckedChildren={'否'} />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
  orgList:PropTypes.array,
}

export default Form.create()(modal)
