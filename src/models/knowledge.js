import { query,queryById,create, change, update,fileUpload } from '../services/knowledge'
//import { arrayToTree,treeToArray } from '../utils'
import { parse } from 'qs'
import { message } from 'antd'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'

const getEditorState=(html)=>EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML(html)
    )
  )
export default {

  namespace: 'knowledge',

  state: {
    list: [],
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    editorState:null,
    fileList:[],
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

        if (location.pathname === '/knowledge') {
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

      payload = parse(location.search.substr(1))
      
      payload={...payload,rows:payload.pageSize}
      const data = yield call(query, payload)

      if (data) {
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
      }
    },

   

    *'change' ({ payload }, { call, put }) {
      const data = yield call(change, { id: payload.id })
      if (data.success) {
        message.success(`${payload.title}成功`);
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    *create ({ payload }, { call, put }) {

      const data = yield call(create, payload)
      if (data.success) {
        message.success('新增成功');
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
    
    *editItem ({ payload }, { call, put }) {
      const id=payload.currentItem.id;
      const data = yield call(queryById, {id})

      if (data.success) {
        let editorState=null;
        if(data.data&&data.data.content){
          editorState=getEditorState(data.data.content);
        }
        yield put({ 
          type: 'showModal',
          payload:{
            ...payload,
            currentItem:data.data,
            editorState,
            fileList:[],
          } 
        })
      } else {
        throw data
      }
    },
    *update ({ payload }, { select, call, put }) {
      const id = yield select(({ knowledge }) => knowledge.currentItem.id)
      const newRole = { ...payload, id }
      const data = yield call(update, newRole)
      if (data.success) {
        message.success('修改成功');
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
    *fileUpload ({ payload }, { call, put }) {
      const data = yield call(fileUpload, payload)
      if (data.success) {
        message.success('文件上传成功');
        yield put({ 
          type: 'fileUploadSuccess',
          payload: {
            fileUrl:data.data,
          }
        })
      } else {
        throw data
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
        } }
    },
    fileUploadSuccess(state, action) {
      const { fileUrl } = action.payload
      return { ...state,fileUrl}
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
    setEditorState(state,action){
      return {...state,editorState:action.payload}
    },
    setFileList(state,action){
      return {...state,fileList:action.payload}
    },

  },

}