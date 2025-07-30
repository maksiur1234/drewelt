export const sendContactForm = async (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);

  if (data.attachment) {
    formData.append("attachment", data.attachment);
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Błąd podczas wysyłania formularza");
  }

  return response.json();
};