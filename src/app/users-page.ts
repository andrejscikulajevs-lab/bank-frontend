import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from './api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-page.html'
})
export class UsersPage implements OnInit {

  users: any[] = [];

  constructor(
    private router: Router,
    private api: Api, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {    
    this.api.getUsers().subscribe(data => {
        this.users = data as any[];
        this.cdr.detectChanges();
    });
  }

  selectUser(user: any) {
    this.router.navigate(['/user', user.id, 'accounts']);
  }

}