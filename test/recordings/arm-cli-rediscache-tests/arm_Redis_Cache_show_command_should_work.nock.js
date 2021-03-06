// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '04db7ed3-6ed9-4861-8b22-7c0c0c98490b',
    name: 'AAPT Cache10',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestCacheRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache6715?api-version=2015-03-01')
  .reply(200, "{\"id\":\"/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache6715\",\"location\":\"West US\",\"name\":\"xplatTestCache6715\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache6715.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '534',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7703a9ec-4fa3-4a22-89b1-e4f06041fca6',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'bf1e06f8-86b3-484d-80bd-cc81ccb1ae7d',
  'x-ms-routing-request-id': 'WESTUS:20150825T010734Z:bf1e06f8-86b3-484d-80bd-cc81ccb1ae7d',
  date: 'Tue, 25 Aug 2015 01:07:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache6715?api-version=2015-03-01')
  .reply(200, "{\"id\":\"/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache6715\",\"location\":\"West US\",\"name\":\"xplatTestCache6715\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache6715.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '534',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7703a9ec-4fa3-4a22-89b1-e4f06041fca6',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'bf1e06f8-86b3-484d-80bd-cc81ccb1ae7d',
  'x-ms-routing-request-id': 'WESTUS:20150825T010734Z:bf1e06f8-86b3-484d-80bd-cc81ccb1ae7d',
  date: 'Tue, 25 Aug 2015 01:07:33 GMT',
  connection: 'close' });
 return result; }]];