Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:\Users\ADMIN\OneDrive\Documents\Desktop\ggs utilities\frontend\public\Untitled design (3).png')
Write-Host "Original: $($bmp.Width)x$($bmp.Height)"
$bmp2 = [System.Drawing.Bitmap]::FromFile('C:\Users\ADMIN\OneDrive\Documents\Desktop\ggs utilities\frontend\public\favicon-symbol.png')
Write-Host "Cropped: $($bmp2.Width)x$($bmp2.Height)"
$bmp.Dispose()
$bmp2.Dispose()
