<template>

  <div class="container-fluid text-center mt-5" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="margin-bottom: 40px;">


    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-1 separator"></div>
      <div class="col"></div>
    </div> <!--Separator-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <span class="master_title" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"> {{$t('index.why_evara_title')}} </span>
      </div>
      <div class="col"></div>
    </div> <!--Title-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <p class="master_desc text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
          {{$t('index.why_evara_desc')}}
        </p>
      </div>
      <div class="col"></div>
    </div> <!--Desc-->

    <!--Row One-->
    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>

      <div class="col-4">
        <IndexInfo-item type="2" :title="$t('index.view_interior')" :desc="$t('index.view_interior_desc')"/>
      </div>

      <div class="col-4">
        <IndexInfo-item type="1" :title="$t('index._3d_view')" :desc="$t('index._3d_view_desc')"/>
      </div>

      <div class="col"></div>
    </div>

    <!--Row Two-->
    <div class="row" style="margin-top: 30px;">

      <div class="col-4">
        <IndexInfo-item style="margin-top: 150px;" type="4" :title="$t('index.new_generation')" :desc="$t('index.new_generation_desc')"/>
      </div>

      <div class="col large_center_image" :style="{ backgroundImage: 'url(' + require('@/assets/images/sample_building/3d_house.png') + ')' }">
      </div>

      <div class="col-4">
        <IndexInfo-item style="margin-top: 150px;" type="3" :title="$t('index.no_middleman')" :desc="$t('index.no_middleman_desc')"/>
      </div>
    </div>

    <!--Row Three-->
    <div class="row" style="margin-top: 80px;">
      <div class="col"></div>

      <div class="col-4">
        <IndexInfo-item type="6" :title="$t('index.local_price')" :desc="$t('index.local_price_desc')"/>
      </div>

      <div class="col-4">
        <IndexInfo-item type="5" :title="$t('index.no_commission')" :desc="$t('index.no_commission_desc')"/>
      </div>

      <div class="col"></div>
    </div>


    <div class="row" style="margin-top: 100px;">
      <div class="col"></div>
      <div class="col-3">
        <button type="button" @click="gotopage('virtualtour')" class="btn btn-success" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
          <img alt="EVARA"  :src="require(`@/assets/images/evara_icon/panorama.png`)" class="ico_in_btn">
          {{ $t('index.istanbul_tour') }}
        </button>
      </div>
      <div class="col"></div>
    </div> <!--Separator-->


  </div>


</template>

<script>
export default {
  methods: {
    gotopage(page) {
      this.$router.push(this.localePath({path: page}));
    },
  }
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

.ico_in_btn{
  width: 18.5px;
  height: 18px;
  margin-left: 10px;
}

.large_center_image{
  height: 350px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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
