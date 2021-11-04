<template>
  <div>
    <SocialHead
      :link="'detail/' + $route.params.project"
      :title="meta_estate.title"
      :description="meta_estate.description"
      :image="meta_estate.image"
    />
    <div
      v-if="estate_info"
      class="container-fluid text-center"
      style="margin-top: -5vh"
      v-bind:class="[
        { Estedad_FD_Light: $i18n.locale == 'fa' || $i18n.locale == 'ar' },
        {
          Estedad_Light:
            $i18n.locale == 'en' ||
            $i18n.locale == 'ru' ||
            $i18n.locale == 'tr',
        },
      ]"
    >
      <!-- Estate Title -->
      <div
        class="row"
        v-bind:class="[
          { Estedad_FD_Bold: $i18n.locale == 'fa' || $i18n.locale == 'ar' },
          {
            Estedad_Bold:
              $i18n.locale == 'en' ||
              $i18n.locale == 'ru' ||
              $i18n.locale == 'tr',
          },
        ]"
      >
        <div
          class="col"
          v-bind:class="[
            { 'text-right': $i18n.locale == 'fa' || $i18n.locale == 'ar' },
            {
              'text-left':
                $i18n.locale == 'en' ||
                $i18n.locale == 'ru' ||
                $i18n.locale == 'tr',
            },
          ]"
        >
          <h5>{{ estate_info.title }}</h5>
        </div>
      </div>

      <!-- Estate : Like || Share || Small Address -->
      <div
        class="row"
        v-bind:class="[
          { 'text-right rtl': $i18n.locale == 'fa' || $i18n.locale == 'ar' },
          {
            'text-left ltr':
              $i18n.locale == 'en' ||
              $i18n.locale == 'ru' ||
              $i18n.locale == 'tr',
          },
        ]"
      >
        <div class="col-11">
          <span
            class="page_top_desc"
            v-bind:class="[
              { Estedad_FD_Light: $i18n.locale == 'fa' },
              { Estedad_FD_Light: $i18n.locale == 'ar' },
              { Estedad_Light: $i18n.locale == 'en' },
              { Estedad_Light: $i18n.locale == 'ru' },
            ]"
            v-if="estate_info.address.length > 0"
          >
            <!--          <i class="fas fa-map-marker-alt page_top_address_ico"></i>-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="11"
              style="margin-top: -5px"
              viewBox="0 0 13.018 15.398"
            >
              <path
                id="prefix__location-point"
                fill="#8b8b8b"
                d="M14.633 3.9a6.513 6.513 0 1 0-9.211 9.211l4.045 4.053a.768.768 0 0 0 1.09 0l4.076-4.091a6.486 6.486 0 0 0 0-9.172zm-1.1 8.075L10.028 15.5 6.52 11.977a4.958 4.958 0 1 1 7.015 0zM7.725 6.151a3.311 3.311 0 1 0 5.649 2.379 3.254 3.254 0 0 0-.967-2.341 3.3 3.3 0 0 0-4.682-.038zm3.6 3.592a.739.739 0 1 0-.038 0z"
                transform="translate(-3.515 -1.995)"
              />
            </svg>
            {{ estate_info.address[0].address }}
          </span>
        </div>
        <div class="col">
          <div
            v-if="this.ExistStorage() && viewer.is_liked"
            @click="like_estate"
            class="page_top_like_and_share_ico icon_like active"
          >
            <i class="far fa-heart"></i>
          </div>
          <div
            v-if="this.ExistStorage() && !viewer.is_liked"
            @click="like_estate"
            class="page_top_like_and_share_ico icon_like"
          >
            <i class="far fa-heart"></i>
          </div>

          <div
            data-toggle="modal"
            data-target="#share_Modal"
            class="page_top_like_and_share_ico"
          >
            <i class="fas fa-share-alt"></i>
          </div>
          <Sharing-modal
            :title="estate_info.title + ' - ' + estate_info.state"
            :desc="estate_info.comment"
          />
        </div>
      </div>

      <!-- Content -->
      <div
        class="row mt-5"
        v-bind:class="[
          { rtl: $i18n.locale == 'fa' || $i18n.locale == 'ar' },
          {
            ltr:
              $i18n.locale == 'en' ||
              $i18n.locale == 'ru' ||
              $i18n.locale == 'tr',
          },
        ]"
      >
        <!--Right Side-->
        <div class="col-8">
          <!--Page Slider-->
          <div
            v-if="boxes.slider"
            class="row"
            style="direction: rtl !important"
          >
            <div class="col top_slider" style="height: 70vh">
              <div v-if="estate_info.galleris.length === 0">
                <div
                  class="slider-image"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/images/sample_building/no-image.jpg') +
                      ')',
                  }"
                />
              </div>
              <div v-if="estate_info.galleris.length > 0">
                <client-only>
                  <swiper
                    v-if="estate_info.galleris.length > 0"
                    ref="mySwiper"
                    class="swiper"
                    :options="swiperOptions"
                    :auto-update="true"
                    :auto-destroy="true"
                  >
                    <!-- images -->
                    <swiper-slide
                      v-for="(src, indx) in estate_info.galleris"
                      :key="src.img"
                    >
                      <div style="position: relative">
                        <div
                          class="make_fullscreen"
                          @click="coolLightBox_index = indx"
                        >
                          <i class="fas fa-compress"></i>
                        </div>
                        <!--                        <div class="slider-image" :style="{ backgroundImage: 'url(' + src.img + ')' }"></div>-->
                        <img
                          :src="src.img"
                          style="object-fit: cover; width: 100%; height: 70vh"
                        />
                      </div>
                    </swiper-slide>
                    <!-- videos -->
                    <swiper-slide
                      v-for="vid in estate_info.videos"
                      :key="vid.video"
                    >
                      <video
                        style="width: 100%; height: 70vh"
                        :src="vid.video"
                        controls
                      >
                        مرورگر شما از ویدیو پشتیبانی نمی کند
                      </video>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>
                </client-only>
              </div>

              <CoolLightBox
                :items="this.images_fullscreen"
                :index="coolLightBox_index"
                :effect="'fade'"
                :useZoomBar="true"
                :fullScreen="true"
                @close="coolLightBox_index = null"
              >
              </CoolLightBox>
            </div>
          </div>

          <!--Map-->
          <div v-if="boxes.map" class="row">
            <div class="col">
              <div class="card custom_card" style="padding: 15px; height: 70vh">
                <div class="row" style="padding: 5px 15px 5px 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h6
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.estate_location") }}
                    </h6>
                  </div>
                </div>

                <!-- Google -->
                <div class="row">
                  <div class="col">
                    <GmapMap
                      :options="{
                        zoomControl: true,
                        mapTypeControl: true,
                        scaleControl: true,
                        streetViewControl: true,
                        rotateControl: true,
                        fullscreenControl: true,
                        disableDefaultUi: true,
                      }"
                      :center="map.marker"
                      :zoom="16"
                      class="leaflet_style"
                      style="height: 60vh"
                    >
                      <GmapMarker :position="map.marker" />
                    </GmapMap>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--360-->
          <div v-if="boxes._360" class="row">
            <div class="col">
              <div class="card custom_card" style="padding: 15px; height: 70vh">
                <div class="row" style="padding: 5px 15px 5px 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h6
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.birds_sight") }}
                    </h6>
                  </div>
                </div>
                <div class="row" style="direction: rtl; padding: 5px 10px">
                  <div class="col" style="border-radius: 1rem">
                    <span
                      v-if="
                        estate_info.iframe_360 === '' ||
                        estate_info.iframe_360 == undefined ||
                        estate_info.iframe_360 == null
                      "
                      style="margin-top: 10px"
                    >
                      <img
                        alt="EVARA"
                        v-if="$i18n.locale == 'fa'"
                        :src="
                          require(`@/assets/images/sample_building/empty_state_fa.jpg`)
                        "
                        style="margin-top: 5px; height: 60vh"
                        class="dark_ico"
                      />
                      <img
                        alt="EVARA"
                        v-if="$i18n.locale != 'fa'"
                        :src="
                          require(`@/assets/images/sample_building/empty_state_en.jpg`)
                        "
                        style="margin-top: 5px; height: 60vh"
                        class="dark_ico"
                      />
                    </span>

                    <div
                      style="position: relative"
                      v-if="
                        estate_info.iframe_360 !== '' &&
                        estate_info.iframe_360 != undefined &&
                        estate_info.iframe_360 != null
                      "
                    >
                      <div
                        style="
                          border-radius: 15px;
                          overflow: hidden;
                          max-width: 100%;
                        "
                      >
                        <div
                          v-html="estate_info.iframe_360"
                          style="max-height: 60vh"
                          class="seek_beak_custom"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--panorama-->
          <div v-if="false" class="row">
            <div class="col">
              <div class="card custom_card" style="padding: 15px; height: 70vh">
                <div class="row" style="padding: 5px 15px 5px 15px">
                  <div class="col text-right">
                    <h5
                      class="Estedad_Bold"
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.panaroma") }}
                    </h5>
                  </div>
                </div>
                <div class="row" style="direction: rtl; padding: 5px 10px">
                  <div class="col" style="border-radius: 1rem">
                    <div style="position: relative">
                      <div
                        style="
                          border-radius: 15px;
                          overflow: hidden;
                          max-width: 100%;
                        "
                      >
                        <div v-if="estate_info.pics_360.length === 0">
                          <img
                            alt="EVARA"
                            v-if="$i18n.locale == 'fa'"
                            :src="
                              require(`@/assets/images/sample_building/empty_state_fa.jpg`)
                            "
                            style="margin-top: 5px; height: 60vh"
                            class="dark_ico"
                          />
                          <img
                            alt="EVARA"
                            v-if="$i18n.locale != 'fa'"
                            :src="
                              require(`@/assets/images/sample_building/empty_state_en.jpg`)
                            "
                            style="margin-top: 5px; height: 60vh"
                            class="dark_ico"
                          />
                        </div>

                        <div v-if="estate_info.pics_360.length !== 0">
                          <Panorama
                            v-if="estate_info.pics_360.length > 0"
                            v-for="pics in estate_info.pics_360"
                            :key="pics.pano"
                            :source="pics.pano"
                            style="height: 70vh"
                            :caption="$t('panaroma_image_title')"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--360 FROM SITE-->
          <div v-if="boxes.panorama" class="row">
            <div class="col">
              <div class="card custom_card" style="padding: 15px; height: 70vh">
                <div class="row" style="padding: 5px 15px 5px 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h6
                      class="Estedad_Bold"
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house._360tour") }}
                    </h6>
                  </div>
                </div>
                <div class="row" style="direction: rtl; padding: 5px 10px">
                  <div class="col" style="border-radius: 1rem">
                    <div style="position: relative">
                      <div
                        style="
                          border-radius: 15px;
                          overflow: hidden;
                          max-width: 100%;
                        "
                      >
                        <!-- Matterport -->
                        <div
                          v-if="
                            estate_info.matterport_modelsid === '' ||
                            estate_info.matterport_modelsid == undefined ||
                            estate_info.matterport_modelsid == null
                          "
                        >
                          <img
                            alt="EVARA"
                            v-if="$i18n.locale == 'fa'"
                            :src="
                              require(`@/assets/images/sample_building/empty_state_fa.jpg`)
                            "
                            style="margin-top: 5px; height: 60vh"
                            class="dark_ico"
                          />
                          <img
                            alt="EVARA"
                            v-if="$i18n.locale != 'fa'"
                            :src="
                              require(`@/assets/images/sample_building/empty_state_en.jpg`)
                            "
                            style="margin-top: 5px; height: 60vh"
                            class="dark_ico"
                          />
                        </div>

                        <div
                          style="position: relative"
                          v-if="
                            estate_info.matterport_modelsid !== '' &&
                            estate_info.matterport_modelsid != undefined &&
                            estate_info.matterport_modelsid != null
                          "
                        >
                          <div
                            style="
                              border-radius: 15px;
                              overflow: hidden;
                              height: 60vh;
                              max-width: 100%;
                            "
                          >
                            <div
                              class="matterport_fix"
                              v-html="estate_info.matterport_modelsid"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Basic Property-->
          <div class="row mt-4">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div
                  class="row"
                  style="padding: 15px"
                  v-bind:class="[
                    { ltr: $i18n.locale == 'fa' || $i18n.locale == 'ar' },
                    {
                      rtl:
                        $i18n.locale == 'en' ||
                        $i18n.locale == 'ru' ||
                        $i18n.locale == 'tr',
                    },
                  ]"
                >
                  <div class="col text-center">
                    <div class="register_date_span text-center m-auto">
                      {{ $t("edit_house.date_of_registration") }} :
                      {{ estate_info.reg_date }}
                    </div>
                  </div>
                  <div
                    class="col-8"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h5
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ estate_info.title }}
                    </h5>
                  </div>
                </div>

                <div
                  class="row"
                  style="
                    direction: rtl;
                    padding: 5px 10px;
                    border-bottom: solid 1px #bbbbbb33;
                  "
                >
                  <div class="col">
                    <!-- RTL -->
                    <div
                      class="row"
                      v-if="$i18n.locale == 'fa' || $i18n.locale == 'ar'"
                      style="direction: rtl"
                    >
                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_floors != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_position_level.jpg`)
                          "
                          style="margin-top: 0; height: 30px"
                          class="footer_icon"
                        />
                        <span class="footer_label"
                          >{{ estate_info.floor_number_title }}
                          {{ $t("edit_house.floor") }}</span
                        >
                      </div>

                      <div class="col-3 footer_col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27.944"
                          height="23.287"
                          class="footer_icon"
                          viewBox="0 0 27.944 23.287"
                        >
                          <g
                            id="prefix__bed-1"
                            transform="translate(0 -42.667)"
                          >
                            <g
                              id="prefix__Group_1992"
                              data-name="Group 1992"
                              transform="translate(0 42.667)"
                            >
                              <path
                                id="prefix__Path_926"
                                fill="#bbb"
                                d="M25.46 52.6v-5.276a4.663 4.663 0 0 0-4.66-4.657H7.141a4.663 4.663 0 0 0-4.657 4.657V52.6H0v13.354h1.863v-5.278h24.218v5.278h1.863V52.6zM4.347 47.324a2.8 2.8 0 0 1 2.794-2.794H20.8a2.8 2.8 0 0 1 2.8 2.794V52.6h-3.1v-6.21H7.452v6.21h-3.1zm14.283.931V52.6H9.315v-4.344zm7.452 10.557H1.863v-4.346h24.218v4.347z"
                                data-name="Path 926"
                                transform="translate(0 -42.667)"
                              />
                            </g>
                          </g>
                        </svg>
                        <span class="footer_label">
                          {{ $t("edit_house.bedroom") }}
                          {{ estate_info.room_number_title }}</span
                        >
                      </div>

                      <div class="col-3 footer_col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.097"
                          height="22.19"
                          class="footer_icon"
                          viewBox="0 0 23.097 22.19"
                        >
                          <path
                            id="prefix__icons8_parking_and_2nd_floor"
                            fill="#bbb"
                            stroke="#bbb"
                            stroke-width="0.9px"
                            d="M13.167 3a.506.506 0 0 0-.091.015L3.4 5.434a.483.483 0 1 0 .234.937l.851-.212V9.29h.968V5.918l7.742-1.935 7.742 1.935v8.422h1.077L21.9 6.16l.851.212a.483.483 0 1 0 .234-.937l-9.675-2.42A.459.459 0 0 0 13.167 3zM4.484 9.138v4.99h.968v-4.99zm16.451 1.119v.968h.965v-.968zM4.484 12.193v.968h.968v-.968zm16.451 0v.968h.965v-.968zm-18.81 1.935v.972h2.359v8.709a.485.485 0 0 0 .484.484h16.451a.485.485 0 0 0 .484-.484V15.1h2.419v-.968zm3.327.968h15.483v8.226H5.452z"
                            transform="translate(-1.675 -2.549)"
                          />
                        </svg>
                        <span class="footer_label">
                          {{ $t("edit_house.floor") }}
                          {{ estate_info.floor_number_title }}</span
                        >
                      </div>

                      <div class="col-3 footer_col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22.593"
                          height="22.593"
                          class="footer_icon"
                          viewBox="0 0 22.593 22.593"
                        >
                          <path
                            id="prefix__icons8_surface"
                            fill="#bbb"
                            d="M4.347.5L1 3.847l3.347 3.347v-2.51h8.368v2.51l3.347-3.347L12.715.5v2.51H4.347zM3.51 8.031A2.519 2.519 0 0 0 1 10.541v10.041a2.519 2.519 0 0 0 2.51 2.51h10.042a2.519 2.519 0 0 0 2.51-2.51V10.541a2.519 2.519 0 0 0-2.51-2.51zm16.736 0L16.9 11.378h2.51v8.368H16.9l3.347 3.347 3.347-3.347h-2.51v-8.368h2.51zM3.51 9.7h10.042a.826.826 0 0 1 .837.837v10.045a.826.826 0 0 1-.837.837H3.51a.826.826 0 0 1-.837-.837V10.541A.826.826 0 0 1 3.51 9.7z"
                            transform="translate(-1 -.5)"
                          />
                        </svg>
                        <span class="footer_label"
                          >{{ estate_info.area_space_all }}
                          {{ $t("edit_house.meter") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_parking != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_parking.jpg`)
                          "
                          style="margin-top: 0; height: 30px"
                          class="footer_icon"
                        />
                        <span class="footer_label"
                          >{{ properties.prt_parking }}
                          {{ $t("edit_house.count") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_bath != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_bath.jpg`)
                          "
                          style="margin-top: 0; height: 30px"
                          class="footer_icon"
                        />
                        <span class="footer_label"
                          >{{ properties.prt_bath }}
                          {{ $t("edit_house.count") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_history != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_history.jpg`)
                          "
                          style="margin-top: 0; height: 30px"
                          class="footer_icon"
                        />
                        <span class="footer_label"
                          >{{ properties.prt_history }}
                          {{ $t("edit_house.year") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_sell_or_buy != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_sell_or_buy.jpg`)
                          "
                          style="margin-top: 0; height: 30px"
                          class="footer_icon"
                        />
                        <span class="footer_label">{{
                          properties.prt_sell_or_buy
                        }}</span>
                      </div>
                    </div>
                    <!-- END RTL -->

                    <!-- LTR -->
                    <div
                      class="row"
                      v-if="
                        $i18n.locale == 'en' ||
                        $i18n.locale == 'ru' ||
                        $i18n.locale == 'tr'
                      "
                      style="direction: ltr"
                    >
                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_floors != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_position_level.jpg`)
                          "
                          style="margin-top: 0; height: 30px; float: left"
                          class="footer_icon"
                        />
                        <span class="footer_label" style="float: left"
                          >{{ estate_info.floor_number_title }}
                          {{ $t("edit_house.floor") }}</span
                        >
                      </div>

                      <div class="col-3 footer_col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27.944"
                          height="23.287"
                          class="footer_icon"
                          style="float: left"
                          viewBox="0 0 27.944 23.287"
                        >
                          <g
                            id="prefix__bed-1"
                            transform="translate(0 -42.667)"
                          >
                            <g
                              id="prefix__Group_1992"
                              data-name="Group 1992"
                              transform="translate(0 42.667)"
                            >
                              <path
                                id="prefix__Path_926"
                                fill="#bbb"
                                d="M25.46 52.6v-5.276a4.663 4.663 0 0 0-4.66-4.657H7.141a4.663 4.663 0 0 0-4.657 4.657V52.6H0v13.354h1.863v-5.278h24.218v5.278h1.863V52.6zM4.347 47.324a2.8 2.8 0 0 1 2.794-2.794H20.8a2.8 2.8 0 0 1 2.8 2.794V52.6h-3.1v-6.21H7.452v6.21h-3.1zm14.283.931V52.6H9.315v-4.344zm7.452 10.557H1.863v-4.346h24.218v4.347z"
                                data-name="Path 926"
                                transform="translate(0 -42.667)"
                              />
                            </g>
                          </g>
                        </svg>
                        <span class="footer_label" style="float: left">
                          {{ $t("edit_house.bedroom") }}
                          {{ estate_info.room_number_title }}</span
                        >
                      </div>

                      <div class="col-3 footer_col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.097"
                          height="22.19"
                          class="footer_icon"
                          style="float: left"
                          viewBox="0 0 23.097 22.19"
                        >
                          <path
                            id="prefix__icons8_parking_and_2nd_floor"
                            fill="#bbb"
                            stroke="#bbb"
                            stroke-width="0.9px"
                            d="M13.167 3a.506.506 0 0 0-.091.015L3.4 5.434a.483.483 0 1 0 .234.937l.851-.212V9.29h.968V5.918l7.742-1.935 7.742 1.935v8.422h1.077L21.9 6.16l.851.212a.483.483 0 1 0 .234-.937l-9.675-2.42A.459.459 0 0 0 13.167 3zM4.484 9.138v4.99h.968v-4.99zm16.451 1.119v.968h.965v-.968zM4.484 12.193v.968h.968v-.968zm16.451 0v.968h.965v-.968zm-18.81 1.935v.972h2.359v8.709a.485.485 0 0 0 .484.484h16.451a.485.485 0 0 0 .484-.484V15.1h2.419v-.968zm3.327.968h15.483v8.226H5.452z"
                            transform="translate(-1.675 -2.549)"
                          />
                        </svg>
                        <span class="footer_label" style="float: left">
                          {{ $t("edit_house.floor") }}
                          {{ estate_info.floor_number_title }}</span
                        >
                      </div>

                      <div class="col-3 footer_col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22.593"
                          height="22.593"
                          class="footer_icon"
                          style="float: left"
                          viewBox="0 0 22.593 22.593"
                        >
                          <path
                            id="prefix__icons8_surface"
                            fill="#bbb"
                            d="M4.347.5L1 3.847l3.347 3.347v-2.51h8.368v2.51l3.347-3.347L12.715.5v2.51H4.347zM3.51 8.031A2.519 2.519 0 0 0 1 10.541v10.041a2.519 2.519 0 0 0 2.51 2.51h10.042a2.519 2.519 0 0 0 2.51-2.51V10.541a2.519 2.519 0 0 0-2.51-2.51zm16.736 0L16.9 11.378h2.51v8.368H16.9l3.347 3.347 3.347-3.347h-2.51v-8.368h2.51zM3.51 9.7h10.042a.826.826 0 0 1 .837.837v10.045a.826.826 0 0 1-.837.837H3.51a.826.826 0 0 1-.837-.837V10.541A.826.826 0 0 1 3.51 9.7z"
                            transform="translate(-1 -.5)"
                          />
                        </svg>
                        <span class="footer_label" style="float: left"
                          >{{ estate_info.area_space_all }}
                          {{ $t("edit_house.meter") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_parking != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_parking.jpg`)
                          "
                          style="margin-top: 0; height: 30px; float: left"
                          class="footer_icon"
                        />
                        <span class="footer_label" style="float: left"
                          >{{ properties.prt_parking }}
                          {{ $t("edit_house.count") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_bath != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_bath.jpg`)
                          "
                          style="margin-top: 0; height: 30px; float: left"
                          class="footer_icon"
                        />
                        <span class="footer_label" style="float: left"
                          >{{ properties.prt_bath }}
                          {{ $t("edit_house.count") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_history != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_history.jpg`)
                          "
                          style="margin-top: 0; height: 30px; float: left"
                          class="footer_icon"
                        />
                        <span class="footer_label" style="float: left"
                          >{{ properties.prt_history }}
                          {{ $t("edit_house.year") }}</span
                        >
                      </div>

                      <div
                        class="col-3 footer_col"
                        v-if="properties.prt_sell_or_buy != null"
                      >
                        <img
                          alt="EVARA"
                          :src="
                            require(`@/assets/images/evara_icon/ico_sell_or_buy.jpg`)
                          "
                          style="margin-top: 0; height: 30px; float: left"
                          class="footer_icon"
                        />
                        <span class="footer_label" style="float: left">{{
                          properties.prt_sell_or_buy
                        }}</span>
                      </div>
                    </div>
                    <!-- END LTR -->
                  </div>
                </div>

                <!--All Property-->
                <div class="row" style="padding: 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h5
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.all_feature") }}
                    </h5>
                  </div>
                </div>
                <div
                  class="row"
                  style="direction: rtl; padding: 5px 10px"
                  v-bind:class="[
                    {
                      ltr:
                        $i18n.locale == 'en' ||
                        $i18n.locale == 'ru' ||
                        $i18n.locale == 'tr',
                    },
                  ]"
                >
                  <div class="col">
                    <div class="mb-4">
                      <div class="row">
                        <div
                          class="col-12"
                          v-for="item in estate_info.properties"
                          :key="item.id"
                        >
                          <div
                            class="row"
                            v-if="
                              item.property_id != 170 &&
                              item.property_id != 169 &&
                              item.property_id != 179 &&
                              item.property_id != 176
                            "
                          >
                            <div class="col footer_col">
                              <span
                                class="footer_label"
                                v-bind:class="[
                                  {
                                    'text-right fl_r':
                                      $i18n.locale == 'fa' ||
                                      $i18n.locale == 'ar',
                                  },
                                  {
                                    'text-left fl_l':
                                      $i18n.locale == 'en' ||
                                      $i18n.locale == 'ru' ||
                                      $i18n.locale == 'tr',
                                  },
                                ]"
                                style="font-weight: bold; font-size: 16px"
                              >
                                {{ item.property_name }}
                              </span>
                            </div>
                          </div>

                          <div
                            class="row"
                            style="padding-right: 30px"
                            v-bind:class="[
                              {
                                persian_ltr:
                                  $i18n.locale == 'en' ||
                                  $i18n.locale == 'ru' ||
                                  $i18n.locale == 'tr',
                              },
                            ]"
                            v-if="
                              item.property_id != 170 &&
                              item.property_id != 169 &&
                              item.property_id != 179 &&
                              item.property_id != 176
                            "
                          >
                            <div
                              class="col-4 footer_col"
                              v-bind:class="[
                                {
                                  'persian_ltr fl_l':
                                    $i18n.locale == 'en' ||
                                    $i18n.locale == 'ru' ||
                                    $i18n.locale == 'tr',
                                },
                              ]"
                              style="margin-top: 10px"
                              v-for="opt in item.property_value"
                              :key="opt.property_value_id"
                              v-if="
                                item.property_show_type === 1 &&
                                opt.is_exist === 1
                              "
                            >
                              <span
                                class="footer_label"
                                v-bind:class="[
                                  {
                                    'text-right fl_r':
                                      $i18n.locale == 'fa' ||
                                      $i18n.locale == 'ar',
                                  },
                                  {
                                    'text-left fl_l':
                                      $i18n.locale == 'en' ||
                                      $i18n.locale == 'ru' ||
                                      $i18n.locale == 'tr',
                                  },
                                ]"
                                v-if="opt.is_exist === 1"
                                style="font-weight: bold; margin-left: 20px"
                              >
                                <i
                                  style="
                                    color: #88c547;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                  "
                                  class="fas fa-check"
                                ></i>
                                {{ opt.property_value }}
                              </span>
                              <span
                                class="footer_label"
                                v-bind:class="[
                                  {
                                    'text-right fl_r':
                                      $i18n.locale == 'fa' ||
                                      $i18n.locale == 'ar',
                                  },
                                  {
                                    'text-left fl_l':
                                      $i18n.locale == 'en' ||
                                      $i18n.locale == 'ru' ||
                                      $i18n.locale == 'tr',
                                  },
                                ]"
                                v-if="
                                  item.property_show_type === 0 &&
                                  opt.is_exist === 0
                                "
                                style="color: #6363634d; margin-left: 20px"
                              >
                                {{ opt.property_value }}
                              </span>
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

          <!--Description-->
          <div class="row mt-4">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div class="row" style="padding: 15px 15px 0 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h5
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.desc") }}
                    </h5>
                  </div>
                </div>

                <div class="row" style="padding: 0px 15px 0 15px">
                  <div
                    class="col text_p"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                    v-html="estate_info.comment"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4" v-if="chart_record.length > 0">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div class="row" style="padding: 15px 15px 0 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <h5
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.chart_history") }}
                    </h5>
                  </div>
                </div>

                <div class="row" style="padding: 0px 15px 0 15px">
                  <div class="col">
                    <line-chart
                      :data="chart_record"
                      :colors="['#41b7dc']"
                      width="50vw"
                      height="400px"
                      style="margin: auto; padding-top: 50px"
                    ></line-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Left Side-->
        <div class="col">
          <!--Button Image-->
          <div class="row">
            <div class="col">
              <div class="row" style="margin-bottom: 25px">
                <div class="col">
                  <div
                    @click="change_layout('slider')"
                    v-bind:class="{ active: boxes.slider === true }"
                    class="big_image_button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="75"
                      viewBox="0 0 93.224 93.224"
                    >
                      <path
                        id="prefix__mbri-photos"
                        class="prefix__cls-1"
                        d="M19.422 11.653a7.769 7.769 0 1 0 7.769 7.769 7.791 7.791 0 0 0-7.769-7.769zm0 3.884a3.884 3.884 0 1 1-3.884 3.884 3.856 3.856 0 0 1 3.884-3.884zM52.438 27.19a2.189 2.189 0 0 0-1.262.458L33.017 42.1 26.6 35.549a1.936 1.936 0 0 0-2.536-.179L8.545 47.008c-2.059 1.542.412 4.545 2.331 3.107l14.372-10.693 6.37 6.627a1.939 1.939 0 0 0 2.583.144l18.237-14.43 10.216 10.41A1.941 1.941 0 1 0 65.4 39.43L53.759 27.8a1.786 1.786 0 0 0-1.321-.6zM9.711 58.265h54.38a1.942 1.942 0 1 1 0 3.884H9.711a1.942 1.942 0 1 1 0-3.884zM5.826 0A5.859 5.859 0 0 0 0 5.826v62.15A5.859 5.859 0 0 0 5.826 73.8h62.15a5.859 5.859 0 0 0 5.824-5.824V5.826A5.859 5.859 0 0 0 67.976 0zm0 3.884h62.15a1.9 1.9 0 0 1 1.942 1.942v62.15a1.9 1.9 0 0 1-1.942 1.942H5.826a1.9 1.9 0 0 1-1.942-1.942V5.826a1.9 1.9 0 0 1 1.942-1.942zm73.8 15.537a1.942 1.942 0 0 0 0 3.884H87.4a1.9 1.9 0 0 1 1.942 1.942V87.4a1.9 1.9 0 0 1-1.942 1.939H25.248a1.9 1.9 0 0 1-1.942-1.939v-7.771a1.841 1.841 0 0 0-1.942-1.942 1.834 1.834 0 0 0-1.942 1.942V87.4a5.859 5.859 0 0 0 5.826 5.826H87.4a5.859 5.859 0 0 0 5.824-5.826V25.248a5.859 5.859 0 0 0-5.824-5.826z"
                      />
                    </svg>
                    <span>{{ $t("edit_house.estate_pic") }}</span>
                  </div>
                </div>

                <div class="col">
                  <div
                    @click="change_layout('360')"
                    v-bind:class="{ active: boxes._360 === true }"
                    class="big_image_button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="More_icon"
                      width="49.484"
                      height="42.905"
                      viewBox="0 0 49.484 42.905"
                    >
                      <g
                        id="noun_Bird_3052320"
                        transform="translate(-606.405 -247.277)"
                      >
                        <g
                          id="Group_2685"
                          data-name="Group 2685"
                          transform="translate(606.824 247.68)"
                        >
                          <g id="Group_2684" data-name="Group 2684">
                            <g id="Group_2683" data-name="Group 2683">
                              <path
                                id="Path_2147"
                                d="M27.1 30.912c-7.2-3.835-12.3-9.541-19.672-18.386-5.668 14.983 5.46 23.889 12.814 27.939z"
                                class="cls-03"
                                data-name="Path 2147"
                                transform="translate(-5.4 -11.738)"
                              />
                              <path
                                id="Path_2148"
                                d="M27.917 55.337l8.328-9.027a14.925 14.925 0 0 0 2.325-4.271 5.77 5.77 0 0 0 .249-1.28c.026-.511-.1-.723-.207-.812a.39.39 0 0 0-.071-.045l-.027-.011a.544.544 0 0 0-.075-.026l-.042-.009a.856.856 0 0 0-.1-.013h-.136c-.048 0-.1.006-.156.015-.036.005-.075.013-.114.021-.06.012-.126.029-.2.048-.045.012-.091.026-.141.042-.081.026-.171.061-.264.1-.05.019-.1.036-.149.058-.152.065-.316.14-.5.234a14.5 14.5 0 0 0-3.808 3.192l-7.151 9.965a.268.268 0 0 1-.077.071l-6.515 4.022c-1.288.795-1.91 1.19-1.982 1.477-.214.855.89 2.474 2.685 3.938s3.6 2.215 4.394 1.834c.267-.128.528-.817 1.047-2.239l2.626-7.192a.272.272 0 0 1 .061-.092z"
                                class="cls-03"
                                data-name="Path 2148"
                                transform="translate(-10.549 -24.282)"
                              />
                              <path
                                id="Path_2149"
                                d="M46.119 52.859L38.146 61.5c5.449 6.386 16.415 15.49 29.948 6.919-10.15-5.437-16.767-9.282-21.975-15.56z"
                                class="cls-03"
                                data-name="Path 2149"
                                transform="translate(-20.223 -30.262)"
                              />
                              <path
                                id="Path_2150"
                                class="cls-03"
                                d="M53.524 48.972c-10.361-5.547-17.059-9.389-22.283-15.721.067-.1.125-.183.188-.275s.143-.207.209-.306c.078-.117.151-.229.224-.342.062-.095.125-.191.183-.283.07-.111.135-.218.2-.325.052-.086.108-.174.157-.258.064-.109.122-.213.18-.317.043-.077.089-.155.129-.23.058-.108.11-.213.163-.317.034-.067.07-.135.1-.2.053-.109.1-.215.147-.321.025-.057.054-.116.078-.172.049-.116.091-.229.134-.341.016-.043.036-.089.051-.131q.083-.232.149-.458c.4-1.381.359-2.249-.131-2.654s-1.317-.285-2.554.347q-.217.11-.433.239c-.041.024-.083.053-.125.078-.1.064-.208.128-.314.2-.043.029-.087.062-.13.092-.106.074-.212.148-.32.23l-.115.091c-.117.091-.235.183-.355.284l-.085.074c-.134.114-.271.232-.411.359l-.049.046c-.156.142-.316.293-.481.453-.313.3-.641.635-.994 1.008-7.255-3.84-12.369-9.622-19.891-18.657a.268.268 0 0 0-.455.072c-4.515 11.391.112 21.911 12.7 28.921l-6.129 3.782c-1.589.981-2.1 1.315-2.22 1.8-.329 1.316 1.338 3.237 2.866 4.483.14.114.287.227.436.34l.095.071c.146.108.3.214.448.316l.1.065c.147.1.3.193.447.283l.05.031c.159.095.32.183.48.267l.115.06c.159.081.317.156.474.223l.092.037c.15.062.3.117.443.164l.058.02a4.181 4.181 0 0 0 .457.114l.094.017a2.791 2.791 0 0 0 .429.041h.068a1.959 1.959 0 0 0 .281-.026l.089-.017a1.441 1.441 0 0 0 .309-.1c.454-.218.678-.783 1.318-2.538l2.469-6.761c5.9 6.845 12.517 10.345 19.161 10.344a21.244 21.244 0 0 0 11.725-3.74.268.268 0 0 0-.019-.459zm-46.5-37.116C14.4 20.7 19.5 26.407 26.7 30.243L19.838 39.8C12.484 35.745 1.356 26.839 7.024 11.856zM19.687 49.4c-.519 1.422-.78 2.111-1.047 2.239-.795.382-2.6-.372-4.394-1.834s-2.9-3.083-2.685-3.938c.072-.287.694-.682 1.982-1.477l6.515-4.022a.261.261 0 0 0 .077-.071l7.152-9.965a14.489 14.489 0 0 1 3.808-3.192c.183-.094.347-.169.5-.234.053-.023.1-.039.149-.058.093-.036.183-.071.264-.1.05-.016.1-.029.141-.042.069-.019.135-.036.2-.048.039-.008.078-.016.114-.021.057-.008.108-.012.156-.015h.136a.856.856 0 0 1 .1.013l.042.009a.544.544 0 0 1 .075.026l.027.011a.39.39 0 0 1 .071.045c.107.088.233.3.207.812a5.77 5.77 0 0 1-.249 1.28A14.939 14.939 0 0 1 30.7 33.1l-8.329 9.027a.273.273 0 0 0-.055.09zm3.236-7.094l7.977-8.641c5.2 6.279 11.82 10.123 21.97 15.564-13.532 8.571-24.498-.529-29.947-6.918z"
                                data-name="Path 2150"
                                transform="translate(-5 -11.068)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span> {{ $t("edit_house.birds_sight") }} </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col" v-if="estate_info.project_id == '0'">
                  <!-- IF Logined -->
                  <div
                    v-if="ExistStorage() === true"
                    @click="change_layout('map')"
                    v-bind:class="{ active: boxes.map === true }"
                    class="big_image_button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="75"
                      viewBox="0 0 89.224 89.22"
                    >
                      <g
                        id="prefix__location"
                        transform="translate(-4.556 -4.559)"
                      >
                        <path
                          id="prefix__Path_911"
                          d="M71.4 33.334a11.09 11.09 0 1 0-11.09 11.091A11.09 11.09 0 0 0 71.4 33.334zm-19.553 0a8.463 8.463 0 1 1 8.466 8.466 8.463 8.463 0 0 1-8.464-8.465z"
                          class="prefix__cls-1"
                          data-name="Path 911"
                          transform="translate(-11.145 -4.413)"
                        />
                        <path
                          id="prefix__Path_912"
                          d="M93.693 92L82.986 63.93a1.314 1.314 0 0 0-1.227-.845H61.5l.371-.6c7.8-12.908 11.72-24.2 11.664-33.557a24.364 24.364 0 1 0-48.728 0c-.056 9.361 3.867 20.654 11.664 33.561l.371.6H16.575a1.314 1.314 0 0 0-1.227.845L4.643 92a1.312 1.312 0 0 0 1.227 1.78h86.6A1.312 1.312 0 0 0 93.693 92zM27.431 28.921a21.737 21.737 0 0 1 43.474 0c.113 18.659-17.329 41.668-21.737 47.186C44.76 70.6 27.317 47.593 27.431 28.921zm20.736 50.117a1.313 1.313 0 0 0 2 0A139.378 139.378 0 0 0 59.85 65.71h21l1.681 4.409L41.49 84.717 26.86 65.708h11.625a139.381 139.381 0 0 0 9.683 13.33zm-6.724 8.48h.008l24.486-8.706 9.5 12.34h-44.2zm-23.962-21.81h6.064l15.341 19.934-15.492 5.51H7.776zm61.272 25.445l-10.214-13.27 14.935-5.311 7.087 18.581z"
                          class="prefix__cls-1"
                          data-name="Path 912"
                        />
                      </g>
                    </svg>

                    <span>{{ $t("edit_house.view_on_map") }}</span>
                  </div>

                  <!-- IF Not Logined -->
                  <div v-if="ExistStorage() === false" class="big_image_button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="75"
                      viewBox="0 0 89.224 89.22"
                    >
                      <g
                        id="prefix__location"
                        transform="translate(-4.556 -4.559)"
                      >
                        <path
                          id="prefix__Path_911"
                          d="M71.4 33.334a11.09 11.09 0 1 0-11.09 11.091A11.09 11.09 0 0 0 71.4 33.334zm-19.553 0a8.463 8.463 0 1 1 8.466 8.466 8.463 8.463 0 0 1-8.464-8.465z"
                          class="prefix__cls-1"
                          data-name="Path 911"
                          transform="translate(-11.145 -4.413)"
                        />
                        <path
                          id="prefix__Path_912"
                          d="M93.693 92L82.986 63.93a1.314 1.314 0 0 0-1.227-.845H61.5l.371-.6c7.8-12.908 11.72-24.2 11.664-33.557a24.364 24.364 0 1 0-48.728 0c-.056 9.361 3.867 20.654 11.664 33.561l.371.6H16.575a1.314 1.314 0 0 0-1.227.845L4.643 92a1.312 1.312 0 0 0 1.227 1.78h86.6A1.312 1.312 0 0 0 93.693 92zM27.431 28.921a21.737 21.737 0 0 1 43.474 0c.113 18.659-17.329 41.668-21.737 47.186C44.76 70.6 27.317 47.593 27.431 28.921zm20.736 50.117a1.313 1.313 0 0 0 2 0A139.378 139.378 0 0 0 59.85 65.71h21l1.681 4.409L41.49 84.717 26.86 65.708h11.625a139.381 139.381 0 0 0 9.683 13.33zm-6.724 8.48h.008l24.486-8.706 9.5 12.34h-44.2zm-23.962-21.81h6.064l15.341 19.934-15.492 5.51H7.776zm61.272 25.445l-10.214-13.27 14.935-5.311 7.087 18.581z"
                          class="prefix__cls-1"
                          data-name="Path 912"
                        />
                      </g>
                    </svg>

                    <span>{{ $t("edit_house.view_on_map") }}</span>
                  </div>
                </div>

                <div class="col">
                  <div
                    @click="change_layout('panorama')"
                    v-bind:class="{ active: boxes.panorama === true }"
                    class="big_image_button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="prefix___3d"
                      width="75"
                      height="75"
                      data-name="3d"
                      viewBox="0 0 15.72 15.496"
                    >
                      <path
                        id="prefix__Path_621"
                        d="M75.081 260.7a.231.231 0 0 0 .231-.231v-1.594a.231.231 0 1 0-.462 0v1.594a.231.231 0 0 0 .231.231z"
                        class="prefix__cls-1"
                        data-name="Path 621"
                        transform="translate(-72.542 -250.778)"
                      />
                      <path
                        id="prefix__Path_622"
                        d="M75.081 170.662a.231.231 0 0 0 .231-.231v-.64l.548-.331a.231.231 0 1 0-.239-.4l-.66.4a.231.231 0 0 0-.112.2v.771a.231.231 0 0 0 .232.231z"
                        class="prefix__cls-1"
                        data-name="Path 622"
                        transform="translate(-72.542 -163.931)"
                      />
                      <path
                        id="prefix__Path_623"
                        d="M139.771 118.04a.23.23 0 0 0 .119-.033l1.335-.806a.231.231 0 1 0-.239-.4l-1.335.806a.231.231 0 0 0 .12.429z"
                        class="prefix__cls-1"
                        data-name="Path 623"
                        transform="translate(-135.238 -113.284)"
                      />
                      <path
                        id="prefix__Path_624"
                        d="M311.915 117.256l1.324.805a.231.231 0 0 0 .24-.4l-1.324-.805a.231.231 0 1 0-.24.4z"
                        class="prefix__cls-1"
                        data-name="Path 624"
                        transform="translate(-302.191 -113.337)"
                      />
                      <path
                        id="prefix__Path_625"
                        d="M397.77 169.482l.547.333v.641a.231.231 0 1 0 .462 0v-.771a.231.231 0 0 0-.111-.2l-.658-.4a.231.231 0 1 0-.24.4z"
                        class="prefix__cls-1"
                        data-name="Path 625"
                        transform="translate(-385.399 -163.953)"
                      />
                      <path
                        id="prefix__Path_626"
                        d="M419.25 258.67a.231.231 0 0 0-.231.231v1.592a.231.231 0 1 0 .462 0V258.9a.231.231 0 0 0-.231-.23z"
                        class="prefix__cls-1"
                        data-name="Path 626"
                        transform="translate(-406.1 -250.807)"
                      />
                      <path
                        id="prefix__Path_627"
                        d="M313.238 426.057l-1.324.805a.231.231 0 0 0 .24.4l1.323-.805a.231.231 0 1 0-.24-.4z"
                        class="prefix__cls-1"
                        data-name="Path 627"
                        transform="translate(-302.19 -413.001)"
                      />
                      <path
                        id="prefix__Path_628"
                        d="M227.542 478.281l-.539.328-.54-.326a.231.231 0 0 0-.239.4l.66.4a.232.232 0 0 0 .24 0l.659-.4a.231.231 0 1 0-.24-.4z"
                        class="prefix__cls-1"
                        data-name="Path 628"
                        transform="translate(-219.141 -463.615)"
                      />
                      <path
                        id="prefix__Path_629"
                        d="M141.224 426.9l-1.335-.806a.231.231 0 1 0-.239.4l1.335.806a.231.231 0 0 0 .239-.4z"
                        class="prefix__cls-1"
                        data-name="Path 629"
                        transform="translate(-135.237 -413.037)"
                      />
                      <path
                        id="prefix__Path_630"
                        d="M247.666 180.59a.231.231 0 0 0 .231-.231v-.178a.231.231 0 0 0-.462 0v.178a.231.231 0 0 0 .231.231z"
                        class="prefix__cls-1"
                        data-name="Path 630"
                        transform="translate(-239.806 -174.514)"
                      />
                      <path
                        id="prefix__Path_631"
                        d="M247.666 223.6a.231.231 0 0 0 .231-.231v-.178a.231.231 0 1 0-.462 0v.178a.231.231 0 0 0 .231.231z"
                        class="prefix__cls-1"
                        data-name="Path 631"
                        transform="translate(-239.806 -216.196)"
                      />
                      <path
                        id="prefix__Path_632"
                        d="M14.752 15.746a.964.964 0 0 0-.644.246l-.727-.415v-.671a.231.231 0 0 0-.462 0v.407l-.833-.476v-4.616a.461.461 0 0 0-.22-.392L8.1 7.532h-.007v-.979l.31.188a.231.231 0 0 0 .24-.4l-.55-.335v-.471a.968.968 0 1 0-.462 0v.48l-.546.329a.231.231 0 1 0 .239.4l.307-.185v.973h-.006l-3.8 2.293a.461.461 0 0 0-.222.393v1.422a.231.231 0 1 0 .462 0V10.5l3.564 2.151v4.32l-3.518-2.126-.011-.011a.232.232 0 0 0-.04-.051v-2.158a.231.231 0 1 0-.462 0v2.233l-.834.476v-.421a.231.231 0 0 0-.462 0v.686l-.7.4a.966.966 0 1 0 .262.383l.7-.4.5.3a.231.231 0 0 0 .239-.4l-.281-.17.827-.473 3.758 2.268a.462.462 0 0 0 .073.035.231.231 0 0 0 .33 0 .459.459 0 0 0 .09-.042l1.486-.9a.231.231 0 0 0-.24-.4l-1.255.763v-4.315l3.533-2.148v4.319l-1.427.868a.231.231 0 1 0 .24.4l1.4-.853.826.472-.294.179a.231.231 0 1 0 .24.4l.513-.312.721.412a.968.968 0 1 0 .906-.629zM.968 17.219a.505.505 0 1 1 .505-.505.506.506 0 0 1-.505.505zM7.355 4.6a.505.505 0 1 1 .505.5.506.506 0 0 1-.505-.5zm.274 3.472v.243a.231.231 0 1 0 .462 0v-.246l3.319 2.019-3.319 2.019v-.271a.231.231 0 1 0-.462 0v.272l-3.348-2.02zm7.123 9.151a.505.505 0 1 1 .505-.505.506.506 0 0 1-.505.501z"
                        class="prefix__cls-1"
                        data-name="Path 632"
                        transform="translate(0 -3.628)"
                      />
                    </svg>
                    <span>{{ $t("edit_house._360tour") }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Prices-->
          <div class="row mt-4">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div class="row" style="padding: 15px; direction: rtl">
                  <div class="col-5 text-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.748"
                      height="19.385"
                      style="margin-top: -6px"
                      viewBox="0 0 16.748 19.385"
                    >
                      <path
                        id="prefix__Bag_of_money"
                        fill="#8b8b8b"
                        fill-rule="evenodd"
                        d="M267.362 2401.809a.773.773 0 0 1-.549-1.322.793.793 0 0 1 1.1 0 .764.764 0 0 1 .227.546.661.661 0 1 0 1.321 0 2.078 2.078 0 0 0-1.637-2.039l-.022-.41a.661.661 0 0 0-1.321 0v.555a2.055 2.055 0 0 0-.6.41 2.1 2.1 0 0 0 1.485 3.581.936.936 0 0 1 .661 1.6.962.962 0 0 1-.445.242h-.417a.922.922 0 0 1-.732-1 .661.661 0 0 0-.592-.722.653.653 0 0 0-.724.59 2.241 2.241 0 0 0 1.373 2.3.658.658 0 0 0 1.28.141 2.256 2.256 0 0 0-.4-4.475zm8.369 4.048c-.176-1.978-1.111-8.135-4.936-10.522 0-.009.008-.018.011-.027l1.321-3.524a1.322 1.322 0 0 0-1.239-1.784h-7.056a1.322 1.322 0 0 0-1.239 1.784l1.321 3.524c0 .009.008.018.011.027-3.826 2.387-4.761 8.545-4.936 10.522a3.887 3.887 0 0 0 .881 2.643 2.971 2.971 0 0 0 2.273.881h10.43a2.972 2.972 0 0 0 2.273-.881 3.888 3.888 0 0 0 .885-2.643zm-11.9-14.535h7.057l-1.321 3.524h-4.413zm8.743 16.738h-10.43a1.708 1.708 0 0 1-1.832-1.762c.326-3.669 1.734-8.7 4.843-10.131h4.41c3.108 1.427 4.517 6.462 4.843 10.131a1.709 1.709 0 0 1-1.831 1.762z"
                        data-name="Bag of money"
                        transform="translate(-258.987 -2390)"
                      />
                    </svg>
                    <span
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                      style="font-size: 18px"
                    >
                      {{ $t("edit_house.price") }}
                    </span>
                  </div>
                  <div class="col text-left">
                    <div class="register_date_span text-center m-auto">
                      {{ $t("edit_house.estate_code") }} :
                      {{ estate_info.id }}
                    </div>
                  </div>
                </div>

                <div class="row" style="padding: 0px 15px 0 15px">
                  <div class="col text-right">
                    <p
                      class="text_p"
                      v-bind:class="[
                        {
                          Estedad_FD_Light:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Light:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.estate_price_desc") }}
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <ul
                      class="list-group list-group-flush"
                      style="padding-right: 0"
                    >
                      <li
                        style="background: none"
                        class="list-group-item"
                        v-for="option in estate_info.prices"
                        v-if="option.price_value != null"
                      >
                        {{ option.price_type }} :
                        {{ option.price_value | numeral("0,0") }}
                        {{ option.unit_title }}
                      </li>

                      <li
                        style="background: none"
                        class="list-group-item"
                        v-for="option in estate_info.prices"
                        v-if="option.price_value == null"
                      >
                        {{ $t("edit_house.agreed_price") }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  v-if="!viewer.is_dated"
                  class="row"
                  style="margin: auto; margin-top: 20px"
                >
                  <div class="col text-right">
                    <button
                      type="button"
                      class="btn btn-success col Yes_btn"
                      data-toggle="modal"
                      data-target="#reserve_modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="26"
                        style="margin-top: -3px; margin-left: 5px"
                        viewBox="0 0 31.306 31.306"
                      >
                        <g id="prefix__Calendar" transform="translate(.2 .2)">
                          <path
                            id="prefix__Path_913"
                            d="M30.331 5.091h-2.576V4.06a2.06 2.06 0 1 0-4.121 0v1.03h-4.12V4.06a2.06 2.06 0 1 0-4.121 0v1.03h-4.121V4.06a2.06 2.06 0 1 0-4.121 0v1.03H4.576A2.576 2.576 0 0 0 2 7.666v20.6a2.576 2.576 0 0 0 2.576 2.576H19a.515.515 0 0 0 0-1.03H4.576A1.55 1.55 0 0 1 3.03 28.27V12.3h28.846v8.757a.515.515 0 0 0 1.03 0V7.666A2.576 2.576 0 0 0 30.33 5.09zM24.665 4.06a1.03 1.03 0 1 1 2.06 0v3.091a1.03 1.03 0 1 1-2.06 0zm-8.242 0a1.03 1.03 0 1 1 2.06 0v3.091a1.03 1.03 0 1 1-2.06 0zm-8.242 0a1.03 1.03 0 0 1 2.06 0v3.091a1.03 1.03 0 1 1-2.06 0zm23.695 7.211H3.03V7.666a1.55 1.55 0 0 1 1.546-1.545h2.575v1.03a2.06 2.06 0 1 0 4.121 0v-1.03h4.121v1.03a2.06 2.06 0 1 0 4.121 0v-1.03h4.121v1.03a2.06 2.06 0 1 0 4.121 0v-1.03h2.576a1.55 1.55 0 0 1 1.545 1.545z"
                            class="prefix__cls-2"
                            data-name="Path 913"
                            transform="translate(-2 -2)"
                          />
                          <path
                            id="prefix__Path_914"
                            d="M26.121 28.03a1.03 1.03 0 0 0-1.03-1.03H23.03A1.03 1.03 0 0 0 22 28.03v1.545a1.03 1.03 0 0 0 1.03 1.03h2.06a1.03 1.03 0 0 0 1.03-1.03zm-3.091 1.546V28.03h2.06v1.545z"
                            class="prefix__cls-2"
                            data-name="Path 914"
                            transform="translate(-11.698 -14.122)"
                          />
                          <path
                            id="prefix__Path_915"
                            d="M14.121 28.03a1.03 1.03 0 0 0-1.03-1.03H11.03A1.03 1.03 0 0 0 10 28.03v1.545a1.03 1.03 0 0 0 1.03 1.03h2.06a1.03 1.03 0 0 0 1.03-1.03zm-3.091 1.546V28.03h2.06v1.545z"
                            class="prefix__cls-2"
                            data-name="Path 915"
                            transform="translate(-5.879 -14.122)"
                          />
                          <path
                            id="prefix__Path_916"
                            d="M49.091 30.606a1.03 1.03 0 0 0 1.03-1.03V28.03a1.03 1.03 0 0 0-1.03-1.03H47.03A1.03 1.03 0 0 0 46 28.03v1.545a1.03 1.03 0 0 0 1.03 1.03zM47.03 28.03h2.06v1.545h-2.06z"
                            class="prefix__cls-2"
                            data-name="Path 916"
                            transform="translate(-23.335 -14.122)"
                          />
                          <path
                            id="prefix__Path_917"
                            d="M26.121 37.03a1.03 1.03 0 0 0-1.03-1.03H23.03A1.03 1.03 0 0 0 22 37.03v1.545a1.03 1.03 0 0 0 1.03 1.03h2.06a1.03 1.03 0 0 0 1.03-1.03zm-3.091 1.546V37.03h2.06v1.545z"
                            class="prefix__cls-2"
                            data-name="Path 917"
                            transform="translate(-11.698 -18.486)"
                          />
                          <path
                            id="prefix__Path_918"
                            d="M14.121 37.03a1.03 1.03 0 0 0-1.03-1.03H11.03A1.03 1.03 0 0 0 10 37.03v1.545a1.03 1.03 0 0 0 1.03 1.03h2.06a1.03 1.03 0 0 0 1.03-1.03zm-3.091 1.546V37.03h2.06v1.545z"
                            class="prefix__cls-2"
                            data-name="Path 918"
                            transform="translate(-5.879 -18.486)"
                          />
                          <path
                            id="prefix__Path_919"
                            d="M25.091 45H23.03A1.03 1.03 0 0 0 22 46.03v1.545a1.03 1.03 0 0 0 1.03 1.03h2.06a1.03 1.03 0 0 0 1.03-1.03V46.03A1.03 1.03 0 0 0 25.091 45zm-2.06 2.576V46.03h2.06v1.545z"
                            class="prefix__cls-2"
                            data-name="Path 919"
                            transform="translate(-11.698 -22.85)"
                          />
                          <path
                            id="prefix__Path_920"
                            d="M35.03 30.606h2.06a1.03 1.03 0 0 0 1.03-1.03V28.03A1.03 1.03 0 0 0 37.091 27H35.03A1.03 1.03 0 0 0 34 28.03v1.545a1.03 1.03 0 0 0 1.03 1.031zm0-2.576h2.06v1.545h-2.06z"
                            class="prefix__cls-2"
                            data-name="Path 920"
                            transform="translate(-17.517 -14.122)"
                          />
                          <path
                            id="prefix__Path_921"
                            d="M34 38.576a1.03 1.03 0 0 0 1.03 1.03.515.515 0 1 0 0-1.03V37.03h2.06a.515.515 0 0 0 0-1.03h-2.06A1.03 1.03 0 0 0 34 37.03z"
                            class="prefix__cls-2"
                            data-name="Path 921"
                            transform="translate(-17.517 -18.486)"
                          />
                          <path
                            id="prefix__Path_922"
                            d="M13.091 45H11.03A1.03 1.03 0 0 0 10 46.03v1.545a1.03 1.03 0 0 0 1.03 1.03h2.06a1.03 1.03 0 0 0 1.03-1.03V46.03A1.03 1.03 0 0 0 13.091 45zm-2.06 2.576V46.03h2.06v1.545z"
                            class="prefix__cls-2"
                            data-name="Path 922"
                            transform="translate(-5.879 -22.85)"
                          />
                          <path
                            id="prefix__Path_923"
                            d="M42.7 36a6.7 6.7 0 1 0 6.7 6.7 6.7 6.7 0 0 0-6.7-6.7zm0 12.363a5.666 5.666 0 1 1 5.663-5.663 5.666 5.666 0 0 1-5.663 5.663z"
                            class="prefix__cls-2"
                            data-name="Path 923"
                            transform="translate(-18.486 -18.486)"
                          />
                          <path
                            id="prefix__Path_924"
                            d="M48.465 44.666l-4.006 4.006-1.821-1.821a.515.515 0 1 0-.728.728l2.185 2.186a.515.515 0 0 0 .728 0l4.371-4.371a.515.515 0 1 0-.728-.728z"
                            class="prefix__cls-2"
                            data-name="Path 924"
                            transform="translate(-21.278 -22.615)"
                          />
                        </g>
                      </svg>

                      {{ $t("edit_house.visit_btn_1") }}
                    </button>
                  </div>
                </div>

                <div
                  v-if="viewer.is_dated"
                  class="row"
                  style="margin: auto; margin-top: 20px"
                >
                  <div class="col text-right">
                    <button
                      type="button"
                      disabled
                      class="btn btn-success col Yes_btn"
                      data-toggle="modal"
                      data-target="#reserve_modal"
                    >
                      {{ $t("edit_house.visit_btn_2") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Project-->
          <div class="row mt-4" v-if="estate_info.project_id != '0'">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div class="row" style="padding: 15px">
                  <div class="col text-right">
                    <span
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                      style="font-size: 18px"
                    >
                      {{ $t("edit_house.project") }}
                    </span>
                  </div>
                </div>

                <div class="row" style="padding: 0px 15px 0 15px">
                  <div class="col text-center">
                    <p
                      class="text_p text-center"
                      v-bind:class="[
                        {
                          Estedad_FD_Light:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Light:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.project_title_1") }}
                    </p>
                    <p
                      class="text_p text-center"
                      v-bind:class="[
                        {
                          Estedad_FD_Light:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Light:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                    >
                      {{ $t("edit_house.project_title_2") }}
                    </p>
                  </div>
                </div>

                <div class="row" style="margin: auto; margin-top: 20px">
                  <div class="col text-right">
                    <button
                      type="button"
                      class="btn btn-success col Yes_btn"
                      @click="gotoproject(estate_info.project_id)"
                    >
                      {{ $t("edit_house.project_show_btn") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Agent-->
          <div class="row mt-4" v-if="estate_info.address.length > 0">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div class="row" style="padding: 15px">
                  <div class="col-7 text-right">
                    <span
                      v-bind:class="[
                        {
                          Estedad_FD:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                      style="font-size: 12px"
                    >
                      {{ $t("edit_house.contact_to_consultants") }}
                    </span>
                  </div>
                  <div class="col text-left">
                    <div class="register_date_span text-center m-auto">
                      {{ $t("edit_house.estate_code") }} : {{ estate_info.id }}
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4 text-right">
                    <a
                      @click="socialClick('whatsapp')"
                      :href="
                        'https://wa.me/' +
                        estate_info.address[0].area_code_mobile +
                        estate_info.address[0].mobile +
                        '?text=' +
                        estate_info.title +
                        ' | ' +
                        'https://www.evara.life' +
                        this.$router.currentRoute.fullPath
                      "
                      class="btn btn-success col Yes_btn_border_whatsapp"
                      style="padding-top: 9px; height: 80px"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="margin-bottom: 8px"
                        width="28"
                        height="28"
                        viewBox="0 0 30.243 30.381"
                      >
                        <path
                          d="M29.837,8.415a15.06,15.06,0,0,0-23.7,18.164L4,34.381l7.984-2.1a15.069,15.069,0,0,0,7.2,1.836h0a15.061,15.061,0,0,0,10.652-25.7ZM19.186,31.575h0a12.514,12.514,0,0,1-6.37-1.742l-.458-.271L7.613,30.8l1.265-4.617-.3-.473a12.515,12.515,0,1,1,10.6,5.862ZM26.047,22.2c-.374-.187-2.225-1.1-2.57-1.221s-.6-.187-.847.187-.97,1.226-1.191,1.477-.438.281-.812.094A10.179,10.179,0,0,1,17.6,20.869a11.262,11.262,0,0,1-2.092-2.6c-.222-.379-.025-.581.162-.768.172-.167.379-.438.566-.66a2.614,2.614,0,0,0,.379-.625.7.7,0,0,0-.034-.66c-.094-.187-.847-2.043-1.162-2.8-.305-.733-.615-.63-.847-.645s-.468-.01-.719-.01a1.377,1.377,0,0,0-1,.473,4.209,4.209,0,0,0-1.314,3.136A7.339,7.339,0,0,0,13.072,19.6c.187.246,2.653,4.046,6.429,5.675a20.871,20.871,0,0,0,2.141.792,5.232,5.232,0,0,0,2.373.153,3.874,3.874,0,0,0,2.54-1.792,3.162,3.162,0,0,0,.217-1.787C26.677,22.488,26.426,22.395,26.047,22.2Z"
                          transform="translate(-4 -4)"
                          fill="#fff"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <br />
                      <span
                        style="font-size: 10px"
                        v-bind:class="[
                          {
                            Estedad_FD:
                              $i18n.locale == 'fa' || $i18n.locale == 'ar',
                          },
                          {
                            Estedad:
                              $i18n.locale == 'en' ||
                              $i18n.locale == 'ru' ||
                              $i18n.locale == 'tr',
                          },
                        ]"
                      >
                        {{ $t("edit_house.send_message") }}
                      </span>
                    </a>
                  </div>
                  <div class="col-4 text-right">
                    <a
                      @click="socialClick('telegram')"
                      href="'https://www.t.me/evaralife'"
                      class="btn btn-success col Blue_btn_border"
                      style="padding-top: 9px; height: 80px"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="margin-bottom: 8px"
                        width="28"
                        height="26"
                        viewBox="0 0 25.994 23.348"
                      >
                        <path
                          d="M26.07,4a2.975,2.975,0,0,0-.934.223h0c-.285.113-1.641.684-3.7,1.547L14.051,8.875c-5.3,2.231-10.5,4.426-10.5,4.426l.063-.024a3.207,3.207,0,0,0-.734.375,2.03,2.03,0,0,0-.586.566,1.664,1.664,0,0,0-.277,1.109,2.013,2.013,0,0,0,.895,1.395,2.971,2.971,0,0,0,.664.355h.008l4.883,1.645c.219.7,1.488,4.875,1.793,5.836a3.58,3.58,0,0,0,.574,1.207,1.413,1.413,0,0,0,.379.352,1.12,1.12,0,0,0,.184.086.168.168,0,0,0,.063.02l-.051-.012a.355.355,0,0,1,.039.02.776.776,0,0,0,.117.023,1.654,1.654,0,0,0,1.394-.246l.035-.027,2.883-2.625L20.7,27.063l.109.047a2.566,2.566,0,0,0,2.566-.238,2.615,2.615,0,0,0,.754-1l.035-.09L27.9,6.656a2.749,2.749,0,0,0,.016-1.344,1.807,1.807,0,0,0-.781-1.047A1.872,1.872,0,0,0,26.07,4Zm-.1,2.051a.584.584,0,0,1-.02.176v.012l-3.7,18.93a.426.426,0,0,1-.117.144c-.078.063-.141.1-.465-.027l-5.91-4.531L12.188,24l.75-4.789,9.656-9c.4-.371.266-.449.266-.449.027-.453-.6-.133-.6-.133L10.082,17.176l0-.02L4.242,15.191v0l-.016,0a.269.269,0,0,0,.031-.012l.031-.016.031-.012,10.508-4.426C17.48,9.6,20.152,8.477,22.207,7.609s3.574-1.5,3.66-1.531S25.91,6.047,25.969,6.047Z"
                          transform="translate(-2 -3.994)"
                          fill="#fff"
                        />
                      </svg>
                      <br />
                      <span
                        style="font-size: 10px"
                        v-bind:class="[
                          {
                            Estedad_FD:
                              $i18n.locale == 'fa' || $i18n.locale == 'ar',
                          },
                          {
                            Estedad:
                              $i18n.locale == 'en' ||
                              $i18n.locale == 'ru' ||
                              $i18n.locale == 'tr',
                          },
                        ]"
                      >
                        {{ $t("edit_house.telegram_send_message") }}
                      </span>
                    </a>
                  </div>
                  <div class="col-4 text-right">
                    <a
                      @click="socialClick('call')"
                      :href="
                        'tel:' +
                        estate_info.address[0].area_code_mobile +
                        estate_info.address[0].mobile
                      "
                      class="btn btn-success col btn_gray_directly"
                      target="_blank"
                      style="direction: rtl; height: 80px; padding-top: 9px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="margin-bottom: 8px"
                        width="28"
                        height="28"
                        viewBox="0 0 32.067 36.73"
                      >
                        <path
                          id="prefix__icons8_online_support_1"
                          fill="#fff"
                          stroke="#fff"
                          stroke-width="0.5px"
                          d="M26.97 8c-8.222 0-15.064 8.123-15.064 8.123l-.436.509.575.345a6.135 6.135 0 0 1 2.555 5.411V27a2.257 2.257 0 0 0-1.132 1.949 7.506 7.506 0 0 0 .363 1.739 7.084 7.084 0 0 1 .2.808 1.984 1.984 0 0 0 1.981 1.981h.349a11.249 11.249 0 0 0 9.1 9.975 3.359 3.359 0 0 0 4.305 0 11.244 11.244 0 0 0 6.9-4.314h.574a3.971 3.971 0 0 0 3.963-3.963v-1.781a2.262 2.262 0 0 0 1.7-2.184v-2.83a2.263 2.263 0 0 0-2.185-2.257 55.927 55.927 0 0 0 .486-6.385c0-3.052-.921-5.047-2.269-6.235a6.532 6.532 0 0 0-4.185-1.493A8.663 8.663 0 0 0 26.97 8zm0 1.132c5.259 0 6.935 3.643 6.935 3.643l.155.32h.355a5.64 5.64 0 0 1 3.776 1.257c1.074.947 1.885 2.556 1.885 5.386a55.577 55.577 0 0 1-.5 6.377h-.636v-1.7a8.338 8.338 0 0 0-4.9-7.89l-.336-.124-.257.248c-.028.027-2.841 2.671-8.664 2.671a10.313 10.313 0 0 0-5.302 1.58 6.632 6.632 0 0 0-3.181 5.781v.182a1.146 1.146 0 0 0-.566-.182v-4.293a7.728 7.728 0 0 0-2.561-5.946c1.027-1.117 6.984-7.31 13.797-7.31zm6.974 8.591a7.212 7.212 0 0 1 3.867 6.694v7.925l-.029.536a10.212 10.212 0 0 1-1.042 3.993h1.249a11.34 11.34 0 0 0 .882-3.4h1.2v1.7A2.822 2.822 0 0 1 37.245 38h-7.466a1.7 1.7 0 0 0-1.592-1.132h-1.132a1.7 1.7 0 1 0 0 3.4h1.132a1.7 1.7 0 0 0 1.592-1.132h5.429a10.121 10.121 0 0 1-5.788 3.229l-.16.029-.122.109a2.284 2.284 0 0 1-3.034 0l-.121-.109-.16-.029a10.126 10.126 0 0 1-8.367-9.485l-.029-.536h-1.411a.85.85 0 0 1-.849-.849 4.862 4.862 0 0 0-.248-1.118 7.393 7.393 0 0 1-.318-1.43 1.134 1.134 0 0 1 1.066-1.13 8.415 8.415 0 0 1 .9.512l.864.534v-2.18c0-5.083 5.45-6.227 7.359-6.227 5.274-.002 8.245-2.001 9.154-2.733zm5 9.524h1.7a1.133 1.133 0 0 1 1.132 1.132v2.83a1.133 1.133 0 0 1-1.132 1.132h-1.7zm-16.417.566a1.132 1.132 0 1 0 1.132 1.132 1.132 1.132 0 0 0-1.133-1.132zm10.19 0a1.132 1.132 0 1 0 1.132 1.132 1.132 1.132 0 0 0-1.133-1.132zM27.055 38h1.132a.566.566 0 0 1 0 1.132h-1.132a.566.566 0 1 1 0-1.132z"
                          transform="translate(-11.088 -7.75)"
                        />
                      </svg>
                      <br />
                      <span
                        style="font-size: 10px"
                        v-bind:class="[
                          {
                            Estedad_FD:
                              $i18n.locale == 'fa' || $i18n.locale == 'ar',
                          },
                          {
                            Estedad:
                              $i18n.locale == 'en' ||
                              $i18n.locale == 'ru' ||
                              $i18n.locale == 'tr',
                          },
                        ]"
                      >
                        {{ $t("edit_house.call_agent") }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Suggestions-->
          <div class="row mt-4">
            <div class="col">
              <div class="card custom_card" style="padding: 15px">
                <div class="row" style="padding: 15px">
                  <div
                    class="col"
                    v-bind:class="[
                      {
                        'text-right':
                          $i18n.locale == 'fa' || $i18n.locale == 'ar',
                      },
                      {
                        'text-left':
                          $i18n.locale == 'en' ||
                          $i18n.locale == 'ru' ||
                          $i18n.locale == 'tr',
                      },
                    ]"
                  >
                    <span
                      class=""
                      v-bind:class="[
                        {
                          Estedad_FD_Bold:
                            $i18n.locale == 'fa' || $i18n.locale == 'ar',
                        },
                        {
                          Estedad_Bold:
                            $i18n.locale == 'en' ||
                            $i18n.locale == 'ru' ||
                            $i18n.locale == 'tr',
                        },
                      ]"
                      style="font-size: 18px"
                    >
                      {{ $t("edit_house.other_estate") }}
                    </span>
                  </div>
                </div>

                <div class="row" style="margin-top: 20px">
                  <div class="col text-center">
                    <HouseCard-suggest
                      v-for="item in lst_similar_estate.slice(0, 6)"
                      :key="item.id"
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
                      radius="right"
                      :bathroom="item.bathroom"
                      :use_status="item.use_status"
                      :age_biulding="item.age_biulding"
                      :urlHelper="item.urlHelper"
                    ></HouseCard-suggest>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Reserve Modal -->
      <div
        class="modal fade"
        style="direction: rtl"
        id="reserve_modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ $t("edit_house.visit_btn_1") }}</h5>
            </div>
            <div class="modal-body text-right" style="padding: 15px 30px">
              <p v-if="ExistStorage() === true">
                {{ profile.fullname }} {{ $t("edit_house.dear") }}
              </p>
              <p v-if="ExistStorage() === false">
                {{ $t("edit_house.dear_visitor") }}
              </p>
              <p>{{ $t("edit_house.visit_desc_1") }}</p>
              <p>{{ $t("edit_house.visit_desc_2") }}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                style="padding: 6px 50px"
                @click="make_date_for_view"
              >
                {{ $t("edit_house.save") }}
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                {{ $t("edit_house.close") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import https from "https";
export default {
  async asyncData({ $axios, params, $storage, i18n }) {
    var project_id = params.project.split(".")[0];
    var _i18n = i18n.loadedLanguages[0];
    const instance = $axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    instance.get("https://evara.life");

    // At request level
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    // const meta_estate = await $axios.$get('/estate_meta?currency=2&lang=fa&id='+project_id)
    const meta_estate = await $axios.$get(
      "/estate_meta?currency=" +
        $storage.getUniversal("currency") +
        "&lang=" +
        _i18n +
        "&id=" +
        project_id,
      { httpsAgent: agent }
    );
    return { meta_estate };
  },
  data() {
    return {
      multiValue: null,
      profile: {
        fullname:
          this.$storage.getUniversal("name") +
          " " +
          this.$storage.getUniversal("family"),
      },
      estate_query_id: 0,
      estate_info: null,
      price: 0,
      coolLightBox_index: null,
      toggler: false,
      slide: 1,
      iframe: "<h2></h2>",
      lst_similar_estate: [],
      images_fullscreen: [],
      map: {
        url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a href="https://evara.life">Evara</a> contributors',
        zoom: 16,
        center: [39.932155, 32.828176],
        marker: { lat: 32.653812, lng: 51.676211 },
      },
      boxes: {
        slider: true,
        map: false,
        _360: false,
        panorama: false,
      },
      viewer: {
        is_saved: false,
        is_liked: false,
        is_dated: false,
        is_transfer: false,
        is_visit: false,
      },
      properties: {
        prt_bath: null,
        prt_parking: null,
        prt_sell_or_buy: null,
        prt_history: null,
        prt_floors: null,
      },
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      meta: {
        title: "",
        desc: "",
        img: "",
      },
      chart_record: [],
    };
  },
  methods: {
    gotopage(page) {
      this.$router.push(this.localePath({ path: page }));
    },
    gotoproject(project_id) {
      this.$router.push(
        this.localePath({
          path: "detail_project",
          query: { project_id: project_id },
        })
      );
    },
    DestroyStorage() {
      this.$storage.removeUniversal("user_id");
      this.$storage.removeUniversal("token");
      this.$storage.removeUniversal("name");
      this.$storage.removeUniversal("family");
      this.$storage.removeUniversal("email");
      this.$storage.removeUniversal("mobile");
      this.$storage.removeUniversal("username");
    },
    ExistStorage() {
      if (this.$storage.getUniversal("token")) return true;
      else return false;
    },
    visit_increase() {
      this.$axios
        .$post("add_number_of_visits", {
          token: this.$storage.getUniversal("token"),
          currency: this.$storage.getUniversal("currency"),
          language: this.$i18n.locale,
          estate_id: this.estate_query_id,
        })
        .then((response) => {
          if (response[0].res === -5) {
            this.DestroyStorage();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    like_estate() {
      if (this.ExistStorage()) {
        this.$axios
          .$post("estate_like", {
            token: this.$storage.getUniversal("token"),
            currency: this.$storage.getUniversal("currency"),
            language: this.$i18n.locale,
            estate_id: this.estate_query_id,
          })
          .then((response) => {
            if (response[0].res === -5) {
              this.DestroyStorage();
            } else if (response[0].res === 1) {
              if (response[0].status == 1) {
                this.viewer.is_liked = true;
                this.$ga.event({
                  eventCategory: "likeHouse",
                  eventAction: "click",
                  eventLabel: this.estate_info.title,
                  eventValue: this.estate_query_id,
                });
              }
              if (response[0].status == 0) {
                this.viewer.is_liked = true;
                this.$ga.event({
                  eventCategory: "disLikeHouse",
                  eventAction: "click",
                  eventLabel: this.estate_info.title,
                  eventValue: this.estate_query_id,
                });
              }
            } else {
              this.$toast.error(response[0].message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.error(this.$t("detail.error_1"));
      }
    },
    save_estate() {
      if (this.ExistStorage()) {
        this.$axios
          .$post("estate_save", {
            token: this.$storage.getUniversal("token"),
            currency: this.$storage.getUniversal("currency"),
            language: this.$i18n.locale,
            estate_id: this.estate_query_id,
          })
          .then((response) => {
            if (response[0].res === -5) {
              this.DestroyStorage();
            } else if (response[0].res === 1) {
              this.viewer.is_saved = true;
              this.$ga.event({
                eventCategory: "saveEstate",
                eventAction: "click",
                eventLabel: this.estate_info.title,
                eventValue: this.estate_query_id,
              });
            } else {
              this.$toast.error(response[0].msg);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.error(this.$t("detail.error_2"));
      }
    },
    make_date_for_view() {
      if (this.ExistStorage()) {
        this.$axios
          .$post("waiting_to_visit", {
            token: this.$storage.getUniversal("token"),
            currency: this.$storage.getUniversal("currency"),
            language: this.$i18n.locale,
            estate_id: this.estate_query_id,
          })
          .then((response) => {
            if (response[0].res === -5) {
              this.DestroyStorage();
            } else if (response[0].res === 1) {
              this.viewer.is_dated = true;
              this.$ga.event({
                eventCategory: "visitRequest",
                eventAction: "click",
                eventLabel: this.estate_info.title,
                eventValue: this.estate_query_id,
              });
            } else {
              this.$toast.error(response[0].msg);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.error(this.$t("detail.error_3"));
      }
    },
    change_layout(layout) {
      this.boxes.map = false;
      this.boxes.slider = false;
      this.boxes._360 = false;
      this.boxes.panorama = false;

      this.insertUrlParam("show_slider_view", 0);
      this.insertUrlParam("show_birds_view", 0);
      this.insertUrlParam("show_map_view", 0);
      this.insertUrlParam("show_3d_view", 0);

      if (layout === "map") {
        this.boxes.map = true;
        this.insertUrlParam("show_map_view", 1);
      } else if (layout === "360") {
        this.boxes._360 = true;
        this.insertUrlParam("show_birds_view", 1);
        this.check_ip();
      } else if (layout === "slider") {
        this.boxes.slider = true;
        this.insertUrlParam("show_slider_view", 1);
      } else if (layout === "panorama") {
        this.boxes.panorama = true;
        this.insertUrlParam("show_3d_view", 1);
        this.check_ip();
      }
    },
    insertUrlParam(key, value) {
      if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?" +
          searchParams.toString();
        window.history.pushState({ path: newurl }, "", newurl);
      }
    },
    check_ip() {
      this.$axios
        .$get(
          "https://api.ipfind.com/me?auth=94554422-107f-4fe9-9981-fcfccead8c0d",
          {
            token: this.$storage.getUniversal("token"),
            currency: this.$storage.getUniversal("currency"),
            language: this.$i18n.locale,
            estate_id: this.estate_query_id,
          }
        )
        .then((response) => {
          if (!response.error) {
            if (response.data.country_code === "IR") {
              this.$toast.error(this.$t("detail.error_4"));
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetch_detail() {
      this.$axios
        .$post("estate_info", {
          token: this.$storage.getUniversal("token"),
          currency: this.$storage.getUniversal("currency"),
          language: this.$i18n.locale,
          id: this.estate_query_id,
        })
        .then((response) => {
          if (response[0].res === -5) {
            this.DestroyStorage();
          }

          // Estate Information
          this.estate_info = response[0];

          // Estate Locations & Address
          this.map.center = this.estate_info.address[0].location
            .toString()
            .split(",");
          this.map.marker = {
            lat: parseFloat(this.map.center[0]),
            lng: parseFloat(this.map.center[1]),
          };

          // Estate Price
          this.price = this.estate_info.prices[0].price_value;

          // Estate Viewer Info
          if (this.estate_info.like === 1) this.viewer.is_liked = true;
          if (this.estate_info.save === 1) this.viewer.is_saved = true;
          if (this.estate_info.waiting_to_visit === 1)
            this.viewer.is_dated = true;
          if (this.estate_info.visit === 1) this.viewer.is_visit = true;
          if (this.estate_info.transfer === 1) this.viewer.is_transfer = true;

          // Estate Images For FullScreen
          for (var i = 0; i < this.estate_info.galleris.length; i++) {
            this.images_fullscreen.push(
              this.estate_info.galleris[i].img.toString()
            );
          }

          // Estate Properties
          var properties = this.estate_info.properties;
          for (var j = 0; j < properties.length; j++) {
            //Floors
            if (parseInt(properties[j].property_id) === 170) {
              for (var z = 0; z < properties[j].property_value.length; z++) {
                if (properties[j].property_value[z].is_exist == 1) {
                  this.properties.prt_floors =
                    properties[j].property_value[z].property_value;
                  // break;
                }
              }
            }

            //Bath
            if (parseInt(properties[j].property_id) === 176) {
              for (var z = 0; z < properties[j].property_value.length; z++) {
                if (properties[j].property_value[z].is_exist == 1) {
                  this.properties.prt_bath =
                    properties[j].property_value[z].property_value;
                  // break;
                }
              }
            }

            //Sell or Buy
            if (parseInt(properties[j].property_id) === 179) {
              for (var z = 0; z < properties[j].property_value.length; z++) {
                if (properties[j].property_value[z].is_exist == 1) {
                  this.properties.prt_sell_or_buy =
                    properties[j].property_value[z].property_value;
                  // break;
                }
              }
            }

            //Sell or Buy
            if (parseInt(properties[j].property_id) === 169) {
              for (var z = 0; z < properties[j].property_value.length; z++) {
                if (properties[j].property_value[z].is_exist == 1) {
                  this.properties.prt_history =
                    properties[j].property_value[z].property_value;
                  // break;
                }
              }
            }

            //Parking
            if (parseInt(properties[j].property_id) === 183) {
              for (var z = 0; z < properties[j].property_value.length; z++) {
                if (
                  parseInt(
                    properties[j].property_value[z].property_value_id
                  ) === 642 &&
                  properties[j].property_value[z].is_exist == 1
                ) {
                  this.properties.prt_parking = 1;
                  // break;
                }
              }
            }
          }

          //Fill Meta
          this.meta.title = this.estate_info.title;
          this.meta.desc = this.estate_info.address[0].address;
          this.meta.img = this.estate_info.galleris[0].img;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetch_similar() {
      this.$axios
        .$post("list_of_other_estate", {
          token: this.$storage.getUniversal("token"),
          currency: this.$storage.getUniversal("currency"),
          language: this.$i18n.locale,
          estate_id: this.estate_query_id,
          last_id: -1,
          count: 5,
        })
        .then((response) => {
          if (response[0].res === -5) {
            this.DestroyStorage();
          }

          this.lst_similar_estate = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetch_histories() {
      this.$axios
        .$post("estate_price_chart", {
          token: this.$storage.getUniversal("token"),
          currency: this.$storage.getUniversal("currency"),
          language: this.$i18n.locale,
          estate_id: this.estate_query_id,
          price_type_id: "7",
        })
        .then((response) => {
          if (response[0].res === 1 && response.length > 1) {
            for (var i = 0; i < response.length; i++) {
              this.chart_record.push([
                response[i].date.toString(),
                parseFloat(response[i].lir_price),
              ]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    socialClick(type) {
      this.$ga.event({
        eventCategory: "socialConnect",
        eventAction: "onDetail",
        eventLabel: type,
        eventValue: this.estate_query_id,
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$ga.page(this.$router);
    if (this.$route.params.project) {
      this.estate_query_id = this.$route.params.project.split(".")[0];
      if (
        this.$route.query.show_birds_view &&
        this.$route.query.show_birds_view == "1"
      ) {
        this.boxes._360 = true;

        this.boxes.map = false;
        this.boxes.slider = false;
        this.boxes.panorama = false;
      } else if (
        this.$route.query.show_3d_view &&
        this.$route.query.show_3d_view == "1"
      ) {
        this.boxes.panorama = true;

        this.boxes.map = false;
        this.boxes.slider = false;
        this.boxes._360 = false;
      } else if (
        this.$route.query.show_map_view &&
        this.$route.query.show_map_view == "1"
      ) {
        if (this.ExistStorage() === true) {
          this.boxes.map = true;

          this.boxes.panorama = false;
          this.boxes.slider = false;
          this.boxes._360 = false;
        }
      } else if (
        this.$route.query.show_slider_view &&
        this.$route.query.show_slider_view == "1"
      ) {
        this.boxes.slider = true;

        this.boxes.panorama = false;
        this.boxes.map = false;
        this.boxes._360 = false;
      }
      this.visit_increase();
      this.fetch_detail();
      this.fetch_similar();
      this.fetch_histories();
    } else {
      this.gotopage("/");
    }
  },
};
</script>

<style scoped>
.matterport_fix iframe {
  height: 60vh !important;
  width: 100% !important;
  color: red !important;
}

.rtl {
  direction: rtl !important;
}

.ltr {
  direction: ltr !important;
}

.fl_r {
  float: right !important;
}

.fl_l {
  float: left !important;
}

.prefix__cls-4 {
  fill: #8b8b8b;
}

.Blue_btn_border {
  height: 40px;
  /*border: solid 2px #00bb7e;*/
  border-radius: 8px;
  direction: rtl;
  border: none;
  background-color: #41b4e5;
  color: #fff;
}

.btn_gray_directly {
  /*width: 200px;*/
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 8px;
  background: #8b8b8b;
}

.Yes_btn_whatsapp {
  /*width: 200px;*/
  height: 40px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.Yes_btn_border_whatsapp {
  height: 40px;
  /*border: solid 2px #00bb7e;*/
  border-radius: 8px;
  direction: rtl;
  border: none;
  background-color: #58af2c;
  color: #fff;
}

.make_fullscreen {
  transition: all 0.3s;
  width: 30px;
  height: 30px;
  background: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 20px;
  padding-top: 2px;
  opacity: 0.4;
}

.make_fullscreen:hover {
  opacity: 1;
}

iframe {
  height: 100vh;
  width: 100%;
}

#text {
  position: absolute;
  background: black;
  width: 270px;
  color: white;
  padding: 5px;
  opacity: 0.6;
}

#button {
  position: absolute;
  width: 55px;
  height: 30px;
  display: none;
}

.prefix__cls-1 {
  fill: #bbb;
  margin: auto;
  display: block;
}

.prefix__cls-2 {
  fill: #fff;
  stroke: #fff;
  stroke-width: 0.4px;
}

.cls-03 {
  fill: none;
  stroke: #bbb;
  stroke-width: 0.8px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 4px #0ddb98;
}

.icon_item {
  width: 30px;
  height: 30px;
  font-size: 25px;
  color: #5e5e5e;
}

.Yes_btn {
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.Yes_btn_border {
  width: 200px;
  height: 40px;
  border: solid 2px #00bb7e;
  color: #8b8b8b;
  border-radius: 8px;
  background: none;
}

.btn_gray {
  width: 200px;
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 8px;
  background: #8b8b8b;
}

.leaflet_style {
  height: 400px;
  border-radius: 1.5rem;
}

.price_list_select {
  font-size: 18px !important;
  height: 50px !important;
}

.no_btn {
  width: 180px;
  height: 40px;
  border: solid 1px #a0a0a0;
  border-radius: 8px;
  color: #a0a0a0;
  background: none;
}

.footer_col {
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.text_p {
  font-size: 12px;
  text-align: justify;
  line-height: 2.7;
}

.footer_icon {
  width: 26.6px !important;
  height: 18.2px;
  display: inline !important;
  object-fit: contain;
  margin-top: 5px;
  float: right;
}

.footer_label {
  height: 25px;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #636363;
  margin-top: 5px;
  margin-right: 10px;
  margin-left: 10px;
  float: right;
}

.custom_card {
  border-radius: 16px;
  box-shadow: 0 0 5px 0 #00000026;
  background-color: #fcfcfc;
}

.register_date_span {
  width: 210px;
  height: 25px;
  padding-top: 5px;
  border-radius: 4px;
  background-color: #eeeeee;
  color: #1d1e18;
  font-size: 10px;
  float: left;
}

.hooper {
  height: auto !important;
  background: #21282e;
  border-radius: 1rem;
}

.big_image_button {
  transition: all 0.3s;
  cursor: pointer;
  /*height: 210px;*/
  /*height: 18vh;*/
  height: 160px;
  /*max-height: 18.5vh;*/
  /*min-height: 18vh;*/
  border-radius: 16px;
  box-shadow: 0 0 5px 0 #00000026;
  /*padding-top: 40px;*/
  /*padding-top: 4.5vh;*/
  color: #bbbbbb;
}

.big_image_button svg {
  height: 50px;
  width: 50px;
  margin-top: 30px;
}

/*.big_image_button:hover{*/
/*  background-image: linear-gradient(to left, #00bb7e, #0ede9b);*/
/*  color: #fff;*/
/*}*/

.big_image_button.active {
  /*background-image: linear-gradient(to left, #00bb7e, #0ede9b);*/
  background-image: linear-gradient(to top, #43b5e2, #08cf8e 45%, #88c547);
  color: #fff;
  cursor: pointer;
}

.big_image_button.active .prefix__cls-1 {
  fill: #fff;
  margin: auto;
  display: block;
}

.big_image_button.active .cls-03 {
  fill: none;
  stroke: #fff;
  stroke-width: 0.8px;
}

.big_image_button img {
  width: 80px;
  height: 80px;
  margin: auto;
  display: block;
}

.big_image_button i {
  width: 80px;
  height: 80px;
  font-size: 60px;
  margin: auto;
  display: block;
}

.big_image_button span {
  margin-top: 20px;
  display: block;
}

.top_slider {
  /*height: 450px;*/
  height: 70vh;
}

.slider-image {
  /*height: 450px;*/
  height: 70vh;
  /*background-size: 100% 100%;*/
  border-radius: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #21282e;
}

.container-fluid {
  padding: 15px 30px;
}

.page_top_address_ico {
  color: #8b8b8b;
  font-size: 12px;
}

.page_top_like_and_share_ico {
  transition: all 0.3s;
  cursor: pointer;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 13px;
  border-radius: 50%;
  color: #bbbbbb;
  padding-top: 5px;
  background-color: #eeeeee;
  display: inline-block;
  margin: auto 5px;
}

.icon_like:hover {
  background-color: #ff4a4a;
  color: white;
}

.icon_like.active {
  background-color: #ff4a4a;
  color: white;
}

.icon_star {
  color: #00bb7e;
}

.page_top_desc {
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: right;
  color: #8b8b8b;
}

.mgn_form_label {
  font-size: 14px;
  margin-bottom: 10px;
  color: #333333de;
}

.mgn_input {
  height: 35px;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: #fff;
  color: #b5b5b5;
  text-align: right;
  font-size: 14px;
}

.mgn_input::-webkit-input-placeholder {
  /* Edge */
  color: #b5b5b5;
}

.mgn_input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b5b5b5;
}

.mgn_input::placeholder {
  color: #b5b5b5;
}

.random {
  width: 100%;
}
.random .vtc {
  height: 250px;
  font-size: 12px;
}
@media (min-width: 699px) {
  .random .vtc {
    height: 320px;
  }
}
.random .labels {
  stroke: rgba(0, 0, 0, 0.05);
}
.random .active-line {
  stroke: rgba(0, 0, 0, 0.2);
}
.random .point {
  stroke-width: 2;
  transition: stroke-width 0.2s;
}
.random .point.is-active {
  stroke-width: 5;
}
.random .curve1 .stroke {
  stroke: #fbac91;
  stroke-width: 2;
}
.random .curve1 .fill {
  fill: #fbac91;
  opacity: 0.05;
}
.random .curve1 .point {
  fill: #fbac91;
  stroke: #fbac91;
}
.random .curve2 .stroke {
  stroke: #fbe1b6;
  stroke-width: 2;
}
.random .curve2 .point {
  fill: #fbe1b6;
  stroke: #fbe1b6;
}
.random .curve3 .stroke {
  stroke: #7fdfd4;
  stroke-width: 2;
}
.random .curve3 .point {
  fill: #7fdfd4;
  stroke: #7fdfd4;
}
.random .tooltip {
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.random .tooltip:not(.is-active) {
  display: none;
}
.random .tooltip-data {
  display: flex;
}
.random .tooltip-data-item {
  display: flex;
  align-items: center;
}
.random .tooltip-data-item:not(:first-child) {
  margin-left: 20px;
}
.random .tooltip-data-item:before {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.random .tooltip-data-item--1:before {
  background: #fbac91;
}
.random .tooltip-data-item--2:before {
  background: #fbe1b6;
}
.random .tooltip-data-item--3:before {
  background: #7fdfd4;
}
</style>

<style>
.curve1 .stroke {
  stroke: #fbac91;
  stroke-width: 2;
}
.curve1 .fill {
  fill: #fbac91;
  opacity: 0.05;
}
.curve1 .point {
  fill: #fbac91;
  stroke: #fbac91;
}

.curve2 .stroke {
  stroke: #fbe1b6;
  stroke-width: 2;
}
.curve2 .point {
  fill: #fbe1b6;
  stroke: #fbe1b6;
}
.curve3 .stroke {
  stroke: #7fdfd4;
  stroke-width: 2;
}
.curve3 .point {
  fill: #7fdfd4;
  stroke: #7fdfd4;
}
</style>
