export interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  icon?: string;
}

export interface SocialButtonProps {
  imageUrl: string;
  onPress: () => void;
}
