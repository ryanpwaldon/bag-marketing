export default () => {
  if (process.env.VUE_APP_ENV !== 'production') return
  const el = document.createElement('script')
  el.setAttribute('async', '')
  el.setAttribute('src', '//gc.zgo.at/count.js')
  el.setAttribute('data-goatcounter', 'https://bag.goatcounter.com/count')
  document.body.appendChild(el)
}
