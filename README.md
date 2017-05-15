# MakersBnB

https://github.com/makersacademy/course/tree/master/makersbnb

We would like a web application that allows users to list spaces they have available, and to hire spaces for the night.

### User Stories

```
User story 1
As a user,
So that I can list my space for rent and hire spaces
I would like to be able to sign up with a username for MakersBnB

User story 2
As a user,
So that I can list my space for rent
I would like to be able to list a new space

User story 3
As a user,
So I can lure clients in to my basement
I would like to be able to name my space, description & price

User story 4
As a user,
So I can have a place to crash after an epic night out in Hull
I would like to hire a space for one night
```

### Extra User Stories
```
User story 5
As a user,
So I can receive diversified streams of income
I would like to be able to list multiple spaces

```

### Extra functionality
```
Add password confirmation to signup
```

### Headline specifications

# Basic functionality:
- Any signed-up user can list a new space.
- Users should be able to name their space, provide a short description of the space, and a price per night.
- Any signed-up user can request to hire any space for one night, without owner approval

# Additional functionality
- Booking should be approved by the user that owns that space (extension of basic functionality).
- Users can list multiple spaces.
- Users should be able to offer a range of dates where their space is available
- Nights for which a space has already been booked should not be available for users to book that space.
- Until a user has confirmed a booking request, that space can still be booked for that night.

### Nice-to-haves

- Users should receive an email whenever one of the following happens:
 - They sign up
 - They create a
 - They update a space
 - A user requests to book their space
 - They confirm a request
 - They request to book a space
 - Their request to book a space is confirmed
 - Their request to book a space is denied
- Users should receive a text message to a provided number whenever one of the following happens:
 - A user requests to book their space
 - Their request to book a space is confirmed
 - Their request to book a space is denied
- A ‘chat’ functionality once a space has been booked, allowing users whose space-booking request has been confirmed to chat with the user that owns that space
- Basic payment implementation though Stripe.

### Mockups

Mockups for MakersBnB are available [here](https://github.com/makersacademy/course/blob/master/makersbnb/makers_bnb_images/MakersBnB_mockups.pdf).
