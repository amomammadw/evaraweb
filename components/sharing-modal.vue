<template>
  <div>

    <div class="modal fade" id="share_Modal" tabindex="-1" role="dialog" aria-labelledby="share_ModalLabel" aria-hidden="true" style="direction: rtl">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <div style="width: 25px; height: 25px; border-radius: 50%; background-color: #41b4e5;padding-top: 1px;text-align: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="13.364" height="6.682" viewBox="0 0 13.364 6.682">
                <path id="link-h" fill="#fff" d="M6.009 10.341a.668.668 0 0 0 .668.668h4.009a.668.668 0 0 0 0-1.336H6.677a.668.668 0 0 0-.668.668zm1.336 2h-2a2 2 0 0 1 0-4.009h2A.668.668 0 1 0 7.346 7h-2a3.341 3.341 0 0 0 0 6.682h2a.668.668 0 1 0 0-1.336zM12.023 7h-2a.668.668 0 0 0 0 1.336h2a2 2 0 1 1 0 4.009h-2a.668.668 0 0 0 0 1.336h2a3.341 3.341 0 1 0 0-6.682z" transform="translate(-2 -7)"/>
              </svg>
            </div>


            <h5 class="modal-title" style="position: absolute;right: 55px;" id="share_ModalLabel" v-bind:class="[{'Estedad_FD_Bold' : $i18n.locale=='fa' || $i18n.locale=='ar'},{'Estedad_Bold' : $i18n.locale=='en' ||  $i18n.locale=='ru'}]">{{ $t('share.share_an_ad') }}</h5>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col" style="height: 120px;">
                <div class="row mb-3">
                  <div class="col-3">
                    <button style="border-color: #41b4e5;font-size: 14px;height: 39px; padding: .375rem .75rem;" @click.stop.prevent="copyTestingCode" type="button" class="btn btn-outline-primary">{{ $t('share.copy') }}</button>
                  </div>
                  <div class="col">
                    <input type="text" id="testing-code" style="border-color: #5ecc62;color: #5ecc62" class="form-control" v-model="url">
                  </div>
                </div>

                <div class="row">
                  <div class="col"></div>
                  <div class="col-10">

                    <ShareNetwork
                      network="email"
                      :url= "url"
                      :title="title"
                      description=""
                      :quote="title"
                      hashtags="Turkey,RealEstate,املاک,ترکیه"
                    >
                      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #41b4e5;padding-top: 8px;text-align: center;position: relative;display: block;float: left;margin: auto 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27.086 21.5">
                          <g id="mail" transform="translate(-.957 -3.25)">
                            <path id="Path_2153" fill="none" stroke="#fff" stroke-width="1.5px" d="M4.5 4h20A2.507 2.507 0 0 1 27 6.5v15a2.507 2.507 0 0 1-2.5 2.5h-20A2.507 2.507 0 0 1 2 21.5v-15A2.507 2.507 0 0 1 4.5 4z" class="cls-1" data-name="Path 2153"/>
                            <path id="Path_2154" fill="none" stroke="#fff" stroke-width="1.5px" d="M27 6l-12.5 8.606L2 6" class="cls-1" data-name="Path 2154" transform="translate(0 .459)"/>
                          </g>
                        </svg>
                        <p style="margin: 15px auto;color: #8b8b8b;font-size: 12px;">{{ $t('share.email') }}</p>
                      </div>
                    </ShareNetwork>


                    <ShareNetwork
                      network="facebook"
                      :url= "url"
                      :title="title"
                      description=""
                      :quote="title"
                      hashtags="Turkey,RealEstate,املاک,ترکیه"
                    >
                      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #3b5998;padding-top: 8px;text-align: center;position: relative;display: block;float: left;margin: auto 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.918" height="22.096" viewBox="0 0 12.918 22.096">
                          <path id="facebook" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7px" d="M18.218 2h-3.06a5.1 5.1 0 0 0-5.1 5.1v3.059H7v4.079h3.059V22.4h4.079v-8.162H17.2l1.02-4.079h-4.081V7.1a1.02 1.02 0 0 1 1.02-1.02h3.059z" transform="translate(-6.15 -1.15)"/>
                        </svg>
                        <p style="margin: 15px auto;color: #8b8b8b;font-size: 10px;">{{ $t('share.facebook') }}</p>
                      </div>
                    </ShareNetwork>


                    <ShareNetwork
                      network="twitter"
                      :url= "url"
                      :title="title"
                      description=""
                      :quote="title"
                      hashtags="Turkey,RealEstate,املاک,ترکیه"
                    >
                      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #1da1f2;padding-top: 8px;text-align: center;position: relative;display: block;float: left;margin: auto 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.838" viewBox="0 0 23.7 19.838">
                          <path id="twitter" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7px" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" transform="translate(-.15 -2.064)"/>
                        </svg>
                        <p style="margin: 15px auto;color: #8b8b8b;font-size: 12px;">{{ $t('share.twitter') }}</p>
                      </div>
                    </ShareNetwork>

                    <ShareNetwork
                      network="telegram"
                      :url= "url"
                      :title="title"
                      description=""
                      :quote="title"
                      hashtags="Turkey,RealEstate,املاک,ترکیه"
                    >
                      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #0088cc;padding-top: 8px;text-align: center;position: relative;display: block;float: left;margin: auto 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 26.582 24.095">
                          <path id="telegram" fill="#fff" d="M26.582 0L0 11.3l6.968 2.766 2.481 9.325 4.568-4.426 7.431 5.135zM9.811 15.26l-.268 2.431-1.03-3.873 9.7-6.609zm8.722-10.149l-11.011 7.5-3.43-1.361zM10.87 19.846l.314-2.84 1.528 1.056zm.91-4.318L24.222 3.611 20.413 21.49zm0 0"/>
                        </svg>
                        <p style="margin: 15px auto;color: #8b8b8b;font-size: 12px;">{{ $t('share.telegram') }}</p>
                      </div>
                    </ShareNetwork>

                    <ShareNetwork
                      network="whatsapp"
                      :url= "url"
                      :title="title"
                      description=""
                      :quote="title"
                      hashtags="Turkey,RealEstate,املاک,ترکیه"
                    >
                      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #25d366;padding-top: 8px;text-align: center;position: relative;display: block;float: left;margin: auto 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25.114 25.114">
                          <g id="whatsapp">
                            <path id="Path_2155" d="M105.589 124.07a7.1 7.1 0 0 1-1.486-.168 14.553 14.553 0 0 1-9.241-7.549c-.79-1.813-.742-3.4.135-4.468.025-.031.025-.031 1.524-1.553l.6-.609 3.309 4.388-1.168 1.422a10.3 10.3 0 0 0 4.781 3.906l1.177-1.433 4.889 2.472-.468.689c-1.147 1.692-1.147 1.692-1.173 1.723a3.565 3.565 0 0 1-2.878 1.179zm-9.471-11.233c-.484.614-.45 1.68.094 2.93a13.111 13.111 0 0 0 8.2 6.7c1.335.286 2.389.109 2.9-.485l.643-.947-2.346-1.186-1.136 1.383-.511-.222a12.3 12.3 0 0 1-6.228-5.088l-.319-.456 1.144-1.394-1.586-2.1-.855.869zm0 0" fill="#fff" data-name="Path 2155" transform="translate(-89.678 -104.341)"/>
                            <path id="Path_2156" d="M.017 25.113l2.329-5.3A12.5 12.5 0 0 1 3.678 3.668a12.58 12.58 0 0 1 17.758 0 12.524 12.524 0 0 1-8.879 21.38 12.517 12.517 0 0 1-6.717-1.941zm6.032-3.631l.3.206A11.11 11.11 0 0 0 20.4 20.342a11.057 11.057 0 0 0-7.843-18.875 11.05 11.05 0 0 0-8.784 17.8l.266.344-1.326 3.02zm0 0" fill="#fff" data-name="Path 2156"/>
                          </g>
                        </svg>
                        <p style="margin: 15px auto;color: #8b8b8b;font-size: 12px;">{{ $t('share.whatsapp') }}</p>
                      </div>
                    </ShareNetwork>

                    <ShareNetwork
                      network="linkedin"
                      :url= "url"
                      :title="title"
                      description=""
                      :quote="title"
                      hashtags="Turkey,RealEstate,املاک,ترکیه"
                    >
                      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #0077b5;padding-top: 8px;text-align: center;position: relative;display: block;float: left;margin: auto 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 21.5 20.5">
                          <g id="linkedin" transform="translate(-1.25 -1.25)">
                            <path id="Path_2151" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" data-name="Path 2151"/>
                            <path id="Rectangle_2209" d="M0 0H4V12H0z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" data-name="Rectangle 2209" transform="translate(2 9)"/>
                            <circle id="Ellipse_324" cx="2" cy="2" r="2" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px"  data-name="Ellipse 324" transform="translate(2 2)"/>
                          </g>
                        </svg>
                        <p style="margin: 15px auto;color: #8b8b8b;font-size: 10px;">{{ $t('share.linkedin') }}</p>
                      </div>
                    </ShareNetwork>

                  </div>
                  <div class="col"></div>
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
  props: {
    title: String,
    desc: String,
  }
  , data() {
    return {
      url: 'https://www.evara.life'+this.$router.currentRoute.fullPath,
    };
  }
  , methods: {
    copyTestingCode () {
      let testingCodeToCopy = document.querySelector('#testing-code')
      testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
      testingCodeToCopy.select()
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
      } catch (err) {
        alert('Oops, unable to copy');
      }
    },
  }
  , mounted() {
  }

}
</script>

<style scoped>


.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}

.ico_share_0{
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #41b4e5;
}
</style>
