const components = import.meta.globEager('./*.vue')
const raws = import.meta.globEager<string>('./*.vue', { assert: { type: 'raw' } })

export default Object.keys(components).map((id) => ({
  component: components[id].default,
  raw: raws[id],
  language: 'vue'
}))