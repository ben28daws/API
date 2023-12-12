public class ApiCallout {

    @AuraEnabled(cacheable=true)
    public static String fetchdata(String apiEndpoint) {
        if (String.isNotBlank(apiEndpoint)) {
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setEndpoint(apiEndpoint);
            req.setMethod('GET');
            HttpResponse resp = http.send(req);
            System.debug(resp.getBody());
            return resp.getBody();
        } else {
            throw new IllegalArgumentException('API endpoint cannot be blank.');
        }
    }
}
