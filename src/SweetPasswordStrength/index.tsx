import React, { useState, useEffect } from 'react';
import passwordValidator from 'password-validator';
import { Container } from './styles';
import ProgressBar from '../components/ProgressBar';
import { ISweetPasswordStrength, IPasswordStrenghtState } from './types';

export function SweetPasswordStrength({
  password,
  onChange,
}: ISweetPasswordStrength) {
  const [passwordStrenght, setPasswordStrenght] = useState<
    IPasswordStrenghtState
  >({
    bgcolor: 'softBackground',
    status: 'Força da password',
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
      setPasswordStrenght({
        bgcolor: 'success',
        status: 'Forte',
        completed: '100',
      });
    } else if (!password) {
      setPasswordStrenght({
        bgcolor: 'softBackground',
        status: 'Força da password',
        completed: '1',
      });
    } else {
      var completed = 100 - (validatorLength * 100) / 6;

      setPasswordStrenght({
        bgcolor: completed >= 50 ? 'warning' : 'danger',
        status: completed >= 50 ? 'Normal' : 'Fraca',
        completed: completed.toString(),
      });
    }
  };

  const handleChange = () => {
    validationHandle(password);
    onChange({
      bgcolor: 'softBackground',
      status: 'Força da password',
      completed: '1',
    });
  };

  useEffect(() => {
    if (password && password !== '') {
      handleChange();
    }
  }, [password]);

  return (
    <Container>
      <ProgressBar
        status={passwordStrenght.status}
        bgcolor={passwordStrenght.bgcolor}
        completed={passwordStrenght.completed}
        style={!password ? { opacity: '0.5' } : {}}
      />
    </Container>
  );
}
