<template>
  <div id="admin">

      <nav class="navbar navbar-expand-lg  navbar-light bg-light">
          <div class="container-fluid">
                <a class="navbar-brand" href="#">ICHI-BOBA</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item  active">
                        <a class="nav-link" href="/Admin">รายชื่อทั้งหมด <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ml-4 active">
                        <a class="nav-link" href="#">อัปเดตข่าวสาร</a>
                    </li>
                    <li class="nav-item dropdown ml-4 active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{name}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click="logout()">Logout <i class="fas fa-sign-out-alt"></i> </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
                <table class="table table-bordered table-sm mt-5">
                    <thead class="thead-light ">
                        <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">วันที่</th>
                        <th scope="col">เลขบัตรประชาชน</th>
                        <th scope="col">ชื่อ-สกุล</th>
                        <th scope="col">เบอร์โทรศัพท์</th>
                        <th scope="col">อีเมล</th>
                        <th scope="col">สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1/11/2342</td>
                            <td>1232321232232</td>
                            <td>Mark Hamberg</td>
                            <td>092312313</td>
                            <td>test@gmail.com</td>
                            <td>pass</td>
                        </tr>
                    </tbody>
                </table> 
        </div>
        

  </div>

    
</template>

<script>
// import Footer from '@/components/layouts/Footer.vue'


export default {
  name: "admin",
  data() {
      return {
          name:''
      }
  },
//   components: {
//       Footer
//   },
  created() {
      this.checkLogin()
  },
  methods:{
      checkLogin(){
          var email = localStorage.getItem("email");
          if(!email){
              window.location = "LoginAdmin"
          }else{
              this.name = email
          }
      },
      logout(){
          localStorage.clear()
          localStorage.setItem("page","");
          window.location = "LoginAdmin"

      }

  }

};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
}
.dropdown-item {
    cursor: pointer;
}




</style>