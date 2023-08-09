import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { itemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';


const routes: Routes = [
  {  
    path:'',
    component: itemsComponent

},
{  
  path:'add',
  component: AdditemComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
