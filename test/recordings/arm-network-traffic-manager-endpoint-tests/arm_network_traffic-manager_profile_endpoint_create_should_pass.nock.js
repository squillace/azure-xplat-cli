// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '26b099e7-6916-41e9-b37d-76cec6af8d8c',
  'x-ms-correlation-request-id': '26b099e7-6916-41e9-b37d-76cec6af8d8c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125505Z:26b099e7-6916-41e9-b37d-76cec6af8d8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:04 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '26b099e7-6916-41e9-b37d-76cec6af8d8c',
  'x-ms-correlation-request-id': '26b099e7-6916-41e9-b37d-76cec6af8d8c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125505Z:26b099e7-6916-41e9-b37d-76cec6af8d8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:04 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '4135055c-70c2-4070-bd28-bc748008220a',
  'x-ms-correlation-request-id': '4135055c-70c2-4070-bd28-bc748008220a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125508Z:4135055c-70c2-4070-bd28-bc748008220a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '4135055c-70c2-4070-bd28-bc748008220a',
  'x-ms-correlation-request-id': '4135055c-70c2-4070-bd28-bc748008220a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125508Z:4135055c-70c2-4070-bd28-bc748008220a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c840219c-5ab6-44c8-8a53-e4be80d8dcf6',
  'x-ms-correlation-request-id': 'c840219c-5ab6-44c8-8a53-e4be80d8dcf6',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125509Z:c840219c-5ab6-44c8-8a53-e4be80d8dcf6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:09 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c840219c-5ab6-44c8-8a53-e4be80d8dcf6',
  'x-ms-correlation-request-id': 'c840219c-5ab6-44c8-8a53-e4be80d8dcf6',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125509Z:c840219c-5ab6-44c8-8a53-e4be80d8dcf6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:09 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"http\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c58f4c5c-f9d1-46ee-ab73-897d23eb553a',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '743b5233-2f3a-41ce-bc4d-6fe1b46d4af4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125519Z:743b5233-2f3a-41ce-bc4d-6fe1b46d4af4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"http\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c58f4c5c-f9d1-46ee-ab73-897d23eb553a',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '743b5233-2f3a-41ce-bc4d-6fe1b46d4af4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125519Z:743b5233-2f3a-41ce-bc4d-6fe1b46d4af4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '18d939ca-e010-425c-989c-f35458a3baa6',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '45002539-423f-4f8d-b92f-7a25f7d81d65',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125521Z:45002539-423f-4f8d-b92f-7a25f7d81d65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '18d939ca-e010-425c-989c-f35458a3baa6',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '45002539-423f-4f8d-b92f-7a25f7d81d65',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125521Z:45002539-423f-4f8d-b92f-7a25f7d81d65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'e65c84da-4fba-4ebe-81ef-f5d9ef47e00f',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'b26c4096-4e47-40f3-98f9-c9d7b0ff773b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125523Z:b26c4096-4e47-40f3-98f9-c9d7b0ff773b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'e65c84da-4fba-4ebe-81ef-f5d9ef47e00f',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'b26c4096-4e47-40f3-98f9-c9d7b0ff773b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125523Z:b26c4096-4e47-40f3-98f9-c9d7b0ff773b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1029',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'daada3fe-4093-4bbc-9a71-eedf72e2e1ef',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'b9d18f1d-7fe9-468c-b016-47f56032c567',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125526Z:b9d18f1d-7fe9-468c-b016-47f56032c567',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1029',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'daada3fe-4093-4bbc-9a71-eedf72e2e1ef',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'b9d18f1d-7fe9-468c-b016-47f56032c567',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125526Z:b9d18f1d-7fe9-468c-b016-47f56032c567',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1029',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '59adfbe9-42ca-4111-986c-1a4e48e5b216',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '3407fc3c-579d-496f-b2e3-9b764bd96d97',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125529Z:3407fc3c-579d-496f-b2e3-9b764bd96d97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1029',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '59adfbe9-42ca-4111-986c-1a4e48e5b216',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '3407fc3c-579d-496f-b2e3-9b764bd96d97',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150526T125529Z:3407fc3c-579d-496f-b2e3-9b764bd96d97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 May 2015 12:55:28 GMT',
  connection: 'close' });
 return result; }]];