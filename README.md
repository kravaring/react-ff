# `react-ff`

Feature folders is an approach for structuring components in React.
It is based on creating a folder which contains all the stuff needed for component (including child components). You expose only needed components (or methods) through the `index` file.

## Usage:

```
npx react-ff create <ComponentName> [destination] [flags]
npx react-ff create User
npx react-ff create User ./routes/Main
npx react-ff create User ./routes/Main -s -t
```

### Defaults:

`react-ff` uses Typescript as a default language. You can specify to use Javascript by providing `-J` or `--javascript` flag

```
npx react-ff create User -J
npx react-ff create User -javascript
```

#### Tests

After including `-t` or `--test` optional flag test file will be added. Test prefix could be provided as well (`test` is default).  

```
npx react-ff create User -t
```
Additional file User.test.tsx with boilerplate will be added to folder User.

```
npx react-ff create User -t spec
```
Additional file User.spec.tsx with boilerplate will be added to folder User.

#### Styles

After including `-s` or `--style` optional flag style file will be added. Style type could be provided as well (`css` is default). 
```
npx react-ff create User -s scss
```

#### Function vs Class components

For component generation `react-ff` uses function approach (without any default state). 
This is the content of the newly generated Search component:

```
import React, { FunctionComponent } from 'react';

interface SearchProps {
};

export const Search: FunctionComponent<SearchProps> = ({}): JSX.Element => {
    return (
        <div></div>
    );
};

```
If you prefer Class components (or traditional way of providing state) you can add `-C` or `--class` flag.
So the following command:

```
npx react-ff create Search -C
```

will produce such content

```
import React, { Component } from 'react';

interface SearchState {
};

interface SearchProps {
};

export class Search extends Component<SearchProps, SearchState> {
    state = {
    };

    render(): JSX.Element {
        return (
            <div></div>
        );
    }
};
```

### Supported platform:
Node v10.0.0
