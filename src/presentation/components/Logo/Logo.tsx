import LogoSVG from '@/presentation/assets/static/logo.svg'
import '@/presentation/components/Logo/Logo.scss'

export function Logo() {
  return <img className="logo" src={LogoSVG} alt="logo" />
}
