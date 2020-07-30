import {LockOutlined} from '@ant-design/icons';
import user from './user/menu_config';
import role from './role/menu_config';
import privilege from './privilege/menu_config';

export default {
    title: '用户与权限',
    icon: LockOutlined,
    path: 'authority',
    subMenus: [user,role,privilege]
}