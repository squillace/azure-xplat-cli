// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The specified profile name CliTesttmp does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '218',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '0cc31f4222a5b39b9cf2454018d29281',
  date: 'Wed, 08 Jul 2015 13:23:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The specified profile name CliTesttmp does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '218',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '0cc31f4222a5b39b9cf2454018d29281',
  date: 'Wed, 08 Jul 2015 13:23:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '56a25493baf1bbc1928ca4b81a4eaa02',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '56a25493baf1bbc1928ca4b81a4eaa02',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp')
  .reply(200, "<Profile xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DomainName>CliTestdom.trafficmanager.net</DomainName><Name>CliTesttmp</Name><Status>Disabled</Status><Definitions/></Profile>", { 'cache-control': 'no-cache',
  'content-length': '237',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f64a32921055baba9500f8847fdeefc4',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp')
  .reply(200, "<Profile xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DomainName>CliTestdom.trafficmanager.net</DomainName><Name>CliTesttmp</Name><Status>Disabled</Status><Definitions/></Profile>", { 'cache-control': 'no-cache',
  'content-length': '237',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f64a32921055baba9500f8847fdeefc4',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp/definitions', '*')
  .reply(200, "<Definition xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Version>1</Version></Definition>", { 'cache-control': 'no-cache',
  'content-length': '147',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0640f6337cddbeed9ae6f8f72c291b8b',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp/definitions', '*')
  .reply(200, "<Definition xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Version>1</Version></Definition>", { 'cache-control': 'no-cache',
  'content-length': '147',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0640f6337cddbeed9ae6f8f72c291b8b',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp/definitions/1')
  .reply(200, "<Definition xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DnsOptions><TimeToLiveInSeconds>200</TimeToLiveInSeconds></DnsOptions><Status>Enabled</Status><Version>1</Version><Monitors><Monitor><IntervalInSeconds>30</IntervalInSeconds><TimeoutInSeconds>10</TimeoutInSeconds><ToleratedNumberOfFailures>3</ToleratedNumberOfFailures><Protocol>HTTP</Protocol><Port>10</Port><HttpOptions><Verb>GET</Verb><RelativePath>/health.aspx</RelativePath><ExpectedStatusCode>200</ExpectedStatusCode></HttpOptions></Monitor></Monitors><Policy><LoadBalancingMethod>Failover</LoadBalancingMethod><Endpoints/><MonitorStatus>Inactive</MonitorStatus></Policy></Definition>", { 'cache-control': 'no-cache',
  'content-length': '705',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2c537bc967fabc91b2a667e99978acdb',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp/definitions/1')
  .reply(200, "<Definition xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DnsOptions><TimeToLiveInSeconds>200</TimeToLiveInSeconds></DnsOptions><Status>Enabled</Status><Version>1</Version><Monitors><Monitor><IntervalInSeconds>30</IntervalInSeconds><TimeoutInSeconds>10</TimeoutInSeconds><ToleratedNumberOfFailures>3</ToleratedNumberOfFailures><Protocol>HTTP</Protocol><Port>10</Port><HttpOptions><Verb>GET</Verb><RelativePath>/health.aspx</RelativePath><ExpectedStatusCode>200</ExpectedStatusCode></HttpOptions></Monitor></Monitors><Policy><LoadBalancingMethod>Failover</LoadBalancingMethod><Endpoints/><MonitorStatus>Inactive</MonitorStatus></Policy></Definition>", { 'cache-control': 'no-cache',
  'content-length': '705',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2c537bc967fabc91b2a667e99978acdb',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:23:48 GMT',
  connection: 'close' });
 return result; }]];