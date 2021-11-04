<template>

  <div class="container-fluid mt-5 text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">

    <div class="row" style="margin-top: 30px;">
      <div class="col">
        <img alt="EVARA"  :src="require(`@/assets/images/backgrounds/error500.png`)" class="faq_image">
      </div>
    </div> <!--Image-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <span class="master_title " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> در حال حاضر منابع ما با محدودیت مواجه است </span>
      </div>
      <div class="col"></div>
    </div> <!--Title-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <p class="master_desc " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">لطفا زمانی دیگر به وب سایت مراجعه فرمایید</p>
      </div>
      <div class="col"></div>
    </div> <!--Desc-->

  </div>

</template>

<script>

export default {
  name: "evara_error_500"
  , data() {
    return {

    };
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
  }
}
</script>


<style scoped>

.faq_image{
  width: 35%;
}


a{
  text-decoration: none;
}

.master_title{
  font-size: 36px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  direction: rtl;
  text-align: center;
  color: #000;
}

.master_desc{
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  direction: rtl;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}






</style>
