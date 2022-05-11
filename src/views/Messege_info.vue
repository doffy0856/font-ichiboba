<template>
  <div id="messege-info">
    <div class="container ">
      <img
        src="@/assets/image/Logo_noBG.png"
        class="logo-mt"
        height="120px"
        width="120px"/>
        <h3><b>ข้อมูลข่าวสารต่างๆ</b></h3>

      <div  v-for="(post, index) in getPostdata" :key="index">
        <div class="card mb-5 mt-5">
          <div class="card-body" >
            <ul style="list-style-type:none;">
              <li>
                <p><b>โพสต์เมื่อวันที่:</b> {{post.date_post}}</p>
                <img :src="post.image_post" class="image-size mb-5">
                <p class="text-left"><b>รายละเอียด</b> <br> &nbsp; &nbsp;
                {{post.detail_post}}</p>
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
  name: "messege-info",
  data() {
    return {
      getPostdata: null,
    }
  },
  mounted(){  
    axios.get('http://localhost:3001/post-admin').then((response) => {
        this.getPostdata = response.data.data
        // console.log("test get",response.data.data[0])
        //  console.log("test get",this.getPostdata)
    })
  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
div {
    font-family: 'Roboto Mono', monospace;
}
.logo-mt {
  margin-top: 120px;
  margin-bottom: 30px;
}
.image-size{
  width: 450px;
  height: auto;
}
@media (max-width:991px){
 .image-size{
    width: 350px;
    height: auto;
  }
}

@media (max-width:768px){
 .image-size{
    width: 250px;
    height: auto;
  }
}

</style>