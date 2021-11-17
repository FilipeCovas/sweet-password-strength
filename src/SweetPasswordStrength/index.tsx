import React, { useState, useEffect } from 'react';
import passwordValidator from 'password-validator';
import { Container } from './styles';
import ProgressBar from '../components/ProgressBar';
import { ISweetPasswordStrength, IPasswordStrengthState } from './types';

export function SweetPasswordStrength({
  password,
  onChange,
}: ISweetPasswordStrength) {
  const [passwordStrength, setPasswordStrength] = useState<
    IPasswordStrengthState
  >({
    bgcolor: '#202024',
    status: 'Password Strength',
    completed: '1',
  });

  const validationHandle = (password: string) => {
    var schema = new passwordValidator();

    schema
      .is()
      .min(10)
      .is()
      .max(128)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has()
      .not()
      .spaces()
      .has()
      .symbols()
      .not(/(.)\1{2,}/g);

    const validator = schema.validate(password, { list: true });

    const validatorLength = Array.isArray(validator) ? validator.length : 0;

    if (validatorLength === 0) {
      setPasswordStrength({
        bgcolor: '#2acfc2',
        status: 'Strong',
        completed: '100',
      });
    } else if (!password || password === '') {
      setPasswordStrength({
        bgcolor: '#202024',
        status: 'Password Strength',
        completed: '1',
      });
    } else {
      var completed = 100 - (validatorLength * 100) / 6;

      setPasswordStrength({
        bgcolor: completed >= 50 ? '#eac700' : '#ff3860',
        status: completed >= 50 ? 'Normal' : 'Weak',
        completed: completed.toString(),
      });
    }
  };

  useEffect(() => {
    validationHandle(password);
  }, [password]);

  useEffect(() => {
    if (passwordStrength) {
      onChange(passwordStrength);
    }
  }, [passwordStrength]);

  return (
    <Container>
      <ProgressBar
        status={passwordStrength.status}
        bgcolor={passwordStrength.bgcolor}
        completed={passwordStrength.completed}
        style={!password ? { opacity: '0.5' } : {}}
      />
    </Container>
  );
}
