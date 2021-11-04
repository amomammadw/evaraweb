<template>
  <div style="direction:rtl" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' }]">

    <!-- Header -->
    <client-only>
      <MenuTop/>
    </client-only>
    <!-- +++++++ -->

    <!-- Content -->
<!--    <client-only>-->

     <div class="container-fluid" style="padding: 50px;">
       <div class="card master_card mt-5">
         <div class="card-body" style="padding: 0 15px;">
           <div class="row" style="direction: rtl">

             <!--Right Menu-->
             <ProfileMenu-Right-Side/>

             <!--Content-->
             <div class="col" style="padding-bottom:30px;padding-top:30px;">
               <vue-page-transition name="fade-in-right">
                 <Nuxt/>
               </vue-page-transition>
             </div>

           </div>
         </div>
       </div>
     </div>

<!--    </client-only>-->
    <!-- +++++++ -->

    <!-- Footer -->
    <client-only>
      <Footer/>
    </client-only>
    <!-- +++++++ -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      route_name: this.$route.name,
    };
  },
  methods: {
    auth() {
      if (!this.ExistStorage()) {
        // this.$router.push({path: '/'})
      }
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
    , ExistStorage() {
      if (this.$storage.getUniversal('token')) return true;
      else return false;
    }
  }
  , mounted() {
    window.scrollTo(0, 0);
  }
  , beforeMount() {
    this.auth();
  }
  , watch:{
    $route (to, from){
      this.route_name = this.$route.name.split('_')
    }
  }
}
</script>

<style scoped>

/* total width */
::-webkit-scrollbar {
  background-color:#fff;
  width:16px
}

/* background of the scrollbar except button or resizer */
::-webkit-scrollbar-track {
  background-color:#fff
}

/* scrollbar itself */
::-webkit-scrollbar-thumb {
  background-color:#babac0;
  border-radius:16px;
  border:4px solid #fff
}

/* set button(top and bottom of the scrollbar) */
::-webkit-scrollbar-button {display:none}





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
