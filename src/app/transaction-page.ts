import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Api } from './api';

@Component({
  selector: 'transaction-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-page.html'
})
export class TransactionPage implements OnInit {

  transaction: any;
  transactionId: number = 0;

  private baseUrl = 'http://localhost:8080';

  constructor( 
    private route: ActivatedRoute,
    private api: Api, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionId = id;
    this.loadTransaction();
  }
  
  loadTransaction() {
    this.api.getTransaction(this.transactionId).subscribe(data => {
      this.transaction = data;
        this.cdr.detectChanges();
    })
  }
  download(){
    window.print();
  }
}