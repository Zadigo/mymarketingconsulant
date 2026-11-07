import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ContactPage from '~/pages/contact.vue'

describe('ContactPage', () => {
  it('should render contact page', async () => {
    const component = await mountSuspended(ContactPage)
    expect(component.exists()).toBe(true)
  })  
})

