# TOP Project: Admin Dashboard

https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-admin-dashboard

[Live View](https://kupa-kupa.github.io/admin-dashboard/) - https://kupa-kupa.github.io/admin-dashboard/


## Learnt About:

### hashchange event

#### What was I trying to do?

I was trying to change the style of the side bar menu items after they were clicked. Since they are contained in `<a>` tags with href values of `href="#value"` I could add an event listener for the hashchange and then check if the value appeared in the url with:

`window.location.href.indexOf("#value") !== -1`

I added a styling class if the #value was found in the url and removed it if the #value wasn't found, to make sure the style only appeared on the last link that was clicked.

https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event

