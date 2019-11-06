import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MenutwoComponent } from "./menutwo.component";

const routes: Routes = [
  { path: '', component: MenutwoComponent },
];

@NgModule({
  declarations: [MenutwoComponent],
  exports: [MenutwoComponent],
  imports: [[RouterModule.forChild(routes)]],
  providers: []
})
export class MenuTwoModule {}
