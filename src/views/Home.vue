<template>
  <div id="home">
    <div class="container-fluid">
        <img :src="image" class="img_logo mb-5">
        <div class="text-uppercase mb-5">
          <p>Happiness <span>plus</span></p>
          <p><i class="far fa-smile mr-2"></i> <span>with</span> boba </p>
        
        </div>
        
        
    </div>
  </div>
</template>

<script>
import image from '@/assets/image/Logo_noBG.png';

  export default {
    name: 'Home',
    data() {
      return {
        image: image,
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
span{
  color: brown;
}
i{
  color: rgb(255, 195, 14);
  font-size: 80px;
}
.img_logo{
  height: 350px;
  width: 350px;
  margin-top: 120px;
}

@media (max-width:991px){
  .img_logo{
    height: 250px;
    width: 250px;
    margin-top: 100px;
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