<template>
    <div id="Detail_area">
      <div class="container-fluid mb-5">
          <img
        :src="image"
        class="logo-mt"
        height="120px"
        width="120px"/>
        <h3><b>ตรวจสอบสถานะคำขอ</b></h3>
        <div class="text-center">
            <input class="search-id" v-model="check_num" type="search" maxlength="13" name="search-id" id="search-id" placeholder="กรอกเลขที่อ้างอิง">

            <div class="mt-5">
                <button type="button" @click="checkId" class="btn btn-primary btn-md">ตรวจสอบ <i class="fas fa-search"></i></button>
            </div>
        </div>       

       </div> 
    </div>
</template>


<script>
import image from '@/assets/image/Logo_noBG.png';
import axios from 'axios';

export default {
  name:'Detail_area',
  data() {
    return {
      image : image,
      check_num:'',
      checkID: null
      
    }
  },

   methods: {
    checkId(){
        axios.get('http://localhost:3001/person-info/id',{params:{id:this.check_num}}).then((response) => {
        if(response.data.status == 200){
          this.checkID = response.data.data[0].status
            if( response.data.data[0].status == 'อนุมัติแล้ว'){
              this.$alert("คำร้องของท่านอนุมัติเรียบร้อยแล้ว หากมีความคืบหน้าอย่างไรจะแจ้งให้ทราบทางข้อมูลที่ท่านได้ระบุไว้","ขณะนี้เราได้รับใบสมัครของท่านเรียบร้อยแล้ว","success",3000);
            }
            if( response.data.data[0].status == 'ไม่อนุมัติ'){
              this.$alert("เอกสารที่คุณส่งเข้ามายังไม่ถูกต้อง/ครบถ้วน จึงขอให้ท่านผู้สมัครแก้ไข/เพิ่มเติมข้อมูลและทำการสมัครเข้ามาใหม่อีกครั้ง","ขณะนี้เราได้รับใบสมัครของท่านเรียบร้อยแล้ว","error",3000);
            }
            if( response.data.data[0].status == 'รออนุมัติ'){
              this.$alert("ยังไม่มีการอนุมัติคำร้องที่ท่านยื่นเข้ามา","ขณะนี้เราได้รับใบสมัครของท่านเรียบร้อยแล้ว","warning",3000);
            }
        }
        else{
          this.$alert("ขออภัยไม่พบคำร้องนี้",null,"question",3000);
        }
     })
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
.search-id{
    margin-top: 60px;
    width: 600px;
    height: 40px;
}
</style>