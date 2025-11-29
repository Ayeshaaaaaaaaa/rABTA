
export const Theme = {
  colors: {
    primary: '#2563eb', 
    primaryLight: '#3b82f6',
    primaryDark: '#1d4ed8', 
    
    secondary: '#7c3aed', 
    secondaryLight: '#8b5cf6', 
    secondaryDark: '#6d28d9', 
    
    white: '#ffffff',
    black: '#000000',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    
    success: '#10b981',
    warning: '#f59e0b', 
    error: '#ef4444', 
    
    brandPurple: '#0D0520',
    brandGradientFrom: '#2A0C64',
    brandGradientTo: '#6A00FF',
    
    purple900: '#5d3eff',
    indigo700: '#4a2ecc',
    purple100: '#eef0f7',
    purple200: '#ddd6fe',
    cyan: '#29D3FF',
    cyanDark: '#1bc7f2',
  },
  
  borderColors: {
    primary: 'border-blue-600',
    secondary: 'border-violet-600',
    success: 'border-green-500',
    light: 'border-gray-200',
    dark: 'border-gray-700',
  },
  
  backgroundColors: {
    primary: 'bg-blue-600',
    primaryHover: 'bg-blue-700',
    secondary: 'bg-violet-600',
    secondaryHover: 'bg-violet-700',
    success: 'bg-green-500',
    light: 'bg-white',
    dark: 'bg-gray-900',
    brandDark: 'bg-[#0D0520]',
    brandGradient: 'bg-gradient-to-r from-[#2A0C64] to-[#6A00FF]',
    
    lightSection: 'bg-white',
    lightCard: 'bg-gray-50',
    
    darkSection: 'bg-gray-900',
    darkCard: 'bg-gray-800',

    purple900: 'bg-[#5d3eff]',
    indigo700: 'bg-[#4a2ecc]',
    gray100: 'bg-[#eef0f7]',
    gradientPurpleIndigo: 'bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900',
    gradientGray: 'bg-gradient-to-br from-from-gray-100 via-gray-600 to-white',
    gradientPurpleDark: 'bg-gradient-to-br from-[#351a73] via-[#22103f] to-[#110a26]',
    cyan: 'bg-[#29D3FF]',
    cyanHover: 'bg-[#1bc7f2]',
    purple200: 'bg-purple-200',
  },
  
  textColors: {
    primary: 'text-blue-600',
    secondary: 'text-violet-600',
    success: 'text-green-500',
    light: 'text-white',
    dark: 'text-gray-900',
    muted: 'text-gray-600',
    heading: 'text-gray-900',
    gray700: 'text-gray-700',
    
    lightText: 'text-gray-900',
    lightMuted: 'text-gray-600',
    
    darkText: 'text-white',
    darkMuted: 'text-gray-300',
    blue300: 'text-blue-300',
    purple100: 'text-purple-100',
    purple900: 'text-[#5d3eff]',
    gray300: 'text-gray-300',
    black: 'text-black',
    white80: 'text-white/80',
  },
  
  sizes: {
    icon: "w-20 h-20",
    iconText: "text-3xl",
    gap: "mt-3",
    line: "w-20 h-1 mt-10",
  },
  
  typography: {
    fontFamily: {
      sans: ['var(--font-inter)', 'var(--font-geist-sans)', 'sans-serif'],
      heading: ['var(--font-space-grotesk)', 'var(--font-geist-sans)', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
    },
    
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    
    fontSize: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    
    lineHeight: {
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
  },
  
  spacing: {
    xs: 'space-x-1',
    sm: 'space-x-2',
    md: 'space-x-4',
    lg: 'space-x-6',
    xl: 'space-x-8',
  },
  
  borderRadius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
    '3xl': 'rounded-3xl',
    '2xl': 'rounded-2xl',
  },
  
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
  
  transitions: {
    all: 'transition-all',
    colors: 'transition-colors',
    transform: 'transition-transform',
  },
  
  animations: {
    fadeIn: 'animate-fadeIn',
    slideUp: 'animate-slideUp',
    gradient: 'animate-gradient',
  },
  
  dimensions: {
    cardHeight: 'h-[360px]',
    badgeSize: 'w-24 h-24',
    circleBadge: 'w-8 h-8',
    buttonLarge: 'w-12 h-12',
  },
  
  gradients: {
    purpleIndigo: 'from-purple-900 via-violet-800 to-indigo-900',
    grayGradient: 'from-from-gray-100 via-gray-600 to-white',
    darkPurple: 'from-[#351a73] via-[#22103f] to-[#110a26]',
    brandGradient: 'from-[#2A0C64] to-[#6A00FF]',
  },
  
  effects: {
    hoverShadowPurple: 'hover:shadow-[0_0_25px_rgba(147,51,234,0.6)]',
    borderPurple40: 'hover:border-purple-400/40',
    bgWhite10: 'bg-white/10',
    groupHoverBgPurple600: 'group-hover:bg-purple-600',
  }
};