<template>
  <div id="messege-info">
    <div class="container mb-5">
        <form  @submit.prevent="sendEmail" class="logo-mt">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name:"messege-info",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        console.log("test",e.target)
        console.log("name",this.name)
        
        emailjs.sendForm('service_x4kt4v3', 'template_15mziaa', e.target,
        'U7on2VpPLLp8-sBt9', {
          name: this.name,
          email: this.email,
          message: this.message,
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }

}
</script>

<style scoped>
  * {box-sizing: border-box;}
.logo-mt {
  margin-top: 125px;
  margin-bottom: 30px;
}
.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>