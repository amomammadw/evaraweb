<template>


  <div class="row" style="direction: rtl">

    <div class="col-4">
      <div class="Rectangle">
        <img alt="EVARA"  v-if="type==='1'" :src="require(`@/assets/images/evara_icon/3d.png`)" class="ico">
        <svg v-if="type==='2'" xmlns="http://www.w3.org/2000/svg" class="More_icon"  width="49.484" height="42.905" viewBox="0 0 49.484 42.905">
          <g id="noun_Bird_3052320" transform="translate(-606.405 -247.277)">
            <g id="Group_2685" data-name="Group 2685" transform="translate(606.824 247.68)">
              <g id="Group_2684" data-name="Group 2684">
                <g id="Group_2683" data-name="Group 2683">
                  <path id="Path_2147" d="M27.1 30.912c-7.2-3.835-12.3-9.541-19.672-18.386-5.668 14.983 5.46 23.889 12.814 27.939z" class="cls-03" data-name="Path 2147" transform="translate(-5.4 -11.738)"/>
                  <path id="Path_2148" d="M27.917 55.337l8.328-9.027a14.925 14.925 0 0 0 2.325-4.271 5.77 5.77 0 0 0 .249-1.28c.026-.511-.1-.723-.207-.812a.39.39 0 0 0-.071-.045l-.027-.011a.544.544 0 0 0-.075-.026l-.042-.009a.856.856 0 0 0-.1-.013h-.136c-.048 0-.1.006-.156.015-.036.005-.075.013-.114.021-.06.012-.126.029-.2.048-.045.012-.091.026-.141.042-.081.026-.171.061-.264.1-.05.019-.1.036-.149.058-.152.065-.316.14-.5.234a14.5 14.5 0 0 0-3.808 3.192l-7.151 9.965a.268.268 0 0 1-.077.071l-6.515 4.022c-1.288.795-1.91 1.19-1.982 1.477-.214.855.89 2.474 2.685 3.938s3.6 2.215 4.394 1.834c.267-.128.528-.817 1.047-2.239l2.626-7.192a.272.272 0 0 1 .061-.092z" class="cls-03" data-name="Path 2148" transform="translate(-10.549 -24.282)"/>
                  <path id="Path_2149" d="M46.119 52.859L38.146 61.5c5.449 6.386 16.415 15.49 29.948 6.919-10.15-5.437-16.767-9.282-21.975-15.56z" class="cls-03" data-name="Path 2149" transform="translate(-20.223 -30.262)"/>
                  <path id="Path_2150" class="cls-03" d="M53.524 48.972c-10.361-5.547-17.059-9.389-22.283-15.721.067-.1.125-.183.188-.275s.143-.207.209-.306c.078-.117.151-.229.224-.342.062-.095.125-.191.183-.283.07-.111.135-.218.2-.325.052-.086.108-.174.157-.258.064-.109.122-.213.18-.317.043-.077.089-.155.129-.23.058-.108.11-.213.163-.317.034-.067.07-.135.1-.2.053-.109.1-.215.147-.321.025-.057.054-.116.078-.172.049-.116.091-.229.134-.341.016-.043.036-.089.051-.131q.083-.232.149-.458c.4-1.381.359-2.249-.131-2.654s-1.317-.285-2.554.347q-.217.11-.433.239c-.041.024-.083.053-.125.078-.1.064-.208.128-.314.2-.043.029-.087.062-.13.092-.106.074-.212.148-.32.23l-.115.091c-.117.091-.235.183-.355.284l-.085.074c-.134.114-.271.232-.411.359l-.049.046c-.156.142-.316.293-.481.453-.313.3-.641.635-.994 1.008-7.255-3.84-12.369-9.622-19.891-18.657a.268.268 0 0 0-.455.072c-4.515 11.391.112 21.911 12.7 28.921l-6.129 3.782c-1.589.981-2.1 1.315-2.22 1.8-.329 1.316 1.338 3.237 2.866 4.483.14.114.287.227.436.34l.095.071c.146.108.3.214.448.316l.1.065c.147.1.3.193.447.283l.05.031c.159.095.32.183.48.267l.115.06c.159.081.317.156.474.223l.092.037c.15.062.3.117.443.164l.058.02a4.181 4.181 0 0 0 .457.114l.094.017a2.791 2.791 0 0 0 .429.041h.068a1.959 1.959 0 0 0 .281-.026l.089-.017a1.441 1.441 0 0 0 .309-.1c.454-.218.678-.783 1.318-2.538l2.469-6.761c5.9 6.845 12.517 10.345 19.161 10.344a21.244 21.244 0 0 0 11.725-3.74.268.268 0 0 0-.019-.459zm-46.5-37.116C14.4 20.7 19.5 26.407 26.7 30.243L19.838 39.8C12.484 35.745 1.356 26.839 7.024 11.856zM19.687 49.4c-.519 1.422-.78 2.111-1.047 2.239-.795.382-2.6-.372-4.394-1.834s-2.9-3.083-2.685-3.938c.072-.287.694-.682 1.982-1.477l6.515-4.022a.261.261 0 0 0 .077-.071l7.152-9.965a14.489 14.489 0 0 1 3.808-3.192c.183-.094.347-.169.5-.234.053-.023.1-.039.149-.058.093-.036.183-.071.264-.1.05-.016.1-.029.141-.042.069-.019.135-.036.2-.048.039-.008.078-.016.114-.021.057-.008.108-.012.156-.015h.136a.856.856 0 0 1 .1.013l.042.009a.544.544 0 0 1 .075.026l.027.011a.39.39 0 0 1 .071.045c.107.088.233.3.207.812a5.77 5.77 0 0 1-.249 1.28A14.939 14.939 0 0 1 30.7 33.1l-8.329 9.027a.273.273 0 0 0-.055.09zm3.236-7.094l7.977-8.641c5.2 6.279 11.82 10.123 21.97 15.564-13.532 8.571-24.498-.529-29.947-6.918z" data-name="Path 2150" transform="translate(-5 -11.068)"/>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <img alt="EVARA"  v-if="type==='3'" :src="require(`@/assets/images/evara_icon/enlarge.png`)" class="ico">
        <img alt="EVARA"  v-if="type==='4'" :src="require(`@/assets/images/evara_icon/online_support.png`)" class="ico">
        <img alt="EVARA"  v-if="type==='5'" :src="require(`@/assets/images/evara_icon/free.png`)" class="ico">
        <img alt="EVARA"  v-if="type==='6'" :src="require(`@/assets/images/evara_icon/dollar.png`)" class="ico">
      </div>
    </div>

    <div class="col-8 text-right">
      <div class="row"> <div class="col"> <span class="title Estedad_Bold"> {{title}} </span> </div> </div>
      <div class="row"> <div class="col-3 separator"> </div> </div>
      <div class="row">
        <div class="col" v-bind:class="[{'text-right' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'text-left' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]">
          <span class="desc" v-bind:class="[{'Estedad_FD' : $i18n.locale=='fa' || $i18n.locale=='ar' },{'Estedad' : $i18n.locale=='en' || $i18n.locale=='ru' || $i18n.locale=='tr' }]"> {{desc}} </span>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  props: {
    title:String,
    desc: String,
    type: String,
  }
}
</script>

<style scoped>


.cls-03{fill:none;stroke:#fff;stroke-width:.8px}

.separator{
  background: #0ede9b;
  height: 3px;
  border-radius: 1rem;
  margin-right: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.More_icon{
  margin-top: 10px;
  margin-left: 5px;
}

.Rectangle {
  width: 69px;
  height: 69px;
  text-align: center;
  border-radius: 15px;
  margin: auto;
  float: left;
  background-image: linear-gradient(to bottom, #00bb7e, #0ede9b);
}

.ico {
  width: 47px;
  height: 47px;
  object-fit: contain;
  margin-top: 10px;
}

.title{
  width: 172px;
  height: 33px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: right;
  color: #111111;
}

.desc{
  width: 226px;
  height: 73px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  /*text-align: justify !important;*/
  text-align: center !important;
  color: #212529;
}
</style>
