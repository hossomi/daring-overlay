# *Daring* overlay set

A [Stream Elements](https://streamelements.com/) overlay set.

## Components

- **Sidebar widget**: Display your stream chat and a short schedule.

## Usage

To import widgets in Stream Elements, create a custom widget and replace the HTML, CSS, JS and fields contents with the overlay widget. Skip parts that are tagged as "local only".

:information_source: The Stream Elements chat widget for Twitch is slightly misaligned. Use the following custom CSS in your broadcasting software to fix it:

```css
.chat-theme {
  padding: 5px !important;
}

.chat-line .badge {
  vertical-align: middle;
}
```