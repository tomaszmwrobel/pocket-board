import {config} from "./config";

export class ConfigurationProvider {

    constructor() {
        this.apiUrl = config.API_URL
    }

    getApiUrl() {
        return this.apiUrl
    }
}