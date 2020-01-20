import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { GithubService } from 'src/app/services/github-service.service';
import 'rxjs/add/operator/map';
import { User } from 'src/app/user';

@Component({
    selector: 'search-form',
    templateUrl: 'search-form.component.html',
    styleUrls: ['./search-form.component.css']
})


export class SearchformComponent implements OnInit {
    @Input() user: User;
    @Output() userUpdated: EventEmitter<User> = new EventEmitter<User>();

    constructor(private _githubService: GithubService) {
       
    }

    ngOnInit() {

        if (this.user) {
            this.user.user = false;
            this.getUserInformation();
        }

    }

    searchUser() {
        if (this.user.userName && this.user.userName.length > 0) {
            this._githubService.updateUser(this.user.userName);
            this.getUserInformation();
        } else {
            this.user.user = false;
        }
    }

    getUserInformation() {
        if (this.user.userName && this.user.userName.length > 0) {

            this._githubService.getUser().subscribe(user => {
                this.user.user = user;
                this.userUpdated.emit(this.user);
            },
                (err) => {
                    console.log('err:' + err);
                    this.user.user = false;
                },
                () => console.log('Done')
            );



            this._githubService.getRepos().subscribe(repos => {
                // console.log(repos);
                this.user.repos = repos;
                this.userUpdated.emit(this.user);
            },
                (err) => {
                    console.log('err:' + err);
                    this.user.user = false;
                },
                () => console.log('Done')
            );

        }
    }
}