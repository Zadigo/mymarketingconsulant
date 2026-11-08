import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import GridsTwo from '~/components/grids/Two.vue'
import StickySection from '~/components/grids/StickySection.vue'
import GridsSingle from '~/components/grids/Single.vue'
import FakeButton from '~/components/FakeButton.vue'
import SectionTextContent from '~/components/grids/SectionTextContent.vue'
import Text from '~/components/grids/Text.vue'

describe('GridsTwo', () => {
  it('should render component', async () => {
    const component = await mountSuspended(GridsTwo, {
      props: {
        to: '/'
      }
    })
    expect(component.exists()).toBe(true)

    const titleEl = component.find('h3')
    expect(titleEl.exists()).toBe(true)
  })  
})

describe('GridsSingle', () => {
  it('should render component', async () => {
    const component = await mountSuspended(GridsSingle)
    expect(component.exists()).toBe(true)

    const titleEl = component.find('h3')
    expect(titleEl.exists()).toBe(true)

    const fakeButtonsEl = component.findAllComponents(FakeButton)
    expect(fakeButtonsEl.length).toBeGreaterThan(0)
  })
})

describe('SectionTextContent', () => {
  it('should render component', async () => {
    const component = await mountSuspended(SectionTextContent, {
      props: {
        to: '/',
        showCta: true
      }
    })
    expect(component.exists()).toBe(true)

    const titleEl = component.find('h2')
    expect(titleEl.exists()).toBe(true)

  })
  
  it.each(
    [
      {
        title: 'all parameters',
        to: '/',
        showCta: true
      },
      {
        title: 'no cta',
        to: '/',
        showCta: false
      },
      {
        title: 'no "to"',
        to: '',
        showCta: true
      }
    ]
  )('should render with $title', async ({ to, showCta }) => {
    const component = await mountSuspended(SectionTextContent, {
      props: { to, showCta }
    })
    expect(component.exists()).toBe(true)

    if (showCta) {
      if (to === '') {
        // When there is no to, @nuxt/ui returns a button 
        // instead of a link
        expect(component.find('button').exists()).toBe(true)
      } else {
        const linkEl = component.find('a')
        
        expect(linkEl.exists()).toBe(true)
        expect(linkEl.attributes('href')).toBe(to)  
      }
    } else {
      expect(component.find('a').exists()).toBe(false)
      expect(component.find('button').exists()).toBe(false)
    }
  })
})

describe('StickySection', () => {
  it('should render component', async () => {
    const component = await mountSuspended(StickySection, {
      props: {
        to: '/'
      }
    })
    expect(component.exists()).toBe(true)

    const linkEl = component.find('a')
    expect(linkEl.exists()).toBe(true)
    expect(linkEl.attributes('href')).toBe('/')
  })
  
  it('should have four articles', async () => {
    const component = await mountSuspended(StickySection, {
      props: {
        to: '/'
      }
    })
    
    const articlesEl = component.findAll('article')
    expect(articlesEl.length).toBe(4)
    
    articlesEl.forEach(article => {
      const titleEl = article.find('h3')
      expect(titleEl.exists()).toBe(true)
    })  
  })
})

describe('Text', () => {
  it('should render component', async () => {
    const component = await mountSuspended(Text)
    expect(component.exists()).toBe(true)

    const divImageEl = component.find('div[style]')
    expect(divImageEl.exists()).toBe(true)
    expect(divImageEl.attributes('style')).toBeDefined()
    expect(divImageEl.attributes('style')).includes('url(')
  })
})
