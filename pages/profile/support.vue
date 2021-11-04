<template>
  <div class="row top_row text-center">
    <div class="col" style="padding-top: 25px;">

      <!-- Title -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <span>{{ $t('profile.support') }}</span>
        </div>
      </div>

      <!-- Desc -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <small style="font-size: 10px;">{{ $t('profile.support_estate_desc') }}</small>
        </div>
      </div>

      <!-- Content -->
      <div v-if="is_new_ticket" class="card" style="border-radius: 12px; border: solid 1px #dee2e6;padding: 10px;">

        <div class="row" style="direction: rtl">
          <div class="col text-right">
            <div class="row">
              <div class="col">
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label " v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]">
                    {{ $t('profile.support_type') }}
                  </label>
                  <select id="frm_province" class="form-control mgn_input" v-model="selected_items.type">
                    <option selected value="-1">{{$t('profile.support_choose')}}</option>
                    <option v-for="option in lst_users" v-bind:value="option.id">
                      {{option.post_title}} &nbsp;  |  &nbsp; {{option.name}} {{option.family}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="form-group" style="margin-bottom: 1rem;">
                  <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]">
                    {{ $t('profile.support_subject') }}
                  </label>
                  <input class="form-control mgn_input" v-model="selected_items.subject">
                </div>
              </div>
            </div>
            <div class="row">
              <!--                        <div class="col">-->
              <!--                          <div class="form-group" style="margin-bottom: 1rem;">-->
              <!--                            <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]">-->
              <!--                              {{ $t('profile.support_desc') }}-->
              <!--                            </label>-->
              <!--                            <input class="form-control mgn_input" v-model="selected_items.desc">-->
              <!--                          </div>-->
              <!--                        </div>-->
              <div class="col"></div>
              <div class="col-3" style="padding-top: 30px;">
                <button type="button" class="btn btn-success col Yes_btn" @click="new_ticket">
                  {{ $t('profile.support_new_ticket') }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row top_row">
          <div class="col" style="padding-top: 25px;">
            <div class="row" style="margin-bottom: 15px">
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]">
                <span>{{ $t('profile.support_tickets_list') }}</span>
              </div>
            </div>
            <div class="row" style="margin-bottom: 15px">
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : i18_locale=='fa' },{'Estedad_FD_Light' : i18_locale=='ar' },{'Estedad_Light' : i18_locale=='en'},{'Estedad_Light' : i18_locale=='ru'}]">
                <small style="font-size: 10px;">{{ $t('profile.support_tickets_list_desc') }}</small>
              </div>
            </div>
            <div class="card" style="border-radius: 12px; border: solid 1px #dee2e6;padding: 10px;">

              <span v-if="lst_report.length === 0"> {{ $t('profile.no_information') }} </span>

              <table v-if="lst_report.length > 0" class="table table-striped">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{{ $t('profile.support_t_list_no') }}</th>
                  <th scope="col">{{ $t('profile.support_t_list_type') }}</th>
                  <th scope="col">{{ $t('profile.support_t_list_subject') }}</th>
                  <th scope="col">{{ $t('profile.support_t_list_date') }}</th>
                  <th scope="col">{{ $t('profile.support_t_list_select') }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(opt,indx) in lst_report" :key="indx">
                  <th scope="row">{{indx + 1}}</th>
                  <td class="table_text_td">{{opt.id}}</td>
                  <td class="table_text_td">{{opt.emp}}</td>
                  <td class="table_text_td">{{opt.subject}}</td>
                  <td class="table_text_td">{{opt.reg_date}}</td>
                  <td class="table_text_td">
                    <button type="button" class="btn btn-light ico_btn" @click="show_ticket(opt.id,opt.emp)"> {{ $t('profile.support_t_list_select') }} </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      <div v-if="!is_new_ticket">
        <div class="row top_row">
          <div class="col" style="padding-top: 25px;">
            <div class="row" style="margin-bottom: 15px">
              <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]">
                <span>{{ $t('profile.support_new_ticket_title') }}</span>
              </div>
            </div>

            <div class="row" style="margin-bottom: 15px">
              <div class="col text-right " v-bind:class="[{'Estedad_FD_Light' : i18_locale=='fa' },{'Estedad_FD_Light' : i18_locale=='ar' },{'Estedad_Light' : i18_locale=='en'},{'Estedad_Light' : i18_locale=='ru'}]">
                <small style="font-size: 10px;">{{ $t('profile.support_new_ticket_desc') }}</small>
                <small style="font-size: 10px;">{{ new_ticket_msg.emp }}</small>
              </div>
              <div class="col-2 text-left">
                <button type="button" class="btn btn-light ico_btn" @click="is_new_ticket = true"> {{ $t('profile.support_t_back') }} </button>
              </div>
            </div>

            <div class="row" style="direction: rtl">
              <div class="col text-right">
                <div class="row">
                  <div class="col">
                    <div class="form-group" style="margin-bottom: 1rem;">
                      <label class="mgn_form_label" v-bind:class="[{'Estedad_FD_Bold' : i18_locale=='fa' },{'Estedad_FD_Bold' : i18_locale=='ar' },{'Estedad_Bold' : i18_locale=='en'},{'Estedad_Bold' : i18_locale=='ru'}]">
                        {{ $t('profile.support_new_ticket_msg') }}
                      </label>
                      <input class="form-control mgn_input" v-model="new_ticket_msg.msg">
                    </div>
                  </div>
                  <div class="col-3" style="padding-top: 30px;">
                    <button type="button" class="btn btn-success col Yes_btn" @click="replay_ticket">
                      {{ $t('profile.support_new_ticket') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">

            <div class="row mb-4" v-if="lst_ticket_detail.length > 0" v-for="(itm , indx) in lst_ticket_detail" :key="indx">
              <div class="col">
                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <img alt="EVARA"  :src="require(`@/assets/images/avatars/avatar.jpg`)" class="avatar_image">
                      <div class="col text-right" style="padding-top: 5px;">
                        <div class="row">
                          <div class="col" style="font-weight: bold;font-size: 14px;"> {{itm.name}} </div>
                        </div>
                        <div class="row">
                          <div class="col" style="font-size: 12px;"> {{itm.post_name}} </div>
                        </div>
                      </div>

                      <div class="col-3 text-left" style="padding-top: 16px;">
                        {{itm.date}}
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="text-center" style="margin: auto"> {{itm.message}} </p>
                  </div>
                </div>
              </div>
            </div>

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
      is_loading: true
      , is_new_ticket: true
      , new_ticket_msg: {
        emp: ''
        , msg: ''
        , ticket_id: null
      }
      , selected_items: {
        type: '-1'
        , subject: ''
        , desc: ''
      }
      , lst_type: [
        {id: 1, title: 'کارشناس'}
        , {id: 2, title: 'مشاور'}
      ]
      , lst_users: []
      , lst_report: []
      , lst_ticket_detail: []
    }
  }
  , methods:{
    gotodetail(house_id) {
      this.$router.push(this.localePath({ path: '/detail/'+house_id }))
    }
    , gotoedit(house_id) {
      this.$router.push(this.localePath({ path: '/edit', query: { estate: house_id } }))
    }
    , new_ticket(){
      if (this.selected_items.type === '-1'){
        this.$toast.warning(' select Ticket Type ');
      }
      else if (this.selected_items.subject.toString().trim() === ''){
        this.$toast.warning(' Type a subject ');
      }
      else {
        this.$axios.$post( 'add_ticket', {
          token : this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency') ,
          language : this.$i18n.locale,
          is_customer : 1 ,
          ticket_id : 0 ,
          user_role_id : this.selected_items.type ,
          subject : this.selected_items.subject ,
          message : this.selected_items.desc ,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            var message = response[0].message;
            if (response[0].res === 1) {

              this.$ga.event({
                eventCategory: 'newTicket',
                eventAction: 'click',
                eventLabel: this.selected_items.subject,
              })

              this.$toast.success(message);
              this.list_of_ticket();
            }
            else {
              this.$toast.error(message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , replay_ticket(){
      if (this.new_ticket_msg.ticket_id === null){
        this.$toast.warning(this.$t('profile.error_17'));
      }
      else if (this.new_ticket_msg.msg.toString().trim() === ''){
        this.$toast.warning(this.$t('profile.error_18'));
      }
      else {
        this.$axios.$post( 'add_ticket', {
          token : this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency') ,
          language : this.$i18n.locale,
          ticket_id : this.new_ticket_msg.ticket_id ,
          message : this.new_ticket_msg.msg ,
          is_customer : 1 ,
        })
          .then((response) => {
            if (response[0].res === -5) this.DestroyStorage();
            var message = response[0].message;
            if (response[0].res === 1) {

              this.$ga.event({
                eventCategory: 'replayTicket',
                eventAction: 'click',
                eventLabel: this.new_ticket_msg.msg,
                eventValue: this.new_ticket_msg.ticket_id,
              })

              this.$toast.success(message);
              this.ticket_detail();
            }
            else {
              this.$toast.error(message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    , list_of_ticket() {
      this.$axios.$post('list_ticket',{
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language : this.$i18n.locale,
        type : 1,
      })
        .then((response) => {
          if (response[0].res === -5) this.DestroyStorage();
          if (response[0].res === 1){
            this.lst_report = response;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , list_of_user() {
      this.$axios.$post('list_user',{
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language : this.$i18n.locale,
        type : 1,
      })
        .then((response) => {
          if (response[0].res === -5) this.DestroyStorage();
          if (response[0].res === 1){
            this.lst_users = response;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , ticket_detail() {
      this.$axios.$post('detail_of_ticket',{
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language : this.$i18n.locale,
        id: this.new_ticket_msg.ticket_id,
      })
        .then((response) => {
          if (response[0].res === -5) this.DestroyStorage();
          if (response[0].res === 1){
            this.lst_ticket_detail = response;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , show_ticket(id , emp){
      this.is_new_ticket = false;
      this.new_ticket_msg.emp = emp;
      this.new_ticket_msg.ticket_id = id;
      this.ticket_detail();
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
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.list_of_ticket();
    this.list_of_user();
  }
}
</script>

<style scoped>

.avatar_image{
  width: 50px;
}

.container-fluid{
  padding: 0 30px;
}

.table_ico{
  font-size: 22px;
  margin: auto 5px;
  color: #707070;
}

.table_ico.active{
  color: #0edf9b;
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

.mgn_input::-webkit-input-placeholder { /* Edge */
  color: #b5b5b5;
}

.mgn_input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #b5b5b5;
}

.mgn_input::placeholder {
  color: #b5b5b5;
}


.map_card{
  padding: 0;
  height: 220px;
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

.table_text_td {
  color: #1d1e18;
  font-size: 12px;
  font-weight: 500;
  direction: rtl;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 0px;
}

.top_row {
  border-bottom: 1px solid #dee2e66e !important;
  padding-bottom: 25px;
  margin-bottom: 10px;
}

.table thead th {
  font-size: 12px;
}

.ico_btn{
  font-size: 9px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #e0f7fa54;
}


/*Master Card Style*/

.master_card {
  border-radius: 12px;
  box-shadow: 0 0 10px 0 #00000029;
}
</style>
