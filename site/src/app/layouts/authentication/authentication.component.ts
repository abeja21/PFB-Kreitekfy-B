import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/User.model';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  user: User[] = []
  

  constructor(private userService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    this.getUsers()
  }

  async getUsers(){
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.user = data
      },
      error: (err) => {console.log(err);}
    })
    
  }

  authenticationUser(admin: boolean, name: string){

      if(admin){
        this.router.navigate(["admin"])
      }else{
        this.router.navigate(["player/", name])
        localStorage.setItem('user', name)
      }
      
    }
  }
