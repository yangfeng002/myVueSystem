/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/9/23 9:17]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
import Cookies from 'js-cookie'

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}
