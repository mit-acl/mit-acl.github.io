#!/bin/bash

set -e  # Exit on error

# Variables
REPO_DIR="$(pwd)"  # Path to your local repository
NEW_BIB_FILE="$REPO_DIR/update.bib"  # Path to the new BibTeX file
# Check if the new BibTeX file exists
if [ ! -f "$NEW_BIB_FILE" ]; then
    echo "New BibTeX file not found: $NEW_BIB_FILE"
    exit 1
fi
TARGET_BIB="$REPO_DIR/ACL_Publications.bib"

read -p "Enter your Kerberos: " KERB
BRANCH_NAME="update-bib-${KERB}-$(date +%Y%m%d)"
COMMIT_MSG="Update bibliography with new entries from $KERB"

# Step 1: Update or append new entries
echo "Updating or appending entries in $TARGET_BIB"

# Use a Python script to handle the merging of BibTeX files
python "$REPO_DIR/merge_pubs.py" "$NEW_BIB_FILE" "$TARGET_BIB"

# Step 1.5: Run bibtex_test.py and check its exit code
echo "Running bibtex_test.py to validate the updated BibTeX file"
if ! python "$REPO_DIR/bibtex_test.py" "$TARGET_BIB"; then
    echo "Error: bibtex_test.py reported an issue with the updated BibTeX file."
    exit 1
fi

# Step 2: Git ops
# git checkout main
# git pull origin main
# git checkout -b "$BRANCH_NAME"
# git add "$TARGET_BIB"
# git commit -m "$COMMIT_MSG"
# git push origin "$BRANCH_NAME"

# Step 3: Create PR
gh pr create --title "$COMMIT_MSG" --body "This PR adds new BibTeX entries from $KERB." --base main --head "$BRANCH_NAME"

echo "Pull request created!"