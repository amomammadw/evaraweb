<template>

  <div class="container-fluid text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="margin-bottom: 70px;">


    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-1 separator"></div>
      <div class="col"></div>
    </div> <!--Separator-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <span class="master_title" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]"> {{ $t('index.last_submit_estate') }} </span>
      </div>
      <div class="col"></div>
    </div> <!--Title-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <p class="master_desc" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
          {{ $t('index.last_submit_estate_desc') }}
        </p>
      </div>
      <div class="col"></div>
    </div> <!--Desc-->

    <div class="row m-auto" style="direction: rtl;">
      <HouseCard1
        v-for="item in lst_estate.slice(0,50)"
        :key="item.id"
        :estate_id="item.id"
        :project_id="item.project_id"
        :address="item.state + ' | ' + item.city"
        :title="item.title"
        :price="item.prices[0].price_value"
        :price_unit="item.prices[0].unit_title"
        :images="item.galleris"
        :properties="item.properties"
        :is_viewed="item.is_use"
        :area_space="item.area_space_all"
        :floor="item.floor_number_title"
        :room="item.room_number_title"
        :is_like="item.is_like"
        :is_ifram_360="item.is_ifram_360"
        :is_matterport="item.is_matterport"
        :is_special="item.is_special"
        :land_use="item.land_use_sumery"
        :province="item.state"
        :neghbourhod="item.neghbourhod"
        :city="item.city"
        radius="none"
        :bathroom="item.bathroom"
        :use_status="item.use_status"
        :age_biulding="item.age_biulding"
        :urlHelper="item.urlHelper"
      ></HouseCard1>
    </div>

    <div class="row" style="margin-top: 50px;">
      <div class="col"></div>
      <div class="col-3">
        <button type="button" class="btn btn-success" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" @click="more">
          {{ $t('index.last_submit_estate_btn') }}
        </button>
      </div>
      <div class="col"></div>
    </div> <!--Btn More-->

  </div>


</template>

<script>
export default {
data() {
    return {
    };
  }
  ,props: {
    lst_estate:Array,
  },
  methods:{
    more(){
      this.$emit('more', 'from_suggestions');
    }
  },
}
</script>

<style scoped>

.container-fluid{
  padding-right: 15px;
  padding-left: 15px;
}

.btn{
  width: 253px;
  height: 48px;
  border-radius: 8px;
  border: none;
  margin-top: -5px;
  direction: rtl;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.separator{
  background: #0ede9b;
  height: 3px;
  border-radius: 1rem;
}

.master_title{
  font-size: 44px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.master_desc{
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}
</style>
