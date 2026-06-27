import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';



import { Api } from './api';

@Component({
  selector: 'account-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-page.html'
})
export class AccountPage implements OnInit {
  
  account: any;
  transactions: any[] = [];
  page: number = 0;
  accountId: number = 0;
  chart: any;
  balance: number = 0;

  private baseUrl = 'http://localhost:8080';

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private api: Api, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountId = id;
    this.loadAccount();
    this.loadTransactions();
  }
  
  loadAccount() {
    this.api.getAccount(this.accountId).subscribe(data => {
      this.account = data;
      console.log(this.account);
        this.cdr.detectChanges();
    })
  }

  loadTransactions() {
    this.api.getTransactions(this.accountId, this.page).subscribe(data => {
      this.transactions = [
        ...this.transactions,
        ...(data as any[])
      ];
        this.cdr.detectChanges();
        this.getChart();    
    });
  }

  getChart() {
    if (this.chart) {
        console.log('destory chart');
        this.chart.destroy();
    }    
    const labels = this.transactions.map(t =>
      new Date(t.createdAt).toLocaleString() 
    );

    const balanceData = this.calculateBalanceSeries();

    this.chart = new Chart('chart', {
      type: 'line',
      options: {
        responsive: false,
        maintainAspectRatio: false
      },
      data: {
        labels: labels,
        datasets: [{
          label: 'Balance',
          data: balanceData,
          segment: {
            borderColor: ctx => {
              const i0 = ctx.p0DataIndex;
              const i1 = ctx.p1DataIndex;

              const prev = balanceData[i0];
              const curr = balanceData[i1];

              return curr >= prev ? 'green' : 'red';

            }
          }
        }]
      }
    });
  }


  loadMore() {
    this.page++;
    this.loadTransactions();
  }
    
  calculateBalanceSeries() {
    let balance = 0;

    return this.transactions.map(t => {
      if (t.type === 'DEPOSIT') {
        balance += t.amount;
      } else if (t.type === 'DEBIT') {
        balance -= t.amount;
      }

      return balance;
    });
  }

  openTransaction(t: any) {
    this.router.navigate(['/transaction', t.id]);
  }


}