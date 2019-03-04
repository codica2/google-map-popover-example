<h1 align="center">Google Map Custom Popover</h1>

## Description

This is an example of `Custom Popover` usage with [React Google Maps](https://github.com/tomchentw/react-google-maps). It may include any content: videos, gifs, images, text etc. Also, it could be customized with CSS classes.

<p align="center"> 
 <img width="100%" src="/public/img/popovers_example.gif" >
</p>

## Examples

```JSX
<Popover width={300} height={400} preferredPosition="left" trigger={<Marker />}>
  <div>Popover content here</div>
</Popover>
```

```JSX
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
Defaults to `bottom`.

##### `trigger`

```js
trigger?: HTMLElement
```

An HTML element that triggers the popover appearing.
