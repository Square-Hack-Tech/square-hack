# Facebook Ads API Integration Planning Document

## Context

Integrate the Facebook Ads API to retrieve data for analysis using proxy api.
proxyApiUrl: 'https://strategis.lincx.in/api/adnet-proxy'

## Approaches

1. **Utilize Adnet Analytics Platform**: Leverage existing infrastructure to receive Facebook ad stats.
    - Pros:
      1. Centralized data storage can simplify data management and analysis processes.
      2. No additional setup required, which saves time and effort.
      3. Integration with an existing platform may provide seamless data flow and compatibility.
    - Cons: 
      1. Dependency on existing platform for changes.
      2. Existing infrastructure may not be optimized for Facebook ad stats, potentially leading to inefficiencies or data processing issues.
      3. Compatibility issues with the existing platform could arise, requiring additional development or resources to resolve.

2. **In Approach 1, add a specific key to define the source of ads.**: Add specific key to define the source of ads in same table (strategisAds).
    - Pros:
      1. Clarity: Clearly identifies ad sources for better tracking.
      2. Analytics: Facilitates analysis and optimization of ad campaigns.
      3. Customization: Allows for tailored tracking based on specific needs.
    - Cons: 
      1. Complexity: Can increase system complexity if not implemented carefully.
      2. Data Integrity: May lead to inconsistencies in reporting if not standardized.
      3. Compatibility issues with the existing platform could arise, requiring additional development or resources to resolve.

3. **Build a Dedicated Module for Facebook Ads**: Develop a dedicated module specifically for handling Facebook Ads data.
    - Pros:
      1. Comprehensive Data: Retrieves detailed metrics such as campaign, ad, clicks, impressions, spend, etc.
      2. Custom Time Range: Allows specific date ranges for targeted analysis.
      3. Granular Insights: Provides data at the ad level for precise performance tracking.
    - Cons:
      1. Complex Data Management: Handling large datasets requires robust infrastructure.
      2. Rate Limits: Exceeding API rate limits can disrupt data retrieval.
      3. Time Range Dependency: Accuracy relies on correctly specified time ranges.

## Accepted Approach

Approach #3 is selected as the preferred option:
- Provides a tailored solution specifically for Facebook Ads data.
- Offers flexibility and optimization for handling Facebook Ads data.
- Can be maintained and updated independently.

### Acceptable Drawbacks

- Requires additional development time and resources.
- Needs to be integrated with existing systems and workflows.
- Requires ongoing maintenance and updates.

## Implementation Strategy

### Implementation Approach #2

#### **Facebook Ads API Cases**:
    - AD_ACCOUNT_ID = 'ad_account_id'
    ### facebook_ads_api : https://graph.facebook.com/v20.0

    Step: 1. Retrieve Campaigns:
        - Endpoint: `GET facebook_ads_api/act_{ad_account_id}/campaigns`
        - Purpose: Retrieve list of campaigns for specified ad account.
        - Get Details: "id" as "campaignID", "name" as "campaignName"
    
    Step: 2. Retrieve Ad Sets:
        - campaign_id = campaignID ( From Step 1 )
        - Endpoint: `GET facebook_ads_api/{campaign_id}/adsets`
        - Purpose: Retrieve list of ad sets for specified ad account.
        - Get Details: adGroupName("name" as "adsetsName"), adGroupId("id" as "adsetsId")
    
    Step: 3. Retrieve Ads:
        - adsets_id = adsetsId ( From Step 2 )
        - Endpoint: `GET facebook_ads_api/{adsets_id}/ads`
        - Purpose: Retrieve list of ads for specified ad account.
        - Get Details: "name" as "adName", "id" as "adId"
    
    Step: 4. Retrieve Insights:
        - ad_id = adId ( From Step 3 )
        - Endpoint: `GET facebook_ads_api/{ad_id}/insights`
        - Purpose: Retrieve performance insights for specified ad account.
        - Get Details: campaign_id, campaign_name, ad_id, ad_name, adset_id, adset_name, clicks, created_time,date_start,date_stop, impressions, spend, updated_time,conversions,product_id, publisher_platform, device_platform


### Implementation Approach #3

#### **Facebook Ads API Cases**:
    - AD_ACCOUNT_ID = 'ad_account_id'
    ### facebook_ads_api : https://graph.facebook.com/v20.0
    
    Step: 1. Retrieve Insights:
        - Endpoint: `GET facebook_ads_api/act_{ad_account_id}/insights`
        - Purpose: Retrieve performance insights for specified ad account.
        - Level: ad
        - Get Details: campaign_id, campaign_name, ad_id, ad_name, adset_id, adset_name, clicks, created_time,date_start,date_stop, impressions, spend, updated_time,conversions,product_id, publisher_platform, device_platform

### Data Schema

Define the data schema for storing Facebook ad stats:
- campaignID
- campaignName
- spent
- impressions
- clicks
- conversions
- date
- hour
- platform
- platformId
- adGroupName
- adGroupId
- adName
- adId
- state
- location
- estTimestamp
- pstTimestamp

## Facebook Ads API Endpoints and Data Mapping

### facebook_ads_api : https://graph.facebook.com/v20.0

#### Endpoint 1: facebook_ads_api/act_{ad_account_id}/campaigns
##### Request Data
- Fields: id, name
- time_range: `{"since":"${dateStart}","until":"${dateEnd}"}`
##### Response Data
```json
{
  "data": [
    {
      "id": "23842732787630311",
      "name": "Campaign A"
    },
    {
      "id": "23842732787630312",
      "name": "Campaign B"
    }
  ]
}
```

#### Endpoint 3: facebook_ads_api/{campaign_id}/adsets
##### Request Data
- Fields: id, name, campaign_id
##### Response Data
```json
{
  "data": [
    {
      "id": "23842732787630313",
      "name": "Ad Set A",
      "campaign_id": "23842732787630311"
    },
    {
      "id": "23842732787630314",
      "name": "Ad Set B",
      "campaign_id": "23842732787630311"
    }
  ]
}
```

#### Endpoint 4: facebook_ads_api/{adset_id}/ads
##### Request Data
- Fields: id, name, adset_id, campaign_id
##### Response Data
```json
{
  "data": [
    {
      "id": "23842732787630311",
      "name": "Ad A",
      "adset_id": "23842732787630314",
      "campaign_id": "23842732787630311"
    },
    {
      "id": "23842732787630312",
      "name": "Ad B",
      "adset_id": "23842732787630314",
      "campaign_id": "23842732787630311"
    }
  ]
}
```
#### Endpoint 5: facebook_ads_api/{ad_id}/insights
##### Request Data
- Fields: campaign_id, campaign_name, ad_id, ad_name, adset_id, adset_name, clicks, created_time,date_start,date_stop, impressions, spend, updated_time,conversions,product_id, publisher_platform, device_platform

#### Endpoint 6: facebook_ads_api/act_{ad_account_id}/insights
##### Request Data
- Fields: campaign_id, campaign_name, ad_id, ad_name, adset_id, adset_name, clicks, created_time,date_start,date_stop, impressions, spend, updated_time,conversions,product_id, publisher_platform, device_platform
- time_range: {"since":"${dateStart}","until":"${dateEnd}"}
- level: ad
- limit: 1000

##### Response Data
```json
{
  "data": {
      "campaign_id": "23842732787630311",
      "campaign_name": "Campaign A",
      "ad_id": "23842732787630311",
      "ad_name": "Ad A",
      "adset_id": "23842732787630314",
      "adset_name": "Ad Set B",
      "clicks": 1200,
      "created_time": "2024-04-19T08:00:00Z",
      "date_start": "2024-04-01",
      "date_stop": "2024-04-30",
      "impressions": 25000,
      "spend": 5000.00,
      "updated_time": "2024-04-19T12:00:00Z",
      "conversions": 50,
      "product_id": "ABC123",
      "publisher_platform": "Facebook",
      "device_platform": "Mobile"
    }
}
```

## Estimate
Research Hours : 11
Development Hours : 16
Total Hours : 27
RTD : 05-08-2024