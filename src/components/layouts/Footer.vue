<template>
  <div id="footer">
    <div class="site-footer ps">
      <div class="container">
        <div class="row font-famil">
          <div class="col-sm-8 col-md-4 " >
            <h5>Admin</h5>
            <!-- <p class="text-justify ">xxx</p> -->
            <ul class="footer-links admin-center">
                <li><router-link to="/LoginAdmin">Login <i class="fas fa-sign-in-alt"></i></router-link></li> <br>
                <li><p class="text-p">*เฉพาะเจ้าของแฟรนไชส์*</p></li>
            </ul>
          </div>
          <div class="col-sm-8 col-md-4 ">
            <h5>ยื่นคำร้องแฟรนไชส์</h5>
            <ul class="footer-links f-left">
                <li class="nav-item ml-4 active">
                    <router-link  class="footer-link" to="">แฟรนไชส์</router-link>
                </li> <br>
                <li class="nav-item ml-4 active">
                    <router-link  class="footer-link" to="">ตรวจสอบสถานะคำขอ</router-link>
                </li>
            </ul>
          </div>
          <div class="col-sm-8 col-md-4">
            <h5>ติดต่อ</h5>
            <ul class="footer-links f-left" >
               <li><a href="https://www.facebook.com/ichiboba/"> <i class="fab fa-facebook"></i> Facebook</a></li> <br>
               <li><p style="font-size:15px;">โทร : 062-196-6446</p></li> 
               <li><p style="font-size:15px;">Email : anusorn.krth@gmail.com</p></li> 
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

          <!-- <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a class="line" href="#"><i class="fab fa-line"></i></a></li>
            </ul>
          </div> -->
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
/* .f-left{
    text-align: left;
} */


.site-footer{
  position: absolute;
  padding: 20px;
  /* margin-top: 1px; */
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #e5b934;
  color: white;
  line-height: 12px;
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



/* --------------Test--------------------- */

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
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:88px;
    padding-bottom:0;
  }
}
@media (max-width:767px)
{
  .site-footer 
  {
    padding-bottom:0;
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center;
    font-size: 12px;
  }
}
/* .social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.line:hover
{
  background-color:#13e304
}
.social-icons a.instagram:hover
{
  background-color:#ff054c
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
} */

</style>
