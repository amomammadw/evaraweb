<template>
      <div class="row m-auto" style="height:60vh;margin-bottom: 10vh !important;">

        <div class="row static-header" :style="{ backgroundImage: 'url(' + require('@/assets/images/backgrounds/h2.jpg') + ')' }">
        </div>

        <!-- BG Header -->
        <div class="bg-overlay header"></div>
        <!-- +++++++++ -->

        <!-- Title Box -->
        <div class="col-12 text-center" style="margin-top:23vh;color: #fff;">
          <p class="bigtitle"
             v-bind:class="[{'Estedad_FD_Black' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Black' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
            {{ $t('index.top_title') }}
          </p>
          <p class="smalltitle">
            {{ $t('index.top_detail') }}
          </p>
        </div>
        <!-- +++++++++ -->

        <!-- Search Box -->
        <div class="col-12">
          <div class="row">
            <div class="col"></div>
            <div class="col-9 search_row center_search_col">
              <!-- Search Header -->
              <ul class="nav nav-tabs custom_tab_search" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]" id="buy-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="buy" aria-selected="true">{{ $t('index.buy') }}</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" id="rent-tab" data-toggle="tab" href="#rent" role="tab" aria-controls="rent" aria-selected="false">{{ $t('index.rent') }}</a>
                </li>
              </ul>

              <!-- Search body -->
              <div class="tab-content search_content_box" id="myTabContent">

                <!-- Search buy -->
                <div class="tab-pane fade show active" id="buy" role="tabpanel" aria-labelledby="buy-tab">
                  <div class="row search_buy_top_row">

                    <div class="col search_col_left_border text-right">
                      <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="province_selector">{{ $t('index.city') }}</label>
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
                      <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="city_selector">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
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
                      <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="neigh_selector">{{ $t('index.neighborhood') }}</label>
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
                      <!--                <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="address">{{ $t('index.address') }}</label>-->
                      <input type="text" class="form-control address_search" style="margin-top: 15px;" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]" @keyup.enter="Search_buy" v-model="sale_search" id="address" :placeholder="$t('index.address')">
                    </div>

                    <div class="col text-center" style="padding-top: 12px;">
                      <button type="button" class="btn btn-success search_btn" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" @click="Search_buy">{{ $t('index.search') }}</button>
                    </div>

                  </div>
                </div>

                <!-- Search rent -->
                <div class="tab-pane fade" id="rent" role="tabpanel" aria-labelledby="rent-tab">
                  <div class="row search_buy_top_row">

                    <div class="col search_col_left_border text-right">
                      <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="province_selector2">{{ $t('index.city') }}</label>
                      <v-select id="province_selector2"
                                :options="lst_provinces"
                                :searchable="true"
                                :showDefaultOption="true"
                                :labelTitle="$t('index.choose')"
                                :labelSearchPlaceholder="$t('index.do_search')"
                                :labelNotFound="$t('index.no_result')"
                                v-model="selectedValue_rent_Province"
                                @input="fetch_rent_city"
                      />
                    </div>

                    <div class="col search_col_left_border text-right">
                      <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="city_selector2">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
                      <v-select id="city_selector2"
                                :options="lst_rent_cities"
                                :searchable="true"
                                :showDefaultOption="true"
                                :labelTitle="$t('index.choose')"
                                :labelSearchPlaceholder="$t('index.do_search')"
                                :labelNotFound="$t('index.no_result')"
                                v-model="selectedValue_rent_city"
                                @input="fetch_rent_neighbourhood"/>
                    </div>

                    <div class="col search_col_left_border text-right">
                      <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="neigh_selector2">{{ $t('index.neighborhood') }}</label>
                      <v-select id="neigh_selector2"
                                :options="lst_rent_neighbourhood"
                                :searchable="true"
                                :showDefaultOption="true"
                                :labelTitle="$t('index.choose')"
                                :labelSearchPlaceholder="$t('index.do_search')"
                                :labelNotFound="$t('index.no_result')"
                                v-model="selectedValue_rent_neighbourhood" />
                    </div>

                    <div class="col search_col_left_border text-right">
                      <!--                <label class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" style="font-size: 12px;" for="address2">{{ $t('index.address') }}</label>-->
                      <input type="text" class="form-control address_search " style="margin-top: 15px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]"  @keyup.enter="Search_rent" v-model="rent_search" id="address2" :placeholder="$t('index.address')">
                    </div>

                    <div class="col text-center" style="padding-top: 12px;">
                      <button type="button" class="btn btn-success search_btn" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]" @click="Search_rent">{{ $t('index.search') }}</button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <!-- +++++++++ -->

      </div>
</template>

<script>
export default {
  data() {
    return {
      i18_locale: this.$i18n.locale,

      selectedValue_sale_Province: {},
      selectedValue_sale_city: {},
      selectedValue_sale_neighbourhood: {},
      sale_search: '',

      selectedValue_rent_Province: {},
      selectedValue_rent_city: {},
      selectedValue_rent_neighbourhood: {},
      rent_search: '',

      province_options: [],
      selected_lang: "fa",
      lang_options: [
        {label: 'فارسی', code: 'fa'},
        {label: 'انگلیسی', code: 'en'},
        {label: 'ترکی', code: 'tr'},
        {label: 'عربی', code: 'ar'},
      ],

      login_content: true,
      register_content_stp1: true,
      register_content_stp2: true,
      register_content_stp3: true,

      register_with_mobile: false,

      register_email_value: '',
      register_mobile_value: '',
      register_mobile_subcode_value: '2',
      register_email_key: '',
      lgn_username: '',
      lgn_password: '',
      rgstr_user_id: '',
      rgstr_fname: '',
      rgstr_lname: '',
      rgstr_mobile: '',
      rgstr_username: '',
      rgstr_password: '',


      selectedValue: '',

      list_of_country: [] ,

      lst_provinces: [],
      lst_cities: [],
      lst_neighbourhood: [],

      lst_rent_cities: [],
      lst_rent_neighbourhood: [],


      params: {
        client_id: "AIzaSyCNdsrlnuh_0ZMWfVMs4VWnAU7eFz3V-bI"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },

      forgetpass_btn_stp_1: true,
      forgetpass_btn_stp_2: false,
      forgetpass_email: '',

      user: null,
      ui: null

    };
  }
  , methods: {
    fetch_province() {

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
    , fetch_rent_city() {
      this.selectedValue_rent_city = [];
      if (typeof this.selectedValue_rent_Province.value === 'undefined') {
        this.lst_rent_cities = [];
      } else {

        this.$axios.$post('list_of_city', {
          state_id: this.selectedValue_rent_Province.value,
          language: this.$i18n.locale
        })
          .then((response) => {

            this.lst_rent_cities = [];
            for (var i = 0; i < response.length; i++) {
              this.lst_rent_cities.push({
                value: parseInt(response[i].id), text: response[i].title
              })
            }

            // this.selectedValue_rent_city = this.lst_rent_cities[0];

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
    , fetch_rent_neighbourhood() {
      this.selectedValue_rent_neighbourhood = [];
      if (typeof this.selectedValue_rent_city.value === 'undefined') {
        this.lst_rent_neighbourhood = [];
      } else {

        this.$axios.$post('list_of_neghbourhod', {
          city_id: this.selectedValue_rent_city.value,
          language: this.$i18n.locale
        })
          .then((response) => {

            this.lst_rent_neighbourhood = [];
            for (var i = 0; i < response.length; i++) {
              this.lst_rent_neighbourhood.push({
                value: response[i].id, text: response[i].title
              })
            }

            // this.selectedValue_rent_neighbourhood = this.lst_rent_neighbourhood[0]

          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , fetch_list_of_country() {

      this.$axios.$post('list_of_country', {
        language: this.$i18n.locale,
      })
        .then((response) => {
          this.list_of_country = response;
          if (response[0].res === -5) {
            this.DestroyStorage();
            this.$router.push(this.localePath({name: 'index'}));
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , Search_buy() {

      var province = null;
      if (this.selectedValue_sale_Province !== null) province = this.selectedValue_sale_Province.value;

      var city = null;
      if (this.selectedValue_sale_city !== null) city = this.selectedValue_sale_city.value;

      var neighbourhood = null;
      if (this.selectedValue_sale_neighbourhood !== null) neighbourhood = this.selectedValue_sale_neighbourhood.value;

      this.$router.push(this.localePath({
        path: 'search', query: {
          province: province
          , city: city
          , neighbourhood: neighbourhood
          , search: this.sale_search
          // , type: 'buy'
          , type: 5
          , page: 1
          , order_by: 'newest'
          , min_price: 1
          , max_price: 9999999
          , min_space: 1
          , max_space: 6000
        }
      }))
    }
    , Search_rent() {

      var province = null;
      if (this.selectedValue_rent_Province !== null) province = this.selectedValue_rent_Province.value;

      var city = null;
      if (this.selectedValue_rent_city !== null) city = this.selectedValue_rent_city.value;

      var neighbourhood = null;
      if (this.selectedValue_rent_neighbourhood !== null) neighbourhood = this.selectedValue_rent_neighbourhood.value;


      this.$router.push(this.localePath({
        path: 'search', query: {
          province: province
          , city: city
          , neighbourhood: neighbourhood
          , search: this.rent_search
          // , type: 'rent'
          , type: 6
          , page: 1
          , order_by: 'newest'
          , min_price: 1
          , max_price: 9999999
          , min_space: 1
          , max_space: 6000
        }
      }))
    }
    , Search_advanced() {

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

    , DestroyStorage() {
      this.$storage.removeUniversal('user_id');
      this.$storage.removeUniversal('token');
      this.$storage.removeUniversal('name');
      this.$storage.removeUniversal('family');
      this.$storage.removeUniversal('email');
      this.$storage.removeUniversal('mobile');
      this.$storage.removeUniversal('username');

      this.auth();
    }
  }
  , mounted() {
    window.scrollTo(0, 0);
    this.fetch_province();
    this.fetch_list_of_country();
  }
  , beforeMount() {
  }
}
</script>

<style scoped>

@import "https://unpkg.com/vue-select@latest/dist/vue-select.css";

body{
  color: #212529 !important;
}

.static-header {
  width: 100vw;
  height: 60vh;
  position: absolute;
  margin: auto;
  color: #fff;
  /*background-image: linear-gradient(to bottom, #00bb7e, #0ede9b);*/
  background-image: linear-gradient(to bottom, rgba(33, 109, 84, 0.9), rgba(33, 109, 84, 0.7));
  background-size: cover;
  background-position: center;
}

.header {
  width: 100vw;
  height: 60vh;
  position: absolute;
  margin: auto;
  /*background-image: linear-gradient(to bottom, #00bb7e, #0ede9b);*/
  background-image: linear-gradient(to bottom, rgba(33, 109, 84, 0.9), rgba(33, 109, 84, 0.7));
  background-size: cover;
  background-position: center;
}

.bigtitle {
  font-size: 44px;
  font-weight: 900;
  padding-bottom: 30px;
  line-height: .98;
}

.smalltitle {
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin: auto;
  width: 65%;
  line-height: 30px;
}

.center_search_col {
  direction: rtl;
}

.custom_tab_search {
  border-bottom: none;
  padding-right: 0;
}

.search_content_box{
  height: 85px;
  border-radius: 15px;
  border-top-right-radius: 0;
  background-color: var(--white);
  -webkit-box-shadow: 0 10px 80px -20px rgb(0 187 125 / 72%);
  box-shadow: 0 10px 80px -20px rgb(0 187 125 / 72%);
}

.search_buy_top_row {
  height: 70px;
  margin: auto;
  padding-top: 10px;
}

.search_col_left_border {
  border-left: 2px solid #e9e9e9;
}

.search_btn{
  width: 101px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: -5px;
  background-image: -webkit-gradient(linear,right top,left top,from(#00bb7e),to(#0ede9b));
  background-image: linear-gradient(
    270deg
    ,#00bb7e,#0ede9b);
}

.address_search {
  width: 266px;
  height: 31px;
  border-radius: 5px;
  background-color: #f1f1f1;
  border: none;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {
  color: #fff;
  background-color: #b1b1b1;
  margin-left: 4px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.logo_type{height: 30px;position: relative;top: 7px;}

.logo_type_cls-1{fill:#fff;}

.prefix__cls-1{fill:#8b8b8b;stroke:#8b8b8b;stroke-width:.5px}

.prefix__cls-2{fill:none;stroke:#8b8b8b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}

.fix_login_menu_en{
  left: -55px !important;
}

.abs_logo_fa{
  position: absolute;
  top: -30px;
  right: 110px;
}

.abs_logo_fa img{
  right: 35px;
}

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

.evara_btn{
  background-image: linear-gradient(to left, #88c547 20%, #43b5e2);
}

.container-fluid{
  margin: auto;
  overflow: hidden;
  padding: 0;
}

.top_header {
  width: 100vw;
  padding-top: 40px;
  left: 0;
}

.top_header_color {
  width: 100%;
  height: 488px;
  position: absolute;
  margin: auto;
  /*background-image: linear-gradient(to bottom, #00bb7e, #0ede9b);*/
  background-image: linear-gradient(to bottom, rgba(33, 109, 84, 0.9), rgba(33, 109, 84, 0.7));
  background-size: cover;
  background-position: center;
}

.Evara_logo {
  width: 70px;
  height: 70px;
  top: 5px;
  position: relative;
  object-fit: contain;
}

.modal_image {
  width: 200px;
  height: 200px;
  top: 5px;
  position: relative;
  object-fit: contain;
}

.modal_p{
  line-height: 2;
  font-size: 12px;
  padding: 5px 50px;
}

.Evara_title {
  width: 110px;
  height: 47px;
  font-family: Septacharge;
  font-size: 45px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #0ddb98;
  margin-left: 55px;
}

.menu_item {
  /*width: 43px;*/
  /*height: 25px;*/
  /*font-family: Estedad;*/
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #a5a5a5;
}

.menu_item_active {
  /*width: 43px;*/
  /*height: 25px;*/
  /*font-family: Estedad;*/
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  border-bottom: solid 3px #0ede9b;
}

.btn_save_adv {
  transition: all .3s;
  width: 159px;
  height: 40px;
  border-radius: 8px;
  border: solid 2px #0ddb98;
  font-size: 15px;
  text-align: center;
  color: var(--white);
}

.btn_save_adv:hover {
  background-color: #0ddb98;
}

.main_header_title{
  color: white;
  padding-top: 65px;
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
  /*position: absolute;*/
  /*width: 100vw;*/
  /*bottom: -45px;*/
  /*color: #212529 !important;*/


  position: absolute;
  width: 80vw;
  margin-right: 10vw;
  bottom: -45px;
  color: #212529 !important;

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
  margin-bottom: 0 !important;
}

.nav-tabs .nav-link {
  margin-bottom: 0 !important;
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

.setting_ico {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  /*margin-left: 5px;*/
  cursor: pointer;
  object-fit: contain;
  color: #bbbbbb;
}

</style>
