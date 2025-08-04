import { inject, NgModule } from '@angular/core';
import { Routes, RouterModule, Router, provideRouter } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';

// Import standalone components
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { ListrecordsComponent } from './ecommerce/listrecords/listrecords.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { CartDetailsComponent } from './ecommerce/cart-details/cart-details.component';
import { CartsComponent } from './ecommerce/carts/carts.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { RecordsComponent } from './ecommerce/records/records.component';
import { GenresComponent } from './ecommerce/genres/genres.component';
import { GroupsComponent } from './ecommerce/groups/groups.component';
import { ListgroupsComponent } from './ecommerce/listgroups/listgroups.component';
import { AdminOrdersComponent } from './ecommerce/admin-orders/admin-orders.component';
import { UsersComponent } from './ecommerce/users/users.component';

const canActivate = () => {
  const guard = inject(AuthGuard);
  if (!guard.isLoggedIn()) {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
  return true;
};

export const appRoutes: Routes = [
  // Public routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listrecords/:idGroup', component: ListrecordsComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  
  // Ecommerce routes
  {
    path: '',
    component: EcommerceComponent,
    children: [
      { path: '', redirectTo: 'listgroups', pathMatch: 'full' },
      { path: 'records', component: RecordsComponent },
      { path: 'genres', component: GenresComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'listgroups', component: ListgroupsComponent },
      { path: 'listrecords', redirectTo: 'listgroups', pathMatch: 'full' },
      { path: 'listrecords/:idGroup', component: ListrecordsComponent },
      { path: 'admin-orders', component: AdminOrdersComponent, canActivate: [canActivate] },
      { path: 'users', component: UsersComponent, canActivate: [canActivate] },
    ]
  },

  // Protected routes
  {
    path: '',
    canActivate: [canActivate],
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'carts', component: CartsComponent },
    ],
  },
  
  // Redirect all other routes to home
  { path: '**', redirectTo: '' },
];

// This module is kept for backward compatibility but is not strictly needed with standalone components
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
