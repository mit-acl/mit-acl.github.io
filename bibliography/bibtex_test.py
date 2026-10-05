#!/usr/bin/env python

import sys
import bibtexparser

infile = 'ACL_Publications.bib'

try:
    with open(infile) as READ:
        data = READ.read()
    lib = bibtexparser.parse_string(data)
    if len(lib.failed_blocks) > 0:
        errors = True
        for block in lib.failed_blocks:
            print("Probably a duplicate:")
            print(block.raw)
    else:
        errors = False
except Exception as e:
    errors = False
    print(type(e))
    print(e)

if errors:
    print('something is wrong!')
    sys.exit(1)
else:
    print('looks good!')
