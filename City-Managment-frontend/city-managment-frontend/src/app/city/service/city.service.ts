import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cities} from "../model/cities";

@Injectable({
    providedIn: 'root'
})
export class CityService {

    /**
     * @param http HTTP client
     */
    constructor(private http: HttpClient) {

    }

    getCities(): Observable<Cities> {
        return this.http.get<Cities>('/cities');
    }

    deleteCity(uuid: string): Observable<any> {
        return this.http.delete('/cities/' + uuid);
    }
}
