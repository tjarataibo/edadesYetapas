var age = prompt("¿Cuántos años tienes? (Ingresa sólo números enteros, NO letras)");
if (age != null & age != 0 & age % 1 === 0) 
{
  if (age <2)
  {
    alert("Te encuentras en la etapa ''Toddler''");
  }
  if (age == 2)
  {
    alert("Te encuentras en la etapa ''Toddler''");
  }
  if (age == 3)
  {
    alert("Te encuentras en la etapa ''Toddler''");
  }
  if (age >3 & age <5) 
  {
      alert("Te encuentras en la etapa ''Preschooler''");
  }
  if (age == 5) 
  {
    alert("Te encuentras en la etapa ''Preschooler''");
  }
  if (age > 5 & age < 14) 
  {
      alert("Te encuentras en la etapa ''Gradeschooler''");
  }
  if (age == 14)
  {
    alert("Te encuentras en la etapa ''Gradeschooler''");
  }
  if (age > 14 & age < 18)
  {
      alert("Te encuentras en la etapa ''Teenager''");
  }
  if (age == 18)
  {
    alert("Te encuentras en la etapa ''young adult''");
  }
  if (age > 18 & age < 21) 
  {
      alert("Te encuentras en la etapa ''young adult''");
  }
  if (age == 21) 
  {
      alert("Te encuentras en la etapa ''young adult''");
  }
  if (age > 21)
  {
    alert("Te encuentras en la etapa ''adult''");
  }
}
else
{
alert("Por favor, ingresa tu edad en números enteros");
}