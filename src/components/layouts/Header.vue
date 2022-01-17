<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg ps_fixed ">
      <div class="container-fluid">
          <a href="" class="navbar-brand fs" > <img src="@/assets/image/Logo-ichi.png" class="img_logo">I-CHI BOBA</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto topnav">
                  <li class="nav-item ml-4 active">
                      <router-link  class="nav-link" to="/Home"><b>หน้าหลัก</b><span class="sr-only"></span></router-link>
                  </li>
                  <li class="nav-item ml-4 active">
                      <router-link class="nav-link" to="/Product"><b>สินค้า</b></router-link>
                  </li>
                    <li class="nav-item ml-4 active">
                      <router-link class="nav-link" to=""><b>ข่าวสาร</b></router-link>
                  </li>
                  <li class="nav-item ml-4 active">
                      <router-link  class="nav-link" to="/Franchise"><b>แฟรนไชส์</b></router-link>
                  </li>
                  <li class="nav-item ml-4 active">
                      <router-link  class="nav-link" to="/Check_req_status"><b>ตรวจสอบสถานะคำขอ</b></router-link>
                  </li>
                  
                  
              </ul>
          </div>

        </div>


      </nav>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      
    }
  },

};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
}
.bg{
  background: #edc343;
  
}

/* b{
  cursor: pointer;
} */
.topnav{
    font-size: 16px;
    padding-right: 120px;
    
}

.topnav a:hover {
    border-bottom: 2px solid rgb(144, 98, 6);
    font-size: 23px;
    
}
.fs{
  font-size: 28px;
  font-weight: 600;
  
}
.ps_fixed{
  position: fixed;
  z-index: 2000;
  width: 100%;

}
.img_logo{
  width: 120px;
  height: 100px;
 
  
}
/* .ps_rel{
  position: relative;
} */

@media (max-width:991px){
  .fs{
    font-size: 23px;
    font-weight: 500;
    font-family: 'Roboto Mono', monospace;

  }
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

  .img_logo{
    width: 55px;
    height: 55px;
    font-family: 'Roboto Mono', monospace;

  }
}



</style>
