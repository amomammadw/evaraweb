<template>
  <div>

    <div class="row top_row">
      <div class="col" style="padding-top: 25px;">
        <div class="row" style="margin-bottom: 15px">
          <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"><span>{{ $t('profile.last_news') }}</span></div>
        </div>
        <div class="card" style="border-radius: 12px;border: none; box-shadow: 0 0 10px 0 #00000017;">
          <table class="table">
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td class="table_text_td"> چند زبانه کردن سایت وردپرس با افزونه رایگان Polylang</td>
              <td class="table_date_td">تاریخ : 12/06/99</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td class="table_text_td"> تبدیل دسته جمعی بلوک‌های ویرایشگر کلاسیک به گوتنبرگ</td>
              <td class="table_date_td">تاریخ : 12/06/99</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td class="table_text_td"> چگونه حالت در دست تعمیر ووکامرس را فعال کنیم</td>
              <td class="table_date_td">تاریخ : 12/06/99</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td class="table_text_td"> چگونه حالت در دست تعمیر ووکامرس را فعال کنیم</td>
              <td class="table_date_td">تاریخ : 12/06/99</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-6">

        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.fname') }} </label>
          <input type="text" class="form-control mgn_input" v-model="inp_fname" :placeholder="$t('profile.placeholder_fname')">
        </div>
        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.lname') }} </label>
          <input type="text" class="form-control mgn_input" v-model="inp_lname" :placeholder="$t('profile.placeholder_lname')">
        </div>
        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.phone') }} </label>

          <div class="input-group mb-3">
            <input type="text" class="form-control grouped_input mgn_input" @keyup="converse_phone" v-model="inp_phone" v-mask="'###########'" maxlength="10" :placeholder="$t('profile.placeholder_phone')">
            <div class="input-group-prepend">
              <select class="form-control grouped_select mgn_input" v-model="mobile_sub_code" @change="converse_phone_area_code">
                <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in list_of_country" :value="opt.id" > {{opt.area_code}} </option>
              </select>
            </div>
            <div class="input-group-prepend" v-if="control_mobile === 0">
              <button class="btn btn-danger" data-toggle="modal" data-target="#check_phone_modal" type="button" style="font-size: 12px" id="button-addon1">{{ $t('profile.not_valid') }}</button>
            </div>
          </div>

        </div>
        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.email') }} </label>
          <input type="text" class="form-control mgn_input" disabled v-model="inp_email" :placeholder="$t('profile.placeholder_email')">
        </div>
        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.username') }} </label>
          <input type="text" class="form-control mgn_input" disabled v-model="inp_username" :placeholder="$t('profile.placeholder_username')">
        </div>
        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.pass') }} </label>
          <input type="password" class="form-control mgn_input" v-model="inp_password" :placeholder="$t('profile.placeholder_password')">
        </div>
        <div class="form-group text-right" style="margin-bottom: 1rem;">
          <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]"> {{ $t('profile.repass') }} </label>
          <input type="password" class="form-control mgn_input" v-model="inp_repassword" :placeholder="$t('profile.placeholder_repassword')">
        </div>

      </div>

      <div class="col-6">

        <div class="image_upload_container">

          <div class="row" style="margin-top: 2vh">
            <div class="col text-center">
              <img v-if="inp_avatar === ''" :src="require('@/assets/images/sample_building/no-image.jpg')" class="avatar" alt="LOGO">
              <img v-if="inp_avatar !== ''" :src="inp_avatar" class="avatar" alt="LOGO">
            </div>
          </div>

          <div class="row" style="margin-top: 1vh">
            <div class="col"></div>
            <div class="col-9 text-center" style="font-size: 10px;margin-top: 5px;direction: rtl;color: #8b8b8b">
              {{ $t('profile.upload_desc') }}
            </div>
            <div class="col"></div>
          </div>

          <div class="row">
            <div class="col text-center">
              <button type="button" class="btn btn-primary btn_upload" @click="addFiles()">{{ $t('profile.upload_avatar') }} </button>
              <input type="file" id="files" ref="files"  accept="image/*" @change="onFileChange"/>
            </div>
          </div>


        </div>

      </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" style="direction: rtl" id="check_phone_modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> تایید تلفن همراه </h5>
            <button type="button" style="margin-left: 0;" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div v-if="check_mobile_frm_stp_1">
              <div class="row">
                <div class="col">
                  <img alt="EVARA"  :src="require(`@/assets/images/other/forgot_password.png`)" class="modal_image">
                </div>
              </div>
              <p class="text-justify modal_p">
                کاربر گرامی ، جهت استفاده از کلیه امکانات و اطلاع رسانی از ثبت املاک جدید ، شماره تلفن همراه خود را در سامانه ثبت نمایید . برای این کار ابتدا شماره تلفن همراه خود را و سپس پیامکی که برای شما ارسال می شود را وارد نمایید .
              </p>
              <div class="form-group" style="padding: 0 50px;">
                <label for="check_mobile_frm_mobile"> تلفن همراه </label>
                <div class="input-group">
                  <input type="text" v-mask="'###########'" v-model="check_mobile_frm_mobile" class="form-control text-center grouped_input mgn_input" id="check_mobile_frm_mobile">
                  <div class="input-group-prepend">
                    <select class="form-control grouped_select mgn_input" v-model="check_mobile_frm_mobile_sub_code">
                      <option style="direction: ltr;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" v-for="opt in list_of_country" :value="opt.id" > {{opt.area_code}} </option>
                    </select>
                  </div>
                </div>

                <small class="form-text text-muted"> شماره تلفن همراه خود را وارد کنید </small>
              </div>
              <div class="row">
                <div class="col">
                  <button  @click="send_otp" type="button" class="btn btn-success evara_btn"> ارسال پیامک تایید </button>
                </div>
              </div>
            </div>


            <div v-if="check_mobile_frm_stp_2">
              <div class="row">
                <div class="col">
                  <img alt="EVARA"  :src="require(`@/assets/images/other/Verification.png`)" class="modal_image" style="width: 150px; height: 150px;">
                </div>
              </div>
              <p class="text-center modal_p" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]" style="margin-top: 10px;" >
                پیامک ارسال شده به شماره تلفن
                <span class="farsi_font_1_bold"> {{check_mobile_frm_mobile}} </span>
                را وارد نمایید
              </p>

              <div class="form-group" style="padding: 0 50px;">
                <label for="check_mobile_frm_mobile"> کد تاییدیه ارسال شده </label>
                <input type="text" v-model="check_mobile_frm_smscode" class="form-control text-center" >
              </div>

              <div class="row">
                <div class="col">
                  <button  @click="send_check_otp" type="button" class="btn btn-success evara_btn"> بررسی کد </button>
                </div>
              </div>
            </div>


          </div>
          <div class="modal-footer">
            <button v-if="check_mobile_frm_stp_1" type="button" class="btn btn-secondary" data-dismiss="modal">بستن</button>
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
          inp_id : ''
        , inp_fullname : ''
        , inp_fname : ''
        , inp_lname : ''
        , inp_phone : ''
        , inp_email : ''
        , inp_username : ''
        , inp_password : ''
        , inp_repassword : ''
        , inp_avatar : ''
        , inp_last_password : ''
        , selected_image : ''
        , mobile_sub_code: '1'
        , selected_items: {
          images: []
        }
        , list_of_country: []
        , control_mobile : true
        , check_mobile_frm_stp_1 : true
        , check_mobile_frm_stp_2 : false
        , check_mobile_frm_mobile : ''
        , check_mobile_frm_mobile_sub_code : '1'
        , check_mobile_frm_smscode : ''
      }
    }
    , methods:{
      gotopage(page) {
        this.$router.push(this.localePath({path: page}));
      }
      , send_otp() {

        if (this.check_mobile_frm_mobile === '') {
          this.$toast.error(this.$t('profile.error_1'));
        }
        else if (this.check_mobile_frm_mobile.toString().length !== 10) {
          this.$toast.error(this.$t('profile.error_2'));
        } else {
          this.$axios.$post('mobile_register', {
            mobile : this.check_mobile_frm_mobile,
            area_code : this.check_mobile_frm_mobile_sub_code,
            user_id : this.inp_id,
            language : this.$i18n.locale,
          })
            .then((response) => {
              if (response[0].res === -5) this.DestroyStorage();

              var message = response[0].msg;
              var res = response[0].res;

              if (res === 1) {

                this.check_mobile_frm_stp_1 = false;
                this.check_mobile_frm_stp_2 = true;

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
      , send_check_otp() {

        if (this.check_mobile_frm_mobile === '') {
          this.$toast.error(this.$t('profile.error_1'));
        }
        else if (this.check_mobile_frm_mobile.toString().length !== 10) {
          this.$toast.error(this.$t('profile.error_3'));
        }
        else if (this.check_mobile_frm_smscode === '') {
          this.$toast.error(this.$t('profile.error_4'));
        }
        else if (this.check_mobile_frm_smscode.toString().length !== 5) {
          this.$toast.error(this.$t('profile.error_5'));
        }
        else {
          this.$axios.$post('confirm_mobile_register', {
            register_code : this.check_mobile_frm_smscode,
            user_id : this.inp_id,
            mobile : this.check_mobile_frm_mobile,
            area_code : this.check_mobile_frm_mobile_sub_code,
            language : this.$i18n.locale,
          })
            .then((response) => {
              if (response[0].res === -5) this.DestroyStorage();

              var message = response[0].msg;
              var res = response[0].res;

              if (res === 1) {
                location.reload();
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
      , fetch_data() {
        this.$axios.$post('profile',{
          token: this.$storage.getUniversal('token') ,
          currency: this.$storage.getUniversal('currency') ,
          language: this.$i18n.locale,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            var data = response[0];

            this.inp_fullname = this.page_static.lgnd_fullname;
            this.inp_fname = data.fname;
            this.inp_lname = data.lname;
            this.inp_phone = this.page_static.lgnd_mobile;
            this.check_mobile_frm_mobile = this.page_static.lgnd_mobile;
            this.inp_avatar = data.avatar;
            this.inp_last_password = data.password;
            this.control_mobile = data.is_register;
            this.inp_id = data.user_id;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      , onFileChange(e) {
        let vm = this;
        var selectedFiles = e.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.selected_items.images.push(selectedFiles[i]);
        }
        let reader = new FileReader();
        reader.onload = (e) => {
          this.selected_items.images[0].src = reader.result;
        };
        reader.readAsDataURL(this.selected_items.images[0]);
      }
      , addFiles(){
        this.$refs.files.click();
      }
      , update(){
        if (this.fname === ''){
          this.$toast.error(this.$t('profile.error_6'));
        }
        else if (this.lname === ''){
          this.$toast.error(this.$t('profile.error_7'));
        }
        else if (this.inp_password.trim() === ''){
          this.$toast.error(this.$t('profile.error_8'));
        }
        else if (this.inp_password === this.inp_last_password){
          this.$toast.error(this.$t('profile.error_9'));
        }
        else if (this.inp_repassword.trim() === ''){
          this.$toast.error(this.$t('profile.error_10'));
        }
        else if (this.inp_repassword !== this.inp_password){
          this.$toast.error(this.$t('profile.error_11'));
        }
        else {

          let formData = new FormData();
          formData.append('token', this.$storage.getUniversal('token'));
          formData.append('currency', this.$storage.getUniversal('currency'));
          formData.append('fname', this.inp_fname);
          formData.append('lname', this.inp_lname);
          formData.append('email', this.inp_email);
          formData.append('mobile', this.inp_phone);
          formData.append('area_code', this.mobile_sub_code);
          formData.append('password', this.inp_password);
          formData.append('language', this.$i18n.locale);

          if (this.selected_items.images.length > 0){
            formData.append('bill', this.selected_items.images[0]);
          }

          let config = {
            header: {
              'Content-Type': 'multipart/form-data'
            }
          };
          this.$axios.$post( 'update_profile', formData, config)
            .then((response) => {
              if (response[0].res === -5) this.DestroyStorage();

              var message = response[0].msg;
              if (response[0].res === 1) {
                this.$toast.success(message);

                this.$storage.setUniversal('name', response[0].fname);
                this.$storage.setUniversal('family', response[0].lname);

                location.reload();
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
        this.$axios.$post( 'list_of_country',{
          language: this.$i18n.locale,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            this.list_of_country = response;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      , converse_phone(){
        this.check_mobile_frm_mobile = this.inp_phone;
      }
      , converse_phone_area_code(){
        this.check_mobile_frm_mobile_sub_code = this.mobile_sub_code;
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
    }
    , mounted() {
      window.scrollTo(0,0);
      this.$ga.page(this.$router)
      this.inp_fullname = this.$storage.getUniversal('name') + ' ' + this.$storage.getUniversal('family');
      this.inp_phone = this.$storage.getUniversal('mobile');
      this.inp_email = this.$storage.getUniversal('email');
      this.inp_username = this.$storage.getUniversal('username');
      this.fetch_list_of_country();
      this.fetch_data();
    }
    , head () {
      return {
        title: this.$t('siteTitle.main'),
        meta: [
          {
            hid: 'پروفایل کاربر',
            name: 'پروفایل کاربر',
            content: 'پروفایل کاربر'
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: 'پروفایل کاربر',
          },{
            hid: 'og:description',
            property: 'og:description',
            content: 'پروفایل کاربران اوارا',
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
.evara_btn{
  background-image: linear-gradient(to left, #88c547 20%, #43b5e2);
}

.modal_image {
  width: 200px;
  height: 200px;
  top: 5px;
  position: relative;
  object-fit: contain;
}

.modal_p{
  line-height: 2;
  font-size: 12px;
  padding: 5px 50px;
}

.grouped_input{
  border-left: none !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.grouped_select{
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

input[type="file"]{
  display: none;
}

table {
  border: none;
  padding: 10px;
  margin-bottom: 0;
}

.table td, .table th {
  border-top: none !important;
}

.table tr {
  border-bottom: 1px solid #dee2e6 !important;
  padding-right: 10px !important;;
  padding-left: 10px !important;;
}

.table tr:last-child {
  border-bottom: none !important;
}

.table_date_td {
  color: #bbbbbb;
  font-size: 10px;
  font-weight: 500;
  text-align: left;
  padding-top: 20px;
  direction: rtl;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 4px #0ddb98;
}

.table_text_td {
  color: #1d1e18;
  font-size: 12px;
  font-weight: 500;
  direction: rtl;
  text-align: right;
  padding-top: 15px;
}

.top_row {
  border-bottom: 1px solid #dee2e66e !important;
  padding-bottom: 25px;
  margin-bottom: 10px;
}

.mgn_form_label {
  font-size: 14px;
  margin-bottom: 10px;
  color: #333333de;
}

.mgn_input {
  height: 43px;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: #fff;
  color: #b5b5b5;
  text-align: right;
  font-size: 14px;
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

.image_upload_container {
  margin-top: 35px;
  padding: 30px 10px;
  border-radius: 12px;
  background-color: #f8f9fd;
}

.btn_upload {
  width: 159px;
  height: 41px;
  border-radius: 8px;
  border: solid 1px #bbbbbb;
  background: none;
  color: #bbbbbb;
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
}

.yes_btn {
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: -5px;
  background-image: linear-gradient(to left, #00bb7e, #0ede9b);
}

.no_btn {
  width: 90px;
  height: 40px;
  border-radius: 8px;
  margin-top: -5px;
  background: none;
  color: #b5b5b5;
  border: solid 1px #b5b5b5;
}


/*Master Card Style*/

.master_card {
  border-radius: 12px;
  box-shadow: 0 0 10px 0 #00000029;
}
</style>
