<template>

  <div class="row text-center m-auto" style="padding-bottom: 2vh" v-if="magazine">
    <div class="col">
      <div class="row" style="margin-top: 30px;">
        <div class="col"></div>
        <div class="col-1 separator"></div>
        <div class="col"></div>
      </div> <!--Separator-->

      <div class="row" style="margin-top: 5px;">
        <div class="col"></div>
        <div class="col-8">
          <span class="master_title" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
            {{$t('mag.title')}}
          </span>
        </div>
        <div class="col"></div>
      </div> <!--Title-->

      <div class="row" style="margin-top: 10px;">
        <div class="col">
          <p class="master_desc m-auto" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
            {{$t('mag.desc')}}
          </p>
        </div>
      </div> <!--Desc-->

      <div class="row mt-3">
        <div class="col-2"></div>
        <div class="col">
          <ul class="list-group list-group-flush p-0">
            <li class="list-group-item" v-for="(itm,i) in magazine.items.slice(0,5)">
              <a :href="itm.link" target="_blank">
              <div class="row">
                <div class="col-3">
                  <img :src="image_extract(itm.content)" style="border-radius: .3rem;width: 70%;margin-top: 15px;">
                </div>
                <div class="col text-right">
                  <div class="row">
                    <div class="col-12">
                      <p class="text-right p-0 m-0" style="line-height: 35px;font-size: 15px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Bold' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">
                        <i class="fab fa-gg-circle ml-2" style="font-size: 20px;"></i>
                        {{itm.title}}
                      </p>
                    </div>
                    <div class="col-12">
                        <p style="font-size: 10px;color: #7b7b7b;line-height: 25px; text-align: justify;"> {{itm.contentSnippet}} </p>
                    </div>
                  </div>
                </div>
              </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-2"></div>
      </div> <!-- Items -->

      <div class="row mt-3">
        <div class="col-4"></div>
        <div class="col" style="padding: 5px 30px; margin-bottom: 20px;">
          <!-- Latest -->
          <a href="https://mag.evara.life" target="_blank" class="btn btn-success col more_btn" style="padding-top: 10px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            {{ $t('mag.more') }}
          </a>
        </div>
        <div class="col-4"></div>
      </div> <!-- More -->
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      magazine: null,
    };
  }
  , methods: {
    fetch_rss() {
      this.$axios.$post('evara_rss', {
        language: this.$i18n.locale,
        token: this.$storage.getUniversal('token'),
      })
        .then((response) => {
          this.magazine = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , image_extract(html){
      var src = html.indexOf('src')
      var start = html.indexOf('"',src+1)
      var end = html.indexOf('"',start+1)
      var image = html.substring(start+1,end)
      return image;
    }
  }
  , mounted() {
    window.scrollTo(0, 0);
    this.fetch_rss();
  }
}
</script>

<style scoped>
.separator{
  background: #0ede9b;
  height: 3px;
  border-radius: 1rem;
}

.master_title{
  font-size: 14px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.master_desc{
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.more_btn{
  height: 48px;
  border-radius: 4px;
  background-image: linear-gradient(to left, #88c547, #43b5e2);
}

</style>
