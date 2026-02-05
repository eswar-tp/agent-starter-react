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
  companyName: 'GGS Telecom',
  pageTitle: 'GGS Telecom Voice Agent',
  pageDescription: 'An AI-powered voice agent by GGS Telecom',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: 'https://ggstelecoms.co.uk/wp-content/uploads/2025/10/1796dc3c21c3e9deb5a21b1bf82184b245b735f0-2.png',
  accent: '#002cf2',
  logoDark: 'https://ggstelecoms.co.uk/wp-content/uploads/2025/10/1796dc3c21c3e9deb5a21b1bf82184b245b735f0-2.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',

  // agent dispatch configuration
  agentName: process.env.AGENT_NAME ?? undefined,

  // LiveKit Cloud Sandbox configuration
  sandboxId: undefined,
};
