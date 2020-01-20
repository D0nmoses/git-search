import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';

import { Observable } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
    providedIn: 'root'
})

export class GithubService {
    private userName: string;
    private clientId: string = '60b9f23dedffbdfc476c';
    private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
    public user:User;

    constructor(private httpClient: HttpClient) {   
        this.userName = '';
    }

    getUser() {
        if (this.userName) {
            return this.httpClient.get('http://api.github.com/users/' + this.userName
                + '?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(res => res)
                .catch(this.handleError);
        }
        
    }

    getRepos() {
        if (this.userName) {
            return this.httpClient.get('http://api.github.com/users/' + this.userName
                + '/repos?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(res => res)
                .catch(this.handleError);
        }

    }

    updateUser(userName: string) {
        this.userName = userName;
    }

    private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}