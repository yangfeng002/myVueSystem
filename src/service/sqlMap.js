/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/9/6 14:31]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into users(id, username, password) values (0, ?, ?)'
  }
}
module.exports = sqlMap;
