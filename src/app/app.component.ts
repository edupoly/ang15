import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  constructor(public http:HttpClient){}
  newPost:any = {
    title:'',
    author:''
  };
  showAddPostForm=false;
  selectedPost:any=null;
  ngOnInit(){
    this.getPosts()
  }
  allPosts:any=[];
  showAddPost(){
    this.showAddPostForm=true;
  }
  cancelAddPost(){
    this.showAddPostForm=false;
  }
  addPost(){
    this.http.post("http://localhost:3000/posts",this.newPost).subscribe(()=>{
      console.log("HI..")
      this.showAddPostForm=false;
      this.newPost={};
      this.getPosts();
    })
  }
  getPosts(){
    this.http.get("http://localhost:3000/posts").subscribe((res)=>{
      this.allPosts=res;
    })
  }
  deletePost(id:any){
    this.http.delete("http://localhost:3000/posts/"+id).subscribe((res)=>{
      console.log('deleted');
      this.getPosts();
    })
  }
  editPost(post:any){
    this.selectedPost=post;
  }

  updatePost(){
    this.http.put("http://localhost:3000/posts/"+this.selectedPost.id,this.selectedPost).subscribe(()=>{
      console.log("HI..");
      this.selectedPost=null;
      this.getPosts();
    })
  }
}
