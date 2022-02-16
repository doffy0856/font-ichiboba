<template>
  <div id="home">
    <div class="container-fluid">
        <img :src="image" class="img_logo mb-5">
        <div class="text-uppercase mb-5">
          <p>Happiness <span>plus</span></p>
          <p><i class="far fa-smile mr-2"></i> <span>with</span> boba </p>
        </div>  
    </div> 
    <hr>
    <div class="container-fluid margin-tops bg-color"> 
      <h4>แฟรนไชส์</h4>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">
            <router-link to="/Provision"  class="btn btn-warning  ">สมัครแฟรนไชส์</router-link>
            <router-link to="/Check_req_status"  class="btn btn-warning m-5">ตรวจสอบสถานะคำขอ</router-link >
            <router-link to="/Product" class="btn btn-warning" >สินค้าแฟรนไชส์</router-link >
        </div>
      </div> 
    </div>
  <hr>
    <div class="container-fluid margin-tops">
       <h4>รูปภาพ</h4>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
            </ol>
            <div class="carousel-inner" >
              <div class="carousel-item active" >
                <img src="../assets/img_home/img_1.jpg" class=" w-90" height="480px"  alt="">
              </div>
              <div class="carousel-item"  v-for="banner in bannerList" :key="banner.src">
                <img :src="banner.src" class=" w-90" height="480px"   alt="">
              </div>
            </div>
      </div>
    </div>

  </div>
</template>

<script>
import image from '@/assets/image/Logo_noBG.png';
import img2 from '../assets/img_home/img_2.jpg'
import img3 from '../assets/img_home/img_3.jpg'
import img4 from '../assets/img_home/img_4.jpg'
import img5 from '../assets/img_home/img_5.jpg'
import img6 from '../assets/img_home/img_6.jpg'
import img7 from '../assets/img_home/img_7.jpg'
import img8 from '../assets/img_home/img_8.jpg'

  export default {
    name: 'Home',
    data() {
      return {
        image: image,
        bannerList: [
            { src: img2 },
            { src: img3 },
            { src: img4 },
            { src: img5 },
            { src: img6 },
            { src: img7 },
            { src: img8 },
          ],
      }
    },

  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap");

p{
  font-family: "Roboto Mono", monospace;
  font-size: 45px;
  font-weight: 600;
}
h4{
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
}
hr{
  width: 70%;
}
span{
  color: brown;
}
i{
  color: rgb(255, 195, 14);
  font-size: 80px;
}
.bg-color{
  background-image: url("../assets/image/paper.jpeg");
}
.img_logo{
  height: 350px;
  width: 350px;
  margin-top: 120px;
}
.margin-tops{
padding-top: 50px;
padding-bottom: 50px;
}

@media (max-width:991px){
  .img_logo{
    height: 250px;
    width: 250px;
    margin-top: 100px;
  }
  .w-100{
    width: 80%;
    height: 50%;
  }
  p{
    font-size: 30px;
  }
  i{
    font-size: 60px;
  }
}
@media (max-width:768px){
  .img_logo{
    height: 200px;
    width: 200px;
    margin-top: 80px;
  }
  p{
    font-size: 20px;
  }
  i{
    font-size: 40px;
  }
}



</style>