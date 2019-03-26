<h1 align="center">Google Map Custom Popover</h1>
<p align="center">
  <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/badge/Packages-NPM-%23CB3837.svg?logo=npm&link=https://www.npmjs.com"></a>
  <a href="https://webpack.js.org/" target="_blank"><img src="https://img.shields.io/badge/Bundler-Webpack-%238DD6F9.svg?logo=Webpack"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/View-React-blue.svg?logo=React"></a>
</p>

## Description

This is an example of `Custom Popover` usage with [React Google Maps](https://github.com/tomchentw/react-google-maps). It may include any content: videos, gifs, images, text etc. Also, it could be customized with CSS classes.

<p align="center"> 
 <img width="100%" src="/public/img/popovers-example.gif" >
</p>

## Examples

```jsx
<Popover width={300} height={400} preferredPosition="left" trigger={<Marker />}>
  <div>Popover content here</div>
</Popover>
```

```jsx
<Popover
  width={400}
  height={350}
  preferredPosition="top-start"
  trigger={
    <MarkerWithLabel
      position={{ lat: 50.00497, lng: 36.23143 }}
      labelAnchor={new window.google.maps.Point(0, 0)}
      icon={marker}
      labelVisible={false}
      animation={window.google.maps.Animation.DROP}
    >
      <div />
    </MarkerWithLabel>
  }
>
  <div>
    <h3>Title</h3>

    <p>
      Fusce ac felis sit amet ligula pharetra condimentum. Phasellus accumsan
      cursus velit. Aenean viverra rhoncus pede. Praesent vestibulum dapibus
      nibh. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit
      dui, id egestas quam mauris ut lacus.
    </p>
  </div>
</Popover>
```

## Props

##### `width`

```js
width?: number
```

Width of popover. Defaults to `250px`.

##### `height`

```js
height?: number
```

Height of popover. Defaults to `300px`

##### `preferredPosition`

```js
preferredPosition?: string;
```

One of the accepted placement values listed in the [Popper.js documentation](https://popper.js.org/popper-documentation.html#Popper.placements).  
Your popover is going to be placed according to the value of this property.
Defaults to `right`.

##### `trigger`

```js
trigger?: HTMLElement
```

An HTML element that triggers the popover appearing.

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

The names and logos for Codica are trademarks of Codica.

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
