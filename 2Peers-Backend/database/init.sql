DROP TABLE IF EXISTS subjects CASCADE;
DROP TABLE IF EXISTS teachers CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS classes CASCADE;
DROP TABLE IF EXISTS classMembers CASCADE;
DROP TABLE IF EXISTS studentMessages CASCADE;
DROP TABLE IF EXISTS teacherMessages CASCADE;

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name TEXT
);

INSERT INTO subjects (name) VALUES ('MATHHHHH');

CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    email TEXT, 
    profilePic Text, 
    subject int, 
    encryptedPassword TEXT,
    archived BOOLEAN,
    FOREIGN KEY (subject) REFERENCES subjects(id) ON DELETE CASCADE
);

INSERT INTO teachers (name, email, profilePic, subject, encryptedPassword, archived)
VALUES ('math teacher', 'math@email.com', '#', 1, 'password', FALSE);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    email TEXT, 
    profilePic Text, 
    encryptedPassword TEXT,
    archived BOOLEAN
);

CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    teacher_id int,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE CASCADE,
    classcode TEXT
);

CREATE TABLE classMembers (
    id SERIAL PRIMARY KEY,
    student int,
    selfRating int,
    peerRating int,
    FOREIGN KEY (student) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE studentMessages (
    id SERIAL PRIMARY KEY,
    student int,
    class int, 
    message TEXT,
    messageRating int, 
    date TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (student) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (class) REFERENCES classes(id) ON DELETE CASCADE
);

CREATE TABLE teacherMessages (
    id SERIAL PRIMARY KEY,
    teacher int,
    class int, 
    message TEXT,
    messageRating int, 
    date TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (teacher) REFERENCES teachers(id) ON DELETE CASCADE,
    FOREIGN KEY (class) REFERENCES classes(id) ON DELETE CASCADE
);

INSERT INTO subjects (name) VALUES ('math');
INSERT INTO teachers (name, email, profilePic, subject, encryptedPassword, archived) VALUES ('ms', 'ms@email.com', '#', 1, 'oneWord', FALSE);
INSERT INTO students (name, email, profilePic, encryptedPassword, archived) VALUES ('izzy', 'iz@email.com', '#', 'words', FALSE);
INSERT INTO classes (classCode, teacher) VALUES ('abc123', 1);
INSERT INTO classMembers (student, selfRating, peerRating) VALUES (1, 5, 3);
INSERT INTO studentMessages (student, class, message, messageRating, date) VALUES (1, 1, 'Some Message', 3, now());
INSERT INTO teacherMessages (teacher, class, message, messageRating, date) VALUES (1, 1, 'Some Message', 3, now());
