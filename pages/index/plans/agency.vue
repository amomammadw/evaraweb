<template>
  <div>
    <div class="row cl_custom_2">
      <div class="col text-center">

        <p style="font-size: 32px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          {{ $t('agency.title') }}
        </p>
        <p v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          {{ fullname }} {{ $t('agency.desc') }}
        </p>

      </div>
    </div>

    <div class="container">

      <div class="row cl_custom_2">
        <div class="col"></div>
        <div class="col-4 text-center">

          <div class="form-group text-right" style="margin-bottom: 1rem;">
            <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('agency.frm_title') }}
            </label>
            <input type="text" class="form-control mgn_input" v-model="title">
          </div>

          <div class="form-group text-right" style="margin-bottom: 1rem;">
            <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('agency.frm_address') }}
            </label>
            <input type="text" class="form-control mgn_input" v-model="address">
          </div>

          <div class="form-group text-right" style="margin-bottom: 1rem;">
            <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('agency.frm_email') }}
            </label>
            <input type="text" class="form-control mgn_input" v-model="email">
          </div>

          <div class="form-group text-right" style="margin-bottom: 1rem;">
            <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('agency.frm_tell') }}
            </label>
            <input type="text" class="form-control mgn_input" v-model="tell" v-mask="'###############'" maxlength="14" placeholder="00989356967915" >
          </div>

        </div>
        <div class="col"></div>
      </div>

      <div class="row" style="margin-top: 40px;">
        <div class="col text-center">
          <button type="button" class="btn btn-success Greenbtn" @click="save"> {{ $t('agency.btn_save') }} </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: this.$storage.getUniversal('name') + ' ' + this.$storage.getUniversal('family')
      , title : ''
      , address : ''
      , email : ''
      , tell : ''
    }
  }
  , methods: {
     save() {

      if (this.title.toString().trim() === '') this.$toast.warning(this.$t('agency.control_title'));
      else if (this.address.toString().trim() === '') this.$toast.warning(this.$t('agency.control_address'));
      else if (this.tell.toString().trim() === '') this.$toast.warning(this.$t('agency.control_tell'));
      else if (this.email.toString().trim() === '') this.$toast.warning(this.$t('agency.control_email'));
      else{
        this.$axios.$post('add_agency', {
          language: this.$i18n.locale,
          token : this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency') ,
          title: this.title,
          address: this.address,
          email: this.email,
          tell: this.tell,
        })
          .then((response) => {
            if (response[0].res === 1){
              this.$storage.setUniversal('type_of_user', 2);
              this.$storage.setUniversal('token', response[0].token);

              this.$ga.event({
                eventCategory: 'newAgency',
                eventAction: 'click',
                eventLabel: this.title
              })

              this.$toast.success(response[0].msg);
              this.$router.push(this.localePath({path: 'plans'}));

            }
            else if (response[0].res === -5) this.DestroyStorage();
            else this.$toast.error(response[0].msg);
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
  }
}
</script>

<style scoped>

.Greenbtn{
  border: none;
  border-radius: 5px;
  font-size: 18px;
  padding: 0.7rem 2rem;
  background-image: linear-gradient(to left, #88c547, #43b5e2) !important;
}


.cl_custom_1{
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 350px;
  margin-top: 20px;
}

.cl_custom_2{
  /*height: 400px;*/
  margin-top: 20px;
}

.card_plan{
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  min-height: 250px;
}


.card{
  transition: all ease-in-out 0.5s;
  cursor: pointer;
}
</style>
