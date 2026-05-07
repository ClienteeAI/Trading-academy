import re

with open('c:/Users/pleva/OneDrive/Desktop/Antigravity/trading academy showcase web page/src/data/blogPostsData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if re.match(r'^\s*`$', line):
        # Look at the next few lines
        next_lines = "".join(lines[i+1:i+3])
        if next_lines.count('}') < 2:
            # Check if it's the very last article
            if "forex-trading-basics" not in "".join(lines[i-20:i]):
                 print(f"Missing brace near line {i+1}: {line.strip()}")
                 print(f"Next lines: {next_lines.strip()}")
