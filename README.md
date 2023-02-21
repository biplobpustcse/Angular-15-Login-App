# Angular-15

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

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

## Template Driven From with validation
```
<div class="container mt 5">
  <h1>Employee Info</h1>
  <div class="form-area">
    <form #f="ngForm" (ngSubmit)="addEmployee(f)">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control is-invalid" placeholder="Full Name" name="fullName" ngModel #fullName ='ngModel'
        [ngClass]="{'is-invalid': fullName.touched && fullName.invalid}"
        minlength="3"
        maxlength="10"
        required>
        <div class="alert alert-danger" *ngIf="fullName.touched && fullName.errors?.required">Full Name is required</div>
        <div class="alert alert-danger" *ngIf="fullName.touched && fullName.errors?.minlength">Full Name must be at least 3 charecter</div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" placeholder="email" name="email" ngModel #email="ngModel"
        [ngClass]="{'is-invalid': email.touched && email.invalid}"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required>
        <div class="alert alert-danger" *ngIf="email.touched && email.errors?.required">Email is required</div>
        <div class="alert alert-danger" *ngIf="email.touched && email.errors?.pattern">Invalid Email</div>
      </div>
      <div class="form-group">
        <label>Address</label>
        <textarea cols="30" rows="10" class="form-control" placeholder="Address" name="address" ngModel #address="ngModel"
        [ngClass]="{'is-invalid': address.touched && address.invalid}"
        required></textarea>
        <div class="alert alert-danger" *ngIf="address.touched && address.errors?.required">Address is required</div>
      </div>
      <div class="form-group" style="margin-top: 10px;">
        <button type="submit" class="btn btn-primary" [disabled]="f.invalid">Add</button>
      </div>
    </form>
  </div>
</div>
```

```
addEmployee = (formdata: NgForm) => {
    console.log(formdata.value);
  }
```
