<template>
  <div id="editpost">
      <div class="container mt-5">
          <div class="mt-5"> <!-- SHOW POST -->
            <h4><b>แก้ไขโพสต์</b> </h4>
                <div class="card mb-5 mt-3">
                    <div class="card-body" >
                        <ul style="list-style-type:none;">
                        <li>
                            <p><b>โพสต์เมื่อวันที่:</b> {{getPostID.date_post}}  
                             <i class="far fa-edit"></i>
                            </p> 
                            <img :src="getPostID.image_post" class="image-size mb-3"> <br> 
                            <button v-if="getPostID.image_post !==''" class="btn btn-danger btn-sm mt-2" icon="delete" @click="removeImage">Delete</button><br>
                            <input v-if="getPostID.image_post === ''"
                                ref="file"
                                type="file"
                                id="image_post"
                                round
                                name="image_post"
                                @change="onFileEditPost"  /> <br>

                            <img :src="updateImage" class="image-size mt-3 mb-2">
                            <p class=""><b>รายละเอียด</b> </p>
                            <textarea class="" cols="50" rows="5"  v-model="getPostID.detail_post"></textarea>
                        </li>
                        </ul>
                        <router-link  to="/AdminPost" class="btn btn-danger "><i class="far fa-arrow-alt-circle-left"></i> กลับ </router-link>
                        <button type="submit" class="btn btn-success ml-3" @click="updatePost()">อัปเดต <i class="fa fa-plus"></i></button>
                         
                    </div>
                    
                </div>
            </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    name:"editpost",
    data() {
        return {
            getPostID:null,
            imageUrl:null,
            updateImage:null

        }
    }, 
    mounted() {
        let postID = JSON.parse(localStorage.getItem("postid"))
        this.data_id = postID
         console.log("ID",this.data_id)
        // let postID = this.$route.params.postId;
        //  console.log("ID",postID)

        axios.get('http://localhost:3001/admin/post-id',{params:{post_id: this.data_id}}).then((response) => {
        this.getPostID = response.data.data[0]
        // console.log("ID",this.getPostID.post_id)
    })
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
    async onFileEditPost() {
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
        this.updateImage = result.data.imageUrl
    },
    removeImage: function () {
        this.getPostID.image_post = "";
        },
    async updatePost() {
        this.getPostID.date_post = await new Date().toISOString().slice(0, 10)
        this.getPostID.image_post = await this.updateImage
        console.log("test", this.updateImage)
        window.location = "/AdminPost"

        axios.post('http://localhost:3001/edit-post', {data: this.getPostID}).then((response) => {
        this.getPostID = response.data.data[0]
        // console.log("ID",this.getPostID.post_id)

        
    })
    }, 
    

    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
div {
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    font-family: 'Roboto Mono', monospace;
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