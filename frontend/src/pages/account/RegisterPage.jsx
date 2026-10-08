import AuthCard, { Field, inputClass, MIN_PASSWORD } from '../../components/account/AuthCard'
import { useLocale } from '../../context/locale'

export default function RegisterPage() {
  const { t } = useLocale()

  const validate = (data) => {
    if (data.get('email') !== data.get('emailConfirm')) return t('Email addresses do not match.')
    if (String(data.get('password')).length < MIN_PASSWORD) return t('Password must be at least 8 characters.')
    if (data.get('password') !== data.get('passwordConfirm')) return t('Passwords do not match.')
    return null
  }

  return (
    <AuthCard
      title={t('Create an account')}
      submitLabel={t('Create account')}
      validate={validate}
      footer={<>{t('Already have an account?')} <a href="/login" className="underline">{t('Sign in')}</a></>}
    >
      <Field label={t('Full name')} required><input name="fullName" required autoComplete="name" className={inputClass} /></Field>
      <Field label={t('Email')} required><input name="email" type="email" required autoComplete="email" className={inputClass} /></Field>
      <Field label={t('Confirm email')} required><input name="emailConfirm" type="email" required autoComplete="email" className={inputClass} /></Field>
      <Field label={t('Password')} required><input name="password" type="password" required minLength={MIN_PASSWORD} autoComplete="new-password" className={inputClass} /></Field>
      <Field label={t('Retype password')} required><input name="passwordConfirm" type="password" required autoComplete="new-password" className={inputClass} /></Field>
      <Field label={t('Gender')}>
        <select name="gender" defaultValue="" className={`${inputClass} bg-white`}>
          <option value="">{t('Select gender')}</option>
          <option value="male">{t('Male')}</option>
          <option value="female">{t('Female')}</option>
          <option value="other">{t('Other')}</option>
        </select>
      </Field>
      <Field label={t('Date of birth')}><input name="dob" type="date" autoComplete="bday" className={inputClass} /></Field>
      <label className="mt-5 flex items-start gap-2 text-sm"><input name="promotions" type="checkbox" className="mt-0.5 size-4 accent-black" /> {t('Send me emails about promotions and new products.')}</label>
      <label className="mt-3 flex items-start gap-2 text-sm"><input name="terms" type="checkbox" required className="mt-0.5 size-4 accent-black" /> <span>{t('I have read and agree to the')} <a href="/terms" className="underline">{t('Terms of Use')}</a>.</span></label>
    </AuthCard>
  )
}
