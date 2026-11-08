import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

type FakePerson = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
}

test.describe('contact page tests', async () => {
  test.describe.configure({ timeout: 60000 })  
  
  test('should be able to contact the marketer', async ({ page }) => {
    await page.goto('/contact')
    
    const fakeValues: FakePerson = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      company: faker.company.name(),
      message: faker.lorem.sentence()
    }

    const inputEl = await page.waitForSelector('placeholder="Firstname"', { timeout: 5000, state: 'attached' })
    await inputEl.fill(fakeValues.firstName)
  
  
    // await page.waitForEvent('load')
  
    // const locator = page.getByRole('textbox', { name: 'Firstname' })
    // locator.fill(fakeValues.firstName)
  
    // Object.keys(fakeValues).forEach(async key => {
    //   const locator = page.getByRole('textbox', { name: key })
    //   // await expect(locator).toBeVisible()
    //   // await expect(locator).toHaveValue('')
    //   // await expect(locator).toBeEditable()
  
    //   await locator.fill(fakeValues[key as keyof FakePerson])
    // })
  })
})


