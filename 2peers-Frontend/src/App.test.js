/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
// import Student from './Student/Student';

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
    expect(screen.getByTestId('signup-link')).toHaveTextContent('Sign up here!');
  });

  test('Renders Signup without crashing', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    fireEvent.click(screen.getByTestId('signup-link'));
    expect(screen.getAllByTestId('signup-form'));
  });

  test('Renders SignUp Headings', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    fireEvent.click(screen.getByTestId('signup-link'));
    expect(screen.getByTestId('signup-heading')).toHaveTextContent('Sign Up');
    expect(screen.getByTestId('signup-subheading')).toHaveTextContent('Lets get to tutoring!');
  });

  test('Renders SignUp Form Elements', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    fireEvent.click(screen.getByTestId('signup-link'));
    // labels check
    expect(screen.getByTestId('name-label')).toHaveTextContent('Name');
    expect(screen.getByTestId('email-label')).toHaveTextContent('Email address');
    expect(screen.getByTestId('password-label')).toHaveTextContent('Password');
    expect(screen.getByTestId('teacher-label')).toHaveTextContent('Are you a teacher?');
    // // input check
    expect(screen.getByTestId('email-input')).toHaveTextContent('');
    expect(screen.getByTestId('password-input')).toHaveTextContent('');
    expect(screen.getByTestId('teacher-box')).toHaveTextContent('');
    // // Submit button check
    expect(screen.getByTestId('signup-button')).toHaveTextContent('Create Account');
    expect(screen.getByTestId('signin-link')).toHaveTextContent('Already have an account? Sign in');
  });

  test('Switch back to SignIn route', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    fireEvent.click(screen.getByTestId('signup-link'));
    fireEvent.click(screen.getByTestId('login'));
  });

  test('Signup with test user', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));
    fireEvent.click(screen.getByTestId('signup-link'));

    const nameInput = screen.getByTestId('name-input');
    expect(nameInput).toHaveTextContent('');
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Test' } });
    expect(nameInput.value).toBe('Test');

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toHaveTextContent('');
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'Test@gmail.com' } });
    expect(emailInput.value).toBe('Test@gmail.com');

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toHaveTextContent('');
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'Test' } });
    expect(passwordInput.value).toBe('Test');

    const teacherBox = screen.getByTestId('teacher-box');
    expect(teacherBox.checked).toBe(false);
    fireEvent.click(teacherBox);
    expect(teacherBox.checked).toBe(true);
  });

  test('Signin Attempt with an existing user', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('login'));

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toHaveTextContent('');
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'Test@gmail.com' } });
    expect(emailInput.value).toBe('Test@gmail.com');

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toHaveTextContent('');
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'Test' } });
    expect(passwordInput.value).toBe('Test');

    const teacherBox = screen.getByTestId('teacher-box');
    expect(teacherBox.checked).toBe(false);
    fireEvent.click(teacherBox);
    expect(teacherBox.checked).toBe(true);

    fireEvent.click(screen.getByTestId('signin-button'));
    expect(screen.getByTestId('teacher-page'));
  });
});

// describe('Render Student View', () => {
//   test('Student Profile', () => {
//     render(<App />);
//     expect(screen.getByTestId('student-page'));
//   });
// });
