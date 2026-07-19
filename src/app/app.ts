// Import Component decorator
import { Component } from '@angular/core';

// Import CommonModule for *ngIf and *ngFor
import { CommonModule } from '@angular/common';

// Import FormsModule for [(ngModel)]
import { FormsModule } from '@angular/forms';

// Component Decorator
@Component({

  // Component selector
  selector: 'app-root',

  // Import required modules
  imports: [CommonModule, FormsModule],

  // Connect HTML file
  templateUrl: './app.html',

  // Connect CSS file
  styleUrl: './app.css'

})

// Main Component
export class App {

  // Application Title
  title = "Coffee Shop Menu";

  // Stores search text
  searchCoffee = "";

  // Coffee List
  coffees = [

    // Coffee 1
    {
      name: "Cappuccino",
      price: 150,
      status: "Bestseller"
    },

    // Coffee 2
    {
      name: "Latte",
      price: 170,
      status: "Available"
    },

    // Coffee 3
    {
      name: "Mocha",
      price: 180,
      status: "Hot Selling"
    },

    // Coffee 4
    {
      name: "Espresso",
      price: 140,
      status: "Available"
    },

    // Coffee 5
    {
      name: "Americano",
      price: 160,
      status: "Available"
    },

    // Coffee 6
    {
      name: "Cold Coffee",
      price: 190,
      status: "Hot Selling"
    },

    // Coffee 7
    {
      name: "Caramel Latte",
      price: 210,
      status: "Bestseller"
    },

    // Coffee 8
    {
      name: "Vanilla Latte",
      price: 200,
      status: "Available"
    },

    // Coffee 9
    {
      name: "Hazelnut Coffee",
      price: 220,
      status: "Hot Selling"
    },

    // Coffee 10
    {
      name: "Irish Coffee",
      price: 230,
      status: "Bestseller"
    }

  ];
// Filter coffees based on search

get filteredCoffees(){

  return this.coffees.filter(coffee =>

    coffee.name.toLowerCase().includes(this.searchCoffee.toLowerCase())

  );

}

// Check whether any coffee is found

get coffeeFound(){

  return this.filteredCoffees.length > 0 || this.searchCoffee=="";

}
  // Function called when Order Now button is clicked
  orderCoffee(coffeeName: string) {

    // Display selected coffee
    alert("☕ You ordered " + coffeeName);

  }

}