import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }
  
  getAccounts(userId: number) {
    return this.http.get(`${this.baseUrl}/users/${userId}/accounts`);
  }

  getAccount(Id: number) {
    return this.http.get(`${this.baseUrl}/accounts/${Id}`);
  }

  getTransactions(accountId: number, page: number) {
    return this.http.get(`${this.baseUrl}/accounts/${accountId}/transactions?page=${page}&size=5`);
  }

  getTransaction(transactionId: number) {
    return this.http.get(`${this.baseUrl}/accounts/transactions/${transactionId}`);
  }
}