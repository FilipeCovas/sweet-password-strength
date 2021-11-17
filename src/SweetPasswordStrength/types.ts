export interface ISweetPasswordStrength {
  password: string;
  onChange: (PasswordStrenghtState: IPasswordStrenghtState) => void;
}

export interface IPasswordStrenghtState {
  bgcolor: string;
  completed: string;
  status: string;
}
