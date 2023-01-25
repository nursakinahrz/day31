import { Component } from '@angular/core';
// import this 
import { Employee } from '../models/employee';

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
// ShowSomeData: any;
myName: string = "CoWorks";


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

      GetMoreEmployee() : void {
        this.Employee = [
          {
            Name: 'Barney',
            Age: '18',
            Gender: 'M'
          },{
            Name: 'Z',
            Age: '22',
            Gender: 'F'
          },{
            Name: 'Sherlock',
            Age: '25',
            Gender: 'M'
          },

          {
            Name: 'Ah Kaw',
            Age: '15',
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

      CheckAge (Age: number) {
        let val = Age < 18 ? 'Under 18': 'Above 18';

        switch(val) {

          case 'Under 18':
            return 'red';
          case 'Above 18':
            return 'green';
        }

        return 'black';

      }

      TrackByEmployeeName(index: number, employee:any) : string {
        return employee.Name;

      }

      ShowSomeData () {

      }

  // list of objects
   Employee: any[] = [];

   constructor() {

    this.Employee = [
      {
        Name: 'Ah Kaw',
        Age: '15',
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

   
    GetCSS (isEven: any) {
      if (isEven) {
        return "color1";
      } else {
        return "color2";
      }

      }

    
    }
 
    

  
