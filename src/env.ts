

export const Env = {
  LOGO_URL: import.meta.env.VITE_LOGO_URL || 'https://assets.br.ivao.aero/logos/tag_white.png',
  MAIN_SYSTEM_URL: import.meta.env.VITE_MAIN_SYSTEM_URL || 'https://admin.kronos.pl.ivao.aero',
  DEV: import.meta.env.VITE_DEV === 'false' || 'false',
  IVAO_KRONOS_API_SERVER: import.meta.env.VITE_IVAO_KRONOS_API_HOST || 'https://api.kronos.pl.ivao.aero',
  IVAO_API_SERVER: import.meta.env.VITE_IVAO_API_HOST ||  'https://api.ivao.aero',
  CLIENT_ID: import.meta.env.VITE_CLIENT_ID || 'ee08bd51-7b82-4b42-bd22-5ce4b724666c',
  CLIENT_URL: import.meta.env.VITE_CLIENT_URL || 'https://admin.kronos.pl.ivao.aero/',
};
