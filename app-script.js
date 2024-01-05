const scriptURL = 'https://script.google.com/macros/s/AKfycbyh068FGnU0XwpoQiVUSo6CRsPA4SUJt5nwpvycuKr3Uyi2Qcm9rAvs0ndoOI5ECPfl/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})