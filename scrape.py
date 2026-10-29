import urllib.request
import re

url = 'https://ggsutilities.com'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'src=[\'"]([^\'"]+)[\'"]', html)
    for m in matches:
        if '.png' in m.lower():
            print('Found image URL:', m)
except Exception as e:
    print('Error:', e)
