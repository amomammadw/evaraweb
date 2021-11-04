<template>

  <div>
    <SocialHead
      link="/aboutus"
      :title="$t('siteTitle.about')"
      description="آنچه از اوارا باید بدانید"
    />
    <div class="container-fluid" v-bind:class="[{'persian_ltr' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">


      <div class="row">
        <div class="col"></div>
        <div class="col-10 " v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <p class="" style="font-size: 32px;margin-top: 10px" v-bind:class="[{'Estedad_FD_Bold text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('about_us.title_1') }} </p>
          <p class="" style="line-height: 3;" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('about_us.desc_2') }} </p>
        </div>
        <div class="col"></div>
      </div>

      <div class="row cl_custom_0" :style="{ backgroundImage: 'url(' + require('@/assets/images/about_us/0.jpg') + ')' }">
      </div>

      <div class="row cl_custom_1" :style="{ backgroundImage: 'url(' + require('@/assets/images/about_us/1.jpg') + ')' }" v-bind:class="[{'persian_ltr' : $i18n.locale=='fa' || $i18n.locale=='ar' }]" >
        <div class="col"></div>
        <div class="col-6 " v-bind:class="[{'text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <p class="" style="font-size: 32px;margin-top: 200px" v-bind:class="[{'Estedad_FD_Bold text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_2') }} </span>
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_1') }}
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_2') }}
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_3') }}
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_4') }}
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_5') }}
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_6') }}
          </p>
          <p class=" pt-2" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            - {{ $t('about_us.desc_3_item_7') }}
          </p>
        </div>
      </div>

      <div class="row cl_custom_3" :style="{ backgroundImage: 'url(' + require('@/assets/images/about_us/2.jpg') + ')' }" v-bind:class="[{'persian_ltr' : $i18n.locale=='fa' || $i18n.locale=='ar' }]">
        <div class="col-7" v-bind:class="[{'text-right persian_rtl' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <p class="" style=" font-size: 32px; margin-top: 30px; margin-bottom: 30px;" v-bind:class="[{'Estedad_FD_Bold text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_5') }} </span>
          </p>
          <p class="" style="line-height: 3;" v-bind:class="[{'Estedad_FD_Light text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('about_us.desc_2') }} </p>
        </div>
        <div class="col"></div>
      </div>



      <!-- Sales Team Turkey-->
      <div class="row" style="height: auto; margin-bottom: 25px;">
        <div class="col text-center">
          <p style="font-size: 18px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_4_1') }} </span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Bans Mahanoglu </p>
          <p style="font-size: 14px;color: #585858"> Baris@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Parisa Soleimani </p>
          <p style="font-size: 14px;color: #585858"> Parisa@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Bahareh Izadparast </p>
          <p style="font-size: 14px;color: #585858"> Bahareh@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Elnaz Rahimzadeh </p>
          <p style="font-size: 14px;color: #585858"> Elnaz@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Mona Khakpour </p>
          <p style="font-size: 14px;color: #585858"> mona@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Solmaz Yazdani </p>
          <p style="font-size: 14px;color: #585858"> solmaz@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Ozcan </p>
          <p style="font-size: 14px;color: #585858"> Ozcan@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Alireza Tajer </p>
          <p style="font-size: 14px;color: #585858"> Alireza@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Nazanin Ebadi </p>
          <p style="font-size: 14px;color: #585858"> Nazanin@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Pouya </p>
          <p style="font-size: 14px;color: #585858"> Pouya@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Shayan </p>
          <p style="font-size: 14px;color: #585858"> Shayan@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Monas </p>
          <p style="font-size: 14px;color: #585858"> Monas@evara.life </p>
        </div>
      </div>

      <!-- Sales Team Other Countries-->
      <div class="row" style="height: auto; margin-bottom: 25px;">
        <div class="col text-center">
          <p style="font-size: 18px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_4_2') }} </span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Reza Rezaee (Iran) </p>
          <p style="font-size: 14px;color: #585858"> reza@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Poulad Badie (Germany) </p>
          <p style="font-size: 14px;color: #585858"> poulad@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Shahram Tork (U.S) </p>
          <p style="font-size: 14px;color: #585858"> shahram@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Majid Khalaj (CA) </p>
          <p style="font-size: 14px;color: #585858"> majid@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Salman Rezaee </p>
          <p style="font-size: 14px;color: #585858"> salman@evara.life </p>
        </div>
      </div>

      <!-- Media & Production Team-->
      <div class="row" style="height: auto; margin-bottom: 25px;">
        <div class="col text-center">
          <p style="font-size: 18px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_4_3') }} </span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Hamid FarzanehFar </p>
          <p style="font-size: 14px;color: #585858"> Hamid@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Ardalan Ranjbar </p>
          <p style="font-size: 14px;color: #585858"> Ardalan@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Hamed Daei </p>
          <p style="font-size: 14px;color: #585858"> Hamed@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Mesbah Mousavi </p>
          <p style="font-size: 14px;color: #585858"> Mesbah@evara.life </p>
        </div>

      </div>

      <!-- Programming Team-->
      <div class="row" style="height: auto; margin-bottom: 25px;">
        <div class="col text-center">
          <p style="font-size: 18px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_4_4') }} </span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Hossein Mahmoodi </p>
          <p style="font-size: 14px;color: #585858"> hossein@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Amir Masoud Moradi </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Mehrdad Rad </p>
          <p style="font-size: 14px;color: #585858"> rad@evara.life </p>
        </div>

      </div>

      <!-- Lawyer Team-->
      <div class="row" style="height: auto; margin-bottom: 25px;">
        <div class="col text-center">
          <p style="font-size: 18px;margin-top: 80px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            <span style="border-bottom: solid 4px #00bb7e">{{ $t('about_us.title_4_5') }} </span>
          </p>
        </div>
      </div>
      <div class="row">

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Klodian Murrja </p>
          <p style="font-size: 14px;color: #585858"> Klodian@evara.life </p>
        </div>

        <div class="col-2 text-center m-auto">
          <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="user_icon">
          <p style="margin-top: 20px;"> Janan Vahdani </p>
          <p style="font-size: 14px;color: #585858"> Janan@evara.life </p>
        </div>

      </div>

    </div>
  </div>


</template>

<script>

export default {



  data() {
    return {
    }
  }
  , methods: {
    newroute(page) {
      this.$router.push(this.localePath({name: page}));
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
  }
  , head () {
    return {
      title: this.$t('siteTitle.about'),
      meta: [
        {
          hid: 'درباره ما',
          name: 'درباره ما',
          content: 'آنچه از - اوارا - باید بدانید'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'درباره ما',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'آنچه از اوارا باید بدانید',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.evara.life/thumb/og_test.jpg',
        },
        {
          hid: 'اوارا - خرید و فروش ملک در ترکیه',
          name: 'شهروند ترکیه',
          content: ' آنچه از سامانه اوارا باید بدانید'
        },
      ]
    }
  }
}
</script>

<style scoped>

.user_icon{
  border-radius: 50%;
  margin: auto !important;
  width: 150px !important;
  height: 150px !important;
}

.persian_rtl{
  direction: rtl;
}

.persian_ltr{
  direction: ltr;
}

.cl_custom_0{
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 550px;
}

.cl_custom_1{
  background-position: left;
  background-repeat: no-repeat;
  height: 650px;
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
  /*height: 400px;*/
  padding-right: 100px;
}

.cl_custom_4{
  background-position: left;
  background-repeat: no-repeat;
  height: 350px;
  padding-right: 80px;
}

.Yes_btn{
  width: 200px;
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
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
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
