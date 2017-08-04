import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import PurchaseDetailPage from '../../../components/PurchaseDetailPage'
import CommentTable from '../../../components/CommentTable'
import FlowImg from '../../../components/FlowImg'
import { Icon} from 'antd'
const Detail = ({ purchaseDetail }) => {
  const { data,employeeList,commentList } = purchaseDetail
  
  return (
    <div className="content-inner">
      <a href="javascript:window.history.back();" className="q-goback">
        <Icon type="close-circle-o" />
      </a>
      <PurchaseDetailPage data={data} employeeList={employeeList} />
      {
        commentList && commentList[0]?
        <CommentTable data={commentList} />
        :null
      } 
      {
        data && data.flowImgSrc?
        <FlowImg path={data.flowImgSrc+'&_t='+Math.random()} />
        :null
      }
    </div>)
}

Detail.propTypes = {
  purchaseDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ purchaseDetail, loading }) => ({ purchaseDetail, loading: loading.models.purchaseDetail }))(Detail)
