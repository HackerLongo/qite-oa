import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'

const Waiting = ({ location, dispatch, waiting, loading }) => {
  const { list,fileList,employeeList,dicList,isNeedSel,reasonStr, 
    needEvalRemark,pagination, taskData, modalVisible } = waiting
  const { pageSize } = pagination

  const modalProps = {
    taskData,
    visible: modalVisible,
    employeeList,
    isNeedSel,
    reasonStr,
    needEvalRemark,
    maskClosable: false,
    confirmLoading: loading.effects['waiting/submit'],
    title: '流程办理',
    wrapClassName: 'vertical-center-modal',
    onCancel () {
      if(location.query && location.query.homeTaskId && location.query.from){
        dispatch(routerRedux.push({
          pathname:location.query.from,
        }))
      }else{
        dispatch({
          type: 'waiting/hideModal',
        })
      }
    },
    setNeedEvalRemark(needEvalRemark){
      dispatch({type:'waiting/setNeedEvalRemark',payload:{needEvalRemark}});
    },
    setNeedSel(isNeedSel,reasonStr){
      dispatch({
        type:'waiting/setNeedSel',
        payload:{isNeedSel,reasonStr}
      })
    },
    onOk (formItem) {
      dispatch({
        type: 'waiting/submit',
        payload: formItem,
      })
    },
  }

  const listProps = {
    dataSource:list,
    loading: loading.effects['waiting/query'],
    pagination,
    location,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
    onEditItem (item) {
      dispatch({
        type: 'waiting/editItem',
        payload: item,
      })
    },
    goBackEidt(url,querylist){
      dispatch(routerRedux.push({pathname:url,query:querylist}))
    },
  }

  const filterProps = {
    dicList,
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize,
        },
      }))
    },
  }

  return (
    <div className="content-inner">
      {!modalVisible &&<Filter {...filterProps} />}
      {!modalVisible &&<List {...listProps} />}
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

Waiting.propTypes = {
  waiting: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ waiting, loading }) => ({ waiting, loading }))(Waiting)
