import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public userName:string='';
  public setUserName:any;
  public userData:any;
  public userRepos:any=[];
  pageSizeOptions:any = [10, 20, 50, 100];
  pageSize:number = 10;
  currentPage:number = 1;
  totalPages:number = 0;
  userNotFound:boolean=false;
  loader:boolean=false;
  constructor(
    private apiService: ApiService
  ) {}
 
  
 public getUsers(){
  // this.setUserName=userName;
  this.loader=true;
  this.apiService.getUser(this.userName).subscribe( (data) =>  {
              
    
    if (data !== null) {
      // Object is not null
      this.loader=false;
      this.userData=data;
      
  } else {
      // Object is null
      this.userNotFound=true;
  }
    
   
   
},
// (error)=>{
 
//   this.loader=false;
//   this.userNotFound=true;
// }
);
 
  this.userRepo();
 }
userRepo():void{
  this.loader=true;
  this.apiService.getRepos( this.userName).subscribe((repos)=>{
    this.userRepos=repos;
    this.loader=false;
   
  },
  // (error)=>{
  //    this.loader=false;
  //    this.userNotFound=true;
  // }
  )
   
}
onPageChange(event:any){
this.currentPage=event;
this.userRepo();
}
onPageSizeChange(event:any){
  this.pageSize=event.target.value;
  this.currentPage=1;
  this.userRepo();
}

 

 nextPage() {
  this.currentPage++;
}

prevPage() {
  this.currentPage--;
}
 

  ngOnInit(){
  
  this.getUsers();
    
   
    
  }
}
