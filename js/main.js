/*******************************************************************************
 * 
 * Creare un oggetto che descriva uno studente con le seguenti proprietà:
 * nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
 * Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
 * e stampare per ognuno nome e cognome
 * Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
 * oggetto studente all'array creato al punto 2 inserendo nell’ordine:
 * nome, cognome e età.
 * 
 *******************************************************************************/
$(document).ready( function() {

 // 1. Creazione oggetto
 var name = $('.name');
 var surname = $('.surname');
 var age = $('.age');
 var student = {
     nome: 'Marco',
     cognome: 'Giulietti',
     eta: '35',
 };

 name.text(student.nome);
 surname.text(student.cognome);
 age.text(student.eta);



}); //End Ready