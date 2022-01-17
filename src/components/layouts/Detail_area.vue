<template>
  <div id="Detail_area">
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
                    <li class="nav-item no-drop">
                        <a class="nav-link" disabled><b> 1.รายละเอียดผู้ยื่นคำร้อง</b></a>
                    </li>
                  </div>
                  <div class="col-sm-4">
                  <li class="nav-item">
                    <a class="nav-link active" ><b>2.รายละเอียดพื้นที่</b> </a>
                  </li>
                  </div>
                 <div class="col-sm-4 no-drop">
                  <li class="nav-item">
                    <a class="nav-link" disabled><b>3.ยืนยัน</b> </a>
                  </li>
                  </div>
                </ul>
          </div>
          
          <div class="card-body">
             <div class="row text-left mt-3 ml-5 ">
              <div class="col-sm-4  font-weight-bolder">
                <p>สถานที่ตั้งร้าน<span>*</span></p>
                <input type="text" name="home_number" id="home_number" placeholder="เลขที่" >
              </div>
              <div class="col-sm-4 mar-top">
                <input type="text" name="home_group" id="home_group" placeholder="หมู่" >
              </div>
               <div class="col-sm-4  mar-top">
                <input type="text" name="home_build" id="home_build" placeholder="อาคาร" >
              </div>
            </div>

            <div class="row text-left mt-3 ml-5 ">
              <div class="col-sm-4 ">
                <input type="text" name="home_floor" id="home_floor" placeholder="ชั้น" >
              </div>
              <div class="col-sm-4 ">
                <input type="text" name="room" id="room" placeholder="ห้อง" >
              </div>
               <div class="col-sm-4  ">
                <input type="text" name="home_road" id="home_road" placeholder="ถนน" >
              </div>
            </div>

            <div class="row text-left mt-3 ml-5 ">
              <div class="col-sm-4 ">
                <input type="text" name="provinc" id="provinc" placeholder="จังหวัด" >
              </div>
              <div class="col-sm-4 ">
                <input type="text" name="district" id="district" placeholder="อำเภอ" >
              </div>
               <div class="col-sm-4  ">
                <input type="text" name="sup_district" id="sup_district" placeholder="ตำบล" >
              </div>
              <div class="col-sm-4 mt-3  mb-3">
                <input type="text" name="zipecode" id="zipecode" placeholder="รหัสไปรษณีย์" >
              </div>
            </div>
            <!-- สถานที่ตั้งร้าน --> 
            
            <div class="row text-left mt-3 ml-5 mb-4">
              <div class="col-sm-4  font-weight-bolder">
                <p>ทำเลที่ตั้ง<span>*</span></p>
                <input type="text" name="n_place" id="n_place" placeholder="ชื่อสถานที่" >
              </div>
              <div class="col-sm-4 mar-top">
                <input type="text" name="latitude" id="latitude" placeholder="ละติจูด" >
              </div>
               <div class="col-sm-4  mar-top">
                <input type="text" name="longitude" id="longitude" placeholder="ลองจิจูด" >
              </div>
               <button type="button"  data-toggle="modal" data-target="#latitudeAndlong" class="btn btn-primary ml-3 mt-3">วิธีหาละติจูด ลองจิจูด </button>
            </div>

            <!-- ทำเลที่ตั้ง --><hr>


            <div class="row mt-4 ml-5  text-left">
              <div class="col-sm-6 ">
                <p><b>ความเป็นเจ้าของพื้นที่</b><span>*</span></p>
                <div>
                  <input type="checkbox" name="yes_area" id="yes_area" class="mt-1" checked>  <label><p>เป็นเจ้าของพื้นที่</p> </label> <br>
                </div>
                <div>
                  <input type="checkbox" name="no_area" id="no_area" > <label><p>เช่าพื้นที่</p> </label> <br>
                </div>
                <div class="row text-left ">
                    <div class="col-sm-6 ">
                      <p>พื้นที่ตารางเมตร<span>*</span></p>
                      <input type="text" name="meter_area" id="meter_area" >
                    </div>
                
                </div>
              </div>

              <div class="col-sm-6 ">
               <p><b>ความต้องการตกแต่งร้าน(เป็นธีมเดียวกับแฟรนไชส์)</b><span>*</span></p>
                  <input type="checkbox" name="construct_store" id="construct_store">  <label><p>ก่อสร้างใหม่ทั้งหมด</p> </label> <br>
                  <input type="checkbox" name="renovate_store" id="renovate_store" > <label><p>รีโนเวทร้านใหม่ทั้งหมด</p> </label> <br>
                  <input type="checkbox" name="kiosk_store" id="kiosk_store" > <label label><p>คีออส <small>(ขนาด 1.8x0.6 m)</small></p> </label> <br>
                  <input type="checkbox" name="other_store" id="other_store" > <label><p>อื่นๆ</p> </label> <input type="text" class="ml-5" name="other_store" id="other_store" placeholder="โปรดระบุ"> 
              </div>
            </div>
              <!-- ความเป็นเจ้าของพื้นที่ -->
              

             <div class="map"></div>
            <!-- MAP --><hr>
            
            <div class="row mt-4 ml-5  text-left">
              <div class="col-sm-6 ">
                <p><b>สภาพแวดล้อมโดยรวมของสถานที่</b><span>*</span></p>
                  <input type="checkbox" name="main_road" id="main_road">  <label><p>เป็นถนนสายหลัก</p> </label> <br>
                  <input type="checkbox" name="alley" id="alley" > <label><p>เป็นถนนในซอย</p> </label> <br>
                  <input type="checkbox" name="building" id="building" > <label><p>อาคาร</p> </label> <br>
                  <input type="checkbox" name="mall" id="mall" > <label><p>ห้างสรรพสินค้า</p> </label> <br>
                  <input type="checkbox" name="other_area" id="other_area" > <label><p>อื่นๆ</p> </label> <input type="text" class="ml-5" name="other_area" id="other_area" placeholder="โปรดระบุ"> 
              </div>

              <div class="row text-left ml-5 ">
              <div class="col-sm- ">
                <p><b>ที่จอดรถ</b><span>*</span></p>
                <div>
                  <input type="checkbox" name="yes_parking" id="yes_parking"> <label><p>มี</p> </label> <br>
                </div>
                <div>
                  <input type="checkbox" name="no_parking" id="no_parking" > <label><p>ไม่มี</p> </label> 
                </div>
              </div>
            </div>
            </div>
            <!-- สภาพแวดล้อมโดยรวมของสถานที่ -->  <hr>

            <div class="row mt-4 ml-5 text-left">
              <div class="col-sm-6 ">
                <p><b>สถานที่โดยรอบมีอะไรบ้าง(สามารถเลือกได้มากกว่า 1 ข้อ)</b><span>*</span></p>
                  <input type="checkbox" name="local_mall" id="local_mall">  <label><p>ห้างสรรพสินค้า</p> </label> <br>
                  <input type="checkbox" name="local_tea" id="local_tea" > <label><p>ร้านชานมยี่ห้ออื่น</p> </label> <br>
                  <input type="checkbox" name="local_office" id="local_office" > <label><p>สำนักงาน</p> </label> <br>
                  <input type="checkbox" name="local_accom" id="local_accom" > <label><p>คอนโด อพาร์ทเม้นท์ หรือที่พักอาศัยอื่นๆ</p> </label> <br>
                  <input type="checkbox" name="local_study" id="local_study" > <label><p>สถานศึกษา เช่น โรงเรียน มหาวิทยาลัย</p> </label> <br>
                  <input type="checkbox" name="local_gas" id="local_gas" > <label><p>สถานีนำมัน</p> </label> <br>
                  <input type="checkbox" name="local_community" id="local_community" > <label><p>ชุมชนหรือตลาด</p> </label> <br>
                  <input type="checkbox" name="local_other" id="local_other" > <label><p>อื่นๆ</p> </label> <br>
                  <p>โปรดระบุเหตุผลในการสมัครทำธุรกิจแฟรนไชส์ร้าน I-CHI BOBA</p> 
                  <textarea name="reason_detail" id="reason_detail" rows="3" cols="50"> </textarea>
              </div>
              <div class="col-sm-3">
                <input type="text" class=" mar-top" name="text_local_mall" id="text_local_mall" placeholder="โปรดระบุ">
                <input type="text" class=" mt-3" name="text_local_tea" id="text_local_tea" placeholder="โปรดระบุ">
                <input type="text" class=" mt-3" name="text_local_office" id="text_local_office" placeholder="โปรดระบุ">
                <input type="text" class=" mt-3" name="text_local_accom" id="text_local_accom" placeholder="โปรดระบุ">
                <input type="text" class=" mt-3" name="text_local_study" id="text_local_study" placeholder="โปรดระบุ"> 
                <input type="text" class=" mt-3" name="text_local_gas" id="text_local_gas" placeholder="โปรดระบุ">
                <input type="text" class=" mt-3" name="text_local_community" id="text_local_community" placeholder="โปรดระบุ">
                <input type="text" class=" mt-3" name="text_local_other" id="text_local_other" placeholder="โปรดระบุ">       
              </div>
            </div>            
            <!-- สถานที่โดยรอบมีอะไรบ้าง -->  <hr>

            <div class="row mt-4 ml-5 mb-5 text-left">
              <div class="col-sm-6 ">
                <p><b> ภาพถ่ายสถานที่ตั้งร้านจริงและภาพถ่ายสถานที่โดยรอบ</b></p>
                <p><small>(ไฟล์นามสกุล jpg, png, pdf ขนาดไม่เกิน 5 MB)</small> </p>
                 <input type="file" id="img_store" name="img_store">
              </div>
            </div>

            
              <router-link  to="/Franchise" class="btn btn-danger mt-5 mr-3"><i class="far fa-arrow-alt-circle-left"></i> กลับ </router-link>
              <router-link  to="/Franchise/Detail_area/Confirm" class="btn btn-primary mt-5 ml-3">ถัดไป <i class="far fa-arrow-alt-circle-right"></i></router-link>


          <!-- Modal  -->
          <div class="modal fade" id="latitudeAndlong" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="latitudeAndlongLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title font-weight-bolder h6" id="latitudeAndlongLabel">วิธีหาละติจูด ลองจิจูด </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      1. เปิด Google Map <br>
                      2. คลิกตำแหน่งที่ต้องการ 1 ครั้งบนแผนที่ <br>
                      3. ละติจูด ลองจิจูด จะแสดงด้านล่างของหน้าจอ
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>
                  </div>
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

export default {
  name:'Detail_area',
  data() {
    return {
      ref_data: null,

    }
  },
  mounted() {
    let data = this.$route.params.data;
    this.ref_data = data
    console.log("data is", this.ref_data);
  }
  
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
.no-drop {
  /* cursor: pointer; */
  cursor: no-drop;}
.mar-top{
  margin-top: 35px;
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