$path = 'C:\Users\FilmWaker\Desktop\SitoFilmWaker\portfoliopage\portfolio.html'
$txt = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$txt = $txt.Replace("Portfolio " + [char]0x2013 + " Our Work | Filmwaker Studio", "Portfolio " + [char]0x2013 + " I Nostri Lavori | Filmwaker Studio")
$txt = $txt.Replace("Explore Filmwaker" + [char]0x2019 + "s case studies. Discover the creative process behind our commercials, CGI projects and virtual productions.", "Esplora i lavori di Filmwaker. Il processo creativo dietro spot, CGI e produzioni virtuali.")
[System.IO.File]::WriteAllText($path, $txt, [System.Text.Encoding]::UTF8)
Write-Host 'OK'
