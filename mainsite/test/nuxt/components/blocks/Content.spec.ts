import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BlocksContent from '~/components/blocks/Content.vue'

describe('BlocksContent', () => {
  it('should render component', async () => {
    const component = await mountSuspended(BlocksContent)
    expect(component.exists()).toBe(true)
  })  
})
