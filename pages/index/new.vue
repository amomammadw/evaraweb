<template>
  <div class="container-fluid" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">

    <div class="row"> <div class="col text-right"> <h2 v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.submission_adv') }} </h2> </div> </div>
    <div class="row"> <div class="col text-right"> <p style="direction: rtl"> {{ $t('add_house.submission_adv_desc') }} </p> </div> </div>

    <div class="row" style="margin-top: 50px;">
      <div class="col">
        <div class="card main_card">
          <div class="card-body" style="direction: rtl;padding: 30px;">

            <div class="row"><div class="col-2 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.info_address') }} </div></div>
            <div class="row"><div class="separator"> </div></div>

            <!-- آدرس و مشخصات اصلی --> <!-- نقشه -->
            <div class="row">
              <!-- آدرس و مشخصات اصلی -->
              <div class="col-12 col-xl-5 col-lg-5 text-right">

                <!-- عنوان آگهی -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required"> {{ $t('add_house.adv_title') }} </label>

                  <ul class="nav nav-pills mb-3" style="padding-right: 0;" id="adv_pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="nav-link active" id="adv_pills_tab_Persian" data-toggle="pill" href="#adv_pills_Persian" role="tab" aria-controls="adv_pills-home" aria-selected="true">فارسی</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_English" data-toggle="pill" href="#adv_pills_English" role="tab" aria-controls="adv_pills-profile" aria-selected="false">English</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_Turk" data-toggle="pill" href="#adv_pills_Turk" role="tab" aria-controls="adv_pills-contact" aria-selected="false">Türk</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_Arabic" data-toggle="pill" href="#adv_pills_Arabic" role="tab" aria-controls="adv_pills-contact" aria-selected="false">العربية</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_Rusia" data-toggle="pill" href="#adv_pills_Rusia" role="tab" aria-controls="adv_pills-contact" aria-selected="false">русский</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_China" data-toggle="pill" href="#adv_pills_China" role="tab" aria-controls="adv_pills-contact" aria-selected="false">中文</a>
                    </li>
                  </ul>

                  <div class="tab-content" id="adv_pills-tabContent">
                    <div class="tab-pane fade show active" id="adv_pills_Persian" role="tabpanel" >
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: Estedad-FD-Light" :placeholder="$t('add_house.placeholder_global_title_fa')" v-model="selected_items.ads_title_fa">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_English" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_global_title_en')" v-model="selected_items.ads_title_en">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_Turk" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_global_title_tr')" v-model="selected_items.ads_title_tr">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_Arabic" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: Estedad-FD-Light" :placeholder="$t('add_house.placeholder_global_title_ar')" v-model="selected_items.ads_title_ar">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_Rusia" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_global_title_ru')" v-model="selected_items.ads_title_ru">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_China" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_global_title_cn')" v-model="selected_items.ads_title_ch">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- عنوان تخصصی آگهی -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.adv_title_sp') }} </label>

                  <ul class="nav nav-pills mb-3" style="padding-right: 0;" id="adv_pills-tab2" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="nav-link active" id="adv_pills_tab_Persian2" data-toggle="pill" href="#adv_pills_Persian2" role="tab" aria-controls="adv_pills-home" aria-selected="true">فارسی</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_English2" data-toggle="pill" href="#adv_pills_English2" role="tab" aria-controls="adv_pills-profile" aria-selected="false">English</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_Turk2" data-toggle="pill" href="#adv_pills_Turk2" role="tab" aria-controls="adv_pills-contact" aria-selected="false">Türk</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_Arabic2" data-toggle="pill" href="#adv_pills_Arabic2" role="tab" aria-controls="adv_pills-contact" aria-selected="false">العربية</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_Rusia2" data-toggle="pill" href="#adv_pills_Rusia2" role="tab" aria-controls="adv_pills-contact" aria-selected="false">русский</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="adv_pills_tab_China2" data-toggle="pill" href="#adv_pills_China2" role="tab" aria-controls="adv_pills-contact" aria-selected="false">中文</a>
                    </li>
                  </ul>

                  <div class="tab-content" id="adv_pills-tabContent2">
                    <div class="tab-pane fade show active" id="adv_pills_Persian2" role="tabpanel" >
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: Estedad-FD-Light" :placeholder="$t('add_house.placeholder_special_title_fa')" v-model="selected_items.ads_title_fa_sp">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_English2" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_special_title_en')" v-model="selected_items.ads_title_en_sp">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_Turk2" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_special_title_tr')" v-model="selected_items.ads_title_tr_sp">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_Arabic2" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: Estedad-FD-Light" :placeholder="$t('add_house.placeholder_special_title_ar')" v-model="selected_items.ads_title_ar_sp">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_Rusia2" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_special_title_ru')" v-model="selected_items.ads_title_ru_sp">
                      </div>
                    </div>
                    <div class="tab-pane fade" id="adv_pills_China2" role="tabpanel">
                      <div class="form-group" style="margin-bottom: 1rem;">
                        <input type="text" class="form-control mgn_input" style="font-family: sans-serif;" :placeholder="$t('add_house.placeholder_special_title_cn')" v-model="selected_items.ads_title_ch_sp">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- نوع معامله -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('search.contract_type') }}</label>
                  <select class="form-control mgn_input select_custom" v-model="selected_items.dealing_type">
                    <option selected value="-1"> {{ $t('search.select') }}</option>
                    <option v-for="option in lst_dealing_type" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- نوع ملک -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('search.estate_type') }}</label>
                  <select class="form-control mgn_input select_custom" v-model="selected_items.estate_type">
                    <option selected value="-1"> {{ $t('search.select') }}</option>
                    <option v-for="option in lst_estate_type" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- نوع زمین -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('search.land_type') }}</label>
                  <select class="form-control mgn_input select_custom" v-model="selected_items.land_use">
                    <option selected value="-1"> {{ $t('search.select') }}</option>
                    <option v-for="option in lst_land_use" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- شهر -->
                <div class="form-group" style="margin-bottom: 1rem;" datatype="required">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('index.city') }}</label>
                  <select id="frm_province" class="form-control mgn_input select_custom" v-model="selected_items.province" @change="fetch_city">
                    <option selected value="-1">  {{ $t('index.choose') }} </option>
                    <option v-for="option in lst_provinces" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- ناحیه | منطقه -->
                <div class="form-group" style="margin-bottom: 1rem;" datatype="required">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
                  <select class="form-control mgn_input select_custom" v-model="selected_items.city" @change="fetch_neighbourhood">
                    <option selected value="-1"> {{ $t('index.choose') }} </option>
                    <option v-for="option in lst_cities" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- محله -->
                <div class="form-group" style="margin-bottom: 1rem;" datatype="required">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('index.neighborhood') }}</label>
                  <select class="form-control mgn_input select_custom" v-model="selected_items.neighbourhood" @change="fetch_alley">
                    <option selected value="-1"> {{ $t('index.choose') }} </option>
                    <option v-for="option in lst_neighbourhood" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- خیابان -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('index.street') }}</label>
                  <select class="form-control mgn_input select_custom" v-model="selected_items.slc_alley" @change="get_geofence">
                    <option selected value="-1"> {{ $t('index.choose') }} </option>
                    <option v-for="option in lst_alley" v-bind:value="option.id">
                      {{option.title}}
                    </option>
                  </select>
                </div>

                <!-- خیابان -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('add_house.street_1') }} </label>
                  <input type="text" class="form-control mgn_input" :placeholder="$t('add_house.street_1_placeholder')" v-model="selected_items.street">
                </div>

                <!-- خیابان فرعی -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('add_house.street_2') }}</label>
                  <input type="text" class="form-control mgn_input" :placeholder="$t('add_house.street_2_placeholder')" v-model="selected_items.alley">
                </div>

                <!-- آدرس -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.address') }}</label>
                  <input type="text" class="form-control mgn_input" style="height: 100px;" :placeholder="$t('add_house.address_placeholder')" v-model="selected_items.address">
                </div>

                <!-- کد پستی -->
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('add_house.postal_code') }}</label>
                  <input type="text" class="form-control mgn_input"  v-model="selected_items.postal_code">
                </div>

              </div>

              <div class="col-1 text-right"></div>

              <!-- نقشه -->
              <div class="col-12 col-xl-6 col-lg-6 text-right">
                <div class="card" style="border-radius: 1.5rem;">
                  <div class="card-body map_card">
                    <client-only>
                    <!-- Google -->
                    <GmapMap
                      :options="{
                               zoomControl: true,
                               mapTypeControl: true,
                               scaleControl: true,
                               streetViewControl: true,
                               rotateControl: true,
                               fullscreenControl: true,
                               disableDefaultUi: true
                             }"
                      :center="google_map_center"
                      :zoom="8"
                      class="leaflet_style"
                      style="height: 100%"
                      @click="setPlace"
                    >
                      <GmapMarker
                        :position="google_address_marker.addressLatLng"
                        @click="center = m.position"
                      />
                      <gmap-polygon :paths="google_map_paths" @click="setPlace">
                      </gmap-polygon>

                    </GmapMap>
                    </client-only>
                  </div>
                </div>
                <div class="row"> <div class="col text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #aeb1c1;font-size: 11px;margin-top: 15px;"> {{ $t('add_house.map_text_1') }} </div> </div>

                <div class="row" style="margin-top: 30px" v-if="access_list._3dImage === true">
                  <div class="col">
                    <div class="form-group" style="margin-bottom: 1rem;">
                      <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house._360_iframe_text_1') }} </label>
                      <input type="text" class="form-control mgn_input" style="text-align: center" :placeholder="$t('add_house._360_iframe_text_2')" v-model="selected_items.iframe_360">
                    </div>
                  </div>
                </div>
                <div class="row"  v-if="access_list._3dImage === true"> <div class="col text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #aeb1c1;font-size: 11px;margin-top: 15px;"> <span> {{ $t('add_house._360_iframe_text_3') }} </span>  <a href="https://seekbeak.com" target="_blank">seekbeak</a>  <span> {{ $t('add_house._360_iframe_text_4') }} </span> </div> </div>

                <div class="row" style="margin-top: 30px" v-if="access_list._3dtour === true">
                  <div class="col">
                    <div class="form-group" style="margin-bottom: 1rem;">
                      <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house._3d_iframe_text_1') }} </label>
                      <input type="text" class="form-control mgn_input" style="text-align: center" :placeholder="$t('add_house._3d_iframe_text_2')" v-model="selected_items.matterport_modelsid">
                    </div>
                  </div>
                </div>
                <div class="row" v-if="access_list._3dtour === true"> <div class="col text-center" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #aeb1c1;font-size: 11px;margin-top: 15px;"> <span> {{ $t('add_house._3d_iframe_text_3') }} </span>  <a href="https://matterport.com" target="_blank">matterport</a>  <span> {{ $t('add_house._3d_iframe_text_4') }} </span> </div> </div>

              </div>
            </div>

            <!-- اطلاعات ملک -->
            <div class="row">
              <div class="col-3 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="margin-top: 15px;">
                {{ $t('add_house.estate_info') }}
              </div>
            </div>
            <div class="row"><div class="separator"></div></div>

            <!-- ویژگی های اصلی ملک -->
            <div class="row" style="margin-bottom: 15px;">
              <div class="col text-right">

                <div class="form-row">
                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label Estedad_Bold" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.area_all') }}</label>
                    <input type="text" v-mask="'#####'" maxlength="5" class="form-control mgn_input" :placeholder="$t('add_house.area_placeholder')" v-model="selected_items.area_space_all">
                  </div>

                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.area_clear') }}</label>
                    <input type="text" v-mask="'#####'" maxlength="5" class="form-control mgn_input" :placeholder="$t('add_house.area_placeholder')" v-model="selected_items.area_space_real">
                  </div>

                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.rooms') }}</label>
                    <select class="form-control mgn_input select_custom" v-model="selected_items.rooms">
                      <option selected value="-1"> {{ $t('search.select') }}</option>
                      <option v-for="option in list_room_number" v-bind:value="option.id">
                        {{option.title}}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.floor') }}</label>
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

            <!-- توضیحات ملک -->
            <div class="row" style="margin-bottom: 50px;">
              <div class="col text-right">

                <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required"> {{ $t('add_house.more_about_estate') }} </label>

                <div class="row">
                  <div class="col text-right desc_col">
                     <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                          <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="pills_tab_Persian" data-toggle="pill" href="#pills_Persian" role="tab" aria-controls="pills-home" aria-selected="true">فارسی</a>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="pills_tab_English" data-toggle="pill" href="#pills_English" role="tab" aria-controls="pills-profile" aria-selected="false">English</a>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="pills_tab_Turk" data-toggle="pill" href="#pills_Turk" role="tab" aria-controls="pills-contact" aria-selected="false">Türk</a>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="pills_tab_Arabic" data-toggle="pill" href="#pills_Arabic" role="tab" aria-controls="pills-contact" aria-selected="false">العربية</a>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="pills_tab_Rusia" data-toggle="pill" href="#pills_Rusia" role="tab" aria-controls="pills-contact" aria-selected="false">русский</a>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="pills_tab_China" data-toggle="pill" href="#pills_China" role="tab" aria-controls="pills-contact" aria-selected="false">中文</a>
                                          </li>
                                        </ul>
                    <div class="tab-content" id="pills-tabContent">
                                          <div class="tab-pane fade show active" id="pills_Persian" role="tabpanel" >
                                            <div class="form-group" style="margin-bottom: 1rem;">
                                              <client-only>
                                                <quill-editor
                                                  ref="editor"
                                                  v-model="selected_items.editorData_fa"
                                                  :options="editorOption"
                                                />
                                              </client-only>
                                            </div>
                                          </div>
                                          <div class="tab-pane fade" id="pills_English" role="tabpanel">
                                            <div class="form-group" style="margin-bottom: 1rem;">
                                              <client-only>
                                                <quill-editor
                                                  ref="editor"
                                                  v-model="selected_items.editorData_en"
                                                  :options="editorOption"
                                                />
                                              </client-only>
                                            </div>
                                          </div>
                                          <div class="tab-pane fade" id="pills_Turk" role="tabpanel">
                                            <div class="form-group" style="margin-bottom: 1rem;">
                                              <client-only>
                                                <quill-editor
                                                  ref="editor"
                                                  v-model="selected_items.editorData_tr"
                                                  :options="editorOption"
                                                />
                                              </client-only>
                                            </div>
                                          </div>
                                          <div class="tab-pane fade" id="pills_Arabic" role="tabpanel">
                                            <div class="form-group" style="margin-bottom: 1rem;">
                                              <client-only>
                                                <quill-editor
                                                  ref="editor"
                                                  v-model="selected_items.editorData_ar"
                                                  :options="editorOption"
                                                />
                                              </client-only>
                                            </div>
                                          </div>
                                          <div class="tab-pane fade" id="pills_Rusia" role="tabpanel">
                                            <div class="form-group" style="margin-bottom: 1rem;">
                                              <client-only>
                                                <quill-editor
                                                  ref="editor"
                                                  v-model="selected_items.editorData_ru"
                                                  :options="editorOption"
                                                />
                                              </client-only>
                                            </div>
                                          </div>
                                          <div class="tab-pane fade" id="pills_China" role="tabpanel">
                                            <div class="form-group" style="margin-bottom: 1rem;">
                                              <client-only>
                                                <quill-editor
                                                  ref="editor"
                                                  v-model="selected_items.editorData_ch"
                                                  :options="editorOption"
                                                />
                                              </client-only>
                                            </div>
                                          </div>
                                        </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- ویژگی های ملک -->
            <div class="row" style="margin-bottom: 50px;">
              <div class="col text-right">
                <div class="row"><div class="col-2 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="margin-top: 15px;"> {{ $t('add_house.other_feature') }} </div></div>
                <div class="row"><div class="col text-right desc_head " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.other_feature_desc') }} </div></div>

                <div class="row" style="margin-bottom: 10px;"><div class="col text-right" style="margin-top: 15px;">
                  <button class="btn btn-primary no_btn" style="width: auto" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    {{ $t('add_house.other_feature') }}
                  </button>
                </div></div>

                <div class="row"><div class="col">
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">

                      <div class="row">
                        <div class="col">
                          <div class="card card-body text-left" style="border: none;">

                            <div v-for="(item,indx) in lst_properties" class="mb-4">

                              <div class="row">
                                <div class="col">
                                  <label style="font-weight: bold;font-size: 16px;" class="small_title mgn_form_label" v-if="lst_properties[indx].is_necessary === 1" datatype="required">{{lst_properties[indx].title}}</label>
                                  <label style="font-weight: bold;font-size: 16px;" class="small_title mgn_form_label" v-if="lst_properties[indx].is_necessary !== 1" >{{lst_properties[indx].title}}</label>
                                </div>
                              </div>

                              <div class="row" style="direction: ltr;padding-left: 20px" v-if="lst_properties[indx].is_list === 0">
                                <div class="col-md-3" v-for="option in lst_properties[indx].values">
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" :value="option.value_id" :id="'check_bx_' + option.value_id">
                                    <label class="custom-control-label" :for="'check_bx_' + option.value_id">{{option.value}}</label>
                                  </div>
                                </div>
                              </div>

                              <div class="row" style="direction: ltr;padding-left: 20px" v-if="lst_properties[indx].is_list === 1">
                                <div class="col-md-3">
                                  <select class="form-control" :id="'slc_property_'+lst_properties[indx].id">
                                    <option selected value="-1"> {{ $t('search.select') }} </option>
                                    <option v-for="option in lst_properties[indx].values" :value="option.value_id" >{{option.value}}</option>
                                  </select>
                                </div>
                              </div>

                            </div>

                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div></div>
              </div>
            </div>

            <!-- تصاویر ملک -->
            <div class="row">
              <div class="col text-right">

                <div class="row"><div class="col-2 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="margin-top: 15px;"> {{ $t('add_house.info_photo') }} </div></div>
                <div class="row"><div class="col text-right desc_head " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.info_photo_desc') }} </div></div>
                <div class="row"><div class="separator"> </div></div>

                <div class="row">
                  <div class="col">
                    <div class="card images_main_card">
                      <div class="card-body">

                        <!-- افزودن فایل ها -->
                        <div class="row">
                          <div class="col"></div>
                          <div class="col-8 text-center">
                            <div class="row">

                              <div class="card add_image_card" @click="addFiles()">
                                <div class="card-body">
                                  <input type="file" id="files" ref="files" multiple  accept="image/*" @change="onFileChange"/>
                                  <div class="row"><div class="col"><i class="far fa-images ico_in_card"></i></div></div>
                                  <div class="row"><div class="col"><span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.add_file_image') }} </span></div></div>
                                </div>
                              </div>

                              <div class="card add_image_card" @click="addVideo()">
                                <div class="card-body">
                                  <input type="file" id="files3" ref="files" multiple accept="video/*" @change="onVideoChange"/>
                                  <div class="row"><div class="col"><i class="fas fa-video ico_in_card"></i></div></div>
                                  <div class="row"><div class="col"><span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.add_file_vid') }} </span></div></div>
                                </div>
                              </div>

                              <div class="card add_image_card" @click="addPano()">
                                <div class="card-body">
                                  <input type="file" id="files2" ref="files" multiple accept="image/*" @change="onPanoChange"/>
                                  <div class="row"><div class="col"><i class="fas fa-drum-steelpan ico_in_card"></i></div></div>
                                  <div class="row"><div class="col"><span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.add_file_pano') }} </span></div></div>
                                </div>
                              </div>

                              <div class="card add_image_card" @click="add360()">
                                <div class="card-body">
                                  <input type="file" id="files4" ref="files" multiple accept="image/*" @change="on360Change"/>
                                  <div class="row"><div class="col"><i class="fas fa-drum-steelpan ico_in_card"></i></div></div>
                                  <div class="row"><div class="col"><span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('add_house.add_file_360') }} </span></div></div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div class="col"></div>
                        </div>

                        <!-- توضیحات -->
                        <div class="row" style="margin-top: 15px;margin-bottom: 30px;"> <div class="col text-center "  v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #bbbbbb;">
                          {{ $t('add_house.file_desc') }}
                        </div> </div>

                        <!-- لیست تصاویر -->
                        <div v-if="selected_items.images.length > 0" class="row" style="margin-top: 15px;margin-bottom: 30px;">
                          <div class="col text-center " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #bbbbbb;font-size: 10px;">
                            {{ $t('add_house.selected_photo') }}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-xl-2 col-lg-2" style="margin-bottom: 35px;" v-for="(image, key) in selected_items.images" :key="key">
                            <div class="card" style="border-radius: 9px;width: 150px;">
<!--                              <div v-if="image.upload_status === 1" class="delete_ico_image" v-on:click="removeFile( key )"> <i class="far fa-trash-alt"></i> </div>-->
                              <div class="delete_ico_image" v-on:click="removeFile( key )"> <i class="far fa-trash-alt"></i> </div>
                              <img alt="EVARA"  class="card-img-top image_preview" :ref="'image'" />

                              <div v-if="image.upload_status === 0" class="progress" style="height: 5px;position: absolute; bottom: -10px; width: 100%;">
                                <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" :style="'width:' + image.progress+'%'" :aria-valuenow="image.progress" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <div v-if="image.upload_status === 0" class="small_black_loading"> {{image.progress}}% </div>

                              <div class="order_ico_image" v-if="image.order == 200" @click="set_orders_for_images(key)"> - </div>
                              <div class="order_ico_image" v-if="image.order != 200" @click="set_orders_for_images(key)"> {{ image.order }} </div>

                            </div>
                          </div>
                        </div>

                        <!-- لیست پانوراما -->
                        <div v-if="selected_items.pano.length > 0" class="row" style="margin-top: 15px;margin-bottom: 30px;">
                          <div class="col text-center " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #bbbbbb;font-size: 10px;">

                            {{ $t('add_house.selected_180') }}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-xl-6 col-lg-6" style="margin-bottom: 35px;" v-for="(pano, key) in selected_items.pano" :key="key">
                            <div class="card" style="border-radius: 9px;width: 100%;">
<!--                              <div v-if="pano.upload_status === 1" class="delete_ico_image" v-on:click="removePano( key )"> <i class="far fa-trash-alt"></i> </div>-->
                              <div  class="delete_ico_image" v-on:click="removePano( key )"> <i class="far fa-trash-alt"></i> </div>
                              <img alt="EVARA"  class="card-img-top image_pano_preview" :ref="'pano'" />

                              <div v-if="pano.upload_status === 0" class="progress" style="height: 5px;position: absolute; bottom: -10px; width: 100%;">
                                <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" :style="'width:' + pano.progress+'%'" :aria-valuenow="pano.progress" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <div v-if="pano.upload_status === 0" class="small_black_loading"> {{pano.progress}}% </div>
                            </div>
                          </div>
                        </div>

                        <!-- لیست 360 -->
                        <div v-if="selected_items._360.length > 0" class="row" style="margin-top: 15px;margin-bottom: 30px;">
                          <div class="col text-center " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #bbbbbb;font-size: 10px;">

                            {{ $t('add_house.selected_360') }}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-xl-6 col-lg-6" style="margin-bottom: 35px;" v-for="(_360, key) in selected_items._360" :key="key">
                            <div class="card" style="border-radius: 9px;width: 100%;">
<!--                              <div v-if="_360.upload_status === 1" class="delete_ico_image" v-on:click="remove360( key )"> <i class="far fa-trash-alt"></i> </div>-->
                              <div class="delete_ico_image" v-on:click="remove360( key )"> <i class="far fa-trash-alt"></i> </div>
                              <img alt="EVARA"  class="card-img-top image_pano_preview" :ref="'_360'" />

                              <div v-if="_360.upload_status === 0" class="progress" style="height: 5px;position: absolute; bottom: -10px; width: 100%;">
                                <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" :style="'width:' + _360.progress+'%'" :aria-valuenow="_360.progress" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <div v-if="_360.upload_status === 0" class="small_black_loading"> {{_360.progress}}% </div>
                            </div>
                          </div>
                        </div>

                        <!-- لیست ویدیو -->
                        <div v-if="selected_items.video.length > 0" class="row" style="margin-top: 15px;margin-bottom: 30px;">
                          <div class="col text-center " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="color: #bbbbbb;font-size: 10px;">
                            {{ $t('add_house.selected_video') }}
                          </div>
                        </div>
                        <div class="row">

                          <div class="col-4 col-xl-2 col-lg-2" style="margin-bottom: 35px;" v-for="(vid, key) in selected_items.video" :key="key">
                            <div class="card" style="border-radius: 9px;width: fit-content;">
<!--                              <div v-if="vid.upload_status === 1" class="delete_ico_image" v-on:click="removeVideo( key )"> <i class="far fa-trash-alt"></i> </div>-->
                              <div class="delete_ico_image" v-on:click="removeVideo( key )"> <i class="far fa-trash-alt"></i> </div>
                              <video width="150" height="150" :ref="'vid'" controls>
                                مرورگر شما از ویدیو پشتیبانی نمی کند
                              </video>

                              <div v-if="vid.upload_status === 0" class="progress" style="height: 5px;position: absolute; bottom: -10px; width: 100%;">
                                <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" :style="'width:' + vid.progress+'%'" :aria-valuenow="vid.progress" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <div v-if="vid.upload_status === 0" class="small_black_loading"> {{vid.progress}}% </div>

                            </div>
                          </div>

                        </div>


                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- قیمت گذاری -->
            <div class="row">
              <div class="col text-right">

                <div class="row"><div class="col-2 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="margin-top: 15px;"> {{ $t('add_house.info_price') }} </div></div>
                <div class="row"><div class="col text-right desc_head" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('add_house.info_price_desc') }} </div></div>
                <div class="row"><div class="separator"> </div></div>

                <div class="form-row">
                  <div v-for="(item,indx) in lst_price_type" class="form-group col-md-3 text-right" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{item.title}}</label>
                    <div class="input-group text-right mb-3">
                      <!--                      <input type="text" v-mask="'###.###.###.###'" class="form-control grouped_input" maxlength="15" :id="'price_'+lst_price_type[indx].id">-->
<!--                      <currency-input  class="form-control grouped_input" :id="'price_'+lst_price_type[indx].id" />-->
                      <input type="text" v-money="money" class="form-control grouped_input" maxlength="15" :id="'price_'+lst_price_type[indx].id">
                      <div class="input-group-prepend">
                        <select class="form-control grouped_select " :id="'unit_price_'+lst_price_type[indx].id">
                          <option v-for="opt in lst_price_unit" :value="opt.id" > {{opt.title}} </option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>

            <!-- تلفن های تماس -->
            <div class="row">
              <div class="col text-right">

                <div class="row"><div class="col-2 text-right title_head " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="margin-top: 15px;"> {{ $t('add_house.info_phone') }}</div></div>
                <div class="row"><div class="separator"> </div></div>

                <div class="form-row">
                  <div class="form-group col-md-6" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('add_house.phone') }}</label>

                    <div class="input-group text-right mb-3">
                      <input type="text" class="form-control grouped_input" v-mask="'##########'"  v-model="selected_items.tel">
                      <div class="input-group-prepend">
                        <select class="form-control grouped_select" v-model="selected_items.phone_sub_code">
                          <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-6" style="margin-bottom: 1rem;">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.mobile') }}</label>

                    <div class="input-group text-right mb-3">
                      <input type="text" class="form-control grouped_input input-price" v-mask="'##########'"  v-model="selected_items.mobile">
                      <div class="input-group-prepend">
                        <select class="form-control grouped_select" v-model="selected_items.mobile_sub_code">
                          <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- قوانین و مقررات -->
            <div class="row" style="margin: 25px 0;">
              <div class="col text-right">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" v-model='agrement'>
                  <label class="custom-control-label" for="customCheck1"> </label>
                  <span class="" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="padding-right: 40px;">
                      {{ $t('add_house.rule_t1') }} ( <span data-toggle="modal" data-target="#agreements_modal" style="color: #0673ee;cursor: pointer"> {{ $t('add_house.rule_t2') }} </span> )
                    </span>
                </div>
              </div>
            </div>

            <!-- ثبت یا لغو -->
            <div class="row" style="margin-top: 15px;margin-bottom: 60px;">
              <div class="col text-right">
                <button type="button" class="btn btn-success col Yes_btn" style="width: auto;" @click="Save"> {{ $t('add_house.save_form') }}</button>
                <button type="button" class="btn btn-success col no_btn" @click="newroute('/')"> {{ $t('add_house.cancel_form') }} </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" class="loading">
      <p> {{ $t('Loading') }} </p>
    </div>

    <!-- Modal -->
    <div class="modal fade" style="direction: rtl" id="agreements_modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> {{ $t('add_house.evara_rules') }} </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-justify" style="padding: 15px;">  {{ $t('add_house.rules_text') }}  </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('add_house.close') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {VMoney} from 'v-money'
export default {
  data() {
    return {
      google_map_center: {lat: 39.932155, lng: 32.828176}
      , google_map_paths: []
      , google_address_marker: {
        hasmarker: false,
        addressLatLng: {}
      }
      , leaflet_address_marker: {
        hasmarker: false,
        addressLatLng: [0, 0]
      }
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
      , access_list : {
        _3dtour : true ,
        _3dImage : true ,
        _default : true ,
      }
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
        , images: []
        , video: []
        , pano: []
        , _360: []
        , url_images: []
        , url_video: []
        , url_pano: []
        , url_360: []
        , address:''
        , iframe_360:''
        , matterport_modelsid:''
        , street:''
        , alley:''
        , tel: ''
        , ads_title_fa: ''
        , ads_title_en: ''
        , ads_title_tr: ''
        , ads_title_ar: ''
        , ads_title_ru: ''
        , ads_title_ch: ''

        , ads_title_fa_sp: ''
        , ads_title_en_sp: ''
        , ads_title_tr_sp: ''
        , ads_title_ar_sp: ''
        , ads_title_ru_sp: ''
        , ads_title_ch_sp: ''

        , editorData_fa: ''
        , editorData_en: ''
        , editorData_tr: ''
        , editorData_ar: ''
        , editorData_ru: ''
        , editorData_ch: ''
        , postal_code: ''
        , mobile: this.$storage.getUniversal('mobile')
        , area_space_all:''
        , area_space_real:''
        , ads_title:''
      }
      , lst_provinces: []
      , lst_cities: []
      , lst_neighbourhood: []
      , lst_alley: []
      , lst_dealing_type: []
      , lst_land_use: []
      , lst_estate_type: []
      , lst_price_type: []
      , lst_properties: []
      , lst_price_unit: []
      , list_of_country: []
      , list_floor_number: []
      , list_room_number: []
      , uploadPercentage: 0
      , processQueue: false
      , agrement: false
      , loading: false
      , file: ''
      , editorOption: {
        theme: 'snow',
        modules: {
          toolbar: [
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
          ]
        }
      }
      , money: {
        thousands: '.',
        precision: 0
      }
    }
  }
  , methods: {
    auth() {
      if (this.ExistStorage() === true) {
        this.check_plan((x) => {
          if (x === true) {
            this.fetch_dealing_type();
            this.fetch_land_use();
            this.fetch_estate_type();
            this.fetch_province();
            this.fetch_prices_type();
            this.fetch_properties();
            this.fetch_unit_prices_type();
            this.fetch_list_of_country();
            this.fetch_list_floor_number();
            this.fetch_list_room_number();
          } else {
            this.newroute('/plans');
          }
        })
      } else {
        this.newroute('/');
      }
    }
    , check_plan(cb){

      this.access_list._default = false;
      this.access_list._3dImage = false;
      this.access_list._3dtour = false;

      this.$axios.$post('user_active_plan', {
        token: this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language : this.$i18n.locale,
      })
        .then((response) => {
          if (response[0].res == 1){
            if (response[0].active_plan_array.length > 0){
              for (var b = 0 ; b < response[0].active_plan_array[0].plan_item_aray.length;b++){
                if (response[0].active_plan_array[0].plan_item_aray[b].id == 1)this.access_list._default = true;
                if (response[0].active_plan_array[0].plan_item_aray[b].id == 2)this.access_list._3dImage = true;
                if (response[0].active_plan_array[0].plan_item_aray[b].id == 3)this.access_list._3dtour = true;
              }
              cb(true);
            }else{
              cb(false);
            }
          }
          else if (response[0].res === -1) this.DestroyStorage();
          else {
            cb(false);
          }
        })
        .catch((error) => {
          console.log('STP3')
          console.log(error);
          cb(false);
        });
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
      this.$router.push(this.localePath({path: page}));
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
    , Save() {
      var property_selected = [];
      var price_selected = [];

      var property_flag = true;

      var is_upload_image = false;
      for (var i = 0; i < this.selected_items.images.length; i++) {
        if (this.selected_items.images[i].upload_status === 0) is_upload_image = true;
      }

      var is_upload_pano = false;
      for (var i = 0; i < this.selected_items.pano.length; i++) {
        if (this.selected_items.pano[i].upload_status === 0) is_upload_pano = true;
      }

      var is_upload_vid = false;
      for (var i = 0; i < this.selected_items.video.length; i++) {
        if (this.selected_items.video[i].upload_status === 0) is_upload_vid = true;
      }

      var is_upload_360 = false;
      for (var i = 0; i < this.selected_items._360.length; i++) {
        if (this.selected_items._360[i].upload_status === 0) is_upload_360 = true;
      }

      for (var i = 0; i < this.lst_properties.length; i++) {
        var prt_is_necessary = this.lst_properties[i].is_necessary;
        var prt_is_list = this.lst_properties[i].is_list;
        var prt_id = this.lst_properties[i].id;
        var prt_values_list = this.lst_properties[i].values;

        var flg_value = false;

        if (prt_is_list === 1){
          if ($('#slc_property_'+prt_id).val() != '-1')
          {
            property_selected.push($('#slc_property_'+prt_id).val());
            flg_value = true;
          }
        }else{
          for (var j = 0; j < prt_values_list.length; j++) {
            var val_id = prt_values_list[j].value_id;
            if ($('#check_bx_'+val_id).is(':checked'))
            {
              property_selected.push(val_id);
              flg_value = true;
            }
          }
        }
        if (prt_is_necessary == 1 && flg_value === false) {
          property_flag = false;
        }

      }

      for (var i = 0; i < this.lst_price_type.length; i++) {
        var price_id = this.lst_price_type[i].id;
        var price_value = $("#price_" + price_id).val();
        var price_unit_value = $("#unit_price_" + price_id).val();

        price_value = price_value.replace(/\٬/g, '');
        price_value = price_value.replace(/\,/g, '');
        price_value = price_value.replace(/\./g, '');

        if (price_value !== "") {
          price_selected.push({
            price_id: price_id,
            price_value: this.toEnglishDigits(price_value),
            unit_id: price_unit_value,
          })
        }
      }

      if (is_upload_image === true) {
        this.$toast.warning(this.$t('add_house.error_1'));
      }
      else if (is_upload_pano === true) {
        this.$toast.warning(this.$t('add_house.error_2'));
      }
      else if (is_upload_vid === true) {
        this.$toast.warning(this.$t('add_house.error_3'));
      }
      else if (is_upload_360 === true) {
        this.$toast.warning(this.$t('add_house.error_4'));
      }
      else if ((this.selected_items.ads_title_fa === '') && (this.selected_items.ads_title_en === '')) {
        this.$toast.warning(this.$t('add_house.error_5'));
      }
      else if ((this.selected_items.dealing_type === '0') || (this.selected_items.dealing_type === '-1') || (parseInt(this.selected_items.dealing_type) === -1)) {
        this.$toast.warning(this.$t('add_house.error_6'));
      }
      else if ((this.selected_items.estate_type === '0') || (this.selected_items.estate_type === '-1') || (parseInt(this.selected_items.estate_type) === -1)) {
        this.$toast.warning(this.$t('add_house.error_7'));
      }
      else if ((this.selected_items.land_use === '0') || (this.selected_items.land_use === '-1') || (parseInt(this.selected_items.land_use) === -1)) {
        this.$toast.warning(this.$t('add_house.error_8'));
      }
      else if ((this.selected_items.province === '0') || (this.selected_items.province === '-1') || (parseInt(this.selected_items.province) === -1)) {
        this.$toast.warning(this.$t('add_house.error_9'));
      }
      else if ((this.selected_items.city === '0') || (this.selected_items.city === '-1') || (parseInt(this.selected_items.city) === -1)) {
        this.$toast.warning(this.$t('add_house.error_10'));
      }
      else if ( (this.selected_items.neighbourhood === '-1') || (parseInt(this.selected_items.neighbourhood) === -1)) {
        this.$toast.warning(this.$t('add_house.error_11'));
      }
      else if (this.selected_items.address === '') {
        this.$toast.warning(this.$t('add_house.error_12'));
      }
      else if (this.google_address_marker.hasmarker === false) {
        this.$toast.warning(this.$t('add_house.error_13'));
      }
      else if ((this.selected_items.area_space_all.trim() === '') || (this.selected_items.area_space_all === '0')) {
        this.$toast.warning(this.$t('add_house.error_14'));
      }
      else if ((this.selected_items.area_space_real.trim() === '') || (this.selected_items.area_space_real === '0')) {
        this.$toast.warning(this.$t('add_house.error_15'));
      }
      else if ((this.selected_items.rooms === '-1') || (this.selected_items.rooms === '0')) {
        this.$toast.warning(this.$t('add_house.error_16'));
      }
      else if ((this.selected_items.floor === '-1') || (this.selected_items.floor === '0')) {
        this.$toast.warning(this.$t('add_house.error_17'));
      }
      else if (
        (this.selected_items.editorData_fa.trim() === '') &&
        (this.selected_items.editorData_en.trim() === '') &&
        (this.selected_items.editorData_ar.trim() === '') &&
        (this.selected_items.editorData_ch.trim() === '') &&
        (this.selected_items.editorData_ru.trim() === '') &&
        (this.selected_items.editorData_tr.trim() === '')
      ) {
        this.$toast.warning(this.$t('add_house.error_18'));
      }
      else if (property_flag === false) {
        this.$toast.warning(this.$t('add_house.error_19'));
      }
      else if (this.selected_items.mobile === '') {
        this.$toast.warning(this.$t('add_house.error_20'));
      }
      else if (this.selected_items.mobile.length < 10) {
        this.$toast.warning(this.$t('add_house.error_21'));
      }
      else if (this.selected_items.images.length === 0) {
        this.$toast.warning(this.$t('add_house.error_22'));
      }
      else if (this.agrement === false) {
        this.$toast.warning(this.$t('add_house.error_23'));
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
        formData.append('token', this.$storage.getUniversal('token'));
        formData.append('currency', this.$storage.getUniversal('currency'));

        formData.append('title_fa', this.selected_items.ads_title_fa);
        formData.append('title_en', this.selected_items.ads_title_en);
        formData.append('title_ar', this.selected_items.ads_title_ar);
        formData.append('title_ch', this.selected_items.ads_title_ch);
        formData.append('title_ru', this.selected_items.ads_title_ru);
        formData.append('title_tr', this.selected_items.ads_title_tr);

        formData.append('title_fa_sp', this.selected_items.ads_title_fa_sp);
        formData.append('title_en_sp', this.selected_items.ads_title_en_sp);
        formData.append('title_ar_sp', this.selected_items.ads_title_ar_sp);
        formData.append('title_ch_sp', this.selected_items.ads_title_ch_sp);
        formData.append('title_ru_sp', this.selected_items.ads_title_ru_sp);
        formData.append('title_tr_sp', this.selected_items.ads_title_tr_sp);

        formData.append('estate_type_id', this.selected_items.estate_type);
        formData.append('dealing_type_id', this.selected_items.dealing_type);
        formData.append('address', full_address);
        formData.append('tel', full_tel);
        formData.append('mobile', this.selected_items.mobile);
        formData.append('area_code_tel', this.selected_items.phone_sub_code);
        formData.append('area_code_mobile', this.selected_items.mobile_sub_code);
        formData.append('land_use_id', this.selected_items.land_use);
        formData.append('desc_fa', this.selected_items.editorData_fa);
        formData.append('desc_en', this.selected_items.editorData_en);
        formData.append('desc_ch', this.selected_items.editorData_ch);
        formData.append('desc_tr', this.selected_items.editorData_tr);
        formData.append('desc_ru', this.selected_items.editorData_ru);
        formData.append('desc_ar', this.selected_items.editorData_ar);
        formData.append('city_id', this.selected_items.city);
        formData.append('neghbourhod_id', this.selected_items.neighbourhood);
        formData.append('alley_id', alley_id);
        formData.append('area_space_all', this.selected_items.area_space_all);
        formData.append('area_space_real', this.selected_items.area_space_real);
        formData.append('floor_number_id', this.selected_items.floor);
        formData.append('room_number_id', this.selected_items.rooms);
        formData.append('postal_code', this.selected_items.postal_code);
        formData.append('iframe_360', this.selected_items.iframe_360);
        formData.append('matterport_modelsid', this.selected_items.matterport_modelsid);
        formData.append('property_array', JSON.stringify(property_selected));
        formData.append('price_array', JSON.stringify(price_selected));
        formData.append('owner_full_name', this.$storage.getUniversal('name') + ' ' + this.$storage.getUniversal('family'));
        formData.append('language', this.$i18n.locale);
        formData.append('project_id', 0);
        formData.append('coordinate', this.google_address_marker.addressLatLng.lat + ',' + this.google_address_marker.addressLatLng.lng);


        var pic_aray = [];
        for (var i = 0; i < this.selected_items.url_images.length; i++) {
          pic_aray.push({
            url : this.selected_items.url_images[i].url ,
            order : this.selected_items.images[i].order ,
          });
        }
        formData.append('pic_aray', JSON.stringify(pic_aray));

        var pano_aray = [];
        for (var i = 0; i < this.selected_items.url_pano.length; i++) {
          pano_aray.push(this.selected_items.url_pano[i].url);
        }
        formData.append('pano_aray', JSON.stringify(pano_aray));

        var video_aray = [];
        for (var i = 0; i < this.selected_items.url_video.length; i++) {
          video_aray.push(this.selected_items.url_video[i].url);
        }
        formData.append('video_aray', JSON.stringify(video_aray));

        var pic360_aray = [];
        for (var i = 0; i < this.selected_items.url_360.length; i++) {
          pic360_aray.push(this.selected_items.url_360[i].url);
        }
        formData.append('pic360_aray', JSON.stringify(pic360_aray));

        this.loading = true;
        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        };
        this.$axios.$post('add_estate', formData, config)
          .then((response) => {
            this.loading = false;
            var message = response[0].msg;

            if (response[0].res === -5) this.DestroyStorage();

            if (response[0].res === 1) {

              this.$ga.event({
                eventCategory: 'newEstate',
                eventAction: 'click',
                eventLabel: this.selected_items.ads_title_fa_sp,
              })

              this.$toast.success(message);

              this.newroute('/profile/myestates');

            } else {

              this.$toast.error(message);
            }
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            this.$toast.error(error);
          });
      }
    }

    , fetch_dealing_type() {
      this.$axios.$post('list_of_dealing_type',
        {
          language: this.$i18n.locale,
        })
        .then((response) => {

          this.lst_dealing_type = response;

          if (response[0].res === -5) this.DestroyStorage();

        })
        .catch((error) => {
          console.log(error);
        });
    }
    , fetch_land_use() {
      this.$axios.$post('list_of_land_use', {
        language: this.$i18n.locale,
      })
        .then((response) => {
          this.lst_land_use = response;

          if (response[0].res === -5) this.DestroyStorage();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , fetch_estate_type() {
      this.$axios.$post('list_of_estate_type', {
        language: this.$i18n.locale,
      })
        .then((response) => {

          this.lst_estate_type = response;

          if (response[0].res === -5) this.DestroyStorage();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , fetch_province() {

      this.$axios.$post('list_of_state', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.lst_provinces = response;

          if (response[0].res === -5) this.DestroyStorage();
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

            if (response[0].res === -5) this.DestroyStorage();
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

            if (response[0].res === -5) this.DestroyStorage();
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

            if (response[0].res === -5) this.DestroyStorage();
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

          if (response[0].res === -5) this.DestroyStorage();
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

          if (response[0].res === -5) this.DestroyStorage();
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

          if (response[0].res === -5) this.DestroyStorage();
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

          if (response[0].res === -5) this.DestroyStorage();
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_prices_type() {

      this.$axios.$post('list_of_price_type', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.lst_price_type = response;

          if (response[0].res === -5) this.DestroyStorage();
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_properties() {

      this.$axios.$post('list_of_properties', {
        language: this.$i18n.locale,
      })
        .then((response) => {


          this.lst_properties = response;

          if (response[0].res === -5) this.DestroyStorage();
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
            'accept-language' : 'tr'
          }
        })
          .then((response) => {
            if (response.features.length > 0) {
              var geo_type = response.features[0].geometry.type;
              if (geo_type === 'Point') {
                var geo_loc = response.features[0].geometry.coordinates;
                this.leaflet_map.center = [geo_loc[1], geo_loc[0]];
                this.google_map_center = {lat: geo_loc[1], lng: geo_loc[0]}
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

                this.google_map_paths = google_geo;
                this.google_map_center = {lat: geo[0][1], lng: geo[0][0]}
              }
            }

          })
          .catch((error) => {
            console.log(error);

          });
      }


    }
    , setPlace(place) {
      this.google_address_marker.hasmarker = true;
      this.google_address_marker.addressLatLng = {
        lat: place.latLng.lat(),
        lng: place.latLng.lng()
      };
      this.set_map_address(place.latLng.lat(), place.latLng.lng())
    }
    , set_map_address(lat, lng) {
      if ( (this.leaflet_address_marker.hasmarker === true) ||  (this.google_address_marker.hasmarker === true)) {


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

    , addFiles() {
      // this.$refs.files.click();
      $('#files').click();
    }
    , removeFile(key) {
      this.selected_items.images.splice(key, 1);
      this.selected_items.url_images.splice(key, 1);

      for (let i = 0; i < this.selected_items.images.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$refs.image[i].src = reader.result;
        };

        reader.readAsDataURL(this.selected_items.images[i].img);
      }
    }
    , onFileChange(e) {
      let vm = this;
      var selectedFiles = e.target.files;

      var check_counter = false;
      if (this.selected_items.images.length !== 0) check_counter = true;
      var len = this.selected_items.images.length;

      for (let i = 0; i < selectedFiles.length; i++) {

        if (this.selected_items.images.length < 20){

          console.log(selectedFiles[i]);

          if (selectedFiles[i].size <= 20000000 && (selectedFiles[i].type === 'image/jpeg' || selectedFiles[i].type === 'image/jpg') ) {

            this.selected_items.images.push({
              img: selectedFiles[i]
              , progress: 0
              , upload_status: 0
              , order: 200
            });

            let formData = new FormData();
            formData.append('bill', selectedFiles[i]);
            formData.append('type', 1);
            formData.append('land', this.selected_items.land_use);
            formData.append('language', this.$i18n.locale);

            this.$axios.$post('add_file', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
              , onUploadProgress: function (progressEvent) {
                var uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));

                var _counter = i;

                if (check_counter === true) {
                  var _counter_2 = _counter + len;
                  this.selected_items.images[_counter_2].progress = uploadPercentage;
                } else {
                  this.selected_items.images[_counter].progress = uploadPercentage;
                }

              }.bind(this)
            })
              .then((response) => {
                var data = response[0];
                var res_data_res = data.res;
                var res_data_msg = data.message;

                if (response[0].res === -5) this.DestroyStorage();

                if (res_data_res === 1) {

                  var _counter = i;
                  if (check_counter === true) {
                    var _counter_2 = _counter + len;
                    this.selected_items.images[_counter_2].upload_status = 1;
                  } else {
                    this.selected_items.images[_counter].upload_status = 1;
                  }

                  this.selected_items.url_images.push({
                    url: data.file_name
                  })

                } else {

                  this.selected_items.images.splice(i, 1);
                  this.selected_items.url_images.splice(i, 1);

                  this.$toast.error(res_data_msg);
                }
              })
              .catch((error) => {
                console.log('FAILURE!!');
                console.log(error);
              });

          }
          else {
            this.$toast.warning(this.$t('add_house.alert_file_size_1'));
          }
        }
        else {
          this.$toast.warning(this.$t('add_house.alert_4'));
        }

      }

      for (let i = 0; i < this.selected_items.images.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$refs.image[i].src = reader.result;
        };
        reader.readAsDataURL(this.selected_items.images[i].img);
      }
    }

    , addVideo() {
      $('#files3').click();
    }
    , removeVideo(key) {
      this.selected_items.video.splice(key, 1);
      this.selected_items.url_video.splice(key, 1);

      for (let i = 0; i < this.selected_items.video.length; i++) {
        let reader = new FileReader();
        var src = (window.URL || window.webkitURL).createObjectURL(this.selected_items.video[i].vid);
        reader.onload = (e) => {
          this.$refs.vid[i].src = src;
        };

        reader.readAsDataURL(this.selected_items.video[i].vid);
      }
    }
    , onVideoChange(e) {
      let vm = this;
      var selectedFiles = e.target.files;

      var check_counter = false;
      if (this.selected_items.video.length !== 0) check_counter = true;
      var len = this.selected_items.video.length;


      for (let i = 0; i < selectedFiles.length; i++) {

        // if (selectedFiles[i].size <= 2500000) {

        this.selected_items.video.push({
          vid: selectedFiles[i]
          , progress: 0
          , upload_status: 0
        });

        let formData = new FormData();
        formData.append('bill', selectedFiles[i]);
        formData.append('type', 2);
        formData.append('land', this.selected_items.land_use);
        formData.append('language', this.$i18n.locale);

        this.$axios.$post('add_file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
          , onUploadProgress: function (progressEvent) {
            var uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));

            var _counter = i;

            if (check_counter === true) {
              var _counter_2 = _counter + len;
              this.selected_items.video[_counter_2].progress = uploadPercentage;
            } else {
              this.selected_items.video[_counter].progress = uploadPercentage;
            }

          }.bind(this)
        })
          .then((response) => {
            var data = response[0];
            var res_data_res = data.res;
            var res_data_msg = data.message;

            if (response[0].res === -5) this.DestroyStorage();

            if (res_data_res === 1) {

              var _counter = i;
              if (check_counter === true) {
                var _counter_2 = _counter + len;
                this.selected_items.video[_counter_2].upload_status = 1;
              } else {
                this.selected_items.video[_counter].upload_status = 1;
              }

              this.selected_items.url_video.push({
                url: data.file_name
              })
              console.log('SUCCESS!!');
            } else {
              this.selected_items.video.splice(i, 1);
              this.selected_items.url_video.splice(i, 1);
              this.$toast.error(res_data_msg);
            }
          })
          .catch((error) => {
            console.log('FAILURE!!');
            console.log(error);
          });

      }

      for (let i = 0; i < this.selected_items.video.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          var src = (window.URL || window.webkitURL).createObjectURL(this.selected_items.video[i].vid);
          this.$refs.vid[i].src = src;
        };
        reader.readAsDataURL(this.selected_items.video[i].vid);
      }
    }

    , addPano() {
      $('#files2').click();
    }
    , removePano(key) {
      this.selected_items.pano.splice(key, 1);
      this.selected_items.url_pano.splice(key, 1);
      for (let i = 0; i < this.selected_items.pano.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$refs.pano[i].src = reader.result;
        };

        reader.readAsDataURL(this.selected_items.pano[i].pano);
      }
    }
    , onPanoChange(e) {
      let vm = this;
      var selectedFiles = e.target.files;

      var check_counter = false;
      if (this.selected_items.pano.length !== 0) check_counter = true;
      var len = this.selected_items.pano.length;

      for (let i = 0; i < selectedFiles.length; i++) {
        // if (selectedFiles[i].size <= 2500000) {
        this.selected_items.pano.push({
          pano: selectedFiles[i]
          , progress: 0
          , upload_status: 0
        });

        let formData = new FormData();
        formData.append('bill', selectedFiles[i]);
        formData.append('type', 3);
        formData.append('land', this.selected_items.land_use);
        formData.append('language', this.$i18n.locale);

        this.$axios.$post('add_file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
          , onUploadProgress: function (progressEvent) {
            var uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));

            var _counter = i;

            if (check_counter === true) {
              var _counter_2 = _counter + len;
              this.selected_items.pano[_counter_2].progress = uploadPercentage;
            } else {
              this.selected_items.pano[_counter].progress = uploadPercentage;
            }

          }.bind(this)
        })
          .then((response) => {
            var data = response[0];
            var res_data_res = data.res;
            var res_data_msg = data.message;

            if (response[0].res === -5) this.DestroyStorage();

            if (res_data_res === 1) {

              var _counter = i;
              if (check_counter === true) {
                var _counter_2 = _counter + len;
                this.selected_items.pano[_counter_2].upload_status = 1;
              } else {
                this.selected_items.pano[_counter].upload_status = 1;
              }

              this.selected_items.url_pano.push({
                url: data.file_name
              })
              console.log('SUCCESS!!');
            } else {
              this.selected_items.pano.splice(i, 1);
              this.selected_items.url_pano.splice(i, 1);
              this.$toast.error(res_data_msg);
            }
          })
          .catch((error) => {
            console.log('FAILURE!!');
            console.log(error);
          });

      }
      for (let i = 0; i < this.selected_items.pano.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$refs.pano[i].src = reader.result;
        };

        reader.readAsDataURL(this.selected_items.pano[i].pano);
      }
    }

    , add360() {
      $('#files4').click();
    }
    , remove360(key) {
      this.selected_items._360.splice(key, 1);
      this.selected_items.url_360.splice(key, 1);
      for (let i = 0; i < this.selected_items._360.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$refs._360[i].src = reader.result;
        };

        reader.readAsDataURL(this.selected_items._360[i]._360);
      }
    }
    , on360Change(e) {
      let vm = this;
      var selectedFiles = e.target.files;

      var check_counter = false;
      if (this.selected_items._360.length !== 0) check_counter = true;
      var len = this.selected_items._360.length;

      for (let i = 0; i < selectedFiles.length; i++) {
        // if (selectedFiles[i].size <= 1000000) {
        this.selected_items._360.push({
          _360: selectedFiles[i]
          , progress: 0
          , upload_status: 0
        });

        let formData = new FormData();
        formData.append('bill', selectedFiles[i]);
        formData.append('type', 4);
        formData.append('land', this.selected_items.land_use);
        formData.append('language', this.$i18n.locale);

        this.$axios.$post('add_file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
          , onUploadProgress: function (progressEvent) {
            var uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));

            var _counter = i;

            if (check_counter === true) {
              var _counter_2 = _counter + len;
              this.selected_items._360[_counter_2].progress = uploadPercentage;
            } else {
              this.selected_items._360[_counter].progress = uploadPercentage;
            }

          }.bind(this)
        })
          .then((response) => {
            var data = response[0];
            var res_data_res = data.res;
            var res_data_msg = data.message;

            if (response[0].res === -5) this.DestroyStorage();

            if (res_data_res === 1) {

              var _counter = i;
              if (check_counter === true) {
                var _counter_2 = _counter + len;
                this.selected_items._360[_counter_2].upload_status = 1;
              } else {
                this.selected_items._360[_counter].upload_status = 1;
              }

              this.selected_items.url_360.push({
                url: data.file_name
              })
              console.log('SUCCESS!!');
            } else {
              this.selected_items._360.splice(i, 1);
              this.selected_items.url_360.splice(i, 1);
              this.$toast.error(res_data_msg);
            }
          })
          .catch((error) => {
            console.log('FAILURE!!');
            console.log(error);
          });
      }
      for (let i = 0; i < this.selected_items._360.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$refs._360[i].src = reader.result;
        };

        reader.readAsDataURL(this.selected_items._360[i]._360);
      }
    }

    , set_orders_for_images(indx){

      if (indx <= this.selected_items.images.length){
        var img_order = this.selected_items.images[indx].order;

        if (img_order != '200') {
          this.selected_items.images[indx].order = 200;
        }else{

          var new_order = 0;
          var flag = false;

          while (flag === false){
            new_order++;
            flag = true;
            for (var i = 0 ; i < this.selected_items.images.length; i++){

              var img_in_list_order = this.selected_items.images[i].order;

              if (parseInt(new_order) === parseInt(img_in_list_order)){
                flag = false;
                break;
              }

            }

          }

          this.selected_items.images[indx].order = new_order;
        }

      }


    }

  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.auth();
  }
  , computed: {

  }
  , directives: {money: VMoney}
}
</script>

<style scoped>

.quill-editor {
  min-height: 300px;
  height: 300px;
  overflow-y: auto;
}

.loading{
  text-align: center;
  color: #fff;
  position: fixed;
  background-color: rgb(0 0 0 / 80%);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  padding-top: 40vh;
  font-size: 2vw;
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

.order_ico_image{
  transition: all .3s;
  cursor: pointer;
  border-radius: 3px;
  border: 3px solid rgb(255, 255, 255);
  position: absolute;
  bottom: -20px;
  left: 55px;
  background-color: #e2e2e2;
  color: #8b8b8b;
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 19px !important;
  font-weight: bold;
  padding-top: 5px;
}

.order_ico_image:hover{
  color: #b40c0c;
  font-size: 14px;
}

.add_image_card{
  transition: all .3s;
  cursor: pointer;
  width: 140px;
  height: 140px;
  text-align: center;
  margin: auto;
  padding-top: 10px;
  color: #bbbbbb;
  border-radius: 16px;
  box-shadow: 0 0 5px 0 #00000026;
}

.add_image_card:hover{
  background-image: linear-gradient(to bottom, #00bb7e,#08cf8e, #0edf9b);
  color: #fff;
}

.add_image_card:hover .ico_in_card{
  color: #fff;
}

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

.container-fluid{
  padding: 15px 30px;
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

</style>

<style>
.ql-container {
  height: 85% !important;
}

.ql-snow .ql-picker-label {
  padding-right: 20px !important;
}

.ql-snow .ql-color-picker, .ql-snow .ql-icon-picker {
  width: 40px !important;
}

</style>
