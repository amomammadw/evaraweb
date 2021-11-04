<template>
  <div>
    <script src="https://apis.google.com/js/api:client.js"></script>
    <!--    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>-->
    <!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>-->
    <!--    <script language="JavaScript" src="https://www.geoplugin.net/javascript.gp" type="text/javascript"></script>-->

    <script type="text/javascript">
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || { widgetcode:'6ecd36770efd5b7db196f0f7780f6de0651c00afe079fcf4c0158091beff62ef', values : {} , ready:function(){} };
      var d = document;
      s = d.createElement('script');
      s.type = 'text/javascript';
      s.id = 'zsiqscript';
      s.defer = true;
      s.src = 'https://salesiq.zoho.com/widget';
      t = d.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s,t);
      // var ht='<div id="zsiqwidget"></div>';
      // d.write(ht);
      $zoho.salesiq.ready = function(embedinfo)
      {
        $zoho.salesiq.customfield.add(
          {
            'name' : '_default.phone',
            'hint' : 'لطفا شماره تلفن معتبر خود را به انگلیسی وارد کنید',
            'required' : 'false'
          });
      }
    </script>



<!--    <client-only>-->
    <Nuxt />
<!--    </client-only>-->
    <!-- Developed by NSDco - Copyright (c) 2020 Evara.life, ( Project Admin : Amir Massoud Moradi) (FrontEnd : Ahmad Ghanavati) (BackEnd : mis.Mohammadi) (Design : mr.Mahmoodi) -->
  </div>
</template>


<script>
export default {
  mounted: function () {
    window.scrollTo(0, 0);
  }
  , created() {
    if (!this.$storage.getUniversal('currency')){
      this.$storage.setUniversal('currency', 2 )
      this.$storage.setUniversal('currency-object', {id:2,title:'lira/لیر'});
    }
  }
  , head() {
    return {
      script: [
        {src: 'https://code.jquery.com/jquery-3.6.0.min.js'},
        {src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'},
        // {src: 'js/jquery-3.6.0.min.js'},
        // {src: 'js/bootstrap.bundle.min.js'},
      ]
    }
  }
}
</script>

<style>

.pagination_vue {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  border-radius: 15px;
  text-align: center;
  margin: auto;
  border: solid 1px #707070;
  width: fit-content;
  padding: 2px 0;
  background: white;
  float: right;
}

.pagination_vue li{
  position: relative;
  display: block;
  padding: .5rem .75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #757575;
  /*background-color: #fff;*/
  /*border: 1px solid #dee2e6;*/
}

.pagination_vue>.active{
  color: #fff;
  /*border: solid 1px #16a085;*/
  background-color: #8cc63f;
  border-radius: 5px;
  margin-right: 1px;
  font-weight: bold;
}


a{
  text-decoration: none;
  color: unset;
}

a:hover{
  text-decoration: none;
  color: unset;
}

::-webkit-input-placeholder { /* Edge */
  color: #a5a5a5;
  font-family: 'Estedad-FD-Light',Tahoma, Sans-Serif !important;
  font-size: 12px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #a5a5a5;
  font-family: 'Estedad-FD-Light',Tahoma, Sans-Serif !important;
  font-size: 12px;
}

::placeholder {
  color: #a5a5a5;
  font-family: 'Estedad-FD-Light',Tahoma, Sans-Serif !important;
  font-size: 12px;
}



.v-bs-searchbox .form-control[data-v-138dff1d] {
  font-size: 12px !important;
}

.v-dropdown-container ul {
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  height: 115px !important;
}

.v-dropdown-container ul::-webkit-scrollbar {
  background-color:#fff;
  width:12px
}
.v-dropdown-container ul::-webkit-scrollbar-track {
  background-color:#fff
}
.v-dropdown-container ul::-webkit-scrollbar-thumb {
  background-color:#babac0;
  border-radius:16px;
  border:4px solid #fff
}
.v-dropdown-container ul::-webkit-scrollbar-button {display:none}

.v-dropdown-item{
  font-size: 10px  !important;
  line-height: 12px !important;
}

.v-dropdown-item {
  text-align: center !important;
}

button:focus {
  outline: none !important;
}



/* total width */
body::-webkit-scrollbar {
  background-color:#fff;
  width:16px
}

/* background of the scrollbar except button or resizer */
body::-webkit-scrollbar-track {
  background-color:#fff
}

/* scrollbar itself */
body::-webkit-scrollbar-thumb {
  background-color:#babac0;
  border-radius:16px;
  border:4px solid #fff
}

/* set button(top and bottom of the scrollbar) */
body::-webkit-scrollbar-button {display:none}




body{
  overflow-x: hidden;
}

</style>
