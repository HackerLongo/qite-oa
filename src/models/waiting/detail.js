import pathToRegexp from 'path-to-regexp'
import { queryEmployee } from '../../services/missClock'
//import { treeToArray } from '../../utils'
import { getTaskInfo,getDiagram,getDic } from '../../services/workFlow'

export default {
  namespace: 'waitingDetail',
  state: {
    data: {},
    employeeList:[],
    dicList:[],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/waiting/:id').exec(location.pathname)
        if (match) {
          //console.log('query:',location.query,match[1])
          dispatch({ type: 'query', payload: {...location.query,taskId: match[1]} })
        }
      })
    },
  },
  effects: {
    *query ({payload,}, { call, put }) {
      const data = yield call(getTaskInfo, payload)
      let { success, message, status, ...other } = data
      const flowImgSrc=yield call(getDiagram,payload)
      if (success) {
        other.data.flowImgSrc=flowImgSrc;
        let dicType=null;  
        switch(other.data.busiCode.substr(0,2)){
          case 'LE':
              dicType='leaveType_item'
            break;
        }
        if(dicType){
          yield put({
            type: 'getDic',
            payload: {dicType},
          })
        }
        yield put({
          type: 'querySuccess',
          payload: {
            data: other.data
          },
        })
      } else {
        throw data
      }
    },
    *getDic ({ payload }, { call, put }) {
      const data = yield call(getDic, payload)
      if (data) {
        yield put({
          type: 'getDicSuccess',
          payload: data.data,
        })
      }
    },
    *queryEmployee({payload},{call,put}){
        const userInfo=yield call(queryEmployee,{userId:payload})//other.data.userId
        if(userInfo&&userInfo.success){
          //console.log(userInfo.data.rowsObject[0])
          yield put({
            type: 'queryEmployeeSuccess',
            payload: {
              employeeList:userInfo.data.rowsObject,
            },
          })
        }else{
          throw userInfo
        }
    }
  },
  reducers: {
    querySuccess (state, { payload }) {
      
      return {
        ...state,
        data:payload.data,
      }
    },
    getDicSuccess(state,action){
      return {...state,dicList:action.payload}
    },
    queryEmployeeSuccess (state, { payload }) {
      return {
        ...state,
        employeeList:payload.employeeList[0],
      }
    },
  },
}