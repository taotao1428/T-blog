export interface Note {
  id: number; // 数据库id
  slug: string; // 别名
  title: string; // 笔记标题
  content: string; // 笔记内容
  notebookId: number; // 所在笔记本的id
  noteType: number; // 笔记类型，例如富文本，markdown等
  seq: number; // 笔记在本笔记本中的排序
  shared: boolean; // 是否已发布
}
