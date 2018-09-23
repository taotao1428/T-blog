/**
 * 用户的基本信息
 */
export interface UserBasic {
  avatar: string;
  nickname: string;
  email: string;
  emailConfirmed: boolean;
  preferredNoteType: number;
  acceptStrangerMessage: boolean;
  emailNotify: number;
}
