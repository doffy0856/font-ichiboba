<template>
    <div id="Detail_area">
      <div class="container-fluid mb-5">
          <img
        src="@/assets/image/Logo_noBG.png"
        class="logo-mt"
        height="120px"
        width="120px"/>
        <h3><b>ตรวจสอบสถานะคำขอ</b></h3>
        <div class="text-center">
            <input class="search-id" type="search" name="search-id" id="search-id" placeholder="กรอกเลขบัตรประชาชนเพื่อตรวจสอบ">
            <div class="mt-5">
                <button type="button" class="btn btn-primary btn-md">ตรวจสอบ <i class="fas fa-search"></i></button>
            </div>
        </div>       

       </div> 
    </div>
</template>


<script>

export default {
  name:'Detail_area',
  
  
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