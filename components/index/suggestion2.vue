<template>

  <!-- Suggest Items -->

  <div class="row house_slider_2_row" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">

    <!--Slider 2 Detail-->
    <div class="col-4 slider_1_detail" style="padding-right: 40px;">

      <div class="row" style="margin-bottom: 30px;margin-top: 60px;"><div class="col-2 separator"></div></div> <!-- Separator -->

      <div class="row" style="margin-bottom: 50px;">
        <div class="col text-right">
          <span class="suggest_1_title" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]"> {{ $t('index.project_adv_title') }}  </span>
        </div>
      </div> <!-- Title -->

      <div class="row" style="margin-bottom: 0;">
        <div class="col text-right">
          <p class="suggest_1_desc" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
            {{ $t('index.project_adv_desc') }}
          </p>
        </div>
      </div> <!-- Desc -->

      <div class="row">
        <div class="col text-right">
          <button type="button" class="btn btn-success suggest_1_btn Greenbtn" @click="Search_advanced"> {{ $t('index.spe_adv_btn_2') }} </button>
        </div>
      </div>

    </div>

    <!--Slider 2-->
    <div class="col-8" style="padding-left: 0;padding-right: 0;direction: ltr;">
<!--      <client-only>-->
        <swiper v-if="lst_estate.length > 0" ref="mySwiper" class="swiper" :options="swiperOptions" :auto-update="true" :auto-destroy="true">
          <swiper-slide  v-for="item in lst_estate.slice(0,5)"  :key="item.id">
            <HouseCard1
              :project_id="item.id"
              :estate_id="item.id"
              :images="item.galleris"
              :address="item.state + ' | ' + item.city"
              :title="item.title"
              :price="item.prices[0].price_value"
              :price_unit="item.prices[0].unit_title"
              :properties="item.properties"
              :is_viewed="item.is_use"
              :area_space="item.area_space_all"
              :floor="item.floor_number_title"
              :room="item.room_number_title"
              :is_like="item.is_like"
              :is_ifram_360="item.is_ifram_360"
              :is_matterport="item.is_matterport"
              :land_use="item.land_use_sumery"
              :province="item.state"
              :neghbourhod="item.neghbourhod"
              :city="item.city"
              radius="left"
              :bathroom="item.bathroom"
              :use_status="item.use_status"
              :age_biulding="item.age_biulding"
              :urlHelper="item.urlHelper"
            ></HouseCard1>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
<!--      </client-only>-->
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
    };
  },
  methods: {
    Search_advanced() {
      var province = null;
      var city = null;
      var neighbourhood = null;
      this.$router.push(this.localePath({
        path: 'search', query: {
          province: province
          , city: city
          , neighbourhood: neighbourhood
          , search: null
          , type: null
        }
      }))
    }
  }
  ,
  props: {
    lst_estate: Array,
  }
}
</script>

<style scoped>

.Greenbtn{
  border: none;
  border-radius: 5px;
  font-size: 12px;
  background-image: linear-gradient(to left, #88c547, #43b5e2) !important;
}

.separator{
  background: #0ede9b;
  height: 3px;
  border-radius: 1rem;
}

.slider_1_detail{
  direction: rtl;
  box-shadow: 50px 0 42px -40px rgba(0, 0, 0, 0.2);
}

.suggest_1_title {
  height: 73px;
  font-size: 44px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: right;
  color: #000;
}

.suggest_1_desc{
  width: 346px;
  height: 114px;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: justify;
}

.suggest_1_btn{
  width: 237px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.house_slider_2_row{
  /*direction:rtl;*/
  margin:auto;
  padding:0;
  margin-bottom: 100px;
}

</style>
