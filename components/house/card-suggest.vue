<template>

  <div class="col mb-5 p-0" @click="gotopage" style="cursor:pointer;" v-bind:class="[(is_viewed == '1' ? 'viewed_depricate': ' ')]">
    <div class="row">

      <div class="col-5">
        <div class="card-image" v-if="(typeof images !== 'undefined') && (images.length === 0) " :style="{ backgroundImage: 'url(' + require('@/assets/images/sample_building/no-image.jpg') + ')' }"></div>
<!--        <div class="card-image" v-if="(typeof images !== 'undefined') && (images.length > 0) " :style="{ backgroundImage: 'url(' + images[0].img + ')' }" > </div>-->
        <img v-if="(typeof images !== 'undefined') && (images.length > 0) " :src="images[0].img" class="card-image" style="object-fit: contain;">
        <div v-if="project_id != '0'" v-bind:class="[{'sale_right' : radius == 'right' },{'sale_left' : radius == 'left'}]" class="sale_badge" style="margin-bottom: 5px;" > {{$t('house_card.project')}} </div>
      </div>

      <div class="col" style="padding-right: 0;padding-left: 0">
        <h6 class="card-title"  v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]"> {{post_title}} </h6>
        <h6 class="card-subtitle mb-2 text-muted"> {{address}} </h6>
        <p v-if="price != 'undefined'" class="card-text card-price">{{ price | numeral('0,0') }} {{price_unit}}</p>
        <p v-if="price == 'undefined'" style="font-size: 14px;padding-top: 15px;margin-bottom: auto;" class="card-text card-price">{{$t('house_card.adaptive')}}</p>

        <div class="row" style="direction: rtl">
          <div class="col footer_col" v-if="properties[0] !== null && properties.length > 0">
            <svg xmlns="http://www.w3.org/2000/svg" width="14.831" height="10.112"  class="footer_icon" style="margin-top: 8px;" viewBox="0 0 14.831 10.112">
              <path id="prefix__bed" fill="#bbb" d="M5.045 9.893a2.022 2.022 0 1 0-2.023-2.022 2.022 2.022 0 0 0 2.023 2.022zm0-2.7a.674.674 0 1 1-.674.674.674.674 0 0 1 .674-.667zm8.764-1.348H8.415a.674.674 0 0 0-.674.674v4.045H2.348v-5.39a.674.674 0 0 0-1.348 0v8.763a.674.674 0 0 0 1.348 0v-2.022h12.134v2.022a.674.674 0 0 0 1.348 0V7.871a2.022 2.022 0 0 0-2.022-2.023zm.674 4.719H9.089V7.2h4.719a.674.674 0 0 1 .674.674z" transform="translate(-1 -4.5)"/>
            </svg>
            <span class="footer_label"> {{room}} {{$t('house_card.bedroom')}}</span>
          </div>
          <div class="col footer_col" v-if=" properties[1] !== null && properties.length > 0  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.601" height="12.122" class="footer_icon" viewBox="0 0 12.601 12.122">
              <path id="prefix__icons8_parking_and_2nd_floor" fill="#bbb" stroke="#bbb" stroke-width="0.9px" d="M7.945 3a.267.267 0 0 0-.048.008L2.8 4.283a.255.255 0 1 0 .124.494l.448-.112v1.65h.51V4.538l4.081-1.02 4.081 1.02v4.439h.568l-.062-4.312.45.112a.255.255 0 1 0 .124-.494l-5.1-1.275A.242.242 0 0 0 7.945 3zM3.368 6.235v2.63h.51v-2.63zm8.672.59v.51h.51v-.51zm-8.672 1.02v.51h.51v-.51zm8.672 0v.51h.51v-.51zm-9.915 1.02v.51h1.243v4.591a.256.256 0 0 0 .255.255H12.3a.256.256 0 0 0 .255-.255v-4.59h1.275v-.51zm1.753.51h8.162v4.336H3.878z" transform="translate(-1.675 -2.549)"/>
            </svg>
            <span class="footer_label">{{ floor }} {{$t('house_card.floor')}}</span>
          </div>
          <div class="col footer_col">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.909" height="11.909" class="footer_icon" viewBox="0 0 11.909 11.909">
              <path id="prefix__icons8_surface" fill="#bbb" d="M2.764.5L1 2.264l1.764 1.765V2.705h4.411v1.324L8.94 2.264 7.175.5v1.323H2.764zm-.441 3.97A1.328 1.328 0 0 0 1 5.793v5.293a1.328 1.328 0 0 0 1.323 1.323h5.293a1.328 1.328 0 0 0 1.324-1.323V5.793A1.328 1.328 0 0 0 7.616 4.47zm8.822 0L9.381 6.234H10.7v4.411H9.381l1.764 1.764 1.764-1.764h-1.323V6.234h1.323zm-8.822.882h5.293a.435.435 0 0 1 .441.441v5.293a.435.435 0 0 1-.441.441H2.323a.435.435 0 0 1-.441-.441V5.793a.435.435 0 0 1 .441-.441z" transform="translate(-1 -.5)"/>
            </svg>
            <span class="footer_label">{{area_space}} {{$t('house_card.meter')}}</span>
          </div>
        </div>

        <div class="row mt-1" style="direction: rtl;">
          <div class="col footer_col">
            <img alt="EVARA"  :src="require(`@/assets/images/evara_icon/ico_sell_or_buy.jpg`)" style="height: 20px;width: auto;" class="footer_icon">
            <span class="footer_label" style="margin-top: 10px;"> {{use_status}} </span>
          </div>

          <div class="col footer_col">
            <img alt="EVARA"  :src="require(`@/assets/images/evara_icon/ico_bath.jpg`)" style="height: 20px;width: auto;" class="footer_icon">
            <span class="footer_label" style="margin-top: 10px;"> {{bathroom}} {{$t('house_card.bathroom')}}</span>
          </div>

          <div class="col footer_col">
            <img alt="EVARA"  :src="require(`@/assets/images/evara_icon/ico_history.jpg`)" style="height: 20px;width: auto;" class="footer_icon">
            <span class="footer_label" style="margin-top: 10px;"> {{age_biulding}} {{$t('house_card.age_biulding')}}</span>
          </div>
        </div>
      </div>

    </div>


  </div>

</template>

<script>
export default {
  props: {
    images:Array,
    price: Number,
    price_unit: String,
    project_id: String,
    title: String,
    address: String,
    estate_id: String,
    room: String,
    floor: String,
    area_space: String,
    is_special: Number,
    is_viewed: Number,
    is_like: Number,
    is_matterport: Number,
    is_ifram_360: Number,
    properties: Array,


    land_use: String,
    province: String,
    neghbourhod: String,
    city: String,
    radius: String,
    bathroom: String,
    use_status: String,
    age_biulding: String,
    urlHelper: String,
  }
  , data() {
    return {

    };
  }
  , methods:{
    gotopage() {
      console.log('Click House : ' , this.urlHelper)

      this.$ga.event({
        eventCategory: 'Houses',
        eventAction: 'viewHouse',
        eventLabel: this.urlHelper,
        eventValue: this.estate_id
      })

      this.$gtm.push({ event: 'Houses-gtm' })

      var estate_title = this.urlHelper.replace('+', '-');
      let routeData = this.$router.resolve(this.localePath({ path: '/detail/'+this.estate_id + '.' + estate_title }));
      window.open(routeData.href, '_blank');
    },
    gotopage_3d() {
      this.$ga.event({
        eventCategory: 'Houses',
        eventAction: 'click',
        eventLabel: this.urlHelper,
        eventValue: this.estate_id
      })

      var estate_title = this.urlHelper.replace('+', '-');
      let routeData = this.$router.resolve(this.localePath({ path: '/detail/'+this.estate_id + '.' + estate_title , query: { show_3d_view: 1 } }));
      window.open(routeData.href, '_blank');
    },
    gotopage_bird_view() {
      this.$ga.event({
        eventCategory: 'Houses',
        eventAction: 'click',
        eventLabel: this.urlHelper,
        eventValue: this.estate_id
      })

      var estate_title = this.urlHelper.replace('+', '-');
      let routeData = this.$router.resolve(this.localePath({ path: '/detail/'+this.estate_id + '.' + estate_title , query: { show_birds_view: 1 } }));
      window.open(routeData.href, '_blank');
    },
  }
  , computed: {
    post_title: function () {
      var txt = '';
      var z = 0;
      if(this.title !== ''){
        for (var i = 0 ; i < this.title.toString().length;i++){
          txt += this.title[i];
          if (i === 30){
            txt += ' ... ';
            break;
          }
        }
      }
      return txt;
    }
  }
}
</script>

<style scoped>
.cls-03{fill:none;stroke:#fff;stroke-width:.8px}

.sale_badge{
  width: 54px;
  height: 24px;
  border-radius: 12px;
  background-color: #e2e2e2;
  font-family: Estedad;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  padding-top: 2px;
  color: #1d1e18;
  position: absolute;
  top: 10px;

}

.sale_right{
  right: 20px;
}

.sale_left{
  left: 20px;
}

.house_col{
  transition: all .3s;
  cursor: pointer;
  padding: 0;
  margin: 50px auto;
  margin-left: 20px;
}

.house_col:hover{
  opacity: 1;
}

.viewed{
  opacity: .7;
}

.dark_icon{
  transition: all .3s;
  cursor: pointer;
  position: absolute;
  top: 45px;
  left: 20px;
  width: 38px;
  height: 38px;
  opacity: 0.6;
  border-radius: 8px;
  background-color: #00bb7e;
}

.dark_icon:hover{
  opacity: 1;
}

.dark_ico{
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-top: 8px;
}

.row{
  margin: auto;
  padding: 0px;
}

.pico_card{
  border-radius: 0;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 10px;
  border: none;
  /*margin: 0 !important;*/
}

.pico_left_card{
  border-radius: 0;
  border-top-left-radius: 50% !important;
  border-top-right-radius: .7rem !important;
  padding: 10px;
  border: none;
}

.pico_right_card{
  border-radius: 0;
  border-top-right-radius: 50% !important;
  border-top-left-radius: .7rem !important;
  padding: 10px;
  border: none;
}


.detail_card{
  border-top: none;
  width: 374.5px;
  background-color: #fff;
  border-radius: 0;
  border-bottom-left-radius: .7rem;
  border-bottom-right-radius: .7rem;
  box-shadow: 0 10px 20px 0 #0000001a;
  border: none;
}

.card-image{
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #21282e;
  border-radius: 0.5rem;
}

.card-title{
  text-align: center;
  color: #1d1e18;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  margin-top: -5px;
  letter-spacing: normal;
}

.card-subtitle{
  text-align: center;
  height: 23px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
}

.card-price{
  text-align: center;
  color: #00bb7e;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: normal;
  direction: rtl;
}

.card-footer{
  background: #fff;
  border-bottom-left-radius: .7rem;
  border-bottom-right-radius: .7rem;
}

.footer_col{
  padding-right: 5px;
  padding-left: 5px;
}

.footer_icon {
  /*width: 26.6px !important;*/
  /*height: 18.2px;*/
  display: inline !important;
  object-fit: contain;
  margin-top: 7px;
  float: right;
}

.footer_label {
  height: 25px;
  font-size: 9px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #bbbbbb;
  margin-top: 5px;
  margin-right: 5px;
  float: right;
}
</style>
