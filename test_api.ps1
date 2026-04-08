$headers = @{ 
    "Content-Type" = "application/json"
    "Authorization" = "Bearer YOUR_OPENROUTER_KEY"
}

$body = @{
    model = "google/gemini-2.0-flash-001"
    messages = @(
        @{
            role = "user"
            content = @(
                @{
                    type = "text"
                    text = "Hello, this is a test. Respond with 'READY' in JSON format: { 'status': 'READY' }"
                }
            )
        }
    )
} | ConvertTo-Json -Depth 10

try {
    Write-Host "Testing OpenRouter connection..."
    $response = Invoke-RestMethod -Uri "https://openrouter.ai/api/v1/chat/completions" -Method Post -Headers $headers -Body $body
    Write-Host "SUCCESS: OpenRouter responded."
    $response.choices[0].message.content | Write-Host
} catch {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $errText = $reader.ReadToEnd()
    Write-Host "FAILED: OpenRouter - $errText"
}
