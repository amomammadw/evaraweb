<template>
  <div class="col-3 menu_right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">

    <div class="row top_menu_row">
      <div class="col">

        <div class="row" style="margin-top: 2vh" >
          <div class="col text-center" v-if="$storage.getUniversal('avatar')"><img :src="$storage.getUniversal('avatar')" class="avatar" alt="LOGO"></div>
        </div>

        <div class="row" style="margin-top: 1vh">
          <div class="col text-center " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 19px">{{$storage.getUniversal('name') + ' ' + $storage.getUniversal('family')}}</div>
        </div>

        <div class="row" style="margin: 1vh auto;margin-bottom: 2.5vh;">
          <div class="col text-center" style="font-size: 14px;padding-right: 0;"> {{$storage.getUniversal('email')}} </div>
        </div>

      </div>
    </div>

    <div class="row" style="margin-top: 20px;">
      <div class="col" style="padding-right: 0;padding-left: 5px;">
        <ul class="list-group list-group-flush">

          <nuxt-link :to="localePath({ path: '/profile' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.337" height="18.283" class="menu_icon" viewBox="0 0 15.337 18.283">
                  <g id="prefix__user" transform="translate(.25 .25)">
                    <path id="prefix__Path_937" d="M91.315 8.566a4.145 4.145 0 0 0 3.029-1.255A4.145 4.145 0 0 0 95.6 4.283a4.145 4.145 0 0 0-1.255-3.028 4.282 4.282 0 0 0-6.057 0 4.145 4.145 0 0 0-1.255 3.028 4.145 4.145 0 0 0 1.255 3.029 4.146 4.146 0 0 0 3.027 1.254zm-2.291-6.574a3.24 3.24 0 0 1 4.583 0 3.1 3.1 0 0 1 .95 2.291 3.1 3.1 0 0 1-.95 2.292 3.24 3.24 0 0 1-4.583 0 3.1 3.1 0 0 1-.95-2.292 3.1 3.1 0 0 1 .95-2.291zm0 0" class="prefix__cls-1" data-name="Path 937" transform="translate(-84.009)"/>
                    <path id="prefix__Path_938" d="M14.8 252.4a10.578 10.578 0 0 0-.144-1.124 8.853 8.853 0 0 0-.276-1.13 5.581 5.581 0 0 0-.465-1.054 3.972 3.972 0 0 0-.7-.913 3.088 3.088 0 0 0-1.006-.632 3.477 3.477 0 0 0-1.284-.232 1.3 1.3 0 0 0-.7.3l-.725.468a4.156 4.156 0 0 1-.938.413 3.644 3.644 0 0 1-2.3 0 4.142 4.142 0 0 1-.938-.413c-.27-.172-.514-.33-.726-.468a1.3 1.3 0 0 0-.7-.3 3.472 3.472 0 0 0-1.284.233 3.085 3.085 0 0 0-1.006.632 3.973 3.973 0 0 0-.7.913 5.592 5.592 0 0 0-.464 1.054 8.873 8.873 0 0 0-.276 1.13 10.506 10.506 0 0 0-.133 1.123c-.024.34-.036.693-.036 1.05a2.953 2.953 0 0 0 .877 2.234 3.157 3.157 0 0 0 2.26.824H11.7a3.157 3.157 0 0 0 2.26-.824 2.952 2.952 0 0 0 .877-2.234c0-.358-.012-.712-.036-1.05zm-1.56 2.53a2.125 2.125 0 0 1-1.541.537H3.137a2.125 2.125 0 0 1-1.537-.537 1.928 1.928 0 0 1-.553-1.479c0-.333.011-.662.033-.978a9.478 9.478 0 0 1 .13-1.012 7.827 7.827 0 0 1 .243-1 4.552 4.552 0 0 1 .378-.857 2.945 2.945 0 0 1 .515-.674 2.048 2.048 0 0 1 .669-.416 2.4 2.4 0 0 1 .821-.158c.036.019.1.056.207.125.214.14.461.3.734.473a5.163 5.163 0 0 0 1.178.526 4.685 4.685 0 0 0 2.936 0 5.169 5.169 0 0 0 1.178-.527c.279-.179.519-.333.734-.473.105-.069.17-.106.207-.125a2.4 2.4 0 0 1 .821.158 2.051 2.051 0 0 1 .669.416 2.937 2.937 0 0 1 .515.675 4.537 4.537 0 0 1 .378.857 7.809 7.809 0 0 1 .243 1 9.557 9.557 0 0 1 .13 1.012c.022.315.033.644.033.978a1.928 1.928 0 0 1-.554 1.479zm0 0" class="prefix__cls-1" data-name="Path 938" transform="translate(0 -238.726)"/>
                  </g>
                </svg>
                {{ $t('profile.profile') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/myestates' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-myestates' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.54" height="15.67" class="menu_icon" viewBox="0 0 17.54 15.67">
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
                {{ $t('profile.my_estate') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/myprojects' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-myprojects' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="menu_icon" viewBox="0 0 39.066 39.066">
                  <g transform="translate(-2 -2)">
                    <path d="M11.111,29.5a.651.651,0,0,0-1.111.46V44.736a.651.651,0,0,0,.651.651H25.422a.651.651,0,0,0,.46-1.111Zm.191,2.032,3.907,3.907v8.642H11.3Zm5.209,12.548v-7.34l7.34,7.34Z" transform="translate(-2.791 -9.529)" class="prefix__cls-1"/>
                    <path d="M36.318,2.191A.651.651,0,0,0,35.858,2H13.069a.651.651,0,0,0-.651.651V16.706L3.111,7.4A.651.651,0,0,0,2,7.86V40.415a.651.651,0,0,0,.651.651H35.206a.651.651,0,0,0,.46-1.111l-4.1-4.1h8.846a.651.651,0,0,0,.651-.651v-28a.651.651,0,0,0-.191-.46ZM3.3,39.764V9.432l2.986,2.986-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842L14.1,20.231l-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842L23.868,30l-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842L27.775,33.9l-.842.842.921.921.842-.842,1.033,1.033-.842.842.921.921.842-.842,2.986,2.986Zm13.673-29.3h2.6v13.4l-2.6-2.6Zm.4-1.3.9-1.8.9,1.8Zm8.073,13.1,1.11-3.329h1.666l1.11,3.329L28.3,32.589,26.28,30.568Zm2.594-7.236V12.084l1.841,2.946-1.558,2.6H26.46l-1.558-2.6,1.841-2.946v2.939Zm1.447,18.757,1.154-11.53a.652.652,0,0,0-.031-.271l-1.207-3.622,1.8-3a.652.652,0,0,0-.006-.68L27.945,9.468a.677.677,0,0,0-1.1,0l-3.256,5.209a.652.652,0,0,0-.006.68l1.8,3-1.207,3.622a.652.652,0,0,0-.031.271l.685,6.865L20.882,25.17V9.813a.652.652,0,0,0-.069-.291L18.86,5.615a.678.678,0,0,0-1.165,0L15.742,9.522a.652.652,0,0,0-.069.291V19.961L13.72,18.008V3.3H35.588l3.256,3.256H36.509v-1.3h-1.3V7.209a.651.651,0,0,0,.651.651h3.907v3.907H33.9a.651.651,0,0,0-.651.651V34.555H30.267Zm5.064.776V13.069h5.209v1.953h-1.3v1.3h1.3v1.953h-1.3v1.3h1.3v1.953h-1.3v1.3h1.3v1.953h-1.3v1.3h1.3v1.953h-1.3v1.3h1.3V31.3h-1.3v1.3h1.3v1.953Z" transform="translate(0)" class="prefix__cls-1"/>
                    <path d="M6,56H7.3v1.3H6Z" transform="translate(-1.396 -18.84)" class="prefix__cls-1"/>
                    <path d="M10,56h1.3v1.3H10Z" transform="translate(-2.791 -18.84)" class="prefix__cls-1"/>
                    <path d="M14,56h1.3v1.3H14Z" transform="translate(-4.187 -18.84)" class="prefix__cls-1"/>
                  </g>
                </svg>
                {{ $t('profile.my_projects') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/meeting' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-meeting' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16.736" height="16.736" class="menu_icon" viewBox="0 0 16.736 16.736">
                <g id="prefix__Calendar" transform="translate(.2 .2)">
                  <path id="prefix__Path_913" d="M16.975 3.634h-1.362v-.545a1.089 1.089 0 1 0-2.178 0v.545h-2.178v-.545a1.089 1.089 0 1 0-2.178 0v.545H6.9v-.545a1.089 1.089 0 1 0-2.178 0v.545H3.361A1.361 1.361 0 0 0 2 4.995v10.891a1.361 1.361 0 0 0 1.361 1.361h7.623a.272.272 0 0 0 0-.545H3.361a.819.819 0 0 1-.817-.817v-8.44h15.247v4.629a.272.272 0 1 0 .545 0V4.995a1.361 1.361 0 0 0-1.361-1.361zm-2.995-.545a.545.545 0 1 1 1.089 0v1.634a.545.545 0 1 1-1.089 0zm-4.356 0a.545.545 0 1 1 1.089 0v1.634a.545.545 0 1 1-1.089 0zm-4.356 0a.545.545 0 0 1 1.089 0v1.634a.545.545 0 1 1-1.089 0zM17.791 6.9H2.545V4.995a.819.819 0 0 1 .817-.817h1.361v.545a1.089 1.089 0 1 0 2.178 0v-.545h2.178v.545a1.089 1.089 0 1 0 2.178 0v-.545h2.178v.545a1.089 1.089 0 1 0 2.178 0v-.545h1.361a.819.819 0 0 1 .817.817z" class="prefix__cls-1" data-name="Path 913" transform="translate(-2 -2)"/>
                  <path id="prefix__Path_914" d="M24.178 27.545a.545.545 0 0 0-.544-.545h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545h1.089a.545.545 0 0 0 .545-.545zm-1.634.817v-.817h1.089v.817z" class="prefix__cls-1" data-name="Path 914" transform="translate(-16.555 -20.193)"/>
                  <path id="prefix__Path_915" d="M12.178 27.545a.545.545 0 0 0-.544-.545h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545h1.089a.545.545 0 0 0 .545-.545zm-1.634.817v-.817h1.089v.817z" class="prefix__cls-1" data-name="Path 915" transform="translate(-7.822 -20.193)"/>
                  <path id="prefix__Path_916" d="M47.634 28.906a.545.545 0 0 0 .545-.545v-.817a.545.545 0 0 0-.545-.544h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545zm-1.089-1.361h1.089v.817h-1.089z" class="prefix__cls-1" data-name="Path 916" transform="translate(-34.02 -20.193)"/>
                  <path id="prefix__Path_917" d="M24.178 36.545a.545.545 0 0 0-.544-.545h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545h1.089a.545.545 0 0 0 .545-.545zm-1.634.817v-.817h1.089v.817z" class="prefix__cls-1" data-name="Path 917" transform="translate(-16.555 -26.743)"/>
                  <path id="prefix__Path_918" d="M12.178 36.545a.545.545 0 0 0-.544-.545h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545h1.089a.545.545 0 0 0 .545-.545zm-1.634.817v-.817h1.089v.817z" class="prefix__cls-1" data-name="Path 918" transform="translate(-7.822 -26.743)"/>
                  <path id="prefix__Path_919" d="M23.634 45h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545h1.089a.545.545 0 0 0 .545-.545v-.817a.545.545 0 0 0-.545-.545zm-1.089 1.361v-.817h1.089v.817z" class="prefix__cls-1" data-name="Path 919" transform="translate(-16.555 -33.293)"/>
                  <path id="prefix__Path_920" d="M34.545 28.906h1.089a.545.545 0 0 0 .545-.545v-.817a.545.545 0 0 0-.545-.544h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.544zm0-1.361h1.089v.817h-1.089z" class="prefix__cls-1" data-name="Path 920" transform="translate(-25.288 -20.193)"/>
                  <path id="prefix__Path_921" d="M34 37.361a.545.545 0 0 0 .545.545.272.272 0 1 0 0-.545v-.817h1.089a.272.272 0 0 0 0-.545h-1.089a.545.545 0 0 0-.545.545z" class="prefix__cls-1" data-name="Path 921" transform="translate(-25.288 -26.743)"/>
                  <path id="prefix__Path_922" d="M11.634 45h-1.089a.545.545 0 0 0-.545.545v.817a.545.545 0 0 0 .545.545h1.089a.545.545 0 0 0 .545-.545v-.817a.545.545 0 0 0-.545-.545zm-1.089 1.361v-.817h1.089v.817z" class="prefix__cls-1" data-name="Path 922" transform="translate(-7.822 -33.293)"/>
                  <path id="prefix__Path_923" d="M39.539 36a3.539 3.539 0 1 0 3.539 3.539A3.539 3.539 0 0 0 39.539 36zm0 6.534a2.995 2.995 0 1 1 2.995-2.995 2.995 2.995 0 0 1-2.995 2.995z" class="prefix__cls-1" data-name="Path 923" transform="translate(-26.743 -26.743)"/>
                  <path id="prefix__Path_924" d="M45.3 44.595l-2.118 2.118-.962-.963a.272.272 0 1 0-.385.385l1.155 1.155a.272.272 0 0 0 .385 0l2.31-2.31a.272.272 0 1 0-.385-.385z" class="prefix__cls-1" data-name="Path 924" transform="translate(-30.933 -32.94)"/>
                </g>
              </svg>
              {{ $t('profile.meeting') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/history' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-history' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              <svg xmlns="http://www.w3.org/2000/svg" width="19.855" height="11.376" class="menu_icon" viewBox="0 0 19.855 11.376">
                <g id="prefix__eye" transform="translate(.249 -110.696)">
                  <g id="prefix__Group_2100" data-name="Group 2100" transform="translate(-.002 110.897)">
                    <g id="prefix__Group_2099" data-name="Group 2099">
                      <path id="prefix__Path_941" d="M19.045 115.472a11.983 11.983 0 0 0-4.07-3.332 11.742 11.742 0 0 0-5.146-1.24h-.3a11.743 11.743 0 0 0-5.147 1.242 11.983 11.983 0 0 0-4.07 3.332 1.48 1.48 0 0 0 0 1.823 11.983 11.983 0 0 0 4.07 3.332 11.743 11.743 0 0 0 5.147 1.242h.3a11.743 11.743 0 0 0 5.147-1.242 11.983 11.983 0 0 0 4.07-3.332 1.48 1.48 0 0 0-.001-1.825zm-14.311 4.451a11.192 11.192 0 0 1-3.8-3.112.694.694 0 0 1 0-.854 11.109 11.109 0 0 1 5.08-3.657 5.48 5.48 0 0 0 0 8.163 11.109 11.109 0 0 1-1.28-.54zm4.944 1.161a4.7 4.7 0 1 1 4.7-4.7 4.706 4.706 0 0 1-4.699 4.7zm8.745-4.273a11.091 11.091 0 0 1-5.079 3.653 5.48 5.48 0 0 0 0-8.162 11.115 11.115 0 0 1 5.081 3.654.694.694 0 0 1-.001.855z" class="prefix__cls-1" data-name="Path 941" transform="translate(.002 -110.897)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2102" data-name="Group 2102" transform="translate(7.667 114.372)">
                    <g id="prefix__Group_2101" data-name="Group 2101">
                      <path id="prefix__Path_942" d="M204.816 202.8a2.012 2.012 0 1 0 2.012 2.012 2.014 2.014 0 0 0-2.012-2.012zm0 3.235a1.224 1.224 0 1 1 1.224-1.224 1.225 1.225 0 0 1-1.224 1.228z" class="prefix__cls-1" data-name="Path 942" transform="translate(-202.805 -202.804)"/>
                    </g>
                  </g>
                </g>
              </svg>
              {{ $t('profile.visited') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/transaction' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-transaction' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.208" height="19.433" class="menu_icon" viewBox="0 0 11.208 19.433">
                <g id="prefix__rent" transform="translate(-103.797 .211)">
                  <g id="prefix__Group_2104" data-name="Group 2104" transform="translate(107.805 9.84)">
                    <g id="prefix__Group_2103" data-name="Group 2103">
                      <path id="prefix__Path_943" d="M202.948 249.56h-1.77l.727-.727a.317.317 0 0 0-.447-.448l-1.268 1.268a.317.317 0 0 0 .222.541h2.536a.317.317 0 1 0 0-.634z" class="prefix__cls-1" data-name="Path 943" transform="translate(-200.096 -248.303)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2106" data-name="Group 2106" transform="translate(103.997 8.244)">
                    <g id="prefix__Group_2105" data-name="Group 2105">
                      <path id="prefix__Path_944" d="M114.687 213.192l-.951-.951-4.121-4.121a.317.317 0 0 0-.448 0l-4.121 4.121-.951.951a.317.317 0 0 0 .441.456l.008-.008.408-.41v4.446a1.2 1.2 0 0 0 .276.779.958.958 0 0 0 .729.349h6.87a.957.957 0 0 0 .727-.349 1.2 1.2 0 0 0 .275-.779v-4.446l.412.41a.317.317 0 0 0 .448-.448zm-1.495 4.485a.576.576 0 0 1-.127.369.322.322 0 0 1-.243.127h-6.868a.322.322 0 0 1-.243-.127.576.576 0 0 1-.127-.369V212.6l3.8-3.8 3.8 3.8z" class="prefix__cls-1" data-name="Path 944" transform="translate(-103.997 -208.027)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2108" data-name="Group 2108" transform="translate(112.241 8.561)">
                    <g id="prefix__Group_2107" data-name="Group 2107">
                      <path id="prefix__Path_945" d="M313.165 216.025h-.354a.793.793 0 0 0-.775.807v.778a.317.317 0 1 0 .634 0v-.778a.161.161 0 0 1 .141-.173h.354a.161.161 0 0 1 .14.173v2.046a.316.316 0 1 0 .633 0v-2.046a.793.793 0 0 0-.773-.807z" class="prefix__cls-1" data-name="Path 945" transform="translate(-312.036 -216.025)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2110" data-name="Group 2110" transform="translate(107.563 12.365)">
                    <g id="prefix__Group_2109" data-name="Group 2109">
                      <path id="prefix__Path_946" d="M196.365 314.561h-.24v-1.254a.211.211 0 0 1 .037 0l1.154.289.154-.615-1.155-.289a1.254 1.254 0 0 0-.19-.032v-.64h-.634v.634h-.24a1.268 1.268 0 1 0 0 2.536h.24v1.254a.208.208 0 0 1-.037 0l-1.154-.289-.154.615 1.155.289a1.258 1.258 0 0 0 .19.032v.64h.634v-.631h.24a1.268 1.268 0 1 0 0-2.536zm-.874 0h-.24a.634.634 0 0 1-.449-1.082.631.631 0 0 1 .449-.186h.239zm.875 1.9h-.241V315.2h.241a.634.634 0 1 1 0 1.268z" class="prefix__cls-1" data-name="Path 946" transform="translate(-193.983 -312.025)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2112" data-name="Group 2112" transform="translate(105.584)">
                    <g id="prefix__Group_2111" data-name="Group 2111">
                      <path id="prefix__Path_947" d="M151.331.071a.317.317 0 0 0-.087.012l-1.136.325A2.877 2.877 0 0 1 148.2.291l-.032-.013a3.494 3.494 0 0 0-2.61-.05l-1.314.5a.317.317 0 0 0-.2.3v3.17a.317.317 0 0 0 .428.3l1.337-.5a2.856 2.856 0 0 1 2.14.049 3.517 3.517 0 0 0 2.346.149l1.129-.322a.317.317 0 0 0 .228-.3V.388a.317.317 0 0 0-.321-.317zm-5.017 2.557a1.569 1.569 0 0 0 .276.551 3.5 3.5 0 0 0-1.006.216l-.909.341V1.241l1.11-.42A2.857 2.857 0 0 1 147.414.7a1.568 1.568 0 0 0-1.1 1.928zm1.53.543a.951.951 0 1 1 .951-.951.951.951 0 0 1-.952.951zm3.17.149l-.9.256a2.872 2.872 0 0 1-1.5.02 1.57 1.57 0 0 0 .377-2.462 3.512 3.512 0 0 0 1.289-.116l.732-.209z" class="prefix__cls-1" data-name="Path 947" transform="translate(-144.039)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2114" data-name="Group 2114" transform="translate(105.898 4.756)">
                    <g id="prefix__Group_2113" data-name="Group 2113">
                      <path id="prefix__Path_948" d="M154.429 121.063l-.951-.951a.317.317 0 0 0-.448 0l-.951.951a.317.317 0 0 0 .44.456l.008-.008.408-.41v2.722a.317.317 0 0 0 .634 0V121.1l.412.41a.317.317 0 0 0 .448-.448z" class="prefix__cls-1" data-name="Path 948" transform="translate(-151.981 -120.019)"/>
                    </g>
                  </g>
                  <g id="prefix__Group_2116" data-name="Group 2116" transform="translate(110.04 4.756)">
                    <g id="prefix__Group_2115" data-name="Group 2115">
                      <path id="prefix__Path_949" d="M258.906 122.654a.317.317 0 0 0-.449 0l-.412.41v-2.722a.317.317 0 0 0-.634 0v2.722l-.41-.41a.317.317 0 0 0-.446.448l.951.951a.317.317 0 0 0 .448 0l.951-.951a.317.317 0 0 0 .001-.448z" class="prefix__cls-1" data-name="Path 949" transform="translate(-256.477 -120.025)"/>
                    </g>
                  </g>
                </g>
              </svg>
              {{ $t('profile.deals') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/favorite' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-favorite' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14.271" height="12.66" class="menu_icon" viewBox="0 0 14.271 12.66">
                <path id="prefix__heart" d="M14.958 4.462a4.489 4.489 0 0 0-5.824-.457 4.475 4.475 0 0 0-5.824 6.766l4.432 4.439a1.984 1.984 0 0 0 2.784 0l4.432-4.439a4.475 4.475 0 0 0 0-6.309zm-1.007 5.324l-4.432 4.433a.542.542 0 0 1-.771 0L4.316 9.765A3.028 3.028 0 1 1 8.6 5.483a.714.714 0 0 0 1.013 0 3.049 3.049 0 0 1 4.339 4.282z" class="prefix__cls-1" transform="translate(-1.988 -3.121)"/>
              </svg>
              {{ $t('profile.saved') }}
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/notification' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-notification' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13.253" height="15.333" class="menu_icon" viewBox="0 0 13.253 15.333">
                <g id="prefix__notifications-outline" transform="translate(.769 .75)">
                  <path id="prefix__Path_909" d="M91.405 58.09c-.854-1.045-1.457-1.577-1.457-4.458 0-2.639-1.347-3.579-2.456-4.035a.592.592 0 0 1-.331-.351 1.483 1.483 0 0 0-2.928 0 .587.587 0 0 1-.331.35c-1.11.457-2.456 1.394-2.456 4.035 0 2.881-.6 3.413-1.458 4.458a.671.671 0 0 0 .575 1.083h10.271a.671.671 0 0 0 .571-1.082z" class="prefix__cls-2" data-name="Path 909" transform="translate(-79.839 -48)"/>
                  <path id="prefix__Path_910" d="M196.256 384v.532a2.128 2.128 0 1 1-4.256 0V384" class="prefix__cls-2" data-name="Path 910" transform="translate(-188.27 -372.827)"/>
                </g>
              </svg>
              {{ $t('profile.notification') }}
              <!--            <span class="badge badge-pill badge-danger">2</span>-->
            </li>
          </nuxt-link>

          <nuxt-link :to="localePath({ path: '/profile/support' })">
            <li class="list-group-item" v-bind:class="[{ 'list-group-item_selected' : route_name[0] === 'profile-notification' } ,{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              <svg xmlns="http://www.w3.org/2000/svg" width="15.469" height="17.6" class="menu_icon" viewBox="0 0 15.469 17.6">
                <path id="prefix__icons8_online_support_1" class="prefix__cls-1" d="M18.786 8c-3.881 0-7.11 3.834-7.11 3.834l-.206.24.271.163a2.9 2.9 0 0 1 1.206 2.554v2.175a1.065 1.065 0 0 0-.534.92 3.543 3.543 0 0 0 .171.821 3.343 3.343 0 0 1 .1.381.936.936 0 0 0 .935.935h.165a5.309 5.309 0 0 0 4.3 4.708 1.585 1.585 0 0 0 2.032 0 5.307 5.307 0 0 0 3.249-2.031h.271a1.874 1.874 0 0 0 1.87-1.87v-.84a1.068 1.068 0 0 0 .8-1.031v-1.34a1.068 1.068 0 0 0-1.031-1.065 26.4 26.4 0 0 0 .23-3.014 3.735 3.735 0 0 0-1.07-2.94 3.083 3.083 0 0 0-1.977-.7A4.089 4.089 0 0 0 18.786 8zm0 .534a3.478 3.478 0 0 1 3.273 1.719l.073.151h.168a2.662 2.662 0 0 1 1.782.596 3.176 3.176 0 0 1 .89 2.542 26.231 26.231 0 0 1-.234 3.01h-.3v-.8a3.935 3.935 0 0 0-2.311-3.724l-.159-.058-.121.117a6.132 6.132 0 0 1-4.089 1.261 4.868 4.868 0 0 0-2.506.744 3.13 3.13 0 0 0-1.5 2.729v.079a.541.541 0 0 0-.267-.086v-2.023a3.647 3.647 0 0 0-1.209-2.806c.482-.528 3.294-3.451 6.51-3.451zm3.292 4.055a3.4 3.4 0 0 1 1.822 3.159v3.741l-.014.253a4.82 4.82 0 0 1-.492 1.884h.59a5.352 5.352 0 0 0 .416-1.6h.566v.8a1.332 1.332 0 0 1-1.336 1.336h-3.518a.8.8 0 0 0-.751-.534h-.534a.8.8 0 1 0 0 1.6h.534a.8.8 0 0 0 .751-.534h2.562a4.777 4.777 0 0 1-2.732 1.524l-.076.014-.057.052a1.078 1.078 0 0 1-1.432 0l-.057-.052-.076-.014a4.779 4.779 0 0 1-3.944-4.476l-.014-.253h-.666a.4.4 0 0 1-.4-.4 2.3 2.3 0 0 0-.117-.528 3.489 3.489 0 0 1-.15-.675.535.535 0 0 1 .5-.533 3.971 3.971 0 0 1 .425.242l.408.252v-1.03c0-2.4 2.572-2.939 3.473-2.939a6.86 6.86 0 0 0 4.319-1.289zm2.359 4.5h.8a.535.535 0 0 1 .534.534v1.336a.535.535 0 0 1-.534.534h-.8zm-7.748.267a.534.534 0 1 0 .534.534.534.534 0 0 0-.534-.539zm4.809 0a.534.534 0 1 0 .534.534.534.534 0 0 0-.532-.539zm-2.672 4.809h.534a.267.267 0 1 1 0 .534h-.534a.267.267 0 1 1 0-.534z" transform="translate(-11.088 -7.75)"/>
              </svg>
              {{ $t('profile.support') }}
            </li>
          </nuxt-link>

          <li class="list-group-item" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" @click="logout">

            <svg xmlns="http://www.w3.org/2000/svg" width="17.259" height="13.55" class="menu_icon" viewBox="0 0 17.259 13.55">
              <g id="prefix__exit-outline" transform="translate(-47.25 -95.25)">
                <path id="prefix__Path_950" d="M58.242 99.012v-1.506A1.506 1.506 0 0 0 56.736 96h-7.23A1.506 1.506 0 0 0 48 97.506v9.037a1.506 1.506 0 0 0 1.506 1.506h7.23a1.506 1.506 0 0 0 1.506-1.506v-1.506" class="prefix__cls-2" data-name="Path 950"/>
                <path id="prefix__Path_951" d="M384 176l3.012 3.012-3.012 3.013" class="prefix__cls-2" data-name="Path 951" transform="translate(-323.348 -76.988)"/>
                <path id="prefix__Line_169" d="M0 0L11 0" class="prefix__cls-2" data-name="Line 169" transform="translate(52.759 102.025)"/>
              </g>
            </svg>

            {{ $t('profile.close') }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      route_name: this.$route.name,
    }
  }
  , watch:{
    $route (to, from){
      this.route_name = this.$route.name.split('_')
    }
  }
  , props: {
    menu_row: String,
  }
  , methods:{
     logout(){
      this.$axios.$post('Logout', {
        token: this.$storage.getUniversal('token'),
      })
        .then((response) => {
          this.DestroyStorage()
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
  , mounted: function () {
    this.route_name = this.$route.name.split('_');
  }
}
</script>

<style scoped>


/* Icons */

.prefix__cls-1{fill:#8b8b8b;stroke:#8b8b8b;stroke-width:.4px}

.prefix__cls-2{fill:none;stroke:#8b8b8b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}

/*Master Card Style*/

.menu_right {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #f8f9fd;
  padding: 15px 10px;
}

.badge-danger {
  background-color: #e57373;
  margin-right: 15px;
  border-radius: 50%;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 4px #0ddb98;
}

.top_menu_row {
  /*height: 27vh;*/
  margin: auto;
  padding-bottom: 10px;
}

.list-group-item {
  cursor: pointer;
  background: none !important;
  border: none !important;
  text-align: right;
  direction: rtl;
  color: #7f7f7f;
  padding-right: 40px;
}

.list-group-item:hover {
  color: #0ede9b;
  background: #fff !important;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  box-shadow: 10px 0px 10px 4px #00000014;
}

.list-group-item_selected {
  color: #0ede9b;
  background: #fff !important;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  box-shadow: 10px 0px 10px 4px #00000014;
}

.list-group-item_selected .menu_icon {
  color: #0ede9b;
}

.list-group-item_selected .prefix__cls-1{fill:#0edf9b;stroke:#0edf9b;stroke-width:.4px}

.list-group-item_selected .prefix__cls-2{fill:none;stroke:#0edf9b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}

.list-group-item:hover .menu_icon {
  color: #0ede9b;
}

.list-group-item:hover .prefix__cls-1{fill:#0edf9b;stroke:#0edf9b;stroke-width:.4px}

.list-group-item:hover .prefix__cls-2{fill:none;stroke:#0edf9b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}



.menu_icon {
  font-size: 16px;
  color: #7f7f7f;
  margin-left: 20px;
}


</style>
