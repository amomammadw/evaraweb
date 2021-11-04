<template>
  <div class="row top_row text-center">
    <div class="col" style="padding-top: 25px;">

      <!-- Title -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <span>{{ $t('profile.notification_estate') }}</span>
        </div>
      </div>

      <!-- Desc -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <small style="font-size: 10px;">{{ $t('profile.notification_estate_desc') }}</small>
        </div>
      </div>

      <!-- Content -->
      <div class="card" style="border-radius: 12px; border: solid 1px #dee2e6;padding: 10px;">

        <div class="row" style="direction: rtl">

          <div class="col-5 text-right">

            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('index.city') }}</label>
              <select id="frm_province" class="form-control mgn_input" v-model="selected_items.province" @change="fetch_city">
                <option selected value="-1">{{$t('index.choose')}}</option>
                <option v-for="option in lst_provinces" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
              <select class="form-control mgn_input" v-model="selected_items.city" @change="fetch_neighbourhood">
                <option selected value="-1">  {{$t('index.choose')}} </option>
                <option v-for="option in lst_cities" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('index.neighborhood') }}</label>
              <select class="form-control mgn_input" v-model="selected_items.neighbourhood" @change="get_geofence">
                <option selected value="-1">{{$t('index.choose')}}</option>
                <option v-for="option in lst_neighbourhood" v-bind:value="option.id">
                  {{option.title}}
                </option>
              </select>
            </div>

            <div class="row" style="margin: 15px 0;">
              <div class="col text-right">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="selected_items.with_email" >
                  <label class="custom-control-label" for="customCheck1"> </label>
                  <span  v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="padding-right: 40px;"> {{ $t('profile.notify_email') }} </span>
                </div>
              </div>
            </div>

            <div class="row" style="margin: 15px 0;">
              <div class="col text-right">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2" v-model="selected_items.with_sms">
                  <label class="custom-control-label" for="customCheck2"> </label>
                  <span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="padding-right: 40px;"> {{ $t('profile.notify_sms') }} </span>
                </div>
              </div>
            </div>

            <div class="row"  style="margin:auto;margin-top: 20px">
              <div class="col text-right">
                <button type="button" class="btn btn-success col Yes_btn" @click="check_data">{{ $t('profile.notification_estate') }} </button>
              </div>
            </div>

          </div>

          <div class="col"></div> <!--Separator-->

          <!--MAP-->
          <div class="col-5 text-center">
            <div class="card" style="border-radius: 1.5rem;">
              <div class="card-body map_card text-center">

                <l-map class="leaflet_style" style="margin:auto; border-radius: 1rem" :zoom="leaflet_map.zoom" :center="leaflet_map.center">
                  <l-tile-layer :url="leaflet_map.url"></l-tile-layer>
                  <l-polygon :lat-lngs="leaflet_map.polygon.latlngs" :color="leaflet_map.polygon.color"></l-polygon>
                </l-map>

              </div>
            </div>
            <div class="row"> <div class="col text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #aeb1c1;font-size: 11px;margin-top: 15px;"> {{ $t('profile.notify_selected_desc') }} </div> </div>
          </div>

          <div class="col"></div> <!--Separator-->

        </div>

        <div class="row top_row">
          <div class="col" style="padding-top: 25px;">
            <div class="row" style="margin-bottom: 15px">
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span>{{ $t('profile.notify_list') }}</span>
              </div>
            </div>
            <div class="row" style="margin-bottom: 15px">
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <small style="font-size: 10px;">{{ $t('profile.notify_list_desc') }}</small>
              </div>
            </div>
            <div class="card" style="border-radius: 12px; border: solid 1px #dee2e6;padding: 10px;">

              <span v-if="lst_report.length === 0"> {{ $t('profile.no_information') }} </span>

              <table v-if="lst_report.length > 0" class="table table-striped">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{{ $t('index.city') }}</th>
                  <th scope="col">{{ $t('index.region') }} | {{ $t('index.district') }}</th>
                  <th scope="col">{{ $t('index.neighborhood') }}</th>
                  <th scope="col">{{ $t('profile.notify_type') }}</th>
                  <th scope="col">{{ $t('profile.authority') }}</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(opt,indx) in lst_report" :key="opt">
                  <th scope="row">{{indx + 1}}</th>
                  <td class="table_text_td">{{opt.state}}</td>
                  <td class="table_text_td">{{opt.city}}</td>
                  <td class="table_text_td">{{opt.neghbourhod}}</td>
                  <td class="table_text_td">
                    <i v-if="opt.sms == 0" class="fas fa-sms table_ico"></i>
                    <i v-if="opt.sms == 1" class="fas fa-sms table_ico active"></i>
                    <i v-if="opt.email == 0" class="fas fa-envelope-open-text table_ico"></i>
                    <i v-if="opt.email == 1" class="fas fa-envelope-open-text table_ico active"></i>
                  </td>
                  <td class="table_text_td">
                    <button type="button" class="btn btn-light ico_btn"><i class="far fa-trash-alt"></i> {{ $t('profile.delete') }} </button>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
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
      is_loading: true
      , leaflet_map: {
        url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        zoom: 7,
        center: [39.932155, 32.828176],
        polygon: {
          latlngs: [
            [47.2263299, -1.6222],
          ],
          color: "#f44336"
        }
      }
      , leaflet_address_marker: {
        hasmarker: false,
        addressLatLng: [0, 0]
      }
      , processQueue: false
      , selected_items: {
        province: '-1'
        , city: '-1'
        , neighbourhood: '-1'
        , with_email: true
        , with_sms: false
      }
      , lst_provinces: []
      , lst_cities: []
      , lst_neighbourhood: []
      , lst_report: []
    }
  }
  , methods:{
    gotodetail(house_id) {
      this.$router.push(this.localePath({ path: '/detail/'+house_id }))
    }
    , gotoedit(house_id) {
      this.$router.push(this.localePath({ path: '/edit', query: { estate: house_id } }))
    }

    , fetch_province() {
      this.$axios.$post( 'list_of_state',{
        language : this.$i18n.locale,
      })
        .then((response) => {
          if (response[0].res === -5) this.DestroyStorage();
          this.lst_provinces = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , fetch_city() {
      this.selected_items.city = -1;
      if (this.selected_items.province === '-1'){
        this.lst_cities = [];
      }else{
        this.$axios.$post( 'list_of_city',{
          state_id: this.selected_items.province,
          language : this.$i18n.locale,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            this.lst_cities = response;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.get_geofence();
    }
    , fetch_neighbourhood() {
      this.selected_items.neighbourhood = -1;
      if (this.selected_items.city === '-1'){
        this.lst_neighbourhood = [];
      }else{
        this.$axios.$post( 'list_of_neghbourhod',{
          city_id: this.selected_items.city,
          language : this.$i18n.locale,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            this.lst_neighbourhood = response;
          })
          .catch((error) => {
            console.log(error);
          });
      }

      this.get_geofence();
    }
    , select_neighbourhood(){
      this.selected_items.neighbourhood = -1;
      this.leaflet_map.polygon.latlngs = [];

      for (var i=0 ; i<this.lst_neighbourhood.length ; i++){
        if (this.lst_neighbourhood[i].id === this.selected_items.neighbourhood){
          for (var k=0 ; k<this.lst_neighbourhood[i].area.length-1 ; k++) {
            var coor = this.lst_neighbourhood[i].area[k].coordinates.toString().split(",");
            this.leaflet_map.polygon.latlngs.push([coor[0],coor[1]]);
            if (k===0){
              this.leaflet_map.center = [coor[0],coor[1]];
              this.leaflet_map.zoom= 12;
            }
          }

        }
      }
    }
    , get_geofence(){
      this.leaflet_map.polygon.latlngs = [];

      var prvnc = '';
      var city = '';
      var neigh = '';

      if (this.selected_items.province !== -1) {
        for (var z = 0; z < this.lst_provinces.length; z++) {
          if (this.selected_items.province === this.lst_provinces[z].id) {
            prvnc = this.lst_provinces[z].title;
            break;
          }
        }
      }

      if (this.selected_items.city !== -1) {
        for (var z = 0; z < this.lst_cities.length; z++) {
          if (this.selected_items.city === this.lst_cities[z].id) {
            city = this.lst_cities[z].title;
            break;
          }
        }
      }

      if (this.selected_items.neighbourhood !== -1) {
        for (var z = 0; z < this.lst_neighbourhood.length; z++) {
          if (this.selected_items.neighbourhood === this.lst_neighbourhood[z].id) {
            neigh = this.lst_neighbourhood[z].title;
            break;
          }
        }
      }

      if ((prvnc !== '') || (city !== '') || (neigh !== '')){
        this.$axios.$get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: prvnc + ' ' + city + ' ' + neigh,
            format: 'geojson',
            polygon_geojson: 1,
            limit: 1,
            'accept-language': 'tr'
          }
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            if (response.features.length > 0){
              var geo_type = response.features[0].geometry.type;
              if (geo_type === 'Point'){
                var geo_loc = response.features[0].geometry.coordinates;
                this.leaflet_map.center = [geo_loc[1],geo_loc[0]];
                this.leaflet_map.zoom= 12;
              }else{
                var geo = response.features[0].geometry.coordinates[0];

                for (var i = 0 ; i < geo.length ; i++){
                  this.leaflet_map.polygon.latlngs.push([geo[i][1],geo[i][0]]);
                }
                this.leaflet_map.center = [geo[0][1],geo[0][0]];
                this.leaflet_map.zoom= 12;
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , check_data(){
      if (this.selected_items.province === '-1'){
        this.$toast.warning(this.$t('profile.error_13'));
      }
      else if (this.selected_items.city === '-1'){
        this.$toast.warning(this.$t('profile.error_14'));
      }
      else if (this.selected_items.neighbourhood === '-1'){
        this.$toast.warning(this.$t('profile.error_15'));
      }
      else if ((this.selected_items.with_email == false) && (this.selected_items.with_sms == false)){
        this.$toast.warning(this.$t('profile.error_16'));
      }
      else {
        var email = 0;
        var sms = 0;
        if (this.selected_items.with_email == true) email = 1;
        if (this.selected_items.with_sms == true) sms = 1;

        this.$axios.$post( 'request_for_neghbourhod', {
          token : this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency') ,
          language : this.$i18n.locale,
          neghbourhod_id:this.selected_items.neighbourhood ,
          email:email ,
          sms:sms ,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();

            var message = response[0].message;
            if (response[0].res === 1) {
              this.$toast.success(message);
              this.list_of_request();
            }else {
              this.$toast.error(message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , list_of_request() {
      this.$axios.$post('list_request_for_neghbourhod',{
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language : this.$i18n.locale,
      })
        .then((response) => {
          if (response[0].res === -5) this.DestroyStorage();
          this.lst_report = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    , ExistStorage() {
      if (this.$storage.getUniversal('token')) return true;
      else return false;
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
    , auth(){
      if (this.ExistStorage() === false) location.reload();
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.fetch_province();
    this.list_of_request();
  }
}
</script>

<style scoped>

.table_ico{
  font-size: 22px;
  margin: auto 5px;
  color: #707070;
}

.table_ico.active{
  color: #0edf9b;
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

.mgn_input::-webkit-input-placeholder { /* Edge */
  color: #b5b5b5;
}

.mgn_input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #b5b5b5;
}

.mgn_input::placeholder {
  color: #b5b5b5;
}


.map_card{
  padding: 0;
  height: 220px;
}


table {
  border: none;
  padding: 10px;
  margin-bottom: 0;
}

.table td, .table th {
  border-top: none !important;
}

.table tr {
  border-bottom: 1px solid #dee2e6 !important;
  padding-right: 10px !important;;
  padding-left: 10px !important;;
}

.table tr:last-child {
  border-bottom: none !important;
}

.table_date_td {
  color: #bbbbbb;
  font-size: 10px;
  font-weight: 500;
  text-align: left;
  padding-top: 20px;
  direction: rtl;
}

.table_text_td {
  color: #1d1e18;
  font-size: 12px;
  font-weight: 500;
  direction: rtl;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 0px;
}

.top_row {
  border-bottom: 1px solid #dee2e66e !important;
  padding-bottom: 25px;
  margin-bottom: 10px;
}

.table thead th {
  font-size: 12px;
}

.ico_btn{
  font-size: 9px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #e0f7fa54;
}


/*Master Card Style*/

.master_card {
  border-radius: 12px;
  box-shadow: 0 0 10px 0 #00000029;
}

</style>
