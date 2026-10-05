import bibtexparser
import argparse

# Parse command-line arguments
parser = argparse.ArgumentParser(description="Merge BibTeX files.")
parser.add_argument("new_bib_file", help="Path to the new BibTeX file.")
parser.add_argument("target_bib_file", help="Path to the target BibTeX file.")
args = parser.parse_args()

# Load the new BibTeX file
with open(args.new_bib_file) as new_bib_file:
    new_bib = bibtexparser.load(new_bib_file)

# Load the target BibTeX file
try:
    with open(args.target_bib_file) as target_bib_file:
        target_bib = bibtexparser.load(target_bib_file)
except FileNotFoundError:
    target_bib = bibtexparser.bibdatabase.BibDatabase()

# Create a dictionary of existing entries for quick lookup
existing_entries = {entry['ID']: entry for entry in target_bib.entries}

# Update or add entries
for entry in new_bib.entries:
    existing_entries[entry['ID']] = entry

# Write the updated BibTeX file
target_bib.entries = list(existing_entries.values())
with open(args.target_bib_file, "w") as target_bib_file:
    bibtexparser.dump(target_bib, target_bib_file)

print(f"Updated {args.target_bib_file} with entries from {args.new_bib_file}")
