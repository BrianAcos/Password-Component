export interface InputProps  {
  maxLength?: number;
  minLength?: number;
  hasNumbers?: boolean;
  hasLetters?: boolean;
  hasSpecialChar?: boolean;
  hasUppercase?: boolean;
  hasNoConsecutive?: boolean;
  ableToSubmit: (status: boolean) => void;
}