<template>
  <div id="franchise">
    <div class="container mb-5">
      <img
        :src="image"
        class="logo-mt"
        height="120px"
        width="120px"
      />
      <h3><b>แฟรนไชส์</b></h3>

      <div class="card text-center mt-4">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs row">
            <div class="col-sm-4">
              <li class="nav-item">
                <a class="nav-link active"><b> 1.รายละเอียดผู้ยื่นคำร้อง</b></a>
              </li>
            </div>
            <div class="col-sm-4 no-drop">
              <li class="nav-item">
                <a class="nav-link" disabled><b>2.รายละเอียดพื้นที่</b> </a>
              </li>
            </div>
            <div class="col-sm-4 no-drop">
              <li class="nav-item">
                <a class="nav-link" disabled><b>3.ยืนยัน</b> </a>
              </li>
            </div>
          </ul>
        </div>
  
        <form  >
          <div class="card-body ml-2 p-4">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-3 font-weight-bolder text-left">
                <p>วันที่ยื่นคำร้อง</p>
                <input type="date" lang="en" format="DD/MM/YYYY" v-model="person_info.create_date" disabled/>
              </div>
            </div>
            <!-- Date -->

            <div class="row text-left mt-3">
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p><b>ข้อมูลผุ้ประกอบการ</b></p>
                <v-select
                  class="select"
                  :options="prefix"
                  label="title"
                  placeholder="คำนำหน้า"
                  name="prefix"
                  id="prefix"
                  v-model="person_info.prefix"
                ></v-select>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p>ชื่อ:<span>*</span></p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="ชื่อ"
                  v-model="person_info.name" required/> 
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p>นามสกุล:<span>*</span></p>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="นามสกุล"
                  v-model="person_info.lastname" required/>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p>เลขบัตรประชาชน:<span>*</span></p>
                <input
                  type="text"
                  name="num_id"
                  id="num_id"
                  placeholder="เลขบัตรประชาชน"
                  :maxlength="nummax"
                  v-model="person_info.num_id" required/>
              </div>
            </div>
            <!-- ประเภทผุ้ประกอบการ -->
            <div class="row mt-4 text-left">
              <div class="col-sm-6">
                <p>แนบไฟล์ สำเนาบัตรประชาชน</p>
                <p>
                  <small>(ไฟล์นามสกุล jpg, png, pdf ขนาดไม่เกิน 5 MB)</small>
                </p>
                <input type="file" id="img_card" ref="fileInput" name="img_card" />
                 
              </div>
            </div>
            <!-- แนบไฟล์ สำเนาบัตรประชาชน -->

            <div class="row mt-4 text-left">
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p><b>ช่องทางการติดต่อ</b><span>*</span></p>
                <input
                  type="number"
                  name="num_phone"
                  id="num_phone"
                  placeholder="โทรศัพท์มือถือ"
                  v-model="person_info.num_phone" required/>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p>โทรศัพท์บ้าน:</p>
                <input
                  type="number"
                  name="num_phone_home"
                  id="num_phone_home"
                  placeholder="โทรศัพท์บ้าน"
                  v-model="person_info.num_phone_home"
                />
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <p>แฟกร์:</p>
                <input
                  type="text"
                  name="fax"
                  id="fax"
                  placeholder="แฟกร์"
                  v-model="person_info.fax"
                />
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 mb-5">
                <p>อีเมล:<span>*</span></p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="อีเมล"
                  v-model="person_info.email" required/>
              </div>
            </div>
            <!-- ช่องทางการติดต่อ -->

            <hr />

            <div class="row mt-5 text-left">
              <div class="col-sm-12 col-md-6 col-lg-12">
                <p><b>เคยมีประสบการณ์ในการดำเนินธุรกิจร้านชานมหรือไม่:</b></p>
                <label>
                  <input
                    type="radio"
                    value="ไม่มีประสบการณ์"
                    name="no_exper"
                    id="no_exper"
                    class="mt-3"
                    v-model="person_info.experience"
                     /> <label> ไม่มีประสบการณ์</label> <br />
                
                  <input
                    type="radio"
                    value="มีประสบการณ์"
                    name="exper"
                    id="exper"
                    class="mt-2"
                    v-model="person_info.experience"
                    /> <label> มีประสบการณ์</label>  <br />
                  <textarea
                    v-model="person_info.experience_detail"
                    name="detail_exper"
                    id="detail_exper"
                    rows="3"
                    cols="40"
                    placeholder="โปรดระบุ" :disabled=" person_info.experience != 'มีประสบการณ์' ">
                  </textarea>
                </label>
              </div>
            </div>

            <button type="submit"  class="btn btn-primary mt-5 no-drop" @click.prevent="submitPerson" 
            >ถัดไป <i class="far fa-arrow-alt-circle-right" ></i></button>
          </div>
        </form>
      </div>
      <!-- card -->
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
//  import axios from "axios";
import image from '@/assets/image/Logo_noBG.png';

export default {
  name: "franchise",
  
  data() {
    return {
      image : image,
      nummax: 13,
      // notRequired: false,
      prefix: ["นาย" , "นาง" ,"นางสาว" ],
      person_info: {
        create_date: new Date().toISOString().slice(0,10),
        prefix: "",
        name: "",
        lastname: "",
        num_id: '',
        num_phone: '',
        num_phone_home: '',
        fax: "",
        email: "",
        experience: '',
        experience_detail: ""
        
      },
    };
  },

  mounted() {
    let person_info = JSON.parse(localStorage.getItem("page1"))
    if (person_info == null) {
      console.log('Null')
    }
    else {
        // this.person_info.create_date = person_info.create_date
        this.person_info.prefix = person_info.prefix
        this.person_info.name = person_info.name
        this.person_info.lastname = person_info.lastname
        this.person_info.num_id = person_info.num_id
        this.person_info.num_phone = person_info.num_phone
        this.person_info.num_phone_home = person_info.num_phone_home
        this.person_info.fax = person_info.fax
        this.person_info.email = person_info.email
        this.person_info.experience = person_info.experience
        this.person_info.experience_detail = person_info.experience_detail
    }
},
 
  methods: {
    submitPerson() {
      if(this.person_info == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน")
      }
      else {
        this.$router.push({
        name: "Detail_area", //use name for router push
        params: { data_page1: this.person_info },
      });
      console.log("person");
      localStorage.setItem("page1", JSON.stringify(this.person_info));
      }
      // this.$router.push({
      //   name: "Detail_area", //use name for router push
      //   params: { data_page1: this.person_info },
      // });
      // // console.log("person",this.person_info.create_date);
      // localStorage.setItem("page1", JSON.stringify(this.person_info));
    },

  },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap");
div {
  /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
  font-family: "Roboto Mono", monospace;
}
.logo-mt {
  margin-top: 120px;
  margin-bottom: 30px;
}
.no-drop {
  cursor: no-drop;
}
p {
  font-size: 13px;
}
span {
  color: red;
}
.select {
  width: 210px;
}

// form.errors {
//   :invalid {
//     outline: 2px solid red;
//   }
// }
</style>
