import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
  itemService: any;
  router: any;
onSubmit() {
throw new Error('Method not implemented.');
}
  id:number=0;
  tittle:string='';
  price:number=0;
  quantity:number=0;

  constructor (private_itemService : ItemService, private_router:Router){}

  ngOnInit(): void {
    
  }

  OnSubmit(){
    const items = new item();
    item.id = this.id; 
    item.tittle = this.tittle;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false

    this.itemService.additem(item);
    this.router.navigate(['/']);
  }
}

