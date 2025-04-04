param location string = resourceGroup().location

resource blobStorage 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  name: 'sitasound'
  location: 'westeurope'
  tags: {}
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: true
    allowSharedKeyAccess: true
    networkAcls: {
      bypass: 'AzureServices'
      virtualNetworkRules: []
      ipRules: []
      defaultAction: 'Allow'
    }
    supportsHttpsTrafficOnly: true
    encryption: {
      services: {
        file: {
          keyType: 'Account'
          enabled: true
        }
        blob: {
          keyType: 'Account'
          enabled: true
        }
      }
      keySource: 'Microsoft.Storage'
    }
    accessTier: 'Hot'
  }
}

resource cdn 'Microsoft.Cdn/profiles@2023-05-01' = {
  name: 'sitasound'
  location: location
  tags: {}
  sku: {
    name: 'Standard_Microsoft'
  }
  properties: {}
}

@description('Generated from /subscriptions/4b89f88e-13f2-4990-bf5f-3ab2e4d5301f/resourceGroups/sitasound/providers/Microsoft.Cdn/profiles/sitasound/endpoints/sitasound')
resource endpoint 'Microsoft.Cdn/profiles/endpoints@2023-05-01' = {
  parent: cdn
  name: 'sitasound'
  location: location
  tags: {}
  properties: {
    originHostHeader: 'sitasound.z6.web.core.windows.net'
    contentTypesToCompress: [
      'text/plain'
      'text/html'
      'text/css'
      'text/javascript'
      'application/x-javascript'
      'application/javascript'
      'application/json'
      'application/xml'
    ]
    isCompressionEnabled: false
    isHttpAllowed: false
    isHttpsAllowed: true
    queryStringCachingBehavior: 'IgnoreQueryString'
    origins: [
      {
        name: 'sitasound-azurewebsites-net'
        properties: {
          hostName: 'sitasound.z6.web.core.windows.net'
          enabled: true
        }
      }
    ]
    deliveryPolicy: {
      description: 'Delivery policy with rule set'
      rules: [
        {
          name: 'HttpsRedirect'
          order: 1
          actions: [
            {
              name: 'UrlRedirect'
              parameters: {
                redirectType: 'PermanentRedirect'
                typeName: 'DeliveryRuleUrlRedirectActionParameters'
                destinationProtocol: 'Https'
              }
            }
          ]
          conditions: [
            {
              name: 'RequestScheme'
              parameters: {
                operator: 'Equal'
                matchValues: [
                  'HTTP'
                ]
                negateCondition: false
                transforms: []
                typeName: 'DeliveryRuleRequestSchemeConditionParameters'
              }
            }
          ]
        }
      ]
    }
    originGroups: []
    geoFilters: []
    urlSigningKeys: []
  }
}

// CDN Custom Domain Resource
resource cdnCustomDomain 'Microsoft.Cdn/profiles/endpoints/customDomains@2023-05-01' = {
  name: 'sitasound'
  parent: endpoint
  properties: {
    hostName: 'www.sitasound.com'
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'sitasound'
  location: 'westeurope'
  tags: {
    'hidden-link:/subscriptions/4b89f88e-13f2-4990-bf5f-3ab2e4d5301f/resourceGroups/sitasound/providers/Microsoft.Web/sites/sitasound': 'Resource'
  }
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Request_Source: 'IbizaWebAppExtensionCreate'
    RetentionInDays: 90
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}
