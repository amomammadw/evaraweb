<template>
  <div class="container-fluid text-center" style="min-height: 100vh;margin-top: -10vh;" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">

    <div class="row top_header_color" :style="{ backgroundImage: 'url(' + require('@/assets/images/backgrounds/h2.jpg') + ')' }">
      <div class="row top_header_color"></div>
    </div>

    <!-- Title Box -->
    <div class="row main_header_title">
      <div class="col">
        <p class="header_bigtitle" v-bind:class="[{'Estedad_FD_Black' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Black' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('virtual_tour.title') }} </p>
        <p class="header_smalltitle" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('virtual_tour.desc') }} </p>
      </div>
    </div>

    <!-- Search Box -->
    <div class="row search_row">
      <div class="col"></div>

      <div class="col-9 center_search_col">
        <!-- Search Header -->
        <ul class="nav nav-tabs custom_tab_search" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" id="buy-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="buy" aria-selected="true">{{ $t('virtual_tour.search_header') }}</a>
          </li>
        </ul>

        <!-- Search body -->
        <div class="tab-content search_content_box" id="myTabContent">

          <!-- Search buy -->
          <div class="tab-pane fade show active" id="buy" role="tabpanel" aria-labelledby="buy-tab">
            <div class="row search_buy_top_row">

              <div class="col search_col_left_border text-right">
                <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 12px;" for="province_selector">{{ $t('index.city') }}</label>
                <v-select id="province_selector"
                          :options="lst_provinces"
                          :searchable="true"
                          :showDefaultOption="true"
                          :labelTitle="$t('index.choose')"
                          :labelSearchPlaceholder="$t('index.do_search')"
                          :labelNotFound="$t('index.no_result')"
                          v-model="selectedValue_sale_Province"
                          @input="fetch_city"
                />
              </div>

              <div class="col search_col_left_border text-right">
                <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 12px;" for="city_selector">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
                <v-select id="city_selector"
                          :options="lst_cities"
                          :searchable="true"
                          :showDefaultOption="true"
                          :labelTitle="$t('index.choose')"
                          :labelSearchPlaceholder="$t('index.do_search')"
                          :labelNotFound="$t('index.no_result')"
                          v-model="selectedValue_sale_city"
                          @input="fetch_neighbourhood"/>
              </div>

              <div class="col search_col_left_border text-right">
                <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 12px;" for="neigh_selector">{{ $t('index.neighborhood') }}</label>
                <v-select id="neigh_selector"
                          :options="lst_neighbourhood"
                          :searchable="true"
                          :showDefaultOption="true"
                          :labelTitle="$t('index.choose')"
                          :labelSearchPlaceholder="$t('index.do_search')"
                          :labelNotFound="$t('index.no_result')"
                          v-model="selectedValue_sale_neighbourhood" />
              </div>

              <div class="col search_col_left_border text-right">
                <!--                <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 12px;" for="address">{{ $t('index.address') }}</label>-->
                <input type="text" class="form-control address_search" style="margin-top: 15px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" @keyup.enter="do_search" v-model="sale_search" id="address" :placeholder="$t('index.address')">
              </div>

              <div class="col" style="padding-top: 12px;">
                <!--                <i @click="Search_advanced" class="fas fa-sliders-h setting_ico" :content="$t('index.adv_search')" v-tippy="{placement : 'bottom'}" ></i>-->
                <button type="button" class="btn btn-success search_btn" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" @click="do_search">{{ $t('index.search') }}</button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="col"></div>
    </div>

    <!-- Map -->
    <div class="row" style="margin: 20px auto;">
      <l-map class="leaflet_style" :zoom="leaflet_map.zoom" :center="leaflet_map.center">
        <l-tile-layer :url="leaflet_map.url" :attribution="leaflet_map.attribution"></l-tile-layer>
        <l-marker v-for="(star,inx) in leaflet_map.markers" :key="inx" :lat-lng="star">
          <l-popup>
            <div class="row">
              <HouseCard-map
                :id = "star.id"
                adv_sponser="false"
                :address="star.address"
                :project_id="star.project_id"
                :images="star.galleris"
                :title="star.title"
                :area_space="star.area_space_all"
                :floor="star.floor_number_title"
                :room="star.room_number_title"
                :price="star.prices[0].price_value"
                :price_unit="star.prices[0].unit_title"
                :is_viewed="star.is_use"
                :is_like="star.is_like"
                :is_ifram_360="star.is_ifram_360"
                :is_special="star.is_special"
                :is_matterport="star.is_matterport"
                :dealing_type="star.dealing_type"
                col="col"

                :land_use="star.land_use_sumery"
                :province="star.state"
                :neghbourhod="star.neghbourhod"
                :city="star.city"
                :bathroom="star.bathroom"
                :use_status="star.use_status"
                :age_biulding="star.age_biulding"
                :urlHelper="item.urlHelper"
              />
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      selectedValue_sale_Province: {},
      selectedValue_sale_city: {},
      selectedValue_sale_neighbourhood: {},
      sale_search: '',

      leaflet_map: {
        url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://evara.life">Evara</a> contributors',
        zoom: 7,
        center: [39.932155, 32.828176],
        markers: [],
      } ,
      lst_estate: [],
      selectedValue: '',
      lst_provinces: [],
      lst_cities: [],
      lst_neighbourhood: [],

      filter_price : [0,9999999],
      gross_space : [0,3000],
      order_by: 'newest',
      show_counter: 100,
      last_id: -1,
      pagination_counter: 1
    };
  }
  , methods: {
    gotopage(page) {
      this.$router.push(this.localePath({path: page}));
    }
    , newroute(page) {
      this.$router.push(this.localePath({path: page}));
    }
    , fetch_province() {

      this.$axios.$post('list_of_state', {
        language: this.$i18n.locale
      })
        .then((response) => {

          for (var i = 0; i < response.length; i++) {
            this.lst_provinces.push({
              value: parseInt(response[i].id), text: response[i].title
            })
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_city() {
      this.selectedValue_sale_city = [];
      if (typeof this.selectedValue_sale_Province.value === 'undefined') {
        this.lst_cities = [];
      } else {

        this.$axios.$post('list_of_city', {
          state_id: this.selectedValue_sale_Province.value,
          language: this.$i18n.locale
        })
          .then((response) => {

            this.lst_cities = [];
            for (var i = 0; i < response.length; i++) {
              this.lst_cities.push({
                value: parseInt(response[i].id), text: response[i].title
              })
            }
            // this.selectedValue_sale_city = this.lst_cities[0];
          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , fetch_neighbourhood() {
      this.selectedValue_sale_neighbourhood = [];
      if (typeof this.selectedValue_sale_city.value === 'undefined') {
        this.lst_neighbourhood = [];
      } else {

        this.$axios.$post('list_of_neghbourhod', {
          city_id: this.selectedValue_sale_city.value,
          language: this.$i18n.locale
        })
          .then((response) => {

            this.lst_neighbourhood = [];
            for (var i = 0; i < response.length; i++) {
              this.lst_neighbourhood.push({
                value: parseInt(response[i].id), text: response[i].title
              })
            }
            // this.selectedValue_sale_neighbourhood = this.lst_neighbourhood[0]
          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , do_search() {
      let formData = new FormData();

      if (typeof this.selectedValue_sale_Province.value !== 'undefined') {
        formData.append('state_id', this.selectedValue_sale_Province.value);
      }
      if ((typeof this.selectedValue_sale_city.value !== 'undefined') && (this.selectedValue_sale_city.value !== 0)) {
        formData.append('city_id', this.selectedValue_sale_city.value);
      }
      if ((typeof this.selectedValue_sale_neighbourhood.value !== 'undefined') && (this.selectedValue_sale_neighbourhood.value !== 0)) {
        formData.append('neghbourhod_id', this.selectedValue_sale_neighbourhood.value);
      }

      formData.append('language' , this.$i18n.locale)
      formData.append('token' , this.$storage.getUniversal('token'))
      formData.append('currency' , this.$storage.getUniversal('currency'))
      formData.append('last_id' , this.last_id)
      formData.append('pagination' , this.pagination_counter)
      formData.append('count' , this.show_counter)
      formData.append('ordering' , this.order_by)
      formData.append('price_min' , this.filter_price[0])
      formData.append('price_max' , this.filter_price[1])
      formData.append('gross_space_min' , this.gross_space[0])
      formData.append('gross_space_max' , this.gross_space[1])

      this.leaflet_map.markers = [];
      this.lst_estate = [];

      this.$axios.$post('advanced_search', formData)
        .then((response) => {
          if (response.length >= 1) {
            this.lst_estate = response[0].search;

            for (var i=0 ; i< this.lst_estate.length ; i++ ){
              var coordinate = this.lst_estate[i].coordinate.toString().split(",");

              this.leaflet_map.markers.push({
                lng: coordinate[1]
                , lat: coordinate[0]
                , id: this.lst_estate[i].id
                , title: this.lst_estate[i].title
                , address: this.lst_estate[i].state
                , area_space_all: this.lst_estate[i].area_space_all
                , galleris: this.lst_estate[i].galleris
                , prices: this.lst_estate[i].prices
                , is_use: this.lst_estate[i].is_use
                , is_like: this.lst_estate[i].is_like
                , is_ifram_360: this.lst_estate[i].is_ifram_360
                , is_matterport: this.lst_estate[i].is_matterport
                , is_special: this.lst_estate[i].is_special
                , dealing_type: this.lst_estate[i].dealing_type
                , floor_number_title: this.lst_estate[i].floor_number_title
                , room_number_title: this.lst_estate[i].room_number_title
                , land_use: this.lst_estate[i].land_use_sumery
                , province: this.lst_estate[i].state
                , neghbourhod: this.lst_estate[i].neghbourhod
                , city: this.lst_estate[i].city
              })

              this.last_id = this.lst_estate[i].id;
              // window.scrollTo(0, 0);
            }
            this.leaflet_map.center = this.lst_estate[0].coordinate.toString().split(",");

            this.all_result_counter = this.lst_estate[0].count;
            this.last_id = this.lst_estate[0].id;

          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
  }
  , mounted: function () {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.fetch_province();
  }

  , head () {
    return {
      title: this.$t('siteTitle.virtualtour'),
      meta: [
        {
          hid: 'تور مجازی',
          name: 'تور مجازی',
          content: 'لذت لمس ملک مورد نظر خود در ترکیه را با تور مجازی تجربه کنید'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'تور مجازی',
        },{
          hid: 'og:description',
          property: 'og:description',
          content: 'لذت لمس ملک مورد نظر خود در ترکیه را با تور مجازی تجربه کنید',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.evara.life/thumb/og_test.jpg',

        }
      ]
    }
  }
}
</script>

<style scoped>
@import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

#address::-webkit-input-placeholder { /* Edge */
  font-size: 12px;
  color: #a4a4a4;
}

#address:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-size: 12px;
  color: #a4a4a4;
}

#address::placeholder {
  font-size: 12px;
  color: #a4a4a4;
}

#address2::-webkit-input-placeholder { /* Edge */
  font-size: 12px;
  color: #a4a4a4;
}

#address2:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-size: 12px;
  color: #a4a4a4;
}

#address2::placeholder {
  font-size: 12px;
  color: #a4a4a4;
}

.container-fluid{
  margin: auto;
  overflow: hidden;
  padding: 0;
}

.top_header_color {
  width: 100%;
  height: 500px;
  position: absolute;
  margin: auto;
  /*background-image: linear-gradient(to bottom, #00bb7e, #0ede9b);*/
  /*background-image: linear-gradient(to bottom, rgba(33, 109, 84, 0.9), rgba(33, 109, 84, 0.7));*/
  background-image: linear-gradient(to left, rgba(67, 181, 226, 0.9), rgba(136, 197, 71, 0.7));
  background-size: cover;
  background-position: center;
}

.main_header_title{
  color: white;
  padding-top: 100px;
}

.header_bigtitle {
  font-size: 44px;
  font-weight: 900;
  padding-bottom: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  color: var(--white);
  direction: rtl;
}

.header_smalltitle  {
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  direction: rtl;
  margin: auto;
  width: 65%;
  line-height: 30px;
}

.search_row{
  margin-top: 50px;
  height: 210px;
}

.search_content_box {
  /*width: 777px;*/
  height: 85px;
  border-radius: 15px;
  border-top-right-radius: 0px;
  /*box-shadow: 0 0 10px 0 #00bb7e29;*/
  background-color: var(--white);

  -webkit-box-shadow: 0px 10px 80px -20px rgba(0, 187, 125, 0.72);
  -moz-box-shadow:0px 10px 80px -20px rgba(0, 187, 125, 0.72);
  box-shadow: 0px 10px 80px -20px rgba(0, 187, 125, 0.72);
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {
  color: #fff;
  background-color: #b1b1b1;
  margin-left: 4px;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .nav-item {
  margin-bottom: 0px;
}

.custom_tab_search{
  border-bottom: none;
  padding-right: 0;
}

.center_search_col{
  direction: rtl;
  /*box-shadow: 0 0 10px 0 #00bb7e29;*/
}

.search_col_left_border{
  border-left: solid 2px #e9e9e9;
}

.search_buy_top_row{
  height: 70px;
  margin: auto;
  padding-top: 10px;
}

.search_select_input option{
  font-size:14px ;
  font-family: 'Estedad-Bold' !important;
}

.address_search{
  width: 266px;
  height: 31px;
  border-radius: 5px;
  background-color: #f1f1f1;
  border: none;
}

.search_btn{
  width: 101px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: -5px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.leaflet_style{
  height: 700px;
  width: 100%;
  /*z-index: -1;*/
}


</style>
