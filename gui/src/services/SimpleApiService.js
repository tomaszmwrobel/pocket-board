import {ConfigurationProvider} from "../configuration/ConfigurationProvider";

export class SimpleApiService {

    constructor() {
        this.config = new ConfigurationProvider()
    }

    getResponseFromApi() {
        return fetch(this.config.getApiUrl() + "/hello")
            .then(res => res.text())
    }
}