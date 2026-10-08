import AuthCard, { Field, inputClass, MIN_PASSWORD } from '../../components/account/AuthCard'
import { useLocale } from '../../context/locale'

export function ForgotPasswordPage() {
  const { t } = useLocale()
  return (
    <AuthCard
      title={t('Forgot password')}
      intro={t('Enter the email address associated with your account.')}
      submitLabel={t('Reset password')}
      footer={<><a href="/login" className="underline">{t('Go back')}</a><p className="mt-3">{t('Don’t have an account?')} <a href="/register" className="underline">{t('Create one')}</a></p></>}
    >
      <Field label={t('Email')} required><input name="email" type="email" required autoComplete="email" className={inputClass} /></Field>
    </AuthCard>
  )
}

export function ResetPasswordPage() {
  const { t } = useLocale()
  const validate = (data) => {
    if (String(data.get('password')).length < MIN_PASSWORD) return t('Password must be at least 8 characters.')
    if (data.get('password') !== data.get('passwordConfirm')) return t('Passwords do not match.')
    return null
  }
  return (
    <AuthCard
      title={t('Reset password')}
      intro={t('Choose a new password for your account.')}
      submitLabel={t('Save password')}
      validate={validate}
      footer={<a href="/login" className="underline">{t('Back to sign in')}</a>}
    >
      <Field label={t('New password')} required><input name="password" type="password" required minLength={MIN_PASSWORD} autoComplete="new-password" className={inputClass} /></Field>
      <Field label={t('Retype password')} required><input name="passwordConfirm" type="password" required autoComplete="new-password" className={inputClass} /></Field>
    </AuthCard>
  )
}
