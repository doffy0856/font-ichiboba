<template>
  <div id="provision">
      <div class="container mb-4">
        <img
        src="@/assets/image/Logo_noBG.png"
        class="margin-top"
        height="120px"
        width="120px"/>
        <div class="card mt-4">
            <div class="card-header"><h4><b>ข้อควรทราบ</b> </h4></div>
                <div class="card-body">
                    <div class="row ml-4 mt-5 mb-4 font-weight-bold" >
                        <div class="col-sm-12 col-md-12 col-lg-12 text-left">
                            <p>ข้อควรทราบ</p>
                            <small>ทางร้าน ไม่มีนโยบายดำเนินการผ่านตัวแทน นายหน้า หรือบุคคลกลางใดๆ หากท่านพบบุคคลแอบอ้าง โปรดแจ้งมาที่อีเมล์ anusorn.krth@gmail.com <br> 
                                เพื่อทางร้าน จะดำเนินการทางกฎหมายต่อไป</small>
                            
                            <p class="mt-3"><small> ผู้สมัครตกลงปฏิบัติตามข้อกำหนดหลักเกณฑ์และเงื่อนไขการสมัคร ดังต่อไปนี้</small></p>
                            <small>1.ผู้สมัครต้องกรอกข้อมูลให้ถูกต้องและชัดเจน</small> <br>
                            <small>2.การพิจารณาพื้นที่ จะพิจารณาตามลำดับ ก่อน-หลัง ที่มีการยื่นเข้ามา</small> <br>
                            <small>3.พื้นที่ที่เสนอพิจารณา ต้องแนบ ภาพถ่าย พร้อมระบุตำแหน่งที่ตั้ง ระบุละติจูด ลองจิจูด ให้ชัดเจนและถูกต้อง</small> <br>
                            <small>4.ในกรณีผู้สมัครเป็นผู้ประกอบการที่เปิดดำเนินการร้าน I-Chi boba ในพื้นที่นั้นๆอยู่ก่อนแล้วและต้องการเพิ่มสาขาในบริเวณเดียวกัน <br> สามารถนำใบสมัครมาพิจารณาโดยไม่ต้องพิจารณาตามลำดับคิว</small> <br>
                            <small>5.หากมีกรณีนอกเหนือหลักเกณฑ์และเงื่อนไขข้างต้น ทางร้านขอสงวนสิทธิ์ในการพิจารณาตามที่เห็นสมควร โดยคำตัดสินถือเป็นที่สิ้นสุด</small> <br>

                            <input type="checkbox" class="margin-top-check" v-model="check_info"> <small>ฉันได้อ่านข้อกำหนดและเงื่อนไขในการให้บริการแล้วและยอมรับข้อกำหนดและเงื่อนไขทุกประการ</small>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-5 text-center" @click.prevent="submitProvision"  :disabled="check_info == false">ถัดไป <i class="far fa-arrow-alt-circle-right"></i></button>
                </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"provision",
    data() {
        return {
            check_info:false,
        }
    },
   methods: {
       submitProvision() {
          this.$router.push({
          name: "Franchise", //use name for router push
        //   params: { data_checked: this.check_info },
      });
    // localStorage.setItem("provison", JSON.stringify(this.check_info));
    window.location.reload(2000)
    localStorage.removeItem('page1');
    localStorage.removeItem('page2');
    // localStorage.removeItem('provison');
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
.margin-top {
  margin-top: 120px;
  margin-bottom: 30px;
}
.margin-top-check{
    margin-top: 50px;
    margin-left: 20px;
}

</style>