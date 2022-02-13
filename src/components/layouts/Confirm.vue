<template>
  <div id="Confirm">
      <div class="container mb-5">
          <img
        src="@/assets/image/Logo_noBG.png"
        class="logo-mt"
        height="120px"
        width="120px"/>
        <h3><b>แฟรนไชส์</b></h3>
       
        <div class="card text-center mt-4">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs row">
                  <div class="col-sm-4">
                    <li class="nav-item">
                        <a class="nav-link" disabled><b> 1.รายละเอียดผู้ยื่นคำร้อง</b></a>
                    </li>
                  </div>
                  <div class="col-sm-4">
                  <li class="nav-item">
                    <a class="nav-link " disabled><b>2.รายละเอียดพื้นที่</b> </a>
                  </li>
                  </div>
                 <div class="col-sm-4">
                  <li class="nav-item">
                    <a class="nav-link active" ><b>3.ยืนยัน</b> </a>
                  </li>
                  </div>
    
                </ul>
          </div>
          
          <div class="card-body">
               <div class="p-5">
                  <div class="card">
                    <div class="card-header"> รายละเอียดผู้ยื่นคำร้อง</div>
                    <div class="row m-4" >
                        <div class="col-sm-12 col-md-12 col-lg-12" >
                          <ul style="list-style-type:none;">
                            <li class="mt-3"><h5>{{person.name}}</h5></li>
                            <li class="mt-4"><h5>{{person.create_date}}</h5></li>
                          </ul>
                        </div>
                        <!-- <div class="col-sm-6 " >
                            <ul style="list-style-type:none;">
                              <li>xxxxx</li>
                            </ul>
                        </div>           -->
                    </div>
                  </div>
              </div>
        
              <router-link  to="/Franchise/Detail_area" class="btn btn-danger mt-5 " ><i class="far fa-arrow-alt-circle-left"></i> กลับ </router-link>
              <button type="button"   class="btn btn-warning mt-5 ml-3">ดาวน์โหลดไฟล์ <i class="fas fa-file-download"></i></button>
              <button type="submit" data-toggle="modal" data-target="#staticBackdrop" @click.prevent="submitConfirm" class="btn btn-success mt-5 ml-3">ยืนยัน <i class="far fa-check-circle"></i></button>

          </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
 
        <!-- card --> 

      </div>
  </div>
</template>

<script>
 import "vue-select/dist/vue-select.css";
 import axios from 'axios';

export default {
  name:'Confirm',
  data() {
    return {
        person : JSON.parse(localStorage.getItem("page1")),
        details :JSON.parse(localStorage.getItem("page2"))
    }
  },
  mounted() {
    let data_page1 = this.$route.params.data_page1;
    this.person_data = data_page1

    let data_page2 = this.$route.params.data_page2;
    this.details_data = data_page2
    console.log("detail", this.details_data)

    let new_data = {
      data_personConfirm : this.person_data,
      data_detailConfirm : this.details_data
    };
    this.confirmData = new_data
    // console.log(this.allData)
  },
  created() {
    this.checkPath_2()
  },

  methods: {
     checkPath_2(){
       var checkPath2 = localStorage.getItem("page2");
          if(checkPath2 === null){
              window.location = "/Franchise"
          }else{
              console.log("Not next")
          }
     } ,

    submitConfirm(){
       axios.post("http://localhost:3001/insert-data", this.confirmData)
      .then((response) => [console.log(response)])
       console.log("confirm", this.confirmData)

      localStorage.removeItem('page1');
      localStorage.removeItem('page2');
    }
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
.logo-mt {
  margin-top: 120px;
  margin-bottom: 30px;
}
.nav-link {
  cursor: pointer;
}
p{
  font-size: 13px;
}
span{
  color: red;
}
.select {
  width: 210px;
}
</style>