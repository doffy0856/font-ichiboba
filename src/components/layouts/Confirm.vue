<template>
  <div id="Confirm" ref="confirm">
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
          
          <div class="card-body " >
               <div class="p-5">
                  <div class="card" ref="confirmPdf">
                    <div class="card-header font-weight-bold">รายละเอียดผู้ยื่นคำร้องทั้งหมด<br>
                        <span class="span-red">**กรุณาดาวน์โหลดไฟล์ก่อนกดยืนยัน**</span> </div>
                  
                     <!-- ข้อมูลส่วนตัว -->
                          <table class="table table-sm table-borderless mt-5">
                            <tbody>
                              <tr>
                                <td class="inline-rigth"><p>วันที่ยื่นคำร้อง :</p></td>
                                <td class="inline-left"><p>{{person.create_date}}</p></td>
                              </tr>
                              <tr>
                                <td class="inline-rigth"><p>ชื่อ-นามสกุล :</p></td>
                                <td class="inline-left"><p>{{person.name}} {{person.lastname}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เลขบัตรประชาชน :</p></td>
                                <td class="inline-left"><p>{{person.num_id}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เบอร์มือถือ :</p></td>
                                <td class="inline-left"><p>{{person.num_phone}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เบอร์โทรศัพท์บ้าน :</p></td>
                                <td class="inline-left"><p>{{person.num_phone_home}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>แฟกร์ :</p></td>
                                <td class="inline-left"><p>{{person.fax}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>อีเมล์ :</p></td>
                                <td class="inline-left"><p>{{person.email}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เคยมีประสบการณ์หรือไม่ :</p></td>
                                <td class="inline-left"><p>{{person.experience}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>รายละเอียด :</p></td>
                                <td class="inline-left"><p>- {{person.experience_detail}}</p></td>
                              </tr>
                              
                               <!-- สถานที่ตั้งร้าน -->
                              <tr>
                                <td  class="inline-rigth pt-5"><p>สถานที่ตั้งร้าน :</p></td>
                                <td class="inline-left pt-5"><p>{{details.home_number}}/{{details.home_group}}</p>  
                                    <p :hidden="details.home_road == '-'">{{details.home_build}} {{details.home_floor}} {{details.home_road}}</p>
                                    <p>{{details.sup_district}}</p>
                                    <p>{{details.district}}</p>
                                    <p>{{details.province}} {{details.zipecode}}</p>
                                </td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ชื่อสถานที่ :</p></td>
                                <td class="inline-left"><p>{{details.n_place}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ละติจูด :</p></td>
                                <td class="inline-left"><p>{{details.latitude}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ลองจิจูด :</p></td>
                                <td class="inline-left"><p>{{details.longitude}}</p></td>
                              </tr>

                              <!-- ความเป็นเจ้าของพื้นที่ -->
                               <tr>
                                <td class="inline-rigth"><p>ความเป็นเจ้าของพื้นที่ :</p></td>
                                <td class="inline-left"><p>{{details.landlord}}</p></td>
                              </tr>
                              <tr>
                                <td class="inline-rigth"><p>พื้นที่ตารางเมตร :</p></td>
                                <td class="inline-left"><p>{{details.meter_area}} ตรม.</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ความต้องการตกแต่งร้าน :</p></td>
                                <td class="inline-left"><p>{{details.store_decorate}}</p></td>
                              </tr>
                              <tr :hidden="details.store_descrip === ''">
                                <td  class="inline-rigth"><p>อื่นๆ :</p></td>
                                <td class="inline-left"><p>{{details.store_descrip}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>สภาพแวดล้อมโดยรวมของสถานที่ :</p></td>
                                <td class="inline-left"><p>{{details.environment}}</p></td>
                              </tr>
                              <tr :hidden="details.environment_descrip === ''">
                                <td  class="inline-rigth"><p>อื่นๆ :</p></td>
                                <td class="inline-left"><p>{{details.environment_descrip}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ที่จอดรถ :</p></td>
                                <td class="inline-left"><p>{{details.parking}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เหตุผลในการสมัครทำธุรกิจ :</p></td>
                                <td class="inline-left"><p>{{details.raeson_detail}}</p></td>
                              </tr>
                    
                               <tr>
                                <td  class="inline-rigth"><p>สถานที่โดยรอบ :</p></td>
                                <td class="inline-left">
                                  <p :hidden="details.local_mall.mall == '' ">{{details.local_mall.mall}} - {{details.local_mall.mall_detail}}</p>
                                  <p :hidden="details.local_tea.tea == ''">{{details.local_tea.tea}} - {{details.local_tea.tea_detail}} </p>
                                  <p :hidden="details.local_office.office == ''">{{details.local_office.office}} - {{details.local_office.office_detail}}</p>
                                  <p :hidden="details.local_accom.accom == ''">{{details.local_accom.accom}} - {{details.local_accom.accom_detail}}</p>
                                  <p :hidden="details.local_study.study == ''">{{details.local_study.study}} - {{details.local_study.study_detail}} </p>
                                  <p :hidden="details.local_gas.gas == ''">{{details.local_gas.gas}} - {{details.local_gas.gas_detail}} </p>
                                  <p :hidden="details.local_community.community == ''">{{details.local_community.community}} - {{details.local_community.community_detail}} </p>
                                  <p :hidden="details.local_other.other == ''">{{details.local_other.other}} - {{details.local_other.other_detail}} </p>
                                </td>
                              </tr>
                            </tbody>
                          </table> 

                          <small class="mt-5"><small><b>รายละเอียดเพิ่มเติมสามารถติดต่อได้ที่</b></small> <br>
                               <small><b>โทร: 0998470878 อีเมล์: anusorn.krth@gmail.com</b></small> <br>
                          </small>
                  </div>
              </div>
        
              <router-link  to="/Franchise/Detail_area" class="btn btn-danger mt-5 " ><i class="far fa-arrow-alt-circle-left"></i> กลับ </router-link>
              <button type="button" @click="generatePdf"  class="btn btn-warning mt-5 ml-3">ดาวน์โหลดไฟล์ <i class="fas fa-file-download"></i></button>
              <button type="submit" @click.prevent="submitConfirm" class="btn btn-success mt-5 ml-3">ส่งข้อมูล <i class="far fa-check-circle"></i></button>

          </div>
        </div>
        <!-- card --> 
      </div>
  </div>
</template>

<script>
 import "vue-select/dist/vue-select.css";
 import axios from 'axios';
 import jsPDF from 'jspdf';
//  import html2canvas from 'html2canvas';

export default {
  name:'Confirm',
  data() {
    return {
        person : JSON.parse(localStorage.getItem("page1")),
        details : JSON.parse(localStorage.getItem("page2")),
        pdfOption: {
                orientation: "p",
                format: "a4",
                unit: "px",
                lineHeight: 2,
                putOnlyUsedFonts : true
            },
        pdfConfig : {
                typo : {
                header : 25,
                large : 20,
                normal : 18,
                small : 11,
                small_2:7
                },
                margin : {
                t : 20,
                b : 20,
                l : 20,
                l_2: 3,
                r : 20
                }
            },
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

      window.location = "/"
    },
    generatePdf(){
        try {
                let pdf = new jsPDF(this.pdfOption);
                const pdf_width = pdf.internal.pageSize.width;
                const pdf_height = pdf.internal.pageSize.height;
                const margin_l = this.pdfConfig.margin.l;
                const margin_l_2 = this.pdfConfig.margin.l_2;
                let pdf_position_y = 0;

                pdf.setFont('Prompt','normal'); //set font family
                pdf.setFontSize(this.pdfConfig.typo.large); //set font size
                pdf.setTextColor('black'); //set font color with hex color code
                pdf_position_y += 40;
                pdf.text('รายละเอียดคำร้อง', pdf_width / 2, pdf_position_y, null, null, "center"); //add text to pdf
                pdf_position_y += this.pdfConfig.typo.large
                
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('วันที่ยื่นคำร้อง : ' + ' '+ this.person.create_date, pdf_width / margin_l_2 , pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small
                
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ชื่อ-นามสกุล : '+ ' '+this.person.name + ' ' + this.person.lastname , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('เลขบัตรประชาชน : ' + ' '+ this.person.num_id , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('เบอร์มือถือ : ' + ' '+ this.person.num_phone , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small
                
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('เบอร์โทรศัพท์บ้าน : ' + ' '+ this.person.num_phone_home , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('แฟกร์ : ' + ' '+ this.person.fax , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('อีเมล์ : ' + ' '+ this.person.email , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('เคยมีประสบการณ์หรือไม่ : ' + ' '+ this.person.experience , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('รายละเอียด : ' + '-'+ this.person.experience_detail , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += 30;
                pdf_position_y += this.pdfConfig.typo.small

                // รายละเอียดพื้นที่
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('จังหวัด : ' + ' '+ this.details.province , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('อำเภอ : ' + ' '+ this.details.district , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ตำบล : ' + ' '+ this.details.sup_district , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('รหัสไปรษณีย์ : ' + ' '+ this.details.zipecode , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('เลขที่ : ' + ' '+ this.details.home_number+ ' ' + ' ' + 'หมู่ : ' + ' ' + this.details.home_group  + ' '+ ' ' + 'อาคาร : ' + ' '+ this.details.home_build 
                , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ชั้น : ' + ' '+ this.details.home_floor + ' ' + ' ' + 'ห้อง : ' + ' '+ this.details.room  + ' ' + ' ' +'ถนน : ' + ' '+ this.details.home_road 
                , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ชื่อสถานที่ : ' + ' '+ this.details.n_place , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ละติจูด : ' + ' '+ this.details.latitude , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ลองจิจูด : ' + ' '+ this.details.longitude , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += 30;
                pdf_position_y += this.pdfConfig.typo.small

                // ความเป็นเจ้าของพื้นที่
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ความเป็นเจ้าของพื้นที่ : ' + ' '+ this.details.landlord , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('พื้นที่ตารางเมตร : ' + ' '+ this.details.meter_area + ' ' + 'ตรม.' , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ความต้องการตกแต่งร้าน : ' + ' '+ this.details.store_decorate , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('อื่นๆ : ' + ' '+ '-'+ this.details.store_descrip , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('สภาพแวดล้อมโดยรวมของสถานที่ : ' + ' '+ this.details.environment , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('อื่นๆ : ' + ' '+ '-'+ this.details.environment_descrip , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('ที่จอดรถ : ' + ' '+ this.details.parking , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('เหตุผลในการสมัครทำธุรกิจ : ' + ' '+ this.details.raeson_detail , pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += 30;
                pdf_position_y += this.pdfConfig.typo.small

                 // สถานที่โดยรอบ
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text('สถานที่โดยรอบ : ' + ' '+ this.details.local_mall.mall + ' '+ '-'+ ' ' + this.details.local_mall.mall_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_tea.tea + ' '+ '-'+ ' ' + this.details.local_tea.tea_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_office.office + ' '+ '-'+ ' ' + this.details.local_office.office_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_accom.accom + ' '+ '-'+ ' ' + this.details.local_accom.accom_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_study.study + ' '+ '-'+ ' ' + this.details.local_study.study_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_gas.gas + ' '+ '-'+ ' ' + this.details.local_gas.gas_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_community.community + ' '+ '-'+ ' ' + this.details.local_community.community_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small

                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.text(' '+ this.details.local_other.other + ' '+ '-'+ ' ' + this.details.local_other.other_detail , 
                pdf_width / margin_l_2, pdf_position_y, null, null, "left");
                pdf_position_y += this.pdfConfig.typo.small


                setTimeout(() => {
                pdf.setFont('Sarabun','normal');
                pdf.setFontSize(this.pdfConfig.typo.small);
                pdf.setTextColor('#000');
                const textDate = (new Date()).toString();
                
                const pages = pdf.internal.getNumberOfPages();

                //add footer page
                for (let j = 1; j < pages + 1 ; j++) {
                    pdf.setPage(j);
                    pdf.setFontSize(this.pdfConfig.typo.small_2);
                    pdf.text(`วันเวลา : ${textDate}`, margin_l , pdf_height - 15, null, null, "left");
                    pdf.text(`หน้า ${j} จาก ${pages}`, pdf_width - margin_l , pdf_height - 15, null, null, "right");
                }
                //download pdf file
                pdf.save(this.person.name + ".pdf");
                },0);
            }
            catch (err) {
                console.log(err);
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
.nav-link {
  cursor: pointer;
}
p{
  /* text-align: right ; */
  font-size: 13.5px;
  margin: 0 auto; 
   /* padding-left:40% ; */
}
.span-red{
    font-size: 10px;
    color: rgb(220, 44, 44);
    text-align: center;
}
.inline-rigth{
  text-align: right;
  padding-right: 20px;
  font-weight: bold;
}
.inline-left{
  text-align: left;
  padding-right: 40px;
}



</style>