export function whatsappHref(phone: string, countryCode = '972'): string {
  const digits = phone.replace(/\D/g, '').replace(/^0/, '')
  return `https://wa.me/${countryCode}${digits}`
}

export function instagramHref(handle: string): string {
  return `https://instagram.com/${handle.replace(/^@/, '')}`
}

export function facebookHref(page: string): string {
  return `https://facebook.com/${page}`
}

export function mailtoHref(email: string): string {
  return `mailto:${email}`
}
