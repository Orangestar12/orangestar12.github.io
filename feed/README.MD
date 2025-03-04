# How to generate an RSS feed for this site:

1. Open updates.json
2. Add a new entry.

Most recent entries are at the top. The generator maxes out at 20 entries to prevent feeds from bloating out of proportion.

Feed entries need

| Property | Description |
| ----- | ----- |
| `id` | The UUID of the article. I recommend using the article filename minus the extension. The generator will prepend it with a URI to make the UUID more unique |
| `title` | The title of the article. |
| `link` | The URL of the article, starting at the root of the domain (so you don't need to include https://orangestar.dev/ but you do need to include /articles/ or /articles/live. |
| `description` | The description of the update. This will be the text people see on their feed reader, so keep it short and simple. The full text will be available when they click the article link. |
| `pubdate` | The publication date of *this update*. This will be formatted by `datetime.strptime()` in the same way that [the Opengraph Standard](https://ogp.me/#datetime) expects it, so you can just copy-paste it from your article. |
| `updated` | The last time *this update* was meaningfully changed. If an article was amended with new information, you should add a new entry for it. This is for if an individual entry for an update was modified due to a change, like if you published something with a mistake that got quickly corrected. If you don't include this, it will just copy `pubdate`. |

You do not need
-

3. Run generator.py

This will create two feeds, one Atom and one RSS for compatibility.
