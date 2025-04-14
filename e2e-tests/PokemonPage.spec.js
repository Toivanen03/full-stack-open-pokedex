const { test, expect } = require('@playwright/test')

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be opened', async ({ page }) => {
    await page.goto('')
    const link = (await page.locator('.list-item').first().innerText()).toLowerCase()
    await expect(page.getByText(`${link}`)).toBeVisible()
    await page.goto(`/pokemon/${link}`)
    await expect(page.getByText('overgrow')).toBeVisible()
  })
})