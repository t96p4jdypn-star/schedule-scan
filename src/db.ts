import Dexie,{type EntityTable} from 'dexie'
import type {HistoryRecord} from './types'
export const db=new Dexie('schedule-scan') as Dexie&{history:EntityTable<HistoryRecord,'id'>}
db.version(1).stores({history:'++id, createdAt, sourceName'})
