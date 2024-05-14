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
  loader:boolean=true;
  constructor(
    private apiService: ApiService
  ) {}
 
  
 public getUsers(){
  // this.setUserName=userName;
  this.apiService.getUser(this.userName).subscribe( (data) =>  {
              
    this.userData=data;
    this.loader=false;
    this.userNotFound=this.userData.length===0;
   
}
);
 
  this.userRepo();
 }
userRepo():void{
  this.apiService.getRepos( this.userName).subscribe((repos)=>{
    this.userRepos=repos;
   
  })
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

//  currentPage = 0;
//  itemsPerPage = 10;

//  get startIndex(): number {
//    return this.currentPage * this.itemsPerPage;
//  }

//  get endIndex(): number {
//    return (this.currentPage + 1) * this.itemsPerPage;
//  }

 nextPage() {
  this.currentPage++;
}

prevPage() {
  this.currentPage--;
}
// onPageChange(page: number): void {
//   this.currentPage = page;
//   this. getUsers();
// }

  ngOnInit(){
  //   this.apiService.getUser(this.setUserName).subscribe( (data) =>  {
              
  //     this.userData=data;
     
  // });
  this.getUsers();
    
  // this.apiService.getRepos( this.setUserName).subscribe((repos)=>{
  //   this.userRepos=repos;
  //   console.log(  this.userRepos);
  // })
    
  }
}
