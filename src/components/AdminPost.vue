<template>
  <div id="adminpost">
        <nav class="navbar navbar-expand-lg  navbar-light bg-warning p-4">
          <div class="container-fluid">
                <a class="navbar-brand" href="/Admin">ICHI-BOBA</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item  active">
                        <a class="nav-link" href="/Admin">รายชื่อทั้งหมด <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ml-4 active">
                        <a class="nav-link" href="/AdminPost">อัปเดตข่าวสาร</a>
                    </li>
                    <li class="nav-item dropdown ml-4 active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <!-- {{name}} -->Admin
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click="logOut_2()">Logout <i class="fas fa-sign-out-alt"></i> </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            
            <div class="card mt-5">
                <div class="card-header">
                    <h5><b>เพิิ่มข้อมูลข่าวสาร</b> </h5>
                </div>
                <div class="card-body mt-4">
                    <p class="mb-4"><b>เพิ่่มรูปภาพ</b></p>
                    <img class="image-size"
                    :src="Addpost.image_post"
                    :hidden="Addpost.image_post == ''" />
                    <div v-if="!Addpost.image_post">
                    <input
                        ref="file"
                        type="file"
                        id="image_post"
                        round
                        name="image_post"
                        @change="onFileChangePost" required />
                    </div>
                    <div v-else>
                    <button class="btn btn-danger btn-sm mt-4" icon="delete"
                        @click="removeImage">Delete</button>
                    </div>

                    <div class="mt-5">
                        <textarea name="detail_post" id="detail_post" cols="50" rows="5"  v-model="Addpost.detail_post" placeholder="รายละเอียดเพิ่มเติม" required></textarea>
                    </div>
                  <button type="submit" @click.prevent="submitAddpost"  class="btn btn-primary btn-sm mt-5">เพิ่มข่าวสาร <i class="fa fa-plus"></i></button>
                </div>
            </div>  <!--  ADD POST -->

            <div class="mt-5"> <!-- SHOW POST -->
            <h4><b>โพสต์ก่อนหน้านี้</b> </h4>
                <div class="card mb-5 mt-3"  v-for="(item, index) in getPost" :key="index">
                    <div class="card-body" >
                        <ul style="list-style-type:none;">
                        <li>
                            <p><b>โพสต์เมื่อวันที่:</b> {{item.date_post}}  
                             <i class="fas fa-trash-alt mr-3" @click="deletePost(item.post_id)"></i>
                             <i class="far fa-edit" @click="handPostID(item.post_id)"></i>
                            </p> 
                            <img :src="item.image_post" class="image-size mb-5">
                            <p class="text-left"><b>รายละเอียด</b> <br> &nbsp; &nbsp;
                             {{item.detail_post}}</p>
                        </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
         
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"adminpost",
    data() {
        return {
            Addpost: {
                date_post: new Date().toISOString().slice(0, 10),
                image_post: "",
                detail_post: ""
            },
            imageUrl:null,
            getPost:null,
            
        }
    },
    mounted() {
        axios.get('http://localhost:3001/post-admin').then((response) => {
        this.getPost = response.data.data
        // console.log("test get",response.data.data[0])
        //  console.log("test get",this.getPost)
        })

        let data_post = this.Addpost;
        this.addpost_data = data_post

        let new_data_post = {
        data_postConfirm : this.addpost_data,
        };
        this.confirmPost = new_data_post
        // console.log("addpost", this.confirmPost)
    
    },

    created() {
      this.checkLogin()
    },

    methods: {
        checkLogin(){
            var email = localStorage.getItem("email");
            if(!email){
                window.location = "LoginAdmin"
            }else{
                this.name = email
            }
        },
        checkPathuser() {
                var email = localStorage.getItem("email");
                if(!email){
                    window.location = "LoginAdmin"
                }else{
                    this.name = email
                }
        },
        logOut_2(){
            localStorage.clear()
            localStorage.setItem("page","");
            window.location = "LoginAdmin"

        },
        async onFileChangePost() {
        // console.log("testimagess")
        this.file = await this.$refs.file.files[0];
        const formData = new FormData();
        formData.append("file", this.file);

        const result = await axios.post(
            "http://localhost:3001/upload",
            formData,
            {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            }
        );
        this.Addpost.image_post = result.data.imageUrl
        },
        removeImage: function () {
        this.Addpost.image_post = "";
        },
        submitAddpost(){
            if(this.Addpost.image_post == "" && this.Addpost.detail_post == "") {
                this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
            }
            else{
                axios.post("http://localhost:3001/insert/post", this.confirmPost)
                .then((response) => [console.log(response)])
                console.log("test", this.confirmPost)

                window.location = "/AdminPost"
            }
            

        },
        deletePost(post_id){
            if (confirm("ต้องการลบโพสต์นี้?")) {
            window.location = "/AdminPost"
            this.txt = "You pressed OK!";
            axios.post('http://localhost:3001/delete/post-data', {post_id: post_id}).then((response) => {
        // this.info = response.data.data
            console.log("test delete",response)
              
            })
            } else {
                this.txt = "You pressed Cancel!";
            }
        },
        handPostID(post_id) {
            this.$router.push({
                name: "Editpost", //use name for router push
                params: { postId: post_id },
            });
                // console.log(id)
            localStorage.setItem("postid", JSON.stringify(post_id));
        },
      

    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
div {
    font-family: 'Roboto Mono', monospace;
}
.dropdown-item {
    cursor: pointer;
}
.nav-link:hover{
    font-size: 20px;
}
.text-left{
    font-size: 16px;
}

.fa-trash-alt {
    cursor: pointer;
}
.fa-trash-alt:hover{
    color: red;
    font-size: 20px;
}
.fa-edit {
    cursor: pointer;
}
.fa-edit:hover{
    color: rgb(198, 198, 17);
    font-size: 20px;
}
.image-size{
  width: 350px;
  height: auto;
}

@media (max-width:991px){
 .image-size{
    width: 250px;
    height: auto;
  }
  .text-left{
    font-size: 15px;
}
}

@media (max-width:768px){
 .image-size{
    width: 180px;
    height: auto;
  }
  .text-left{
    font-size: 14px;
}
}

</style>