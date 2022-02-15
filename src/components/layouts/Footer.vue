<template>
  <div id="footer">
    <div class="site-footer ps">
      <div class="container">
        <div class="row font-famil">
          <div class="col-sm-12 col-md-6 col-lg-6  col-xs-12" >
            <h5>Admin</h5>
            <!-- <p class="text-justify ">xxx</p> -->
            <ul class="footer-links admin-center">
                <li><router-link to="/LoginAdmin">Login <i class="fas fa-sign-in-alt"></i></router-link></li> <br>
                <li><p class="text-p">*เฉพาะเจ้าของแฟรนไชส์*</p></li>
            </ul>
          </div>
          <!-- <div class="col-sm-8 col-md-4 ">
            <h5>ยื่นคำร้องแฟรนไชส์</h5>
            <ul class="footer-links f-left">
                <li class="nav-item ml-4 active">
                    <router-link  class="footer-link" to="/Provision">แฟรนไชส์</router-link>
                </li> <br>
                <li class="nav-item ml-4 active">
                    <router-link  class="footer-link" to="/Check_req_status">ตรวจสอบสถานะคำขอ</router-link>
                </li>
            </ul>
          </div> -->
          <div class="col-sm-12 col-md-6 col-lg-6  col-xs-12">
            <h5>ติดต่อ</h5>
            <ul class="footer-links text-left pl-5" >
               <li><a href="https://www.facebook.com/ichiboba/"> <i class="fab fa-facebook"></i> Facebook</a> </li> <br>
               <li> <small><p style="padding-top:8px;">โทร: 099-847-0878</p></small></li>
               <li><small> <p>Email : anusorn.krth@gmail.com</p></small></li> 
            </ul>
          </div>
        </div> <!--   Row -->

    <hr>

      </div> <!-- Container -->

       <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
         <a href="#">I-CHI BOBA</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nameL: "Footer",

};
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
.font-famil{
  font-family: 'Roboto Mono', monospace;
}
.site-footer{
  position: absolute;
  padding: 15px;
  /* margin-top: 1px; */
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #e5b934;
  color: white;
  line-height: 7px;
  /* text-align: center; */
}
.ps {
  position: relative;
}
.text-p{
    font-size: 10px;
    color: brown;
    text-align: center;
}




/* --------------footer--------------------- */

.site-footer hr
{
  border-top-color:rgb(255, 255, 255);
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h5
{
  color:rgb(255, 255, 255);
  font-size:23px;
  text-transform:uppercase;
  margin-top:15px;
  letter-spacing:2px

}
.site-footer a{
  color:#7a0000;
}
.footer-links li a:hover{
  color: #3d56f4;
}
.site-footer a:hover
{
  color:#f70a06;
  text-decoration:none;
}

.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#ffffff
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#ffffff;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}

/* ------------------ICON------------------ */

.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#0062be
}
.copyright-text
{
  margin:0;
  text-align: center;
}
/* @media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:88px;
    padding-bottom:0;
  }
} */
@media (max-width:767px)
{
  /* .site-footer 
  {
    padding-bottom:0;
  } */
  .site-footer .copyright-text,.site-footer .social-icons
  {
    font-size: 12px;
  }
}

</style>
