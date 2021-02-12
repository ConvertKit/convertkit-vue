<div align="center">
  <h1>ConvertKit Vue</h1>
  <img src="https://raw.githubusercontent.com/ConvertKit/convertkit-vue/main/static/convertkit-vue.png" alt="ConvertKit Vue Logo" width="200" height="235" />
  <p>Easily plug convertkit forms to your Vue websites.</p>
</div>



Using React? Try [ConvertKit-React](https://npm.im/convertkit-react)
## Setup

For Vue 3:

```sh
yarn add convertkit-vue@next
```

For Vue 2:

```sh
yarn add convertkit-vue
```

## Demos

#### Vue 3
- [Using different templates](https://codesandbox.io/s/cranky-stallman-ejvwp)

#### Vue 2
- [Using different templates](https://codesandbox.io/s/xenodochial-wiles-k8kk9)

## Usage

```vue
<template>
  <ConvertKitForm formId={1234567} />
</template>

<script>
import ConvertKitForm from 'convertkit-vue'

export default {
  name: "My Vue App",
  components: { ConvertKitForm }
}
</script>
```

To get your form id, go to the form you have created on convertkit and choose the HTML embed option.

![form embed screenshot](https://raw.githubusercontent.com/ConvertKit/convertkit-react/main/static/embed-screenshot.png)

Here you'll pick out your form id from the form action in the embed code:

#### Passing custom configuration options

```vue
<template>
  <ConvertKitForm v-bind="config" />
</template>
<script>
import ConvertKitForm from 'convertkit-vue'

export default {
  name: "My Vue App",
  components: { ConvertKitForm },
  data() {
    return {
      config: {
        formId: 1234567,
        template: 'mills',
        emailPlaceholder: 'Enter an email address',
        submitText: 'Sign up'
      }
    }
  }
}
</script>
```

#### Configuration Options

|   **Property**   |   **Type**   |      **Default**     |    **Description**   |
| ---------------- | ------------ | -------------------- | -------------------- |
|     format       |   `String`   |        inline        | inline, modal, slidein, sticky   |
|     template     |   `String`   |       minimal        | _Templates in the app + minimal_ |
|    submitText    |   `String`   |      Subscribe       | Text shown in submit button      |
|    headingText   |   `String`   |  Varies per template | Text shown in heading   |
|  disclaimerText  |   `String`   |  Varies per template | Text shown in disclaimer area    |
| emailPlaceholder |   `String`   |      Your email      | Placeholder for email input      |
| namePlaceholder  |   `String`   |   Your first name    | Placeholder for first name input |
|    nameLabel     |   `String`   |      First name      | Custom name label                |
|    emailLabel    |   `String`   |         Email        | Custom email label               |
|    showLabels    |  `Boolean`   |        `false`       | Shows labels with form inputs or only rely on `aria-label`   |
|     hideName     |  `Boolean`   |        `false`       | Hides the name input field       |
|     newTab       |  `Boolean`   |        `false`       | Determines if form should be processed in new tab or current |
|      stack       |  `Boolean`   |        `true`        | Determines if inputs are stacked or placed inline            |
|   hideWarnings   |  `Boolean`   |        `false`       | Hide warnings that are shown due to misconfiguration         |
|   backgroundImage   |  `String`   | default on template | Use a different background image for your form |
|   backgroundOpacity   |  `Number`   |  0.8   |  Opacity here is the inverse of what is on the app which really measures transparency  |

##### Templates
The minimal template has no preconfigured styling, leaving you options to style
as desired. To get a preconfigured style, use one of the app templates
(clare, mills, rainier, powell etc) as seen on the app.

##### Content
To change the subheader (sometimes referred to as content) you may just add children
inside the `<ConvertkitForm>` component like below:

```jsx
<ConvertKitForm>
  <p>Subscribe to get our latest content by email.</p>
</ConvertKitForm>
```


## Contributing
To publish a package:

```sh
./publish X.X.X "Message about version"
```

where `X.X.X` is the version number.

