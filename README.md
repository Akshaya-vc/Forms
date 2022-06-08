# Google forms Clone

## About:

This project is a frontend clone of Google Forms

## Technologies used

- React JS
- Redux
- Material UI
- Netlify

## Demo

Click [here]() to view the demo

## Structure

- File
- Design of redux store

```
about: {
    name: string,
    description: string,
}
questionList = [
    {id: int,
     title: string,
     type: string,
     isActive: bool,
     isRequired: bool,
     body: {
         single: [strings],
         multiple: {
             row: [strings],
             column: [strings],
         },
         fileupload: {
             size: string,
             number: int,
             isSpecific: bool,
             type: [int],
         },
         linearScale: {
            label1: string,
            label2: string,
            range1: int,
            range2: int,
         }
     }
}]
```

- Designing the Actions

```
{   type: 'UPDATE_NAME', 
    payload: {
        about.name: string
    }
}
{   type: 'UPDATE_DESCRIPTION', 
    payload: {
        about.description: string
    }
}
{   type: 'DUPLICATE_QUESTION', 
    payload: {
        id
    }
}
{   type: 'DELETE_QUESTION', 
    payload: {
        id
    }
}
{   type: 'ADD_QUESTION', 
    payload: {
        id
    }
}
BODY
{   type: 'UPDATE_TITLE', 
    payload: {
        id
        questionList[i].title: string
    }
}
{   type: 'UPDATE_TYPE', 
    payload: {
        id
        questionList[i].type: string
    }
}
{   type: 'TOGGLE_ACTIVE', 
    payload: {
       id
    }
}
{   type: 'TOGGLE_REQUIRED', 
    payload: {
        id
    }
}
{   type: 'ADD_SINGLE_OPTION', 
    payload: {
        id
        option: string
    }
}
{   type: 'ADD_MULTIPLE_OPTION', 
    payload: {
        id
        option: string
        dimension: bool
    }
}
```
- Desiging Reducers
```
- About 
- Questions
    - add, delete, duplicate, updatetitle, updatetype
- Body
    - addoption, deleteoption, toggleactive, togglerequired, 
```