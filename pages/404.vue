<template>

  <div class="container-fluid text-center mt-5" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">

    <div class="row" style="margin-top: 30px;">
      <div class="col">
        <img alt="EVARA"  :src="require(`@/assets/images/backgrounds/error404.png`)" class="faq_image">
      </div>
    </div> <!--Image-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <span class="master_title" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> صفحه مورد نظر شما پیدا نشد </span>
      </div>
      <div class="col"></div>
    </div> <!--Title-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <p class="master_desc " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">لطفا در فیلد زیر جستجوی جدیدی انجام دهید و یا اینکه به صفحه اصلی بروید</p>
      </div>
      <div class="col"></div>
    </div> <!--Desc-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-6">
        <div class="row" style="margin-bottom: 30px;">
          <div class="col">
            <input type="text" class="form-control mgn_input" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                   placeholder="ملک و یا موضوع جدیدی را جستجو کنید">
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <button type="button" class="btn btn-success col home_btn" @click="gotopage('evara_index')"> رفتن به صفحه
              اصلی
            </button>
            <button type="button" class="btn btn-success col search_btn"> جستجو</button>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div> <!--Form-->

</template>


<script>

export default {
 data() {
    return {
    };
  }
  , methods: {
    gotopage(page) {
      this.$router.push(this.localePath({name: page}));
    }
  }
  , mounted: function () {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
  }
}
</script>

<style scoped>

.search_btn {
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: -5px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.home_btn {
  width: 180px;
  height: 40px;
  border-radius: 8px;
  margin-top: -5px;
  background: none;
  color: #b5b5b5;
  border: solid 1px #b5b5b5;
}

.mgn_input {
  height: 45px;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: #fff;
  color: #b5b5b5;
  text-align: right;
  font-size: 14px;
}

.mgn_input::-webkit-input-placeholder { /* Edge */
  color: #b5b5b5;
}

.mgn_input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #b5b5b5;
}

.mgn_input::placeholder {
  color: #b5b5b5;
}


.faq_image {
  width: 35%;
}


a {
  text-decoration: none;
}

.master_title {
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

.master_desc {
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
