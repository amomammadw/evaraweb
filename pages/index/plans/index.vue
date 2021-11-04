<template>
  <div>
    <!-- My Plans -->
    <div v-if="show_my_list === true">
      <div class="row cl_custom_2" >
        <div class="col text-center">

          <p style="font-size: 32px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            {{ $t('plans.lst_title') }}
          </p>
          <p v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            {{ $t('plans.lst_desc') }}
          </p>

        </div>
      </div>
      <div class="container">

        <div class="row cl_custom_2">
          <div class="col"></div>
          <div class="col-3 text-center" v-for="itm in my_plans">
            <div class="card card_plan" style="cursor: default">
              <div class="card-body">
                <p class="text-right" style="font-size: 16px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                  {{ itm.title }}
                </p>
                <div class="row">
                  <div class="col">
                    <p v-for="sub in itm.plan_item_aray" class="text-right" style="font-size: 12px;color: #bbbbbb;padding-right: 10px" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                      {{ sub.item_title }}
                    </p>
                  </div>
                </div>
                <p class="text-center" style="font-size: 14px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                  {{ $t('plans.lst_remain') }} {{ itm.remaining }} {{ $t('plans.lst_day') }}
                </p>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>

        <div class="row" style="margin-top: 40px;">
          <div class="col text-center">
            <button type="button" class="btn btn-success Greenbtn" @click="show_my_list = !show_my_list"> {{ $t('plans.lst_btn_buy') }} </button>
          </div>
        </div>

      </div>
    </div>

    <!-- New Plan -->
    <div v-if="show_my_list === false">
      <div class="row cl_custom_2" >
        <div class="col text-center">

          <p style="font-size: 32px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            {{ $t('plans.title') }}
          </p>
          <p v-bind:class="[{'Estedad_FD_Light' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Light' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
            {{ $t('plans.desc') }}
          </p>

        </div>
      </div>
      <div class="container">

        <div class="row cl_custom_2">
          <div class="col"></div>
          <div class="col-3 text-center" v-for="itm in lst_plans">
            <div class="card card_plan" @click="select_plan(itm.plan_id , itm.type_of_plan)" v-bind:class="[{'selected_plan' : selected_item === itm.plan_id }]">
              <div class="card-body">
                <p class="text-right" style="font-size: 16px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                  {{ itm.plan_title }}
                </p>
                <div class="row">
                  <div class="col">
                    <p v-for="sub in itm.plan_item" class="text-right" style="font-size: 12px;color: #bbbbbb;padding-right: 10px" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                      {{ sub.item_title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>

        <div class="row cl_custom_2" v-if="lst_price.length > 0" style="margin-top: 40px;">
          <div class="col text-right" style="">
            <p style="font-size: 16px;" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
              {{ $t('plans.select_price') }}
            </p>
          </div>
        </div>

        <div class="row cl_custom_2">
          <div class="col"></div>
          <div class="col-4 text-center" v-for="itm in lst_price">
            <div class="card" @click="select_price(itm.id)" v-bind:class="[{'selected_plan' : selected_price === itm.id }]" >
              <div class="card-body">
                <div class="row" style="direction: rtl">

                  <div class="col-4">
                    <p class="text-right m-auto" style="font-size: 24px;" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                      {{ itm.priod }}
                      <span style="font-size: 14px;color: #bbbbbb;" > ماه </span>
                    </p>
                  </div>

                  <div class="col">
                    <p class="text-left m-auto" style="font-size: 24px;" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr'}]">
                      {{ itm.price }}
                      <span style="font-size: 14px;color: #bbbbbb;" > لیر </span>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>

        <div class="row" style="margin-top: 40px;" >
          <div class="col text-center">
            <button type="button" class="btn btn-success Greenbtn" @click="show_my_list = !show_my_list"> {{ $t('plans.lst_show_my_plans') }} </button>
            <button type="button" class="btn btn-success Greenbtn" v-if="selected_price != -1" @click="save_plan"> {{ $t('plans.btn_buy') }} </button>

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
      my_plans : []
      , lst_plans : []
      , lst_price : []
      , show_my_list : false
      , selected_item : -1
      , selected_item_type_of_plan : -1
      , selected_price : -1
    }
  }
  , methods: {
    gotopage(page) {
      this.$router.push(this.localePath({path: page}));
    }
    , fetch_plans() {
      this.$axios.$post('list_for_sale_plans', {
        language: this.$i18n.locale,
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
      })
        .then((response) => {
          if (response[0].res === 1){
            this.lst_plans = response;
          }
          else if (response[0].res === -5) this.DestroyStorage();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    , select_plan(plan_id,type_of_plan) {
      this.selected_item = plan_id;
      this.selected_item_type_of_plan = type_of_plan;
      this.lst_price = [];

      for (var i = 0 ; i < this.lst_plans.length ; i++){
        if (this.lst_plans[i].plan_id === plan_id){
          this.lst_price = this.lst_plans[i].plan_price;
        }
      }

    }
    , select_price(price_id) {
      this.selected_price = price_id;
    }
    , save_plan() {

      if (parseInt(this.selected_item_type_of_plan) === 2 && parseInt(this.$storage.getUniversal('type_of_user')) !== 2){
        this.gotopage('/plans/agency')
      }else{
        this.$axios.$post('add_estate_plan', {
          language: this.$i18n.locale,
          token : this.$storage.getUniversal('token'),
          currency: this.$storage.getUniversal('currency') ,
          plan_price_id: this.selected_price,
        })
          .then((response) => {

            if (response[0].res === 1){

              this.$ga.event({
                eventCategory: 'choosePlan',
                eventAction: 'click',
                eventLabel: 'Buy Plan',
                eventValue: this.selected_price,
              })

              this.$toast.success(response[0].msg);
              this.$router.push(this.localePath({path: '/profile'}));
            }
            else if (response[0].res === -5) this.DestroyStorage();
            else {
              this.$toast.error(response[0].msg);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }

    }
    , active_plan(){
      this.$axios.$post('user_active_plan', {
        token : this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        language: this.$i18n.locale
      })
        .then((response) => {
          this.my_plans = [];
          if (response[0].res == 1){
            this.my_plans = response[0].active_plan_array;

            if (response[0].active_plan_array.length > 0){
              this.show_my_list = true;
            }else{
              this.show_my_list = false;
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
      if (this.ExistStorage() === false) this.$router.push(this.localePath({path: '/'}));
      else{
        this.fetch_plans();
        this.active_plan();
      }
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.auth();
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

.selected_plan {
  border: solid 1px #0edf9b;
  box-shadow: 0 0 4px 0 #0edf9b;
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
