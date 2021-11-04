<template>

    <div class="col house_col" v-bind:class="[ (is_viewed === '1' ? 'viewed_depricate': ' ') , (is_viewed === 1 ? 'viewed_depricate': ' ')]" >
      <div class="row" v-if="radius != 'none'"  v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
        <div class="card m-auto" v-bind:class="[{'pico_left_card' : radius == 'right' },{'pico_right_card' : radius == 'left'}]" style="width: 22rem;box-shadow: 0 0 40px 0 #0000001a;">

          <div class="card-image" v-bind:class="[{'pico_left_card' : radius == 'right' },{'pico_right_card' : radius == 'left'}]" @click="gotopage"  v-if="(typeof images !== 'undefined') && (images.length === 0) " :style="{ backgroundImage: 'url(' + require('@/assets/images/sample_building/no-image.jpg') + ')' }"></div>
<!--          <div class="card-image" v-bind:class="[{'pico_left_card' : radius == 'right' },{'pico_right_card' : radius == 'left'}]" @click="gotopage"  v-if="(typeof images !== 'undefined') && (images.length > 0) " :style="{ backgroundImage: 'url(' + images[0].img + ')' }" > </div>-->
          <img v-if="(typeof images !== 'undefined') && (images.length > 0)" v-bind:class="[{'pico_left_card' : radius == 'right' },{'pico_right_card' : radius == 'left'}]" :src="images[0].img" class="card-image" style="object-fit: cover;" @click="gotopage" >

<!--          <div class="card-image" v-bind:class="[{'pico_left_card' : radius == 'right' },{'pico_right_card' : radius == 'left'}]" @click="gotopage"  v-if="(typeof images !== 'undefined') && (images.length === 0) " :lazy-background="require('@/assets/images/sample_building/no-image.jpg')"></div>-->
<!--          <div class="card-image" v-bind:class="[{'pico_left_card' : radius == 'right' },{'pico_right_card' : radius == 'left'}]" @click="gotopage"  v-if="(typeof images !== 'undefined') && (images.length > 0) " :lazy-background="images[0].img" > </div>-->

          <div v-if="project_id != '0'" v-bind:class="[{'sale_right' : radius == 'right' },{'sale_left' : radius == 'left'}]" class="sale_badge" style="margin-bottom: 5px;" > {{$t('house_card.project')}} </div>
        </div>
      </div>

      <div class="row" v-if="radius == 'none'">
        <div class="card pico_card m-auto" style="width: 22rem;box-shadow: 0 0 40px 0 #0000001a;">
          <div v-if="is_special === 1" v-bind:class="[{'sale_right' : radius == 'right' },{'sale_left' : radius == 'left'}]" class="sale_badge" style="margin-bottom: 5px;" > {{$t('house_card.special_adv')}} </div>
<!--          <div v-if="is_special === 1" class="special_badge"> {{$t('house_card.special_adv')}} </div>-->
          <div class="card-image" @click="gotopage"  v-if="(typeof images !== 'undefined') && (images.length === 0) " :style="{ backgroundImage: 'url(' + require('@/assets/images/sample_building/no-image.jpg') + ')' }"></div>
<!--          <div class="card-image" @click="gotopage"  v-if="(typeof images !== 'undefined') && (images.length > 0) " :style="{ backgroundImage: 'url(' + images[0].img + ')' }" > </div>-->
          <img v-if="(typeof images !== 'undefined') && (images.length > 0) " :src="images[0].img" class="card-image" style="object-fit: cover;" @click="gotopage" >

<!--          <div class="card-image" @click="gotopage" v-if="(typeof images !== 'undefined') && (images.length === 0) " :lazy-background="require('@/assets/images/sample_building/no-image.jpg')"></div>-->
<!--          <div class="card-image" @click="gotopage" v-if="(typeof images !== 'undefined') && (images.length > 0) " :lazy-background="images[0].img" > </div>-->

        </div>
      </div>

<!--      <div class="row"> <div class="col-12" >TEST META : <nuxt-link :to="'/estate/'+estate_id"> Show Me </nuxt-link> </div> </div>-->

      <div class="row" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" @click="gotopage" >
        <div class="card detail_card m-auto" style="width: 22rem;">
          <div class="card-body" style="direction: rtl;    min-height: 21vh;">
            <div v-if="is_ifram_360 === 1" style="padding-top: 5px" class="dark_icon text-center" :content="$t('house_card.birds_eye')" v-tippy="{placement : 'right'}" @click="gotopage_bird_view">
              <svg xmlns="http://www.w3.org/2000/svg" class="More_icon" style="margin-right: -2px;margin-top: 2px;" width="22.484" height="20.905" viewBox="0 0 49.484 42.905">
                <g id="noun_Bird_3052320" transform="translate(-606.405 -247.277)">
                  <g id="Group_2685" data-name="Group 2685" transform="translate(606.824 247.68)">
                    <g id="Group_2684" data-name="Group 2684">
                      <g id="Group_2683" data-name="Group 2683">
                        <path id="Path_2147" d="M27.1 30.912c-7.2-3.835-12.3-9.541-19.672-18.386-5.668 14.983 5.46 23.889 12.814 27.939z" class="cls-03" data-name="Path 2147" transform="translate(-5.4 -11.738)"/>
                        <path id="Path_2148" d="M27.917 55.337l8.328-9.027a14.925 14.925 0 0 0 2.325-4.271 5.77 5.77 0 0 0 .249-1.28c.026-.511-.1-.723-.207-.812a.39.39 0 0 0-.071-.045l-.027-.011a.544.544 0 0 0-.075-.026l-.042-.009a.856.856 0 0 0-.1-.013h-.136c-.048 0-.1.006-.156.015-.036.005-.075.013-.114.021-.06.012-.126.029-.2.048-.045.012-.091.026-.141.042-.081.026-.171.061-.264.1-.05.019-.1.036-.149.058-.152.065-.316.14-.5.234a14.5 14.5 0 0 0-3.808 3.192l-7.151 9.965a.268.268 0 0 1-.077.071l-6.515 4.022c-1.288.795-1.91 1.19-1.982 1.477-.214.855.89 2.474 2.685 3.938s3.6 2.215 4.394 1.834c.267-.128.528-.817 1.047-2.239l2.626-7.192a.272.272 0 0 1 .061-.092z" class="cls-03" data-name="Path 2148" transform="translate(-10.549 -24.282)"/>
                        <path id="Path_2149" d="M46.119 52.859L38.146 61.5c5.449 6.386 16.415 15.49 29.948 6.919-10.15-5.437-16.767-9.282-21.975-15.56z" class="cls-03" data-name="Path 2149" transform="translate(-20.223 -30.262)"/>
                        <path id="Path_2150" class="cls-03" d="M53.524 48.972c-10.361-5.547-17.059-9.389-22.283-15.721.067-.1.125-.183.188-.275s.143-.207.209-.306c.078-.117.151-.229.224-.342.062-.095.125-.191.183-.283.07-.111.135-.218.2-.325.052-.086.108-.174.157-.258.064-.109.122-.213.18-.317.043-.077.089-.155.129-.23.058-.108.11-.213.163-.317.034-.067.07-.135.1-.2.053-.109.1-.215.147-.321.025-.057.054-.116.078-.172.049-.116.091-.229.134-.341.016-.043.036-.089.051-.131q.083-.232.149-.458c.4-1.381.359-2.249-.131-2.654s-1.317-.285-2.554.347q-.217.11-.433.239c-.041.024-.083.053-.125.078-.1.064-.208.128-.314.2-.043.029-.087.062-.13.092-.106.074-.212.148-.32.23l-.115.091c-.117.091-.235.183-.355.284l-.085.074c-.134.114-.271.232-.411.359l-.049.046c-.156.142-.316.293-.481.453-.313.3-.641.635-.994 1.008-7.255-3.84-12.369-9.622-19.891-18.657a.268.268 0 0 0-.455.072c-4.515 11.391.112 21.911 12.7 28.921l-6.129 3.782c-1.589.981-2.1 1.315-2.22 1.8-.329 1.316 1.338 3.237 2.866 4.483.14.114.287.227.436.34l.095.071c.146.108.3.214.448.316l.1.065c.147.1.3.193.447.283l.05.031c.159.095.32.183.48.267l.115.06c.159.081.317.156.474.223l.092.037c.15.062.3.117.443.164l.058.02a4.181 4.181 0 0 0 .457.114l.094.017a2.791 2.791 0 0 0 .429.041h.068a1.959 1.959 0 0 0 .281-.026l.089-.017a1.441 1.441 0 0 0 .309-.1c.454-.218.678-.783 1.318-2.538l2.469-6.761c5.9 6.845 12.517 10.345 19.161 10.344a21.244 21.244 0 0 0 11.725-3.74.268.268 0 0 0-.019-.459zm-46.5-37.116C14.4 20.7 19.5 26.407 26.7 30.243L19.838 39.8C12.484 35.745 1.356 26.839 7.024 11.856zM19.687 49.4c-.519 1.422-.78 2.111-1.047 2.239-.795.382-2.6-.372-4.394-1.834s-2.9-3.083-2.685-3.938c.072-.287.694-.682 1.982-1.477l6.515-4.022a.261.261 0 0 0 .077-.071l7.152-9.965a14.489 14.489 0 0 1 3.808-3.192c.183-.094.347-.169.5-.234.053-.023.1-.039.149-.058.093-.036.183-.071.264-.1.05-.016.1-.029.141-.042.069-.019.135-.036.2-.048.039-.008.078-.016.114-.021.057-.008.108-.012.156-.015h.136a.856.856 0 0 1 .1.013l.042.009a.544.544 0 0 1 .075.026l.027.011a.39.39 0 0 1 .071.045c.107.088.233.3.207.812a5.77 5.77 0 0 1-.249 1.28A14.939 14.939 0 0 1 30.7 33.1l-8.329 9.027a.273.273 0 0 0-.055.09zm3.236-7.094l7.977-8.641c5.2 6.279 11.82 10.123 21.97 15.564-13.532 8.571-24.498-.529-29.947-6.918z" data-name="Path 2150" transform="translate(-5 -11.068)"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div v-if="is_matterport === 1" class="dark_icon text-center" style="top: 90px" :content="$t('house_card.view_interior')" v-tippy="{placement : 'right'}" @click="gotopage_3d">
<!--              <img alt="EVARA"  :src="require(`@/assets/images/evara_icon/3d.png`)" class="dark_ico">-->
              <img alt="EVARA" :src="require(`@/assets/images/evara_icon/3d.png`)" v-lazy-load class="dark_ico">
            </div>
            <h5 class="card-title"  v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]"> {{post_title}} </h5>
            <h6 class="card-subtitle mb-2 text-muted"  v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]"> {{address}} </h6>
            <p v-if="price != 'undefined'" class="card-text card-price">{{ price | numeral('0,0') }} {{price_unit}}</p>
            <p v-if="price == 'undefined'" style="font-size: 14px;padding-top: 15px;margin-bottom: auto;" class="card-text card-price">{{$t('house_card.adaptive')}}</p>
          </div>
          <div class="card-footer text-muted">
            <div class="row" style="direction: rtl">
              <div class="col footer_col" v-if="properties[0] !== null && properties.length > 0   ">
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
                <!--              <img alt="EVARA"  :src="require(`@/assets/images/evara_icon/surface.png`)" class="footer_icon">-->
                <svg xmlns="http://www.w3.org/2000/svg" width="11.909" height="11.909" class="footer_icon" viewBox="0 0 11.909 11.909">
                  <path id="prefix__icons8_surface" fill="#bbb" d="M2.764.5L1 2.264l1.764 1.765V2.705h4.411v1.324L8.94 2.264 7.175.5v1.323H2.764zm-.441 3.97A1.328 1.328 0 0 0 1 5.793v5.293a1.328 1.328 0 0 0 1.323 1.323h5.293a1.328 1.328 0 0 0 1.324-1.323V5.793A1.328 1.328 0 0 0 7.616 4.47zm8.822 0L9.381 6.234H10.7v4.411H9.381l1.764 1.764 1.764-1.764h-1.323V6.234h1.323zm-8.822.882h5.293a.435.435 0 0 1 .441.441v5.293a.435.435 0 0 1-.441.441H2.323a.435.435 0 0 1-.441-.441V5.793a.435.435 0 0 1 .441-.441z" transform="translate(-1 -.5)"/>
                </svg>
                <span class="footer_label">{{area_space}} {{$t('house_card.meter')}}</span>
              </div>
            </div>
            <div class="row mt-1" style="direction: rtl">
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
    path: String,
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
        eventAction: 'click',
        eventLabel: this.urlHelper,
        eventValue: this.estate_id
      })

      this.$gtm.push({ event: 'Houses-gtm' })

      var estate_title = this.urlHelper.replace('+', '-');
      let routeData = this.$router.resolve(this.localePath({ path: '/detail/'+this.estate_id + '.' + estate_title}));
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
      let routeData = this.$router.resolve(this.localePath({ path: '/detail/'+this.estate_id + '.' + estate_title, query: { show_3d_view: 1 } }));
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
      let routeData = this.$router.resolve(this.localePath({ path: '/detail/'+this.estate_id + '.' + estate_title, query: { show_birds_view: 1 } }));
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
          if (i === 80){
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
  width: 75px;
  height: 25px;
  border-radius: 12px;
  background-color: rgb(226 226 226 / 71%);
  font-family: Estedad;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  padding-top: 3px;
  color: #1d1e18;
  position: absolute;
  top: 25px;
  right: 25px;
  padding-right: 5px;
  padding-left: 5px;
}

.sale_right{
  right: 30px;
}

.sale_left{
  left: 30px;
}

.house_col{
  transition: all .3s;
  /*box-shadow: 0 0 40px 0 #0000001a;*/
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
  height: 277.3px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  /*background-color: #21282e;*/
  background-color: #fff;
  border-radius: 1rem;
  /*border-top-left-radius: 50%;*/
}

.card-title{
  text-align: right;
  color: #1d1e18;
  /*height: 42px;*/
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  letter-spacing: normal;
}

.card-subtitle{
  text-align: right;
  height: 23px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
}

.card-price{
  text-align: right;
  color: #00bb7e;
  height: 35px;
  font-size: 16px;
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
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #bbbbbb;
  margin-top: 7px;
  margin-right: 5px;
  float: right;
}
</style>
