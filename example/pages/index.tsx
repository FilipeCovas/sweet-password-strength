import type { NextPage } from 'next'
import {useState} from "react"
import Head from 'next/head';
import styled from 'styled-components';
import { SweetPasswordStrength } from '@filipecovas/sweet-password-strength';

const Wrapper = styled.div`
  text-align: center;
`;

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("")
  return <Wrapper>
    <Head>
      <title>Example - Sweet Password Strength React Component</title>
      <meta
        name="description"
        content="This is a SweetPasswordStrength Component Example"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Welcome to Sweet Password Strength React Component</h1>
      <input type="password" name="password" value={value} onChange={(e) => setValue(e.target.value)} />
      <SweetPasswordStrength password={value} onChange={(PasswordStrenghtState) => console.log(PasswordStrenghtState)} />
    </main>
  </Wrapper>
}

export default Home
