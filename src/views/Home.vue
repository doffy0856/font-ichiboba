<template>
  <div id="home">
    <div class="container-fluid">
        <img src="@/assets/image/Logo_noBG.png" class="img_logo mb-5">
        <div class="text-uppercase mb-5">
          <p>Happiness <span>plus</span></p>
          <p><i class="far fa-smile mr-2"></i> <span>with</span> boba </p>
        
        </div>
        
        
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',

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


</style>