
/*
Name
Distance (in miles from HeadQuarters)
Stars (rating)
Category (type of food)
Favorite dish
Does takeout?
Last time you ate there

*/
Create Table restaurant (
    id serial primary key,
    name text,
    distance int,
    stars int,
    category text,
    favorite_dish text,
    does_takeout text,
    last_time_you_ate_there date,
);


INSERT INTO restaurant (name, distance, stars, category, favorite_dish, does_takeout, last_time_you_ate_there)
    VALUES ('Luckys Vegan Spot', 15, 5, 'Vegan Fast Food', 'Impossible Quarter Pounder', 'Y', '10/07/2019'),
    ('Panahar Banladeshi Cuisine', 3, 4, 'Bangladeshi', 'Vegetable Curry', 'Y', '09/09/2019'),
    ('Jinya Ramen', 1, 4, 'Ramen', 'Spicy Vegan Ramen', 'Y', '01/28/2020'),
    ('Sunflower Cafe', 2.5, 3.5, 'Vegan American', '"Shrimp" tacos', 'Y', '02/14/2020'),
    ('Desta', 3.8, 4, 'Ethiopian', 'Veggie Platter', 'Y', '01/12/2020'),
    ('The Local', 5.2, 3, 'Bar', 'Tofu Bombay Sliders', 'N', '02/06/2020'),
    ('Urban Wu', 0.5, 4.5, 'Chinese', 'Mapo Tofu', 'Y', '01/15/2020'),
    ('Manuel''s Tavern', 4, 2, 'Bar', null, 'N', '06/13/2018'),
    ('F.R.O.G Cantina', 5.1, 0.5, 'Mexican', null, 'Y', '01/30/2015'),
    ('Slutty Vegan', 10, 3.7, 'Vegan Fast Food', 'Impossible Burger', 'Y', '04/22/2019'),
    ('Basic Kitchen', 350, 3.9, 'New American', 'Vegan Summer Pasta', 'Y', '12/28/2019'),
    ('Umi', 0.4, 5, 'Sushi', 'Everything', 'N', '10/15/2017')
    ;