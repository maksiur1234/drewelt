export const sendContactForm = async (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);
  formData.append("city", data.city);
  formData.append("postal", data.postal);

  if (data.attachment && data.attachment.length > 0) {
    data.attachment.forEach((file) => {
      formData.append("attachment", file);
    });
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