CREATE DATABASE childcare;


CREATE TABLE nanny(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  photo VARCHAR(500) NOT NULL UNIQUE,
  city VARCHAR(200),
  tel VARCHAR(30) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  min_child_age INT,
  max_child_age INT,
  filter VARCHAR(500),
  bio TEXT
);


INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, min_child_age, max_child_age, filter, bio) 
  VALUES 
  (1, 'Sophie', 'Smith', 'https://childcareapp.s3.eu-west-2.amazonaws.com/image_1.jpg', 'London', '01234567890', 'sophie.smith@gmail.com', 0, 16, 'newborn experience', 'I am 44 years old and married with three children between the ages of nine and fifteen.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, min_child_age, max_child_age, filter, bio) 
  VALUES 
  (2, 'Simon', 'Schneider', 'https://childcareapp.s3.eu-west-2.amazonaws.com/image_2.jpg', 'London', '04632056320', 'simon.schneider@gmail.com', 0, 16,'newborn experience', 'I enjoy caring for children and am able to provide reliable, calming support to families leading frantic lives.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, min_child_age, max_child_age, filter, bio) 
  VALUES 
  (3, 'Sarah', 'Sanderson', 'https://childcareapp.s3.eu-west-2.amazonaws.com/image_3.jpg', 'London','0894753908', 'sarah.sanderson@gmail.com', 0, 4,'night nanny', 'I have recently just had my first baby ,a little boy so I am currently on maternity leave until september 2020. ');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, min_child_age, max_child_age, filter, bio) 
  VALUES 
  (4, 'Solomon', 'Snell', 'https://childcareapp.s3.eu-west-2.amazonaws.com/image_4.jpg', 'London', '0987654321', 'solomon.snell@gmail.com', 5, 16,'qualified first aider', 'I am bubbly, patient and very organised nanny. I provide a warm, friendly and fun environment for all children In my care.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, min_child_age, max_child_age, filter, bio) 
  VALUES 
  (5, 'Susanna', 'Sullivan', 'https://childcareapp.s3.eu-west-2.amazonaws.com/image_5.jpg', 'Manchester', '03648592517', 'susanna.sullivan@gmail.com', 5, 12,'works with twins', 'I have been working with children for almost 10 years now. ');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, min_child_age, max_child_age, filter, bio) 
  VALUES 
  (6, 'Sandra', 'Saikonen', 'https://childcareapp.s3.eu-west-2.amazonaws.com/image_6.jpg', 'Manchester', '04536278498', 'ssandra.saikonen@gmail.com', 0, 16,'available immediately', 'I am a mum of my own two grown up children and also a step mum to three grown up children.');
ALTER SEQUENCE nanny_id_seq RESTART WITH 7 INCREMENT BY 1;