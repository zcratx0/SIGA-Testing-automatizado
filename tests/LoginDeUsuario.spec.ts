import { test, expect } from '@playwright/test';
import { exitCode } from 'process';


test('BFM-61 : Acceso exitoso al sistema con datos válidos.', async ({page}) => {
  var user = "mario.godino"
  var pass = "Contrasenia1"
  await page.goto('login')
  
  await page.locator("#username").fill(user);
  await page.locator("#password").fill(pass);

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('http://localhost:8080/siga-s3-2.0/principal');

  await expect(page.getByRole('heading', { name: 'ANALISTA' })).toBeVisible();
});


test('FM-62 : Acceso al sistema con datos inválidos.', async ({page}) => {
  var user = "mario.godino"
  var pass = "contrasenia"

  await page.goto('login')

  await page.locator("#username").fill(user);
  await page.locator("#password").fill(pass);
  await page.click('button[type="submit"]');
  
  await page.getByText('Credenciales invalidas!').click();
  await expect(page.getByText('Credenciales invalidas!')).toBeVisible();

});

test('BFM-63 : acceso de Usuario en espera de validación y aceptación.', async ({page}) => {
  var user = "matias.sanchez.b"
  var pass = "Contrasenia2"

  await page.goto('login')

  await page.locator("#username").fill(user);
  await page.locator("#password").fill(pass);
  await page.click('button[type="submit"]');

  await page.getByText('Usuario en espera de validación').click();

});

test('BFM-102 : Acceso de Usuario deshabilitado.', async ({page}) => {
  var user = "matias.sanchez.b"
  var pass = "Contrasenia1"

  await page.goto('login')
  await page.locator("#username").fill(user);
  await page.locator("#password").fill(pass);
  await page.click('button[type="submit"]');

  await page.getByText('Usuario deshabilitado!').click();
});