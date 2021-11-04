<template>
  <div class="row top_row">
    <div class="col" style="padding-top: 25px;">

      <!-- Title -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <span>{{ $t('profile.meeting_status') }}</span>
        </div>
      </div>

      <!-- Desc -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <small style="font-size: 10px;">{{ $t('profile.meeting_status_desc') }}</small>
        </div>
      </div>

      <!-- Content -->
      <div class="card" style="border-radius: 12px; border: solid 1px #dee2e6;padding: 10px;">

        <!-- Loading - No Info -->
        <div class="row">
          <div class="col">
            <p class="text-center" style="margin-top: 10px;" v-if="lst_estate.length === 0 && is_loading === false"> {{ $t('profile.no_information') }} </p>
            <p class="text-center" style="margin-top: 10px;" v-if="is_loading === true"> {{ $t('profile.loading') }} </p>
          </div>
        </div>

        <!-- Table -->
        <div class="row text-center">
          <div class="col">
            <table v-if="lst_estate.length > 0" class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{{ $t('profile.adv_code') }}</th>
                <th scope="col">{{ $t('profile.estate_title') }}</th>
                <th scope="col">{{ $t('profile.adviser') }}</th>
                <th scope="col">{{ $t('profile.meeting_dt') }}</th>
                <th scope="col">{{ $t('profile.meeting_visit_dt') }}</th>
                <th scope="col">{{ $t('profile.authority') }}</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="(item,indx) in lst_estate">
                <th scope="row">{{indx+1}}</th>
                <td class="table_text_td text-center">{{item.estate_id}}</td>
                <td class="table_text_td text-center">{{item.title}}</td>
                <td class="table_text_td text-center">{{item.emp}}</td>
                <td class="table_text_td text-center">{{item.visit_time}} {{item.visit_date}}</td>

                <td class="table_text_td text-center"
                    v-if="((item.emp === '') || (item.emp === null)) && (((item.visit_date === null) || (item.visit_date === '')) || ((item.visit_time === null || item.visit_time === '')) )">
                  {{ $t('profile.request_sent') }}
                </td>

                <td class="table_text_td text-center" v-if="(item.emp !== '') && (item.emp !== null) && (((item.visit_date === null) || (item.visit_date === '')) && ((item.visit_time === null || item.visit_time === '')) )">
                  {{ $t('profile.waiting_for_visit') }}
                </td>

                <td class="table_text_td text-center" v-if="(item.emp !== '') && (item.emp !== null) && (((item.visit_date !== null) && (item.visit_date !== '')) || ((item.visit_time !== null) && item.visit_time !== '') )">
                  {{ $t('profile.fixed') }}
                </td>

                <td class="table_text_td text-center">
                  <button type="button" class="btn btn-light ico_btn" @click="gotodetail(item.estate_id)">{{ $t('profile.view') }}</button>
                  <button type="button" class="btn btn-light ico_btn" @click="cancel_visit(item.id)"><i class="far fa-trash-alt"></i> {{ $t('profile.cancel_visit') }} </button>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>

        <!-- Paginate -->
        <div class="row mt-5" v-if="lst_estate.length > 0">
          <div class="col">

            <paginate
              v-model="page"
              :page-count="pages_counts"
              :click-handler="fetch_estate"
              :container-class="'mob_pagination_vue pagination_vue'"
              :page-class="'page-item_vue'"
              :prev-text='`<svg xmlns="http://www.w3.org/2000/svg" width="22.851" height="12" viewBox="0 0 22.851 22.851">
                                        <path id="next" d="M20.015,22.85a2.857,2.857,0,0,1-2.856-2.856V2.856A2.754,2.754,0,0,1,18,.837a2.856,2.856,0,0,1,4.039,0,2.751,2.751,0,0,1,.837,2.02V19.994a2.857,2.857,0,0,1-2.856,2.856ZM1.4,22.6q-.558.6-1.384-.29V.536Q.847-.357,1.4.245L13.968,10.577a1.211,1.211,0,0,1,.335.859,1.135,1.135,0,0,1-.335.837Z" transform="translate(-0.021)" fill="#757575"/>
                                      </svg>`'
              :next-text='`<svg xmlns="http://www.w3.org/2000/svg" width="22.851" height="12" viewBox="0 0 22.851 22.851">
                                        <path id="next" d="M20.015,22.85a2.857,2.857,0,0,1-2.856-2.856V2.856A2.754,2.754,0,0,1,18,.837a2.856,2.856,0,0,1,4.039,0,2.751,2.751,0,0,1,.837,2.02V19.994a2.857,2.857,0,0,1-2.856,2.856ZM1.4,22.6q-.558.6-1.384-.29V.536Q.847-.357,1.4.245L13.968,10.577a1.211,1.211,0,0,1,.335.859,1.135,1.135,0,0,1-.335.837Z" transform="translate(22.872 22.851) rotate(180)" fill="#757575"/>
                                      </svg>`'>
            </paginate>

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
      lst_estate: [],
      is_loading: true,
      pages_counts : 1,
      page : 1,
      viewer_count : 15,
    }
  }
  , methods:{
    gotodetail(house_id) {
      this.$router.push(this.localePath({ path: '/detail/'+house_id}))
    }
    , gotoedit(house_id) {
      this.$router.push(this.localePath({ path: '/edit', query: { estate: house_id } }))
    }
    , fetch_estate () {
      this.is_loading = true;
      this.$axios.$post('list_of_transfered_customer',{
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language : this.$i18n.locale,
        pagination : this.page ,
        count : this.viewer_count ,
      })
        .then((response) => {
          this.is_loading = false;
          if (response[0].res === -5) this.DestroyStorage();
          if (response[0].res === 1){
            this.lst_estate = response;
            this.pages_counts = parseInt(parseInt(response[0].count) / parseInt(this.viewer_count));
            if (((parseInt(response[0].count) / parseInt(this.viewer_count)) - this.pages_counts) > 0){
              this.pages_counts++;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , cancel_visit (deals_id) {
      this.$axios.$post('cancel',{
        token : this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency')
        , deals_id : deals_id
        , language : this.$i18n.locale
      })
        .then((response) => {
          if (response[0].res === -5) this.DestroyStorage();

          var message = response[0].msg;
          if (response[0].res === 1) {
            this.$toast.success(message);
            this.fetch_estate();
          }else{
            this.$toast.error(message);
          }
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
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.fetch_estate();
  }
}
</script>

<style scoped>
.pagination_vue{
  float: none;
  direction: rtl;
  border: solid 1px #dcdcdc;
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
  text-align: right;
  padding-top: 15px;
  padding-bottom: 15px;
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


.btn-light {
  border-color: #ececec !important;
}

</style>
