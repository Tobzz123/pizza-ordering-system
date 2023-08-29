import { Component } from '@angular/core';


@Component({
  selector: 'app-pizza-sizes',
  template: `<table class = "pizzasection">
  <tr>
      <th rowspan="2">Toppings</th>
      <th colspan="4">Pizza Size</th>
  </tr>
  <tr id="sizes">
      <td>Small($5)</td>
      <td>Medium($7)</td>
      <td>Large($8)</td>
      <td>Extra Large($9)</td>
  </tr>
  <tr>
      <td colspan="5">Veg Toppings</td>
  </tr>

  <ng-container *ngFor="let veg of vegtoppings; let rowIndex = index">
    <tr *ngIf="veg.isClickable" id="{{ veg.id }}" >
      <th>{{ veg.name }} ({{'$' + veg.price }})</th>
      <td *ngFor="let cell of veg.cells; let colIndex = index" 
          (click)="vegCellClicked(rowIndex, colIndex)" > 
          <div class="center-content">
          <i class="fas fa-check" [ngClass]="{'green-check': veg.clicked[colIndex]}" *ngIf="veg.clicked[colIndex]"></i>
          </div>
      </td>      
    </tr>
  </ng-container>

  <tr id="NonVeg">
      <td colspan="5">Non Veg Toppings</td>
  </tr>

  <ng-container *ngFor="let nonveg of nonvegtoppings; let rowIndex = index">
    <tr *ngIf="nonveg.isClickable" id="{{ nonveg.id }}">
      <th>{{ nonveg.name }} ({{ '$' + nonveg.price }})</th>   
      <td *ngFor="let cell of nonveg.cells; let colIndex = index" 
          (click)="nonVegCellClicked(rowIndex, colIndex)" > 
          <div class="center-content">
          <i class="fas fa-check" [ngClass]="{'green-check': nonveg.clicked[colIndex]}" *ngIf="nonveg.clicked[colIndex]"></i> 
          </div>
      </td>  
    </tr>
  </ng-container>

  <tr>
      <td id="total" colspan="5">Total</td>
  </tr>
  <tr>
      <td>Offer</td>
      <td id="smalloffer"></td>
      <td id="mediumoffer"></td>
      <td id="largeoffer"></td>
      <td id="extralargeoffer"></td>
  </tr>
  <tr id="Total">
      <td></td>
      <td id="smalltotal"> <div class="center-content">{{'$' + smallprice}}</div></td>
      <td id="mediumtotal"><div class="center-content">{{'$' + mediumprice}}</div></td>
      <td id="largetotal"><div class="center-content">{{'$' + largeprice}}</div></td>
      <td id="extralargetotal"><div class="center-content">{{'$' + xlprice}}</div></td>
  </tr>

</table>
`,
  styleUrls: ['./pizza-sizes.component.css']
})
export class PizzaSizesComponent {
  smallprice = 5; 
  mediumprice = 7; 
  largeprice = 8; 
  xlprice = 9;
  vegtoppings = [
    { id: 'Tomatoes', name: 'Tomatoes', price: '1.00', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] },
    { id: 'Onions', name: 'Onions', price: '0.50', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] },
    { id: 'Bell', name: 'Bell pepper', price: '1.00', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] },
    { id: 'Mushrooms', name: 'Mushrooms', price: '1.20', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] },
    { id: 'Pineapple', name: 'Pineapple', price: '0.75', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] }, 
  ];

  nonvegtoppings = [
    { id: 'Sausage', name: 'Sausage', price: '1.00', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] },
    { id: 'Pepperoni', name: 'Pepperoni', price: '2.00', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] },
    { id: 'Barbecue', name: 'Barbecue chicken', price: '3.00', isClickable: true, cells: ['Small', 'Medium', 'Large', 'XLarge'], clicked: [false, false, false, false] }, 
  ];
  
  pizzaSizes = ["Small", "Medium", "Large", "Extra Large"];
    vegCellClicked(rowIndex: number, colIndex: number) {
      // Perform calculations or actions based on the clicked cell
      const clickedCellValue = this.vegtoppings[rowIndex].name;
      console.log(`Clicked cell value: ${clickedCellValue}`);
      console.log(rowIndex);
      console.log(this.smallprice);
      
      this.vegtoppings[rowIndex].clicked[colIndex] = true;
      if (this.vegtoppings[rowIndex].cells[colIndex] == "Small"){
        this.smallprice += parseFloat(this.vegtoppings[rowIndex].price)
        console.log(`Clicked cell price: ${this.smallprice}`);
      }
      else if (this.vegtoppings[rowIndex].cells[colIndex] == "Medium"){
        this.mediumprice += parseFloat(this.vegtoppings[rowIndex].price)
        console.log(`Clicked cell price: ${this.mediumprice}`);
      }
      else if (this.vegtoppings[rowIndex].cells[colIndex] == "Large"){
        this.largeprice += parseFloat(this.vegtoppings[rowIndex].price)
        console.log(`Clicked cell price: ${this.largeprice}`);
      }
      else if (this.vegtoppings[rowIndex].cells[colIndex] == "Extra Large"){
        this.xlprice += parseFloat(this.vegtoppings[rowIndex].price)
        console.log(`Clicked cell price: ${this.xlprice}`);
      }
    }
      


nonVegCellClicked(rowIndex: number, colIndex:number) {
  // Perform calculations or actions based on the clicked cell
  const clickedCellValue = this.nonvegtoppings[rowIndex].name;
  console.log(`Clicked cell value: ${clickedCellValue}`);
  this.nonvegtoppings[rowIndex].clicked[colIndex] = true;
  if (this.nonvegtoppings[rowIndex].cells[colIndex] == "Small"){
    this.smallprice += parseFloat(this.nonvegtoppings[rowIndex].price)
    console.log(`Clicked cell price: ${this.smallprice}`);
  }
  else if (this.nonvegtoppings[rowIndex].cells[colIndex] == "Medium"){
    this.mediumprice += parseFloat(this.nonvegtoppings[rowIndex].price)
    console.log(`Clicked cell price: ${this.mediumprice}`);
  }
  else if (this.nonvegtoppings[rowIndex].cells[colIndex] == "Large"){
    this.largeprice += parseFloat(this.nonvegtoppings[rowIndex].price)
    console.log(`Clicked cell price: ${this.largeprice}`);
  }
  else if (this.nonvegtoppings[rowIndex].cells[colIndex] == "Extra Large"){
    this.xlprice += parseFloat(this.nonvegtoppings[rowIndex].price)
    console.log(`Clicked cell price: ${this.xlprice}`);
  }
  // You can implement your calculations here
}
}
