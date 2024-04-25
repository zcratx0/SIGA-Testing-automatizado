import { test, expect } from '@playwright/test';
import { exitCode } from 'process';


test('BFM-55', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
   
    await page.getByRole('row', { name: 'mario.godino@.utec.edu.uy' }).getByRole('button').click();
    await page.locator('#telefono').click();
    await page.locator('#telefono').fill('09901115');
    await page.getByRole('button', { name: 'MODIFICAR' }).click();
    await page.getByLabel('ITR').selectOption('135');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'MODIFICAR' }).click();
    await expect(page.locator('#telefono')).toHaveValue('09901115');
    await page.waitForTimeout(1500);
});



test('BFM-58', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
   
    await page.getByRole('row', { name: 'mario.godino@.utec.edu.uy' }).getByRole('button').click();
    

    await page.getByPlaceholder('APELLIDO DEL USUARIO.').fill('Godiño');
    await page.getByPlaceholder('NOMBRE DEL USUARIO.').click();
    await page.getByPlaceholder('NOMBRE DEL USUARIO.').fill('Mariolo');
    await page.locator('#fecNac').fill('1973-09-07');
    await page.getByPlaceholder('VA TEL EL DEL USUARIO').click();
    await page.getByPlaceholder('VA TEL EL DEL USUARIO').fill('09901114');
    await page.getByLabel('Departamento').selectOption('CERRO_LARGO');
    await page.getByLabel('Localidad').selectOption('98');
    await page.getByLabel('ITR').selectOption('134');
    page.on('dialog', dialog => dialog.accept());  
    await page.getByPlaceholder(' MAIL DEL USUARIO.').fill('mario@gmail.com');
    await page.getByRole('button', { name: 'MODIFICAR' }).click();

    await expect(page.getByPlaceholder('NOMBRE DEL USUARIO.')).toHaveValue('Mariolo');
    await page.getByPlaceholder('APELLIDO DEL USUARIO.').click();
    await expect(page.getByPlaceholder('APELLIDO DEL USUARIO.')).toHaveValue('Godiño');
    await expect(page.locator('#fecNac')).toHaveValue('1973-09-07');
    await expect(page.getByPlaceholder('VA TEL EL DEL USUARIO')).toHaveValue('09901114');
    await expect(page.getByLabel('Departamento')).toHaveValue('CERRO_LARGO');
    await expect(page.getByLabel('Localidad')).toHaveValue('63');
    await expect(page.getByPlaceholder(' MAIL DEL USUARIO.')).toHaveValue('mario@gmail.com');
 

    await page.getByRole('button', { name: 'MODIFICAR' }).click();
    await expect(page.locator('#telefono')).toHaveValue('09901115');
    await page.waitForTimeout(1500);
});

test('BFM-59', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
    
    page.on('dialog', dialog => dialog.accept());    
    await page.getByRole('row', { name: 'yhan.duarte@.utec.edu.uy' }).getByRole('combobox').selectOption('0');
    await expect(page.getByRole('row', { name: 'yhan.duarte@.utec.edu.uy' }).getByRole('combobox')).toHaveValue('0');
   
    await page.waitForTimeout(1500);
});



test('BFM-60', async ({page}) => {
    var user = 'mario.godino';
    var pass = 'Contrasenia1'
    await page.goto('login');
      
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(pass);

    await page.click('button[type="submit"]');

    await page.getByRole('link', { name: 'LISTA USUARIOS' }).click();
    
    page.on('dialog', dialog => dialog.accept());    
    await page.getByRole('row', { name: 'yhan.duarte@.utec.edu.uy' }).getByRole('combobox').selectOption('0');
    await expect(page.getByRole('row', { name: 'yhan.duarte@.utec.edu.uy' }).getByRole('combobox')).toHaveValue('0');
   
    await page.waitForTimeout(1500);
});

