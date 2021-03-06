// import { queryById,queryEmployee } from '../services/missClock'
import { getCashierPaymentPage,confirmCashierPayment,getDic,getOrg } from '../services/workFlow'

import { config } from '../utils'
import { parse } from 'qs'
import { message } from 'antd'

const { prefix } = config
export default {

  namespace: 'cashierPayment',

  state: {
    list: [],
    dicList:[],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
    },
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {

        if (location.pathname === '/cashierPayment') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
          dispatch({
            type: 'getDic',
            payload: {dicType:'flowType_item'},
          })
        }
      })
    },
  },

  effects: {
    *query ({ payload }, { call, put }) {

      payload=parse(location.hash.split('#/cashierPayment?')[1]); 
      // payload = parse(location.search.substr(1))
      const userInfo = JSON.parse(sessionStorage.getItem(`${prefix}userInfo`));
      
      
      if (userInfo && userInfo.data) {
        payload={...payload,rows:payload.pageSize,parentOrgCode:'Market'}
        const data = yield call(getCashierPaymentPage, payload)
        if(data && data.success){
          yield put({
            type: 'querySuccess',
            payload: {
              list: data.data.rowsObject,//arrayToTree(data.data.rowsObject,'id','parentId'),
              pagination: {
                current: Number(payload.page) || 1,
                pageSize: Number(payload.pageSize) || 10,
                total: data.data.total,
              },
              
            },
          })
        }else{
          throw data;
        }
      }
    },
  
    *confirmCashierPayment ({ payload }, { call, put }) {

      const data = yield call(confirmCashierPayment, payload)
      if (data.success) {
        message.success('付款［登记］成功！');
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
    *getDic ({ payload }, { call, put }) {

     // payload = parse(location.search.substr(1))
      const data = yield call(getDic, payload)

      if (data) {
        yield put({
          type: 'getDicSuccess',
          payload: data.data,
        })
      }
    },
    
  },

  reducers: {

    querySuccess (state, action) {
      const { list, pagination } = action.payload
      //console.log('position:',list);
      return { ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
   
    getDicSuccess(state,action){
      return {...state,dicList:action.payload}
    },
    
  },

}
