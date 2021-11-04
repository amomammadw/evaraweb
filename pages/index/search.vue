<template>
  <div class="container-fluid" style="padding: 20px 60px;" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">

    <div class="card master_card" style="margin: 25px auto">
      <div class="card-body" style="padding: 0 15px;">
        <div class="row" style="direction: rtl;padding:10px 15px;">

          <!--Right Side-->
          <div class="col-3 right_side">

            <div class="row" style="margin-top: 20px;">
              <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <span class="" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('search.advanced_search') }} </span>
              </div>
            </div>

            <div class="row collapsed" style="margin-top: 35px;cursor: pointer" data-toggle="collapse" data-target="#collapseFilter_zero" aria-expanded="true" aria-controls="collapseFilter_zero">
              <div class="col text-right" >
                <span class=" " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('search.general_address') }} </span>
              </div>
              <div class="col-3">
                <i class="fas fa-chevron-circle-left arrow_ico"></i>
              </div>
            </div>
            <div class="row collapse" style="margin: 20px auto;" id="collapseFilter_zero">
              <div class="col" style="margin: auto">
                <div class="card card-gray" style="border-radius: 8px;border:none;background-color: #f8f8f8;">
                  <div class="card-body" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">

                    <div class="row" style="margin-top: 20px;">
                      <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                        <label v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;" for="province_selector">{{ $t('index.city') }}</label>
                        <v-select id="province_selector"
                                  :options="lst_provinces"
                                  :searchable="true"
                                  :showDefaultOption="true"
                                  :labelTitle="$t('index.choose')"
                                  :labelSearchPlaceholder="$t('index.do_search')"
                                  :labelNotFound="$t('index.no_result')"
                                  v-model="selected.province"
                                  @input="fetch_city"/>
                      </div>
                    </div>

                    <div class="row" style="margin-top: 20px;">
                      <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                        <label v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;" for="city_selector">{{ $t('index.region') }} | {{ $t('index.district') }}</label>
                        <v-select id="city_selector"
                                  :options="lst_cities"
                                  :searchable="true"
                                  :showDefaultOption="true"
                                  :labelTitle="$t('index.choose')"
                                  :labelSearchPlaceholder="$t('index.do_search')"
                                  :labelNotFound="$t('index.no_result')"
                                  v-model="selected.city"
                                  @input="fetch_neighbourhood"/>
                      </div>

                    </div>

                    <div class="row" style="margin-top: 20px;">
                      <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                        <label v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;" for="neigh_selector">{{ $t('index.neighborhood') }}</label>
                        <v-select id="neigh_selector"
                                  :options="lst_neighbourhood"
                                  :searchable="true"
                                  :showDefaultOption="true"
                                  :labelTitle="$t('index.choose')"
                                  :labelSearchPlaceholder="$t('index.do_search')"
                                  :labelNotFound="$t('index.no_result')"
                                  v-model="selected.neighbourhood"
                                  @input="fetch_alley"/>
                      </div>
                    </div>

                    <div class="row" style="margin-top: 20px;">
                      <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                        <label v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;" for="alley_selector">{{ $t('index.street') }}</label>
                        <v-select id="alley_selector"
                                  :options="lst_alley"
                                  :searchable="true"
                                  :showDefaultOption="true"
                                  :labelTitle="$t('index.choose')"
                                  :labelSearchPlaceholder="$t('index.do_search')"
                                  :labelNotFound="$t('index.no_result')"
                                  v-model="selected.alley" />
                      </div>
                    </div>

                    <div class="row" style="margin-top: 20px;">
                      <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                        <label v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;" for="postal_code">{{ $t('search.postal_code') }}</label>
                        <input type="text" class="form-control address_search " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" v-model="selected.postal_code" id="postal_code" placeholder="">
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="row collapsed" style="margin-top: 35px;cursor: pointer" data-toggle="collapse" data-target="#collapseFilter_one" aria-expanded="true" aria-controls="collapseFilter_one">
              <div class="col text-right" >
                <span class=" " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('search.general_feature') }} </span>
              </div>
              <div class="col-3">
                <i class="fas fa-chevron-circle-left arrow_ico"></i>
              </div>
            </div>
            <div class="row collapse" style="margin: 20px auto;" id="collapseFilter_one">
              <div class="col" style="margin: auto">
                <div class="card card-gray" style="border-radius: 8px;border:none;background-color: #f8f8f8;">
                  <div class="card-body" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                    <div class="form-group">
                      <label class="" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;">{{ $t('search.contract_type') }}</label>
                      <multiselect v-model="selected.dealing_type" :placeholder="$t('search.select_one_or_more')" label="title" track-by="id" :options="lst_dealing_type" :multiple="true" :taggable="true"></multiselect>
                      <!--                          <select class="form-control" style="direction: rtl;font-size: 12px;" v-model="selected.dealing_type">-->
                      <!--                            <option selected value="-1"> {{ $t('search.select') }}</option>-->
                      <!--                            <option v-for="option in lst_dealing_type" :key="option.id" v-bind:value="option.id">-->
                      <!--                              {{option.title}}-->
                      <!--                            </option>-->
                      <!--                          </select>-->
                    </div>
                    <div class="form-group">
                      <label class="" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;">{{ $t('search.estate_type') }} </label>
                      <multiselect v-model="selected.estate_type" :placeholder="$t('search.select_one_or_more')" label="title" track-by="id" :options="lst_estate_type" :multiple="true" :taggable="true"></multiselect>
                      <!--                          <select class="form-control" style="direction: rtl;font-size: 12px;" v-model="selected.estate_type">-->
                      <!--                            <option selected value="-1">{{ $t('search.select') }} </option>-->
                      <!--                            <option v-for="option in lst_estate_type" :key="option.id" v-bind:value="option.id">-->
                      <!--                              {{option.title}}-->
                      <!--                            </option>-->
                      <!--                          </select>-->
                    </div>
                    <div class="form-group">
                      <label class="" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;">{{ $t('search.land_type') }}</label>
                      <multiselect v-model="selected.land_use" :placeholder="$t('search.select_one_or_more')" label="title" track-by="id" :options="lst_land_use" :multiple="true" :taggable="true"></multiselect>
                      <!--                          <select class="form-control" style="direction: rtl;font-size: 12px;" v-model="selected.land_use">-->
                      <!--                            <option selected value="-1">  {{ $t('search.select') }} </option>-->
                      <!--                            <option v-for="option in lst_land_use" :key="option.id" v-bind:value="option.id">-->
                      <!--                              {{option.title}}-->
                      <!--                            </option>-->
                      <!--                          </select>-->
                    </div>
                    <div class="form-group">
                      <label class="" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;">{{ $t('search.room_selector') }}</label>
                      <multiselect v-model="selected.rooms" :placeholder="$t('search.select_one_or_more')" label="title" track-by="id" :options="lst_room_number" :multiple="true" :taggable="true"></multiselect>
                      <!--                          <select class="form-control" style="direction: rtl;font-size: 12px;" v-model="selected.rooms">-->
                      <!--                            <option selected value="0"> {{ $t('search.select') }} </option>-->
                      <!--                            <option v-for="option in lst_room_number" :key="option.id" v-bind:value="option.id">-->
                      <!--                              {{option.title}}-->
                      <!--                            </option>-->
                      <!--                          </select>-->
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
                          <label style="font-size: 12px;">{{ $t('search.from_total_area') }}</label>
                          <input type="number" class="form-control address_search " style="background: #fff;border: 1px solid #ced4da;" v-model="selected.area_space_all_from" id="area_space_all1" placeholder="">
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
                          <label style="font-size: 12px;">{{ $t('search.to_total_area') }}</label>
                          <input type="number" class="form-control address_search " style="background: #fff;border: 1px solid #ced4da;" v-model="selected.area_space_all_to" id="area_space_all2" placeholder="">
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
                          <label style="font-size: 12px;">{{ $t('search.from_net_area') }}</label>
                          <input type="number" class="form-control address_search" style="background: #fff;border: 1px solid #ced4da;" v-model="selected.area_space_real_from" id="area_space_real1" placeholder="">
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
                          <label style="font-size: 12px;">{{ $t('search.to_net_area') }}</label>
                          <input type="number" class="form-control address_search " style="background: #fff;border: 1px solid #ced4da;" v-model="selected.area_space_real_to" id="area_space_real2" placeholder="">
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="row collapsed" style="margin-top: 35px;cursor: pointer" data-toggle="collapse" data-target="#collapseFilter_two" aria-expanded="true" aria-controls="collapseFilter_two">
              <div class="col text-right">
                <span class=" " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]"> {{ $t('search.building_spec') }} </span>
              </div>
              <div class="col-3">
                <i class="fas fa-chevron-circle-left arrow_ico"></i>
              </div>
            </div>
            <div class="row collapse" style="margin-top: 20px;" id="collapseFilter_two">

              <div class="col" style="margin: auto">
                <div class="card card-gray" style="border-radius: 8px;border:none;background-color: #f8f8f8;">
                  <div class="card-body" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">

                    <div class="form-group" v-for="itm in tags" v-bind:class="[{'Estedad_FD_Bold text-right' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold text-left' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
                      <label style="font-size: 12px;">{{ itm.title }}</label>
                      <multiselect v-model="itm.selected" :placeholder="$t('search.select_one_or_more')" label="key" track-by="value" :options="itm.docs" :multiple="true" :taggable="true"></multiselect>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div class="row" style="margin-top: 35px;">
              <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <div class="form-group text-center">
                  <label for="formControlRange" style="float: right"> {{ $t('search.estate_price') }} </label>
                  <div class="custom-control custom-checkbox text-left">
                    <input type="checkbox" class="custom-control-input" id="check_limit_price" v-model="disable_max_price">
                    <label class="custom-control-label" for="check_limit_price" style="font-size: 12px;padding-top: 4px" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' },{'Estedad_FD' : $i18n.locale=='ar' },{'Estedad' : $i18n.locale=='en'},{'Estedad' : $i18n.locale=='ru'}]">{{ $t('search.with_out_max') }}</label>
                  </div>
                  <vue-slider id="formControlRange" style="padding-top: 35px;" class="custom-range" v-model="selected.filter_price" :tooltip-formatter="vue_slider_formatter" :min="filter_price[0]" :max="filter_price[1]" :process="true"></vue-slider>
                  <small class="text-center mt-2 pt-2" v-if="disable_max_price === false">
                    {{ $t('search.show_estate_with_price') }}
                    {{ selected.filter_price[0] | numeral('0,0') }}
                    {{ $t('search.to') }}
                    {{ selected.filter_price[1] | numeral('0,0') }}
<!--                    {{ $t('search.lir') }}-->
                    {{ $storage.getUniversal('currency-object').title }}
                  </small>

                  <small class="text-center mt-2 pt-2" v-if="disable_max_price === true">
                    {{ $t('search.show_estate_with_price') }}
                    {{ selected.filter_price[0] | numeral('0,0') }}
                    {{ $t('search.to') }}
                    {{ $t('search.unlimited') }}
                  </small>

                </div>
              </div>
            </div>

            <div class="row" style="margin-top: 20px;">
              <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <div class="form-group text-center">
                  <label for="formfloorRange" style="float: right"> {{ $t('search.estate_area') }} </label>
                  <vue-slider id="formfloorRange" style="padding-top: 35px;" class="custom-range" v-model="selected.gross_space" :tooltip-formatter="vue_slider_formatter" :min="filter_gross_space[0]" :max="filter_gross_space[1]"  :process="true"></vue-slider>
                  <small class="text-center mt-2 pt-2">
                    {{ $t('search.show_estate_with_area') }}
                    {{selected.gross_space[0]}}
                    {{ $t('search.to') }}
                    {{selected.gross_space[1]}}
                    {{ $t('search.meter') }}
                  </small>
                </div>
              </div>
            </div>

            <div v-if="false" class="row" style="margin-top: 20px;">
              <div class="col" v-bind:class="[{'Estedad_FD_Bold text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <label style="font-size: 12px;" for="area_min">{{ $t('search.area_min') }} ({{ $t('search.area_unit') }})</label>
                <input type="number" class="form-control address_search" v-model="selected.area_min" @keyup.enter="do_search(true)" id="area_min" placeholder="">
              </div>
              <div class="col" v-bind:class="[{'Estedad_FD_Bold text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <label style="font-size: 12px;" for="area_max">{{ $t('search.area_max') }} ({{ $t('search.area_unit') }})</label>
                <input type="number" class="form-control address_search" v-model="selected.area_max" @keyup.enter="do_search(true)" id="area_max" placeholder="">
              </div>
            </div>

            <div v-if="false" class="row" style="margin-top: 20px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
              <div class="col-12 text-right mb-2 mt-2">
                <label style="font-size: 12px;">{{ $t('search.rooms.title') }} </label>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.zero = !selected.rooms_select.zero " v-bind:class="[{'Greenbtn' : selected.rooms_select.zero == true }]">{{ $t('search.rooms.zero') }}</button>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.one = !selected.rooms_select.one " v-bind:class="[{'Greenbtn' : selected.rooms_select.one == true }]">{{ $t('search.rooms.one') }}</button>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.two = !selected.rooms_select.two " v-bind:class="[{'Greenbtn' : selected.rooms_select.two == true }]">{{ $t('search.rooms.two') }}</button>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.three = !selected.rooms_select.three " v-bind:class="[{'Greenbtn' : selected.rooms_select.three == true }]">{{ $t('search.rooms.three') }}</button>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.four = !selected.rooms_select.four " v-bind:class="[{'Greenbtn' : selected.rooms_select.four == true }]">{{ $t('search.rooms.four') }}</button>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.five = !selected.rooms_select.five " v-bind:class="[{'Greenbtn' : selected.rooms_select.five == true }]">{{ $t('search.rooms.five') }}</button>
              </div>
              <div class="col-12 text-right mb-2 mt-2">
                <button type="button" class="btn btn-success Nobtn col" @click="selected.rooms_select.six = !selected.rooms_select.six " v-bind:class="[{'Greenbtn' : selected.rooms_select.six == true }]">{{ $t('search.rooms.six') }}</button>
              </div>
            </div>

            <div v-if="false" class="row" style="margin-top: 20px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
              <div class="col-12 text-right mb-2 mt-2">
                <label style="font-size: 12px;">{{ $t('search.attributes.title') }} </label>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="CCheck1" v-model="selected.attribute.bath">
                  <label class="custom-control-label" style="font-size: 12px;" for="CCheck1">{{ $t('search.attributes.bath') }}</label>
                </div>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="CCheck2" v-model="selected.attribute.cooler">
                  <label class="custom-control-label" style="font-size: 12px;" for="CCheck2">{{ $t('search.attributes.cooler') }}</label>
                </div>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="CCheck3" v-model="selected.attribute.water_heater">
                  <label class="custom-control-label" style="font-size: 12px;" for="CCheck3">{{ $t('search.attributes.water_heater') }}</label>
                </div>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="CCheck4" v-model="selected.attribute.heater">
                  <label class="custom-control-label" style="font-size: 12px;" for="CCheck4">{{ $t('search.attributes.heater') }}</label>
                </div>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="CCheck5" v-model="selected.attribute.garden">
                  <label class="custom-control-label" style="font-size: 12px;" for="CCheck5">{{ $t('search.attributes.garden') }}</label>
                </div>
              </div>
              <div class="col-6 text-right mb-2 mt-2">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="CCheck6" v-model="selected.attribute.phone">
                  <label class="custom-control-label" style="font-size: 12px;" for="CCheck6">{{ $t('search.attributes.phone') }}</label>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top: 20px;">
              <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <label v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 12px;" for="address">{{ $t('index.address') }}</label>
                <input type="text" class="form-control address_search" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" v-model="selected.address" @keyup.enter="do_search(true)" id="address" placeholder="">
              </div>
            </div>

            <div class="row" style="margin-top: 20px;">
              <div class="col text-right">
                <button type="button" class="btn btn-success Greenbtn col " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" @click="do_search(true)">{{ $t('search.search') }}</button>
              </div>
            </div>

          </div>

          <!--Left Side-->
          <div class="col" style="padding-top: 5px;padding-left: 0;">

            <!--Header-->
            <div class="row" style=" box-shadow: #0000000f 0px 9px 6px 0px; padding-bottom: 10px;">
              <!--Right-->
              <div class="col-4 text-right" v-if="lst_estate.length > 0">
                <div class="row">
                  <div class="col" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">
                    {{ $t('search.search_result') }}
                  </div>
                </div>
                <div class="row" style="margin-top: 5px;">
                  <div class="col" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 10px;">
                    ( {{lst_estate[0].count}} {{ $t('search.result_found') }} )
                  </div>
                </div>
              </div>

              <!--Left-->
              <div class="col text-left">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-home-tab" @click="change_content('content_list')" data-toggle="pill" href="#pills-list" role="tab" aria-controls="pills-list" aria-selected="true">{{ $t('search.list') }}</a>
                  </li>
                  <li class="nav-item" role="presentation" v-if="ExistStorage() === true">
                    <a class="nav-link" id="pills-profile-tab" @click="change_content('content_list_map')" data-toggle="pill" href="#pills-list-map" role="tab" aria-controls="pills-list-map" aria-selected="false"> {{ $t('search.list')}} + {{ $t('search.map') }}</a>
                  </li>
                  <li class="nav-item" role="presentation" v-if="ExistStorage() === true">
                    <a class="nav-link" id="pills-contact-tab" @click="change_content('content_map')" data-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">{{ $t('search.map') }}</a>
                  </li>
                  <li class="nav-item" role="presentation" v-if="ExistStorage() === true">
                    <a class="nav-link" id="pills-price-tab" @click="change_content('content_price_list')" data-toggle="pill" href="#pills-price-tab" role="tab" aria-controls="pills-price" aria-selected="false">{{ $t('search.price_chart') }}</a>
                  </li>
                </ul>
                <div class="share_icon" @click="update_share_url" data-toggle="modal" data-target="#share_Modal" :content="$t('house_card.share')" v-tippy="{placement : 'right'}"> <i class="fas fa-share-alt share_ico"></i> </div>
                <Sharing-modal :title="'Evara Search'" desc=""/>
              </div>
            </div>

            <!--Header 2-->
            <div class="row mt-4 mb-2">
              <!--Right-->
              <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <div class="row" style="margin-top: 5px;">
                  <div class="col" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]" style="font-size: 10px;">

                    <span> {{ $t('search.sort') }} </span>

                    <button type="button" class="btn btn-light colored_btn" @click="change_order('visited')" v-bind:class="{'active' : order_by == 'visited' }"> {{ $t('search.sort_most_visited') }} </button>
                    <button type="button" class="btn btn-light colored_btn" @click="change_order('popular')" v-bind:class="{'active' : order_by == 'popular' }"> {{ $t('search.sort_most_popular') }} </button>
                    <button type="button" class="btn btn-light colored_btn" @click="change_order('lowest_price')" v-bind:class="{'active' : order_by == 'lowest_price' }"> {{ $t('search.sort_cheap') }} </button>
                    <button type="button" class="btn btn-light colored_btn" @click="change_order('highest_price')" v-bind:class="{'active' : order_by == 'highest_price' }"> {{ $t('search.sort_expensive') }} </button>
                    <button type="button" class="btn btn-light colored_btn" @click="change_order('newest')" v-bind:class="{'active' : order_by == 'newest' }"> {{ $t('search.sort_the_newest') }} </button>

                  </div>
                </div>
              </div>
            </div>

            <!--Content-->
            <div class="row">
              <div class="col">
                <div class="tab-content" id="pills-tabContent">

                  <!-- Only List -->
                  <div v-if="content_list" aria-labelledby="pills-list-tab">
                    <div class="row" style="margin-top: 20px;padding: 10px;">
                      <HouseCard-map
                        v-for="item in lst_estate"
                        :key="item.id"
                        :id = "item.id"
                        :project_id="item.project_id"
                        adv_sponser="true"
                        :address="item.state + ' | ' + item.city"
                        :title="item.title"
                        :area_space="item.area_space_all"
                        :floor="item.floor_number_title"
                        :room="item.room_number_title"
                        :images="item.galleris"
                        :price="item.prices[0].price_value"
                        :price_unit="item.prices[0].unit_title"
                        :is_viewed="item.is_use"
                        :is_like="item.is_like"
                        :is_ifram_360="item.is_ifram_360"
                        :is_special="item.is_special"
                        :is_matterport="item.is_matterport"
                        :dealing_type="item.dealing_type"
                        col="col4"

                        :land_use="item.land_use_sumery"
                        :province="item.state"
                        :neghbourhod="item.neghbourhod"
                        :city="item.city"
                        :bathroom="item.bathroom"
                        :use_status="item.use_status"
                        :age_biulding="item.age_biulding"
                        :urlHelper="item.urlHelper"
                      />
                    </div>

                    <div class="row mt-2" v-if="pagination > 1">
                      <div class="col text-center">
                        <paginate
                          v-model="pagination_counter"
                          :page-count="pagination"
                          :click-handler="paginate"
                          :container-class="'mob_pagination_vue pagination_vue'"
                          :page-class="'page-item_vue'"
                          :prev-text='`<svg xmlns="http://www.w3.org/2000/svg" width="22.851" height="12" viewBox="0 0 22.851 22.851">
                                        <path id="next" d="M20.015,22.85a2.857,2.857,0,0,1-2.856-2.856V2.856A2.754,2.754,0,0,1,18,.837a2.856,2.856,0,0,1,4.039,0,2.751,2.751,0,0,1,.837,2.02V19.994a2.857,2.857,0,0,1-2.856,2.856ZM1.4,22.6q-.558.6-1.384-.29V.536Q.847-.357,1.4.245L13.968,10.577a1.211,1.211,0,0,1,.335.859,1.135,1.135,0,0,1-.335.837Z" transform="translate(-0.021)" fill="#757575"/>
                                      </svg>`'
                          :next-text='`<svg xmlns="http://www.w3.org/2000/svg" width="22.851" height="12" viewBox="0 0 22.851 22.851">
                                        <path id="next" d="M20.015,22.85a2.857,2.857,0,0,1-2.856-2.856V2.856A2.754,2.754,0,0,1,18,.837a2.856,2.856,0,0,1,4.039,0,2.751,2.751,0,0,1,.837,2.02V19.994a2.857,2.857,0,0,1-2.856,2.856ZM1.4,22.6q-.558.6-1.384-.29V.536Q.847-.357,1.4.245L13.968,10.577a1.211,1.211,0,0,1,.335.859,1.135,1.135,0,0,1-.335.837Z" transform="translate(22.872 22.851) rotate(180)" fill="#757575"/>
                                      </svg>`'>
                        </paginate>
                      </div>

                    </div>
                  </div>

                  <!-- Map And List -->
                  <div v-if="content_list_map"  aria-labelledby="pills-list-map-tab">
                    <div class="row" style="margin-top: 20px;">
                      <div class="col-8">
                        <div class="row" style="padding: 20px">
                          <HouseCard-map
                            v-for="item in lst_estate"
                            :key="item.id"
                            :id = "item.id"
                            adv_sponser="true"
                            :address="item.state + ' | ' + item.city"
                            :project_id="item.project_id"
                            :title="item.title"
                            :area_space="item.area_space_all"
                            :floor="item.floor_number_title"
                            :room="item.room_number_title"
                            :images="item.galleris"
                            :price="item.prices[0].price_value"
                            :price_unit="item.prices[0].unit_title"
                            :is_viewed="item.is_use"
                            :is_like="item.is_like"
                            :is_ifram_360="item.is_ifram_360"
                            :is_special="item.is_special"
                            :is_matterport="item.is_matterport"
                            :dealing_type="item.dealing_type"
                            col="col6"
                            :bathroom="item.bathroom"
                            :use_status="item.use_status"
                            :age_biulding="item.age_biulding"
                            :urlHelper="item.urlHelper"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="row" style="margin: 20px auto;">
                          <l-map class="leaflet_style" :zoom="leaflet_map.zoom" :center="leaflet_map.center">
                            <l-tile-layer :url="leaflet_map.url"></l-tile-layer>
                            <l-marker v-for="(star,inx) in leaflet_map.markers" :key="inx" :lat-lng="star"></l-marker>
                          </l-map>
                        </div>
                      </div>
                    </div>

                    <div class="row mt-2">
                      <div class="col" style="direction: ltr">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination justify-content-center d-flex flex-wrap">
                            <!--                            <li class="page-item" v-bind:class="{'disabled' : pagination_counter === 1 }">-->
                            <!--                              <a class="page-link" href="javascript:" @click="paginate_mines">Previous</a>-->
                            <!--                            </li>-->

                            <li v-for="(itm,indx) in pagination" class="page-item" v-bind:class="{'active' : pagination_counter == (indx + 1) }" @click="paginate(indx+1)">
                              <a class="page-link" href="javascript:">{{indx + 1}}</a>
                            </li>

                            <!--                            <li class="page-item" v-bind:class="{'disabled' : pagination_counter === pagination }">-->
                            <!--                              <a class="page-link" href="javascript:" @click="paginate_plus">Next</a>-->
                            <!--                            </li>-->
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <!-- Only Map -->
                  <div v-if="content_map"  aria-labelledby="pills-map-tab">
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
                                :bathroom="star.bathroom"
                                :use_status="star.use_status"
                                :age_biulding="star.age_biulding"
                                :urlHelper="star.urlHelper"
                              />
                            </div>
                          </l-popup>

                        </l-marker>

                      </l-map>
                    </div>
                  </div>

                  <!-- Prices List -->
                  <div v-if="content_price_list"  aria-labelledby="pills-price-tab">
                    <div class="row" style="margin: 20px auto;">
                      <div class="col">

<!--                        <column-chart-->
<!--                          :data="chart_record"-->
<!--                          width="50vw"-->
<!--                          height="400px"-->
<!--                          style="margin: auto;padding-top: 50px"-->
<!--                          :discrete="true"-->
<!--                          :curve="true"-->
<!--                          :colors="['#70c852']"-->
<!--                          :stacked="true"-->
<!--                          :messages="{empty: 'اطلاعاتی وجود ندارد'}"-->
<!--                        ></column-chart>-->

                        <line-chart :data="chart_record" :colors="['#41b7dc']" width="50vw" height="400px" style="margin: auto;padding-top: 50px"></line-chart>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" style="direction: rtl" id="property_modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' },{'Estedad_FD_Bold' : $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en'},{'Estedad_Bold' : $i18n.locale=='ru'}]" style="font-size: 14px;"> {{ $t('search.more_filter') }} </h5>
          </div>

          <div class="modal-body">

            <div class="row row-cols-1 row-cols-md-3">

              <div class="col mb-3" v-for="(item,indx) in lst_properties" :key="indx">
                <div class="form-group" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  <label class="filter_property_lbl">{{lst_properties[indx].title}}</label>
                  <select class="form-control" style="direction: rtl;font-size: 12px;" :id="'property_'+lst_properties[indx].id">
                    <option selected value="-1">{{ $t('search.select') }}</option>
                    <option v-for="option in lst_properties[indx].values" :key="option.value_id" v-bind:value="option.value_id">
                      {{option.value}}
                    </option>
                  </select>
                </div>
              </div>

            </div>

          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('search.close') }}</button>
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
      page_static: {
        login_btn: true
      }
      , vue_slider_formatter : v => `${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
      , tags:[]
      , selected: {
        province: {},
        city: {},
        neighbourhood: {},
        alley: {},
        postal_code: '',
        address: '',
        area_min: '',
        area_max: '',
        rooms_select:{
          zero:false,
          one:false,
          two:false,
          three:false,
          four:false,
          five:false,
          six:false,
        },
        attribute:{
          bath:false,
          cooler:false,
          water_heater:false,
          heater:false,
          garden:false,
          phone:false,
        },
        area_space_all: '',
        area_space_all_from: '',
        area_space_all_to: '',
        area_space_real: '',
        area_space_real_from: '',
        area_space_real_to: '',
        dealing_type: [],
        rooms: [],
        land_use: [],
        estate_type: [],
        filter_price : [1,9999999],
        gross_space : [1,6000],
      }
      , filter_gross_space : [1,6000]
      , filter_price : [1,9999999]
      , disable_max_price : true
      , price_interval : 50000
      , chart_record : []
      , leaflet_map: {
        url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://evara.life">Evara</a> contributors',
        zoom: 7,
        center: [39.932155, 32.828176],
        markers: [],
      }
      , lst_provinces: []
      , lst_cities: []
      , lst_neighbourhood: []
      , lst_alley: []

      , lst_estate: []
      , lst_dealing_type: []
      , lst_land_use: []
      , lst_estate_type: []
      , lst_properties: []
      , lst_room_number: []

      , content_list : true
      , content_list_map : false
      , content_map : false
      , content_price_list : false

      , pagination : 1
      , pagination_counter : 1
      , all_result_counter : 9
      , last_id : -1
      , show_counter : 21

      , order_by : 'newest' //visited  //popular  //lowest_price  //highest_price  //newest

      , url: 'https://www.evara.life'+this.$router.currentRoute.fullPath

      , checker_firster : {
        city : false,
        neighbourhood : false,
        alley : false,
      }

      , value_range_1 : 0
      , prevRoute: null
      , searchParams: null
      , url_historic : []


      , value: []
      , options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ]
    }
  }
  , methods: {
    gotopage(page) {
      this.$router.push(this.localePath({path: page}));
    }
    , auth() {
      if (this.ExistStorage()) {
        this.page_static.login_btn = false;
      } else {
        this.page_static.login_btn = true;
      }
    }
    , ExistStorage() {
      if (this.$storage.getUniversal('token')) return true;
      else return false;
    }
    , fetch_dealing_type() {

      this.$axios.$post('list_of_dealing_type',{
        language : this.$i18n.locale
      })
        .then((response) => {

          if (response[0].res === -5){
            this.DestroyStorage()
          }
          this.lst_dealing_type = response;

          if(this.$route.query.type) {
            for (var i=0 ; i <this.lst_dealing_type.length;i++){
              if (this.lst_dealing_type[i].id == this.$route.query.type){
                this.selected.dealing_type = this.lst_dealing_type[i]
              }
            }
          }

          if (response[0].res === -5){
            this.DestroyStorage()
          }

        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_land_use() {

      this.$axios.$post('list_of_land_use',{
        language : this.$i18n.locale
      })
        .then((response) => {

          if (response[0].res === -5){
            this.DestroyStorage()

          }
          this.lst_land_use = response;

          if (response[0].res === -5){
            this.DestroyStorage()

          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_estate_type() {

      this.$axios.$post('list_of_estate_type',{
        language : this.$i18n.locale
      })
        .then((response) => {

          if (response[0].res === -5){
            this.DestroyStorage()

          }
          this.lst_estate_type = response;

          if (response[0].res === -5){
            this.DestroyStorage()

          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_properties() {
      this.$axios.$post('list_of_properties',{
        language : this.$i18n.locale
      })
        .then((response) => {
          if (response[0].res === -5){
            this.DestroyStorage()
          }
          this.lst_properties = response;

          for (var i = 0; i < response.length; i++){
            var docs = [];
            for (var j = 0; j < response[i].values.length; j++){
              docs.push({ key: response[i].values[j].value, value: response[i].values[j].value_id })
            }
            this.tags.push({ id : response[i].id ,title : response[i].title , docs : docs , selected : [] })
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_province() {

      this.$axios.$post('list_of_state',{
        language : this.$i18n.locale
      })
        .then((response) => {
          if (response[0].res === -5){
            this.DestroyStorage()

          }

          for (var i = 0; i < response.length; i++) {
            this.lst_provinces.push({
              value: response[i].id, text: response[i].title
            })
          }

          if (this.$route.query.province) {
            for (var i=0;i<this.lst_provinces.length;i++){
              if (parseInt(this.lst_provinces[i].value) === parseInt(this.$route.query.province)){
                this.selected.province = this.lst_provinces[i];

                if (!this.$route.query.city) {
                  if (this.checker_firster.city === false){
                    this.do_search(false);
                  }
                  this.checker_firster.city = true;
                }
                else {
                  if (this.lst_cities.length > 0){
                    this.fetch_city(true);
                  }
                }
              }
            }
          }else{
            if (this.checker_firster.city === false){
              this.do_search(false);
            }
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_room_number() {

      this.$axios.$post('list_room_number', {
        language: this.$i18n.locale,
      })
        .then((response) => {

          this.lst_room_number = response;

          if (response[0].res === -5){
            this.DestroyStorage()

          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , fetch_city(first = false) {
      this.selected.city = {};
      this.lst_cities = [];
      if (typeof this.selected.province.value === 'undefined') {
        this.lst_cities = [];
      } else {

        this.$axios.$post('list_of_city', {
          state_id: this.selected.province.value,
          language : this.$i18n.locale
        })
          .then((response) => {

            this.lst_cities = [];
            if (response[0].res === -5){
              this.DestroyStorage()

            }

            if (response.length > 0){
              this.lst_cities.push({value: 0, text: 'همه'})
            }

            for (var i = 0; i < response.length; i++) {
              this.lst_cities.push({
                value: response[i].id, text: response[i].title
              })
            }
            this.selected.city = this.lst_cities[0];

            if (first === true || this.checker_firster.city === false){
              if (this.$route.query.city) {
                for (var i=0;i<this.lst_cities.length;i++){
                  if (parseInt(this.lst_cities[i].value) === parseInt(this.$route.query.city)){
                    this.selected.city = this.lst_cities[i];
                  }
                }

                if (!this.$route.query.neighbourhood) {
                  this.checker_firster.neighbourhood = true;
                  if (this.checker_firster.city === false){
                    this.do_search(false);
                  }
                }
                else {
                  if (this.lst_neighbourhood.length > 0){
                    this.fetch_neighbourhood(true);
                  }
                }
              }
              this.checker_firster.city = true;
            }else{

            }

            if (response[0].res === -5){
              this.DestroyStorage()

            }

          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , fetch_neighbourhood(first = false) {
      this.selected.neighbourhood = {};
      this.lst_neighbourhood = [];
      if (typeof this.selected.city.value === 'undefined') {
        this.lst_neighbourhood = [];
      } else {

        this.$axios.$post('list_of_neghbourhod', {
          city_id: this.selected.city.value,
          language : this.$i18n.locale
        })
          .then((response) => {


            if (response[0].res === -5){
              this.DestroyStorage()

            }

            this.lst_neighbourhood = [];

            if (response.length > 0){
              this.lst_neighbourhood.push({value: 0, text: 'همه'})
            }

            for (var i = 0; i < response.length; i++) {
              this.lst_neighbourhood.push({
                value: response[i].id, text: response[i].title
              })
            }

            this.selected.neighbourhood = this.lst_neighbourhood[0];

            if (first === true || this.checker_firster.neighbourhood === false){
              if (this.$route.query.neighbourhood) {
                for (var i=0;i<this.lst_neighbourhood.length;i++){
                  if (parseInt(this.lst_neighbourhood[i].value) === parseInt(this.$route.query.neighbourhood)){
                    this.selected.neighbourhood = this.lst_neighbourhood[i];
                    this.checker_firster.neighbourhood = true;
                  }

                }
              }

              if (!this.$route.query.alley) {
                if (this.checker_firster.neighbourhood === false){
                  this.do_search(false);
                }
                this.checker_firster.alley = true;
              }
              else {
                if (this.lst_alley.length > 0){
                  this.fetch_alley(true);
                }
              }

            }else{

            }

            if (response[0].res === -5){
              this.DestroyStorage()

            }

          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , fetch_alley(first = false) {
      this.selected.alley = {};
      this.lst_alley = [];
      if (typeof this.selected.neighbourhood.value === 'undefined') {
        this.lst_alley = [];
      } else {

        this.$axios.$post('list_of_alley', {
          neghburhod_id: this.selected.neighbourhood.value,
          language : this.$i18n.locale
        })
          .then((response) => {

            this.lst_alley = [];
            if (response[0].res === -5){
              this.DestroyStorage()

            }
            if (response.length > 0){
              this.lst_alley.push({value: 0, text: 'همه'})
            }

            for (var i = 0; i < response.length; i++) {
              this.lst_alley.push({
                value: response[i].id, text: response[i].title
              })
            }

            this.selected.alley = this.lst_alley[0];

            if (first === true || this.checker_firster.alley === false){
              if (this.$route.query.alley) {
                for (var i=0;i<this.lst_alley.length;i++){
                  if (parseInt(this.lst_alley[i].value) === parseInt(this.$route.query.alley)){
                    this.checker_firster.alley = true;
                    this.selected.alley = this.lst_alley[i];
                  }
                }
              }
              // this.do_search(true);
            }

            if (response[0].res === -5){
              this.DestroyStorage()

            }

          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    , change_content(content){
      if (content === 'content_list') {
        this.content_list = true;
        this.content_list_map = false;
        this.content_map = false;
        this.content_price_list = false;
      }

      if (content === 'content_list_map') {
        this.content_list = false;
        this.content_list_map = true;
        this.content_map = false;
        this.content_price_list = false;
      }

      if (content === 'content_map') {
        this.content_list = false;
        this.content_list_map = false;
        this.content_map = true;
        this.content_price_list = false;
      }

      if (content === 'content_price_list') {
        this.content_list = false;
        this.content_list_map = false;
        this.content_map = false;
        this.content_price_list = true;
      }

    }
    , paginate(){
      // this.pagination_counter = page;
      window.scrollTo({ top: 0, behavior: `smooth` })
      this.insertUrlParam('page',this.pagination_counter)
      this.do_search(false);
    }
    , paginate_plus(){
      if (this.pagination_counter < this.pagination){
        this.pagination_counter++;
        this.do_search(true);
        // this.insertUrlParam('page',this.pagination_counter)
      }
    }
    , paginate_mines(){
      if (this.pagination_counter > 1){
        this.pagination_counter--;
        this.do_search(true);
        // this.insertUrlParam('page',this.pagination_counter)
      }
    }
    , change_order(new_order){
      this.order_by = new_order;
      this.do_search(true);
      // this.insertUrlParam('order_by',new_order)
    }
    , copyTestingCode () {
      let testingCodeToCopy = document.querySelector('#testing-code')
      testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
      testingCodeToCopy.select()
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
      } catch (err) {
        alert('Oops, unable to copy');
      }
    }
    , insertUrlParam(key, value) {
      if (history.pushState) {
        if (this.searchParams === null){
          this.searchParams = new URLSearchParams(window.location.search)
        }
        this.searchParams.set(key, value);
      }
    }
    , setUrlParam(){
      let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + this.searchParams.toString();
      this.url_historic.push(newurl);
      // console.log('newurl ' , newurl)
      // console.log('url_historic ' , this.url_historic)
      window.history.pushState({path: newurl}, '', newurl);
    }
    , clearurlparams(){
      this.searchParams =null;
      // var myHistory = [];
      // window.history.pushState(myHistory, "", "evara_search"); // myHistory[], "<name>", "<url>"
    }
    , update_share_url(){

      var href = window.location.href;
      var n = href.indexOf("www.evara.life");
      if ( n >= 0 ){
        this.url = href;
      }else{
        href = href.replace("evara.life", "www.evara.life");
        this.url = href;
      }


    }

    , do_search(is_paginate = false,is_history = false) {
      var property_selected = [];
      for (var i = 0; i < this.lst_properties.length; i++) {
        var prt_id = this.lst_properties[i].id;
        var prt_value = $("#property_" + prt_id).val();

        if (prt_value !== "-1") {
          property_selected.push(prt_value)
        }
      }

      let formData = new FormData();

      this.clearurlparams();

      if (is_paginate === true){
        this.pagination_counter = 1;
      }

      this.insertUrlParam('page',this.pagination_counter);

      this.insertUrlParam('order_by',this.order_by);

      if (typeof this.selected.province.value !== 'undefined') {
        formData.append('state_id', this.selected.province.value);
        this.insertUrlParam('province', this.selected.province.value);
      }
      if (this.selected.dealing_type.length > 0) {
        var _dealing_type = [];
        for (var i = 0; i < this.selected.dealing_type.length; i++){
          _dealing_type.push(this.selected.dealing_type[i].id)
        }
        formData.append('dealing_type_id', JSON.stringify(_dealing_type));
        // formData.append('dealing_type_id', this.selected.dealing_type);
        // this.insertUrlParam('type', this.selected.dealing_type);
      }
      if (this.selected.estate_type.length > 0) {
        var _estate_type = [];
        for (var i = 0; i < this.selected.estate_type.length; i++){
          _estate_type.push(this.selected.estate_type[i].id)
        }
        formData.append('estate_type_id', JSON.stringify(_estate_type));
        // formData.append('estate_type_id', this.selected.estate_type);
        // this.insertUrlParam('estate_type', this.selected.estate_type);
      }
      if (this.selected.land_use.length > 0) {
        var _land_use = [];
        for (var i = 0; i < this.selected.land_use.length; i++){
          _land_use.push(this.selected.land_use[i].id)
        }
        formData.append('land_use', JSON.stringify(_land_use));
        // formData.append('land_use_id', this.selected.land_use);
        // this.insertUrlParam('land_use', this.selected.land_use);
      }
      if (this.selected.rooms.length > 0) {
        var _rooms = [];
        for (var i = 0; i < this.selected.rooms.length; i++){
          _rooms.push(this.selected.rooms[i].id)
        }
        formData.append('room_number_id', JSON.stringify(_rooms));
        // formData.append('room_number_id', this.selected.rooms);
        // this.insertUrlParam('room_number_id', this.selected.rooms);
      }
      if ((typeof this.selected.city.value !== 'undefined') && (this.selected.city.value !== 0)) {
        formData.append('city_id', this.selected.city.value);
        this.insertUrlParam('city', this.selected.city.value);
      }
      if ((typeof this.selected.neighbourhood.value !== 'undefined') && (this.selected.neighbourhood.value !== 0)) {
        formData.append('neghbourhod_id', this.selected.neighbourhood.value);
        this.insertUrlParam('neighbourhood', this.selected.neighbourhood.value);
      }
      if ((typeof this.selected.alley.value !== 'undefined') && (this.selected.alley.value !== 0)) {
        formData.append('alley_id', this.selected.alley.value);
        this.insertUrlParam('alley', this.selected.alley.value);
      }
      if (this.selected.postal_code !== '') {
        formData.append('postal_code', this.selected.postal_code);
        this.insertUrlParam('postal_code', this.selected.postal_code);
      }
      if (this.selected.address !== '') {
        formData.append('address', this.selected.address);
        this.insertUrlParam('search', this.selected.address)
      }
      if (this.selected.area_space_all_from !== '') {
        formData.append('area_space_all_from', this.selected.area_space_all_from);
        this.insertUrlParam('area_space_all_from', this.selected.area_space_all_from);
      }
      if (this.selected.area_space_all_to !== '') {
        formData.append('area_space_all_to', this.selected.area_space_all_to);
        this.insertUrlParam('area_space_all_to', this.selected.area_space_all_to);
      }
      if (this.selected.area_space_real_from !== '') {
        formData.append('area_space_real_from', this.selected.area_space_real_from);
        this.insertUrlParam('area_space_real_from', this.selected.area_space_real_from);
      }
      if (this.selected.area_space_real_to !== '') {
        formData.append('area_space_real_to', this.selected.area_space_real_to);
        this.insertUrlParam('area_space_real_to', this.selected.area_space_real_to);
      }

      if (property_selected.length > 0) {
        formData.append('property_array', JSON.stringify(property_selected));
      }

      if (this.disable_max_price === true) this.insertUrlParam('max_price', 9999999);
      else this.insertUrlParam('max_price', this.selected.filter_price[1]);

      this.insertUrlParam('min_price', this.selected.filter_price[0]);
      this.insertUrlParam('min_space', this.selected.gross_space[0]);
      this.insertUrlParam('max_space', this.selected.gross_space[1]);

      formData.append('language' , this.$i18n.locale)
      formData.append('token' , this.$storage.getUniversal('token'))
      formData.append('currency' , this.$storage.getUniversal('currency'))
      formData.append('last_id' , this.last_id)
      formData.append('pagination' , this.pagination_counter)
      formData.append('count' , this.show_counter)
      formData.append('ordering' , this.order_by)
      formData.append('gross_space_min' , this.selected.gross_space[0])
      formData.append('gross_space_max' , this.selected.gross_space[1])
      formData.append('price_min' , this.selected.filter_price[0])
      formData.append('area_min' , this.selected.area_min)
      formData.append('area_max' , this.selected.area_max)
      // formData.append('rooms' , JSON.stringify(this.selected.rooms_select))
      // formData.append('attribute' , JSON.stringify(this.selected.attribute))


      // Add Tag Attributes
      var attribute_tags = []
      for (var q = 0; q < this.tags.length; q++){
        if (this.tags[q].selected.length > 0){
          var selected_tags = []
          for (var t = 0; t < this.tags[q].selected.length; t++){
            selected_tags.push(this.tags[q].selected[t].value)
          }
          attribute_tags.push({
            attribute_id : this.tags[q].id,
            selected : selected_tags,
          })
        }
      }
      if (attribute_tags.length > 0) {
        formData.append('attribute_tags', JSON.stringify(attribute_tags));
      }

      if (this.disable_max_price === true){
        formData.append('price_max' , -1)
      }else{
        formData.append('price_max' , this.selected.filter_price[1])
      }

      this.leaflet_map.markers = [];
      this.lst_estate = [];

      if (is_history === false) this.setUrlParam();

      this.$axios.$post('advanced_search', formData)
        .then((response) => {

          if ( 'search' in response[0]) {
            // if (response[0].length > 1) {
              this.lst_estate = response[0].search;
            // }


            for (var z=0;z<response[0].year_chart.length; z++){
              this.chart_record.push([response[0].year_chart[z].date.toString(),parseFloat(response[0].year_chart[z].avrage)])
            }

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
                , urlHelper: this.lst_estate[i].urlHelper
              })

              this.last_id = this.lst_estate[i].id;
              window.scrollTo(0, 0);
            }
            this.leaflet_map.center = this.lst_estate[0].coordinate.toString().split(",");

            this.all_result_counter = this.lst_estate[0].count;
            this.last_id = this.lst_estate[0].id;

            var page_stp_1 = parseFloat(this.all_result_counter / this.show_counter);
            this.pagination =  parseInt( page_stp_1 );

            if (page_stp_1 > this.pagination ){
              this.pagination = this.pagination + 1;
            }

          }
          else {

            this.all_result_counter = 0;
            this.last_id = -1;
            this.pagination = 0;

            // this.$toast.warning(message);

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
    this.searchParams = new URLSearchParams(window.location.search);

    if(this.$route.query.search) {
      this.selected.address = this.$route.query.search;
    }

    if(this.$route.query.type) {
      if (this.$route.query.type === 'buy'){
        this.selected.dealing_type = 5;
      }else if (this.$route.query.type === 'rent'){
        this.selected.dealing_type = 6;
      }
    }

    if(this.$route.query.page) {
      this.pagination_counter = this.$route.query.page;
    }

    if(this.$route.query.area_space_real) {
      this.selected.area_space_real = this.$route.query.area_space_real;
    }

    if(this.$route.query.area_space_real_from) {
      this.selected.area_space_real_from = this.$route.query.area_space_real_from;
    }

    if(this.$route.query.area_space_real_to) {
      this.selected.area_space_real_to = this.$route.query.area_space_real_to;
    }

    if(this.$route.query.area_space_all) {
      this.selected.area_space_all = this.$route.query.area_space_all;
    }

    if(this.$route.query.area_space_all_from) {
      this.selected.area_space_all_from = this.$route.query.area_space_all_from;
    }

    if(this.$route.query.area_space_all_to) {
      this.selected.area_space_all_to = this.$route.query.area_space_all_to;
    }

    if(this.$route.query.postal_code) {
      this.selected.postal_code = this.$route.query.postal_code;
    }

    if(this.$route.query.land_use) {
      // this.selected.land_use = this.$route.query.land_use;
    }

    if(this.$route.query.estate_type) {
      // this.selected.estate_type = this.$route.query.estate_type;
    }

    if(this.$route.query.min_price) {
      this.selected.filter_price[0] = this.$route.query.min_price;
    }

    if(this.$route.query.max_price) {
      this.selected.filter_price[1] = this.$route.query.max_price;
      if (this.$route.query.max_price.toString() != '9999999'){
        this.disable_max_price = false;
      }else{
        this.disable_max_price = true;
      }
    }

    if(this.$route.query.min_space) {
      this.selected.gross_space[0] = this.$route.query.min_space;
    }

    if(this.$route.query.max_space) {
      this.selected.gross_space[1] = this.$route.query.max_space;
    }

    if(this.$route.query.order_by) {
      this.order_by = this.$route.query.order_by;
    }

    if(this.$route.query.room_number_id) {
      // this.selected.rooms = this.$route.query.room_number_id;
    }

    this.auth();
    this.fetch_province();
    this.fetch_dealing_type();
    this.fetch_room_number();
    this.fetch_land_use();
    this.fetch_estate_type();
    this.fetch_properties();


    // if back button is pressed
    window.onpopstate = (event) => {
      // console.log('B 1');
      if (event !== null && event !== undefined){
        // console.log('Back Pressed');
        // console.log('GOTO : ' , this.prevRoute);

        //this.prevRoute === null &&
        if (this.url_historic.length > 0){
          console.log('GOBACK TO HISTORY')
          var last_historic = this.url_historic[this.url_historic.length-1];
          window.history.pushState({path: last_historic}, '', last_historic);
          // this.$router.push(last_historic);
          this.url_historic.splice(this.url_historic.length-1,1);

          var historic_params = last_historic.split('?');
          historic_params = historic_params[1].split('&');


          for (var z=0; z <historic_params.length ; z++){
            var selected_itm = historic_params[z].split('=');

            if(selected_itm[0] === 'search') {
              if (selected_itm[1] != 'null') this.selected.address = selected_itm[1];
            }
            else if(selected_itm[0] === 'page') {
              if (selected_itm[1] != 'null') this.pagination_counter = selected_itm[1];
            }
            else if(selected_itm[0] === 'area_space_real') {
              if (selected_itm[1] != 'null') this.selected.area_space_real = selected_itm[1];
            }
            else if(selected_itm[0] === 'area_space_all') {
              if (selected_itm[1] != 'null') this.selected.area_space_all = selected_itm[1];
            }
            else if(selected_itm[0] === 'postal_code') {
              if (selected_itm[1] != 'null') this.selected.postal_code = selected_itm[1];
            }
            else if(selected_itm[0] === 'land_use') {
              if (selected_itm[1] != 'null') this.selected.land_use = selected_itm[1];
            }
            else if(selected_itm[0] === 'min_price') {
              if (selected_itm[1] != 'null') this.selected.filter_price[0] = selected_itm[1];
            }
            else if(selected_itm[0] === 'max_price') {
              if (selected_itm[1] != 'null') this.selected.filter_price[1] = selected_itm[1];
            }
            else if(selected_itm[0] === 'min_space') {
              if (selected_itm[1] != 'null') this.selected.gross_space[0] = selected_itm[1];
            }
            else if(selected_itm[0] === 'max_space') {
              if (selected_itm[1] != 'null') this.selected.gross_space[1] = selected_itm[1];
            }
            else if(selected_itm[0] === 'order_by') {
              if (selected_itm[1] != 'null') this.order_by = selected_itm[1];
            }

            else if(selected_itm[0] === 'type') {
              if (selected_itm[1] != 'null') {
                if (selected_itm[1] === 'buy'){
                  this.selected.dealing_type = 5;
                }else if (selected_itm[1] === 'rent'){
                  this.selected.dealing_type = 6;
                }else{
                  this.selected.dealing_type = selected_itm[1];
                }
              }
            }

          }

          this.do_search(false,true);

          // console.log('BACK url_historic : ' , this.url_historic)
          // console.log(' ');
          // console.log(' -------------- ');
          // console.log(' ');
        }

        else{
          console.log('GOBACK TO :' , this.prevRoute.name.toString())
          window.location.href = this.prevRoute.fullPath.toString();
          this.do_search(false);
        }
      }
    };

  }
  , beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
      // console.log('to : ' , to)
    })
  }
  , watch: {
    'selected.filter_price': function (val) {
      if (val[1] != this.filter_price[1]){
        this.disable_max_price = false;
      }else{
        this.disable_max_price = true;
      }
      console.log('val filter : ' , val)
    }
  }
  , head () {
    return {
      title: this.$t('siteTitle.search'),
      meta: [
        {
          hid: 'جستجوی ملک',
          name: 'جستجوی ملک',
          content: 'در دنیای املاک ترکیه ، ملک مورد نظر خود را بیابید'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'جستجوی ملک',
          template: chunk => `${chunk} - Evara.life`,

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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

@import "https://cdn.jsdelivr.net/npm/@voerro/vue-tagsinput@2.7.0/dist/style.css";

/*Master Card Style*/

.master_card {
  border-radius: 12px;
  box-shadow: 0 0 10px 0 #00000029;
}

.right_side{
  border-left: solid 1px #bbbbbb;
  padding-right: 0;
  padding-bottom: 15px;
}

.Greenbtn{
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color:white !important;
  background-image: linear-gradient(to left, #88c547, #43b5e2) !important;
}

.Nobtn{
  border: solid 1px #a0a0a0;
  border-radius: 5px;
  color: #a0a0a0;
  font-size: 12px;
  background: none;
}

.address_search{
  height: 31px;
  border-radius: 5px;
  background-color: #f8f9fa;
  border: none;
}

.nav-pills{
  background-color: #eeeeee;
  border-radius: 16px;
  padding-right: 0;
  float: left;
  color: #bbbbbb;
}

.nav-link{
  color: #bbbbbb;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
  color: #fff;
  background-image: linear-gradient(to left, #88c547, #43b5e2);
  border-radius: 8px;
}

.leaflet_style{
  height: 550px;
  width: 100%;
  border-radius: 10px;
}

.arrow_ico{
  transition: all .3s;
  color: #989898;
  transform: rotate(-90deg);
  font-size: 18px;
  padding-top: 4px;
}

.collapsed .col-3 .arrow_ico{
  transform: rotate(0deg);
}

.filter_property_lbl{
  font-size: 12px;
  text-align: left;
}

.colored_btn{
  transition: all 0.3s;
  color: #979797;
  font-size: 10px;
  margin: auto 8px;
  border: none;
}

.colored_btn.active{
  transition: all 0.3s;
  color: #fff !important;
  background-image: linear-gradient(to left, #88c547, #43b5e2);
  border-radius: 8px;
  font-size: 10px;
  border: none;
}

.share_icon{
  -webkit-transition: all .3s;
  transition: all .3s;
  cursor: pointer;
  width: 30px;
  height: 30px;
  opacity: .7;
  border-radius: 50%;
  background-color: #e2e2e2;
  color: #63bd9c;
  outline: none;
  padding-left: 6px;
  padding-top: 5px;
  margin: auto;
  position: relative;
  float: left;
  margin-top: 5px;
  margin-left: 20px;
}

.share_icon:hover{
  opacity: 1;
}

.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}

.pagination_vue{
  float: none;
  direction: rtl;
  border: solid 1px #dcdcdc;
}

.v-select-toggle{
  background-color: #e6e6e6 !important;
}

.card-gray{
  background-color: rgb(239 239 239) !important;
}
</style>
