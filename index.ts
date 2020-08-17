// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let TaskName:String;
let TaskDate=String;
let TaskStatus=String;


let ToDo= 
[{TaskName:"Learn HTML",TaskDate:"25-Jul-2020",TaskStatus:"Done"},
{TaskName:"Learn CSS",TaskDate:"30-Jul-2020",TaskStatus:"Done"},
{TaskName:"Learn JAVASCRIPT",TaskDate:"25-Jul-2020",TaskStatus:"Done"},
{TaskName:"Learn TypeScript",TaskDate:"08-Aug-2020",TaskStatus:"Pending"},
{TaskName:"Learn UI Design",TaskDate:"08-Aug-2020",TaskStatus:"Pending"},
{TaskName:"Learn Angular Development",TaskDate:"08-SEPT-2020",TaskStatus:"Pending"},
{TaskName:"Learn C#",TaskDate:"28-OCT-2020",TaskStatus:"Pending"},
{TaskName:"Learn Angular Forms",TaskDate:"08-Nov-2020",TaskStatus:"Pending"},
{TaskName:"Learn Ionic Development",TaskDate:"18-Nov--2020",TaskStatus:"TODO"},
{TaskName:"Learn Firebase Integration",TaskDate:"28-Nov-2020",TaskStatus:"TODO"},
];
function update (arr_st:string){
  arr_st="Done";
  arr_st=this.TaskStatus[4]
} 

console.log(ToDo[4]);

