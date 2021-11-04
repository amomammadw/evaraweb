<template>
  <div class="text-center" style="position: relative;margin-top: -25vh;">

    <div class="row banner_header" :style="{ backgroundImage: 'url(' + require('@/assets/images/contact-bg.jpg') + ')' }"> </div>

    <div class="row">
      <div class="col-xl-2 col-lg-2 col-2"></div>

      <div class="col">
        <div class="card custom_card">
          <div class="card-body" style="padding: 0">
            <div class="row" style="height: 530px;">

              <div class="col-8" style="padding-right: 50px;margin-top: 40px;">

                <div class="container">
                  <div class="form-group" style="margin-bottom: 1rem;" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('contact.fullname') }} </label>
                    <input type="text" class="form-control mgn_input" v-model="frm_fullname" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  </div>

                  <div class="form-group" style="margin-bottom: 1rem;" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('contact.phone') }} </label>
                    <input type="text" class="form-control mgn_input" v-model="frm_phone" maxlength="10" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  </div>

                  <div class="form-group" style="margin-bottom: 1rem;" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('contact.email') }} </label>
                    <input type="text" class="form-control mgn_input" v-model="frm_email" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                  </div>

                  <div class="form-group" style="margin-bottom: 1rem;" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                    <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('contact.text') }} </label>
                    <textarea class="form-control mgn_input" style="height: auto" rows="5" v-model="frm_message" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"></textarea>
                  </div>

                  <div class="form-group" style="margin-bottom: 1rem;" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                    <button class="btn btn-primary Yes_btn" type="button" @click="send_message();">{{ $t('contact.btn') }}</button>
                  </div>

                </div>

              </div>

              <div class="col-4 leaflet_box">
                <client-only>
                  <l-map class="leaflet_style" :zoom="leaflet_map.zoom" :center="leaflet_map.center">
                    <l-tile-layer :url="leaflet_map.url"></l-tile-layer>
                    <l-marker :lat-lng="leaflet_map.markerLatLng" ></l-marker>
                  </l-map>
                </client-only>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-2 col-2"></div>
    </div>

    <div class="row" style="margin-top: 30px;">
      <div class="colxl-2 col-lg-2 col-2"></div>
      <div class="col">
        <div class="card">
          <div class="card-body" style="padding: 0">
            <div class="icon_place">
              <svg xmlns="http://www.w3.org/2000/svg" id="call" width="25" height="25" viewBox="0 0 36.757 36.755">
                <g id="Group_1150" data-name="Group 1150">
                  <g id="Group_1149" data-name="Group 1149">
                    <path id="Path_581" d="M1.965 29.373L9.4 24.412a2.171 2.171 0 0 1 2.908.472l2.172 2.786a.926.926 0 0 0 1.188.25l.412-.227a24.913 24.913 0 0 0 6.493-5.1 25.015 25.015 0 0 0 5.1-6.493l.226-.412a.927.927 0 0 0-.245-1.192l-2.785-2.166a2.173 2.173 0 0 1-.469-2.908l4.962-7.44a2.16 2.16 0 0 1 2.912-.655L35.38 3.2a4.388 4.388 0 0 1 2 2.6c1.12 4.082.278 11.127-10.1 21.505-8.255 8.255-14.4 10.474-18.625 10.474a10.852 10.852 0 0 1-2.877-.379 4.384 4.384 0 0 1-2.6-2L1.31 32.286a2.16 2.16 0 0 1 .655-2.913zm.4 2.285l1.866 3.111A3.166 3.166 0 0 0 6.1 36.217c3.768 1.035 10.352.178 20.315-9.785S37.235 9.886 36.2 6.117a3.171 3.171 0 0 0-1.45-1.871L31.639 2.38a.937.937 0 0 0-1.264.284L27.68 6.71l-2.262 3.39a.943.943 0 0 0 .2 1.262l2.785 2.167a2.144 2.144 0 0 1 .568 2.752l-.221.4a25.985 25.985 0 0 1-5.309 6.775 26.013 26.013 0 0 1-6.774 5.309l-.4.222a2.144 2.144 0 0 1-2.752-.568l-2.167-2.785a.943.943 0 0 0-1.262-.2l-7.436 4.96a.937.937 0 0 0-.285 1.264z" class="cls-1" data-name="Path 581" transform="translate(-1 -1.018)"/>
                    <path id="Path_582" d="M294.266 70.549a10.425 10.425 0 0 0-10.413 10.413.613.613 0 0 1-1.225 0 11.651 11.651 0 0 1 11.638-11.638.613.613 0 0 1 0 1.225z" class="cls-1" data-name="Path 582" transform="translate(-278.337 -58.678)"/>
                    <path id="Path_583" d="M290.591 121.749a6.746 6.746 0 0 0-6.738 6.738.613.613 0 0 1-1.225 0 7.972 7.972 0 0 1 7.963-7.963.613.613 0 1 1 0 1.225z" class="cls-1" data-name="Path 583" transform="translate(-274.661 -106.202)"/>
                    <path id="Path_584" d="M286.916 172.949a3.066 3.066 0 0 0-3.063 3.063.613.613 0 0 1-1.225 0 4.293 4.293 0 0 1 4.288-4.288.613.613 0 0 1 0 1.225z" class="cls-1" data-name="Path 584" transform="translate(-270.986 -153.727)"/>
                  </g>
                </g>
              </svg>

            </div>
            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col" style="padding: 15px;padding-top: 55px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'},{'border_lft' : $i18n.locale=='fa' },{'border_rtl' : $i18n.locale=='en'}]">
                {{ $t('contact.txt_1') }}
                <br>
                <br>
                {{ $t('contact.txt_2') }}
              </div>
              <div class="col" style="padding: 15px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p> {{ $t('contact.tell_1') }} </p>
                <p> {{ $t('contact.tell_2') }} </p>
                <p> {{ $t('contact.tell_3') }} </p>
                <p> {{ $t('contact.tell_4') }} </p>
                <p> {{ $t('contact.tell_5') }} </p>
                <p> {{ $t('contact.tell_6') }} </p>
                <p> {{ $t('contact.tell_7') }} </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="colxl-2 col-lg-2 col-2"></div>
    </div>

    <div class="row" style="margin-top: 50px;">
      <div class="colxl-2 col-lg-2 col-2"></div>
      <div class="col">
        <div class="card">
          <div class="card-body" style="padding: 0">
            <div class="icon_place">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32.745 32.745">
                <path id="network" fill="#00bb7e" d="M29.173 0a3.572 3.572 0 0 0-3.14 5.275l-5.852 5.852a4.731 4.731 0 0 0-5.832 0L9.784 6.56a2.35 2.35 0 0 0 .338-1.2A2.381 2.381 0 1 0 7.74 7.74a2.35 2.35 0 0 0 1.2-.338l4.566 4.566a4.732 4.732 0 0 0 0 5.832l-7.54 7.54a3.536 3.536 0 1 0 .744.939l7.638-7.638a4.735 4.735 0 0 0 2.321.964v6.049a3.572 3.572 0 1 0 1.191 0v-6.049a4.735 4.735 0 0 0 2.321-.964l4.566 4.566a2.348 2.348 0 0 0-.338 1.2 2.381 2.381 0 1 0 2.381-2.381 2.35 2.35 0 0 0-1.2.338L21.023 17.8a4.732 4.732 0 0 0 0-5.832l5.754-5.754A3.57 3.57 0 1 0 29.173 0zM6.549 5.358A1.191 1.191 0 1 1 7.74 6.549a1.192 1.192 0 0 1-1.191-1.191zM3.572 30.363a2.381 2.381 0 1 1 2.381-2.381 2.384 2.384 0 0 1-2.381 2.381zm16.075-1.191a2.381 2.381 0 1 1-2.381-2.381 2.384 2.384 0 0 1 2.381 2.382zm-2.382-10.716a3.572 3.572 0 1 1 3.572-3.572 3.576 3.576 0 0 1-3.572 3.572zm10.717 5.954a1.191 1.191 0 1 1-1.191-1.191 1.192 1.192 0 0 1 1.191 1.191zm1.191-18.456a2.381 2.381 0 1 1 2.381-2.381 2.384 2.384 0 0 1-2.381 2.381z"/>
              </svg>
            </div>
            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col" style="padding: 10px;padding-top: 50px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p> {{ $t('contact.address_title') }} </p>
                <p> {{ $t('contact.address') }} </p>
              </div>
            </div>

            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col" style="padding: 10px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p> {{ $t('contact.address_title_2') }} </p>
                <p> {{ $t('contact.address_2') }} </p>
              </div>
            </div>

            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col" style="padding: 10px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p> {{ $t('contact.address_title_3') }} </p>
                <p> {{ $t('contact.address_3') }} </p>
              </div>
            </div>

            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col" style="padding: 10px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p> {{ $t('contact.address_title_4') }} </p>
                <p> {{ $t('contact.address_4') }} </p>
              </div>
            </div>

            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col" style="padding: 10px;padding-bottom: 40px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p> {{ $t('contact.address_title_5') }} </p>
                <p> {{ $t('contact.address_5') }} </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="colxl-2 col-lg-2 col-2"></div>
    </div>

    <div class="row" style="margin-top: 50px;">
      <div class="colxl-2 col-lg-2 col-2"></div>
      <div class="col">
        <div class="card">
          <div class="card-body" style="padding: 0">
            <div class="icon_place">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32.745 32.745">
                <path id="network" fill="#00bb7e" d="M29.173 0a3.572 3.572 0 0 0-3.14 5.275l-5.852 5.852a4.731 4.731 0 0 0-5.832 0L9.784 6.56a2.35 2.35 0 0 0 .338-1.2A2.381 2.381 0 1 0 7.74 7.74a2.35 2.35 0 0 0 1.2-.338l4.566 4.566a4.732 4.732 0 0 0 0 5.832l-7.54 7.54a3.536 3.536 0 1 0 .744.939l7.638-7.638a4.735 4.735 0 0 0 2.321.964v6.049a3.572 3.572 0 1 0 1.191 0v-6.049a4.735 4.735 0 0 0 2.321-.964l4.566 4.566a2.348 2.348 0 0 0-.338 1.2 2.381 2.381 0 1 0 2.381-2.381 2.35 2.35 0 0 0-1.2.338L21.023 17.8a4.732 4.732 0 0 0 0-5.832l5.754-5.754A3.57 3.57 0 1 0 29.173 0zM6.549 5.358A1.191 1.191 0 1 1 7.74 6.549a1.192 1.192 0 0 1-1.191-1.191zM3.572 30.363a2.381 2.381 0 1 1 2.381-2.381 2.384 2.384 0 0 1-2.381 2.381zm16.075-1.191a2.381 2.381 0 1 1-2.381-2.381 2.384 2.384 0 0 1 2.381 2.382zm-2.382-10.716a3.572 3.572 0 1 1 3.572-3.572 3.576 3.576 0 0 1-3.572 3.572zm10.717 5.954a1.191 1.191 0 1 1-1.191-1.191 1.192 1.192 0 0 1 1.191 1.191zm1.191-18.456a2.381 2.381 0 1 1 2.381-2.381 2.384 2.384 0 0 1-2.381 2.381z"/>
              </svg>
            </div>
            <div class="row" v-bind:class="[{'farsi_dir' : $i18n.locale=='fa' }]">
              <div class="col-xl-9" style="padding: 15px;padding-top: 40px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <p > {{ $t('contact.social') }} </p>
              </div>
              <div class="col-xl-3" style="padding-top: 35px;">
                <ul class="list-group list-group-horizontal-md list-group-flush" style="direction: rtl">

                  <li class="list-group-item">
                    <a href="https://www.instagram.com/evara.life" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20.989" height="20.989" class="social_ico" viewBox="0 0 20.989 20.989">
                        <path id="prefix__instagram" fill="#6f6f6f" d="M10.495 0C7.644 0 7.288.013 6.168.063a7.738 7.738 0 0 0-2.547.488 5.139 5.139 0 0 0-1.859 1.21 5.121 5.121 0 0 0-1.211 1.86 7.716 7.716 0 0 0-.488 2.547C.01 7.288 0 7.644 0 10.495s.013 3.205.063 4.326a7.743 7.743 0 0 0 .488 2.548 5.147 5.147 0 0 0 1.21 1.859 5.132 5.132 0 0 0 1.859 1.21 7.748 7.748 0 0 0 2.548.488c1.119.052 1.475.063 4.326.063s3.207-.013 4.326-.063a7.766 7.766 0 0 0 2.548-.488 5.363 5.363 0 0 0 3.07-3.07 7.743 7.743 0 0 0 .488-2.548c.052-1.119.063-1.475.063-4.326s-.013-3.207-.063-4.326a7.761 7.761 0 0 0-.488-2.548 5.151 5.151 0 0 0-1.21-1.859 5.113 5.113 0 0 0-1.86-1.21 7.721 7.721 0 0 0-2.547-.488C13.7.01 13.346 0 10.495 0zm0 1.889c2.8 0 3.135.014 4.242.062a5.782 5.782 0 0 1 1.948.363 3.454 3.454 0 0 1 1.992 1.991 5.794 5.794 0 0 1 .361 1.948c.05 1.107.061 1.439.061 4.242s-.013 3.135-.065 4.242a5.906 5.906 0 0 1-.368 1.948 3.332 3.332 0 0 1-.786 1.209 3.274 3.274 0 0 1-1.207.784 5.837 5.837 0 0 1-1.955.361c-1.114.05-1.442.061-4.249.061s-3.136-.013-4.249-.065a5.951 5.951 0 0 1-1.955-.368 3.25 3.25 0 0 1-1.206-.786 3.187 3.187 0 0 1-.787-1.207 5.956 5.956 0 0 1-.372-1.956c-.039-1.1-.053-1.442-.053-4.236s.017-3.137.053-4.252a5.949 5.949 0 0 1 .37-1.953 3.111 3.111 0 0 1 .787-1.208 3.1 3.1 0 0 1 1.206-.785 5.808 5.808 0 0 1 1.942-.368c1.115-.039 1.443-.052 4.249-.052l.039.026zm0 3.217a5.389 5.389 0 1 0 5.389 5.389 5.389 5.389 0 0 0-5.389-5.389zm0 8.887a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm6.862-9.1A1.259 1.259 0 1 1 16.1 3.635a1.26 1.26 0 0 1 1.256 1.258z"/>
                      </svg>
                    </a>
                  </li>

                  <li class="list-group-item">
                    <a href="https://www.t.me/evaralife" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20.989" height="18.275" class="social_ico" viewBox="0 0 20.989 18.275">
                        <g id="prefix__XMLID_496_">
                          <path id="prefix__XMLID_497_" fill="#6f6f6f" d="M.371 28.163l4.836 1.805 1.872 6.02a.569.569 0 0 0 .9.272l2.7-2.2a.8.8 0 0 1 .98-.027l4.862 3.53a.57.57 0 0 0 .893-.345l3.562-17.133a.57.57 0 0 0-.763-.648L.365 27.1a.57.57 0 0 0 .006 1.063zm6.407.844l9.452-5.821a.165.165 0 0 1 .2.261L8.628 30.7a1.617 1.617 0 0 0-.5.968l-.266 1.969a.244.244 0 0 1-.477.035l-1.023-3.594a.952.952 0 0 1 .415-1.071z" transform="translate(0 -19.401)"/>
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li class="list-group-item">
                    <a href="https://www.facebook.com/Evara-622399268390915" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" id="prefix___045-facebook" class="social_ico" width="20.989" height="20.989" data-name="045-facebook" viewBox="0 0 20.989 20.989">
                        <g id="prefix__Group_1010" data-name="Group 1010">
                          <path id="prefix__Path_477" fill="#6f6f6f" d="M18.365 0H2.624A2.626 2.626 0 0 0 0 2.624v15.741a2.626 2.626 0 0 0 2.624 2.624h7.871v-7.215H7.871v-3.28h2.624V7.871a3.935 3.935 0 0 1 3.935-3.936h2.624v3.28h-1.312c-.724 0-1.312-.068-1.312.656v2.624h3.28l-1.31 3.279h-1.97v7.215h3.935a2.626 2.626 0 0 0 2.624-2.624V2.624A2.626 2.626 0 0 0 18.365 0z" data-name="Path 477"/>
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li class="list-group-item">
                    <a href="https://twitter.com/evara_life" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20.989" height="17.059" viewBox="0 0 20.989 17.059">
                        <path id="prefix__twitter" fill="#6f6f6f" d="M20.948 4.277a8.746 8.746 0 0 1-2.47.678 4.336 4.336 0 0 0 1.892-2.381 8.888 8.888 0 0 1-2.735 1.035 4.3 4.3 0 0 0-7.443 2.937 4.4 4.4 0 0 0 .111.983 12.186 12.186 0 0 1-8.869-4.483 4.217 4.217 0 0 0-.582 2.165 4.3 4.3 0 0 0 1.913 3.582 4.289 4.289 0 0 1-1.948-.539v.053a4.305 4.305 0 0 0 3.451 4.221 4.342 4.342 0 0 1-1.934.074A4.317 4.317 0 0 0 6.36 15.59a8.63 8.63 0 0 1-5.336 1.841A9.133 9.133 0 0 1 0 17.373a12.239 12.239 0 0 0 6.609 1.932A12.153 12.153 0 0 0 18.851 7.074c0-.183 0-.367-.013-.551a8.689 8.689 0 0 0 2.151-2.228l-.041-.017z" transform="translate(0 -2.246)"/>
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-xl-2 col-lg-2 col-2"></div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      page_static: {
        login_btn: true
      },

      leaflet_map:{
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 16,
        center: [41.1029961, 28.9850657],
        markerLatLng: [41.1029961, 28.9850657]
      },
      frm_fullname : '',
      frm_phone : '',
      frm_email : '',
      frm_message : '',
    };
  }
  , methods:{
    send_message() {
      var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

      if (this.frm_fullname === '') {
        this.$toast.warn(this.$t('contact.error_1'));
      } else if ((this.frm_email === '') && (this.frm_phone === '')) {
        this.$toast.warn(this.$t('contact.error_2'));
      } else if ((this.frm_phone !== '') && (this.frm_phone.toString().length != 10)){
        this.$toast.warn(this.$t('contact.error_3'));
      } else if ((this.frm_email !== '') && (!regexEmail.test(this.frm_email)) ){
        this.$toast.warn(this.$t('contact.error_4'));
      } else if (this.frm_message === '') {
        this.$toast.warn(this.$t('contact.error_5'));
      } else {
        this.$axios.$post('contact_us', {
          fullname: this.frm_fullname,
          phone_number: this.frm_phone,
          email: this.frm_email,
          message: this.frm_message,
          token: this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency') ,
          language: this.$i18n.locale
        })
          .then((response) => {
            var message = response[0].msg;

            if (response[0].res === -5) {
              this.DestroyStorage();
            }

            if (response[0].res === 1) {
              this.$toast.success(message);

              this.$ga.event({
                eventCategory: 'contactUs',
                eventAction: 'click',
                eventLabel: this.frm_fullname,
              })


              this.frm_fullname = '';
              this.frm_phone = '';
              this.frm_email = '';
              this.frm_message = '';

            }
            else {
              this.$toast.error(message);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    ExistStorage() {
      if (this.$storage.getUniversal('token')) return true;
      else return false;
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    if (this.ExistStorage() === true) {
      this.frm_fullname = this.$storage.getUniversal('name') + ' ' + this.$storage.getUniversal('family');
      this.frm_phone = this.$storage.getUniversal('mobile');
    }
  }
  , head () {
    return {
      title: this.$t('siteTitle.contactus'),
      meta: [
        {
          hid: 'ارتباط با ما',
          name: 'ارتباط با ما',
          content: 'راه های ارتباط با  اوارا'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ارتباط با ما',
        },{
          hid: 'og:description',
          property: 'og:description',
          content: 'راه های ارتباط با اوارا',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.evara.life/thumb/og_test.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'راه های ارتباط با اوارا'
        },
      ]
    }
  }
}
</script>

<style scoped>

@import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

.banner_header{
  height: 100vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

}

.list-group-item {
  position: relative;
  display: block;
  text-align: right;
  padding: .3rem .75rem;
  background: none;
  border: none;
  font-size: 13px;
  cursor: pointer;
}
.list-group-flush{
  padding-right: 0;
}

.cls-1{fill:#00bb7e}

.farsi_dir{
  direction: rtl;
}

.border_lft{
  border-left: solid 1px #e2e2e2
}
.border_rtl{
  border-right: solid 1px #e2e2e2
}

.icon_place{
  position: absolute;
  top: -25px; /* or whatever top you need */
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: solid 1px #e2e2e2;
  background: white;
  z-index: 100;
  padding-top: 10px;
}

.leaflet_style{
  height: 530px;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.leaflet_box{
  height: 530px;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-left: solid 1px #e2e2e2;
  padding-left: 0;
}

.custom_card{
  margin-top: 72vh;
  margin-bottom: 30px;
  border-radius: 1rem;
  box-shadow: 0 5px 20px 20px #00bb7e26;
}

.mgn_form_label{
  font-size: 14px;
  margin-bottom: 10px;
  color: #333333de;
}

.Yes_btn{
  width: 200px;
  height: 40px;
  margin-top: 10px;
  border-radius: 8px;
  border: solid 2px #0ddb98;
  background-image: linear-gradient(to right, #43b5e2, #88c547);
}

.mgn_input{
  color: #b5b5b5;
  text-align: right;
  font-size: 14px;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: var(--white);

}

</style>
