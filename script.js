import http from 'k6/http';
import { sleep } from 'k6';

// Setup Configurations
const BASE_URL = "";
const API_KEY = "";

// 
export const options = {
    vus: 10,
    duration: '30s',
};


export default function () {
    // Menyertakan header x-api-key dalam permintaan GET
    const headers = {
        "x-api-key": API_KEY,
    };

    // Lakukan permintaan GET dengan header
    const res = http.get(BASE_URL, { headers: headers });
    console.log(`Status: ${res.status}`);
    sleep(1);
}
