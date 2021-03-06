// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5893435f-6990-4bb3-bebb-b12f3535f990',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'EduardK - IaaS Tools',
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
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations/><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '1640',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c00694d4b6620531b952819e58f25fe6',
  date: 'Wed, 26 Aug 2015 10:21:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations/><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '1640',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c00694d4b6620531b952819e58f25fe6',
  date: 'Wed, 26 Aug 2015 10:21:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>53d46dc0-8151-42e3-9a34-f287c7c0013b</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f63190dbcbe90b11ae47f0da046b6fc0',
  date: 'Wed, 26 Aug 2015 10:21:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>53d46dc0-8151-42e3-9a34-f287c7c0013b</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f63190dbcbe90b11ae47f0da046b6fc0',
  date: 'Wed, 26 Aug 2015 10:21:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/operation/53d46dc0-8151-42e3-9a34-f287c7c0013b')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>53d46dc0-8151-42e3-9a34-f287c7c0013b</ID><OperationCompletedTime>2015-08-26T10:21:17.3876051</OperationCompletedTime><OperationStartedTime>2015-08-26T10:21:13.3787893</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4eb379181c5c0b7f861ad763f1008be4',
  date: 'Wed, 26 Aug 2015 10:21:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/operation/53d46dc0-8151-42e3-9a34-f287c7c0013b')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>53d46dc0-8151-42e3-9a34-f287c7c0013b</ID><OperationCompletedTime>2015-08-26T10:21:17.3876051</OperationCompletedTime><OperationStartedTime>2015-08-26T10:21:13.3787893</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4eb379181c5c0b7f861ad763f1008be4',
  date: 'Wed, 26 Aug 2015 10:21:43 GMT',
  connection: 'close' });
 return result; }]];