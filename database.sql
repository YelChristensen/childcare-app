CREATE DATABASE childcare;

CREATE TABLE nanny(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  photo VARCHAR(500) NOT NULL UNIQUE,
  city VARCHAR(200),
  tel VARCHAR(30)NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  filter VARCHAR(500),
  bio TEXT
);


INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, filter, bio) 
  VALUES 
  (1, 'Sophie', 'Smith', 'image_1.jpg', 'London', '01234567890', 'sophie.smith@gmail.com', 'newborn experience', 'I am 44 years old and married with three children between the ages of nine and fifteen. I am NNEB Qualified and Level 3 SEN Teaching Assistant. Available for permanent part-time work from September. Please contact me to discuss if you are interested. All my children are autistic and my eldest attends a special needs school. In my spare time I enjoy reading, arts and crafts, swimming and cooking with my children. I would love to find a job looking after autistic children.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, filter, bio) 
  VALUES 
  (2, 'Simon', 'Schneider', 'image_2.jpg', 'London', '04632056320', 'simon.schneider@gmail.com', 'newborn experience', 'I enjoy caring for children and am able to provide reliable, calming support to families leading frantic lives.We live in a highly competitive world and our children deserve the best support to reach their full potential .However, childhood is brief so I also believe plenty of fun is essential. I support a positive learning environment that provides choice, independence and experience while also making sure children feel well cared for and secure. I provide informative written and visual observations to share childrens progress with parents and carers.I am presently teaching in a preschool class at a private nursery but can also provide a bespoke Nanny service .');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, filter, bio) 
  VALUES 
  (3, 'Sarah', 'Sanderson', 'image_3.jpg', 'London','08947539084', 'sarah.sanderson@gmail.com', 'night nanny', 'I have recently just had my first baby ,a little boy so I am currently on maternity leave until september 2020. I have a very quiet and patient nature and I am extremely hardworking, punctual and reliable. I love working with children and it is a pleasure to watch them grow and develop .I always go above and beyond my job role to ensure the best for the children in my care. I have worked in childcare for the past 15 years and it is the only job role for me. Now that I am a parent myself, I feel that I can bring a new perspective to the role as I look for my next nanny family.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, filter, bio) 
  VALUES 
  (4, 'Solomon', 'Snell', 'image_4.jpg', 'London', '0987654321', 'solomon.snell@gmail.com', 'qualified first aider', 'I am bubbly, patient and very organised nanny. I provide a warm, friendly and fun environment for all children In my care. I plan and organise activities to suit all ages.
I feel it is important to be active and engaging with the children. When in my care I plan the week out by taking the children to classes/parks and soft plays to encourage socialisation and development. I follow early learning guidelines and aid children in their physical, mental and emotional developments.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, filter, bio) 
  VALUES 
  (5, 'Susanna', 'Sullivan', 'image_5.jpg', 'Manchester', '03648592517', 'susanna.sullivan@gmail.com', 'works with twins', 'I have been working with children for almost 10 years now. I have worked in nurseries / preschools and also as a nanny. I have all my childcare qualifications. I have worked with children from the ages 0- 10 year olds.');
INSERT INTO nanny 
  (id, first_name, last_name, photo, city, tel, email, filter, bio) 
  VALUES 
  (6, 'Sandra', 'Saikonen', 'image_6.jpg', 'Manchester', '04536278498', 'ssandra.saikonen@gmail.com', 'available immediately', 'I am a mum of my own two grown up children and also a step mum to three grown up children. I have two lovely grandsons aged eight and six years old, with whom I enjoy spending quality time with. Doing lots of activities such as swimming, trips to the park or the farm and we especially enjoy picnics.
I am a friendly, creative and fun person who loves looking after and caring for children, which I have done since leaving college (35 years ) and I am very family orientated. I enjoy cooking and I love going for country walks with my husband which keeps me fit. I have a full driving licence and have my own car.
I am a non smoker.');
ALTER SEQUENCE nanny_id_seq RESTART WITH 7 INCREMENT BY 1;