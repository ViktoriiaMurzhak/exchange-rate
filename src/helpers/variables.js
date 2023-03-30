export const size = {
  mobile: '320px',
  maxMobile: '767px',
  minTablet: '768px',
  maxTablet: '1279px',
  desktop: '1280px',
}

export const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  maxMobile: `(max-width: ${size.maxMobile})`,
  tablet: `(min-width: ${size.minTablet}) and (max-width: ${size.maxTablet})`,
  minTablet: `(min-width: ${size.minTablet})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

export const colors = {
  bg: '#111827',
  primaryText: '#FFFFFF',
  secondaryText: '#E5E7EB',
  btnBg: 'linear-gradient(90.35deg, #2563EB 0.36%, #D946EF 201.02%)',
  blurBg:
    'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
  conturLine: '#969696',
}
