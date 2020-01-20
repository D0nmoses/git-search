import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../services/github-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  constructor(private githubService:GithubService) { 
    
  }

  @Input() user:User = new User('','','');

  ngOnInit() {
  }

}
