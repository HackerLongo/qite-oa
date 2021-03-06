import React from 'react'
import PropTypes from 'prop-types'
import styles from './OpenForm.less'
// import cs from 'classnames';
import {changeMoneyToChinese,config,getAuditerName} from '../../utils'
class OpenForm extends React.Component {
  render () {
    const { data,employeeList,commentList } = this.props
    const userInfo=JSON.parse(sessionStorage.getItem(`${config.prefix}userInfo`))
    let defaultRows=[],total=0;

    const getCreateDate=()=>{
      let _date=data.createTime && new Date(data.createTime) || new Date();
      return `${_date.getFullYear()}年${_date.getMonth()+1}月${_date.getDate()}日`
    }
    
    return (
      <div >
        <div className={styles['title']}>开业支持申请表</div>
        <table className={styles['table']}>
          <tbody>
            <tr>
              <td className={styles['tc-span15']}>申请区域</td>
              <td className={styles['tc']}>{data.applyArea || '无'}</td>
              <td className={styles['tc']}>申请人</td>
              <td className={styles['tc']}>{employeeList.realName || '无'}</td>
              <td className={styles['tc']}>联系电话</td>
              <td className={styles['span15']}>{employeeList.mobilePhone || '无'}</td>
              <td className={styles['tc']}>申请日期</td>
              <td className={styles['tc']}>{data.createTime.substr(0,10) || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>开业时间</td>
              <td className={styles['tc']}>{data.openTime || '无'}</td>
              <td className={styles['tc']}>费用预算</td>
              <td className={styles['tc']}>{data.budge || '0'}</td>
              <td className={styles['tc']}>预计达成销售</td>
              <td className={styles['tc']} colSpan="3">{data.estiSale || '0'}</td>
            </tr>
            <tr>
              <td className={styles['tc']} colSpan="8">需要公司支持方面</td>
            </tr>
            <tr>
              <td className={styles['tc']}>开业方案</td>
              <td className={styles['tc']}>{data.openPlan || '无'}</td>
              <td className={styles['tc']}>物料设计</td>
              <td className={styles['tc']}>{data.materialDesign || '无'}</td>
              <td className={styles['tc']}>到场人员</td>
              <td className={styles['tc']}>{data.personnels || '无'}</td>
              <td className={styles['tc']}>物料制作</td>
              <td className={styles['tc']}>{data.materialMake || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>方案提供时间</td>
              <td className={styles['tc']}>{data.planSupportTime || '无'}</td>
              <td className={styles['tc']}>物料设计完成时间</td>
              <td className={styles['tc']}>{data.materialDesignFinish || '无'}</td>
              <td className={styles['tc']}>到场时间</td>
              <td className={styles['tc']}>{data.arrivalTime || '无'}</td>
              <td className={styles['tc']}>物料费用</td>
              <td className={styles['tc']}>{data.materialExpense || '0'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>其它支持</td>
              <td colSpan='7' className={styles['tc']}>{data.otherSupport || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']} colSpan="8">开业活动方案关键点</td>
            </tr>
            <tr>
              <td className={styles['tc']}>1、主题方面</td>
              <td colSpan='7' className={styles['tc']}>{data.spTheme || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>2、内容方面</td>
              <td colSpan='7' className={styles['tc']}>{data.spContent || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>3、力度方面</td>
              <td colSpan='7' className={styles['tc']}>{data.spIntensity || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>4、时间方面</td>
              <td colSpan='7' className={styles['tc']}>{data.spTime || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>5、其它备注</td>
              <td colSpan='7' className={styles['tc']}>{data.spRemark || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']} colSpan="8">物料设计方案关键点</td>
            </tr>
            <tr>
              <td className={styles['tc']}>1、版面</td>
              <td colSpan='7' className={styles['tc']}>{data.mdPage || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>2、色彩</td>
              <td colSpan='7' className={styles['tc']}>{data.mdColor || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>3、其它</td>
              <td colSpan='7' className={styles['tc']}>{data.mdRemark || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']} colSpan="8">开业活动宣传计划</td>
            </tr>
            <tr>
              <td className={styles['tc']}>1、户外</td>
              <td colSpan='7' className={styles['tc']}>{data.paOutdoor || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>2、小区</td>
              <td colSpan='7' className={styles['tc']}>{data.paVillage || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']}>3、其它</td>
              <td colSpan='7' className={styles['tc']}>{data.paRemark || '无'}</td>
            </tr>
            <tr>
              <td className={styles['tc']} >发起人</td>
              <td className={styles['tc']} colSpan="3">{employeeList.realName || '无'}</td>
              <td className={styles['tc']} >部门主管</td>
              <td className={styles['tc']} colSpan="3">{getAuditerName(commentList,'当区负责人')}</td>
            </tr>
            <tr>
              <td className={styles['tc']} >品牌部总监</td>
              <td className={styles['tc']} colSpan="3">{getAuditerName(commentList,'品牌部总监')}</td>
              <td className={styles['tc']} >主动营销部总监</td>
              <td className={styles['tc']} colSpan="3">{getAuditerName(commentList,'部门总监')}</td>
             
            </tr>
            
          </tbody>
        </table>
      </div>
      )
  }
}
OpenForm.propTypes = {
}
export default OpenForm
