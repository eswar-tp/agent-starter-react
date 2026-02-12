export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // agent dispatch configuration
  agentName?: string;

  // LiveKit Cloud Sandbox configuration
  sandboxId?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Allure Avenue',
  pageTitle: 'Allure Avenue Voice Agent',
  pageDescription: 'An AI-powered voice agent by Allure Avenue',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: 'https://allureavani.in/wp-content/uploads/2025/11/Allure-Avani-2025-Logo-White.webp',
  accent: '#002cf2',
  logoDark: 'https://allureavani.in/wp-content/uploads/2025/11/Allure-Avani-2025-Logo-White.webp',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',

  // agent dispatch configuration
  agentName: process.env.AGENT_NAME ?? undefined,

  // LiveKit Cloud Sandbox configuration
  sandboxId: undefined,
};
