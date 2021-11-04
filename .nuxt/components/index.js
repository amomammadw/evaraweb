export { default as Fab } from '../..\\components\\fab.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as SharingModal } from '../..\\components\\sharing-modal.vue'
export { default as SocialHead } from '../..\\components\\SocialHead.vue'
export { default as HouseCardMap } from '../..\\components\\house\\card-map.vue'
export { default as HouseCardSuggest } from '../..\\components\\house\\card-suggest.vue'
export { default as HouseCard1 } from '../..\\components\\house\\card1.vue'
export { default as MenuTop } from '../..\\components\\menu\\top.vue'
export { default as MenuTopLTR } from '../..\\components\\menu\\topLTR.vue'
export { default as ProfileMenuRightSide } from '../..\\components\\profile\\menu-Right_side.vue'
export { default as IndexFaq } from '../..\\components\\index\\faq.vue'
export { default as IndexHeader } from '../..\\components\\index\\header.vue'
export { default as IndexInfoItem } from '../..\\components\\index\\info-item.vue'
export { default as IndexInfo } from '../..\\components\\index\\info.vue'
export { default as IndexLastestates } from '../..\\components\\index\\lastestates.vue'
export { default as IndexMag } from '../..\\components\\index\\mag.vue'
export { default as IndexSuggestion1 } from '../..\\components\\index\\suggestion1.vue'
export { default as IndexSuggestion2 } from '../..\\components\\index\\suggestion2.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
