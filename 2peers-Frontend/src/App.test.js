/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Landing Page', () => {
  test('Renders the Navbar', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toHaveTextContent('Login');
  });

  test('Renders the Mission Heading', () => {
    render(<App />);
    expect(screen.getByTestId('mission-heading')).toHaveTextContent(
      '2Peers',
    );
  });

  test('Renders the Mission Statement', () => {
    render(<App />);
    expect(screen.getByTestId('mission-statement')).toHaveTextContent(
      '2Peers mission is to improve the learning experience of students through the use of peer to peer learning. By creating a virtual classroom envirnment students are able interact with one another and improve their understanding of subjects by leveraging their peers knowledge.',
    );
  });

  test('Renders the Team Heading', () => {
    render(<App />);
    expect(screen.getByTestId('team-heading')).toHaveTextContent(
      'Our Team',
    );
  });

  test('Renders the Team Statement', () => {
    render(<App />);
    expect(screen.getByTestId('team-statement')).toHaveTextContent(
      'Our team is composed of fullstack software developers and seeks to improve the educational experience of students through tools that allow them to communicate despite these trying times.',
    );
  });

  test('Renders the Footer', () => {
    render(<App />);
    expect(screen.getByTestId('copyright')).toHaveTextContent('© 2021 2Peers Tutoring App');
  });
});

describe('Render SignIn and LogIn', () => {
  test('Renders SignIn without crashing', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    expect(screen.getByTestId('login-form'));
  });

  test('Renders SignIn Headings', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    expect(screen.getByTestId('login-heading')).toHaveTextContent('Sign into your account');
    expect(screen.getByTestId('login-subheading')).toHaveTextContent('Lets get to tutoring!');
  });

  test('Renders SignIn Form Elements', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    // labels check
    expect(screen.getByTestId('email-label')).toHaveTextContent('Email address');
    expect(screen.getByTestId('password-label')).toHaveTextContent('Password');
    expect(screen.getByTestId('teacher-label')).toHaveTextContent('Are you a teacher?');
    // input check
    expect(screen.getByTestId('email-input')).toHaveTextContent('');
    expect(screen.getByTestId('password-input')).toHaveTextContent('');
    expect(screen.getByTestId('teacher-box')).toHaveTextContent('');
    // Submit button check
    expect(screen.getByTestId('signin-button')).toHaveTextContent('Sign In');
  });
});
