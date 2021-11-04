<template>
  <div style="direction:rtl" v-bind:class="[{'Estedad_FD_Light' : $i18n.locale == 'fa' || $i18n.locale == 'ar' },{'Estedad_Light' : $i18n.locale == 'en' || $i18n.locale == 'ru' || $i18n.locale == 'tr' }]">

    <!-- Header -->
    <client-only>
      <MenuTop v-if="$i18n.locale == 'fa' || $i18n.locale == 'ar'"/>
      <MenuTopLTR v-else/>
    </client-only>
    <!-- +++++++ -->

    <!-- Content -->
      <vue-page-transition name="fade-in-right">
        <Nuxt/>
      </vue-page-transition>
    <!-- +++++++ -->

    <!-- Footer -->
    <client-only>
      <Footer/>
    </client-only>
    <!-- +++++++ -->

    <!-- FAB -->
    <client-only>
    <Fab/>
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
          // this.$router.push({path: '/login'})
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
  , head () {
    return {
      title: this.$t('siteTitle.main')
    }
  }
}
</script>

<style scoped>

/* -- WEB --------------- */

.master_dashboard{
  background-color: #f7f7fa;
  min-height:100vh;
  padding-bottom: 60px;
}

.content-menu-item .badge{
  border-radius: 50%;
  color: #fff;
  background-color: #c8c8c8;
  width: 20px;
  height: 20px;
  padding-top: 7px;
  padding-right: 4px;
  float: left;
}

.content-menu-item.active .badge{
  border-radius: 50%;
  color: #fff;
  background-color: #ffbb00;
  width: 20px;
  height: 20px;
  padding-top: 7px;
  padding-right: 4px;
  float: left;
}
/* --------------- */




/* -- MOB --------------- */

.mob{
  background-color: #f7f7fa;
  min-height: 100vh;
  overflow-x: hidden;
}

.mob-header{
  height: 50px;
  background-color: #fff;
  position:fixed;
  top: 0;
  width:100vw;
  z-index:999;
  box-shadow: 0 5px 20px 0 #0000001a;
}

.mob-footer{
  height: 80px;
  position: fixed;
  width:100vw;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 5px 20px 0 #0000001a;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

/* --------------- */






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

</style>
