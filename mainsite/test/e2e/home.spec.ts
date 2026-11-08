import { test, expect } from '@playwright/test'

test('should be able to contact the marketer', async ({ page }) => {
  await page.goto('/')

  const firstCta = page.getByRole('link', { name: 'Discutons de votre projet' }).first()
  await firstCta.click()

  await page.waitForURL('**/contact')

  const h1 = page.getByRole('heading', { level: 1 })
  await h1.isVisible()
  expect(await h1.textContent()).toContain('Me contacter')
})
