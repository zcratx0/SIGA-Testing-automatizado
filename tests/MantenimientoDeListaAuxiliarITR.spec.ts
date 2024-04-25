import { test, expect } from '@playwright/test';
import { exitCode } from 'process';

test('BFM-69', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA ITR\'s' }).click();
    
    await page.getByRole('button', { name: 'CREAR ITR' }).click();
    await page.getByRole('textbox', { name: 'Ingresar nombre' }).fill('Sede Maldonado');
    await page.locator('#dialogNew #localidad').selectOption('MALDONADO');
    await page.getByRole('button', { name: 'Guardar' }).click();
    await expect(page.getByRole('cell', { name: 'Sede Maldonado' })).toBeVisible();
    
    await page.waitForTimeout(1500);
});



test('BFM-71', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA ITR\'s' }).click();
    
    await page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox').selectOption('0');
    await expect(page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox')).toHaveValue('0');    
    await page.waitForTimeout(1500);
});



test('BFM-72', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA ITR\'s' }).click();
    
    await page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox').selectOption('0');
    
    await page.locator('div').filter({ hasText: 'Atrás' }).nth(1).click();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.getByRole('link', { name: 'REGISTRO' }).click();
    await expect(page.getByLabel('ITR')).not.toHaveValue('133');



    await page.waitForTimeout(1500);
});


test('BFM-73', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA ITR\'s' }).click();
    await page.locator('#estado').selectOption('0');
    await page.getByRole('button', { name: 'FILTRAR' }).click();
    await expect(page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox')).toHaveValue('0');
    await expect(page.getByRole('row', { name: 'Sede Durazno DURAZNO MODIFICAR' }).getByRole('combobox')).not.toBeVisible();

    await page.waitForTimeout(1500);
});


test('BFM-74', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA ITR\'s' }).click();
    await page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox').selectOption('0');
    
    await page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox').selectOption('1');
    await expect(page.getByRole('row', { name: 'Sede Lavalleja LAVALLEJA' }).getByRole('combobox')).toHaveValue('1');

    await page.waitForTimeout(1500);
});





test('BFM-FUTURO', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
    page.on('dialog', dialog => dialog.accept());  

    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA ITR\'s' }).click();
    
    await page.getByRole('button', { name: 'CREAR ITR' }).click();
    await page.getByRole('textbox', { name: 'Ingresar nombre' }).fill('Sede Maldonado');
    await page.locator('#dialogNew #localidad').selectOption('MALDONADO');
    await page.getByRole('button', { name: 'Guardar' }).click();
    await expect(page.getByRole('cell', { name: 'Sede Maldonado' })).toBeVisible();
    
    await page.waitForTimeout(1500);
});
