<template>
  <div id="admin">
      <nav class="navbar navbar-expand-lg  navbar-light bg-warning p-4">
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
                                <!-- {{name}} -->Admin
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click="logout()">Logout <i class="fas fa-sign-out-alt"></i> </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>

        <div class="container">
                <table class="table table-bordered table-sm mt-5">
                    <thead class="thead-light ">
                        <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">ปี/เดือน/วัน</th>
                        <th scope="col">เลขบัตรประชาชน</th>
                        <th scope="col">ชื่อ-สกุล</th>
                        <th scope="col">เบอร์โทรศัพท์</th>
                        <th scope="col">อีเมล</th>
                        <th scope="col">สถานะ</th>
                        <th scope="col">ลบข้อมูล</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr v-for="(user, index) in info" :key="index">  
                            <th scope="row">{{index+1}}</th>
                            <td>{{user.create_date}}</td>
                            <td class="n-cursor" @click.prevent="handleId(user.num_id)">{{user.num_id}}</td>
                            <td>{{user.name}} {{user.lastname}}</td>
                            <td>{{user.num_phone}}</td>
                            <td>{{user.email}}</td>
                            <td v-if="user.status == 'รออนุมัติ'" class="text-warning">{{user.status}}</td>
                            <td v-if="user.status == 'อนุมัติแล้ว'" class="text-success">{{user.status}}</td>
                            <td v-if="user.status == 'ไม่อนุมัติ'" class="text-danger">{{user.status}}</td>
                           
                            <td @click="deleteID(user.num_id)"><i class="fas fa-trash-alt" ></i></td>
                        </tr>
                    </tbody>
                    </table>
        </div>
        

  </div>

    
</template>

<script>

import axios from 'axios';

export default {
  name: "admin",
  data() {
      return {
          name:'',
          info: null,
          txt: ''
      }
  },

  mounted(){  
    axios.get('http://localhost:3001/person-info/all').then((response) => {
        this.info = response.data.data
        // console.log("test get",response.data.data)
    })
   
       
    
  },

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

      },
      handleId(id) {
       this.$router.push({
        name: "User", //use name for router push
        params: { userId: id },
      });
        // console.log(id)
      localStorage.setItem("userid", JSON.stringify(id));
      },
      deleteID(id){
        if (confirm("ต้องการลบราบชื่อนี้?")) {
            this.txt = "You pressed OK!";
            axios.post('http://localhost:3001/delete-data/id', {id: id}).then((response) => {
        // this.info = response.data.data
            console.log("test delete",response)
          })
        //  console.log("success delete",id)
        } else {
            this.txt = "You pressed Cancel!";
        }
       
        }

  }

};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
div {
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    font-family: 'Roboto Mono', monospace;
}
.dropdown-item {
    cursor: pointer;
}
.fa-trash-alt{
    cursor: pointer;
}
.fa-trash-alt:hover{
    color: red;
    font-size: 20px;
}
.nav-link:hover{
    font-size: 20px;
}
.n-cursor{
     cursor: pointer;
     text-decoration: underline;
}
.n-cursor:hover{
    color:blue;
    font-size: 17px;
}



</style>