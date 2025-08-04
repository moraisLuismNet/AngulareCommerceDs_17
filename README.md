## AngulareCommerceDs_17
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

**AngulareCommerceDs_17** is an e-commerce application developed with Angular. Its main purpose is to allow users to browse and purchase albums from different musical groups and genres, as well as manage their orders and shopping carts. The application has two main areas of functionality: one for general users and one for administrators. For general users (Registration and Login, Product Navigation, Shopping Cart, and Order Management). For administrators (Genre Management, Group Management, Album Management, User Management, Order Management (Admin), and Cart Management (Admin). This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

![AngulareCommderceDs](img/UML.png)

AngulareCommerceDs_17/  
├───app/  
│   ├───ecommerce/  
│   │   ├───admin-orders/  
│   │   │   ├───admin-orders.component.css  
│   │   │   ├───admin-orders.component.html  
│   │   │   └───admin-orders.component.ts  
│   │   ├───cart-details/  
│   │   │   ├───cart-details.component.css  
│   │   │   ├───cart-details.component.html  
│   │   │   └───cart-details.component.ts  
│   │   ├───carts/  
│   │   │   ├───carts.component.css  
│   │   │   ├───carts.component.html  
│   │   │   └───carts.component.ts  
│   │   ├───genres/  
│   │   │   ├───genres.component.html  
│   │   │   └───genres.component.ts  
│   │   ├───groups/  
│   │   │   ├───groups.component.html  
│   │   │   └───groups.component.ts  
│   │   ├───listgroups/  
│   │   │   ├───listgroups.component.html  
│   │   │   └───listgroups.component.ts  
│   │   ├───listrecords/  
│   │   │   ├───listrecords.component.html  
│   │   │   └───listrecords.component.ts  
│   │   ├───orders/  
│   │   │   ├───orders.component.html  
│   │   │   └───orders.component.ts  
│   │   ├───records/  
│   │   │   ├───records.component.html  
│   │   │   └───records.component.ts  
│   │   ├───services/  
│   │   │   ├───cart.service.ts  
│   │   │   ├───cart-detail.service.ts  
│   │   │   ├───genres.service.ts  
│   │   │   ├───groups.service.ts  
│   │   │   ├───order.service.ts  
│   │   │   ├───records.service.ts  
│   │   │   ├───stock.service.ts  
│   │   │   └───users.service.ts  
│   │   ├───users/  
│   │   │   ├───users.component.html  
│   │   │   └───users.component.ts  
│   │   ├───ecommerce.component.html  
│   │   ├───ecommerce.component.ts  
│   │   ├───ecommerce.interface.ts  
│   │   └───ecommerce-routing.module.ts  
│   ├───guards/  
│   │   └───auth-guard.service.ts  
│   ├───interfaces/  
│   │   ├───login.interface.ts  
│   │   └───register.interface.ts  
│   ├───services/  
│   │   ├───app.service.ts  
│   │   └───user.service.ts  
│   ├───shared/  
│   │   ├───login/  
│   │   │   ├───login.component.css  
│   │   │   ├───login.component.html  
│   │   │   └───login.component.ts  
│   │   ├───navbar/  
│   │   │   ├───navbar.component.html  
│   │   │   └───navbar.component.ts  
│   │   ├───register/  
│   │   │   ├───register.component.css  
│   │   │   ├───register.component.html  
│   │   │   └───register.component.ts  
│   ├───app.component.html  
│   ├───app.component.ts  
│   ├───app.module.ts  
│   └───app-routing.module.ts  
├───environments/  
│   ├───environment.development.ts  
│   └───environment.ts  
├───angular.json  
└───package.json  

![AngulareCommderceDs](img/1.png)
![AngulareCommderceDs](img/2.png)
![AngulareCommderceDs](img/3.png)
![AngulareCommderceDs](img/4.png)
![AngulareCommderceDs](img/5.png)
![AngulareCommderceDs](img/6.png)
![AngulareCommderceDs](img/7.png)
![AngulareCommderceDs](img/8.png)
![AngulareCommderceDs](img/9.png)
![AngulareCommderceDs](img/10.png)
![AngulareCommderceDs](img/11.png)
![AngulareCommderceDs](img/12.png)
![AngulareCommderceDs](img/13.png)
![AngulareCommderceDs](img/14.png)

## environment

```javascript
export const environment = {
  urlAPI: 'https://localhost:7190/api/',
};

```

[DeepWiki moraisLuismNet/AngulareCommerceDs_17](https://deepwiki.com/moraisLuismNet/AngulareCommerceDs_17)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

