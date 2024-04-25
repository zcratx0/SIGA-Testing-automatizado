import { test, expect } from '@playwright/test';
import { exitCode } from 'process';


test('BFM-45', async ({page}) => {
  var nombre = "Andres";
  var apellido = "Baez";
  var cedula = "11111111";
  var fechaNacimiento = "2000-01-01";
  var email = "andresbaez@fake.mail.com";
  var telefono = "099999999";
  var departamento = "COLONIA";
  var localidad = "SANTA REGINA";
  var emailInstitucional = "andres.baezZZZ@estudiantes.utec.edu.uy";
  var itr = "Sede Rivera - RIVERA";
  var genero = "Masculino";
  var rol = "ANALISTA";
  var contrasenia = "Contrasenia1"

  
  await page.goto('register');

  await page.locator("#firstName").fill(nombre);
  await page.locator("#lastName").fill(apellido);
  await page.locator("#documento").fill(cedula);
  await page.locator("#fecNac").fill(fechaNacimiento);
  await page.locator("#email").fill(email);
  await page.locator("#telefono").fill(telefono);
  await page.locator("#departamento").selectOption(departamento);
  await page.locator("#localidad").fill(localidad);
  await page.locator('#password').fill(contrasenia);
  await page.locator('#passwordConfirm').fill(contrasenia);
  await page.locator("#emailUtec").fill(emailInstitucional);
  await page.locator("#itr").selectOption(itr);
  await page.locator("#gender").selectOption(genero);
  await page.locator("#type").selectOption(rol);
  
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page).toHaveURL('http://localhost:8080/siga-s3-2.0/register');
  
  await expect(page.getByRole('heading', { name: 'Usuario registrado' })).toBeVisible();

});


test('BFM-47', async ({page}) => {
  var nombre = "Andres";
  var apellido = "Baez";
  var cedula = "11111111";
  var fechaNacimiento = "2000-01-01";
  var email = "andresbaez@fake.mail.com";
  var telefono = "099999999";
  var departamento = "COLONIA";
  var localidad = "SANTA REGINA";
  var emailInstitucional = "andres.baezZZZ@estudiantes.utec.edu.uy";
  var itr = "Sede Rivera - RIVERA";
  var genero = "Masculino";
  var rol = "ESTUDIANTE";
  var contrasenia = "Contrasenia1"
  var generacion = "2020"
  
  await page.goto('register');

  await page.locator("#firstName").fill(nombre);
  await page.locator("#lastName").fill(apellido);
  await page.locator("#documento").fill(cedula);
  await page.locator("#fecNac").fill(fechaNacimiento);
  await page.locator("#email").fill(email);
  await page.locator("#telefono").fill(telefono);
  await page.locator("#departamento").selectOption(departamento);
  await page.locator("#localidad").fill(localidad);
  await page.locator('#password').fill(contrasenia);
  await page.locator('#passwordConfirm').fill(contrasenia);
  await page.locator("#emailUtec").fill(emailInstitucional);
  await page.locator("#itr").selectOption(itr);
  await page.locator("#gender").selectOption(genero);
  await page.locator("#type").selectOption(rol);
  await page.locator("#generacion").fill(generacion);
  
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);

  //  TODO Cambiar resultado esperado segun como se decida que será el mensaje de error.
  await expect(page).toHaveURL('http://localhost:8080/siga-s3-2.0/register');
  
  await expect(page.getByRole('heading', { name: 'Usuario registrado' })).toBeVisible();

});


test('BFM-49', async ({page}) => {
  var nombre = "Andres";
  var apellido = "Baez";
  var cedula = "11111111";
  var fechaNacimiento = "2000-01-01";
  var email = "andresbaez@fake.mail.com";
  var telefono = "099999999";
  var departamento = "COLONIA";
  var localidad = "SANTA REGINA";
  var emailInstitucional = "andres.baezZZZ@estudiantes.utec.edu.uy";
  var itr = "Sede Rivera - RIVERA";
  var genero = "Masculino";
  var type = "TUTOR";
  var contrasenia = "Contrasenia1"
  var area = "Ciberseguridad"
  var rol = "Tutor"
  
  await page.goto('register');

  await page.locator("#firstName").fill(nombre);
  await page.locator("#lastName").fill(apellido);
  await page.locator("#documento").fill(cedula);
  await page.locator("#fecNac").fill(fechaNacimiento);
  await page.locator("#email").fill(email);
  await page.locator("#telefono").fill(telefono);
  await page.locator("#departamento").selectOption(departamento);
  await page.locator("#localidad").fill(localidad);
  await page.locator('#password').fill(contrasenia);
  await page.locator('#passwordConfirm').fill(contrasenia);
  await page.locator("#emailUtec").fill(emailInstitucional);
  await page.locator("#itr").selectOption(itr);
  await page.locator("#gender").selectOption(genero);
  await page.locator("#type").selectOption(type);
  await page.locator("#area").selectOption(area);
  await page.locator("#rol").selectOption(rol);

  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page).toHaveURL('http://localhost:8080/siga-s3-2.0/register');
  await expect(page.getByRole('heading', { name: 'Usuario registrado' })).toBeVisible();

});


test('BFM-84', async ({page}) => {
  var nombre = "A";
  var apellido = "Baez";
  var cedula = "11111111";
  var fechaNacimiento = "2000-01-01";
  var email = "andresbaez@fake.mail.com";
  var telefono = "099999999";
  var departamento = "COLONIA";
  var localidad = "SANTA REGINA";
  var emailInstitucional = "andres.baezZZZ@estudiantes.utec.edu.uy";
  var itr = "Sede Rivera - RIVERA";
  var genero = "Masculino";
  var type = "ANALISTA";
  var contrasenia = "Contrasenia1"
  
  await page.goto('register');
  
  await page.locator("#lastName").fill(apellido);
  await page.locator("#documento").fill(cedula);
  await page.locator("#fecNac").fill(fechaNacimiento);
  await page.locator("#email").fill(email);
  await page.locator("#telefono").fill(telefono);
  await page.locator("#departamento").selectOption(departamento);
  await page.locator("#localidad").fill(localidad);
  await page.locator('#password').fill(contrasenia);
  await page.locator('#passwordConfirm').fill(contrasenia);
  await page.locator("#emailUtec").fill(emailInstitucional);
  await page.locator("#itr").selectOption(itr);
  await page.locator("#gender").selectOption(genero);
  await page.locator("#type").selectOption(type);


  test.step('Registar el nombre con menos de 2 caracteres', async () => {
    await page.locator("#firstName").fill(nombre);
  });

  await page.locator('#registerBtn').click();
  //  Agregar resultado esperado
  // await expect(page.getByText('resultadoEsperado')).toBeVisible();

  test.step('Registar el nombre con mas de 32 caracteres', async () => {
    nombre = "A".padEnd(33, "A");
    await page.locator("#firstName").fill(nombre);
  });
  //  Agregar resultado esperado
  // await expect(page.getByText('resultadoEsperado')).toBeVisible();
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);

});


test('BFM-86', async ({page}) => {
  var fechaNacimiento = "3535-01-01";
   
  await page.goto('register');

  await page.locator("#fecNac").fill(fechaNacimiento);
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page.getByText('Debe ingresar una fecha de')).toBeVisible();
});




test('BFM-87', async ({page}) => {
  var email = "andresbaez@fake";
  await page.goto('register');
  await page.locator("#email").fill(email);
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page.getByText('Debe ingresar un mail válido.')).toBeVisible();
});



test('BFM-88', async ({page}) => {
  var telefono = "099999999";
  
  await page.goto('register');
  await page.locator("#telefono").fill(telefono);
 
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  //  Agregar validación correspondiente
  await expect(page.getByText('Documento ya utilizado,')).toBeVisible();

});

// 90

test('BFM-91', async ({page}) => {
  var emailInstitucional = "adad";
  
  await page.goto('register');
  await page.locator("#emailUtec").fill(emailInstitucional);
 
  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  //  Agregar validación correspondiente
  await expect(page.getByText('Debe ingresar un email válido')).toBeVisible();
});




test('BFM-92', async ({page}) => {
  var contrasenia = "Contra"
  
  await page.goto('register');

  await page.locator('#password').fill(contrasenia);
  await page.locator('#passwordConfirm').fill(contrasenia);

  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page.getByText('La contraseña debe tener al')).toBeVisible();
});


test('BFM-95', async ({page}) => {
  var nombre = "@@"
  
  await page.goto('register');

  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page.getByText('El nombre debe tener solo contener letras')).toBeVisible();
});

test('BFM-97', async ({page}) => {
  var nombre = "@@"
  
  await page.goto('register');

  await page.locator('#lastName').click();
  await page.waitForTimeout(1500);
  await expect(page.getByText('El apellido debe tener solo contener letras')).toBeVisible();
});







test('BFM-00', async ({page}) => {
  var nombre = "Andres";
  var apellido = "Baez";
  var cedula = "11111111";
  var fechaNacimiento = "2000-01-01";
  var email = "andresbaez@fake.mail.com";
  var telefono = "099999999";
  var departamento = "COLONIA";
  var localidad = "SANTA REGINA";
  var emailInstitucional = "andres.baezZZZ@estudiantes.utec.edu.uy";
  var itr = "Sede Rivera - RIVERA";
  var genero = "Masculino";
  var type = "TUTOR";
  var contrasenia = "Contrasenia1"
  var area = "Ciberseguridad"
  var rol = "Tutor"
  
  await page.goto('register');

  await page.locator("#firstName").fill(nombre);
  await page.locator("#lastName").fill(apellido);
  await page.locator("#documento").fill(cedula);
  await page.locator("#fecNac").fill(fechaNacimiento);
  await page.locator("#email").fill(email);
  await page.locator("#telefono").fill(telefono);
  await page.locator("#departamento").selectOption(departamento);
  await page.locator("#localidad").fill(localidad);
  await page.locator('#password').fill(contrasenia);
  await page.locator('#passwordConfirm').fill(contrasenia);
  await page.locator("#emailUtec").fill(emailInstitucional);
  await page.locator("#itr").selectOption(itr);
  await page.locator("#gender").selectOption(genero);
  await page.locator("#type").selectOption(type);
  await page.locator("#area").selectOption(area);
  await page.locator("#rol").selectOption(rol);

  await page.locator('#registerBtn').click();
  await page.waitForTimeout(1500);
  await expect(page.getByText('Documento ya utilizado,')).toBeVisible();
});
