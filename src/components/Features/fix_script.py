import re
import os

def fix_prefix(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Undo lpf- on ri- icons
    content = content.replace('lpf-ri-', 'ri-')
    
    # Also handle some common cases that shouldn't have been prefixed
    # Like 'var(--primary)' in style attributes which might have been missed or hit? 
    # No, script only touched className="..."

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_prefix(r'd:\ENGLORAY\Landing page\landingpages\src\components\Features\Features.jsx')
fix_prefix(r'd:\ENGLORAY\Landing page\landingpages\src\components\Features\Features.css')
