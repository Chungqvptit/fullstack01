import {createStore} from 'redux';
import { firebaseConnect } from './firebaseConnect';

const INITIAL_STATE = {
    status1: false,
    status2:false ,
    sttNotify:false,
    Alertcontent:"",
    Editdata:{}
};
 
export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_DATA':// them du lieu tmp vua nhap o addform vao firebase
            firebaseConnect.push(action.tmp);
            console.log("them thanh cong");
            return state
        case 'Changestt1':// trang thai de hien thi editform
            return {...state,status1:!state.status1}
        case 'Changestt2'://trang thai de hien thi addform
            return {...state,status2:!state.status2}
        case 'Onnotify'://thay doi trang thai hien thi notify
            return{...state,sttNotify:true,Alertcontent:action.title}
        case 'Offnotify'://thay doi trang thai hien thi notify
            return{...state,sttNotify:false}
        case 'editdata':// lay du lieu can sua cua 1 xe
            return {...state,Editdata:action.tmp}
        case 'UpdateEdit'://update du lieu can sua
            firebaseConnect.child(action.tmp.id).update({
                tengia: action.tmp.tengia,
                noidung: action.tmp.noidung,
                hinhanh: action.tmp.hinhanh
            });
            return {...state,Editdata:{}}
        case 'Trashdata':// xoa du lieu 1 xe ra khoi firebase
            firebaseConnect.child(action.tmp).remove();
            return {...state}
        default:
            return state
    }
}
const store = createStore(reducer);

export default store;

