#!/bin/python3

import json
from datetime import datetime

from feedgen.feed import FeedGenerator
# https://feedgen.kiesow.be/

ISOSTR = '%Y-%m-%dT%H:%M%z'

feed = FeedGenerator()

# define feed
feed.id('https://orangestar.dev/')
feed.title('Articles by Orangestar')
feed.author( {'name':'Orangestar','email':'orangestar@cats4gold.net'} )
feed.link( href='https://orangestar.dev/', rel='alternate' )
feed.logo('https://orangestar.dev/starvatar.png')
feed.subtitle('Sometimes I write stuff.')
feed.language('en')
feed.rights('All text licensed CC BY-SA 4.0')

counter = 0

with open('updates.json') as file:
    updates = json.load(file)
    for update in updates:
        entry = feed.add_entry()
        entry.id('https://orangestar.dev/articles/' + update['id'])
        entry.title(update['title'])
        entry.link(href='https://orangestar.dev/articles/' + update['link'])
        
        entry.description(update['description'], isSummary=True)
        
        entry.published(datetime.strptime(update['pubdate'], ISOSTR))
        
        if 'updated' in update:
            entry.updated(datetime.strptime(update['update'], ISOSTR))
        else:
            entry.updated(datetime.strptime(update['pubdate'], ISOSTR))
        
        counter += 1
        
        if counter == 20:
            break

# generate feeds
feed.link( href='https://orangestar.dev/feed/atom.xml', rel='self' )
feed.atom_file('atom.xml', pretty=True)
feed.link( href='https://orangestar.dev/feed/rss.xml', rel='self' )
feed.rss_file('rss.xml')