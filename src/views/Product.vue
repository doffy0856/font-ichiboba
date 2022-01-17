<template>
  <div id="product">
    <div class="container">
      <img
        src="@/assets/image/Logo_noBG.png"
        class="logo-mt"
        height="120px"
        width="120px"/>
      <h3><b>เมนูเครื่องดื่ม</b></h3> 

        
    <div class="row ">
      <div class="col-sm-12 text-center">
        <button @click="toggleImage" class="btn btn-warning btn-sm m-4">เมนูทั่วไป</button><br>
        <img src="../assets/image/menu_1.jpg" class="my_menu"  v-if='showImage'> 
      </div>
    </div>
     

     <div class="p-5">
        <div class="card">
          <div class="card-header"> Recommended Menu <i class="fas fa-mug-hot"></i></div>
          <div class="row m-4" >
              <div class="col-sm-6 text-left" >
                <ul style="list-style-type:none;">
                  <li  v-for="recom in recom_menu" :key="recom.name">{{ recom.name }} <hr> </li>
                </ul>
              </div>
              <div class="col-sm-6 " >
                  <ul style="list-style-type:none;">
                    <li  v-for="p_recom in recom_menu" :key="p_recom.price_recom"> <small>ราคา</small> {{ price_recom }} <small>บาท</small><hr></li>
                  </ul>
              </div>          
          </div>
        </div>
     </div>   <!--  Recommended Menu -->

     <div class="p-5">
        <div class="card ">
          <div class="card-header">Specail Menu <i class="fas fa-cocktail"></i></div>
          <div class="row m-4" >
              <div class="col-sm-6 text-left" >
                <ul style="list-style-type:none;">
                  <li v-for="spec in spec_menu" :key="spec.name">{{ spec.name }} <hr></li>
                </ul>
              </div>
              <div class="col-sm-6 " >
                  <ul style="list-style-type:none;">
                    <li v-for="p_spec in spec_menu" :key="p_spec.price_spec"> <small>ราคา</small> {{ price_spec }} <small>บาท</small> <hr></li>
                  </ul>
              </div>          
          </div>
        </div>
      </div>    <!--Specail Menu -->

      <div class="p-5">
        <div class="card ">
          <div class="card-header">Fruit tea Menu <i class="fab fa-envira"></i></div>
          <div class="row m-4" >
              <div class="col-sm-6 text-left" >
                <ul style="list-style-type:none;">
                  <li v-for="fruit_tea in fruit_menu" :key="fruit_tea.name">{{ fruit_tea.name }} <hr></li>
                </ul>
              </div>
              <div class="col-sm-6 " >
                  <ul style="list-style-type:none;">
                    <li v-for="p_fruit in fruit_menu" :key="p_fruit.price_fruit"> <small>ราคา</small> {{ price_fruit }} <small>บาท</small> <hr></li>
                  </ul>
              </div>          
          </div>
        </div>
      </div>    <!--Fruit tea Menu -->

      <div class="p-5">
        <div class="card ">
          <div class="card-header">Topping <i class="fas fa-candy-cane"></i></div>
          <div class="row m-4" >
              <div class="col-sm-6 text-left" >
                <ul style="list-style-type:none;">
                  <li>ไข่มุกลาวา <hr></li>
                  <li v-for="topping in topping_menu" :key="topping.name">{{ topping.name }} <hr></li>
                </ul>
              </div>
              <div class="col-sm-6 " >
                  <ul style="list-style-type:none;">
                     <li> <small>ราคา</small> 10 <small>บาท</small> <hr></li>
                    <li v-for="p_topping in topping_menu" :key="p_topping.price_topping"> <small>ราคา</small> {{ price_topping }} <small>บาท</small> <hr></li>
                  </ul>
              </div>          
          </div>
        </div>
      </div>    <!--Topping Menu -->

      <div class="p-5">
        <div class="card ">
          <div class="card-header">เมนูแก้วยาว <i class="fas fa-lemon"></i></div> 
          <div class="row m-4" >
              <div class="col-sm-6 text-left" >
                <ul style="list-style-type:none;">
                  <li v-for="long_grass in long_grass_menu" :key="long_grass.name">{{ long_grass.name }} <hr></li>
                </ul>
              </div>
              <div class="col-sm-6 " >
                  <ul style="list-style-type:none;">
                    <li v-for="p_long_grass in long_grass_menu" :key="p_long_grass .price_long_grass"> <small>ราคา</small> {{ price_long_grass }} <small>บาท</small> <hr></li>
                  </ul>
              </div>          
          </div>
        </div>
      </div>    <!--long Menu -->     
      
        
    </div>

    
  </div>
</template>

<script>
export default {
  name:'Product',
  data() {
    return {
      price_recom: 35,
      price_spec: 50,
      price_fruit: 40,
      price_topping: 15,
      price_long_grass:60,
      showImage: false,

      recom_menu: [
      { name: "นมฮอคไกโด+ไข่มุกลาวา" }, { name: "ชาไทย+ไข่มุกลาวา" }, { name: "ชาไต้หวัน+ไข่มุกลาวา" },
      { name: "ชาเขียว+ไข่มุกลาวา" }, { name: "นมชมพูฮอคไกโด+ไข่มุกลาวา" }, { name: "ดาร์คช็อคโกแล็ต+ไข่มุกลาวา" },
      { name: "นมสด+เฉาก๊วย" },
      ],
      spec_menu : [
        { name: "โกโก้" },{ name: "ไมโล" },{ name: "ชาเขียวมัจฉะ" },{ name: "กาแฟ" },
        { name: "นมฮอคไกโด+วิปครีม" },{ name: "นมฮอคไกโด+พุดดิ้ง" },{ name: "นมฮอคไกโด+เผือกหวาน" },{ name: "นมฮอคไกโด+มันม่วง" },
      ],
      fruit_menu : [
        { name: "ชามะนาว" },{ name: "ชาส้มวาเลนเซีย" },{ name: "ชามะลิ" },{ name: "ชาเสวารส" },
        { name: "ชาสตรอว์เบอรี่" },{ name: "ชาพีช" }
      ],
      topping_menu : [
        { name: "เผือกกวนไต้หวัน" },{ name: "ไข่มุกบุกใส" },{ name: "ถั่วอดงกวน" },
        { name: "พุดดิ้งคาราเมล" },{ name: "วิปปิ้ง ครีมชีส" },{ name: "เฉาก๊วย" },{ name: "เจลลี่บราวน์ชูการ์" }
      ],
       long_grass_menu : [
        { name: "STRAWBERRY CHESECAKE" },{ name: "GRAPE FRUIT TEA" },{ name: "PINE APPLE TEA" },
        { name: "SUPER FUIRTS TEA" },{ name: "MIXED BERRY TEA" }
      ],
    }
  },
  methods: {
    //  clickedDownload(){
    //   var fileName='http://localhost:8080/Product';
    //   window.open(fileName, 'Download');
    // }
    toggleImage: function () {
            this.showImage = !this.showImage;
            
        },
  },


};


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap");
div {
  font-family: "Roboto Mono", monospace;
}
.card-header{
  color: white;
  background:rgba(169, 128, 109, 0.983) ;
  font-size: 21px;
  font-weight: 600;
}
.logo-mt {
  margin-top: 120px;
  margin-bottom: 30px;
}
.my_menu{
  width: 900px;
  height: 600px;
}

@media (max-width:991px){
  .my_menu{
    width: 550px;
    height: 400px;
  }
}

@media (max-width:768px){
  .my_menu{
    width: 350px;
    height: 200px;
  }
}
/* .bg-blur{
  background-image: url("../assets/image/paper.jpeg");
} */
</style>
