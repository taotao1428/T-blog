import {Note} from './note.model';

export interface Notebook {
  id: number; // 数据库id
  slug: string; // 别名
  name: string; // 名称
  seq: number; // 排序
  notes: Note[]; // 里面的笔记
}
