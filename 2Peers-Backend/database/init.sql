DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS classMembers;
DROP TABLE IF EXISTS studentMessages;
DROP TABLE IF EXISTS teacherMessages;

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name TEXT
)

CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    email TEXT, 
    profile-pic Text, 
    subject int, 
    encrypted_password TEXT,
    archived BOOLEAN,
    FOREIGN KEY (subject) REFERENCES subjects(id)
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    email TEXT, 
    profile-pic Text, 
    encrypted_password TEXT,
    archived BOOLEAN
);

CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    class-code TEXT
);

CREATE TABLE classMembers (
    id SERIAL PRIMARY KEY,
    student int,
    self-rating int,
    peer-rating int,
    FOREIGN KEY (student) REFERENCES students(id)
);

CREATE TABLE studentMessages (
    id SERIAL PRIMARY KEY,
    student int,
    class int, 
    message TEXT,
    message-rating int, 
    date now(),
    FOREIGN KEY (student) REFERENCES students(id),
    FOREIGN KEY (class) REFERENCES classes(id)
);

CREATE TABLE teacherMessages (
    id SERIAL PRIMARY KEY,
    teacher int,
    class int, 
    message TEXT,
    message-rating int, 
    date now(),
    FOREIGN KEY (teacher) REFERENCES teachers(id),
    FOREIGN KEY (class) REFERENCES classes(id)
);


