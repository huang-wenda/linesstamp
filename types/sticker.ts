export interface Sticker {
  id: string;
  title: string;
  image: string;
  registrationDate: string;
  description: string;
  buttonType: 'add_friend' | 'clear_conditions' | 'add_friend_premium';
  isNew: boolean;
}

