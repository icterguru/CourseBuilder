import sys

sys.path.insert(0,'C:\Users\Mokter\Dropbox\GoogleMOOC\test-cs4hs')
# Note: test-cs4hs is the name of my coursebuilder folder
sys.path.insert(0,'C:\Program Files (x86)\Google\google_appengine')
sys.path.insert(0,'C:\Program Files (x86)\Google\google_appengine\lib')
sys.path.insert(0,'C:\Program Files (x86)\Google\google_appengine\lib\jinja2-2.6')
sys.path.insert(0,'C:\Program Files (x86)\Google\google_appengine\lib\webapp2-2.5.2')
sys.path.insert(0,'C:\Program Files (x86)\Google\google_appengine\lib\webob-1.2.3')
sys.path.insert(0,'C:\Program Files (x86)\Google\google_appengine\lib\yaml\lib')

import argparse
import etl
if __name__ =='__main__':
    PARSER = argparse.ArgumentParser(add_help=False, parents=[etl.PARSER])
    etl.main(PARSER.parse_args())
