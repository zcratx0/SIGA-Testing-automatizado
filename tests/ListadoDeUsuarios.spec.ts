import { test, expect } from '@playwright/test';
import { exitCode } from 'process';


test('BFM-50', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
    await page.waitForTimeout(1500);
    await expect(page.getByRole('heading', { name: 'LISTA DE USUARIOS' })).toBeVisible();
   
});

test('BFM-51', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
    await expect(page.getByRole('heading', { name: 'LISTA DE USUARIOS' })).toBeVisible();
    await page.getByLabel('Tipo de usuario').selectOption('ANALISTA');
    await page.getByRole('button', { name: 'FILTRAR' }).click();
    await expect(page.getByRole('cell', { name: 'ANALISTA' }).first()).toBeVisible();
    await expect(page.getByRole('cell', { name: 'ESTUDIANTE', exact: true })).toBeHidden();
    await expect(page.getByRole('cell', { name: 'TUTOR' })).toBeHidden();
    await page.waitForTimeout(1500);

});





test('BFM-52', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
    await page.waitForTimeout(1500);
    await expect(page.getByRole('heading', { name: 'LISTA DE USUARIOS' })).toBeVisible();
    await page.getByLabel('Tipo de usuario').selectOption('ANALISTA');
    
    await page.locator('#itrFiltro').selectOption('134');
    await page.getByRole('button', { name: 'FILTRAR' }).click();
    await expect(page.getByRole('cell', { name: 'Sede Rivera - RIVERA' }).first()).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Sede Robótica - PAYSANDÚ' })).toBeHidden();
    await page.waitForTimeout(1500);

});


/* Tengo que optimizar el codigo para esto
test('BFM-54', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
    await page.waitForTimeout(1500);
    await expect(page.getByRole('heading', { name: 'LISTA DE USUARIOS' })).toBeVisible();
    await page.getByLabel('Tipo de usuario').selectOption('ANALISTA');
    
    await page.locator('#itrFiltro').selectOption('134');
    await page.getByRole('button', { name: 'FILTRAR' }).click();
    await expect(page.getByRole('cell', { name: 'Sede Rivera - RIVERA' }).first()).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Sede Robótica - PAYSANDÚ' })).toBeHidden();
    await page.waitForTimeout(1500);

});
*/