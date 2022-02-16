<template>
  <div id="messege-info">
    <div class="container">
      <img
        src="@/assets/image/Logo_noBG.png"
        class="margin-top"
        height="120px"
        width="120px"
      />

      <div>
        <addressinput-subdistrict v-model="subdistrict" />
        <!-- อำเภอ/เขต -->
        <addressinput-district v-model="district" />
        <!-- จังหวัด -->
        <addressinput-province v-model="province" />
        <addressinput-zipcode v-model="zipcode" />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-thailand-address/dist/vue-thailand-address.css';

export default {
  name: "messege-info",
  data() {
    return {
      subdistrict: '', district: '', province: '', zipcode: ''
    };
  },
};
</script>

<style scoped>
.margin-top {
  margin-top: 120px;
  margin-bottom: 30px;
}
</style>
