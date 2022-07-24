script
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
  type="text/javascript">
</script>

# Lissajous Curve Generator
This program uses p5.js, a javascript library for graphics, in order to parametrically generate lissajou curves.

## What is a Lissajous Curve?
Lissajous curves, also knows as Bowditch curves, are parametrically defined according to the the parametric equation $$x = A \sin(at + \delta), y = B \sin(bt)$$.

## How to use the Website?
The values of $$A$$ and $$B$$ are chosen automatically based on the size of the window. If the window is resized, refresh the page to change the values of $$A$$ and $$B$$.

The value of $$\delta$$ cannot be changed and will always be set to $$0$$.

The values of $$a$$ and $$b$$ are based on the relative position of the user's mouse on the window area. Move the mouse in order to change the values of $$a$$ and $$b$$.

