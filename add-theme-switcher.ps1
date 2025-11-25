# PowerShell script to add theme switcher to HTML files

$files = @(
    "index.html",
    "loops.html",
    "implementation-no-hubspot.html",
    "implementation-hubspot.html"
)

foreach ($file in $files) {
    Write-Host "Processing $file..."
    
    # Read the file
    $content = Get-Content $file -Raw
    
    # Add theme-switcher.css link before </head>
    if ($content -notmatch 'theme-switcher.css') {
        $content = $content -replace '(\s*</head>)', "`n    <link rel=`"stylesheet`" href=`"/src/css/theme-switcher.css`">`$1"
    }
    
    # Add theme switcher HTML after <body>
    if ($content -notmatch 'theme-switcher-toggle') {
        $themeSwitcherHTML = @"
`n    <!-- Theme Switcher -->
    <div class="theme-switcher-toggle" id="theme-toggle">
        <span class="theme-icon">🌓</span>
    </div>
    <div class="theme-switcher-panel" id="theme-panel">
        <h3>Choose Theme</h3>
        <button class="theme-option active" data-theme="light">☀️ Light Mode</button>
        <button class="theme-option" data-theme="dark">🌙 Dark Mode</button>
    </div>
"@
        $content = $content -replace '(<body>)', "`$1$themeSwitcherHTML"
    }
    
    # Add theme-switcher.js before </body>
    if ($content -notmatch 'theme-switcher.js') {
        $content = $content -replace '(\s*</body>)', "`n    <script src=`"/src/js/theme-switcher.js`"></script>`$1"
    }
    
    # Write back to file
    $content | Set-Content $file -NoNewline
    
    Write-Host "✓ Updated $file"
}

Write-Host "`nAll files updated successfully!"
