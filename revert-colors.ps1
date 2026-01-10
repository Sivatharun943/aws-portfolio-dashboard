# Revert CSS colors to original
# Run this script if you don't like the new color scheme

Write-Host "Reverting CSS files to original colors..." -ForegroundColor Yellow

$cssFiles = @("base.css", "components.css", "layout.css", "project.css", "theme.css")

foreach ($file in $cssFiles) {
    $backupPath = "public\css\backup\$file"
    $targetPath = "public\css\$file"
    
    if (Test-Path $backupPath) {
        Copy-Item $backupPath -Destination $targetPath -Force
        Write-Host "✓ Reverted: $file" -ForegroundColor Green
    } else {
        Write-Host "✗ Backup not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nColors reverted to original!" -ForegroundColor Green
