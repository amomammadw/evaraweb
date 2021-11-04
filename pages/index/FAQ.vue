<template>

  <div class="container-fluid text-center mt-5">

    <div class="row" style="margin-top: 30px;">
      <div class="col">
        <img alt="EVARA"  :src="require(`@/assets/images/backgrounds/faq.png`)" class="faq_image">
      </div>
    </div> <!--Image-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <span class="master_title" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('faq.title') }}  </span>
      </div>
      <div class="col"></div>
    </div> <!--Title-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-8">
        <p class="master_desc" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">{{ $t('faq.desc') }}</p>
      </div>
      <div class="col"></div>
    </div> <!--Desc-->

    <div class="row" style="margin-top: 30px;">
      <div class="col"></div>
      <div class="col-10">

        <div class="tabs" v-bind:class="[{'direction-ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">

          <div class="tab">
            <input type="checkbox" id="chck1">
            <label class="tab-label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" for="chck1">{{ $t('index.faq_1') }}</label>
            <div class="tab-content " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('index.faq_1_desc') }}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck2">
            <label class="tab-label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" for="chck2">{{ $t('index.faq_2') }}</label>
            <div class="tab-content " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('index.faq_2_desc') }}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck3">
            <label class="tab-label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" for="chck3">{{ $t('index.faq_3') }}</label>
            <div class="tab-content " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('index.faq_3_desc') }}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck4">
            <label class="tab-label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" for="chck4">{{ $t('index.faq_4') }}</label>
            <div class="tab-content " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('index.faq_4_desc') }}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck5">
            <label class="tab-label " v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" for="chck5">{{ $t('index.faq_5') }}</label>
            <div class="tab-content " v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' ||  $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('index.faq_5_desc') }}
            </div>
          </div>

        </div>

      </div>
      <div class="col"></div>
    </div>

  </div>

</template>

<script>


export default {
   data() {
    return {

    };
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)

  }
  , head () {
    return {
      title: this.$t('siteTitle.faq'),
      meta: [
        {
          hid: 'سوالات متداول',
          name: 'سوالات متداول',
          content: 'آنچه از اوارا باید بدانید'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'سوالات متداول',
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

<style scoped>

.faq_image{
  width: 50%;
}


.tabs {
  border-radius: 8px;
  overflow: hidden;
  direction: rtl
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  margin-bottom: 20px;
}
.tab-label {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 1em;
  cursor: pointer;

  color: #000;
  border-radius: 50px;
  border: solid 1px #cccccc;
  margin-bottom: auto;
  background-color: #fafbfc;
  /*background-image: linear-gradient(to left, #00bb7e, #0ede9b);*/
  /* Icon */
}
.tab-label:hover {
  color: #fff;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}
.tab-label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  -webkit-transition: all .35s;
  transition: all .35s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  -webkit-transition: all .35s;
  transition: all .35s;
  direction: rtl;
  text-align: right;
  font-size: 12px;
  line-height: 30px;
}
input:checked + .tab-label {
  /*background: #1a252f;*/
  color: #fff;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}
input:checked + .tab-label::after {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
  border-bottom: solid 1px #d4d4d4;
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}







a{
  text-decoration: none;
}

.card{
  border: none;
  margin-bottom: 20px;
}

.accordion .card .card-header{
  border-radius: 50px;
  border: solid 1px #cccccc;
  margin-bottom: auto;
  /*background-color: #fafbfc;*/
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}


.btn-link {
  /*color: #000;*/
  color: #fff;
  text-decoration: none;
}

.btn-link:hover {
  /*color: #000;*/
  text-decoration: none;
}

.container-fluid{
  padding-right: 15px;
  padding-left: 15px;
}

.separator{
  background: #0ede9b;
  height: 3px;
  border-radius: 1rem;
}

.master_title{
  font-size: 44px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.master_desc{
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}






</style>
