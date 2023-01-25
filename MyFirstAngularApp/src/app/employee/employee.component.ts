import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  title = "Employee page";

  number1 = 12;
  number2 = 20; 

  visible = this.ShowContent(this.number1, this.number2);

  // visible = (this.number1 > this.number2) ? true: false;
  
color: any;
Name: any;
Age: any;
Gender: any;

  ShowContent(val1: number, val2: number) :boolean {
    if (val1 < val2) {
      return true;
    } else {

      return false;
    }
    }

    IsVisible = true;
    OnChange (arg: any) {
      this.IsVisible = arg;

    }

    SetColor(event: any) {
     this.color = event.target.value;
      }

  // list of objects
   Employee: any[] = [];

   constructor() {

    this.Employee = [
      {
        Name: 'Ah Kaw',
        Age: '21',
        Gender: 'M'
      },{
        Name: 'Ah Meow',
        Age: '22',
        Gender: 'F'
      },{
        Name: 'Fred',
        Age: '25',
        Gender: 'M'
      }
    ] 

   }

  }


