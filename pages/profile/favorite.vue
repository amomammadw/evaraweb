<template>
  <div class="row top_row">
    <div class="col" style="padding-top: 25px;">

      <!-- Title -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <span>{{ $t('profile.favorite_estate') }}</span>
        </div>
      </div>

      <!-- Desc -->
      <div class="row" style="margin-bottom: 15px">
        <div class="col text-right" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
          <small style="font-size: 10px;">{{ $t('profile.favorite_estate_desc') }}</small>
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
        <div class="row">
          <HouseCard1
            v-for="item in lst_estate.slice(0,50)"
            :key="item.estate_id"
            :estate_id="item.estate_id"
            :project_id="item.project_id"
            :address="item.state + ' | ' + item.city"
            :title="item.title"
            :price="item.prices[0].price_value"
            :price_unit="item.prices[0].unit_title"
            :images="item.galleris"
            :properties="item.properties"
            :is_viewed="item.is_use"
            :area_space="item.area_space_all"
            :floor="item.floor_number_title"
            :room="item.room_number_title"
            :is_like="item.is_like"
            :is_ifram_360="item.is_ifram_360"
            :is_matterport="item.is_matterport"
            :is_special="item.is_special"
            :land_use="item.land_use_sumery"
            :province="item.state"
            :neghbourhod="item.neghbourhod"
            :city="item.city"
            radius="none"
            path="none"
            :bathroom="item.bathroom"
            :use_status="item.use_status"
            :age_biulding="item.age_biulding"
            :urlHelper="item.urlHelper"
          ></HouseCard1>
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
      this.$router.push(this.localePath({ path: '/detail/'+house_id }))
    }
    , gotoedit(house_id) {
      this.$router.push(this.localePath({ path: '/edit', query: { estate: house_id } }))
    }
    , fetch_estate () {
      this.is_loading = true;
      this.$axios.$post('list_estate_like',{
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
