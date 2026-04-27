import re
import os

def prefix_classes(file_path, prefix):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Prefix className="..."
    def repl_jsx(match):
        classes = match.group(1).split()
        prefixed = ' '.join([f"{prefix}{c}" for c in classes])
        return f'className="{prefixed}"'

    content = re.sub(r'className="([^"]+)"', repl_jsx, content)

    # Prefix classes in template literals className={`...`}
    def repl_jsx_template(match):
        expr = match.group(1)
        # This is trickier, but let's assume simple cases like `dot ${active ? 'active' : ''}`
        # For now, let's just handle simple strings inside template literals if they are classes
        # Actually, let's just prefix known strings.
        # But wait, the user said "without altering anything just add only the prefix"
        return match.group(0) # Keep as is for now if it's too complex, or handle specifically

    # Update CSS
    # Prefix .class selectors
    # We need to avoid prefixing .digits or .property in media queries? 
    # Usually class selectors are .name
    content_css = None
    if file_path.endswith('.css'):
        # Match .className but not .0-9 (digits) or . (dots in numbers)
        # Also avoid things like .5s or .2s in transitions
        content = re.sub(r'\.([a-zA-Z][a-zA-Z0-9_-]*)', rf'.{prefix}\1', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

prefix = "lpf-"
prefix_classes(r'd:\ENGLORAY\Landing page\landingpages\src\components\Features\Features.jsx', prefix)
prefix_classes(r'd:\ENGLORAY\Landing page\landingpages\src\components\Features\Features.css', prefix)
