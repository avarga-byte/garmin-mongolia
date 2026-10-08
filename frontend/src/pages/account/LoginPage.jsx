import AuthCard, { Field, inputClass } from '../../components/account/AuthCard'
import { useLocale } from '../../context/locale'

export default function LoginPage({ accountRequired = false }) {
  const { t } = useLocale()
  return (
    <AuthCard
      title={t('Sign in')}
      intro={accountRequired ? t('Sign in to view your account.') : null}
      submitLabel={t('Sign in')}
      footer={<>{t('Don’t have an account?')} <a href="/register" className="underline">{t('Create one')}</a></>}
    >
      <Field label={t('Email Address')} required><input name="email" type="email" required autoComplete="email" className={inputClass} /></Field>
      <Field label={t('Password')} required><input name="password" type="password" required autoComplete="current-password" className={inputClass} /></Field>
      <div className="mt-5 flex items-center justify-between text-sm">
        <label className="flex items-center gap-2"><input name="remember" type="checkbox" className="size-4 accent-black" /> {t('Remember me')}</label>
        <a href="/forgot-password" className="underline">{t('Forgot password?')}</a>
      </div>
    </AuthCard>
  )
}
