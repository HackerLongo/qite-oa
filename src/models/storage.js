import { query,queryById,queryEmployee,getDic,storeInDetail } from '../services/purchase'
import { config } from '../utils'
import { parse } from 'qs'
import { message } from 'antd'

const { prefix } = config

export default {

  namespace: 'storage',

  state: {
    list: [],
    currentItem: {},
    modalVisible: false,
    modalType: 'update',
    fileList:[],
    dicList:[],
    employeeList:[],
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

        if (location.pathname === '/storage') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {
    *query ({ payload }, { call, put }) {

      payload=parse(location.hash.split('#/storage?')[1]); 
      // payload = parse(location.search.substr(1))
      // const userInfo = JSON.parse(sessionStorage.getItem(`${prefix}userInfo`));
      // if (userInfo && userInfo.data) {
      //   payload.userId=userInfo.data.id;
      // }
      payload={...payload,rows:payload.pageSize,isStorage:true}
      const data = yield call(query, payload)
      
      if (data && data.success ) {

        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data.rowsObject,//arrayToTree(data.data.rowsObject,'id','parentId'),
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.data.total,
            },
            // employeeList:userInfo.data.employeeVo,
          },
        })
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
   
    *editItem ({ payload }, { call, put }) {
      const id=payload.currentItem.id;
      const data = yield call(queryById, {id})

      if (data.success) {
        yield put({
          type:'queryEmployee',
          payload:data.data.userId
        })
        yield put({ 
          type: 'showModal',
          payload:{
            ...payload,
            currentItem:data.data,
            fileList:[],
            detailList:[],
          } 
        })
      } else {
        throw data
      }
    },
    *update ({ payload }, { select, call, put }) {
      const currentItem = yield select(({ storage }) => storage.currentItem)
      // const newItem = { ...payload, id }
      const data = yield call(storeInDetail, payload)
      if (data.success) {
        message.success('入库成功');
        // yield put({ type: 'hideModal' })
        yield put({ type: 'editItem',payload:{currentItem} })
      } else {
        throw data
      }
    },
    *queryEmployee({payload},{call,put}){
        const userInfo=yield call(queryEmployee,{userId:payload})//other.data.userId
        if(userInfo&&userInfo.success){
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

    querySuccess (state, action) {
      const { list, pagination } = action.payload
      //console.log('position:',list);
      return { ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
        modalVisible:false,
      }
    },
    queryEmployeeSuccess (state, { payload }) {
      return {
        ...state,
        employeeList:payload.employeeList[0],
      }
    },
    getDicSuccess(state,action){
      return {...state,dicList:action.payload}
    },
    
    showModal (state, action) {

      return { ...state, ...action.payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },
    setState(state,action){
      return {...state,currentItem:action.payload}
    },
    setFileList(state,action){
      return {...state,fileList:action.payload}
    },
    
    
  },

}
