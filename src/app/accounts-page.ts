import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Api } from './api';

@Component({
  selector: 'accounts-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts-page.html'
})
export class AccountsPage implements OnInit {

  accounts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: Api, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {    

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getAccounts(id).subscribe(data => {
        this.accounts = data as any[];
        this.cdr.detectChanges();
    });
  }

  selectAccount(acc: any) {
    this.router.navigate(['/account', acc.id]);
  }

}