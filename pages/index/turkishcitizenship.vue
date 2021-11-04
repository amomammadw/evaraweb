<template>

  <div class="text-center">

    <div class="container-fluid" v-if="show_zoho_iframe === false" v-bind:class="[{'persian_ltr' : $i18n.locale=='fa' || $i18n.locale=='ar' }]">

      <!-- A -->
      <div class="row" style="margin-top: 50px">
        <!-- SEPERATOR -->
        <div class="col"></div>

        <div class="col-10">

          <!-- TEXT -->
          <div class="row" style="margin-bottom: 10px;">
            <div class="col">
              <p class="text-center" style="font-size: 18px;margin-top: 25px;">
                <span v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="border-top: solid 4px #00bb7e;padding-top: 10px;">{{ $t('turkish_citizenship.title_1') }} </span>
                <br>
                <span v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('turkish_citizenship.title_2') }} </span>
              </p>
            </div>
          </div>

          <!-- IMG -->
          <div class="row">
            <div class="col">
              <img :src="require('@/assets/images/turkish_citizenship/1.jpg')" class="img-fluid" alt="Responsive image">
            </div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c1_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c1_p1') }}
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c1_p2') }}
              </p>
            </div>
            <div class="col"></div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">
              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c2_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p2') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p3') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p4') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p5') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p6') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p7') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p8') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p9') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p10') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p11') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p12') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p13') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p14') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p15') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p16') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p17') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p18') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c2_p19') }}
              </p>
            </div>
            <div class="col"></div>
          </div>

        </div>

        <!-- SEPERATOR -->
        <div class="col"></div>
      </div>

      <!-- START - Suggestion - 1 -->
      <client-only>
        <swiper v-if="lst_estate_1.length > 0" ref="mySwiper" class="swiper" :options="swiperOptions" :auto-update="true" :auto-destroy="true">
          <swiper-slide  v-for="item in lst_estate_1.slice(0,5)"  :key="item.id">
            <HouseCard1
              :project_id="item.id"
              :estate_id="item.id"
              :images="item.galleris"
              :address="item.state + ' | ' + item.city"
              :title="item.title"
              :price="item.prices[0].price_value"
              :price_unit="item.prices[0].unit_title"
              :properties="item.properties"
              :is_viewed="item.is_use"
              :area_space="item.area_space_all"
              :floor="item.floor_number_title"
              :room="item.room_number_title"
              :is_like="item.is_like"
              :is_ifram_360="item.is_ifram_360"
              :is_matterport="item.is_matterport"
              :land_use="item.land_use_sumery"
              :province="item.state"
              :neghbourhod="item.neghbourhod"
              :city="item.city"
              radius="none"
              :bathroom="item.bathroom"
              :use_status="item.use_status"
              :age_biulding="item.age_biulding"
              :urlHelper="item.urlHelper"
            ></HouseCard1>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>

      <!-- END - Suggestion - 1 -->

      <!-- B -->
      <div class="row" style="margin-top: 50px">
        <!-- SEPERATOR -->
        <div class="col"></div>

        <div class="col-10">

          <!-- IMG -->
          <div class="row">
            <div class="col">
              <img :src="require('@/assets/images/turkish_citizenship/2.jpg')" class="img-fluid" alt="Responsive image">
            </div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c3_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p2') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p3') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p4') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p5') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p6') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p7') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p8') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p9') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p10') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p11') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p12') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c3_p13') }}
              </p>

            </div>
            <div class="col"></div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c4_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p2') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p3') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p4') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p5') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p6') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c4_p7') }}
              </p>

            </div>
            <div class="col"></div>
          </div>

        </div>

        <!-- SEPERATOR -->
        <div class="col"></div>
      </div>

      <!-- C | D -->
      <div class="row" style="margin-top: 45px">
        <!-- SEPERATOR -->
        <div class="col"></div>

        <!-- C -->
        <div class="col-4">
          <!-- IMG -->
          <div class="row">
            <div class="col">
              <img :src="require('@/assets/images/turkish_citizenship/4.jpg')" class="img-fluid" alt="Responsive image">
            </div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col">
              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c6_title') }} </span>
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c6_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c6_p2') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c6_p3') }}
              </p>
            </div>
          </div>

        </div>

        <!-- D -->
        <div class="col-4">
          <!-- IMG -->
          <div class="row">
            <div class="col">
              <img :src="require('@/assets/images/turkish_citizenship/3.jpg')" class="img-fluid" alt="Responsive image">
            </div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col">
              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c5_title') }} </span>
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c5_desc') }}
              </p>
            </div>
          </div>

        </div>

        <!-- SEPERATOR -->
        <div class="col"></div>
      </div>

      <!-- E | F -->
      <div class="row" style="margin-top: 45px">
        <!-- SEPERATOR -->
        <div class="col"></div>

        <!-- E -->
        <div class="col-4">
          <!-- IMG -->
          <div class="row">
            <div class="col">
              <img :src="require('@/assets/images/turkish_citizenship/6.jpg')" class="img-fluid" alt="Responsive image">
            </div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col">
              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c8_title') }} </span>
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c8_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c8_p2') }}
              </p>
            </div>
          </div>

        </div>

        <!-- F -->
        <div class="col-4">
          <!-- IMG -->
          <div class="row">
            <div class="col">
              <img :src="require('@/assets/images/turkish_citizenship/5.jpg')" class="img-fluid" alt="Responsive image">
            </div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col">
              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c7_title') }} </span>
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c7_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c7_p2') }}
              </p>
            </div>
          </div>

        </div>

        <!-- SEPERATOR -->
        <div class="col"></div>
      </div>

      <!-- G -->
      <div class="row" style="margin-top: 50px">
        <!-- SEPERATOR -->
        <div class="col"></div>

        <div class="col-10">

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c9_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c9_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c9_p2') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c9_p3') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c9_p4') }}
              </p>
            </div>
            <div class="col"></div>
          </div>

        </div>

        <!-- SEPERATOR -->
        <div class="col"></div>
      </div>


      <!-- START - Suggestion - 2 -->
      <client-only>
        <swiper v-if="lst_estate_2.length > 0" ref="mySwiper" class="swiper" :options="swiperOptions" :auto-update="true" :auto-destroy="true">
          <swiper-slide  v-for="item in lst_estate_2.slice(0,5)"  :key="item.id">
            <HouseCard1
              :project_id="item.id"
              :estate_id="item.id"
              :images="item.galleris"
              :address="item.state + ' | ' + item.city"
              :title="item.title"
              :price="item.prices[0].price_value"
              :price_unit="item.prices[0].unit_title"
              :properties="item.properties"
              :is_viewed="item.is_use"
              :area_space="item.area_space_all"
              :floor="item.floor_number_title"
              :room="item.room_number_title"
              :is_like="item.is_like"
              :is_ifram_360="item.is_ifram_360"
              :is_matterport="item.is_matterport"
              :land_use="item.land_use_sumery"
              :province="item.state"
              :neghbourhod="item.neghbourhod"
              :city="item.city"
              radius="none"
              :bathroom="item.bathroom"
              :use_status="item.use_status"
              :age_biulding="item.age_biulding"
              :urlHelper="item.urlHelper"
            ></HouseCard1>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
      <!-- END - Suggestion - 2 -->


      <!-- H -->
      <div class="row" style="margin-top: 50px">
        <!-- SEPERATOR -->
        <div class="col"></div>

        <div class="col-10">

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c10_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c10_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c10_p2') }}
              </p>
            </div>
            <div class="col"></div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c11_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c11_p1') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c11_p2') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c11_p3') }}
              </p>
              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c11_p4') }}
              </p>
            </div>
            <div class="col"></div>
          </div>

          <!-- TEXT -->
          <div class="row">
            <div class="col"></div>
            <div class="col-10">

              <p class="" style="font-size: 18px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <span style="border-bottom: solid 4px #00bb7e">{{ $t('turkish_citizenship.c12_title') }} </span>
              </p>

              <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                {{ $t('turkish_citizenship.c12_desc') }}
              </p>
            </div>
            <div class="col"></div>
          </div>

        </div>

        <!-- SEPERATOR -->
        <div class="col"></div>
      </div>

      <!-- END PAGE -->
      <div class="row" style="margin-top: 45px">
        <div class="col" style="border-bottom: solid 4px #00bb7e" ></div>
        <div class="col-4">
          <p class="text-center" style="font-size: 14px;margin-top: 25px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span>{{ $t('turkish_citizenship.title_4') }} </span>
          </p>
          <p style="    height: 36px;">
            <button type="button" class="btn btn-success Yes_btn1" style="font-size:  24px; height: auto; padding: 5px 25px;" @click="show_zoho(1)"> {{ $t('turkish_citizenship.btn_1') }} </button>
          </p>
        </div>
        <div class="col" style="border-bottom: solid 4px #00bb7e" ></div>
      </div>


    </div>

    <div class="container-fluid" v-if="show_zoho_iframe === true">
      <iframe width='610px' height='350px' src='https://crm.zoho.com/crm/WebFormServeServlet?rid=6039cbd4419916afb87fa1e264e166b93c386df8c32fd230bef4dac43f9e3d22gide2de2b370fa9b6dd0434db89f33e872b158e6f2cb5f563af0bb98dcf5811e7b6'></iframe>
      <br>
      <hr>
      <button class="btn btn-warning" @click="show_zoho(2)"> {{ $t('turkish_citizenship.back') }} </button>
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
      , lst_estate: []
      , lst_estate_1: []
      , lst_estate_2: []
      , lst_estate_3: []
      , show_zoho_iframe : false
      , house_showing_counter : 9
      , more_counter : 6

      , pagination : 1
      , last_id : -1
      , show_counter : 10
      , order_by : 10
      , gross_space_min : 1
      , gross_space_max : 6000
      , slider_1 : {
        min : 1500000 ,
        max : 3000000 ,
      }
      , slider_2 : {
        min : 800000 ,
        max : 15000000 ,
      }
      , slider_3 : {
        min : 250000 ,
        max : 800000 ,
      }


      , swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 4,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }


    }
  }
  , methods: {
    fetch_estate() {

      this.$axios.$post('list_of_estate_customer', {
        language: this.$i18n.locale,
        token: this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        last_id: -1,
        count: this.house_showing_counter,
      })
        .then((response) => {


          // if (response[0].res === -5) {
          //   this.$session.destroy();
          //   this.$router.push({name: 'evara_index'});
          // }

          this.lst_estate = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , show_zoho(type){
      if (type === 1){
        this.show_zoho_iframe = true;
      }else{
        this.show_zoho_iframe = false;
      }
      window.scrollTo(0, 0);
    }

    , do_search_1() {

      let formData = new FormData();

      formData.append('language', this.$i18n.locale)
      formData.append('token', this.$storage.getUniversal('token'))
      formData.append('currency', this.$storage.getUniversal('currency'))
      formData.append('last_id', this.last_id)
      formData.append('pagination', this.pagination)
      formData.append('count', this.show_counter)
      formData.append('ordering', this.order_by)
      formData.append('gross_space_min', this.gross_space_min)
      formData.append('gross_space_max', this.gross_space_max)
      formData.append('price_min', this.slider_1.min)
      formData.append('price_max', this.slider_1.max)

      this.lst_estate = [];
      this.$axios.$post('advanced_search', formData)
        .then((response) => {


          // var message = response[0].msg;

          // if (response[0].res === -5) {
            // this.$session.destroy();
            // this.$router.push({name: 'evara_index'});
          // }

          if (response.length >= 1) {
            this.lst_estate_1 = response[0].search;
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , do_search_2() {

      let formData = new FormData();

      formData.append('language', this.$i18n.locale)
      formData.append('token', this.$storage.getUniversal('token'))
      formData.append('currency', this.$storage.getUniversal('currency'))
      formData.append('last_id', this.last_id)
      formData.append('pagination', this.pagination)
      formData.append('count', this.show_counter)
      formData.append('ordering', this.order_by)
      formData.append('gross_space_min', this.gross_space_min)
      formData.append('gross_space_max', this.gross_space_max)
      formData.append('price_min', this.slider_2.min)
      formData.append('price_max', this.slider_2.max)

      this.lst_estate = [];
      this.$axios.$post('advanced_search', formData)
        .then((response) => {


          // var message = response[0].msg;

          // if (response[0].res === -5) {
          //   this.$session.destroy();
          //   this.$router.push({name: 'evara_index'});
          // }

          if (response.length >= 1) {
            this.lst_estate_2 = response[0].search;
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
    , do_search_3() {

      let formData = new FormData();

      formData.append('language', this.$i18n.locale)
      formData.append('token', this.$storage.getUniversal('token'))
      formData.append('currency', this.$storage.getUniversal('currency'))
      formData.append('last_id', this.last_id)
      formData.append('pagination', this.pagination)
      formData.append('count', this.show_counter)
      formData.append('ordering', this.order_by)
      formData.append('gross_space_min', this.gross_space_min)
      formData.append('gross_space_max', this.gross_space_max)
      formData.append('price_min', this.slider_3.min)
      formData.append('price_max', this.slider_3.max)

      this.lst_estate = [];
      this.$axios.$post('advanced_search', formData)
        .then((response) => {


          // var message = response[0].msg;

          // if (response[0].res === -5) {
          //   this.$session.destroy();
          //   this.$router.push({name: 'evara_index'});
          // }

          if (response.length >= 1) {
            this.lst_estate_3 = response[0].search;
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.fetch_estate();
    this.do_search_1();
    this.do_search_2();
    this.do_search_3();
  }

  , head () {
    return {
      title: this.$t('siteTitle.turkishcitizenship'),
      meta: [
        {
          hid: 'شهروند ترکیه',
          name: 'شهروند ترکیه',
          content: 'اوارا ، بهترین راه حل برای اخذ شهروندی کشور ترکیه'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'شهروند ترکیه',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'اوارا ، بهترین راه حل برای اخذ شهروندی کشور ترکیه',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.mag.evara.life/wp-content/uploads/2021/03/word-image-6.png',
        }
        ,
        {
          hid: 'اوارا - خرید و فروش ملک در ترکیه',
          name: 'شهروند ترکیه',
          content: ' اوارا ، بهترین راه حل برای اخذ شهروندی کشور ترکیه'
        },
      ]
    }
  }

}
</script>

<style scoped>

.persian_rtl{
  direction: rtl;
}

.persian_ltr{
  direction: ltr;
}

.cl_custom_1{
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  height: 425px;
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

.Yes_btn1{
  /*width: 200px;*/
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
  /*width: 200px;*/
  height: 40px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to left, #76c651, #41b6df);
  /*background-image: linear-gradient(to left, #00bb7e, #0ede9b);*/
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

</style>

