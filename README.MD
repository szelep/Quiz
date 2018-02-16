# Actors like you or what type of pizza are you

Simple script, look at the bottom if you want to know what is this.

## Usage

At first you have to specify actor`s name and his picture in below functions.
It have to be in same order.

```
getType()
getImage()
```

Then set questions and answers in order to upper settings.

### Example

```
case '0' : return 'Ryan Gosling';
case '1' : return 'Pierce Brosnan';
case '2' : return 'Goerge Clooney';
case '3' : return 'Leonardo DiCaprio';
case '4' : return 'Harrison Ford';
```

There must be as many answers as actors.
Questions for male and female should be different (or not? your call).

And yes, this part should be written otherwise - but it had to be quick...

```
{
	title: 'What is your favourite movie?',
	ans: ['Musical','Action','Drama','Horror','Sci-Fi']
}
```

^^ Index 0 is Ryan Gosling, Index 1 is Pierce Brosnan etc.

### Similar things 

[Filmweb](http://www.filmweb.pl/quiz/Jakim+typem+widza+jeste%C5%9B-262)