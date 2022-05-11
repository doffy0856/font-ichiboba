<template>
  <div id="Detail_area">
      <div class="container mb-5">
          <img
        :src="image"
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
              <div class="col-sm-12  col-md-8 col-lg-4">
                <p class=" font-weight-bolder">สถานที่ตั้งร้าน<span>*</span></p>
                <p>เลขที่:</p>
                <input type="text" name="home_number" id="home_number" placeholder="เลขที่"  v-model="area_details.home_number">
              </div>
              <div class="col-sm-12  col-md-8 col-lg-4  mar-top">
                <p>หมู่:</p>
                <input type="text" name="home_group" id="home_group" placeholder="หมู่" v-model="area_details.home_group">
              </div>
               <div class="col-sm-12  col-md-8 col-lg-4 mar-top">
                 <p>อาคาร:</p>
                <input type="text" name="home_build" id="home_build" placeholder="อาคาร" v-model="area_details.home_build">
              </div>
            </div>

            <div class="row text-left mt-3 ml-5 ">
              <div class="col-sm-12  col-md-8 col-lg-4  ">
                <p>ชั้น:</p>
                <input type="text" name="home_floor" id="home_floor" placeholder="ชั้น" v-model="area_details.home_floor">
              </div>
              <div class="col-sm-12  col-md-8 col-lg-4  ">
                <p>ห้อง:</p>
                <input type="text" name="room" id="room" placeholder="ห้อง" v-model="area_details.room">
              </div>
               <div class="col-sm-12  col-md-8 col-lg-4   ">
                 <p>ถนน:</p>
                <input type="text" name="home_road" id="home_road" placeholder="ถนน" v-model="area_details.home_road">
              </div>
            </div>

            <div class="row text-left mt-3 ml-5">
              <div class="col-sm-12  col-md-8 col-lg-4  ">
                <!-- <input type="text" name="provinc" id="provinc" placeholder="จังหวัด" v-model="area_details.province"> -->
                <addressinput-subdistrict  placeholder="ตำบล/แขวง" v-model="area_details.sup_district" />
              </div>
              <div class="col-sm-12  col-md-8 col-lg-4  ">
                <!-- <input type="text" name="district" id="district" placeholder="อำเภอ" v-model="area_details.district"> -->
                <addressinput-district placeholder="อำเภอ/เขต" v-model="area_details.district" />
              </div>
               <div class="col-sm-12  col-md-8 col-lg-4   ">
                <!-- <input type="text" name="sup_district" id="sup_district" placeholder="ตำบล" v-model="area_details.sup_district"> -->
                <addressinput-province placeholder="จังหวัด" v-model="area_details.province" />
              </div>
              <div class="col-sm-12  col-md-8 col-lg-4  mt-3  mb-3">
                <!-- <input type="text"  name="zipecode" id="zipecode" placeholder="รหัสไปรษณีย์" v-model="area_details.zipecode"> -->
                <addressinput-zipcode placeholder="รหัสไปรษณีย์" v-model="area_details.zipecode" />
              </div>
            </div>
            <!-- สถานที่ตั้งร้าน --> 
            
            <div class="row text-left mt-3 ml-5 mb-4">
              <div class="col-sm-12  col-md-8 col-lg-4 font-weight-bolder">
                <p>ทำเลที่ตั้ง<span>*</span></p>
                <input type="text" name="n_place" id="n_place" placeholder="ชื่อสถานที่" v-model="area_details.n_place">
              </div>
              <div class="col-sm-12  col-md-8 col-lg-4  mar-top">
                <input type="text" name="latitude" id="latitude" placeholder="ละติจูด" v-model="area_details.latitude">
              </div>
               <div class="col-sm-12  col-md-8 col-lg-4   mar-top">
                <input type="text" name="longitude" id="longitude" placeholder="ลองจิจูด" v-model="area_details.longitude">
              </div>
               <button type="button"  data-toggle="modal" data-target="#latitudeAndlong" class="btn btn-primary ml-3 mt-3">วิธีหาละติจูด ลองจิจูด </button>
            </div>

            <!-- ทำเลที่ตั้ง --><hr>


            <div class="row mt-4 ml-5  text-left">
              <div class="col-sm-12 col-lg-6 ">
                <p><b>ความเป็นเจ้าของพื้นที่</b><span>*</span></p>
                <div>
                  <input type="radio" value="เป็นเจ้าของพื้นที่" v-model="area_details.landlord" name="yes_area" id="yes_area" class="mt-1" >  <label><p>เป็นเจ้าของพื้นที่</p> </label> <br>
                  <input type="radio" value="เช่าพื้นที่" v-model="area_details.landlord" name="no_area" id="no_area" > <label><p>เช่าพื้นที่</p> </label> <br>
                </div>
                <div class="row text-left ">
                    <div class="col-sm-12 col-lg-6 ">
                      <p>พื้นที่ตารางเมตร<span>*</span></p>
                      <input type="text" name="meter_area" id="meter_area" v-model="area_details.meter_area">
                    </div>
                
                </div>
              </div>

              <div class="col-sm-12 col-lg-6 ">
               <p><b>ความต้องการตกแต่งร้าน(เป็นธีมเดียวกับแฟรนไชส์)</b><span>*</span></p>
                  <input type="radio" value="ก่อสร้างใหม่ทั้งหมด" name="construct_store" id="construct_store" v-model="area_details.store_decorate"> <label><p>ก่อสร้างใหม่ทั้งหมด</p> </label> <br>
                  <input type="radio" value="รีโนเวทร้านใหม่" name="renovate_store" id="renovate_store" v-model="area_details.store_decorate"> <label><p>รีโนเวทร้านใหม่</p> </label> <br>
                  <input type="radio" value="คีออส" name="kiosk_store" id="kiosk_store" v-model="area_details.store_decorate"> <label label><p>คีออส <small>(ขนาด 1.8x0.6 m)</small></p> </label> <br>
                  <input type="radio" value="อื่นๆ" name="other_store" id="other_store" v-model="area_details.store_decorate"> <label><p>อื่นๆ</p> </label> 
                  <input type="text" class="ml-5" name="other_store" id="other_store" placeholder="โปรดระบุ" v-model="area_details.store_descrip" :disabled="area_details.store_decorate != 'อื่นๆ' "> 
              </div>
            </div>
              <!-- ความเป็นเจ้าของพื้นที่ -->
            
           <hr>
            
            <div class="row mt-4 ml-5  text-left">
              <div class="col-sm-12 col-lg-6 ">
                <p><b>สภาพแวดล้อมโดยรวมของสถานที่</b><span>*</span></p>
                  <input type="radio" value="เป็นถนนสายหลัก" name="main_road" id="main_road" v-model="area_details.environment"> <label><p>เป็นถนนสายหลัก</p> </label> <br>
                  <input type="radio" value="เป็นถนนในซอย" name="alley" id="alley" v-model="area_details.environment"> <label><p>เป็นถนนในซอย</p> </label> <br>
                  <input type="radio" value="อาคาร" name="building" id="building" v-model="area_details.environment"> <label><p>อาคาร</p> </label> <br>
                  <input type="radio" value="ห้างสรรพสินค้า" name="mall" id="mall" v-model="area_details.environment"> <label><p>ห้างสรรพสินค้า</p> </label> <br>
                  <input type="radio" value="อื่นๆ" name="other_area" id="other_area" v-model="area_details.environment"> <label><p>อื่นๆ</p> </label> 
                  <input type="text" class="ml-5" name="other_area" id="other_area" placeholder="โปรดระบุ" v-model="area_details.environment_descrip" 
                    :disabled="area_details.environment != 'อื่นๆ' "> 
              </div>

              <div class="row text-left ml-5 ">
              <div class="col-sm-12 col-lg-12">
                <p><b>ที่จอดรถ</b><span>*</span></p>
                <div>
                  <input type="radio" value="มี" name="yes_parking" id="yes_parking" v-model="area_details.parking"> <label><p>มี</p> </label> <br>
                  <input type="radio" value="ไม่มี" name="no_parking" id="no_parking" v-model="area_details.parking"> <label><p>ไม่มี</p> </label> 
                </div>
              </div>
            </div>
            </div>
            <!-- สภาพแวดล้อมโดยรวมของสถานที่ -->  <hr>

            <div class="row mt-4 ml-5 text-left">
              <div class="col-sm-6 col-md-6 col-lg-12">
                <p><b>สถานที่โดยรอบมีอะไรบ้าง(สามารถเลือกได้มากกว่า 1 ข้อ)</b><span>*</span></p>

                  <input type="radio" value="ห้างสรรพสินค้า" name="local_mall" id="local_mall" v-model="area_details.local_mall.mall "> <label><p>ห้างสรรพสินค้า</p></label>  
                    <input type="text" class="input-right " name="text_local_mall" id="text_local_mall" placeholder="โปรดระบุ" 
                      v-model="area_details.local_mall.mall_detail" :disabled="area_details.local_mall.mall != 'ห้างสรรพสินค้า' ">  <br>

                  <input type="radio" value="ร้านชานมยี่ห้ออื่น" name="local_tea" id="local_tea" v-model="area_details.local_tea.tea"> <label><p>ร้านชานมยี่ห้ออื่น</p> </label> 
                    <input type="text" class="input-right" name="text_local_tea" id="text_local_tea" placeholder="โปรดระบุ" 
                    v-model="area_details.local_tea.tea_detail" :disabled="area_details.local_tea.tea != 'ร้านชานมยี่ห้ออื่น' "><br>

                  <input type="radio" value="สำนักงาน" name="local_office" id="local_office" v-model="area_details.local_office.office"> <label><p>สำนักงาน</p> </label>  
                    <input type="text" class="input-right" name="text_local_office" id="text_local_office" placeholder="โปรดระบุ" 
                    v-model="area_details.local_office.office_detail" :disabled="area_details.local_office.office != 'สำนักงาน' "> <br>

                  <input type="radio" value="คอนโด อพาร์ทเม้นท์ หรือที่พักอาศัยอื่นๆ" name="local_accom" id="local_accom" v-model="area_details.local_accom.accom"> <label><p>คอนโด อพาร์ทเม้นท์ หรือที่พักอาศัยอื่นๆ</p> </label> 
                    <input type="text" class="input-right" name="text_local_accom" id="text_local_accom" placeholder="โปรดระบุ" 
                    v-model="area_details.local_accom.accom_detail" :disabled="area_details.local_accom.accom != 'คอนโด อพาร์ทเม้นท์ หรือที่พักอาศัยอื่นๆ' "><br>

                  <input type="radio" value="สถานศึกษา"  name="local_study" id="local_study" v-model="area_details.local_study.study"> <label><p>สถานศึกษา เช่น โรงเรียน มหาวิทยาลัย</p> </label> 
                    <input type="text" class="input-right" name="text_local_study" id="text_local_study" placeholder="โปรดระบุ" 
                    v-model="area_details.local_study.study_detail" :disabled="area_details.local_study.study != 'สถานศึกษา' ">  <br>

                  <input type="radio"  value="สถานีนำมัน" name="local_gas" id="local_gas" v-model="area_details.local_gas.gas"> <label><p>สถานีนำมัน</p> </label> 
                  <input type="text" class="input-right" name="text_local_gas" id="text_local_gas" placeholder="โปรดระบุ"
                    v-model="area_details.local_gas.gas_detail" :disabled="area_details.local_gas.gas != 'สถานีนำมัน' "><br>

                  <input type="radio"  value="ชุมชนหรือตลาด" name="local_community" id="local_community" v-model="area_details.local_community.community"> <label><p>ชุมชนหรือตลาด</p> </label> 
                    <input type="text" class="input-right" name="text_local_community" id="text_local_community" placeholder="โปรดระบุ"
                     v-model="area_details.local_community.community_detail" :disabled="area_details.local_community.community != 'ชุมชนหรือตลาด' "><br>

                  <input type="radio" value="อื่นๆ" name="local_other" id="local_other" v-model="area_details.local_other.other"> <label><p>อื่นๆ</p> </label> 
                    <input type="text" class="input-right" name="text_local_other" id="text_local_other" placeholder="โปรดระบุ" 
                     v-model="area_details.local_other.other_detail" :disabled="area_details.local_other.other != 'อื่นๆ' ">  <br>
                  
                  <p class="mt-4">โปรดระบุเหตุผลในการสมัครทำธุรกิจแฟรนไชส์ร้าน I-CHI BOBA</p> 
                  <textarea name="raeson_detail" id="raeson_detail" rows="3" cols="40" v-model="area_details.raeson_detail"> </textarea>
              </div>
            </div>            
            <!-- สถานที่โดยรอบมีอะไรบ้าง   <hr>-->

            <!-- <div class="row mt-4 ml-5 mb-5 text-left">
              <div class="col-sm-6 col-lg-">
                <p><b> ภาพถ่ายสถานที่ตั้งร้านจริงและภาพถ่ายสถานที่โดยรอบ</b></p>
                <p><small>(ไฟล์นามสกุล jpg, png, pdf ขนาดไม่เกิน 5 MB)</small> </p>
                 <input type="file" id="img_store" name="img_store">
              </div>
            </div> -->

            
              <router-link  to="/Franchise" class="btn btn-danger mt-5 mr-3"><i class="far fa-arrow-alt-circle-left"></i> กลับ </router-link>
             <button type="submit" class="btn btn-primary mt-5 ml-3" @click.prevent="submitDetail" >ถัดไป <i class="far fa-check-circle"></i></button>


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
 import image from '@/assets/image/Logo_noBG.png';
 import 'vue-thailand-address/dist/vue-thailand-address.css';
//  import axios from 'axios';

export default {
  name:'Detail_area',
  data() {
    return {
      image: image,
      ref_data: null,
      area_details: {
        home_number:"", //เลขที่
        home_group: "", //หมู่
        home_build:"", //อาคาร
        home_floor:"", //ชั้น
        room: "",   //ห้อง
        home_road: "", //ถนน
        province:"", //จังหวัด
        district:"", //อำเภอ/เขต
        sup_district:"", //ตำบล/แขวง
        zipecode:"", //รหัสไปรษณีย์

        n_place:"", //ชือ่สถานที่
        latitude:"", //ละติจูด  
        longitude:"", //ลองจิจูด
        landlord:"", //ความเป็นเจ้าของพื้นที่
        meter_area:"", //พื้นที่ตารางเมตร
        store_decorate:"", //ความต้องการตกแต่งร้าน
        store_descrip:"", //

        environment:"", // สภาพแวดล้อมโดยรวมของสถาน
        environment_descrip:"", //
        parking:"", //ที่จอดรถ
        raeson_detail:"", //เหตุผลในการสมัคร

        local_mall: {mall:"" , mall_detail:"" },
        local_tea:{tea:"" , tea_detail:""},
        local_office:{office:"", office_detail:""},
        local_accom:{accom:"", accom_detail:""},
        local_study:{study:"",study_detail:"" },
        local_gas:{gas:"", gas_detail:""},
        local_community:{community:"", community_detail:""},
        local_other:{other:"", other_detail:""},
      }
    }
  },
  mounted() {
    let data_page1 = this.$route.params.data_page1;
    this.person_data = data_page1
    console.log("person", this.person_data);
    
    let area_details = JSON.parse(localStorage.getItem("page2"))
    if (area_details == null) {
      console.log('null')
    }
    else {
        this.area_details.home_number = area_details.home_number
        this.area_details.home_group = area_details.home_group
        this.area_details.home_build = area_details.home_build
        this.area_details.home_floor = area_details.home_floor
        this.area_details.room = area_details.room
        this.area_details.home_road = area_details.home_road
        this.area_details.province = area_details.province
        this.area_details.district = area_details.district
        this.area_details.sup_district = area_details.sup_district
        this.area_details.zipecode = area_details.zipecode
        this.area_details.n_place = area_details.n_place
        this.area_details.latitude = area_details.latitude
        this.area_details.longitude = area_details.longitude
        this.area_details.landlord = area_details.landlord

        this.area_details.meter_area = area_details.meter_area
        this.area_details.store_decorate = area_details.store_decorate
        this.area_details.store_descrip = area_details.store_descrip
        this.area_details.environment = area_details.environment
        this.area_details.environment_descrip = area_details.environment_descrip
        this.area_details.parking = area_details.parking
        this.area_details.raeson_detail = area_details.raeson_detail
        
        this.area_details.local_mall.mall = area_details.local_mall.mall // mall
        this.area_details.local_mall.mall_detail = area_details.local_mall.mall_detail
        
        this.area_details.local_tea.tea = area_details.local_tea.tea  // tea
        this.area_details.local_tea.tea_detail = area_details.local_tea.tea_detail
        
        this.area_details.local_office.office = area_details.local_office.office  // office
        this.area_details.local_office.office_detail = area_details.local_office.office_detail

        this.area_details.local_accom.accom = area_details.local_accom.accom  //accom
        this.area_details.local_accom.accom_detail = area_details.local_accom.accom_detail

        this.area_details.local_study.study = area_details.local_study.study //study
        this.area_details.local_study.study_detail = area_details.local_study.study_detail

        this.area_details.local_gas.gas = area_details.local_gas.gas //gas
        this.area_details.local_gas.gas_detail = area_details.local_gas.gas_detail

        this.area_details.local_community.community = area_details.local_community.community  //community 
        this.area_details.local_community.community_detail = area_details.local_community.community_detail

        this.area_details.local_other.other = area_details.local_other.other //other
         this.area_details.local_other.other_detail = area_details.local_other.other_detail

        // this.area_details.text_local_mall = area_details.text_local_mall
        // this.area_details.text_local_tea = area_details.text_local_tea
        // this.area_details.text_local_office = area_details.text_local_office
        // this.area_details.text_local_accom = area_details.text_local_accom
        // this.area_details.text_local_study = area_details.text_local_study
        // this.area_details.text_local_gas = area_details.text_local_gas
        // this.area_details.text_local_community = area_details.text_local_community
        // this.area_details.text_local_other = area_details.text_local_other

        this.area_details.reason_detail = area_details.reason_detail

    }
  },
  created() {
    this.checkPath()
  },

  methods: {
       checkPath(){
       var checkPath1 = localStorage.getItem("page1");
          if(checkPath1 === null){
              window.location = "/"
          }else{
              console.log("Connected")
          }
     } ,
    submitDetail() {
      if (this.area_details.home_number === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        // localStorage.removeItem("page2");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.home_group === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
       if (this.area_details.province === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.n_place === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.latitude === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.longitude === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.landlord === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.meter_area === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.store_decorate === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.environment === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.parking === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      if (this.area_details.raeson_detail === "") {
        this.$alert(null, "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
        window.location = "/Franchise/Detail_area";
      }
      else{
          this.$router.push({
          name: "Confirm", //use name for router push
          params: { data_page2: this.area_details, data_page1: this.person_data },
        });
        localStorage.setItem("page2", JSON.stringify(this.area_details));
      }
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
.input-right{
  float: right;
  margin-right:130px ;
}

@media (max-width:768px){
  textarea{
    width: 250px;
  }
  .input-right{
  float: left;
}
}

@media (max-width:990px){
  .input-right{
  float: left;
}
}
@media (max-width:600px){
  .input-right{
  float: left;
}
}
</style>