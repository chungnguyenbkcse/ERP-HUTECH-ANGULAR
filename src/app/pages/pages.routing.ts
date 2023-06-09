import { Routes, RouterModule } from '@angular/router'
// import { Pages } from './pages.component'
import { ModuleWithProviders } from '@angular/core'

import { AuthGuard } from '../guards/auth.guard'
import { MainLayoutComponent } from 'app/shared/layout/app-layouts/main-layout.component'
import { AuthLayoutComponent } from 'app/shared/layout/app-layouts/auth-layout.component'
import { TodoListComponent } from '@components/todo/todo-list/todo-list.component'
import { CustomtodoComponent } from '@components/custom_todo/customtodo.component'
import { ChangeInfoUserComponent } from '@components/user/change-info/change-info-user.component'
import { ChangePasswordUserComponent } from '@components/user/change-password/change-password-user.component'
import { UsersComponent } from '@components/user/users.component'
import { ForgotComponent } from '@components/auth/forgot/forgot.component'



export const routes: Routes = [
  {
    path: 'admin/login',
    component: AuthLayoutComponent,
    loadChildren: 'app/pages/auth/login/login.module#LoginModule',
  },
  {
    path: 'admin',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: CustomtodoComponent,
      },
      {
        path: 'profile',
        component: UsersComponent,
      }
    ],
  },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
