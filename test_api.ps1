$headers = @{ "Content-Type" = "application/json" }
$body = @{
    contents = @(
        @{
            parts = @(
                @{ text = "Hello" }
            )
        }
    )
} | ConvertTo-Json -Depth 10

$tests = @("gemini-2.5-flash", "gemini-2")
foreach ($model in $tests) {
    try {
        Write-Host "Testing $model..."
        $url = "https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=AIzaSyDf23GmbrDZSBlrHs13w_FFlahkemmwMt8"
        $req = [System.Net.HttpWebRequest]::Create($url)
        $req.Method = "POST"
        $req.ContentType = "application/json"
        
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($body)
        $req.ContentLength = $bytes.Length
        $reqStream = $req.GetRequestStream()
        $reqStream.Write($bytes, 0, $bytes.Length)
        $reqStream.Close()

        $res = $req.GetResponse()
        $reader = New-Object System.IO.StreamReader($res.GetResponseStream())
        Write-Host "SUCCESS: $model responded. " $reader.ReadToEnd()
    }
    catch [System.Net.WebException] {
        $ex = $_.Exception
        $reader = New-Object System.IO.StreamReader($ex.Response.GetResponseStream())
        Write-Host "FAILED: $model - " $ex.Message " | " $reader.ReadToEnd()
    }
}
