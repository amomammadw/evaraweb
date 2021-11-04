<template>
  <div>
    <!--Megamenu - Login -->
    <ul class="mega-menu login" id="mnu_mega_login" style="width: 260px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
      <li class="list-group-item menu_itm" style="direction: rtl !important;cursor:auto">

        <!--Part : Header -->
        <div class="row" style="margin-bottom: 15px;">
          <div class="col text-right">
            <form class="form-inline">
              <div class="form-group m-auto" style="margin-left: -8px !important;">
                <button type="button" class="btn btn-primary mb-2 mgn_btn_header_login_active" v-if="login_box.step_login">{{ $t('header.login') }}</button>
                <button type="button" class="btn btn-primary mb-2 mgn_btn_header_login_deactive" v-if="login_box.step_register_1 || login_box.step_register_2 || login_box.step_register_3" @click="change_login_content('login')">{{ $t('header.login') }}</button>
              </div>
              <div class="form-group m-auto" style="margin: auto 0 !important;">
                <span class="mb-2 circle_separator"> {{ $t('login.or') }} </span>
              </div>
              <div class="form-group m-auto" style="margin-right: -8px !important;">
                <button type="button" class="btn btn-primary mb-2 mgn_btn_header_register_deactive" v-if="login_box.step_login" @click="change_login_content('register')">{{ $t('login.register') }} </button>
                <button type="button" class="btn btn-primary mb-2 mgn_btn_header_register_active" v-if="login_box.step_register_1 || login_box.step_register_2 || login_box.step_register_3">{{ $t('login.register') }} </button>
              </div>
            </form>
          </div>
        </div>

        <!--Part : Login -->
        <div id="login_content" v-if="login_box.step_login">
          <div class="mg-mnu">

            <div class="row">
              <div class="col text-right">

                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="login_input_1" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('login.username') }} </label>
                  <input type="text" class="form-control mgn_input" id="login_input_1" @keyup.enter="login" v-model="login_box.lgn_username" placeholder="Username">
                </div>

                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="login_input_2" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.password') }}</label>
                  <input type="password" class="form-control mgn_input" id="login_input_2" @keyup.enter="login" v-model="login_box.lgn_password">
                </div>

                <div class="form-row" style="margin-bottom: .5rem;margin-top: 1.2rem;">
                  <!--                          <div class="col">-->
                  <!--                            <div class="form-group" style="margin-bottom: 0px;">-->
                  <!--                              <div class="form-check" style="padding-left: 1rem;">-->
                  <!--                                <input class="form-check-input" type="checkbox" value="" id="Check1">-->
                  <!--                                <label class="form-check-label mgn_form_label Estedad_Bold" style="margin-right: 20px;" for="Check1">  به خاطر سپردن  </label>-->
                  <!--                              </div>-->
                  <!--                            </div>-->
                  <!--                          </div>-->
                  <div class="col text-center">
                    <div class="form-group" style="margin-bottom: 0px;">
                      <a href="javascript:"  @click="close_menu" data-toggle="modal" data-target="#forgetpass_modal" class="mgn_form_a" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('login.forget_password') }}</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="row" style="padding-right: 15px; padding-left: 15px;margin-top: 10px;">
              <button type="button" class="btn btn-primary col mb-2 mgn_login_button" @click="login">{{ $t('header.login') }}</button>
            </div>

          </div>
          <div class="row" style="margin: 15px 0;border-bottom: solid 1px rgba(46, 46, 46, 0.2);"></div>
          <div class="mg-mnu">
            <div class="row">
              <div class="col text-center">
                <g-signin-button
                  :params="googleSignInParams"
                  @success="onSignInSuccess"
                  @error="onSignInError">
                  {{ $t('login.google') }}
                </g-signin-button>
              </div>
            </div>
          </div>
        </div>

        <!--Part 1 : Register -->
        <div id="register_content_stp1" v-if="login_box.step_register_1">
          <div class="mg-mnu">

            <!-- DESC -->
            <div class="row">
              <div class="col text-right">
                <div class="form-group" style="margin-bottom: .5rem;">

                  <p class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="text-align: right;font-size: 16px"> {{ $t('login.auth') }} </p>

                  <div class="custom-control custom-switch text-center mt-3 mb-3">
                    <input type="checkbox" class="custom-control-input" id="Switch_is_mobile" v-model="login_box.register_with_mobile">
                    <label class="custom-control-label" for="Switch_is_mobile"> {{ $t('login.is_mobile') }} </label>
                  </div>

                  <p class="mgn_form_label"
                     v-if="login_box.register_with_mobile === false"
                     v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                     style="text-align: justify">
                    {{ $t('login.auth_desc') }}
                  </p>  <!-- Desc : Email -->

                  <p class="mgn_form_label"
                     v-if="login_box.register_with_mobile === true"
                     v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                     style="text-align: justify">
                    {{ $t('login.auth_desc_mobile') }}
                  </p>  <!-- Desc : Mobile -->

                </div>
              </div>
            </div>

            <!-- Register Email -->
            <div class="row" v-if="login_box.register_with_mobile === false">
              <div class="col text-right">
                <div class="form-group" style="margin-bottom: .5rem;">
                  <label class="mgn_form_label"
                         v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                    {{ $t('login.email') }}</label>
                  <input type="text" class="form-control mgn_input" placeholder="name@example.com" v-model="login_box.register_email_value">
                </div>
              </div>
            </div>

            <!-- Register Mobile -->
            <div class="row" v-if="login_box.register_with_mobile === true">
              <div class="col text-right">

                <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" datatype="required">{{ $t('add_house.mobile') }}</label>

                <div class="input-group text-right mb-3"  style="margin-bottom: .5rem;">
                  <input type="text" class="form-control grouped_input input-price" v-mask="'##########'"  v-model="login_box.register_mobile_value">
                  <div class="input-group-prepend">
                    <select class="form-control grouped_select" v-model="login_box.register_mobile_subcode_value">
                      <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in login_box.list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                    </select>
                  </div>
                </div>

              </div>
            </div>

            <div class="row" style="padding-right: 15px; padding-left: 15px;margin-top: 10px;">
              <button type="button" class="btn btn-primary col mb-2 mgn_login_button" @click="register">{{ $t('login.complete_sign') }}</button>
            </div>

          </div>
        </div>

        <!--Part 2 : Register -->
        <div id="register_content_stp2" v-if="login_box.step_register_2">
          <div class="mg-mnu">

            <div class="row">
              <div class="col text-right">
                <div class="form-group" v-if="login_box.register_with_mobile === false" style="margin-bottom: .5rem;">
                  <p class="mgn_form_label "
                     v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                     style="text-align: right;font-size: 16px"> {{ $t('login.verify_email') }} </p>
                  <p class="mgn_form_label"
                     v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                     style="text-align: justify">
                    {{ $t('login.verify_email_desc') }}
                  </p>
                </div>
                <div class="form-group" v-if="login_box.register_with_mobile === true" style="margin-bottom: .5rem;">
                  <p class="mgn_form_label "
                     v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                     style="text-align: right;font-size: 16px"> {{ $t('login.verify_mobile') }} </p>
                  <p class="mgn_form_label"
                     v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"
                     style="text-align: justify">
                    {{ $t('login.verify_mobile_desc') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col text-right">
                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_2" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.verify_code') }}</label>
                  <input type="text" class="form-control mgn_input" id="register_stp1_input_2" maxlength="5" v-model="login_box.register_email_key">
                </div>
              </div>
            </div>

            <div class="row text-center" style="margin-top: 10px;">
              <div class="col-12" v-if="!login_box.register_retry">
                <span style="text-align: center; padding-top: 6px; padding-left: 0; font-size: 16px;" id="countdown">  </span>
              </div>
              <div class="col-12" v-if="login_box.register_retry">
                <button type="button" class="btn btn-primary col mb-2 mgn_back_button" @click="login_box.step_register_1 = true;login_box.step_register_2 = false">{{ $t('login.retry_input') }}</button>
              </div>
            </div>

            <div class="row" style="padding-right: 15px; padding-left: 15px;margin-top: 10px;">
              <button type="button" class="btn btn-primary col mb-2 mgn_login_button" @click="register_with_key">{{ $t('login.verify_code_btn') }}</button>
            </div>

          </div>
        </div>

        <!--Part 3 : Register -->
        <div id="register_content_stp3" v-if="login_box.step_register_3">
          <div class="mg-mnu">

            <div class="row">
              <div class="col text-right">
                <div class="form-group" style="margin-bottom: .5rem;">
                  <p class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="text-align: right;font-size: 16px"> {{ $t('login.complete_form') }} </p>
                  <p class="mgn_form_label" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="text-align: justify">
                    {{ $t('login.complete_form_desc') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col text-right">

                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_3" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.fname') }}</label>
                  <input type="text" class="form-control mgn_input" id="register_stp1_input_3" v-model="login_box.rgstr_fname">
                </div>

                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_4" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.lname') }}</label>
                  <input type="text" class="form-control mgn_input" id="register_stp1_input_4" v-model="login_box.rgstr_lname">
                </div>

                <div class="form-group" v-if="login_box.register_with_mobile === true" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_72" class="mgn_form_label"
                         v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{$t('login.email')}}</label>
                  <input type="text" class="form-control mgn_input" id="register_stp1_input_72"
                         v-model="login_box.register_email_value">
                </div>

                <div class="form-group" v-if="login_box.register_with_mobile === false" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_12" class="mgn_form_label"
                         v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{$t('login.email')}}</label>
                  <input type="text" class="form-control mgn_input" disabled id="register_stp1_input_12"
                         v-model="login_box.register_email_value">
                </div>

                <div class="form-group" v-if="login_box.register_with_mobile === false" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_15" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.mobile') }}</label>
                  <div class="input-group-prepend">
                    <input type="text" maxlength="11" id="register_stp1_input_15" class="form-control grouped_input input-price" v-mask="'##########'"  v-model="login_box.register_mobile_value">
                    <select class="form-control grouped_select" style="width: 35%;" v-model="login_box.register_mobile_subcode_value">
                      <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in login_box.list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                    </select>
                  </div>
                </div>

                <div class="form-group" v-if="login_box.register_with_mobile === true" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_25" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.mobile') }}</label>
                  <div class="input-group-prepend">
                    <input type="text" maxlength="11" id="register_stp1_input_25" disabled class="form-control grouped_input input-price" v-mask="'##########'"  v-model="login_box.register_mobile_value">
                    <select class="form-control grouped_select" disabled style="width: 35%;" v-model="login_box.register_mobile_subcode_value">
                      <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in login_box.list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                    </select>
                  </div>
                </div>

                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_6" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.username') }}</label>
                  <input type="text" class="form-control mgn_input" id="register_stp1_input_6" v-model="login_box.rgstr_username">
                </div>

                <div class="form-group" style="margin-bottom: .5rem;">
                  <label for="register_stp1_input_7" class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('login.password') }}</label>
                  <input type="password" class="form-control mgn_input" id="register_stp1_input_7" v-model="login_box.rgstr_password">
                </div>

              </div>
            </div>

            <div class="row" style="padding-right: 15px; padding-left: 15px;margin-top: 10px;">
              <button type="button" class="btn btn-primary col mb-2 mgn_login_button" @click="register_complete">{{ $t('login.complete_sign') }}</button>
            </div>

          </div>
        </div>

      </li>
    </ul>
    <!--Megamenu - Login - END -->

    <!--Megamenu - Profile -->
    <ul class="mega-menu login" id="mnu_mega_profile" style="width: 260px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
      <li class="list-group-item menu_itm" style="direction: rtl !important;cursor:auto">
        <div class="mg-mnu p-2">

          <div class="row">
            <div class="col text-right">
              <div class="form-group" style="margin-bottom: .5rem;">
                <p class="mgn_form_label" v-bind:class="[{'text-right Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="text-align: right;font-size: 16px">  {{ profile.fullname }} {{ $t('login.welcome') }} </p>
                <p class="mgn_form_label" v-bind:class="[{'text-right Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="text-align: justify">
                  {{ $t('login.welcome_desc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col text-right">
              <ul class="list-group list-group-flush p-0" >

                <li class="list-group-item menu_itm" @click="close_menu" v-bind:class="[{'text-right Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  <nuxt-link :to="localePath({ path: '/profile' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-profile' }]">
                    {{ $t('login.dashboard') }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="margin-right: 15px;" class="ico_menu" viewBox="0 0 17.54 15.67">
                      <g id="prefix__home" transform="translate(.29 -27.531)">
                        <g id="prefix__Group_2096" data-name="Group 2096" transform="translate(-.001 27.798)">
                          <g id="prefix__Group_2095" data-name="Group 2095">
                            <path id="prefix__Path_939" d="M16.818 33.783l-8.058-5.9a.442.442 0 0 0-.522 0l-8.058 5.9a.442.442 0 0 0 .52.717l7.8-5.709 7.8 5.709a.442.442 0 0 0 .522-.713z" class="prefix__cls-1" data-name="Path 939" transform="translate(.001 -27.797)"/>
                          </g>
                        </g>
                        <g id="prefix__Group_2098" data-name="Group 2098" transform="translate(1.874 34.596)">
                          <g id="prefix__Group_2097" data-name="Group 2097">
                            <path id="prefix__Path_940" d="M69.261 232.543a.442.442 0 0 0-.442.442v7.031h-3.533v-3.838a2.209 2.209 0 0 0-4.417 0v3.838h-3.534v-7.031a.442.442 0 1 0-.883 0v7.472a.442.442 0 0 0 .442.442h4.417a.441.441 0 0 0 .44-.407.332.332 0 0 0 0-.034v-4.279a1.325 1.325 0 1 1 2.65 0v4.279a.325.325 0 0 0 0 .034.441.441 0 0 0 .44.408h4.417a.442.442 0 0 0 .442-.442v-7.472a.442.442 0 0 0-.439-.443z" class="prefix__cls-1" data-name="Path 940" transform="translate(-56.452 -232.543)"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </nuxt-link>
                </li>

                <li v-if="false" class="list-group-item menu_itm" @click="close_menu" v-bind:class="[{'text-right Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  <nuxt-link :to="localePath({ path: '/projectmanagement' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-projectmanagement' }]">
                    <span>{{ $t('login.project_management') }}</span>
                    <i class="far fa-building ico_menu" style="margin-right: 15px;"></i>
                  </nuxt-link>
                </li>

                <li class="list-group-item menu_itm" @click="close_menu" v-bind:class="[{'text-right Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  <nuxt-link :to="localePath({ path: '/plans' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-plans' }]">
                    <span>{{ $t('login.plans') }}</span>
                    <i class="fas fa-swatchbook ico_menu" style="margin-right: 15px;"></i>
                  </nuxt-link>
                </li>

                <li v-if="false" @click="close_menu" class="list-group-item menu_itm" v-bind:class="[{'text-right Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  <nuxt-link :to="localePath({ path: '/agency' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-plans-agency' }]">
                    <span>{{ $t('login.agency') }}</span>
                    <i class="fas fa-laptop-house ico_menu" style="margin-right: 15px;"></i>
                  </nuxt-link>
                </li>

                <li class="list-group-item menu_itm" v-bind:class="[{'text-right Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" @click="DestroyStorage">
                  <a href="javascript:" class="nav-link">
                    {{ $t('login.close') }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="margin-right: 15px;" class="ico_menu" viewBox="0 0 17.259 13.55">
                      <g id="prefix__exit-outline" transform="translate(-47.25 -95.25)">
                        <path id="prefix__Path_950" d="M58.242 99.012v-1.506A1.506 1.506 0 0 0 56.736 96h-7.23A1.506 1.506 0 0 0 48 97.506v9.037a1.506 1.506 0 0 0 1.506 1.506h7.23a1.506 1.506 0 0 0 1.506-1.506v-1.506" class="prefix__cls-2" data-name="Path 950"/>
                        <path id="prefix__Path_951" d="M384 176l3.012 3.012-3.012 3.013" class="prefix__cls-2" data-name="Path 951" transform="translate(-323.348 -76.988)"/>
                        <path id="prefix__Line_169" d="M0 0L11 0" class="prefix__cls-2" data-name="Line 169" transform="translate(52.759 102.025)"/>
                      </g>
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </li>
    </ul>
    <!--Megamenu - Profile - END -->

    <!--Megamenu - Language -->
    <ul class="mega-menu language" id="mnu_mega_languages" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
      <li class="list-group-item menu_itm" style="direction: rtl !important;">
        <div class="nav-link"  @click="set_user_language('fa')" v-bind:class="[{'active-black' : $i18n.locale == 'fa' }]">
          فارسی
        </div>
        <div class="nav-link"  @click="set_user_language('en')" v-bind:class="[{'active-black' : $i18n.locale == 'en' }]">
          English
        </div>
        <div class="nav-link"  @click="set_user_language('tr')" v-bind:class="[{'active-black' : $i18n.locale == 'tr' }]">
          Türk
        </div>
        <div class="nav-link"  @click="set_user_language('ru')" v-bind:class="[{'active-black' : $i18n.locale == 'ru' }]">
          русский
        </div>
        <div class="nav-link"  @click="set_user_language('ar')" v-bind:class="[{'active-black' : $i18n.locale == 'ar' }]">
          العربية
        </div>
      </li>
    </ul>
    <!--Megamenu - Items - END -->

    <!--Megamenu - Currency -->
    <ul class="mega-menu language" id="mnu_mega_currency" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
      <li class="list-group-item menu_itm">
        <a v-for="itm in currency.currencies" href="javascript:" class="nav-link" v-bind:class="[{'active-black' : currency.current.id == itm.id }]" @click="set_user_currency(itm.id,itm.title)"> {{itm.title}} </a>
      </li>
    </ul>
    <!--Megamenu - Items - END -->

    <!--Megamenu - Notification -->
    <ul class="mega-menu language" id="mnu_mega_notification" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
      <li class="list-group-item menu_itm">
        <a href="javascript:" class="nav-link"> پیام جدیدی ندارید </a>
      </li>
    </ul>
    <!--Megamenu - Items - END -->

    <!--Megamenu Services - Items -->
    <ul id="mnu_mega_services" class="mega-menu abs">
      <li class="list-group-item menu_itm" style="direction: rtl !important;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <nuxt-link :to="localePath({ path: '/turkishcitizenship' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-turkishcitizenship' }]">
          {{$t('header.submenu_3')}}
        </nuxt-link>
      </li>
      <li class="list-group-item menu_itm" style="direction: rtl !important;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <nuxt-link :to="localePath({ path: '/turkishpassport' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-turkishpassport' }]">
          {{$t('header.submenu_1')}}
        </nuxt-link>
      </li>
      <li class="list-group-item menu_itm" style="direction: rtl !important;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <nuxt-link :to="localePath({ path: '/turkishbuyhouse' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-turkishbuyhouse' }]">
          {{$t('header.submenu_4')}}
        </nuxt-link>
      </li>
      <li class="list-group-item menu_itm" style="direction: rtl !important;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <nuxt-link :to="localePath({ path: '/services' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-services' }]">
          {{$t('header.submenu_2')}}
        </nuxt-link>
      </li>
      <li v-if="ExistStorage() === true" class="list-group-item menu_itm" style="direction: rtl !important;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
        <nuxt-link :to="localePath({ path: '/virtualtour' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-virtualtour' }]">
          {{$t('header.v_tour')}}
        </nuxt-link>
      </li>
    </ul>
    <!--Megamenu - Items - END -->





    <div class="row pos" v-bind:class="[{'pos-absolute' : route_name[0] == 'index' },{'pos-relative' : route_name[0] != 'index' }]">


      <!-- Logo -->
      <div class="col-6 text-right">
        <nuxt-link :to="localePath({ path: '/' })">
          <svg xmlns="http://www.w3.org/2000/svg" v-bind:class="[{'logo_type_white' : route_name[0] == 'index' || route_name[0] == 'index-virtual' },{'logo_type_blue' : route_name[0] != 'index' && route_name[0] != 'index-virtual' }]" viewBox="0 0 199.66 45.65">
            <g id="Logo_Artwork" data-name="Logo Artwork">
              <path class="logo_type_cls-1" d="M31.08,20.32,25.76,27.2H0V.44H31l-5.36,7H8.32v3.2h21.2l-4.76,6.08H8.32v3.64Z"/>
              <path class="logo_type_cls-1" d="M42,.44,54,18.2,66.6.44h9.76L59.24,24.64a10.19,10.19,0,0,1-2.16,2.08,5.38,5.38,0,0,1-3.2.92,5.48,5.48,0,0,1-3.14-.86,8.22,8.22,0,0,1-2.14-2.14L31.84.44Z"/>
              <path class="logo_type_cls-1" d="M152.36,27.2H141.28l-6-7.08H122.6V27.2h-8.28V13.52H137.6a6.18,6.18,0,0,0,3.24-.8,2.46,2.46,0,0,0,1.32-2.2A2.61,2.61,0,0,0,141,8.18a6.14,6.14,0,0,0-3.36-.78H114.32l5.4-7h17.2a27.85,27.85,0,0,1,4.72.42,14.36,14.36,0,0,1,4.44,1.5,9.55,9.55,0,0,1,3.3,2.92,8,8,0,0,1,1.3,4.72,9,9,0,0,1-.48,3,8.35,8.35,0,0,1-1.38,2.52,8.1,8.1,0,0,1-2.2,1.9,9,9,0,0,1-2.94,1.1c.45.35,1,.79,1.52,1.32s1.31,1.27,2.24,2.2Z"/>
              <path class="logo_type_cls-1" d="M89.28,9.44l4.8,7.08c.45.64.93,1.33,1.42,2.06s.93,1.34,1.3,1.82h0l5.2,6.8h9.46L94.72,3A8.22,8.22,0,0,0,92.58.86,5.48,5.48,0,0,0,89.44,0,5.42,5.42,0,0,0,86.2.92,9.32,9.32,0,0,0,84.08,3L66.92,27.2h9.8Z"/>
              <path class="logo_type_cls-1" d="M177.5,9.44l4.8,7.08c.46.64.93,1.33,1.42,2.06s.93,1.34,1.3,1.82h0l5.19,6.8h9.46L182.94,3A8.07,8.07,0,0,0,180.8.86a6.16,6.16,0,0,0-6.38.06A9.32,9.32,0,0,0,172.3,3L155.14,27.2h9.8Z"/>
              <path class="logo_type_cls-1" d="M.92,37.1v6.58H.1V37.1Z"/>
              <path class="logo_type_cls-1" d="M6.92,38.88c1.23,0,1.76.68,1.76,2.26v2.54H7.93V41.14c0-1.16-.35-1.63-1.19-1.63s-1.3.49-1.3,1.63v2.54H4.69V39H5.3l.1.55A1.69,1.69,0,0,1,6.92,38.88Z"/>
              <path class="logo_type_cls-1" d="M14.21,43.05h.61v.63H14a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55H13.39v2.78C13.39,42.75,13.64,43.05,14.21,43.05Z"/>
              <path class="logo_type_cls-1" d="M19.93,43.22a1.13,1.13,0,0,0,1.27-.94h.72a1.74,1.74,0,0,1-2,1.49c-1.54,0-2.19-.73-2.19-2.44s.64-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H18.5C18.58,42.76,19,43.22,19.93,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.87C21.35,40,20.92,39.44,19.92,39.44Z"/>
              <path class="logo_type_cls-1" d="M25.4,37.1h.75v6.58H25.4Z"/>
              <path class="logo_type_cls-1" d="M29.72,37.1h.76v6.58h-.76Z"/>
              <path class="logo_type_cls-1" d="M35,37.56c0,.36-.16.52-.54.52s-.53-.16-.53-.52.16-.53.53-.53S35,37.19,35,37.56Zm-.92,6.12V39h.77v4.7Z"/>
              <path class="logo_type_cls-1" d="M38.21,41.34c0-1.71.61-2.46,2-2.46a1.77,1.77,0,0,1,1.66.77L42,39h.61v4.23c0,1.72-.65,2.44-2.18,2.44-1.22,0-1.81-.45-2-1.49h.73a1.07,1.07,0,0,0,1.24.94c1,0,1.46-.52,1.46-1.77v-.24a1.77,1.77,0,0,1-1.61.68C38.82,43.77,38.21,43.05,38.21,41.34Zm3.62,0c0-1.29-.41-1.82-1.43-1.82S39,40.05,39,41.34s.41,1.81,1.43,1.81S41.83,42.63,41.83,41.34Z"/>
              <path class="logo_type_cls-1" d="M48.07,43.22a1.13,1.13,0,0,0,1.27-.94h.72a1.74,1.74,0,0,1-2,1.49c-1.54,0-2.19-.73-2.19-2.44s.64-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H46.64C46.72,42.76,47.14,43.22,48.07,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.87C49.49,40,49.06,39.44,48.06,39.44Z"/>
              <path class="logo_type_cls-1" d="M55.78,38.88c1.23,0,1.75.68,1.75,2.26v2.54h-.75V41.14c0-1.16-.35-1.63-1.18-1.63s-1.31.49-1.31,1.63v2.54h-.75V39h.61l.1.55A1.7,1.7,0,0,1,55.78,38.88Z"/>
              <path class="logo_type_cls-1" d="M63.06,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55H62.24v2.78C62.24,42.75,62.49,43.05,63.06,43.05Z"/>
              <path class="logo_type_cls-1" d="M74.81,41.18h-2v2.51H72V37.11h2.81c1.61,0,2.27.78,2.27,2.06a1.7,1.7,0,0,1-1.43,1.91l1.45,2.6h-.88Zm-.09-.64c1,0,1.49-.46,1.49-1.38s-.44-1.39-1.49-1.39H72.78v2.77Z"/>
              <path class="logo_type_cls-1" d="M82.16,43.22a1.14,1.14,0,0,0,1.28-.94h.71a1.74,1.74,0,0,1-2,1.49C80.63,43.77,80,43,80,41.33s.65-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H80.73C80.81,42.76,81.23,43.22,82.16,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.88C83.59,40,83.15,39.44,82.15,39.44Z"/>
              <path class="logo_type_cls-1" d="M90.64,43.12a1.71,1.71,0,0,1-1.56.65c-1.21,0-1.73-.43-1.73-1.45s.63-1.59,2.11-1.59h1.13v-.25c0-.77-.35-1.09-1.16-1.09s-1.17.29-1.17,1h-.72c0-1,.57-1.51,1.91-1.51s1.89.51,1.89,1.69v3.11h-.61Zm-1.16-1.89c-1,0-1.38.31-1.38,1.05s.33.9,1.16.9a1.16,1.16,0,0,0,1.33-1.33v-.62Z"/>
              <path class="logo_type_cls-1" d="M94.82,37.1h.76v6.58h-.76Z"/>
              <path class="logo_type_cls-1" d="M105.05,37.77v2.14h3.22v.67h-3.22V43h3.59v.67h-4.41V37.1h4.41v.67Z"/>
              <path class="logo_type_cls-1" d="M115.42,42.33c0,1-.57,1.44-1.91,1.44s-1.86-.45-1.86-1.5h.73c0,.7.33,1,1.14,1s1.15-.24,1.15-.84c0-1.34-3-.37-3-2.19,0-.94.55-1.35,1.81-1.35s1.78.43,1.78,1.41h-.69c0-.64-.31-.9-1.09-.9s-1.09.22-1.09.76C112.43,41.38,115.42,40.45,115.42,42.33Z"/>
              <path class="logo_type_cls-1" d="M120.76,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86H120V39h1.42v.55H120v2.78C120,42.75,120.19,43.05,120.76,43.05Z"/>
              <path class="logo_type_cls-1" d="M127.58,43.12a1.71,1.71,0,0,1-1.56.65c-1.21,0-1.73-.43-1.73-1.45s.63-1.59,2.11-1.59h1.13v-.25c0-.77-.34-1.09-1.16-1.09s-1.17.29-1.17,1h-.72c0-1,.57-1.51,1.91-1.51s1.89.51,1.89,1.69v3.11h-.61Zm-1.16-1.89c-1,0-1.38.31-1.38,1.05s.33.9,1.16.9a1.16,1.16,0,0,0,1.33-1.33v-.62Z"/>
              <path class="logo_type_cls-1" d="M133.81,43.05h.61v.63h-.85a1.19,1.19,0,0,1-1.33-1.29V39.53h-.76V39h.76V37.86H133V39h1.42v.55H133v2.78C133,42.75,133.24,43.05,133.81,43.05Z"/>
              <path class="logo_type_cls-1" d="M139.53,43.22a1.14,1.14,0,0,0,1.28-.94h.71a1.73,1.73,0,0,1-2,1.49c-1.53,0-2.19-.73-2.19-2.44s.65-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H138.1C138.19,42.76,138.6,43.22,139.53,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79H141C141,40,140.53,39.44,139.52,39.44Z"/>
              <path class="logo_type_cls-1" d="M154.64,41.86c0,1.4-.73,2-2.46,2s-2.48-.62-2.48-2.07h.77c0,1,.48,1.44,1.71,1.44s1.67-.37,1.67-1.25c0-1.86-4-.73-4-3.08,0-1.4.71-2,2.38-2s2.37.62,2.37,2.07h-.76c0-1-.47-1.44-1.61-1.44s-1.59.36-1.59,1.25C150.59,40.47,154.64,39.38,154.64,41.86Z"/>
              <path class="logo_type_cls-1" d="M162.3,41.33c0,1.71-.68,2.44-2.27,2.44s-2.29-.73-2.29-2.44.69-2.45,2.29-2.45S162.3,39.62,162.3,41.33ZM160,43.14c1.07,0,1.52-.53,1.52-1.81s-.44-1.82-1.52-1.82-1.54.53-1.54,1.82S159,43.14,160,43.14Z"/>
              <path class="logo_type_cls-1" d="M165.59,37.1h.76v6.58h-.76Z"/>
              <path class="logo_type_cls-1" d="M171.49,43.77c-1.23,0-1.76-.67-1.76-2.25V39h.75v2.54c0,1.15.35,1.62,1.19,1.62s1.3-.49,1.3-1.62V39h.76v4.7h-.62l-.1-.56A1.69,1.69,0,0,1,171.49,43.77Z"/>
              <path class="logo_type_cls-1" d="M179.44,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55h-1.43v2.78C178.62,42.75,178.87,43.05,179.44,43.05Z"/>
              <path class="logo_type_cls-1" d="M184.22,37.56c0,.36-.16.52-.54.52s-.52-.16-.52-.52.16-.53.52-.53S184.22,37.19,184.22,37.56Zm-.91,6.12V39h.76v4.7Z"/>
              <path class="logo_type_cls-1" d="M192,41.33c0,1.71-.68,2.44-2.27,2.44s-2.28-.73-2.28-2.44.68-2.45,2.28-2.45S192,39.62,192,41.33Zm-2.27,1.81c1.07,0,1.52-.53,1.52-1.81s-.44-1.82-1.52-1.82-1.53.53-1.53,1.82S188.62,43.14,189.7,43.14Z"/>
              <path class="logo_type_cls-1" d="M197.5,38.88c1.24,0,1.76.68,1.76,2.26v2.54h-.75V41.14c0-1.16-.35-1.63-1.18-1.63S196,40,196,41.14v2.54h-.75V39h.61l.1.55A1.69,1.69,0,0,1,197.5,38.88Z"/>
            </g>
          </svg>
          <img :src="require(`@/assets/logo/logo.svg`)"  class="Evara_logo" alt="EVARA">
        </nuxt-link>
      </div>

      <!-- Menu -->
      <div class="abs-center-box-menu">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <nuxt-link :to="localePath({ path: '/' })" class="nav-link" v-bind:class="[{'active' : route_name[0] == 'index' }]">
              {{ $t('menu.top.home') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath({ path: '/aboutus' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-aboutus' }]">
              {{ $t('menu.top.about') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:" @click="open_menu('services')">
              {{ $t('menu.top.services') }}
              <i class="fas fa-chevron-down" style="margin-right:5px;font-size:10px;"></i>
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath({ path: '/search' })" class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-search' }]">
              {{ $t('menu.top.estate_list') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mag.evara.life" target="_blank">{{ $t('menu.top.blog') }}</a>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath({ path: '/contactus' })"  class="nav-link" v-bind:class="[{'active-black' : route_name[0] == 'index-contactus' }]">
              {{ $t('menu.top.contact') }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Login - Language -->
      <div class="col-6 pl-4 pr-0 text-left" style="padding-top: 30px;">

        <!-- Language -->
        <div class="login-link">
        <span class="login-link" v-bind:class="[{'color-grey' : route_name[0] != 'index' }]" @click="open_menu('languages')">
        <i class="fas fa-globe"></i>
        <i class="fas fa-chevron-down" style="margin-right:5px;margin-left:5px"></i>
        </span>
        </div>

        <!-- Notification -->
        <div class="login-link" v-if="ExistStorage() === true" style="margin-left: 15px;">
        <span class="login-link" v-bind:class="[{'color-grey' : route_name[0] != 'index' }]" @click="open_menu('notification')">
        <i class="far fa-bell"></i>
        <i class="fas fa-chevron-down" style="margin-right:5px;margin-left:5px"></i>
        </span>
        </div>

        <!-- Currency -->
        <div class="login-link" style="margin-left: 15px;">
        <span class="login-link" v-bind:class="[{'color-grey' : route_name[0] != 'index' }]" @click="open_menu('currency')">
          <span> {{currency.current.title}} </span>
        <i class="fas fa-chevron-down" style="margin-right:5px;margin-left:5px"></i>
        </span>
        </div>

        <!-- Login -->
        <div class="login-link" v-if="ExistStorage() === false">
        <span class="login-link" style="margin-left:15px" v-bind:class="[{'color-grey' : route_name[0] != 'index' }]" @click="open_menu('login')">
        {{ $t('menu.top.login') }}
        <i class="fas fa-chevron-down" style="margin-right:5px;margin-left:5px"></i>
      </span>
        </div>

        <!-- Profile -->
        <div class="login-link" v-if="ExistStorage() === true">
        <span class="login-link" style="margin-left:15px" v-bind:class="[{'color-grey' : route_name[0] != 'index' }]" @click="open_menu('profile')">
        <span v-for="i in 12">{{ profile.fullname[i-1] }}</span>
          <span v-if="profile.fullname.length > 12"> ... </span>
        <i class="fas fa-chevron-down" style="margin-right:5px;margin-left:5px"></i>
      </span>
        </div>

        <!-- Free ADV ESTATE -->
        <div class="login-link" v-if="ExistStorage() === true && route_name[0] != 'index-new'">
          <nuxt-link :to="localePath({ path: '/new' })" class="btn btn-outline-success btn_save_adv" v-bind:class="[{'black-cl' : route_name[0] != 'index' }]">{{ $t('header.free_adv') }}</nuxt-link>
        </div>

      </div>

      <div @click="close_menu" class="black_full_screen" id="black_full_screen"></div>

    </div>


    <!-- Modal -->
    <div class="modal fade" style="direction: rtl" id="forgetpass_modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> {{ $t('login.forget_pass') }} </h5>
            <button type="button" style="margin-left: 0;" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div v-if="login_box.forgetpass_btn_stp_1">
              <div class="row mb-3 mt-3">
                <div class="col text-center">
                  <img :src="require(`@/assets/images/backgrounds/forgot_password.png`)" style="width: 250px;" class="modal_image">
                </div>
              </div>
              <p class="text-justify modal_p">
                {{ $t('login.forgetpass_title')}}
              </p>
              <div class="form-group text-center" style="padding: 0 50px;">
                <label for="forgetpassEmail">{{ $t('login.email') }} </label>
                <input type="email" v-model="login_box.forgetpass_email" class="form-control text-center" id="forgetpassEmail">
                <small id="emailHelp" class="form-text text-muted"> {{ $t('login.forgetpass_title_1') }} </small>
              </div>
              <div class="row text-center">
                <div class="col">
                  <button  @click="forgetpass" type="button" class="btn btn-success evara_btn"> {{ $t('login.send_new_pass') }} </button>
                </div>
              </div>
            </div>

            <div v-if="login_box.forgetpass_btn_stp_2">
              <div class="row">
                <div class="col text-center">
                  <img :src="require(`@/assets/images/backgrounds/Mail_sent.png`)" class="modal_image" style="width: 150px; ">
                </div>
              </div>
              <p class="text-center modal_p" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]" style="margin-top: 10px;" >
                {{ $t('login.forgetpass_title_2') }}
              </p>
              <div class="row">
                <div class="col text-center">
                  <button  style="margin: auto" type="button" class="btn btn-success evara_btn" data-dismiss="modal">
                    <p style="margin-bottom: 0;font-size: 12px;" class="" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]"> {{ $t('login.email_sent') }} </p>
                    <p style="margin-bottom: 0;font-size: 11px;">( {{ $t('login.close_form_btn') }} )</p>
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button v-if="login_box.forgetpass_btn_stp_1" type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('login.close') }}</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import https from "https";

export default {
  async asyncData(){
    // await this.fetch_list_of_currency();
  }
  , data() {
    return {
      route_name: this.$route.name,
      login_box: {
        step_login: true,
        step_register_1: false,
        step_register_2: false,
        step_register_3: false,
        register_with_mobile: false,
        register_retry: false,
        register_email_value : '',
        register_mobile_value: '',
        register_mobile_subcode_value: '2',
        register_email_key : '',
        lgn_username : '',
        lgn_password : '',
        rgstr_user_id : '',
        rgstr_fname : '',
        rgstr_lname : '',
        rgstr_mobile : '',
        rgstr_username : '',
        rgstr_password : '',

        forgetpass_btn_stp_1 : true,
        forgetpass_btn_stp_2 : false,
        forgetpass_email : '',

        list_of_country: [] ,

        user: null ,
        ui : null
      },
      profile:{
        fullname: this.$storage.getUniversal('name') + ' ' + this.$storage.getUniversal('family'),
      },
      currency:{
        current:2,
        currencies:[]
      },
      notification:[],
      googleSignInParams: {
        client_id: '848283154499-rnt8n61u9u6cv2dljcnec9khdat4as2r.apps.googleusercontent.com'
      }
    }
  }
  , watch:{
    $route (to, from){
      this.route_name = this.$route.name.split('_')
    }
  }
  , methods: {
    open_menu(menu) {
      this.close_menu()
      $('#black_full_screen').addClass('open')

      if (menu === 'services') {
        $('#mnu_mega_services').addClass('open')
      }
      if (menu === 'languages') {
        $('#mnu_mega_languages').addClass('open')
      }
      if (menu === 'currency') {
        $('#mnu_mega_currency').addClass('open')
      }
      if (menu === 'login') {
        $('#mnu_mega_login').addClass('open')
      }
      if (menu === 'profile') {
        $('#mnu_mega_profile').addClass('open')
      }

      if (menu === 'notification') {
        $('#mnu_mega_notification').addClass('open')
      }
    }
    , close_menu() {
      $('#black_full_screen').removeClass('open')
      $('#mnu_mega_services').removeClass('open')
      $('#mnu_mega_languages').removeClass('open')
      $('#mnu_mega_login').removeClass('open')
      $('#mnu_mega_profile').removeClass('open')
      $('#mnu_mega_currency').removeClass('open')
      $('#mnu_mega_notification').removeClass('open')
    }
    , forgetpass() {
      var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

      if (this.login_box.forgetpass_email === '')
        this.$toast.warning(this.$t('login.error_3'));
      else if (!regexEmail.test(this.login_box.forgetpass_email)) {
        this.$toast.warning(this.$t('login.error_4'));
      } else {
        this.$axios.$post('forget_password', {
          email: this.login_box.forgetpass_email,
        })
          .then((response) => {
            var message = response[0].msg;
            var res = response[0].res;

            if (res === 1) {
              this.login_box.forgetpass_btn_stp_1 = false;
              this.login_box.forgetpass_btn_stp_2 = true;


              this.$ga.event({
                eventCategory: 'forgetPassword',
                eventAction: 'click',
                eventLabel: this.login_box.forgetpass_email,
                eventValue: 1
              })

              this.$toast.success(message);
            } else {
              this.$toast.error(message);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }

    }
    , change_login_content(type) {
      if (type === 'login') {
        this.login_box.step_login = true;
        this.login_box.step_register_1 = false;
        this.login_box.step_register_2 = false;
        this.login_box.step_register_3 = false;
      } else if (type === 'register') {
        this.login_box.step_login = false;
        this.login_box.step_register_1 = true;
        this.login_box.step_register_2 = false;
        this.login_box.step_register_3 = false;
      }
    }
    , login() {
      if (this.login_box.lgn_username === '') {
        this.$toast.warning(this.$t('login.error_12'));
      } else if (this.login_box.lgn_password === '') {
        this.$toast.warning(this.$t('login.error_13'));
      } else {
        this.$axios.$post('login', {
          username: this.login_box.lgn_username,
          password: this.login_box.lgn_password,
          role_id: 3,
          token: 0,
        })
          .then((response) => {
            var message = response[0].msg;

            if (response[0].res === 1) {

              this.$toast.success(message);

              this.$storage.setUniversal('user_id', response[0].id_user);
              this.$storage.setUniversal('token', response[0].token[0].token);
              this.$storage.setUniversal('expireDate', response[0].token[0].expireDate);
              this.$storage.setUniversal('name', response[0].fname);
              this.$storage.setUniversal('family', response[0].lname);
              this.$storage.setUniversal('email', response[0].email);
              this.$storage.setUniversal('mobile', response[0].mobile);
              this.$storage.setUniversal('username', this.login_box.lgn_username);
              this.$storage.setUniversal('type_of_user', response[0].type_of_user);
              this.$storage.setUniversal('currency-object', response[0].currency[0]);
              this.$storage.setUniversal('currency', response[0].currency[0].id);
              this.$storage.setUniversal('is_alternative', 'no');

              this.$ga.event({
                eventCategory: 'Login',
                eventAction: 'click',
                eventLabel: response[0].fname + ' ' + response[0].lname,
                eventValue: response[0].id
              })

              if (response[0].user_language != null){
                // this.$i18n.locale = response[0].user_language;
                // this.$router.push({path: '/' + this.$i18n.locale})
              }
              this.auth();
            } else {
              this.$toast.error(message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , register() {
      var flag = true;

      this.login_box.step_register_1 = false
      this.login_box.step_register_2 = true

      if (this.login_box.register_with_mobile === true) {
        if (this.login_box.register_mobile_value.toString().trim() === '') {
          this.$toast.warning(this.$t('login.error_1'));
          flag = false;
        } else if (this.login_box.register_mobile_value.toString().length !== 10) {
          this.$toast.warning(this.$t('login.error_2'));
          flag = false;
        }
      } else {
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (this.login_box.register_email_value === '') {
          this.$toast.warning(this.$t('login.error_3'));
          flag = false;
        } else if (!regexEmail.test(this.login_box.register_email_value)) {
          this.$toast.warning(this.$t('login.error_4'));
          flag = false;
        }
      }

      if (flag === true) {
        this.rgstr_mobile = this.login_box.register_mobile_value;
        this.$axios.$post('add_register_user', {
          email: this.login_box.register_email_value,
          mobile: this.login_box.register_mobile_value,
          mobile_subcode: this.login_box.register_mobile_subcode_value,
          is_mobile: this.login_box.register_with_mobile,
          role_id: 3,
          language: this.$i18n.locale
        })
          .then((response) => {
            var message = response[0].msg;

            if ((response[0].res === 1) || (response[0].res === 3)) {

              this.login_box.step_register_1 = false
              this.login_box.step_register_2 = true

              this.startCountDown(1);

              this.$toast.success(message);
            } else {
              this.$toast.error(message);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , please_reg() {
      this.$toast.warning(this.$t('login.error_5'));
    }
    , register_with_key() {
      if (this.login_box.register_email_key === '') {
        this.$toast.warning(this.$t('login.error_6'));
      } else if (this.login_box.register_email_key.length !== 5) {
        this.$toast.warning(this.$t('login.error_7'));
      } else {
        this.$axios.$post('register_login', {
          email: this.login_box.register_email_value,
          mobile: this.login_box.register_mobile_value,
          mobile_subcode: this.login_box.register_mobile_subcode_value,
          is_mobile: this.login_box.register_with_mobile,
          register_code: this.login_box.register_email_key,
        })
          .then((response) => {
            var message = response[0].msg;

            if (response[0].res === 1) {

              this.login_box.rgstr_user_id = response[0].id;

              this.login_box.step_register_2 = false
              this.login_box.step_register_3 = true

              this.$toast.success(message);
            } else {
              this.$toast.error(message);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , register_complete() {
      this.login_box.rgstr_mobile = this.login_box.register_mobile_value;

      if (this.login_box.register_email_value === '') {
        this.$toast.warning(this.$t('login.error_8'));
      }
      else if (this.login_box.rgstr_fname === '') {
        this.$toast.warning(this.$t('login.error_9'));
      }
      else if (this.login_box.rgstr_lname === '') {
        this.$toast.warning(this.$t('login.error_10'));
      }
      else if (this.login_box.rgstr_mobile === '') {
        this.$toast.warning(this.$t('login.error_11'));
      }
      else if (this.login_box.rgstr_username === '') {
        this.$toast.warning(this.$t('login.error_12'));
      }
      else if (this.login_box.rgstr_password === '') {
        this.$toast.warning(this.$t('login.error_13'));
      }
      else {
        this.$axios.$post('add_user', {
          email: this.login_box.register_email_value,
          fname: this.login_box.rgstr_fname,
          lname: this.login_box.rgstr_lname,
          mobile: this.login_box.rgstr_mobile,
          user: this.login_box.rgstr_username,
          pass: this.login_box.rgstr_password,
          user_id: this.login_box.rgstr_user_id,
          country_id: 0,
          role_id: 3,
          token: 0,
        })
          .then((response) => {
            var message = response[0].msg;

            if (response[0].res === 1) {
              this.$toast.success(message);

              this.$storage.setUniversal('user_id', response[0].id);
              this.$storage.setUniversal('token', response[0].token[0].token);
              this.$storage.setUniversal('expireDate', response[0].token[0].expireDate);
              this.$storage.setUniversal('currency-object', response[0].currency[0]);
              this.$storage.setUniversal('currency', response[0].currency[0].id);
              this.$storage.setUniversal('name', this.login_box.rgstr_fname);
              this.$storage.setUniversal('family', this.login_box.rgstr_lname);
              this.$storage.setUniversal('email', this.login_box.register_email_value);
              this.$storage.setUniversal('mobile', this.login_box.rgstr_mobile);
              this.$storage.setUniversal('username', this.login_box.rgstr_username);

              this.$ga.event({
                eventCategory: 'Register',
                eventAction: 'click',
                eventLabel: this.login_box.rgstr_fname + ' ' + this.login_box.rgstr_lname,
                eventValue: response[0].id
              })

              if (response[0].user_language != null){
                // this.$i18n.locale = response[0].user_language;
                // this.$router.push({path: '/' + this.$i18n.locale})
              }
              this.auth();

            } else {
              this.$toast.error(message);
            }

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
          this.login_box.list_of_country = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , fetch_notification() {
      this.$axios.$post('notification', {
        language: this.$i18n.locale,
        token: this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        count: 10 ,
      })
        .then((response) => {
          this.notification = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , fetch_list_of_currency() {
      this.$axios.$post('list_of_currency', {
        token: this.$storage.getUniversal('token') ,
        language: this.$i18n.locale,
      })
        .then((response) => {
          this.currency.currencies = response;
          var userCurrency = null;
          if (this.$storage.getUniversal('currency')){
            userCurrency = this.$storage.getUniversal('currency');
          }

          if (userCurrency !== null){
            this.currency.currencies.forEach(itm => {
              if(itm.id == userCurrency){
                this.currency.current = itm
              }
            })
          }
          else{
            this.currency.currencies.forEach(itm => {
              if(itm.id == 2){
                this.currency.current = itm
              }
            })
          }

          this.$storage.setUniversal('currency',this.currency.current.id)

        })
        .catch((error) => {
          console.log(error);
        });
    }
    , set_user_currency(currency_id,currency_title) {
      this.$axios.$post('set_user_currency', {
        token: this.$storage.getUniversal('token') ,
        language: this.$i18n.locale ,
        currency_id: currency_id
      })
        .then((response) => {
          this.currency.current = {id:currency_id,title:currency_title}
          this.$storage.setUniversal('currency', this.currency.current.id);
          this.$storage.setUniversal('currency-object', this.currency.current);

          this.$ga.event({
            eventCategory: 'change Currency',
            eventAction: 'click',
            eventLabel: currency_title,
            eventValue: currency_id
          })

          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , async set_user_language(lang) {
      this.$axios.$post('set_user_language', {
        token: this.$storage.getUniversal('token'),
        language: lang
      })
        .then((response) => {
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.switchLocalePath(lang))

      this.$ga.event({
        eventCategory: 'change Language',
        eventAction: 'click',
        eventLabel: lang
      })

      this.$router.resolve(await this.switchLocalePath(lang));
      this.$i18n.setLocale(lang)

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
      location.reload();
    }
    , authenticate(){
      var path = this.$route.path.split('/');
      if (this.$storage.getUniversal('token')) {
        var expireDate = new Date(this.$storage.getUniversal('expireDate'))
        var now = new Date();
        var diffTime = Math.abs(now - expireDate);
        if (diffTime > 0){
          // this.$router.push({path: '/'})
        }else{
          setTimeout(function(){
            if (path.length > 1 && (path[1] === 'profile' || path[1] === 'plans' || path[1] === 'new' || path[1] === 'edit')) this.$router.push(this.localePath({path: '/'}))
          }, diffTime);
        }
      }else{
        if (path.length > 1 && (path[1] === 'profile' || path[1] === 'plans' || path[1] === 'new' || path[1] === 'edit')) this.$router.push(this.localePath({path: '/'}))
      }
    }
    , startCountDown(duration) {
      duration = 60 * duration;
      this.login_box.register_retry = false;
      var timer = duration, minutes, seconds;
      var timer_interval = setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $('#countdown').html(minutes + ":" + seconds)

        if (--timer < 0) {
          this.login_box.register_retry = true;
          clearInterval(timer_interval);
        }

      }, 1000);
    }
    , onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      const Domain = googleUser.getHostedDomain() // etc etc
      const SignedIn = googleUser.isSignedIn() // etc etc
      const Id = googleUser.getId() // etc etc
      this.$axios.$post('different_login', {
        fname: profile.getGivenName(),
        lname: profile.getFamilyName(),
        email: profile.getEmail(),
        u_code: profile.getId(),
        avatar: profile.getImageUrl(),
        partner_auth: 1,
        roleid: 3,
      })
        .then((response) => {
          var message = response[0].msg;

          if (response[0].res === 1) {

            this.$toast.success(message);

            this.$storage.setUniversal('user_id', response[0].id_user);
            this.$storage.setUniversal('token', response[0].token[0].token);
            this.$storage.setUniversal('expireDate', response[0].token[0].expireDate);
            this.$storage.setUniversal('name', response[0].fname);
            this.$storage.setUniversal('family', response[0].lname);
            this.$storage.setUniversal('email', response[0].email);
            this.$storage.setUniversal('mobile', response[0].mobile);
            this.$storage.setUniversal('username', this.login_box.lgn_username);
            // this.$storage.setUniversal('type_of_user', response[0].type_of_user);
            this.$storage.setUniversal('currency-object', response[0].currency[0]);
            this.$storage.setUniversal('currency', response[0].currency[0].id);
            this.$storage.setUniversal('is_alternative', 'yes');

            this.$ga.event({
              eventCategory: 'login Google',
              eventAction: 'click',
              eventLabel: response[0].fname + ' ' + response[0].lname,
              eventValue: response[0].id_user
            })

            this.auth();
          } else {
            this.$toast.error(message);
          }
        })
        .catch((error) => {
          console.log(error);
        });

    }
    , onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
  , mounted() {
    this.route_name = this.$route.name.split('_');
    window.scrollTo(0, 0);
    this.fetch_list_of_country();
    this.fetch_list_of_currency();
    this.fetch_notification();
  }
  , beforeMount() {
    //////// Language Detector
    // var CurrentLang = this.$i18n.loadedLanguages[0];
    // var IPCountryName = geoplugin_countryName();
    // var IPCountryCode = geoplugin_countryCode();
    // console.log('IPCountryName : ' , IPCountryName , ' | IPCountryCode : ' , IPCountryCode)
    // if (IPCountryName == 'Iran'){
    //   if (CurrentLang !== 'fa') this.$i18n.setLocale('fa')
    // }
    // else if (IPCountryName == 'chinese'){
    //   if (CurrentLang !== 'ch') this.$i18n.setLocale('ch')
    // }
    // else if (IPCountryName == 'Russia'){
    //   if (CurrentLang !== 'ru') this.$i18n.setLocale('ru')
    // }
    // else if (IPCountryName == 'Iraq' || IPCountryName == 'saudi' || IPCountryName == 'lebanon' || IPCountryName == 'kuwait' || IPCountryName == 'emirates' || IPCountryName == 'bahrain' || IPCountryName == 'oman'){
    //   if (CurrentLang !== 'ar') this.$i18n.setLocale('ar')
    // }
    // else {
    //   if (CurrentLang !== 'en') this.$i18n.setLocale('en')
    // }

  }
  , created() {
    this.authenticate();
  }
}
</script>

<style scoped>

.form-control {
  font-size: .7rem;
}


.abs{
  top: 15vh;
  left: 46%;
  position: absolute !important;
}

.black_full_screen {
  transition: all ease-in-out 0.5s;
  background-color: rgba(0,0,0,.6);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1999;
  cursor: pointer;

  visibility: hidden;
  transform: translateY(-20%);
  opacity:0;
}

.black_full_screen.open {
  visibility: visible!important;
  opacity: 1!important;
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
}

.show_menu{
  display: block;
}

.pos{
  overflow: hidden;
  width: 100vw;
  height: 20vh;
  top: 3vh;
  left: 0;
  z-index: 10;
  padding: 0 2vw;
}

.pos-absolute{
  position: absolute;
}

.pos-relative{
  position: relative;
}

.Evara_logo {
  top: 5px;
  width: 70px;
  height: 70px;
}

.logo_type_white {
  height: 30px;
  position: relative;
  top: 5px;
  fill: white;
}

.logo_type_blue {
  height: 30px;
  position: relative;
  top: 5px;
  fill: #29abe2;
}

.nav-link{
  transition: all ease-in-out .3s;
  color: #a5a5a5;
  font-size:13px;
}

.nav-link.active{
  color: #fff;
  font-size:13px;
  font-weight: bolder;
  border-bottom: 3px solid #0ede9b;
}

.nav-link.active-black{
  color: #393939;
  font-size:13px;
  font-weight: bolder;
  border-bottom: 3px solid #0ede9b;
}

.color-grey{
  color: #a5a5a5 !important;
}

.login-link{
  color: #fff;
  font-size:13px;
  cursor: pointer;
  float: left;
}

.evara_btn{
  background-image: linear-gradient(to left, #88c547 20%, #43b5e2);
}


.black-cl{
  color: #0ddb98 !important;
}

.btn_save_adv {
  transition: all .3s;
  width: 105px;
  height: 31px;
  border-radius: 8px;
  border: solid 2px #0ddb98;
  font-size: 13px;
  text-align: center;
  color: #fff;
  background: #ffffff38;
  padding-top: 4px;
  margin-top: -6px;
  margin-left: 15px;
}

.btn_save_adv:hover {
  background-color: #0ddb98;
}

.nav{
  padding-top: 20px;
}


.nav-link:hover {
  color: #000;
  border-bottom: 3px solid #0ede9b;
  font-weight: bolder;
}

.nav-link:hover .ico_menu{
  fill: #000;
}

.ico_menu{
  margin-left: 5px;
}

.mega-menu{
  transition: all ease-in-out .3s;
  position: fixed;
  z-index: 2000;
  /*display:none;*/
  width: 200px;
  margin: auto;
  padding: 0;
  text-align: center;
  margin-top: 15px;
  margin-right: -55px;
  border-radius: 0.5rem;
  visibility: hidden;
  transform: translateY(20%);
  opacity:0;
}

.mega-menu.language{
  top: 10vh;
  left: 2vw;
  position: absolute;
}

.mega-menu.login{
  top: 10vh;
  left: 8vw;
  position: absolute;
}

.mega-menu .list-group-item{
  padding:0.5rem
}

.mega-menu.open {
  visibility: visible!important;
  opacity: 1!important;
  -webkit-transform: translateY(0)!important;
  transform: translateY(0)!important;
  z-index: 2000;
}


.small_megamenu {
  margin-top: 15px;
  width: 200px !important;
  padding: 15px !important;
  right: 30px !important;
  left: auto !important;
}

.mega_login_stp_1 {
  margin-top: 15px;
  left: 25px !important;
  width: 290px !important;
  padding-top: 15px;
  padding-bottom: 15px;
}

.mega_login_stp_1 li .mg-mnu {
  padding-left: 15px;
  padding-right: 15px;
}

.mgn_btn_header_login_active {
  transition: all .3s;
  width: 75px;
  height: 40px;
  /*position: absolute;*/
  margin: auto;
  border: none;
  font-size: 12px;
  color: #fff;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.mgn_btn_header_login_deactive {
  transition: all .3s;
  width: 75px;
  height: 40px;
  /*position: absolute;*/
  margin: auto;
  border: none;
  font-size: 12px;
  color: #8b8b8b;
  background-color: #f6f6f6;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.mgn_btn_header_register_active {
  transition: all .3s;
  width: 75px;
  height: 40px;
  /*position: absolute;*/
  margin: auto;
  border: none;
  font-size: 12px;
  color: #fff;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.mgn_btn_header_register_deactive {
  transition: all .3s;
  width: 75px;
  height: 40px;
  /*position: absolute;*/
  margin: auto;
  border: none;
  font-size: 12px;
  color: #8b8b8b;
  background-color: #f6f6f6;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.circle_separator{
  transition: all .3s;
  width: 25px;
  height: 25px;
  /*position: absolute;*/
  margin: auto;
  border: none;
  font-size: 12px;
  padding-top: 3px;
  text-align: center;
  color: #000;
  background-color: #fff;
  border-radius: 50px;
  z-index: 1;
}

.mgn_form_label{
  font-size: 11px;
  line-height: 1.69;
  margin-bottom: 3px;
  color: #333333de;
}

.mgn_input{
  height: 35px;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: #fff;
  color: #b5b5b5;
  text-align: center;
  font-size: 11px;
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

.mgn_form_a{
  font-size: 10px !important;
  color: #2185d0 !important;
  text-decoration: underline !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.mgn_login_button{
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
  height: 36px;
  border-radius: 4px;
  border: none;
}

.mgn_back_button{
  background-image: linear-gradient(to left, #b6c51a, #cddc39);
  color:#6d6d6d;
  height: 36px;
  border-radius: 4px;
  border: none;
}

.mgn_btn_google{
  height: 36px;
  border-radius: 8px;
  font-size: 13px;
  border: none;
  background-color: #f44336;
  color: #fff;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.mgn_btn_google_ads{
  height: 36px;
  border: none;
  background-color: #c53126;
  color: #fff;
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}

.mgn_btn_twitter{
  height: 36px;
  border-radius: 8px;
  font-size: 13px;
  border: none;
  background-color: #00aced;
  color: #fff;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.mgn_btn_twitter_ads{
  height: 36px;
  border: none;
  background-color: #0695cb;
  color: #fff;
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}


.menu_itm{
  cursor: pointer;
  color: #767676 !important;
  font-size: 12px;
  padding: .75rem !important;
}

.menu_itm:hover{
  color: #000 !important;
}


.ico_menu{
  margin: auto 5px;
}


.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
  cursor: pointer;
}



.abs-center-box-menu{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5vh;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

</style>
