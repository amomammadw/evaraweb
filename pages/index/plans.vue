<template>
  <div class="container-fluid">

    <div class="row cl_custom_1" :style="{ backgroundImage: 'url(' + require('@/assets/images/other/plan.png') + ')' }" >
      <div class="col"></div>
    </div>

    <!-- Content -->
<!--    <client-only>-->
      <vue-page-transition name="fade-in-right">
        <Nuxt/>
      </vue-page-transition>
<!--    </client-only>-->
    <!-- +++++++ -->

  </div>
</template>

<script>
export default {
  methods: {
     ExistStorage() {
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
    }
  }
  , mounted() {
    window.scrollTo(0,0);
    this.$ga.page(this.$router)
    this.auth();
  }
  , head () {
    return {
      title: 'اوارا | طرح های ویژه',
      meta: [
        {
          hid: 'طرح های ویژه',
          name: 'طرح های ویژه',
          content: 'با خرید طرح از اوارا ، به امکانات ویژه دسترسی پیدا کنید'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'طرح های ویژه',
          template: chunk => `${chunk} - Evara.life`,

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
