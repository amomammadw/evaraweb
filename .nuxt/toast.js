import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"C:\\Users\\amomammadw\\Downloads\\Telegram Desktop\\Web\\node_modules\\vue-toastification\\dist\\index.css","position":"bottom-right","timeout":5000,"closeOnClick":true,"pauseOnFocusLoss":true,"pauseOnHover":true,"draggable":true,"draggablePercent":0.6,"showCloseButtonOnHover":true,"hideProgressBar":false,"closeButton":"button","rtl":true});
  inject('toast', toast);
}
