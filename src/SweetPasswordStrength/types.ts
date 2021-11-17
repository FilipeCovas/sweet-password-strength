export interface ISweetPasswordStrength {
  password: string;
  onChange: (PasswordStrenghtState: IPasswordStrengthState) => void;
}

export interface IPasswordStrengthState {
  bgcolor: string;
  completed: string;
  status: string;
}
