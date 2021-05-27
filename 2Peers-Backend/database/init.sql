DROP TABLE IF EXISTS subjects CASCADE;
DROP TABLE IF EXISTS teachers CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS classes CASCADE;
DROP TABLE IF EXISTS classMembers CASCADE;
DROP TABLE IF EXISTS studentMessages CASCADE;
DROP TABLE IF EXISTS teacherMessages CASCADE;
DROP TABLE IF EXISTS studentRatings CASCADE;
DROP TABLE IF EXISTS teacherRatings CASCADE;

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name TEXT
);

INSERT INTO subjects (name) VALUES ('MATHHHHH');

CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    email TEXT, 
    prolfilepic Text, 
    subject int, 
    encryptedpassword TEXT,
    archived BOOLEAN,
    FOREIGN KEY (subject) REFERENCES subjects(id) ON DELETE CASCADE
);

INSERT INTO teachers (name, email, prolfilepic, subject, encryptedpassword, archived)
VALUES ('math teacher', 'math@email.com', '#', 1, 'password', FALSE);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    email TEXT, 
    prolfilepic Text, 
    encryptedpassword TEXT,
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
    class_id int,
    student int,
    selfRating int,
    peerRating int,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
    FOREIGN KEY (student) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE studentMessages (
    id SERIAL PRIMARY KEY,
    student int,
    class int, 
    message TEXT,
    date TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (student) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (class) REFERENCES classes(id) ON DELETE CASCADE
);

CREATE TABLE teacherMessages (
    id SERIAL PRIMARY KEY,
    teacher int,
    class int, 
    message TEXT,
    date TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (teacher) REFERENCES teachers(id) ON DELETE CASCADE,
    FOREIGN KEY (class) REFERENCES classes(id) ON DELETE CASCADE
);

CREATE TABLE studentRatings (
    id SERIAL PRIMARY KEY,
    raterid int,
    messageid int,
    rating int,
    FOREIGN KEY (raterid) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (messageid) REFERENCES studentMessages(id) ON DELETE CASCADE
);

CREATE TABLE teacherRatings (
    id SERIAL PRIMARY KEY,
    raterid int,
    messageid int,
    rating int,
    FOREIGN KEY (raterid) REFERENCES teachers(id) ON DELETE CASCADE,
    FOREIGN KEY (messageid) REFERENCES studentMessages(id) ON DELETE CASCADE
);

INSERT INTO subjects (name) VALUES ('math');
INSERT INTO teachers (name, email, prolfilepic, subject, encryptedpassword, archived) VALUES ('ms', 'ms@email.com', '#', 1, 'oneWord', FALSE);
INSERT INTO students (name, email, prolfilepic, encryptedpassword, archived) VALUES ('izzy', 'iz@email.com', '#', 'words', FALSE);
INSERT INTO students (name, email, prolfilepic, encryptedpassword, archived) VALUES ('jas', 'jas@email.com', '#', 'jas', FALSE);
INSERT INTO classes (classCode, teacher_id) VALUES ('abc123', 1);
INSERT INTO classMembers (student, selfRating, peerRating, class_id) VALUES (1, 5, 3, 1);
INSERT INTO studentMessages (student, class, message, date) VALUES (1, 1, 'Some Message', now());
INSERT INTO teacherMessages (teacher, class, message, date) VALUES (1, 1, 'Some Message', now());
INSERT INTO studentRatings (raterid, messageid, rating) VALUES (2, 1, 3);
INSERT INTO teacherRatings (raterid, messageid, rating) VALUES (1, 1, 4);
