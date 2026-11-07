import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AProposPage from '~/pages/a-propos.vue'

describe('AProposPage', () => {
  it('should render page', async () => {
    const component = await mountSuspended(AProposPage)
    expect(component.exists()).toBe(true)
  })  
})
