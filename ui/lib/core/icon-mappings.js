// icons that exist in the public folder which are not part of the Structure set
// values represent match to icon in Flight set with null representing no match
export const localIconMap = {
  hashicorp: null,
  loop: 'sync',
  reply: 'corner-up-left',
  console: 'terminal-screen',
  pki: 'file-text',
  replication: 'replication-direct',
  'perf-replication': 'replication-perf',
  'status-indicator': 'circle-dot',
  tour: null,
  approle: 'cpu',
  cert: 'certificate',
  consul: null,
  gcpkms: 'gcp-color',
  kmip: 'unlock',
  kv: 'key-values',
  ldap: 'user',
  okta: 'okta-color',
  radius: 'user',
  ssh: 'terminal-screen',
  totp: 'history',
  transit: 'swap-horizontal',
  userpass: 'identity-user',
  stopwatch: 'clock',
  'vault-logo': null,
  auth: 'user',
  'android-sync': 'sync-reverse',
};
// complete list of Structure icons mapped to their Flight counterpart
// null values represent no direct correlation to icon in Flight set
// Flight icon lookup @ https://flight-hashicorp.vercel.app/
export const structureIconMap = {
  'alert-circle-fill': 'alert-circle-fill',
  'alert-circle-outline': 'alert-circle',
  'alert-triangle': 'alert-triangle-fill',
  'arrow-down': 'arrow-down',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-up': 'arrow-up',
  bolt: 'zap',
  'box-check-fill': 'check-square-fill',
  'box-outline': 'square',
  broadcast: 'radio',
  bug: 'bug',
  calendar: 'calendar',
  'cancel-circle-fill': 'x-circle-fill',
  'cancel-circle-outline': 'x-circle',
  'cancel-plain': 'x',
  'cancel-square-fill': 'x-square-fill',
  'cancel-square-outline': 'x-square',
  'caret-down': null,
  'caret-up': null,
  'check-circle-fill': 'check-circle-fill',
  'check-circle-outline': 'check-circle',
  'check-plain': 'check',
  'chevron-down': 'chevron-down',
  'chevron-left': 'chevron-left',
  'chevron-right': 'chevron-right',
  'chevron-up': 'chevron-up',
  'clock-fill': null,
  'clock-outline': 'clock',
  'cloud-fail': 'cloud-x',
  code: 'code',
  console: 'terminal',
  'copy-action': 'clipboard-copy',
  'copy-success': 'clipboard-checked',
  database: 'database',
  delay: 'delay',
  'deny-alt': null,
  'deny-default': null,
  disabled: 'skip',
  docs: 'docs-link',
  dot: 'circle-fill',
  download: 'download',
  edit: 'pencil-tool',
  'envelope-sealed-fill': null,
  'envelope-sealed-outline': 'mail',
  'envelope-unsealed--outline': 'mail-open',
  'envelope-unsealed-fill': null,
  exit: 'external-link',
  'expand-less': 'minimize',
  'expand-more': 'maximize',
  'file-error': 'file-x',
  'file-fill': 'file-text',
  'file-outline': 'file',
  'file-success': 'file-check',
  filter: 'filter',
  flag: 'flag',
  'folder-fill': 'folder-fill',
  'folder-outline': 'folder',
  gateway: 'gateway',
  'gift-fill': null,
  'gift-outline': 'gift',
  'git-branch': 'git-branch',
  'git-commit': 'git-commit',
  'git-pull-request': 'git-pull-request',
  'git-repository': 'git-repo',
  guide: 'guide',
  health: 'activity',
  'help-circle-fill': null,
  'help-circle-outline': 'help',
  history: 'history',
  'info-circle-fill': null,
  'info-circle-outline': 'info',
  key: 'key',
  layers: 'layers',
  leader: 'star-circle',
  learn: 'learn-link',
  link: 'link',
  loading: '',
  'lock-closed-fill': 'lock-fill',
  'lock-closed-outline': 'lock',
  'lock-closed': 'lock-fill',
  'lock-disabled': 'lock-disabled',
  'lock-open-outline': 'unlock',
  'lock-open': 'unlock',
  'logo-aws-color': 'aws-color',
  'logo-aws-monochrome': 'aws',
  'logo-alicloud-color': 'alibaba-color',
  'logo-alicloud-monochrome': 'alibaba',
  'logo-auth0-color': 'auth0-color',
  'logo-auth0-monochrome': 'auth0',
  'logo-azure-color': 'azure-color',
  'logo-azure-monochrome': 'azure',
  'logo-azure-dev-ops-color': 'azure-devops-color',
  'logo-azure-dev-ops-monochrome': 'azure-devops',
  'logo-bitbucket-color': 'bitbucket-color',
  'logo-bitbucket-monochrome': 'bitbucket',
  'logo-f5-color': 'f5-color',
  'logo-f5-monochrome': 'f5',
  'logo-gcp-color': 'gcp-color',
  'logo-gcp-monochrome': 'gcp',
  'logo-github-color': 'github-color',
  'logo-github-monochrome': 'github',
  'logo-gitlab-color': 'gitlab-color',
  'logo-gitlab-monochrome': 'gitlab',
  'logo-google-color': 'google-color',
  'logo-google-monochrome': 'google',
  'logo-kubernetes-color': 'kubernetes-color',
  'logo-kubernetes-monochrome': 'kubernetes',
  'logo-microsoft-color': 'microsoft-color',
  'logo-microsoft-monochrome': 'microsoft',
  'logo-okta-color': 'okta-color',
  'logo-okta-monochrome': 'okta',
  'logo-oracle-color': 'oracle-color',
  'logo-oracle-monochrome': 'oracle',
  'logo-slack-color': 'slack-color',
  'logo-slack-monochrome': 'slack',
  'logo-vmware-color': 'vmware-color',
  'logo-vmware-monochrome': 'vmware',
  menu: 'menu',
  mesh: 'mesh',
  'message-fill': 'message-square-fill',
  'message-outline': 'message-square-fill',
  message: 'message-square-fill',
  'minus-circle-fill': null,
  'minus-circle-outline': 'minus-circle',
  'minus-plain': 'minus',
  'minus-square-fill': 'minus-square',
  module: 'module',
  'more-horizontal': 'more-horizontal',
  'more-vertical': 'more-vertical',
  network: 'network',
  'notification-disabled': 'notification-disabled',
  'notification-fill': 'notification-fill',
  'notification-outline': 'bell',
  outline: 'outline',
  'page-outline': 'outline',
  path: 'path',
  'play-fill': 'play-circle',
  'play-outline': 'play-circle',
  'play-plain': 'play',
  'plus-circle-fill': null,
  'plus-circle-outline': 'plus-circle',
  'plus-plain': 'plus',
  'plus-square-fill': 'plus-square',
  provider: 'provider',
  'public-default': 'globe',
  'public-locked': 'globe-private',
  queue: 'queue',
  'radio-button-checked': 'circle-dot',
  'radio-button-unchecked': 'circle',
  random: 'random',
  redirect: 'redirect',
  'refresh-alert': 'refresh-alert',
  'refresh-default': 'reload',
  remix: 'shuffle',
  ribbon: 'award',
  run: '',
  search: 'search',
  server: 'server',
  settings: 'settings',
  sort: 'sort-desc',
  'source-file': 'file-source',
  'star-fill': 'star-fill',
  'star-outline': 'star',
  'sub-left': 'corner-down-left',
  'sub-right': 'corner-down-right',
  support: 'support',
  'swap-horizontal': 'swap-horizontal',
  'swap-vertical': 'swap-vertical',
  syncing: 'syncing',
  tag: 'tag',
  tokens: 'token',
  trash: 'trash',
  tune: 'sliders',
  'unfold-less': 'unfold-close',
  'unfold-more': 'unfold-open',
  upload: 'upload',
  'user-add': 'user-plus',
  'user-organization': 'org',
  'user-plain': 'user',
  'user-square-fill': 'user-circle-fill',
  'user-square-outline': 'user-circle',
  'user-team': 'users',
  'visibility-hide': 'eye-off',
  'visibility-show': 'eye',
  webhook: 'webhook',
  partner: 'users',
};
