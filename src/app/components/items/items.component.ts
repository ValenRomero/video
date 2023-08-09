import { Component, OnInit } from '@angular/core';
import { item} from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class itemsComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  items : item[] = []; 
  total:number = 0;

  Constructor(private_itemService: ItemService) {}

  ngOninit(): void {
   
    //this.items=[];
    this.items= this['itemService'].getItems()
    this.getTotal();''
  }
  deleteItem(item:item){
    this.items = this.items.filter(x => x.id != item,id);
    this.getTotal();
  }

  toggleItem(item:item){
    this.getTotal();

  }

  getTotal(){
    this.total = this.items
                 .filter(x => !x.completed);
                 .Map(x => x.quantity * x.price)
                 .reduce((acc: item, item: any) => acc +=item, 0);
  }
}
