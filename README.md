# Google forms Clone

## About:

This project is a frontend clone of Google Forms

## Technologies used

- React JS
- Redux
- Material UI
- Netlify

## Demo

Click [here](https://62a231fa8fbef00008d28f38--willowy-youtiao-2aa222.netlify.app/) to view the demo

## Structure

- Design of redux store

```
state: {
    about: {
        name: string,
        description: string,
    }
    questions = [
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
                specific: [{
                    type: string,
                    isChecked: bool
                }],
            },
            linearScale: {
                label1: string,
                label2: string,
                range1: string,
                range2: string,
            }
        }
    }]
}
```
