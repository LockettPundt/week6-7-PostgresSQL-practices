
/*
Name
Distance (in miles from HeadQuarters)
Stars (rating)
Category (type of food)
Favorite dish
Does takeout?
Last time you ate there

*/
CREATE TABLE restaurant (
    id serial primary key,
    name text,
    distance int,
    stars int,
    category text,
    favorite_dish text,
    does_takeout BOOLEAN,
    last_time_you_ate_there date,
);


INSERT INTO restaurant (name, distance, stars, category, favorite_dish, does_takeout, last_time_you_ate_there)
    VALUES ('Luckys Vegan Spot', 15, 5, 'Vegan Fast Food', 'Impossible Quarter Pounder', true, '10/07/2019'),
    ('Panahar Banladeshi Cuisine', 3, 4, 'Bangladeshi', 'Vegetable Curry', true, '09/09/2019'),
    ('Jinya Ramen', 1, 4, 'Ramen', 'Spicy Vegan Ramen', true, '01/28/2020'),
    ('Sunflower Cafe', 2.5, 3.5, 'Vegan American', '"Shrimp" tacos', true, '02/14/2020'),
    ('Desta', 3.8, 4, 'Ethiopian', 'Veggie Platter', true, '01/12/2020'),
    ('The Local', 5.2, 3, 'Bar', 'Tofu Bombay Sliders', false, '02/06/2020'),
    ('Urban Wu', 0.5, 4.5, 'Chinese', 'Mapo Tofu', false, '01/15/2020'),
    ('Manuel''s Tavern', 4, 2, 'Bar', null, false, '06/13/2018'),
    ('F.R.O.G Cantina', 5.1, 0.5, 'Mexican', null, true, '01/30/2015'),
    ('Slutty Vegan', 10, 3.7, 'Vegan Fast Food', 'Impossible Burger', true, '04/22/2019'),
    ('Basic Kitchen', 350, 3.9, 'New American', 'Vegan Summer Pasta', true, '12/28/2019'),
    ('Umi', 0.4, 5, 'Sushi', 'Everything', false, '10/15/2017'),
    ('Dulce Vegan', 8.2, 5, 'Vegan Bakery', 'Breakfast Sandwich', '2020/02/10', true),
    ('Yeah Burger', 4.1, 3.9, 'Burgers', 'Beyond Quarter Pounder', true, '2020/02/13')
    ;


CREATE TABLE reviewer (
    id serial PRIMARY KEY,
    name text,
    email VARCHAR,
    karma int CHECK(karma >= 0 and karma <= 7)
);

CREATE TABLE review (
    id serial PRIMARY KEY,
    reviewer_id int REFERENCES reviewer(id),
    stars int CHECK(stars > 0 AND stars <= 5),
    title text,
    review text,
    restaurant_id int REFERENCES restaurant(id)
);

INSERT INTO reviewer (name, email, karma)
    VALUES ('John Lyden', 'PIL@imagelimited.co', 1),
    ('Lockett Pundt', 'lockettpundt@photonmail.com', 7),
    ('Tommy TwoTone', 'foragoodtimecall@8675309.com', 5),
    ('Colonel Kurtz', 'apocalypsenow@hotmail.com', 2),
    ('Sam the Sham', 'woolybully@wooly.com', 4),
    ('I hate everything', 'neverSatisfied@whocares.fu', 0);

INSERT INTO review (reviewer_id, stars, title, review, restaurant_id)
    VALUES (2, 5, 'I love this place!', 'The title says it all! This place is amazing. You have to try the breakfast
    sanwhich with the chipotle aioli. So good!', 13),
    (6, 1, 'I hate this place', 'This place is the worst shit i''ve ever had.', 9),
    (6, 1, 'worst food ever', 'This place is only second worst to my last review. i hate it naturally. worst vegan food ever',
    13),
    (6, 1, 'How is this place still OPPPEEENN???!!', 'ugh. just ugh. vegan garbage', 1),
    (6, 1, 'i barfed. i cried. i hate it', 'this place could be source the best organic cardboard in the world
    and it would taste identical to what i ate. sad!', 12),
    (6, 1, 'TOO FAR!', 'i drove 300 miles for this???! never again!', 11),
    (6, 1, 'WHere am i? oh yea this place sucks', 'just nope', 5),
    (2, 5, 'Get the Veggie Platter!', 'Great vegan options and the veggie platter is amazing. 5 stars easily!', 5),
    (2, 1, 'wow this is bad....', 'I''m not sure how this place is still open after all these years. Came here with
    my wife and it has to be the worst mexican food I''ve ever had. I don''t recommend anything here.', 9),
    (4, 5, 'It''s so hot. the horror. the horror.', 'I''ve succumbed to the beast of madness but the vegetable curry
    is spot on.', 2),
    (2, 5, 'Amazing veggie curry', 'One of my all time favorite spots in ATL. great vegan options and the veggie
    curry is amazing.', 2),
    (5, 2, 'wooly bully wooly bully wooly bully', 'wooly bullyyyyyyyyyyy but some decent vegan options', 3),
    (1, 4, 'Ramen is no bollocks', 'very good ramen and even a vegan ramen!! i will be back', 3),
    (3, 4, 'I found a number on a wall', 'So i gave it a call for a ''good time''. oh, and the impossible
    burger was amazing.', 10);