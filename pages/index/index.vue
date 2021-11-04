<template>

  <div class="container-fluid p-0">
    <!-- TOP Header BOX -->
    <IndexHeader/>

    <!-- Suggestion 1 -->
    <IndexSuggestion1 :lst_estate="lst_special_estate"/>

    <!-- Evara Info's -->
    <IndexInfo/>

    <!-- Suggestion 2 -->
    <IndexSuggestion2 :lst_estate="lst_special_estate"/>

    <!-- Latest Estates -->
    <IndexLastestates :lst_estate="lst_estate" @more="fetch_more"/>

    <!-- Mag -->
    <IndexMag v-if="$i18n.locale == 'fa'"/>

    <!-- FAQ -->
    <IndexFaq/>

  </div>

</template>

<script>



export default {
  data() {
    return {
      lst_estate: [],
      lst_special_estate: [],
      lst_projects: [],
      house_showing_counter: 9,
      more_counter: 6,
    };
  }
  , methods: {

    fetch_estate() {
      console.log('fetch_estate Called ' )

      this.$axios.$post('list_of_estate_customer', {
        language: this.$i18n.locale,
        token: this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        last_id: -1,
        count: this.house_showing_counter,
      })
        .then((response) => {


          if (response[0].res === -5) {
            this.DestroyStorage();
            this.$router.push(this.localePath({path: '/'}));
          }

          this.lst_estate = response;
        })
        .catch((error) => {
          console.log(error);

          // this.fetch_estate();
        });
    }
    , fetch_special_estate() {

      this.$axios.$post('list_of_special_estate', {
        language: this.$i18n.locale,
        token: this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        last_id: -1,
        count: this.house_showing_counter,
      })
        .then((response) => {


          if (response[0].res === -5) {
            this.DestroyStorage();
            this.$router.push(this.localePath({path: '/'}));
          }

          this.lst_special_estate = response;
        })
        .catch((error) => {
          console.log(error);

          // this.fetch_special_estate();
        });
    }
    , fetch_projects() {

      this.$axios.$post('list_of_project_customer', {
        language: this.$i18n.locale,
        token: this.$storage.getUniversal('token'),
        currency: this.$storage.getUniversal('currency') ,
        last_id: -1,
        count: this.house_showing_counter,
      })
        .then((response) => {


          if (response[0].res === -5) {
            this.DestroyStorage();
            this.$router.push(this.localePath({path: '/'}));
          }

          this.lst_projects = response;
        })
        .catch((error) => {
          console.log(error);

          // this.fetch_projects();
        });
    }
    , fetch_more() {
      this.house_showing_counter = this.house_showing_counter + this.more_counter;
      this.fetch_estate();
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
    window.scrollTo(0, 0);
    this.$ga.page(this.$router)
    this.fetch_estate();
    this.fetch_special_estate();
    this.fetch_projects();
  }
  , beforeMount() {
  }
}
</script>

<style scoped>

</style>

