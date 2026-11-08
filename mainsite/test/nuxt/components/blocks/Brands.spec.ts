import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BlocksBrands from '~/components/blocks/Brands.vue'

describe('BlocksBrands', () => {
  it('should render component', async () => {
    const component = await mountSuspended(BlocksBrands)
    expect(component.exists()).toBe(true)
  })

  it('should have twelve brand images', async () => {
    const component = await mountSuspended(BlocksBrands)
    const imageEls = component.findAll('img')
    expect(imageEls.length).toBe(12)

    imageEls.forEach((image) => {
      expect(image.attributes('src')).toBeDefined()
      expect(image.attributes('alt')).toBeDefined()
    })
  })
})

