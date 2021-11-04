<template>
<!--  <div class="row m-auto footer_box" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" :style="{ backgroundImage: 'url(' + require('@/assets/images/footer_bg.png') + ')' }">-->
  <div class="row m-auto footer_box" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" :lazy-background="require('@/assets/images/footer_bg.png')">
    <div class="col">

      <div class="row bg-border-radius"></div>


      <!-- EN CONTAINER -->
      <div class="container" v-if="$i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'" >        <div class="row row_control_1">
        <div class="col-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.service') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.learn') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.about_work') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" @click="gotopage('faq')">{{ $t('index.faq') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rules') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.without_comission') }}</li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item title_heading " v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.about') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.what_do_we_do') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.news') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.partners') }}</li>
            <a href="https://mag.evara.life" target="_blank" class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.blog') }}</a>
          </ul>
        </div>
        <div class="col-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.contact_us') }}</li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
              <span class="" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.phone') }}</span>
            </li>
            <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
              <span class="" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"> {{ $t('footer.address') }}</span>
            </li>
          </ul>
        </div>
        <div class="col-3">

          <div class="row">
            <div class="col">

              <div class="abs_logo">
                <img alt="EVARA"  :src="require(`@/assets/images/logo.svg`)" class="Evara_logo">
                <svg xmlns="http://www.w3.org/2000/svg" class="logo_type" viewBox="0 0 199.66 45.65">
                  <g id="Logo_Artwork" data-name="Logo Artwork"><path class="cls-1" d="M31.08,20.32,25.76,27.2H0V.44H31l-5.36,7H8.32v3.2h21.2l-4.76,6.08H8.32v3.64Z"/><path class="cls-1" d="M42,.44,54,18.2,66.6.44h9.76L59.24,24.64a10.19,10.19,0,0,1-2.16,2.08,5.38,5.38,0,0,1-3.2.92,5.48,5.48,0,0,1-3.14-.86,8.22,8.22,0,0,1-2.14-2.14L31.84.44Z"/><path class="cls-2" d="M152.36,27.2H141.28l-6-7.08H122.6V27.2h-8.28V13.52H137.6a6.18,6.18,0,0,0,3.24-.8,2.46,2.46,0,0,0,1.32-2.2A2.61,2.61,0,0,0,141,8.18a6.14,6.14,0,0,0-3.36-.78H114.32l5.4-7h17.2a27.85,27.85,0,0,1,4.72.42,14.36,14.36,0,0,1,4.44,1.5,9.55,9.55,0,0,1,3.3,2.92,8,8,0,0,1,1.3,4.72,9,9,0,0,1-.48,3,8.35,8.35,0,0,1-1.38,2.52,8.1,8.1,0,0,1-2.2,1.9,9,9,0,0,1-2.94,1.1c.45.35,1,.79,1.52,1.32s1.31,1.27,2.24,2.2Z"/><path class="cls-2" d="M89.28,9.44l4.8,7.08c.45.64.93,1.33,1.42,2.06s.93,1.34,1.3,1.82h0l5.2,6.8h9.46L94.72,3A8.22,8.22,0,0,0,92.58.86,5.48,5.48,0,0,0,89.44,0,5.42,5.42,0,0,0,86.2.92,9.32,9.32,0,0,0,84.08,3L66.92,27.2h9.8Z"/><path class="cls-2" d="M177.5,9.44l4.8,7.08c.46.64.93,1.33,1.42,2.06s.93,1.34,1.3,1.82h0l5.19,6.8h9.46L182.94,3A8.07,8.07,0,0,0,180.8.86a6.16,6.16,0,0,0-6.38.06A9.32,9.32,0,0,0,172.3,3L155.14,27.2h9.8Z"/><path d="M.92,37.1v6.58H.1V37.1Z"/><path d="M6.92,38.88c1.23,0,1.76.68,1.76,2.26v2.54H7.93V41.14c0-1.16-.35-1.63-1.19-1.63s-1.3.49-1.3,1.63v2.54H4.69V39H5.3l.1.55A1.69,1.69,0,0,1,6.92,38.88Z"/><path d="M14.21,43.05h.61v.63H14a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55H13.39v2.78C13.39,42.75,13.64,43.05,14.21,43.05Z"/><path d="M19.93,43.22a1.13,1.13,0,0,0,1.27-.94h.72a1.74,1.74,0,0,1-2,1.49c-1.54,0-2.19-.73-2.19-2.44s.64-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H18.5C18.58,42.76,19,43.22,19.93,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.87C21.35,40,20.92,39.44,19.92,39.44Z"/><path d="M25.4,37.1h.75v6.58H25.4Z"/><path d="M29.72,37.1h.76v6.58h-.76Z"/><path d="M35,37.56c0,.36-.16.52-.54.52s-.53-.16-.53-.52.16-.53.53-.53S35,37.19,35,37.56Zm-.92,6.12V39h.77v4.7Z"/><path d="M38.21,41.34c0-1.71.61-2.46,2-2.46a1.77,1.77,0,0,1,1.66.77L42,39h.61v4.23c0,1.72-.65,2.44-2.18,2.44-1.22,0-1.81-.45-2-1.49h.73a1.07,1.07,0,0,0,1.24.94c1,0,1.46-.52,1.46-1.77v-.24a1.77,1.77,0,0,1-1.61.68C38.82,43.77,38.21,43.05,38.21,41.34Zm3.62,0c0-1.29-.41-1.82-1.43-1.82S39,40.05,39,41.34s.41,1.81,1.43,1.81S41.83,42.63,41.83,41.34Z"/><path d="M48.07,43.22a1.13,1.13,0,0,0,1.27-.94h.72a1.74,1.74,0,0,1-2,1.49c-1.54,0-2.19-.73-2.19-2.44s.64-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H46.64C46.72,42.76,47.14,43.22,48.07,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.87C49.49,40,49.06,39.44,48.06,39.44Z"/><path d="M55.78,38.88c1.23,0,1.75.68,1.75,2.26v2.54h-.75V41.14c0-1.16-.35-1.63-1.18-1.63s-1.31.49-1.31,1.63v2.54h-.75V39h.61l.1.55A1.7,1.7,0,0,1,55.78,38.88Z"/><path d="M63.06,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55H62.24v2.78C62.24,42.75,62.49,43.05,63.06,43.05Z"/><path d="M74.81,41.18h-2v2.51H72V37.11h2.81c1.61,0,2.27.78,2.27,2.06a1.7,1.7,0,0,1-1.43,1.91l1.45,2.6h-.88Zm-.09-.64c1,0,1.49-.46,1.49-1.38s-.44-1.39-1.49-1.39H72.78v2.77Z"/><path d="M82.16,43.22a1.14,1.14,0,0,0,1.28-.94h.71a1.74,1.74,0,0,1-2,1.49C80.63,43.77,80,43,80,41.33s.65-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H80.73C80.81,42.76,81.23,43.22,82.16,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.88C83.59,40,83.15,39.44,82.15,39.44Z"/><path d="M90.64,43.12a1.71,1.71,0,0,1-1.56.65c-1.21,0-1.73-.43-1.73-1.45s.63-1.59,2.11-1.59h1.13v-.25c0-.77-.35-1.09-1.16-1.09s-1.17.29-1.17,1h-.72c0-1,.57-1.51,1.91-1.51s1.89.51,1.89,1.69v3.11h-.61Zm-1.16-1.89c-1,0-1.38.31-1.38,1.05s.33.9,1.16.9a1.16,1.16,0,0,0,1.33-1.33v-.62Z"/><path d="M94.82,37.1h.76v6.58h-.76Z"/><path d="M105.05,37.77v2.14h3.22v.67h-3.22V43h3.59v.67h-4.41V37.1h4.41v.67Z"/><path d="M115.42,42.33c0,1-.57,1.44-1.91,1.44s-1.86-.45-1.86-1.5h.73c0,.7.33,1,1.14,1s1.15-.24,1.15-.84c0-1.34-3-.37-3-2.19,0-.94.55-1.35,1.81-1.35s1.78.43,1.78,1.41h-.69c0-.64-.31-.9-1.09-.9s-1.09.22-1.09.76C112.43,41.38,115.42,40.45,115.42,42.33Z"/><path d="M120.76,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86H120V39h1.42v.55H120v2.78C120,42.75,120.19,43.05,120.76,43.05Z"/><path d="M127.58,43.12a1.71,1.71,0,0,1-1.56.65c-1.21,0-1.73-.43-1.73-1.45s.63-1.59,2.11-1.59h1.13v-.25c0-.77-.34-1.09-1.16-1.09s-1.17.29-1.17,1h-.72c0-1,.57-1.51,1.91-1.51s1.89.51,1.89,1.69v3.11h-.61Zm-1.16-1.89c-1,0-1.38.31-1.38,1.05s.33.9,1.16.9a1.16,1.16,0,0,0,1.33-1.33v-.62Z"/><path d="M133.81,43.05h.61v.63h-.85a1.19,1.19,0,0,1-1.33-1.29V39.53h-.76V39h.76V37.86H133V39h1.42v.55H133v2.78C133,42.75,133.24,43.05,133.81,43.05Z"/><path d="M139.53,43.22a1.14,1.14,0,0,0,1.28-.94h.71a1.73,1.73,0,0,1-2,1.49c-1.53,0-2.19-.73-2.19-2.44s.65-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H138.1C138.19,42.76,138.6,43.22,139.53,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79H141C141,40,140.53,39.44,139.52,39.44Z"/><path d="M154.64,41.86c0,1.4-.73,2-2.46,2s-2.48-.62-2.48-2.07h.77c0,1,.48,1.44,1.71,1.44s1.67-.37,1.67-1.25c0-1.86-4-.73-4-3.08,0-1.4.71-2,2.38-2s2.37.62,2.37,2.07h-.76c0-1-.47-1.44-1.61-1.44s-1.59.36-1.59,1.25C150.59,40.47,154.64,39.38,154.64,41.86Z"/><path d="M162.3,41.33c0,1.71-.68,2.44-2.27,2.44s-2.29-.73-2.29-2.44.69-2.45,2.29-2.45S162.3,39.62,162.3,41.33ZM160,43.14c1.07,0,1.52-.53,1.52-1.81s-.44-1.82-1.52-1.82-1.54.53-1.54,1.82S159,43.14,160,43.14Z"/><path d="M165.59,37.1h.76v6.58h-.76Z"/><path d="M171.49,43.77c-1.23,0-1.76-.67-1.76-2.25V39h.75v2.54c0,1.15.35,1.62,1.19,1.62s1.3-.49,1.3-1.62V39h.76v4.7h-.62l-.1-.56A1.69,1.69,0,0,1,171.49,43.77Z"/><path d="M179.44,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55h-1.43v2.78C178.62,42.75,178.87,43.05,179.44,43.05Z"/><path d="M184.22,37.56c0,.36-.16.52-.54.52s-.52-.16-.52-.52.16-.53.52-.53S184.22,37.19,184.22,37.56Zm-.91,6.12V39h.76v4.7Z"/><path d="M192,41.33c0,1.71-.68,2.44-2.27,2.44s-2.28-.73-2.28-2.44.68-2.45,2.28-2.45S192,39.62,192,41.33Zm-2.27,1.81c1.07,0,1.52-.53,1.52-1.81s-.44-1.82-1.52-1.82-1.53.53-1.53,1.82S188.62,43.14,189.7,43.14Z"/><path d="M197.5,38.88c1.24,0,1.76.68,1.76,2.26v2.54h-.75V41.14c0-1.16-.35-1.63-1.18-1.63S196,40,196,41.14v2.54h-.75V39h.61l.1.55A1.69,1.69,0,0,1,197.5,38.88Z"/></g>
                </svg>
              </div>

            </div>
          </div>

          <div class="row"> <div class="col text-center" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="font-size: 14px;"> {{ $t('footer.title_1') }} </div> </div>
          <div class="row" style="margin-top: 10px;"> <div class="col text-center " v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="font-size: 10px;">{{ $t('footer.title_2') }}</div> </div>

        </div>
      </div>

        <div class="row row_control_2">
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
          <div class="col-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"> {{ $t('footer.partnership') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
          <div class="col-5">

            <div class="row">
              <div class="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.332" height="22.559" viewBox="0 0 31.332 22.559">
                  <path d="M0 0v22.555h31.332V0zm1.253 1.255h28.825v1.567c-.245.213-11.233 9.8-12.259 10.692l-.059.059a3.237 3.237 0 0 1-2.1.842 3.241 3.241 0 0 1-2.1-.842c-.232-.2-1.907-1.65-3.114-2.7-3.581-3.123-9.02-7.887-9.2-8.048zm0 3.231c1.087.947 4.942 4.3 8.225 7.167l-8.225 6.502zm28.825 0v13.669l-8.225-6.5c3.283-2.867 7.138-6.223 8.225-7.17zm-19.641 8.008l2.311 2.017.02.02a4.51 4.51 0 0 0 2.9 1.136 4.5 4.5 0 0 0 2.918-1.155c.176-.152 1.562-1.346 2.33-2.017l9.164 7.245v1.567H1.253v-1.568z" data-name="Path 319"/>
                </svg>

              </div>
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Black' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Black' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.newsletter') }}</div>
            </div>

            <div class="row">
              <div class="col-1"></div>
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 12px">{{ $t('footer.latest_offer') }}</div>
            </div>

            <div class="row" style="margin-top: 15px;">
              <div class="col">

                <div class="form-row">
                  <div class="form-group col-md-8">
                    <input type="text" class="form-control news_txt" v-model="newsletter_email" :placeholder="$t('footer.enter_email')">
                  </div>
                  <div class="form-group col-md-4" style="margin-right: -60px;">
                    <button class="btn btn-outline-secondary news_btn" type="button" id="button-addon1" @click="newsletter">{{ $t('footer.send') }}</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      <!-- FA CONTAINER -->
      <div class="container" v-if="$i18n.locale=='fa' || $i18n.locale=='ar'" >
        <div class="row row_control_1">
          <div class="col-3">

            <div class="row">
              <div class="col">

                <div class="abs_logo">
                  <img alt="EVARA"  :src="require(`@/assets/images/logo.svg`)" class="Evara_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" class="logo_type" viewBox="0 0 199.66 45.65">
                    <g id="Logo_Artwork" data-name="Logo Artwork"><path class="cls-1" d="M31.08,20.32,25.76,27.2H0V.44H31l-5.36,7H8.32v3.2h21.2l-4.76,6.08H8.32v3.64Z"/><path class="cls-1" d="M42,.44,54,18.2,66.6.44h9.76L59.24,24.64a10.19,10.19,0,0,1-2.16,2.08,5.38,5.38,0,0,1-3.2.92,5.48,5.48,0,0,1-3.14-.86,8.22,8.22,0,0,1-2.14-2.14L31.84.44Z"/><path class="cls-2" d="M152.36,27.2H141.28l-6-7.08H122.6V27.2h-8.28V13.52H137.6a6.18,6.18,0,0,0,3.24-.8,2.46,2.46,0,0,0,1.32-2.2A2.61,2.61,0,0,0,141,8.18a6.14,6.14,0,0,0-3.36-.78H114.32l5.4-7h17.2a27.85,27.85,0,0,1,4.72.42,14.36,14.36,0,0,1,4.44,1.5,9.55,9.55,0,0,1,3.3,2.92,8,8,0,0,1,1.3,4.72,9,9,0,0,1-.48,3,8.35,8.35,0,0,1-1.38,2.52,8.1,8.1,0,0,1-2.2,1.9,9,9,0,0,1-2.94,1.1c.45.35,1,.79,1.52,1.32s1.31,1.27,2.24,2.2Z"/><path class="cls-2" d="M89.28,9.44l4.8,7.08c.45.64.93,1.33,1.42,2.06s.93,1.34,1.3,1.82h0l5.2,6.8h9.46L94.72,3A8.22,8.22,0,0,0,92.58.86,5.48,5.48,0,0,0,89.44,0,5.42,5.42,0,0,0,86.2.92,9.32,9.32,0,0,0,84.08,3L66.92,27.2h9.8Z"/><path class="cls-2" d="M177.5,9.44l4.8,7.08c.46.64.93,1.33,1.42,2.06s.93,1.34,1.3,1.82h0l5.19,6.8h9.46L182.94,3A8.07,8.07,0,0,0,180.8.86a6.16,6.16,0,0,0-6.38.06A9.32,9.32,0,0,0,172.3,3L155.14,27.2h9.8Z"/><path d="M.92,37.1v6.58H.1V37.1Z"/><path d="M6.92,38.88c1.23,0,1.76.68,1.76,2.26v2.54H7.93V41.14c0-1.16-.35-1.63-1.19-1.63s-1.3.49-1.3,1.63v2.54H4.69V39H5.3l.1.55A1.69,1.69,0,0,1,6.92,38.88Z"/><path d="M14.21,43.05h.61v.63H14a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55H13.39v2.78C13.39,42.75,13.64,43.05,14.21,43.05Z"/><path d="M19.93,43.22a1.13,1.13,0,0,0,1.27-.94h.72a1.74,1.74,0,0,1-2,1.49c-1.54,0-2.19-.73-2.19-2.44s.64-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H18.5C18.58,42.76,19,43.22,19.93,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.87C21.35,40,20.92,39.44,19.92,39.44Z"/><path d="M25.4,37.1h.75v6.58H25.4Z"/><path d="M29.72,37.1h.76v6.58h-.76Z"/><path d="M35,37.56c0,.36-.16.52-.54.52s-.53-.16-.53-.52.16-.53.53-.53S35,37.19,35,37.56Zm-.92,6.12V39h.77v4.7Z"/><path d="M38.21,41.34c0-1.71.61-2.46,2-2.46a1.77,1.77,0,0,1,1.66.77L42,39h.61v4.23c0,1.72-.65,2.44-2.18,2.44-1.22,0-1.81-.45-2-1.49h.73a1.07,1.07,0,0,0,1.24.94c1,0,1.46-.52,1.46-1.77v-.24a1.77,1.77,0,0,1-1.61.68C38.82,43.77,38.21,43.05,38.21,41.34Zm3.62,0c0-1.29-.41-1.82-1.43-1.82S39,40.05,39,41.34s.41,1.81,1.43,1.81S41.83,42.63,41.83,41.34Z"/><path d="M48.07,43.22a1.13,1.13,0,0,0,1.27-.94h.72a1.74,1.74,0,0,1-2,1.49c-1.54,0-2.19-.73-2.19-2.44s.64-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H46.64C46.72,42.76,47.14,43.22,48.07,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.87C49.49,40,49.06,39.44,48.06,39.44Z"/><path d="M55.78,38.88c1.23,0,1.75.68,1.75,2.26v2.54h-.75V41.14c0-1.16-.35-1.63-1.18-1.63s-1.31.49-1.31,1.63v2.54h-.75V39h.61l.1.55A1.7,1.7,0,0,1,55.78,38.88Z"/><path d="M63.06,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55H62.24v2.78C62.24,42.75,62.49,43.05,63.06,43.05Z"/><path d="M74.81,41.18h-2v2.51H72V37.11h2.81c1.61,0,2.27.78,2.27,2.06a1.7,1.7,0,0,1-1.43,1.91l1.45,2.6h-.88Zm-.09-.64c1,0,1.49-.46,1.49-1.38s-.44-1.39-1.49-1.39H72.78v2.77Z"/><path d="M82.16,43.22a1.14,1.14,0,0,0,1.28-.94h.71a1.74,1.74,0,0,1-2,1.49C80.63,43.77,80,43,80,41.33s.65-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H80.73C80.81,42.76,81.23,43.22,82.16,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79h2.88C83.59,40,83.15,39.44,82.15,39.44Z"/><path d="M90.64,43.12a1.71,1.71,0,0,1-1.56.65c-1.21,0-1.73-.43-1.73-1.45s.63-1.59,2.11-1.59h1.13v-.25c0-.77-.35-1.09-1.16-1.09s-1.17.29-1.17,1h-.72c0-1,.57-1.51,1.91-1.51s1.89.51,1.89,1.69v3.11h-.61Zm-1.16-1.89c-1,0-1.38.31-1.38,1.05s.33.9,1.16.9a1.16,1.16,0,0,0,1.33-1.33v-.62Z"/><path d="M94.82,37.1h.76v6.58h-.76Z"/><path d="M105.05,37.77v2.14h3.22v.67h-3.22V43h3.59v.67h-4.41V37.1h4.41v.67Z"/><path d="M115.42,42.33c0,1-.57,1.44-1.91,1.44s-1.86-.45-1.86-1.5h.73c0,.7.33,1,1.14,1s1.15-.24,1.15-.84c0-1.34-3-.37-3-2.19,0-.94.55-1.35,1.81-1.35s1.78.43,1.78,1.41h-.69c0-.64-.31-.9-1.09-.9s-1.09.22-1.09.76C112.43,41.38,115.42,40.45,115.42,42.33Z"/><path d="M120.76,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86H120V39h1.42v.55H120v2.78C120,42.75,120.19,43.05,120.76,43.05Z"/><path d="M127.58,43.12a1.71,1.71,0,0,1-1.56.65c-1.21,0-1.73-.43-1.73-1.45s.63-1.59,2.11-1.59h1.13v-.25c0-.77-.34-1.09-1.16-1.09s-1.17.29-1.17,1h-.72c0-1,.57-1.51,1.91-1.51s1.89.51,1.89,1.69v3.11h-.61Zm-1.16-1.89c-1,0-1.38.31-1.38,1.05s.33.9,1.16.9a1.16,1.16,0,0,0,1.33-1.33v-.62Z"/><path d="M133.81,43.05h.61v.63h-.85a1.19,1.19,0,0,1-1.33-1.29V39.53h-.76V39h.76V37.86H133V39h1.42v.55H133v2.78C133,42.75,133.24,43.05,133.81,43.05Z"/><path d="M139.53,43.22a1.14,1.14,0,0,0,1.28-.94h.71a1.73,1.73,0,0,1-2,1.49c-1.53,0-2.19-.73-2.19-2.44s.65-2.45,2.19-2.45,2.18.77,2.18,2.55v.31H138.1C138.19,42.76,138.6,43.22,139.53,43.22Zm0-3.78c-1,0-1.44.53-1.44,1.79H141C141,40,140.53,39.44,139.52,39.44Z"/><path d="M154.64,41.86c0,1.4-.73,2-2.46,2s-2.48-.62-2.48-2.07h.77c0,1,.48,1.44,1.71,1.44s1.67-.37,1.67-1.25c0-1.86-4-.73-4-3.08,0-1.4.71-2,2.38-2s2.37.62,2.37,2.07h-.76c0-1-.47-1.44-1.61-1.44s-1.59.36-1.59,1.25C150.59,40.47,154.64,39.38,154.64,41.86Z"/><path d="M162.3,41.33c0,1.71-.68,2.44-2.27,2.44s-2.29-.73-2.29-2.44.69-2.45,2.29-2.45S162.3,39.62,162.3,41.33ZM160,43.14c1.07,0,1.52-.53,1.52-1.81s-.44-1.82-1.52-1.82-1.54.53-1.54,1.82S159,43.14,160,43.14Z"/><path d="M165.59,37.1h.76v6.58h-.76Z"/><path d="M171.49,43.77c-1.23,0-1.76-.67-1.76-2.25V39h.75v2.54c0,1.15.35,1.62,1.19,1.62s1.3-.49,1.3-1.62V39h.76v4.7h-.62l-.1-.56A1.69,1.69,0,0,1,171.49,43.77Z"/><path d="M179.44,43.05h.61v.63h-.85a1.2,1.2,0,0,1-1.34-1.29V39.53h-.75V39h.75V37.86h.76V39h1.43v.55h-1.43v2.78C178.62,42.75,178.87,43.05,179.44,43.05Z"/><path d="M184.22,37.56c0,.36-.16.52-.54.52s-.52-.16-.52-.52.16-.53.52-.53S184.22,37.19,184.22,37.56Zm-.91,6.12V39h.76v4.7Z"/><path d="M192,41.33c0,1.71-.68,2.44-2.27,2.44s-2.28-.73-2.28-2.44.68-2.45,2.28-2.45S192,39.62,192,41.33Zm-2.27,1.81c1.07,0,1.52-.53,1.52-1.81s-.44-1.82-1.52-1.82-1.53.53-1.53,1.82S188.62,43.14,189.7,43.14Z"/><path d="M197.5,38.88c1.24,0,1.76.68,1.76,2.26v2.54h-.75V41.14c0-1.16-.35-1.63-1.18-1.63S196,40,196,41.14v2.54h-.75V39h.61l.1.55A1.69,1.69,0,0,1,197.5,38.88Z"/></g>
                  </svg>
                </div>

              </div>
            </div>

            <div class="row"> <div class="col text-center" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="font-size: 14px;"> {{ $t('footer.title_1') }} </div> </div>
            <div class="row" style="margin-top: 10px;"> <div class="col text-center " v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" style="font-size: 10px;">{{ $t('footer.title_2') }}</div> </div>

          </div>
          <div class="col-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.contact_us') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <span class="" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.phone') }}</span>
              </li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
                <span class="" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"> {{ $t('footer.address') }}</span>
              </li>
            </ul>
          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.service') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.learn') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.about_work') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]" @click="gotopage('faq')">{{ $t('index.faq') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rules') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.without_comission') }}</li>
            </ul>
          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading " v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.about') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.what_do_we_do') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.news') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.partners') }}</li>
              <a href="https://mag.evara.life" target="_blank" class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.blog') }}</a>
            </ul>
          </div>
        </div>
        <div class="row row_control_2">
          <div class="col-6">

            <div class="row">
              <div class="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.332" height="22.559" viewBox="0 0 31.332 22.559">
                  <path d="M0 0v22.555h31.332V0zm1.253 1.255h28.825v1.567c-.245.213-11.233 9.8-12.259 10.692l-.059.059a3.237 3.237 0 0 1-2.1.842 3.241 3.241 0 0 1-2.1-.842c-.232-.2-1.907-1.65-3.114-2.7-3.581-3.123-9.02-7.887-9.2-8.048zm0 3.231c1.087.947 4.942 4.3 8.225 7.167l-8.225 6.502zm28.825 0v13.669l-8.225-6.5c3.283-2.867 7.138-6.223 8.225-7.17zm-19.641 8.008l2.311 2.017.02.02a4.51 4.51 0 0 0 2.9 1.136 4.5 4.5 0 0 0 2.918-1.155c.176-.152 1.562-1.346 2.33-2.017l9.164 7.245v1.567H1.253v-1.568z" data-name="Path 319"/>
                </svg>

              </div>
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Black' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Black' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.newsletter') }}</div>
            </div>

            <div class="row">
              <div class="col-1"></div>
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="font-size: 12px">{{ $t('footer.latest_offer') }}</div>
            </div>

            <div class="row" style="margin-top: 15px;">
              <div class="col">

                <div class="form-row">
                  <div class="form-group col-md-8">
                    <input type="text" class="form-control news_txt" v-model="newsletter_email" :placeholder="$t('footer.enter_email')">
                  </div>
                  <div class="form-group col-md-4" style="margin-right: -60px;">
                    <button class="btn btn-outline-secondary news_btn" type="button" id="button-addon1" @click="newsletter">{{ $t('footer.send') }}</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
          <div class="col-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item title_heading" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"> {{ $t('footer.partnership') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.buy_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.sell_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.rent_estate') }}</li>
              <li class="list-group-item" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">{{ $t('footer.participant') }}</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="row row_control_3"></div> <!--Separator-->

      <div class="container">

        <div class="row row_control_4">
          <div class="col reserved" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' },{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
            {{ $t('footer.copyright') }} <a target="_blank" href="#"> {{ $t('footer.developer') }} </a>
          </div>

          <div class="col-4" v-bind:class="[{'text-left' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-right' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">

            <ul class="list-group list-group-horizontal-md" style="direction: rtl">

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
</template>

<script>
export default {
  data() {
    return {
      selected_lang: "fa",
      lang_options: [
        {label: 'فارسی', code: 'fa'},
        {label: 'انگلیسی', code: 'en'},
        {label: 'ترکی', code: 'tr'},
        {label: 'عربی', code: 'ar'},
      ],
      newsletter_email : '',
    };
  }
  , methods: {
    gotopage(page) {
      this.$router.push(this.localePath({ path: '/'+page }))
    },
    newsletter() {
      var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

      if (this.newsletter_email === '') {
        this.$notify({
          type: 'warn',
          text: ' ایمیل خود را وارد کنید '
        });
      } else if ((this.newsletter_email !== '') && (!regexEmail.test(this.newsletter_email)) ){
        this.$notify({
          type: 'warn',
          text: ' ایمیل را بصورت صحیح وارد کنید '
        });
      } else {
           //delay 0ms, default is 300ms
        this.axios.post('news_letters', {
          email: this.newsletter_email,
          language: this.$i18n.locale
        })
          .then((response) => {
            ;
            var message = response.data[0].msg;

            if (response.data[0].res === 1) {
              this.$notify({
                type: 'success',
                text: message
              });
              this.newsletter_email = '';
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
  }
}
</script>

<style scoped>
@import "https://unpkg.com/vue-select@latest/dist/vue-select.css";

.abs_logo{
  /*position: absolute;*/
  /*top: -30px;*/
  /*left: 110px;*/
}

.logo_type{
  height: 30px;
  position: relative;
  top: -32px;
  left: 70px
}

.cls-1{fill:#8cc63f;}
.cls-2{fill:#29abe2;}


.social_ico{
  width: 21px;
  height: 21px;
}

.news_btn{
  width: 111px;
  border-radius: 24px;
  color: white;
  height: 50px;
  border: none;
  background-image: linear-gradient(268deg, #00bb7e 99%, #0ede9b 1%);
}

.news_txt{
  text-align: right;
  height: 50px;
  border-radius: 20px;
  border: solid 1px #e6e6e6;
}

.news_txt::placeholder {
  color: #c2c2c2;
  font-size: 12px;
}

.reserved {
  width: 204px;
  height: 16px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #3a4259;
}

.Evara_logo {
  width: 70px;
  height: 70px;
  top: 15px;
  position: relative;
  margin: auto;
  margin-right: 150px;
  -o-object-fit: contain;
  object-fit: contain;
}

.Evara_title {
  width: 110px;
  height: 47px;
  font-family: Septacharge;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #07ad77;
  margin-left: 55px;
}


.row_control_1 {
  margin: 50px auto;
  direction: rtl;
}

.row_control_2 {
  margin: 50px auto;
  direction: rtl;
}

.row_control_3 {
  margin: 25px auto;
  direction: rtl;
  background: #c1c1c1;
  height: 2px;
}

.row_control_4 {
  margin-bottom: 30px;
}

.footer_box{
  background: #eeeeee;
  background-position: bottom center;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 200px;
}

.bg-border-radius {
  height: 175px;
  overflow: hidden;
  border-radius: 0 0 70% 70%;
  background-color: #fff;
}

.list-group-flush{
  padding-right: 0;
}

.list-group-item {
  position: relative;
  display: block;
  text-align: right;
  padding: .3rem 1.25rem;
  background: none;
  border: none;
  font-size: 13px;
  cursor: pointer;
}

.title_heading{
  font-size: 16px;
  color: #00bb7e;
}

</style>
