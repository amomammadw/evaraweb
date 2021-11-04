import Vue from 'vue'

//Paginate
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

// Carousel
import OwlCarousel from 'v-owl-carousel'
Vue.component('carousel', OwlCarousel)

//Leaflet
import { LMap, LTileLayer, LMarker, LPolyline, LPolygon, LPopup } from 'vue2-leaflet';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-polyline', LPolyline);
Vue.component('l-polygon', LPolygon);
Vue.component('l-popup', LPopup);

//Google Map
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDSO-a0ifhayY-qARq5ui2zIBn2lI0k-zQ',
    libraries: 'places,drawing,visualization', // This is required if you use the Autocomplete plugin
  }
});

//NumeralFilter
import vueNumeralFilterInstaller from 'vue-numeral-filter';
Vue.use(vueNumeralFilterInstaller);

//Social Sharing
import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);

//VSelect
import VSelect from '@alfsnd/vue-bootstrap-select'
Vue.component('v-select', VSelect)

//CoolLightBox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
Vue.use(CoolLightBox)

//ToolTip
import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

// Vue Range Slider
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js' // import component
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css' // import theme
Vue.component('VueSlider', VueSlider)

//Text Mask
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

//Star Rating
import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating);

//Transition
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

//CKEditor
import CKEditor from 'ckeditor4-vue';
Vue.use( CKEditor );

// TinyMce
import tinymce from 'vue-tinymce-editor'
Vue.component('tinymce', tinymce)

// Currency Mask
import VueCurrencyInput from 'vue-currency-input'
const pluginOptions = {
  /* see config reference */
  globalOptions: {
    currency: null,
    locale: 'fa',
    precision: 0,
    valueAsInteger: true,
    autoDecimalMode: true,
    valueRange: { min: 0 },
    allowNegative: false
  }
}
Vue.use(VueCurrencyInput, pluginOptions)

//Chart
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))

//GTag
import VueGtag from 'vue-gtag'
Vue.use(VueGtag,{
  config:{id : "AW-654156299"},
})

//Google Sign In
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

//Tag Input
import VoerroTagsInput from '@voerro/vue-tagsinput';
Vue.component('tags-input', VoerroTagsInput);

//MultiSelect
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

// //VueMeta
// import VueMeta from 'vue-meta'
// Vue.use(VueMeta, {
//   refreshOnceOnNavigation: true
// })


import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)
