import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Modal } from 'antd'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({

  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFieldsAndScroll({scroll:{offsetBottom:30}},(errors,values) => {
      if (errors) {
        return
      }
      const data = {...values}
      
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

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        
        <FormItem label="角色名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('roleName', {
            initialValue: item.roleName,
            rules: [
              {
                required: true,message:'不能为空',
              },
            ],
          })(<Input />)}
        </FormItem>
       
        <FormItem label="角色编码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('roleCode', {
            initialValue: item.roleCode,
            rules: [
              {
                required: true,message:'不能为空',
               
              },
            ],
          })(<Input />)}
        </FormItem>
        
        <FormItem label="备注说明" hasFeedback {...formItemLayout}>
          {getFieldDecorator('remark', {
            initialValue: item.remark,
            
          })(<Input type="textarea" autosize={{ minRows: 2, maxRows: 6 }} />)}
        </FormItem>
        
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
