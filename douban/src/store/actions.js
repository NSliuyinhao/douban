//导入常量
import { USER_INFO} from './actionsTypes'

function userLogin(value) {
    return {
        type:USER_INFO,
        value:value
    }
}
export {userLogin}