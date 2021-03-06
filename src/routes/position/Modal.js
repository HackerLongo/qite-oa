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
  postLevelList,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    getFieldsValue,
    setFieldsValue,
  },
  ...modalProps
}) => {
  if(orgKey!==undefined && orgKey!==null){
    item.orgId=orgKey;
  }
  const handleOk = () => {
    validateFieldsAndScroll({scroll:{offsetBottom:30}},(errors,values) => {
      if (errors) {
        return
      }
      const data = {...values}
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
  
  // const dicOptions=dicList && dicList[0] && dicList.map(dic=><Option key={dic.dicName}>{dic.dicName}</Option>);
  const postLeveOptions=postLevelList.map(dic=><Option key={dic.dicValue}>{dic.dicName}</Option>);

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
                required: true,message:'不能为空',
              },
            ],
          })(<Input />)}
        </FormItem>
       
        <FormItem label="职位编码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('postCode', {
            initialValue: item.postCode,
            
          })(<Input />)}
        </FormItem>
        <FormItem label="职位级别" hasFeedback {...formItemLayout}>
          {getFieldDecorator('postLevel', {
            initialValue: item.postLevel!==undefined && item.postLevel!==null?String(item.postLevel):'0',
            rules: [
              {required: true,message:'不能为空',},
            ],
          })(<Select >{postLeveOptions}</Select>)}
        </FormItem>
        <FormItem label="所属机构" hasFeedback {...formItemLayout}>
          {getFieldDecorator('orgId', {
            initialValue:String(item.orgId===undefined?'':item.orgId),
            rules: [
              {required: true,message:'不能为空',},
            ],
          })(<Select >{orgOptions}</Select>)}
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
