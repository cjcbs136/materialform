import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WithdrawalEditorComponent} from "./withdrawal-editor/withdrawal-editor.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  { path: '', redirectTo: '/withdrawal-editor', pathMatch: 'full' },
  { path: 'withdrawal-editor', component: WithdrawalEditorComponent },
  { path: 'message', component: MessagesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
