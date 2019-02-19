const devUrl = 'http://127.0.0.1:3000'
const proUrl = 'http://apiUrl.com'

export default {
  apiUrl: process.env.NODE_ENV === 'development' ? devUrl : proUrl,
  apiPrefix: 'api',
  gitHub: 'http://git.vdongchina.com/zhang_xn1314/study-online-admin'
}
