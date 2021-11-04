<template>

  <div class="container-fluid text-center" v-bind:class="[{'persian_ltr' : $i18n.locale=='fa' || $i18n.locale=='ar' }]">

    <div class="row cl_custom_1" :style="{ backgroundImage: 'url(' + require('@/assets/images/services/img_1.jpg') + ')' }"  v-bind:class="{'text-left bg_right' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}">
      <div class="col"></div>
      <div class="col-6" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <p class="" style="font-size: 32px;margin-top: 200px" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('services.title_1') }} </p>
        <p class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('services.desc_1') }} </p>
        <button type="button" class="btn btn-success Yes_btn" @click="scroll_down"> {{ $t('services.btn_1') }} </button>
      </div>
    </div>

    <div class="row cl_custom_2" :style="{ backgroundImage: 'url(' + require('@/assets/images/services/img_2.jpg') + ')' }" v-bind:class="{'bg_right' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}" >
      <div class="col"></div>
      <div class="col-7" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <p class="" style="font-size: 32px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
          <span style="border-bottom: solid 4px #00bb7e">{{ $t('services.title_2') }} </span>
        </p>
        <p class="pt-2" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('services.desc_2') }} </p>
      </div>
    </div>

    <div class="row cl_custom_3" :style="{ backgroundImage: 'url(' + require('@/assets/images/services/img_3.jpg') + ')' }" >
      <div class="col"></div>
      <div class="col-7" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <p class="" style="font-size: 32px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
          <span style="border-bottom: solid 4px #00bb7e">{{ $t('services.title_3') }} </span>
        </p>
        <p class="pt-2" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
          {{ $t('services.desc_3') }}
        </p>
      </div>
      <div class="col-3" v-if="$i18n.locale=='fa' || $i18n.locale=='ar'"></div>
    </div>

    <div class="row cl_custom_4" :style="{ backgroundImage: 'url(' + require('@/assets/images/services/img_4.jpg') + ')' }" >
      <div class="col" v-if="$i18n.locale=='fa' || $i18n.locale=='ar'"></div>
      <div class=" col-8" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <p class="" style="font-size: 32px;margin-top: 70px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
          <span style="border-bottom: solid 4px #00bb7e">{{ $t('services.title_4') }} </span>
        </p>
        <p class="pt-2" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
          {{ $t('services.desc_4') }}
        </p>
      </div>
      <div class="col" v-if="$i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'"></div>
    </div>

    <div class="row mt-4">
      <div class="col" id="service_form" style="direction: rtl;padding: 10px 30px">

        <!-- عنوان بندی اول -->
        <!-- آدرس و مشخصات اصلی --> <!-- نقشه -->
        <div class="row">
          <div class="col-3 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="margin-top: 15px;">
            {{ $t('services.address_info') }}
          </div>
        </div>
        <div class="row"><div class="separator"> </div></div>
        <div class="row">
          <!-- آدرس و مشخصات اصلی -->
          <div class="col-12 col-xl-5 col-lg-5 text-right">

            <div class="form-group" style="margin-bottom: 1rem;" datatype="required">
              <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('index.city') }}</label>
              <select id="frm_province" class="form-control mgn_input select_custom" v-model="selected_items.province" @change="fetch_city">
                <option selected value="-1">  {{ $t('index.choose') }} </option>
                <option v-for="option in lst_provinces" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;" datatype="required">
              <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
              <select class="form-control mgn_input select_custom" v-model="selected_items.city" @change="fetch_neighbourhood">
                <option selected value="-1"> {{ $t('index.choose') }} </option>
                <option v-for="option in lst_cities" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;" datatype="required">
              <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('index.neighborhood') }}</label>
              <select class="form-control mgn_input select_custom" v-model="selected_items.neighbourhood" @change="fetch_alley">
                <option selected value="-1"> {{ $t('index.choose') }} </option>
                <option v-for="option in lst_neighbourhood" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">{{ $t('index.street') }}</label>
              <select class="form-control mgn_input select_custom" v-model="selected_items.slc_alley" @change="get_geofence">
                <option selected value="-1"> {{ $t('index.choose') }} </option>
                <option v-for="option in lst_alley" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('add_house.address') }}</label>
              <input type="text" class="form-control mgn_input" style="height: 100px;" :placeholder="$t('add_house.address_placeholder')" v-model="selected_items.address">
            </div>

            <!-- عنوان بندی دوم -->
            <div class="row">
              <div class="col-3 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="margin-top: 15px;">
                {{ $t('services.estate_info') }}
              </div>
            </div>
            <div class="row"><div class="separator"> </div></div>
            <div class="row" style="margin-bottom: 15px;">
              <div class="col text-right">

                <div class="form-row">
                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label Estedad_Bold" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('add_house.area_all') }}</label>
                    <input type="text" v-mask="'#####'" maxlength="5" class="form-control mgn_input"  v-model="selected_items.area_space_all">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('add_house.floor') }}</label>
                    <select class="form-control mgn_input select_custom" v-model="selected_items.floor">
                      <option selected value="-1"> {{ $t('search.select') }}</option>
                      <option v-for="option in list_floor_number" v-bind:value="option.id">
                        {{option.title}}
                      </option>
                    </select>
                  </div>
                </div>

              </div>
            </div>


            <!-- عنوان بندی سوم -->
            <!-- تلفن های تماس -->
            <div class="row">
              <div class="col-3 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="margin-top: 15px;">
                {{ $t('services.call_info') }}
              </div>
            </div>
            <div class="row"><div class="separator"> </div></div>
            <div class="row">
              <div class="col text-right">

                <div class="form-row">
                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">{{ $t('add_house.phone') }}</label>

                    <div class="input-group text-right mb-3">
                      <input type="text" class="form-control grouped_input" v-mask="'##########'"  v-model="selected_items.tel">
                      <div class="input-group-prepend">
                        <select class="form-control grouped_select" v-model="selected_items.phone_sub_code">
                          <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" v-for="opt in list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" datatype="required">{{ $t('add_house.mobile') }}</label>

                    <div class="input-group text-right mb-3">
                      <input type="text" class="form-control grouped_input input-price" v-mask="'##########'"  v-model="selected_items.mobile">
                      <div class="input-group-prepend">
                        <select class="form-control grouped_select" v-model="selected_items.mobile_sub_code">
                          <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" v-for="opt in list_of_country" :value="opt.id" > {{opt.area_code}} </option>

                        </select>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div class="col-1 text-right"></div>

          <!-- نقشه -->
          <div class="col-12 col-xl-6 col-lg-6 text-right">
            <div class="card" style="border-radius: 1.5rem;">
              <div class="card-body map_card">



                <client-only>
                  <l-map class="leaflet_style" :zoom="leaflet_map.zoom" :center="leaflet_map.center" @click="setPlace">
                    <l-tile-layer :url="leaflet_map.url"></l-tile-layer>
                    <l-marker :lat-lng="leaflet_map.markerLatLng" ></l-marker>
                    <l-polygon
                      :lat-lngs="leaflet_map.google_map_paths"
                      :color="leaflet_map.polygon.color"
                    />
                  </l-map>
                </client-only>


                <!-- Google -->
<!--                <GmapMap-->
<!--                  :options="{-->
<!--                               zoomControl: true,-->
<!--                               mapTypeControl: true,-->
<!--                               scaleControl: true,-->
<!--                               streetViewControl: true,-->
<!--                               rotateControl: true,-->
<!--                               fullscreenControl: true,-->
<!--                               disableDefaultUi: true-->
<!--                             }"-->
<!--                  :center="google_map_center"-->
<!--                  :zoom="8"-->
<!--                  class="leaflet_style"-->
<!--                  style="height: 100%"-->
<!--                  @click="setPlace"-->
<!--                >-->
<!--                  <GmapMarker-->
<!--                    :position="google_address_marker.addressLatLng"-->
<!--                    @click="center=m.position"-->
<!--                  />-->
<!--                  <gmap-polygon :paths="google_map_paths" @click="setPlace">-->
<!--                  </gmap-polygon>-->

<!--                </GmapMap>-->

              </div>
            </div>
            <div class="row"> <div class="col text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="color: #aeb1c1;font-size: 11px;margin-top: 15px;"> {{ $t('add_house.map_text_1') }} </div> </div>
          </div>
        </div>

        <!-- انتخاب امکانات -->
        <div class="row">
          <div class="col-3 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="margin-top: 15px;">
            {{ $t('services.services') }}
          </div>
        </div>
        <div class="row"><div class="separator"> </div></div>
        <div class="row">
          <div class="col-6 text-center">
            <div class="row">

              <div class="card add_image_card" v-bind:class="[{'add_image_card_active' : itm_3d === 1 } , {'add_image_card_active' : itm_3d === true }]" for="Check1">
                <div class="card-body">
                  <div class="custom-control custom-checkbox" style="position:absolute;top: 5px;right: 5px; cursor: pointer">
                    <input type="checkbox" class="custom-control-input" id="Check1" v-model="itm_3d">
                    <label class="custom-control-label" for="Check1"></label>
                  </div>
                  <div class="row">
                    <div class="col">
                      <img alt="EVARA"  v-if="itm_3d === false" :src="require(`@/assets/images/evara_icon/3d_grey.png`)" class="ico">
                      <img alt="EVARA"  v-if="itm_3d === true" :src="require(`@/assets/images/evara_icon/3d.png`)" class="ico">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('services.itm_3d') }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card add_image_card" v-bind:class="[{'add_image_card_active' : itm_tour === 1 } , {'add_image_card_active' : itm_tour === true }]" for="Check2">
                <div class="card-body">
                  <div class="custom-control custom-checkbox" style="position:absolute;top: 5px;right: 5px; cursor: pointer">
                    <input type="checkbox" class="custom-control-input" id="Check2" v-model="itm_tour">
                    <label class="custom-control-label" for="Check2"></label>
                  </div>
                  <div class="row">
                    <div class="col">
                      <img alt="EVARA"  v-if="itm_tour === false" :src="require(`@/assets/images/evara_icon/panorama_grey.png`)" class="ico">
                      <img alt="EVARA"  v-if="itm_tour === true" :src="require(`@/assets/images/evara_icon/panorama.png`)" class="ico">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('services.itm_tour') }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card add_image_card" v-bind:class="[{'add_image_card_active' : itm_bird === 1 } , {'add_image_card_active' : itm_bird === true }]" for="Check3">
                <div class="card-body">
                  <div class="custom-control custom-checkbox" style="position:absolute;top: 5px;right: 5px; cursor: pointer">
                    <input type="checkbox" class="custom-control-input" id="Check3" v-model="itm_bird">
                    <label class="custom-control-label" for="Check3"></label>
                  </div>
                  <div class="row">
                    <div class="col">
                      <img alt="EVARA"  v-if="itm_bird === false" :src="require(`@/assets/images/evara_icon/bird_grey.png`)" class="ico">
                      <img alt="EVARA"  v-if="itm_bird === true" :src="require(`@/assets/images/evara_icon/bird.png`)" class="ico">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('services.itm_bird') }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col"></div>
        </div>

        <!-- قوانین و مقررات -->
        <div class="row pt-3" style="margin: 25px 0;">
          <div class="col text-right">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck1" v-model='agrement'>
              <label class="custom-control-label" for="customCheck1"> </label>
              <span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="padding-right: 40px;">
                      {{ $t('services.offer_newsletter') }}
                    </span>
            </div>
          </div>
        </div>

        <!-- ثبت یا لغو -->
        <div class="row" style="margin-top: 15px;margin-bottom: 60px;">
          <div class="col text-right">
            <button type="button" class="btn btn-success Yes_btn" @click="check_data"> {{ $t('services.btn_1') }} </button>
          </div>
        </div>


      </div>
    </div>

  </div>

</template>

<script>

export default {
  data() {
    return {
      page_static : {
        login_btn : true
      }
      , leaflet_map:{
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 12,
        center: [41.1029961, 28.9850657],
        markerLatLng: [41.1029961, 28.9850657],
        polygon: {
          latlngs: [
            [47.2263299, -1.6222],
          ],
          color: "#f44336"
        },
        hasmarker: false,
        addressLatLng: {},
        google_map_center: {lat: 39.932155, lng: 32.828176},
        google_map_paths: []
      }
      , processQueue: false
      , selected_items: {
        province: '-1'
        , dealing_type: '-1'
        , land_use: '-1'
        , estate_type: '-1'
        , city: '-1'
        , neighbourhood: '-1'
        , slc_alley: '-1'
        , mobile_sub_code: '2'
        , phone_sub_code: '2'
        , rooms: '-1'
        , floor: '-1'
        , address:''
        , street:''
        , alley:''
        , tel: ''
        , postal_code: ''
        , mobile: ''
        , area_space_all:''
        , area_space_real:''
        , ads_title:''
      }
      , lst_provinces: []
      , lst_cities: []
      , lst_neighbourhood: []
      , lst_alley: []
      , agrement : 0
      , file: ''
      , list_of_country: []
      , list_floor_number: []
      , itm_3d : false
      , itm_tour : false
      , itm_bird : false
    }
  }
  , methods: {
    auth() {
      // if (this.$session.exists()) {
      this.fetch_province();
      this.fetch_list_of_country();
      this.fetch_list_floor_number();
      // this.page_static.login_btn = false;
      // } else {
      //   this.page_static.login_btn = true;
      // this.newroute('evara_index');
      // }
    }
    , toEnglishDigits(str) {

      // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
      var e = '۰'.charCodeAt(0);
      str = str.replace(/[۰-۹]/g, function (t) {
        return t.charCodeAt(0) - e;
      });

      // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
      e = '٠'.charCodeAt(0);
      str = str.replace(/[٠-٩]/g, function (t) {
        return t.charCodeAt(0) - e;
      });
      return str;
    }
    , newroute(page) {
      this.$router.push(this.localePath({name: page}));
    }
    , fetch_province() {

      this.$axios.$post('list_of_state', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.lst_provinces = response;

          if (response[0].res === -5){
            this.$session.destroy();
            this.$router.push({name: 'evara_index'});
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_city() {
      this.selected_items.city = -1;
      this.lst_neighbourhood = [];
      this.lst_alley = [];
      if (this.selected_items.province === '-1') {
        this.lst_cities = [];
      } else {

        this.$axios.$post('list_of_city', {
          state_id: this.selected_items.province,
          language: this.$i18n.locale,
        })
          .then((response) => {


            this.lst_cities = response;

            if (response[0].res === -5){
              this.$session.destroy();
              this.$router.push({name: 'evara_index'});
            }
          })
          .catch((error) => {
            console.log(error);

          });
      }

      this.get_geofence();
    }
    , fetch_neighbourhood() {
      this.lst_alley = [];
      this.selected_items.neighbourhood = -1;
      if (this.selected_items.city === '-1') {
        this.lst_neighbourhood = [];
      } else {

        this.$axios.$post('list_of_neghbourhod', {
          city_id: this.selected_items.city,
          language: this.$i18n.locale,
        })
          .then((response) => {


            this.lst_neighbourhood = response;

            if (response[0].res === -5){
              this.$session.destroy();
              this.$router.push({name: 'evara_index'});
            }
          })
          .catch((error) => {
            console.log(error);

          });
      }

      this.get_geofence();
    }
    , fetch_alley() {
      this.selected_items.slc_alley = -1;
      if (this.selected_items.neighbourhood === '-1') {
        this.lst_alley = [];
      } else {

        this.$axios.$post('list_of_alley', {
          neghburhod_id: this.selected_items.neighbourhood,
          language: this.$i18n.locale,
        })
          .then((response) => {


            this.lst_alley = response;

            if (response[0].res === -5){
              this.$session.destroy();
              this.$router.push({name: 'evara_index'});
            }
          })
          .catch((error) => {
            console.log(error);

          });
      }

      this.get_geofence();
    }
    , fetch_unit_prices_type() {

      this.$axios.$post('list_of_units', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.lst_price_unit = response;

          if (response[0].res === -5){
            this.$session.destroy();
            this.$router.push({name: 'evara_index'});
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_list_of_country() {

      this.$axios.$post('list_of_country', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.list_of_country = response;

          if (response[0].res === -5){
            this.$session.destroy();
            this.$router.push({name: 'evara_index'});
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_list_floor_number() {

      this.$axios.$post('list_floor_number', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.list_floor_number = response;

          if (response[0].res === -5){
            this.$session.destroy();
            this.$router.push({name: 'evara_index'});
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_list_room_number() {

      this.$axios.$post('list_room_number', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.list_room_number = response;

          if (response[0].res === -5){
            this.$session.destroy();
            this.$router.push({name: 'evara_index'});
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , select_neighbourhood() {
      this.selected_items.neighbourhood = -1;
      this.leaflet_map.polygon.latlngs = [];

      for (var i = 0; i < this.lst_neighbourhood.length; i++) {
        if (this.lst_neighbourhood[i].id === this.selected_items.neighbourhood) {
          for (var k = 0; k < this.lst_neighbourhood[i].area.length - 1; k++) {
            var coor = this.lst_neighbourhood[i].area[k].coordinates.toString().split(",");
            this.leaflet_map.polygon.latlngs.push([coor[0], coor[1]]);
            if (k === 0) {
              this.leaflet_map.center = [coor[0], coor[1]];
              this.leaflet_map.zoom = 12;
            }
          }


        }
      }
    }
    , get_geofence() {

      this.leaflet_map.polygon.latlngs = [];

      var prvnc = '';
      var city = '';
      var neigh = '';
      var alley = '';

      var search_address = '';

      if (this.selected_items.province !== -1) {
        for (var z = 0; z < this.lst_provinces.length; z++) {
          if (this.selected_items.province === this.lst_provinces[z].id) {
            prvnc = this.lst_provinces[z].title;
            search_address += prvnc;
            break;
          }
        }
      }

      if (this.selected_items.city !== -1) {
        for (var z = 0; z < this.lst_cities.length; z++) {
          if (this.selected_items.city === this.lst_cities[z].id) {
            city = this.lst_cities[z].title;
            search_address += ' ' + city;
            break;
          }
        }
      }

      if (this.selected_items.neighbourhood !== -1) {
        for (var z = 0; z < this.lst_neighbourhood.length; z++) {
          if (this.selected_items.neighbourhood === this.lst_neighbourhood[z].id) {
            neigh = this.lst_neighbourhood[z].title;
            search_address += ' ' + neigh;
            break;
          }
        }
      }

      if (this.selected_items.slc_alley !== -1) {
        for (var z = 0; z < this.lst_alley.length; z++) {
          if (this.selected_items.slc_alley === this.lst_alley[z].id) {
            alley = this.lst_alley[z].title;
            search_address += ' ' + alley;
            break;
          }
        }
      }

      if (search_address != '') {
        this.$axios.$get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: search_address,
            format: 'geojson',
            polygon_geojson: 1,
            limit: 1,
            'accept-language': 'tr'
          }
        })
          .then((response) => {
            if (response.features.length > 0) {
              var geo_type = response.features[0].geometry.type;
              if (geo_type === 'Point') {
                var geo_loc = response.features[0].geometry.coordinates;
                this.leaflet_map.center = [geo_loc[1], geo_loc[0]];
                this.leaflet_map.google_map_center = {lat: geo_loc[1], lng: geo_loc[0]}
                this.leaflet_map.zoom = 12;
              } else {
                var geo = response.features[0].geometry.coordinates[0];

                var google_geo = [[]];
                for (var i = 0; i < geo.length; i++) {
                  this.leaflet_map.polygon.latlngs.push([geo[i][1], geo[i][0]]);
                  google_geo[0].push({lat: geo[i][1], lng: geo[i][0]});
                }
                this.leaflet_map.center = [geo[0][1], geo[0][0]];
                this.leaflet_map.zoom = 12;

                this.leaflet_map.google_map_paths = google_geo;
                this.leaflet_map.google_map_center = {lat: geo[0][1], lng: geo[0][0]}
              }
            }
          })
          .catch((error) => {
            console.log(error);

          });
      }


    }
    , set_map_address(lat, lng) {
      if ( (this.leaflet_map.hasmarker === true)) {

        this.$axios.$get('https://nominatim.openstreetmap.org/reverse', {
          params: {
            format: 'geojson',
            lat: lat,
            lon: lng,
            'accept-language' : 'tr'
          }
        })
          .then((response) => {


            if (response.features.length > 0) {


              var display_address = response.features[0].properties.display_name;
              var street = response.features[0].properties.address.road;
              var alley = response.features[0].properties.address.suburb;
              var address = response.features[0].properties.address;

              if (display_address != undefined) this.selected_items.address = display_address;
              if (alley != undefined) this.selected_items.alley = alley;
              if (street != undefined) this.selected_items.street = street;

            }

          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , removeMarker() {
      this.leaflet_map.hasmarker = false;
      this.leaflet_map.addressLatLng = [0, 0];
    }
    , addMarker(event) {
      this.leaflet_map.hasmarker = true;
      this.leaflet_map.addressLatLng = [event.latlng.lat, event.latlng.lng];

      this.set_map_address(event.latlng.lat, event.latlng.lng)
    }
    , setPlace(place) {
      this.leaflet_map.hasmarker = true;
      this.leaflet_map.addressLatLng = {
        lat: place.latlng.lat,
        lng: place.latlng.lng
      };
      this.leaflet_map.markerLatLng = [place.latlng.lat , place.latlng.lng];
      this.set_map_address(place.latlng.lat, place.latlng.lng)
    }
    , check_data() {

      if ((this.selected_items.province === '0') || (this.selected_items.province === '-1') || (parseInt(this.selected_items.province) === -1)) {
        this.$notify({
          type: 'warn',
          text: ' شهر را انتخاب کنید '
        });
      }
      else if ((this.selected_items.city === '0') || (this.selected_items.city === '-1') || (parseInt(this.selected_items.city) === -1)) {
        this.$notify({
          type: 'warn',
          text: ' ناحیه را انتخاب کنید '
        });
      }
      else if ((this.selected_items.neighbourhood === '0') || (this.selected_items.neighbourhood === '-1') || (parseInt(this.selected_items.neighbourhood) === -1)) {
        this.$notify({
          type: 'warn',
          text: ' محله را انتخاب کنید '
        });
      }
      else if (this.selected_items.address === '') {
        this.$notify({
          type: 'warn',
          text: ' آدرس پستی ملک را وارد کنید '
        });
      }
      else if (this.leaflet_map.hasmarker === false) {
        this.$notify({
          type: 'warn',
          text: ' موقعیت ملک را انتخاب کنید '
        });
      }
      else if ((this.selected_items.area_space_all.trim() === '') || (this.selected_items.area_space_all === '0')) {
        this.$notify({
          type: 'warn',
          text: ' متراژ کل را وارد کنید '
        });
      }
      else if ((this.selected_items.floor === '-1') || (this.selected_items.floor === '0')) {
        this.$notify({
          type: 'warn',
          text: ' طبقه را انتخاب کنید '
        });
      }
      else if (this.selected_items.mobile === '') {
        this.$notify({
          type: 'warn',
          text: ' موبایل را وارد کنید '
        });
      }
      else if (this.selected_items.mobile.length < 10) {
        this.$notify({
          type: 'warn',
          text: ' شماره موبایل باید برابر یا بیش از 10 کاراکتر باشد '
        });
      }
      else if ((this.itm_tour == false) && (this.itm_bird == false) && (this.itm_3d == false)) {
        this.$notify({
          type: 'warn',
          text: ' حداقل باید یک سرویس را انتخاب کنید '
        });
      }
      else {


        var full_address = '';
        if (this.selected_items.street !== '') full_address += this.selected_items.street + ' - ';
        if (this.selected_items.alley !== '') full_address += this.selected_items.alley;
        if (this.selected_items.address !== '') full_address += ' - ' + this.selected_items.address;

        var full_tel = '';
        if (this.selected_items.tel.length > 3) full_tel = this.selected_items.tel;


        var alley_id = -1;
        if (
          (this.selected_items.slc_alley !== '') &&
          (this.selected_items.slc_alley !== 'undefined') &&
          (this.selected_items.slc_alley !== undefined) &&
          (typeof this.selected_items.slc_alley !== undefined)
        ) alley_id = this.selected_items.slc_alley;

        let formData = new FormData();


        var itm_360 = 0;
        var itm_bird = 0;
        var itm_pano = 0;

        if (this.itm_3d === true) itm_360 = 1;
        if (this.itm_bird === true) itm_bird = 1;
        if (this.itm_tour === true) itm_pano = 1;

        formData.append('token', this.$storage.getUniversal('token'));
        formData.append('currency', this.$storage.getUniversal('currency'));
        formData.append('address', full_address);
        formData.append('tel', full_tel);
        formData.append('mobile', this.selected_items.mobile);
        formData.append('area_code_tel', this.selected_items.phone_sub_code);
        formData.append('area_code_mobile', this.selected_items.mobile_sub_code);
        formData.append('city_id', this.selected_items.city);
        formData.append('neghbourhod_id', this.selected_items.neighbourhood);
        formData.append('alley_id', alley_id);
        formData.append('area_space_all', this.selected_items.area_space_all);
        formData.append('floor_number_id', this.selected_items.floor);
        formData.append('owner_full_name', this.page_static.lgnd_fullname);
        formData.append('is_news_letter', this.agrement);
        formData.append('is_360_view', itm_360);
        formData.append('is_bird_view', itm_bird);
        formData.append('is_pano_view', itm_pano);
        formData.append('language', this.$i18n.locale);
        formData.append('coordinate', this.leaflet_map.addressLatLng.lat + ',' + this.leaflet_map.addressLatLng.lng);

        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        };
        this.$axios.$post('add_service', formData, config)
          .then((response) => {

            var message = response[0].msg;

            if (response[0].res === -5){
              this.$session.destroy();
              this.$router.push({name: 'evara_index'});
            }

            if (response[0].res === 1) {

              this.$notify({
                type: 'success',
                text: message
              });

              this.newroute('evara_profile_myhouse');

            } else {
              this.$notify({
                type: 'error',
                text: message
              });
            }
          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , scroll_down(){
      $('body,html').animate({ scrollTop: $('#service_form').height() }, 800);
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.auth();
  }

  , head () {
    return {
      title: this.$t('siteTitle.services'),
      meta: [
        {
          hid: 'سرویس های ویژه',
          name: 'سرویس های ویژه',
          content: 'عکس برداری 3بعدی ، هوایی و ایجاد تور مجازی از ملک ، در فروش ملک تاثیر فوق العاده ای دارد'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'سرویس های ویژه',
        },{
          hid: 'og:description',
          property: 'og:description',
          content: 'عکس برداری 3بعدی ، هوایی و ایجاد تور مجازی از ملک ، در فروش ملک تاثیر فوق العاده ای دارد',
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


.bg_right{
  background-position: right !important;
}


.persian_rtl{
  direction: rtl;
}

.persian_ltr{
  direction: ltr;
}

.cl_custom_1{
  background-position: left;
  background-repeat: no-repeat;
  height: 450px;
  padding-right: 80px;
}

.cl_custom_2{
  background-position: left;
  background-repeat: no-repeat;
  height: 340px;
  padding-right: 80px;
}

.cl_custom_3{
  background-position: right;
  background-repeat: no-repeat;
  height: 350px;
  padding-right: 100px;
}

.cl_custom_4{
  background-position: left;
  background-repeat: no-repeat;
  height: 350px;
  padding-right: 80px;
}

.Yes_btn{
  width: 200px;
  height: 40px;
  margin-top: 10px;
  border-radius: 8px;
  border: solid 2px #0ddb98;
  background-image: linear-gradient(to right, #43b5e2, #88c547);
}

.container-fluid{
  padding: 20px;
}

.ico {
  width: 55px;
  height: 55px;
  -o-object-fit: contain;
  object-fit: contain;
  margin-bottom: 10px;
}

.small_black_loading{
  text-align: center;
  color: #fff;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  padding-top: 65px;
  font-size: 25px;
}

.grouped_input{
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.grouped_select{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.ico_in_card{
  font-size: 50px;
  color: #bbbbbb;
  margin-bottom: 15px;
}

.delete_ico_image{
  transition: all .3s;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid rgb(255, 255, 255);
  position: absolute;
  top: -17px;
  right: -17px;
  background-color: #e2e2e2;
  color: #8b8b8b;
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
}

.delete_ico_image:hover{
  color: #b40c0c;
  font-size: 14px;
}

.add_image_card{
  transition: all .3s;
  cursor: default;
  width: 140px;
  height: 140px;
  text-align: center;
  margin: auto;
  padding-top: 10px;
  color: #bbbbbb;
  border-radius: 16px;
  box-shadow: 0 0 5px 0 #00000026;
}

/*.add_image_card:hover{*/
/*  background-image: linear-gradient(to bottom, #00bb7e,#08cf8e, #0edf9b);*/
/*  color: #fff;*/
/*}*/

.add_image_card_active{
  background-image: linear-gradient(to bottom, #00bb7e,#08cf8e, #0edf9b);
  color: #fff !important;
}
.add_image_card_active .ico_in_card{
  color: #fff !important;
}

/*.add_image_card:hover .ico_in_card{*/
/*  color: #fff;*/
/*}*/

label[datatype=required]:before {
  content: '*';
  padding: 0 3px;
  font-size: 12px;
  color: red;
}

input[type="file"]{
  display: none;
}

.image_preview{
  width: 150px;
  height: 150px;
  border-radius: 8px;
}

.image_pano_preview{
  width: 100%;
  height: 150px;
  border-radius: 8px;
}

.images_main_card{
  border-radius: 16px;
  border: solid 1px #aeb1c1;
  background-color: #fcfcfc;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #08b37f;
  background-color: #08b37f;
}

.Yes_btn{
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.no_btn{
  width: 150px;
  height: 40px;
  border: solid 1px #a0a0a0;
  border-radius: 8px;
  color: #a0a0a0;
  background: none;
}


.map_card{
  padding: 0;
  height: 600px;
}

.main_card{
  box-shadow: 0px 0px 12px 0px #88888869;
  border-radius: .8rem;
}

.separator{
  height: 3px;
  width: 100px;
  background: #08b37f;
  border-radius: 20px;
  margin-bottom: 30px;
}

.desc_head{
  width: auto;
  font-size: 12px;
  padding-bottom: 10px;
  padding-right: 0;
}

.title_head{
  width: auto;
  font-size: 16px;
  padding-bottom: 5px;
  padding-right: 0;
}

.mgn_form_label{
  font-size: 14px;
  margin-bottom: 10px;
  color: #333333de;
}

.mgn_input{
  height: 35px;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: #fff;
  color: #b5b5b5;
  text-align: right;
  font-size: 14px;
}

.select_custom {
  background-image: linear-gradient(45deg, transparent 50%, #ce1175 60%), linear-gradient(135deg, #ce1175 40%, transparent 50%) !important;
  background-position: calc(100% - 97%) 14px, calc(100% - 96.3%) 14px, 100% 45px;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.desc_col{
  border: solid 1px #dededf;
  border-radius: .7rem;
  padding-top: 25px;
  padding-bottom: 10px;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
  color: #fff;
  background-color: #6d6d6d;
}

a {
  color: #6d6d6d;
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


.leaflet_style{
  border-radius: 1.5rem;
}

</style>
