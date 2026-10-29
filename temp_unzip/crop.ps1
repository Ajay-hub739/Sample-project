Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:\Users\ADMIN\OneDrive\Documents\Desktop\ggs utilities\frontend\public\Untitled design (3).png')
$height = $bmp.Height
$width = $bmp.Width
# We assume the symbol is on the left and is roughly square.
$rect = New-Object System.Drawing.Rectangle(0, 0, $height, $height)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$cropped.Save('C:\Users\ADMIN\OneDrive\Documents\Desktop\ggs utilities\frontend\public\favicon-symbol.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$cropped.Dispose()
