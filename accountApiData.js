import { LightningElement, wire } from 'lwc';
import fetchData from '@salesforce/apex/ApiCallout.fetchdata';

export default class accountApiData extends LightningElement {
    aFacts;
    error;
    isDataVisible = false;
    apiUrl = ''; 

    @wire(fetchData, { apiEndpoint: '$apiUrl' })
    wiredApiData({ error, data }) {
        if (data) {
            this.aFacts = JSON.parse(data);
            this.error = undefined;
        } else if (error) {
            this.aFacts = undefined;
            this.error = error.body.message;
        }
    }

    showData() {
        this.isDataVisible = true;
    }

    hideData() {
        this.isDataVisible = false;
    }

    handleApiUrlChange(event) {
        this.apiUrl = event.target.value;
    }
}
