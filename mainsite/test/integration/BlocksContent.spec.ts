import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BlocksContent from '~/components/blocks/Content.vue'
import BlocksSectionContainer from '~/components/blocks/SectionContainer.vue'

describe.skip('Integration BlocksContent', () => {
  it('should render component', async () => {
    const component = defineComponent({
      template: `
      <BlocksContent>
        <BlocksSectionContainer>
          <template #title>
            Test
          </template>
        </BlocksSectionContainer>
      </BlocksContent>
      `,
      components: {
        'BlocksContent': BlocksContent,
        'BlocksSectionContainer': BlocksSectionContainer
      } 
    })
    const wrapper = await mountSuspended(component)
    expect(wrapper.html()).toContain('Test')
  })  
})
