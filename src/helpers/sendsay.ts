const Sendsay = require('sendsay-api');
const sendsay = new Sendsay();
sendsay.setSessionFromCookie('sendsay_session');

export default class SendsayCustom {
  static sendsay = sendsay;
}
