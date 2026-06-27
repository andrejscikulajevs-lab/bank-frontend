
import { Routes } from '@angular/router';

import { AccountsPage } from './accounts-page';
import { AccountPage } from './account-page';
import { UsersPage } from './users-page';
import { TransactionPage } from './transaction-page';

export const routes: Routes = [
  { path: '', component: UsersPage },
  { path: 'user/:id/accounts', component: AccountsPage },
  { path: 'account/:id', component: AccountPage },
  { path: 'transaction/:id', component: TransactionPage },
];
