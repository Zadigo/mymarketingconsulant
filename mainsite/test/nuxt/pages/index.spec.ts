import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, vi } from 'vitest'
import Button from '@nuxt/ui/components/Button.vue'
import IndexPage from '~/pages/index.vue'
import BaseFooter from '~/components/BaseFooter.vue'

vi.mock('~/components/blocks/Content.vue', () => ({
  default: defineComponent({
    template: '<div>Mocked Content Component</div>'
  })
}))

vi.mock('~/components/blocks/Brands.vue', () => ({
  default: defineComponent({
    template: '<div>Mocked Brands Component</div>'
  })
}))

vi.mock('~/components/BottomCta.vue', () => ({
  default: defineComponent({
    template: '<div>Mocked Bottom CTA</div>'
  })
}))

vi.mock('~/components/BaseFooter.vue', () => ({
  default: defineComponent({
    name: 'BaseFooter',
    template: '<div>Mocked Footer</div>'
  })
}))

describe('IndexPage', () => {
  it('should render index page', async () => {
    const component = await mountSuspended(IndexPage)
    expect(component).toBeDefined()

    const footerEl = component.findComponent(BaseFooter)
    expect(footerEl.exists()).toBe(true)
    console.log(component.html())
  })

  it('should have lead and cta actions', async () => {
    const component = await mountSuspended(IndexPage)
    const leadEl = component.find('#lead')

    expect(leadEl.exists()).toBeTruthy()

    const buttonEl = component.findAllComponents(Button)
    expect(buttonEl.length).toBeGreaterThan(0)

    buttonEl.forEach((button) => {
      expect(button.text()).not.toBe('')
    })
  })
})
