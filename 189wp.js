
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://m.cloud.189.cn/v2/drawPrizeMarketDetails.action?taskId=TASK_SIGNIN&activityId=ACT_SIGNIN&noCache=0.015394232780545525`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `apm_ct=20210325090314609; apm_ip=D8F0EA4AD6521EC074A503FA7817FDB343FE5B4D01CBCF7A3E4777EEEE5CFDC74432F58960367DC8369BF292; apm_sid=6C6F4452D513AE63A6230DBC238909D2; apm_ua=B59F78CD7AF321DAF0E010EEFC8DCF6B; apm_uid=E931CD6E1754A465698BB52577F9A8CB; COOKIE_LOGIN_USER=5F6080AC479ED009989C62CBD5D588C70FCA01BECD5830B9E0E30EF2DEB3063BC8BE5B4C2DEEB0DA169D8593E6C3A90AB4EBDD3D89ADA8F456E13101; JSESSIONID=aaaQzB35YLRMlcVpFAMHx`,
'Connection' : `keep-alive`,
'Referer' : `https://m.cloud.189.cn/zhuanti/2016/sign/index.jsp?albumBackupOpened=1`,
'Accept' : `*/*`,
'Host' : `m.cloud.189.cn`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Ecloud/8.9.3 iOS/14.4.1 clientId/EB3738E1-9B51-4B19-8D26-5FBCC3883846 clientModel/iPhone proVersion/1.0.5`,
'Accept-Language' : `zh-cn`,
'X-Requested-With' : `XMLHttpRequest`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
