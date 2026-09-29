import * as migration_20260929_034607_initial from './20260929_034607_initial';
import * as migration_20260929_034702_events from './20260929_034702_events';

export const migrations = [
  {
    up: migration_20260929_034607_initial.up,
    down: migration_20260929_034607_initial.down,
    name: '20260929_034607_initial',
  },
  {
    up: migration_20260929_034702_events.up,
    down: migration_20260929_034702_events.down,
    name: '20260929_034702_events'
  },
];
