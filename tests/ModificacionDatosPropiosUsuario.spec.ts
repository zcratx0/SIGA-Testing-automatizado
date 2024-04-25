import { test, expect } from '@playwright/test';
import { exitCode } from 'process';



test('BFM-64', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'PERFIL' }).click();

    await page.getByPlaceholder('VA TEL EL DEL USUARIO').fill('09901115');
    await page.getByLabel('Departamento').selectOption('SAN_JOSE');
    await page.getByPlaceholder(' MAIL DEL USUARIO.').fill('mario@hotmail.com');
    await page.getByRole('button', { name: 'MODIFICAR' }).click();
    await expect(page.getByPlaceholder('VA TEL EL DEL USUARIO')).toHaveValue('09901115');
    await expect(page.getByLabel('Departamento')).toHaveValue('SAN_JOSE');
    await expect(page.getByPlaceholder(' MAIL DEL USUARIO.')).toHaveValue('mario@hotmail.com');
    
    await page.waitForTimeout(1500);
});

