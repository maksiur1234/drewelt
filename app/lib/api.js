export const sendContactForm = async (data) => {
  const formData = new FormData()

  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('phone', data.phone)
  formData.append('message', data.message)
  formData.append('city', data.city)
  formData.append('postal', data.postal)

  if (data.attachment && data.attachment.length > 0) {
    data.attachment.forEach((file) => {
      formData.append('attachment', file)
    })
  }

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData,
  })

  let result = null

  try {
    result = await response.json()
  } catch {
    throw new Error('Serwer zwrócił nieprawidłową odpowiedź')
  }

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message || 'Błąd podczas wysyłania formularza')
  }

  return result
}