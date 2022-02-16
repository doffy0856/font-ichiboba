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
                    <div class="card-header"><b>รายละเอียดผู้ยื่นคำร้องทั้งหมด</b></div>
                    <div class="row m-4" >
                        <div class="col-sm-12 col-md-12 col-lg-12 ">
                          <!-- <ul style="list-style-type:none;"> -->
                            <p class="mt-4"><b>วันที่ยื่นคำร้อง:</b> {{person.create_date}}</p>
                            <p class="mt-3"><b>ชื่อ-นามสกุล:</b> {{person.name}} {{person.lastname}}</p>
                            <p class="mt-3"><b>เลขบัตรประชาชน:</b> {{person.num_id}} </p>
                            <!-- IMAGE_CARD  -->
                            <p class="mt-3"><b>เบอร์มือถือ:</b> {{person.num_phone}}  </p>
                            <p class="mt-3"><b>เบอร์โทรศัพท์บ้าน:</b> {{person.num_phone_home}}  </p>
                            <p class="mt-3"><b>แฟกร์:</b> {{person.fax}}  </p>
                            <p class="mt-3"><b>อีเมล์:</b> {{person.email}}  </p>
                            <p class="mt-3"><b>เคยมีประสบการณ์หรือไม่:</b>  {{person.experience}}  </p>
                            <p class="mt-3"><b>รายละเอียด:</b> {{person.experience_detail}}  </p>
                          <!-- </ul> -->
                        </div>
                         <div class="col-sm-12 col-md-12 col-lg-12 text-center" >
                           
                              <p class="mt-3"><b>จังหวัด:</b> {{details.province}}</p>
                              <p class="mt-3"><b>อำเภอ:</b> {{details.district}}</p>
                              <p class="mt-3"><b>ตำบล:</b> {{details.sup_district}}</p>
                              <p class="mt-3"><b>รหัสไปรษณีย์:</b> {{details.zipecode}}</p>
                              <p class="mt-3"><b>เลขที่:</b> {{details.home_number}} <b>หมู่:</b> {{details.home_group}} <b>อาคาร:</b> {{details.home_build}} <br>
                               <b>ชั้น:</b> {{details.home_floor}}  <b>ห้อง:</b> {{details.room}}   <b>ถนน:</b> {{details.home_road}}
                              </p>
                              <p class="mt-3"><b>ชื่อสถานที่:</b> {{details.n_place}}</p>
                              <p class="mt-3"><b>ละติจูด:</b> {{details.latitude}}</p>
                              <p class="mt-3"><b>ลองจิจูด:</b> {{details.longitude}}</p>
                            
                        </div>
                          <div class="col-sm-12 col-md-12 col-lg-12 " >
                           
                              <p class="mt-4"><b>ความเป็นเจ้าของพื้นที่:</b> {{details.landlord}}</p>
                              <p class="mt-3"><b>พื้นที่ตารางเมตร:</b> {{details.meter_area}} ตรม.</p>
                              <p class="mt-3"><b>ความต้องการตกแต่งร้าน:</b> {{details.store_decorate}}</p>
                              <p class="mt-3"><b>รายละเอียด:</b> {{details.store_descrip}}</p>
                              <p class="mt-3"><b>สภาพแวดล้อมโดยรวมของสถานที่:</b> {{details.environment}}  </p>
                              <p class="mt-3"><b>รายละเอียด:</b> {{details.environment_descrip}}  </p>
                              <p class="mt-3"><b>ที่จอดรถ:</b> {{details.parking}}</p>
                              <p class="mt-3"><b>เหตุผลในการสมัครทำธุรกิจ:</b> {{details.raeson_detail}}</p>
                            
                        </div>
                         <div class="col-sm-12 col-md-12 col-lg-12 " >
                            
                              <p class="mt-4"><b>สถานที่โดยรอบ:</b> <br> 
                                {{details.local_mall.mall}} - {{details.local_mall.mall_detail}} <br>
                                {{details.local_tea.tea}} - {{details.local_tea.tea_detail}} <br>
                                {{details.local_office.office}} - {{details.local_office.office_detail}} <br>
                                {{details.local_accom.accom}} - {{details.local_accom.accom_detail}} <br>
                                {{details.local_study.study}} - {{details.local_study.study_detail}} <br>
                                {{details.local_gas.gas}} - {{details.local_gas.gas_detail}} <br>
                                {{details.local_community.community}} - {{details.local_community.community_detail}} <br>
                                {{details.local_other.other}} - {{details.local_other.other_detail}} <br>
                              </p>
                               <p class="mt-5"><small><b>รายละเอียดเพิ่มเติมสามารถติดต่อได้ที่</b></small> <br>
                               <small><b>โทร: 0998470878 อีเมล์: anusorn.krth@gmail.com</b></small> <br>
                               </p>

                        </div>                      
                    </div>
                  </div>
              </div>
        
              <router-link  to="/Franchise/Detail_area" class="btn btn-danger mt-5 " ><i class="far fa-arrow-alt-circle-left"></i> กลับ </router-link>
              <button type="button"   class="btn btn-warning mt-5 ml-3">ดาวน์โหลดไฟล์ <i class="fas fa-file-download"></i></button>
              <button type="submit" @click.prevent="submitConfirm" class="btn btn-success mt-5 ml-3">ยืนยัน <i class="far fa-check-circle"></i></button>

          </div>
        </div>

        <!-- <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title font-weight-bolder" id="staticBackdropLabel">I-CHI BOBA </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body ">
                      ขอบคุณสำหรับการสมัครเฟรนไชส์ I-CHI BOBA โดยท่านจะได้รับการตอบกลับทางข้อมูลที่ท่านได้ระบุไว้  data-toggle="modal" data-target="#staticBackdrop"
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>
                  </div>  
                </div>
        </div>
  -->
        
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
              window.location = "/"
          }else{
              console.log("Not next")
          }
     } ,
    submitConfirm(){
       axios.post("http://localhost:3001/insert-data", this.confirmData)
      .then((response) => [console.log(response)])
       console.log("confirm", this.confirmData)
      this.$alert("ขอบคุณสำหรับการสมัครเฟรนไชส์ I-CHI BOBA โดยท่านจะได้รับการตอบกลับทางข้อมูลที่ท่านได้ระบุไว้","ยื่นคำร้องสำเร็จ","success",5000);
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
  text-align: left;
  font-size: 13px;
  padding-left:35% ;
}

</style>