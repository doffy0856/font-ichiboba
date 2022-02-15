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
                      <router-link  class="nav-link" to="/"><b>หน้าหลัก</b><span class="sr-only"></span></router-link>
                  </li>
                  <li class="nav-item ml-4 active">
                      <router-link class="nav-link" to="/Product"><b>สินค้า</b></router-link>
                  </li>
                    <li class="nav-item ml-4 active">
                      <router-link class="nav-link" to="/Messege_info"><b>ข่าวสาร</b></router-link>
                  </li>
                  <li class="nav-item ml-4 active">
                      <router-link  class="nav-link" to="/Provision"><b>แฟรนไชส์</b></router-link>
                  </li>
                  <li class="nav-item ml-4 active">
                      <router-link  class="nav-link" to="/Check_req_status"><b>ตรวจสอบสถานะคำขอ</b></router-link>
                  </li>
                  
                  
              </ul>
          </div>

        </div>

        <!-- <div class="card-body">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title font-weight-bolder" id="staticBackdropLabel">I-CHI BOBA </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body ">
                      ขอบคุณสำหรับการสมัครเฟรนไชส์ I-CHI BOBA โดยท่านจะได้รับการตอบกลับทางข้อมูลที่ท่านได้ระบุไว้
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>
                  </div>
                </div>
              </div>
          </div> -->


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
