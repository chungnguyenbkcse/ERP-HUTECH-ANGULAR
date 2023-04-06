import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Ng2Webstorage } from 'ngx-webstorage/dist/app'

import { routing } from './pages.routing'
// import { AppTranslationModule } from '../app.translation.module'

import { Pages } from './pages.component'
import { UtilsModule } from '@shared/utils/utils.module'
import { TodoModule } from '@components/todo/todo.module'
import { SharedModule } from '@shared/shared.module'
import { CustomtodoModule } from '@components/custom_todo/customtodo.module'
import { ForgotModule } from '@components/auth/forgot/forgot.module'

@NgModule({
  imports: [
    CommonModule,
    // AppTranslationModule,
    UtilsModule,
    Ng2Webstorage.forRoot(),
    routing,
    SharedModule,
    TodoModule,
    CustomtodoModule,
    ForgotModule,
  ],
  declarations: [Pages],
  providers: [

  ],
})
export class PagesModule { }
