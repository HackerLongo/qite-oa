import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import NoticeDetailPage from '../../../components/NoticeDetailPage'
import CommentTable from '../../../components/CommentTable'
import FlowImg from '../../../components/FlowImg'
import { Icon} from 'antd'
import cs from 'classnames'
import TaskNodeList from '../../../components/TaskNodeList'
import Iconfont from '../../../components/Iconfont'
import audited from '../../../svg/audited.svg'

const Detail = ({ noticeDetail }) => {
  const { data,employeeList,dicList,commentList,taskNode } = noticeDetail
  const noComment=location.hash.indexOf('noComment')>0?true:false;
  return (
    <div className={cs({'content-inner':true,...JSON.parse(`{"audited${data && data.state && data.state}":true}`) })}>
      <Iconfont className="q-icon-audited" colorful type={audited} />
      <a href="javascript:window.history.back();" className="q-goback">
        <Icon type="close-circle-o" />
      </a>
      <NoticeDetailPage data={data} employeeList={employeeList} dicList={dicList} />
      {
        taskNode && taskNode[0] && data && data.state<2?
        <TaskNodeList data={taskNode} />
        :null
      }
      {
        !noComment&& commentList && commentList[0]?
        <CommentTable data={commentList} />
        :null
      } 
      {
        !noComment && data && data.flowImgSrc?
        <FlowImg path={data.flowImgSrc+'&_t='+Math.random()} />
        :null
      }
    </div>)
}

Detail.propTypes = {
  noticeDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ noticeDetail, loading }) => ({ noticeDetail, loading: loading.models.noticeDetail }))(Detail)
