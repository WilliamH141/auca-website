import * as migration_20260929_034607_initial from './20260929_034607_initial';
import * as migration_20260929_034702_events from './20260929_034702_events';
import * as migration_20260929_041527_team from './20260929_041527_team';
import * as migration_20260929_042435_sponsors_faq_homepage_settings from './20260929_042435_sponsors_faq_homepage_settings';

export const migrations = [
  {
    up: migration_20260929_034607_initial.up,
    down: migration_20260929_034607_initial.down,
    name: '20260929_034607_initial',
  },
  {
    up: migration_20260929_034702_events.up,
    down: migration_20260929_034702_events.down,
    name: '20260929_034702_events',
  },
  {
    up: migration_20260929_041527_team.up,
    down: migration_20260929_041527_team.down,
    name: '20260929_041527_team',
  },
  {
    up: migration_20260929_042435_sponsors_faq_homepage_settings.up,
    down: migration_20260929_042435_sponsors_faq_homepage_settings.down,
    name: '20260929_042435_sponsors_faq_homepage_settings'
  },
];
