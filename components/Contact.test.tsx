import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
import type { ContactContent } from '@/lib/types'

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn(() => Promise.resolve({ status: 200, text: 'OK' })) },
}))

vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'svc_test')
vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'tpl_test')
vi.stubEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', 'key_test')

const data: ContactContent = {
  contactTitle: 'צור קשר',
  contactSubtitle: 'נשמח לשמוע מכם',
  contactPhone: '050-1234567',
  contactInstagram: '@handle',
  contactFacebook: 'Some Page',
  contactEmail: 'test@example.com',
  contactFormBtn: 'שלח',
  formFieldName: 'שם',
  formFieldPhone: 'טלפון',
  formFieldEmail: 'אימייל',
}

describe('Contact form', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls emailjs.sendForm with the right service/template/key when submitted with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact data={data} />)

    await user.type(screen.getByPlaceholderText('שם'), 'דניאל')
    await user.type(screen.getByPlaceholderText('טלפון'), '0501234567')
    await user.type(screen.getByPlaceholderText('אימייל'), 'a@b.com')
    await user.click(screen.getByRole('button', { name: 'שלח' }))

    const emailjs = (await import('@emailjs/browser')).default
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1)
    const [serviceId, templateId, _form, publicKey] = (emailjs.sendForm as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(serviceId).toBe('svc_test')
    expect(templateId).toBe('tpl_test')
    expect(publicKey).toBe('key_test')
  })
})
